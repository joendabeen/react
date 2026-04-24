import type { BookT } from "../types/book";

interface BookProps {
  book: BookT;
}

export default function Book({ book }: BookProps) {
  const { image, title, author } = book;
  return (
    <div className="book">
      <img src={image} alt={`${author}의 책 ${title}`} />
      <h1>{`${title}`}</h1>
      <h3>{`${author}`}</h3>
    </div>
  );
}
