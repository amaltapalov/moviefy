import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

import { StyledNavigation } from "../styles/StyledNavigation";

const Navigation = ({ movie }) => (
	<StyledNavigation>
		<div className="navigation-content">
			<Link to="/">
				<p>Home</p>
				<p>|</p>
				<p>{movie}</p>
			</Link>
		</div>
	</StyledNavigation>
);

Navigation.propTypes = {
	movie: PropTypes.string
};

export default Navigation;
