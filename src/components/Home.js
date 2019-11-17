import React, { useState } from "react";
import {
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  SEARCH_BASE_URL,
  POPULAR_BASE_URL
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
  // searchTerm is a query of search bar
  const [searchTerm, setSearchTerm] = useState("");
  const [{ state, loading, error }, fetchMovies] = useHomeFetch();

  // Search movie based on endpoints
  const searchMovies = search => {
    const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;
    setSearchTerm(search);
    fetchMovies(endpoint);
  };

  // Function for Load More button (see useHomeFetch)
  const loadMoreMovies = () => {
    const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${state.currentPage +
      1}`;
    const popularEndpoint = `${POPULAR_BASE_URL}&page=${state.currentPage + 1}`;
    // if endpoint is SearchTerms - show Search result page , otherwise popular page
    const endpoint = searchTerm ? searchEndpoint : popularEndpoint;
    fetchMovies(endpoint);
  };

  // console.log(state);

  // If there is an error
  if (error) return <div>Something went wrong</div>;
  // If we don't fetch data yet (it can be anything params from fetching - ex. state.movies[0])
  if (!state.movies[0]) return <Spinner />;

  return (
    <>
      {/* HeroImage: we take data from useHomeFetch */}
      {!searchTerm && (
        <HeroImage
          title={state.heroImage.original_title}
          text={state.heroImage.overview}
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
        />
      )}
      <SearchBar callback={searchMovies} />
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
      {loading && <Spinner />}

      {/* Control Load More button visibility. it's visible when
			1. when we are on the last page
			2. when we aren't loading
			*/}
      {state.currentPage < state.totalPages && !loading && (
        <LoadMoreBtn text="Load more" callback={loadMoreMovies} />
      )}
    </>
  );
};

export default Home;
