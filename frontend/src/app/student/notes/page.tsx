"use client";

import { useEffect, useState, useRef } from "react";
import { FileText, Download, Eye, Search, X, ExternalLink, RefreshCw } from "lucide-react";
import { api, errorMessage, BACKEND_URL, getToken } from "@/lib/api";
import { Card, EmptyState, ErrorState, LoadingRows, PageShell, Select, Badge, Input, Button } from "@/components/ui";
import { useSubjects } from "@/lib/subjects";
import { getCached, setCached } from "@/lib/cache";

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

  const cacheKey = `notes_sem${semester}_sub${subjectCode || "all"}_mod${moduleNumber || "all"}`;
  const initialCached = getCached<Note[]>(cacheKey);

  const [notes, setNotes] = useState<Note[]>(initialCached || []);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(!initialCached);

  // PDF Preview State
  const [previewNote, setPreviewNote] = useState<Note | null>(null);
  const [previewBlobUrl, setPreviewBlobUrl] = useState<string | null>(null);
  const [previewLoading, setPreviewLoading] = useState<boolean>(false);
  const [previewError, setPreviewError] = useState<string | null>(null);

  const currentBlobUrlRef = useRef<string | null>(null);

  const semesters = [3, 4, 5, 6, 7];
  const semSubjects = subjects.filter((s) => s.semester === semester);

  useEffect(() => {
    let mounted = true;
    const cached = getCached<Note[]>(cacheKey);
    if (cached) {
      setNotes(cached);
      setLoading(false);
    } else {
      setLoading(true);
    }
    setError("");

    api
      .get<{ notes: Note[] }>("/notes", {
        params: {
          semester,
          subject: subjectCode || undefined,
          module: moduleNumber || undefined,
        },
      })
      .then((res) => {
        if (!mounted) return;
        const fetched = res.data.notes || [];
        setNotes(fetched);
        setCached(cacheKey, fetched);
      })
      .catch((err) => {
        if (!mounted) return;
        if (!cached) setError(errorMessage(err));
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [semester, subjectCode, moduleNumber, cacheKey]);

  // Handle PDF Preview Fetching as a Blob URL to bypass browser iframe cross-origin/blocking issues
  useEffect(() => {
    if (!previewNote) {
      if (currentBlobUrlRef.current) {
        URL.revokeObjectURL(currentBlobUrlRef.current);
        currentBlobUrlRef.current = null;
      }
      setPreviewBlobUrl(null);
      setPreviewLoading(false);
      setPreviewError(null);
      return;
    }

    let isCurrent = true;
    setPreviewLoading(true);
    setPreviewError(null);

    // Revoke previous blob if any
    if (currentBlobUrlRef.current) {
      URL.revokeObjectURL(currentBlobUrlRef.current);
      currentBlobUrlRef.current = null;
    }

    api
      .get(`/notes/${previewNote.id}/stream`, {
        responseType: "blob",
      })
      .then((res) => {
        if (!isCurrent) return;
        const blob = new Blob([res.data], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        currentBlobUrlRef.current = url;
        setPreviewBlobUrl(url);
      })
      .catch((err) => {
        if (!isCurrent) return;
        setPreviewError(
          errorMessage(err) || "Failed to load PDF preview. Click download to view directly."
        );
      })
      .finally(() => {
        if (isCurrent) setPreviewLoading(false);
      });

    return () => {
      isCurrent = false;
    };
  }, [previewNote]);

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
      setTimeout(() => URL.revokeObjectURL(url), 1000);
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
              <>
                <option value="">All subjects in Sem {semester}</option>
                {semSubjects.map((s) => (
                  <option key={s.code} value={s.code}>
                    {s.code} — {s.name}
                  </option>
                ))}
              </>
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
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[var(--text-muted)]" />
            <Input
              type="text"
              placeholder="Search by title or topic…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>
      </div>

      {/* Notes List */}
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[12px] font-medium text-[var(--text-muted)]">
          {filteredNotes.length} notes available
        </span>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
          <Card className="w-full max-w-5xl h-[88vh] flex flex-col p-4 border-[var(--border-default)] shadow-2xl bg-[var(--bg-primary)]">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border-default)]">
              <div className="min-w-0 pr-4">
                <h3 className="text-sm font-bold text-[var(--text-primary)] truncate">
                  {previewNote.title}
                </h3>
                <span className="text-[11px] text-[var(--text-muted)]">
                  {previewNote.subjectCode} · Module {previewNote.moduleNumber || "All"} · {previewNote.fileSize ? `${Math.round(previewNote.fileSize / 1024)} KB` : "PDF"}
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {previewBlobUrl && (
                  <a
                    href={previewBlobUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs py-1 px-2.5 rounded-md border border-[var(--border-default)] hover:bg-[var(--surface-muted)] text-[var(--text-primary)] font-medium transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Open in New Tab
                  </a>
                )}
                <Button
                  onClick={() => handleDownload(previewNote)}
                  className="text-xs py-1 px-2.5"
                >
                  <Download className="w-3.5 h-3.5 mr-1" /> Download
                </Button>
                <button
                  onClick={() => setPreviewNote(null)}
                  className="p-1 rounded text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-muted)] transition-colors"
                  aria-label="Close preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 mt-3 rounded-lg overflow-hidden bg-[var(--surface-muted)] flex items-center justify-center relative border border-[var(--border-default)]">
              {previewLoading && (
                <div className="flex flex-col items-center justify-center gap-3 p-8">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--accent-primary)] border-t-transparent" />
                  <p className="text-xs text-[var(--text-muted)]">Loading notes preview securely…</p>
                </div>
              )}

              {previewError && !previewLoading && (
                <div className="flex flex-col items-center justify-center gap-3 p-8 text-center max-w-md">
                  <p className="text-sm font-medium text-amber-500">{previewError}</p>
                  <Button
                    onClick={() => handleDownload(previewNote)}
                    className="text-xs py-1.5 px-3 mt-2"
                  >
                    <Download className="w-3.5 h-3.5 mr-1" /> Download PDF File
                  </Button>
                </div>
              )}

              {previewBlobUrl && !previewLoading && (
                <iframe
                  src={previewBlobUrl}
                  className="w-full h-full border-0 rounded-lg"
                  title={previewNote.title}
                />
              )}
            </div>
          </Card>
        </div>
      )}
    </PageShell>
  );
}
