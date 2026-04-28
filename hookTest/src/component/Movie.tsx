// import "./Movie.css";

// import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";

interface Movie {
  id: number;
  title: string;
  poster: string;
}

export default function Movie() {
  // const [movies, setMovies] = useState<Movie[]>([]);

  // useEffect(() => {
  //   fetch(
  //     "https://raw.githubusercontent.com/wizard113/ML-Basic/main/movie.json",
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setMovies(data["movies"]));
  // }, []);

  // // async await
  // useEffect(() => {
  //   const load = async () => {
  //     const res = await fetch(
  //       "https://raw.githubusercontent.com/wizard113/ML-Basic/main/movie.json",
  //     );
  //     const data = await res.json();
  //     setMovies(data.movies);
  //   };

  //   load();
  // }, []);

  const { data, loading } = useFetch<{ movies: Movie[] }>(
    "https://raw.githubusercontent.com/wizard113/ML-Basic/main/movie.json",
  );

  return (
    <div className="movieList" style={container}>
      {data?.movies.map((movie) => (
        <div style={card} key={movie.id}>
          <img style={image} src={movie.poster} alt={movie.title} />
          <h3 style={title}>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
}

// js로 css 적용하는 방법
const container: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
};

const card: React.CSSProperties = {
  width: "200px",
  height: "400px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  boxShadow: "7px 10px 21px -3px rgba(0,0,0,0.75",
};

const image: React.CSSProperties = {
  width: "100%",
  height: "90%",
  objectFit: "cover",
};

const title: React.CSSProperties = {
  height: "10%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1rem",
  fontWeight: "bold",
  padding: "5px",
};
