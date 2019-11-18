import React from "react";
import PropTypes from "prop-types";

import NoImage from "../../images/no_image.jpg";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

import MovieThumb from "./MovieThumb";

import { StyledMovieInfo } from "../styles/StyledMovieInfo";

const MovieInfo = ({ movie }) => (
  <StyledMovieInfo backdrop={movie.backdrop_path}>
    <div className="movieinfo-content">
      <div className="movieinfo-thumb">
        <MovieThumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
          alt="moviethumb"
        />
      </div>
      <div className="movieinfo-text">
        <h1>{movie.title}</h1>
        <h3>Plot</h3>
        <p>{movie.overview}</p>

        <div className="movieinfo-data">
          <div>
            <h3>IMDB Rating</h3>
            <div className="score">{movie.vote_average}</div>
          </div>
          <div>
            <h3>Director{movie.directors.length > 1 ? "s" : ""}</h3>

            {movie.directors.map(element => (
              <p key={element.credit_id}>{element.name}</p>
            ))}
          </div>
          <div>
            <h3>Runtime</h3>
            <div>{movie.runtime} minutes</div>
          </div>
          <div>
            <h3>Genres</h3>
            <div>{movie.genres.map(item => item.name).join(", ")}</div>
          </div>
        </div>
      </div>
    </div>
  </StyledMovieInfo>
);

MovieInfo.propTypes = {
  movie: PropTypes.object,
  directors: PropTypes.array
};

export default MovieInfo;
