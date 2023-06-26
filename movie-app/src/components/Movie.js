import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";

let MovieBackDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 10px;
`;

let MovieBackImg = styled.img``;

let MovieInfoDiv = styled.div`
  position: absolute;
  background-color: black;
  align-items: center;
  justyfy-content: center;
  width: 230px;
  height: 345px;
  opacity: 0.7;
`;

let MovieInfoContentDiv = styled.div`
  padding: 20px;
`;

let MovieTitleDiv = styled.div`
  font-size: 20px;
  text-align: center;
  color: white;
`;

let MovieYearP = styled.p`
  text-align: center;
  color: white;
`;

let MovieSummaryP = styled.p`
  width: 100%;
  height: 150px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: white;
`;

let MovieGenresUl = styled.p`
  padding-top: 15px;
  height: 100px;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: white;
`;

function Movie({ id, coverImg, title, summary, genres, year }) {
  const [isEntering, setIsEntering] = useState(true);

  return (
    <MovieBackDiv className="back">
      <MovieBackImg src={coverImg} />
      <MovieInfoDiv className="hidden">
        <MovieInfoContentDiv>
          <Link to={`/movie/${id}`}>
            <MovieTitleDiv>{title}</MovieTitleDiv>

            <MovieYearP>{year}</MovieYearP>
            <MovieSummaryP>{summary}</MovieSummaryP>
            <MovieGenresUl>
              {genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </MovieGenresUl>
          </Link>
        </MovieInfoContentDiv>
      </MovieInfoDiv>
    </MovieBackDiv>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number.isRequired,
};
export default Movie;
