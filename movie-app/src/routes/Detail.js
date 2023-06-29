import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Header = styled.div`
  height: 50px;
  width: 100%;
  background-color: black;
  position: relative;
  position: static;
  top: 0;
`;

const LogoH3 = styled.h3`
  color: white;
  font-size: 25px;
  height: 50px;
  width: 100px;
  position: absolute;
  top: 1.5%;
  padding-left: 20px;
`;

const DetailBackDiv = styled.div`
  width: 950px;
  height: 100%;
  display: flex;
  padding: 150px;
  flex-direction: row;
  font-size: 20px;
`;

const DetailImg = styled.img`
  width: 350px;
  height: 450px;
  margin-top: 30px;
`;

const DetailTitleDiv = styled.div`
  width: 100%;
`;

const DetailInfoDiv = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
`;

const CntDownloadDiv = styled.div`
  margin-top: 150px;
  margin-bottom: 10px;
`;

const CntLikeDiv = styled.div`
  margin-bottom: 10px;
`;

const GenreUl = styled.ul`
  margin-bottom: 30px;
`;

const GenreLi = styled.li``;

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
    <>
      <Header>
        <LogoH3>Movie</LogoH3>
      </Header>

      {console.log(movie)}
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <DetailBackDiv>
          <DetailTitleDiv>
            <h1>{movie.title_long}</h1>
            <DetailImg src={movie.large_cover_image} />
          </DetailTitleDiv>
          <DetailInfoDiv>
            <CntDownloadDiv>
              다운로드 수 : {movie.download_count}
            </CntDownloadDiv>
            <CntLikeDiv>좋아요 : {movie.like_count}</CntLikeDiv>
            <GenreUl>
              {movie.genres.map((genre) => {
                return <GenreLi>{genre}</GenreLi>;
              })}
            </GenreUl>
            <p>{movie.description_full}</p>
          </DetailInfoDiv>
        </DetailBackDiv>
      )}
    </>
  );
}

export default Detail;
