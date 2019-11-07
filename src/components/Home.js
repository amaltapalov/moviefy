import React, { useState } from "react";
import {
	API_URL,
	API_KEY,
	IMAGE_BASE_URL,
	BACKDROP_SIZE,
	POSTER_SIZE
} from "../config";
import HeroImage from "./elements/HeroImage";
import SearchBar from "./elements/SearchBar";
import Grid from "./elements/Grid";
import MovieThumb from "./elements/MovieThumb";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import Spinner from "./elements/Spinner";

import { useHomeFetch } from "./hooks/useHomeFetch";
import NoImage from "./images/no_image.jpg";

const Home = () => {
	const [{ state, loading, error }, fetchMovies] = useHomeFetch();
	const [searchTerm, setSearchTerm] = useState("");

	console.log(state);

	// if Data is not fetched - show Error
	if (error) return <div>Something went wrong</div>;
	// if Movie data hasn't been uploaded - show spinner
	if (!state.movies[0]) return <Spinner />;

	return (
		<>
			{/* HeroImage: we take data from useHomeFetch */}
			<HeroImage
				title={state.heroImage.original_title}
				text={state.heroImage.overview}
				image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
			/>
			<SearchBar />
			<Grid header={searchTerm ? "Search result" : "Popular movies"}>
				{/* map through dataa in state (see console) */}
				{state.movies.map(movie => (
					<MovieThumb
						key={movie.id}
						clickable
						image={
							movie.poster_path
								? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
								: NoImage
						}
						movieId={movie.id}
						movieName={movie.original_title}
					/>
				))}
			</Grid>
			<Spinner />
			<LoadMoreBtn />
		</>
	);
};

export default Home;
