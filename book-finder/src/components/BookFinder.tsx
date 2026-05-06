import "./BookFinder.css";

import { useState } from "react";
import type { Book } from "../types/Book";

import Footer from "./Footer";
import Header from "./Header";
import SearchArea from "./SearchArea";
import BookDetail from "./BookDetail";
import BookContext from "../contexts/BookContext";

export default function BookFinder() {
  const [selected, setSelected] = useState<Book | null>(null);

  const selectBook = (book: Book) => {
    setSelected(book);
  };

  return (
    <BookContext.Provider value={{ selectBook }}>
      <div className="BookFinder">
        <Header />
        <div className="main-content">
          <SearchArea />
          <BookDetail book={selected} />
        </div>
        <Footer />
      </div>
    </BookContext.Provider>
  );
}
