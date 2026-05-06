import "./SearchArea.css";

import { useEffect, useState } from "react";
import type { ApiResponse, Book } from "../types/Book";
import SearchBar from "./SearchBar";
import BookList from "./BookList";
import Pagination from "./Pagination";
import useFetch from "../hooks/useFetch";

export default function SearchArea() {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const url = "https://dapi.kakao.com/v3/search/book";
  const apiKey = "KakaoAK 0221aeed4404859cc2f77601a21937d2";
  const { documents, isEnd } = useFetch<Book>(query, page, url, apiKey);

  const onChangeQuery = (q: string) => {
    setQuery(q);
  };

  const resetPage = () => {
    setPage(1);
  };

  const onClickNext = () => {
    setPage((p) => p + 1);
  };

  const onClickPrev = () => {
    setPage((p) => p - 1);
  };

  return (
    <>
      <div className="search-area">
        <SearchBar onChangeQuery={onChangeQuery} resetPage={resetPage} />
        <div className="book-list">
          <BookList books={documents} />
        </div>
        <div className="pagination">
          <Pagination
            page={page}
            handleNext={onClickNext}
            handlePrev={onClickPrev}
            isEnd={isEnd}
          />
        </div>
      </div>
    </>
  );
}
