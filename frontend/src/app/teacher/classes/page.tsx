"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Send, Trash2, UserPlus, X } from "lucide-react";
import { api, errorMessage } from "@/lib/api";
import {
  Badge,
  Button,
  Card,
  EmptyState,
  ErrorState,
  Input,
  LoadingRows,
  PageTitle,
  Select,
  Textarea,
  Toast,
} from "@/components/ui";

interface ClassInfo {
  id: string;
  name: string;
  branch: string;
  semester: number;
  _count: { students: number; notes: number; assignments: number; tests: number };
}

interface ClassStudent {
  id: string;
  name: string;
  usn: string | null;
  email: string;
}

interface StudentOption {
  id: string;
  name: string;
  usn: string | null;
  email: string;
  classId: string | null;
}

export default function TeacherClassesPage() {
  const [classes, setClasses] = useState<ClassInfo[]>([]);
  const [students, setStudents] = useState<StudentOption[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState("");
  const [toastKind, setToastKind] = useState<"success" | "error" | "info">("success");
  const [showCreate, setShowCreate] = useState(false);
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("5");
  const [notifyFor, setNotifyFor] = useState<string | null>(null);
  const [notifyTitle, setNotifyTitle] = useState("");
  const [notifyBody, setNotifyBody] = useState("");
  const [addFor, setAddFor] = useState<string | null>(null);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [rosterFor, setRosterFor] = useState<string | null>(null);
  const [roster, setRoster] = useState<ClassStudent[]>([]);

  function notify(kind: "success" | "error" | "info", msg: string) {
    setToastKind(kind);
    setToast(msg);
    setTimeout(() => setToast(""), 5000);
  }

  async function load() {
    setLoading(true);
    setError("");
    try {
      const [c, s] = await Promise.all([
        api.get<{ classes: ClassInfo[] }>("/classes"),
        api.get<{ students: StudentOption[] }>("/classes/students"),
      ]);
      setClasses(c.data.classes);
      setStudents(s.data.students);
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function create() {
    if (!name.trim()) {
      notify("error", "Class needs a name.");
      return;
    }
    try {
      await api.post("/classes", {
        name: name.trim(),
        branch: branch.trim() || "CSE",
        semester: Number(semester),
      });
      notify("success", "Class created.");
      setName("");
      setBranch("");
      setShowCreate(false);
      await load();
    } catch (err) {
      notify("error", errorMessage(err));
    }
  }

  async function addStudent(klassId: string) {
    if (!selectedStudent) {
      notify("error", "Pick a student to add.");
      return;
    }
    try {
      await api.post(`/classes/${klassId}/students`, { studentId: selectedStudent });
      notify("success", "Student added to class.");
      setSelectedStudent("");
      setAddFor(null);
      await load();
    } catch (err) {
      notify("error", errorMessage(err));
    }
  }

  async function removeStudent(klassId: string, studentId: string) {
    try {
      await api.delete(`/classes/${klassId}/students/${studentId}`);
      notify("success", "Student removed.");
      await openRoster(klassId);
      await load();
    } catch (err) {
      notify("error", errorMessage(err));
    }
  }

  async function openRoster(klassId: string) {
    setRosterFor(klassId);
    setRoster([]);
    try {
      const res = await api.get<{ students: ClassStudent[] }>(`/classes/${klassId}/students`);
      setRoster(res.data.students);
    } catch (err) {
      notify("error", errorMessage(err));
    }
  }

  async function sendNotification() {
    if (!notifyFor || !notifyTitle.trim() || !notifyBody.trim()) {
      notify("error", "Title and body are required.");
      return;
    }
    try {
      const res = await api.post<{ delivered: number }>("/notifications/send", {
        classId: notifyFor,
        title: notifyTitle.trim(),
        body: notifyBody.trim(),
      });
      notify(
        "success",
        `Notification sent live to ${res.data.delivered} students (socket + inbox).`
      );
      setNotifyFor(null);
      setNotifyTitle("");
      setNotifyBody("");
    } catch (err) {
      notify("error", errorMessage(err));
    }
  }

  const unattached = students.filter((s) => !s.classId);

  return (
    <div>
      <PageTitle
        title="Classes"
        subtitle="Create classes, manage rosters, and broadcast live notifications."
        right={
          <Button onClick={() => setShowCreate((s) => !s)}>
            <Plus className="h-4 w-4" />
            New class
          </Button>
        }
      />

      {showCreate && (
        <Card className="mb-6">
          <h2 className="font-display mb-3 text-[17px] font-semibold text-ink">
            Create a class
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. CSE 5A" />
            <Input value={branch} onChange={(e) => setBranch(e.target.value)} placeholder="Branch (CSE)" />
            <Select value={semester} onChange={(e) => setSemester(e.target.value)}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
                <option key={s} value={s}>
                  Semester {s}
                </option>
              ))}
            </Select>
          </div>
          <Button onClick={create} className="mt-3">
            <Plus className="h-4 w-4" /> Create
          </Button>
        </Card>
      )}

      {loading ? (
        <LoadingRows rows={3} />
      ) : error ? (
        <ErrorState message={error} onRetry={load} />
      ) : classes.length === 0 ? (
        <EmptyState
          title="No classes yet"
          body="Create a class, add students, and start publishing notes, assignments and tests."
          action={
            <Button onClick={() => setShowCreate(true)}>
              <Plus className="h-4 w-4" /> New class
            </Button>
          }
        />
      ) : (
        <div className="space-y-4">
          {classes.map((kl) => (
            <Card key={kl.id}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="font-display text-[18px] font-semibold text-ink">
                    {kl.name}
                  </h2>
                  <p className="text-[12px] text-ink-muted">
                    {kl.branch} · Sem {kl.semester} · {kl._count.students} students
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    <Badge tone="info">{kl._count.notes} notes</Badge>
                    <Badge tone="info">{kl._count.assignments} assignments</Badge>
                    <Badge tone="info">{kl._count.tests} tests</Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" onClick={() => openRoster(kl.id)}>
                    Roster
                  </Button>
                  <Button variant="ghost" onClick={() => { setNotifyFor(kl.id); setAddFor(null); }}>
                    <Send className="h-4 w-4" />
                    Notify
                  </Button>
                </div>
              </div>

              {addFor === kl.id && (
                <div className="mt-4 flex flex-wrap gap-2 border-t border-hairline pt-4">
                  <Select
                    value={selectedStudent}
                    onChange={(e) => setSelectedStudent(e.target.value)}
                    className="flex-1 min-w-[220px]"
                  >
                    <option value="">Add a student…</option>
                    {unattached.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.usn ?? s.email})
                      </option>
                    ))}
                  </Select>
                  <Button onClick={() => addStudent(kl.id)}>
                    <UserPlus className="h-4 w-4" /> Add
                  </Button>
                  <button onClick={() => setAddFor(null)} className="text-ink-muted hover:text-error">
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}
              <button
                onClick={() => setAddFor(addFor === kl.id ? null : kl.id)}
                className="mt-3 inline-flex items-center gap-1 text-[12px] font-semibold text-navy hover:underline"
              >
                <UserPlus className="h-3.5 w-3.5" />
                {addFor === kl.id ? "Cancel adding" : "Add student"}
              </button>

              {notifyFor === kl.id && (
                <div className="mt-4 space-y-2 border-t border-hairline pt-4">
                  <Input
                    value={notifyTitle}
                    onChange={(e) => setNotifyTitle(e.target.value)}
                    placeholder="Title — e.g. Lab rescheduled"
                  />
                  <Textarea
                    rows={2}
                    value={notifyBody}
                    onChange={(e) => setNotifyBody(e.target.value)}
                    placeholder="Message body…"
                  />
                  <div className="flex gap-2">
                    <Button onClick={sendNotification}>
                      <Send className="h-4 w-4" /> Send live
                    </Button>
                    <Button variant="ghost" onClick={() => setNotifyFor(null)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      )}

      <AnimatePresence>
        {rosterFor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-navy-deep/50 p-4"
            onClick={() => setRosterFor(null)}
          >
            <motion.div
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="ledger-card max-h-[80vh] w-full max-w-lg overflow-y-auto bg-paper p-5"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display text-[19px] font-semibold text-ink">Roster</h3>
                <button onClick={() => setRosterFor(null)} className="text-ink-muted hover:text-error">
                  <X className="h-4 w-4" />
                </button>
              </div>
              {roster.length === 0 ? (
                <EmptyState
                  title="Empty class"
                  body="Add students to fill the roster."
                />
              ) : (
                <div className="divide-y divide-hairline">
                  {roster.map((s) => (
                    <div key={s.id} className="flex items-center gap-3 py-2.5">
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[13px] font-semibold text-ink">{s.name}</p>
                        <p className="text-[11px] text-ink-muted">{s.usn ?? s.email}</p>
                      </div>
                      <button
                        onClick={() => removeStudent(rosterFor, s.id)}
                        className="text-ink-muted hover:text-error"
                        title="Remove from class"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
