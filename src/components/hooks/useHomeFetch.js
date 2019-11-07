import { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../../config";
import { string } from "postcss-selector-parser";

export const useHomeFetch = () => {
	const [state, setState] = useState({ movies: [] });
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	// we don't know when we get data from API so we need to use async/await
	const fetchMovies = async endpoint => {
		setError(false);
		setLoading(true);

		// if there is a 'page' in endpoint string - return string, otherwise - return (-1)
		const isLoadMore = endpoint.search("page");

		try {
			// we wait until fetched data will be parsed to json
			const result = await (await fetch(endpoint)).json();
			setState(prev => ({
				...prev,
				movies:
					isLoadMore !== -1
						? [...prev.movies, ...result.results]
						: [...result.results],
				heroImage: prev.heroImage || result.results[0],
				currentPage: result.page,
				totalPages: result.total_pages
			}));
		} catch (error) {
			setError(true);
			console.log(error);
		}
		// we stopped Loading at this moment
		setLoading(false);
	};

	useEffect(() => {
		fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`);
	}, []);

	return [{ state, loading, error }, fetchMovies];
};
