import React from "react";
import Actor from "./elements/Actor";
import MovieInfoBar from "./elements/MovieInfoBar";
import MovieInfo from "./elements/MovieInfo";
import Navigation from "./elements/Navigation";
import Grid from "./elements/Grid";
import Spinner from "./elements/Spinner";

import { useMovieFetch } from "./hooks/useMovieFetch";

const Movie = ({ movieId }) => {
	const [state, loading, error] = useMovieFetch(movieId);

	// movie param consists of (result) and (creditsResult)
	// see useMovieFetch.js for more
	console.log(state);

	if (error) return <div>Something went wrong!</div>;
	if (loading) return <Spinner />;

	return (
		<>
			<Navigation movie={state.original_title} />
			<MovieInfo movie={state} />
			<MovieInfoBar
				time={state.runtime}
				budget={state.budget}
				revenue={state.revenue}
			/>
			<Grid header="Actors">
				{state.actors.map(actor => (
					<Actor key={actor.id} actor={actor} />
				))}
				<p>Actor's name</p>
			</Grid>
			{loading && <Spinner />}
		</>
	);
};

export default Movie;
