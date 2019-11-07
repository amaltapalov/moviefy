import React from "react";
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

export default Navigation;
