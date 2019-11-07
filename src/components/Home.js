import React from "react";
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

const Home = () => {
	const [{ state, loading, error }, fetchMovies] = useHomeFetch();
	console.log(state);

	if (error) return <div>Something went wrong</div>;
	if (!state.movies[0]) return <Spinner />;

	return (
		<>
			<HeroImage
				title={state.heroImage.original_title}
				text={state.heroImage.overview}
				image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
			/>
			<SearchBar />
			<Grid />
			<MovieThumb />
			<Spinner />
			<LoadMoreBtn />
		</>
	);
};

export default Home;
