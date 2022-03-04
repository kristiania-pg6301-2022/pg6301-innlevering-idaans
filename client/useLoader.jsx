import { useEffect, useState } from "react";

export function useLoader(loadFn) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();

  async function reload() {
    try {
      setLoading(true);
      setData(await loadFn());
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(reload, []);
  return { reload, loading, data, error };
}
