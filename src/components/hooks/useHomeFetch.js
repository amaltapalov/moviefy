import { useState, useEffect } from "react";
import { POPULAR_BASE_URL } from "../../config";

export const useHomeFetch = searchTerm => {
	const [state, setState] = useState({ movies: [] });
	const [loading, setLoading] = useState(true);
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

	// Fetch popular movies initially on mount
	useEffect(() => {
		if (sessionStorage.homeState) {
			// console.log("Grabbing from Session Storage");
			setState(JSON.parse(sessionStorage.homeState));
			setLoading(false);
		} else {
			// console.log("Grabbing from API");
			fetchMovies(POPULAR_BASE_URL);
		}
	}, []);

	// setting Session Storage
	useEffect(() => {
		// console.log("Writing to SessionStorage");
		if (!searchTerm) {
			sessionStorage.setItem("homeState", JSON.stringify(state));
		}
	}, [searchTerm, state]);

	return [{ state, loading, error }, fetchMovies];
};
