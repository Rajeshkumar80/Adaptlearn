"use client";

import { useEffect, useState } from "react";
import { api, errorMessage } from "./api";
import { getCached, setCached } from "./cache";

export interface Subject {
  id: string;
  code: string;
  name: string;
  semester: number;
  modules: { id: string; moduleNumber: number; name: string }[];
}

const CACHE_KEY = "vtu_subjects";

export function useSubjects() {
  const cached = getCached<Subject[]>(CACHE_KEY, 300_000);
  const [subjects, setSubjects] = useState<Subject[]>(cached || []);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(!cached);

  useEffect(() => {
    let mounted = true;
    api
      .get<{ subjects: Subject[] }>("/vtu/subjects")
      .then((res) => {
        if (!mounted) return;
        const data = res.data.subjects || [];
        setSubjects(data);
        setCached(CACHE_KEY, data);
        setError("");
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
  }, []);

  return { subjects, error, loading };
}
