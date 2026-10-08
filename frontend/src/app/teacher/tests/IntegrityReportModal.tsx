"use client";

import { useEffect, useState } from "react";
import { Download, ShieldAlert, X } from "lucide-react";
import { api, errorMessage } from "@/lib/api";
import { Badge, Button, Card, LoadingRows } from "@/components/ui";

interface IntegrityReportModalProps {
  testId: string;
  testTitle: string;
  onClose: () => void;
}

export function IntegrityReportModal({
  testId,
  testTitle,
  onClose,
}: IntegrityReportModalProps) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    api
      .get(`/tests/${testId}/integrity-report`)
      .then((res) => setData(res.data))
      .catch((err) => setError(errorMessage(err)))
      .finally(() => setLoading(false));
  }, [testId]);

  function downloadCsv() {
    if (!data?.csvData) return;
    const blob = new Blob([data.csvData], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `integrity_report_${testId}.csv`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <Card className="w-full max-w-4xl max-h-[85vh] flex flex-col p-5 border-[var(--border-default)]">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--border-default)]">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-[var(--accent-primary)]" />
            <div>
              <h2 className="text-base font-bold text-[var(--text-primary)]">Integrity Report</h2>
              <p className="text-xs text-[var(--text-muted)]">{testTitle}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {data?.csvData && (
              <Button onClick={downloadCsv} className="text-xs py-1 px-2.5">
                <Download className="w-3.5 h-3.5 mr-1" /> Export CSV
              </Button>
            )}
            <button onClick={onClose} className="p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)]">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          {loading ? (
            <LoadingRows rows={4} />
          ) : error ? (
            <div className="p-4 text-xs text-red-400 bg-red-950/20 border border-red-800 rounded">{error}</div>
          ) : (
            <>
              {/* Summary Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="rounded border border-[var(--border-default)] p-3 bg-[var(--surface-muted)]">
                  <p className="text-[11px] text-[var(--text-muted)] uppercase">Total Events</p>
                  <p className="text-xl font-bold text-[var(--text-primary)]">{data.totalIntegrityEvents}</p>
                </div>
                <div className="rounded border border-[var(--border-default)] p-3 bg-[var(--surface-muted)]">
                  <p className="text-[11px] text-[var(--text-muted)] uppercase">Students Flagged</p>
                  <p className="text-xl font-bold text-[var(--accent-primary)]">{data.studentsFlaggedCount}</p>
                </div>
                <div className="rounded border border-[var(--border-default)] p-3 bg-[var(--surface-muted)] sm:col-span-2">
                  <p className="text-[11px] text-[var(--text-muted)] uppercase">Escalation Policy</p>
                  <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                    4 Warnings threshold · 5th event automatically terminates test.
                  </p>
                </div>
              </div>

              {/* Mandatory Disclosure */}
              <div className="p-3 rounded bg-[var(--surface-muted)] border border-amber-800/40 text-xs text-amber-200/80 leading-relaxed">
                <span className="font-semibold text-amber-300">Academic Disclosure Notice: </span>
                {data.disclosure}
              </div>

              {/* Student Table */}
              <div className="border border-[var(--border-default)] rounded overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[var(--surface-muted)] text-[var(--text-muted)] uppercase border-b border-[var(--border-default)]">
                    <tr>
                      <th className="py-2.5 px-3">Student</th>
                      <th className="py-2.5 px-3">USN</th>
                      <th className="py-2.5 px-3">Attempt</th>
                      <th className="py-2.5 px-3">Tab Switches</th>
                      <th className="py-2.5 px-3">Clipboard</th>
                      <th className="py-2.5 px-3">Total Events</th>
                      <th className="py-2.5 px-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border-default)] text-[var(--text-primary)]">
                    {data.studentSummaries?.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="py-4 text-center text-[var(--text-muted)]">
                          No integrity events recorded for this assessment.
                        </td>
                      </tr>
                    ) : (
                      data.studentSummaries.map((s: any, idx: number) => (
                        <tr key={idx} className="hover:bg-[var(--surface-muted)]/50">
                          <td className="py-2 px-3 font-medium">{s.studentName}</td>
                          <td className="py-2 px-3 text-[var(--text-muted)]">{s.usn || "N/A"}</td>
                          <td className="py-2 px-3">#{s.attemptNumber}</td>
                          <td className="py-2 px-3 font-semibold text-amber-400">{s.tabSwitches}</td>
                          <td className="py-2 px-3 font-semibold text-orange-400">{s.clipboardEvents}</td>
                          <td className="py-2 px-3 font-bold">{s.totalEvents}</td>
                          <td className="py-2 px-3">
                            <Badge tone={s.totalEvents >= 5 ? "error" : s.totalEvents >= 3 ? "warning" : "info"}>
                              {s.totalEvents >= 5 ? "Terminated" : `Warn (${s.totalEvents})`}
                            </Badge>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </Card>
    </div>
  );
}
