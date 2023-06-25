import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const [movie, setMovie] = useState();

  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return <h1>{movie.title}</h1>;
}

export default Detail;
