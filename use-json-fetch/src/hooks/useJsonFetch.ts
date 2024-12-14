import { useState, useEffect } from 'react';

interface FetchError {
  message: string;
}

const useJsonFetch = <T>(url: string, opts: RequestInit = {}): [T | null, boolean, FetchError | null] => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<FetchError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url, opts);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err: any) {
        if (err.name === 'SyntaxError') {
          setError({ message: 'Ошибка парсинга JSON' });
        } else {
          setError({ message: err.message });
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, opts]);

  return [data, loading, error];
};

export default useJsonFetch;
