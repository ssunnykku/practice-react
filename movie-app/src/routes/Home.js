import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styled from "styled-components";

let BackgroundDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const resopnse = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    );
    const json = await resopnse.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <BackgroundDiv>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
              year={movie.year}
            />
          ))}
        </BackgroundDiv>
      )}
    </>
  );
}

export default Home;
