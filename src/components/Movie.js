import React from "react";
import Actor from "./elements/Actor";
import MovieInfoBar from "./elements/MovieInfoBar";
import MovieInfo from "./elements/MovieInfo";
import Navigation from "./elements/Navigation";
import Grid from "./elements/Grid";
import Spinner from "./elements/Spinner";

import { useMovieFetch } from "./hooks/useMovieFetch";

const Movie = ({ movieId }) => {
	const [movie, loading, error] = useMovieFetch(movieId);

	// movie param consists of (result) and (creditsResult)
	// see usemovieFetch.js for more
	console.log(movie);

	if (error) return <div>Something went wrong!</div>;
	if (loading) return <Spinner />;

	return (
		<>
			<Navigation movie={movie.original_title} />
			<MovieInfo movie={movie} />
			<MovieInfoBar />
			<Grid>
				<Actor />
			</Grid>
			{loading && <Spinner />}
		</>
	);
};

export default Movie;
