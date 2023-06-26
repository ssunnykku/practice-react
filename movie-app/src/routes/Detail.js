import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{movie.title_long}</h1>
          <img src={movie.large_cover_image} />
          <p>{movie.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
