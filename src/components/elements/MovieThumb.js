import React from "react";
import { StyledMovieThumb } from "../styles/StyledMovieThumb";

const MovieThumb = ({ image, movieId, movieName, clickable }) => (
	<StyledMovieThumb>
		{clickable ? (
			<img className="clickable" src={image} alt="moviethumb" />
		) : (
			<img src={image} alt="moviethumb" />
		)}
	</StyledMovieThumb>
);

export default MovieThumb;
