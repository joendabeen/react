interface BookProps {
  title: string;
  author: string;
}

export default function Book({ title, author }: BookProps) {
  return (
    <>
      <h1>{`이 책의 이름은 ${title}`}</h1>
      <h2>{`이 책의 저자는 ${author}`}</h2>
    </>
  );
}
