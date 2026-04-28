import Movie from "./Movie";
import { useFetch } from "./useFetch";

type Movie = {
  id: number;
  title: string;
};

export default function UseFetchTest() {
  const { data, loading } = useFetch<{ movies: Movie[] }>(
    "https://raw.githubusercontent.com/wizard113/ML-Basic/main/movie.json",
  );

  if (loading) return <p>loading...</p>;

  return (
    // data가 null일 수 있어서 optional
    // 예를 들어 통신 error 발생한 경우
    <ul>
      {data?.movies.map((m) => (
        <li key={m.id}>{m.title}</li>
      ))}
    </ul>
  );
}
