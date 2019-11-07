import React from "react";
import { Link } from "@reach/router";
import {
	StyledHeader,
	StyledMoviefyLogo,
	StyledTMDBLogo
} from "../styles/StyledHeader";
import logo from "../images/logo.png";
import TMDBlogo from "../images/tmdb_logo.svg";

const Header = () => (
	<StyledHeader>
		<div className="header-content">
			<Link to="/">
				<StyledMoviefyLogo src={logo} alt="Moviefy" />
			</Link>
			<StyledTMDBLogo src={TMDBlogo} alt="tmdb-logo" />
		</div>
	</StyledHeader>
);

export default Header;
