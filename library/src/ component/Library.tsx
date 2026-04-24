import "./Library.css";
import Book from "./Book";
import type { BookT } from "../types/book";

const books: BookT[] = [
  {
    image:
      "https://image.aladin.co.kr/product/38793/0/cover500/e652637255_1.jpg",
    title: "한입 크기로 잘라먹는 리액트",
    author: "이정환",
  },
  {
    image:
      "https://image.aladin.co.kr/product/32860/31/cover500/e862532691_1.jpg",
    title: "처음 배우는 애저",
    author: "김도균",
  },
  {
    image:
      "https://image.aladin.co.kr/product/30789/40/cover500/e322530657_1.jpg",
    title: "Node.js 교과서",
    author: "조현영",
  },
];

function renderBookList() {
  const bookList = [];
  for (const book of books) {
    bookList.push(<Book book={book} />);
  }
  return bookList;
}

export default function Library() {
  return <div className="library">{renderBookList()}</div>;
}
