"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, FileText, Trash2 } from "lucide-react";
import { api, errorMessage, BACKEND_URL } from "@/lib/api";
import {
  Button,
  Card,
  EmptyState,
  ErrorState,
  Input,
  LoadingRows,
  Select,
  Toast,
} from "@/components/ui";
import { useSubjects } from "@/lib/subjects";
import { useAuth } from "@/lib/auth";

interface Note {
  id: string;
  subjectCode: string;
  moduleNumber: number | null;
  title: string;
  fileUrl: string;
  createdAt: string;
}

export default function TeacherNotesPage() {
  const { user } = useAuth();
  const { subjects } = useSubjects();
  const [subjectCode, setSubjectCode] = useState("");
  const [moduleNumber, setModuleNumber] = useState("");
  const [title, setTitle] = useState("");
  const [classId, setClassId] = useState("");
  const [classes, setClasses] = useState<{ id: string; name: string }[]>([]);
  const [notes, setNotes] = useState<Note[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [toast, setToast] = useState("");
  const [toastKind, setToastKind] = useState<"success" | "error" | "info">("success");
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    api
      .get<{ classes: { id: string; name: string }[] }>("/classes")
      .then((res) => setClasses(res.data.classes))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (subjects.length > 0 && !subjectCode) setSubjectCode(subjects[0].code);
  }, [subjects, subjectCode]);

  async function load() {
    setLoading(true);
    setError("");
    try {
      const res = await api.get<{ notes: Note[] }>("/notes");
      setNotes(res.data.notes);
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  function notify(kind: "success" | "error" | "info", msg: string) {
    setToastKind(kind);
    setToast(msg);
    setTimeout(() => setToast(""), 5000);
  }

  async function upload() {
    const file = fileRef.current?.files?.[0];
    if (!file) {
      notify("error", "Choose a file first.");
      return;
    }
    if (!title.trim()) {
      notify("error", "Give the note a title.");
      return;
    }
    setUploading(true);
    try {
      const form = new FormData();
      form.append("file", file);
      form.append("subjectCode", subjectCode);
      if (moduleNumber) form.append("moduleNumber", moduleNumber);
      form.append("title", title.trim());
      if (classId) form.append("classId", classId);
      const res = await api.post<{ note: Note }>("/notes", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      notify(
        "success",
        `Uploaded "${res.data.note.title}" — chunked and retrievable by the AI tutor.`
      );
      setTitle("");
      if (fileRef.current) fileRef.current.value = "";
      await load();
    } catch (err) {
      notify("error", errorMessage(err));
    } finally {
      setUploading(false);
    }
  }

  async function remove(id: string) {
    try {
      await api.delete(`/notes/${id}`);
      await load();
    } catch (err) {
      notify("error", errorMessage(err));
    }
  }

  return (
    <div>
      <div className="mb-6 border-b border-hairline pb-4">
        <h1 className="font-display text-[26px] font-semibold text-ink">Notes</h1>
        <p className="mt-1 text-[13px] text-ink-muted">
          Upload module notes — they're embedded (384-dim) and served to the RAG
          tutor for {user?.name?.split(" ")[0] ?? ""}'s classes.
        </p>
      </div>

      <Card className="mb-6">
        <h2 className="font-display mb-3 text-[17px] font-semibold text-ink">
          Upload a note
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
              File (md, txt, pdf)
            </label>
            <input
              ref={fileRef}
              type="file"
              accept=".md,.txt,.pdf,.docx"
              className="w-full rounded-[2px] border border-hairline bg-paper px-3 py-2 text-[13px]"
            />
          </div>
          <div>
            <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
              Title
            </label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Module 3 — Requirements Engineering"
            />
          </div>
          <div>
            <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
              Subject
            </label>
            <Select value={subjectCode} onChange={(e) => setSubjectCode(e.target.value)}>
              {subjects.map((s) => (
                <option key={s.code} value={s.code}>
                  {s.code} — {s.name}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
              Module
            </label>
            <Select
              value={moduleNumber}
              onChange={(e) => setModuleNumber(e.target.value)}
            >
              <option value="">Unspecified</option>
              {subjects
                .find((s) => s.code === subjectCode)
                ?.modules.map((m) => (
                  <option key={m.id} value={m.moduleNumber}>
                    Module {m.moduleNumber}
                  </option>
                ))}
            </Select>
          </div>
          <div>
            <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
              Class (optional)
            </label>
            <Select value={classId} onChange={(e) => setClassId(e.target.value)}>
              <option value="">All classes</option>
              {classes.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex items-end">
            <Button onClick={upload} disabled={uploading} className="w-full">
              <Upload className="h-4 w-4" />
              {uploading ? "Embedding…" : "Upload & embed"}
            </Button>
          </div>
        </div>
      </Card>

      <h2 className="font-display mb-3 text-[17px] font-semibold text-ink">
        Your notes ({notes.length})
      </h2>
      {loading ? (
        <LoadingRows rows={3} />
      ) : error ? (
        <ErrorState message={error} onRetry={load} />
      ) : notes.length === 0 ? (
        <EmptyState
          title="Nothing uploaded yet"
          body="Upload the first module note above — it becomes tutor-answerable instantly."
        />
      ) : (
        <div className="ledger-card divide-y divide-hairline">
          {notes.map((n) => (
            <div key={n.id} className="flex items-center gap-4 px-4 py-3">
              <FileText className="h-4 w-4 shrink-0 text-navy" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-semibold text-ink">{n.title}</p>
                <p className="text-[11px] text-ink-muted">
                  {n.subjectCode}
                  {n.moduleNumber ? ` · Module ${n.moduleNumber}` : ""} ·{" "}
                  {new Date(n.createdAt).toLocaleDateString()}
                </p>
              </div>
              <a
                href={`${BACKEND_URL}${n.fileUrl}`}
                target="_blank"
                rel="noreferrer"
                className="text-[12px] font-semibold text-navy hover:underline"
              >
                Open
              </a>
              <button
                onClick={() => remove(n.id)}
                className="text-ink-muted hover:text-error"
                title="Delete"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.24 }}
          >
            <Toast kind={toastKind}>{toast}</Toast>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
