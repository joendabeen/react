import "./BookList.css";

import type { Book } from "../types/Book";
import BookItem from "./BookItem";

interface BookListProps {
  books: Book[];
}

export default function BookList({ books }: BookListProps) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookItem book={book} key={book.isbn} />
      ))}
    </div>
  );
}
