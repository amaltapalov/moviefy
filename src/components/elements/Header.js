import React from "react";
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
			<StyledMoviefyLogo src={logo} alt="Moviefy" />
			<StyledTMDBLogo src={TMDBlogo} alt="tmdb-logo" />
		</div>
	</StyledHeader>
);

export default Header;
