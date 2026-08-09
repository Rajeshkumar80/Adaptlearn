"use client";

import { useEffect, useState } from "react";
import { api, errorMessage } from "@/lib/api";

export interface Subject {
  id: string;
  code: string;
  name: string;
  semester: number;
  modules: { id: string; moduleNumber: number; name: string }[];
}

export function useSubjects() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get<{ subjects: Subject[] }>("/vtu/subjects")
      .then((res) => setSubjects(res.data.subjects))
      .catch((err) => setError(errorMessage(err)))
      .finally(() => setLoading(false));
  }, []);

  return { subjects, error, loading };
}
