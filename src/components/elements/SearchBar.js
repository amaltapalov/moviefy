import React, { useState, useRef } from "react";
import FontAwesome from "react-fontawesome";
import {
	StyledSearchBar,
	StyledSearchBarContent
} from "../styles/StyledSearchBar";
import { clear } from "sisteransi";

const SearchBar = ({ callback }) => {
	const [state, setState] = useState("");
	const timeOut = useRef(null);

	const doSearch = event => {
		console.log(event.target.value);
		// Synchronize search bar and input
		const { value } = event.target;
		clearTimeout(timeOut.current);
		setState(value);

		// Wait 0.5s until trigger callback function
		timeOut.current = setTimeout(() => {
			callback(value);
		}, 500);
	};
	return (
		<StyledSearchBar>
			<StyledSearchBarContent>
				<FontAwesome className="fa-search" name="search" size="2x" />
				<input
					type="text"
					placeholder="Search Movie"
					onChange={doSearch}
					value={state}
				/>
			</StyledSearchBarContent>
		</StyledSearchBar>
	);
};

export default SearchBar;
