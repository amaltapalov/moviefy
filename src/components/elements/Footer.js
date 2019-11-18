import React from "react";
import FontAwesome from "react-fontawesome";
import { StyledFooter } from "../styles/StyledFooter";
import logo from "../../images/logo.png";

const Footer = () => (
  <StyledFooter>
    <div>
      <img className="footer-logo" src={logo} alt="Moviefy" />
    </div>
    <div>
      <a href="https://github.com/amaltapalov/moviefy">
        <FontAwesome name="github" />
      </a>
      <a href="https://twitter.com/amaltapalov">
        <FontAwesome name="twitter" />
      </a>
      <a href="https://www.linkedin.com/in/amaltapalov/">
        <FontAwesome name="linkedin" />
      </a>
    </div>
  </StyledFooter>
);

export default Footer;
