import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import styled from 'styled-components';

const Header = styled.div`
  height: 50px;
  background-color: black;
  position: relative;
  width: 100%;
`;

const LogoH3 = styled.h3`
  color: white;
  font-size: 25px;
  height: 50px;
  width: 100px;
  position: absolute;
  top: 20%;

  padding-left: 20px;
`;

const BackgroundDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 150px;
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
      {' '}
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Header>
            <LogoH3>Movie</LogoH3>
          </Header>
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
        </div>
      )}
    </>
  );
}

export default Home;
