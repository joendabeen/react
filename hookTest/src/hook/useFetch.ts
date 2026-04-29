import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
  const [data, setDate] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const load = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setDate(json);
      setLoading(false);
    };

    load();
  });

  return { data, loading };
}
