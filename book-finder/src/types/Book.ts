export type Book = {
  authors: string[];
  contents: string;
  isbn: string;
  publisher: string;
  thumbnail: string;
  title: string;
  datetime: string;
  url: string;
};

export type ApiResponse<T> = {
  documents: T[];
  meta: {
    is_end: boolean;
  };
};
