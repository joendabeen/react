import { useState, useEffect } from "react";
import type { ApiResponse } from "../types/Book";

export default function useFetch<T>(
  query: string,
  page: number,
  url: string,
  apiKey: string,
) {
  const [documents, setDocuments] = useState<T[]>([]);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  useEffect(() => {
    if (!query) return;

    const fetchBooks = async () => {
      try {
        // 브라우저 중 주소에 한글 인코딩을 해주지 않는 것도 있어서 query 인코딩
        const encodedQuery = encodeURIComponent(query);
        const endPoint = `${url}?query=${encodedQuery}&page=${page}`;
        const response = await fetch(endPoint, {
          headers: {
            Authorization: apiKey,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`);
        }

        const data: ApiResponse<T> = await response.json();
        setDocuments(data.documents);
        setIsEnd(data.meta.is_end);
      } catch (e: Error | unknown) {
        console.error(e);
      }
    };

    fetchBooks();
  }, [query, page, url, apiKey]);

  return { documents, isEnd };
}
