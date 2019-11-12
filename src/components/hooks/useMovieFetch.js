import { useEffect, useState, useCallback } from "react";
import { API_URL, API_KEY } from "../../config";

export const useMovieFetch = movieId => {
	const [state, setState] = useState({});
	// !!! I set loading to true because
	// loading should be FALSE (when we first render MovieInfo component - see Movie.js)
	// if(loading) return <Spinner />
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const fetchData = useCallback(async () => {
		setError(false);
		setLoading(true);

		try {
			// Grab data from particular movie
			const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
			const result = await (await fetch(endpoint)).json();
			// console.log(result);

			const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
			const creditsResult = await (await fetch(creditsEndpoint)).json();
			// console.log(creditsResult);

			const directors = creditsResult.crew.filter(
				member => member.job === "Director"
			);

			setState({
				...result
				// actors: creditsResult.cast,
				// directors
			});
		} catch (error) {
			setError(true);
		}

		// setError(false);
		setLoading(false);
	}, [movieId]);

	useEffect(() => {
		if (localStorage[movieId]) {
			// console.log("Grabbing from local Storage");
			setState(JSON.parse(localStorage[movieId]));
			setLoading(false);
		} else {
			// console.log("Grabbing from API");
			fetchData();
		}
	}, [fetchData, movieId]);

	// setting Local Storage
	useEffect(() => {
		localStorage.setItem(movieId, JSON.stringify(state));
	}, [movieId, state]);

	return [state, loading, error];
};
