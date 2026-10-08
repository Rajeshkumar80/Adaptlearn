"use client";

import { useEffect, useState } from "react";
import { FileText, Download, Eye, Search, X } from "lucide-react";
import { api, errorMessage, BACKEND_URL, getToken } from "@/lib/api";
import { Card, EmptyState, ErrorState, LoadingRows, PageShell, Select, Badge, Input, Button } from "@/components/ui";
import { useSubjects } from "@/lib/subjects";

interface Note {
  id: string;
  subjectCode: string;
  moduleNumber: number | null;
  title: string;
  description?: string;
  fileUrl: string;
  fileSize: number;
  createdAt: string;
}

export default function StudentNotesPage() {
  const { subjects, loading: subjectsLoading } = useSubjects();
  const [semester, setSemester] = useState<number>(7);
  const [subjectCode, setSubjectCode] = useState<string>("");
  const [moduleNumber, setModuleNumber] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [previewNote, setPreviewNote] = useState<Note | null>(null);

  const semesters = [3, 4, 5, 6, 7];
  const semSubjects = subjects.filter((s) => s.semester === semester);

  useEffect(() => {
    if (semSubjects.length > 0 && (!subjectCode || !semSubjects.some((s) => s.code === subjectCode))) {
      setSubjectCode(semSubjects[0].code);
      setModuleNumber("");
    }
  }, [semester, semSubjects, subjectCode]);

  useEffect(() => {
    if (!subjectCode) return;
    setLoading(true);
    setError("");
    api
      .get<{ notes: Note[] }>("/notes", {
        params: {
          subject: subjectCode,
          module: moduleNumber || undefined,
        },
      })
      .then((res) => setNotes(res.data.notes || []))
      .catch((err) => setError(errorMessage(err)))
      .finally(() => setLoading(false));
  }, [subjectCode, moduleNumber]);

  const handleDownload = async (note: Note) => {
    try {
      const token = getToken();
      const res = await fetch(`${BACKEND_URL}/api/notes/${note.id}/download`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Download unauthorized or failed");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${note.title || "note"}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err: any) {
      alert(err.message || "Failed to download note");
    }
  };

  const filteredNotes = notes.filter((n) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      n.title.toLowerCase().includes(q) ||
      n.subjectCode.toLowerCase().includes(q) ||
      (n.description && n.description.toLowerCase().includes(q))
    );
  });

  return (
    <PageShell>
      <div className="mb-6 border-b border-[var(--border-default)] pb-4">
        <h1 className="font-display text-[26px] font-semibold text-[var(--text-primary)]">
          VTU Academic Notes
        </h1>
        <p className="mt-1 text-[13px] text-[var(--text-muted)]">
          Search and preview curriculum lecture notes filtered by Semester, Subject, and Module.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-[var(--text-muted)]">
            Semester
          </label>
          <Select
            value={semester}
            onChange={(e) => {
              setSemester(Number(e.target.value));
              setSubjectCode("");
              setModuleNumber("");
            }}
          >
            {semesters.map((sem) => (
              <option key={sem} value={sem}>
                Semester {sem}
              </option>
            ))}
          </Select>
        </div>

        <div>
          <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-[var(--text-muted)]">
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
            ) : semSubjects.length === 0 ? (
              <option value="">No subjects in Sem {semester}</option>
            ) : (
              semSubjects.map((s) => (
                <option key={s.code} value={s.code}>
                  {s.code} — {s.name}
                </option>
              ))
            )}
          </Select>
        </div>

        <div>
          <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-[var(--text-muted)]">
            Module
          </label>
          <Select value={moduleNumber} onChange={(e) => setModuleNumber(e.target.value)}>
            <option value="">All modules</option>
            {[1, 2, 3, 4, 5].map((m) => (
              <option key={m} value={m}>
                Module {m}
              </option>
            ))}
          </Select>
        </div>

        <div>
          <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-[var(--text-muted)]">
            Search
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[var(--text-muted)]" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search title, keywords…"
              className="pl-8 text-xs"
            />
          </div>
        </div>
      </div>

      {loading ? (
        <LoadingRows rows={4} />
      ) : error ? (
        <ErrorState message={error} />
      ) : filteredNotes.length === 0 ? (
        <EmptyState
          title="No notes found"
          body="No notes match your selected semester, subject, or search query."
        />
      ) : (
        <div className="space-y-3">
          {filteredNotes.map((n) => (
            <Card key={n.id} className="flex items-center gap-4 py-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[2px] bg-[var(--accent-soft)]">
                <FileText className="h-5 w-5 text-[var(--accent-primary)]" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[14px] font-semibold text-[var(--text-primary)]">
                  {n.title}
                </p>
                <p className="text-[11px] text-[var(--text-muted)]">
                  {n.subjectCode}
                  {n.moduleNumber ? ` · Module ${n.moduleNumber}` : ""} ·{" "}
                  {n.fileSize ? `${Math.round(n.fileSize / 1024)} KB · ` : ""}
                  {new Date(n.createdAt).toLocaleDateString()}
                </p>
              </div>
              <Badge tone="navy">PDF</Badge>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => setPreviewNote(n)}
                  className="text-xs py-1 px-2.5"
                >
                  <Eye className="w-3.5 h-3.5 mr-1" /> Preview
                </Button>
                <Button
                  onClick={() => handleDownload(n)}
                  className="text-xs py-1 px-2.5"
                >
                  <Download className="w-3.5 h-3.5 mr-1" /> Download
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* In-page PDF Preview Modal */}
      {previewNote && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <Card className="w-full max-w-4xl h-[85vh] flex flex-col p-4 border-[var(--border-default)]">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border-default)]">
              <div>
                <h3 className="text-sm font-bold text-[var(--text-primary)] truncate">
                  {previewNote.title}
                </h3>
                <span className="text-[11px] text-[var(--text-muted)]">
                  {previewNote.subjectCode} · Module {previewNote.moduleNumber || "All"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => handleDownload(previewNote)}
                  className="text-xs py-1 px-2.5"
                >
                  <Download className="w-3.5 h-3.5 mr-1" /> Download
                </Button>
                <button
                  onClick={() => setPreviewNote(null)}
                  className="p-1 rounded text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex-1 mt-3 rounded overflow-hidden bg-[var(--surface-muted)] flex items-center justify-center">
              <iframe
                src={`${BACKEND_URL}/api/notes/${previewNote.id}/stream?token=${getToken()}`}
                className="w-full h-full border-0"
                title={previewNote.title}
              />
            </div>
          </Card>
        </div>
      )}
    </PageShell>
  );
}
