"use client";

import { useEffect, useState } from "react";
import { FileText, Download } from "lucide-react";
import { api, errorMessage, BACKEND_URL } from "@/lib/api";
import { Card, EmptyState, ErrorState, LoadingRows, Select, Badge } from "@/components/ui";
import { useSubjects } from "@/lib/subjects";

interface Note {
  id: string;
  subjectCode: string;
  moduleNumber: number | null;
  title: string;
  fileUrl: string;
  createdAt: string;
}

function downloadNote(note: Note) {
  const url = `${BACKEND_URL}${note.fileUrl}`;
  const fallback = window.open(url, "_blank", "noopener");
  if (fallback) {
    fallback.focus();
    return;
  }
  fetch(url)
    .then((res) => res.blob())
    .then((blob) => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `${note.title || "note"}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(a.href);
    })
    .catch(() => {
      window.open(url, "_blank", "noopener");
    });
}

export default function NotesPage() {
  const { subjects, loading: subjectsLoading } = useSubjects();
  const [subjectCode, setSubjectCode] = useState("");
  const [moduleNumber, setModuleNumber] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (subjects.length > 0 && !subjectCode) setSubjectCode(subjects[0].code);
  }, [subjects, subjectCode]);

  useEffect(() => {
    if (!subjectCode) return;
    setLoading(true);
    setError("");
    api
      .get<{ notes: Note[] }>("/student/notes", {
        params: {
          subject: subjectCode,
          module: moduleNumber || undefined,
        },
      })
      .then((res) => setNotes(res.data.notes))
      .catch((err) => setError(errorMessage(err)))
      .finally(() => setLoading(false));
  }, [subjectCode, moduleNumber]);

  const modules = subjects.find((s) => s.code === subjectCode)?.modules ?? [];

  return (
    <div>
      <div className="mb-6 border-b border-hairline pb-4">
        <h1 className="font-display text-[26px] font-semibold text-ink">Notes</h1>
        <p className="mt-1 text-[13px] text-ink-muted">
          Module-mapped notes uploaded by your teacher.
        </p>
      </div>

      <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
            Subject
          </label>
          <Select
            value={subjectCode}
            onChange={(e) => {
              setSubjectCode(e.target.value);
              setModuleNumber("");
            }}
          >
            {subjectsLoading ? (
              <option>Loading…</option>
            ) : (
              subjects.map((s) => (
                <option key={s.code} value={s.code}>
                  {s.code} — {s.name}
                </option>
              ))
            )}
          </Select>
        </div>
        <div>
          <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
            Module
          </label>
          <Select value={moduleNumber} onChange={(e) => setModuleNumber(e.target.value)}>
            <option value="">All modules</option>
            {modules.map((m) => (
              <option key={m.id} value={m.moduleNumber}>
                Module {m.moduleNumber} — {m.name}
              </option>
            ))}
          </Select>
        </div>
      </div>

      {loading ? (
        <LoadingRows rows={4} />
      ) : error ? (
        <ErrorState message={error} />
      ) : notes.length === 0 ? (
        <EmptyState
          title="No notes here yet"
          body="Your teacher hasn't uploaded notes for this subject/module. Ask them to upload module notes."
        />
      ) : (
        <div className="space-y-3">
          {notes.map((n) => (
            <Card key={n.id} className="flex items-center gap-4 py-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[2px] bg-navy-soft">
                <FileText className="h-5 w-5 text-navy" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[14px] font-semibold text-ink">{n.title}</p>
                <p className="text-[11px] text-ink-muted">
                  {n.subjectCode}
                  {n.moduleNumber ? ` · Module ${n.moduleNumber}` : ""} ·{" "}
                  {new Date(n.createdAt).toLocaleDateString()}
                </p>
              </div>
              <Badge tone="navy">PDF</Badge>
              <button
                onClick={() => downloadNote(n)}
                className="inline-flex items-center gap-1.5 rounded-[2px] border border-hairline px-3 py-1.5 text-[12px] font-semibold text-navy hover:border-navy"
              >
                <Download className="h-3.5 w-3.5" /> Download PDF
              </button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
