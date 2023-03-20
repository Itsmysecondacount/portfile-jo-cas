import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./footer.css";
import jcLogo from "../../assets/logo_sprite-export.png";
import React from "react";
import { ThemeContext } from "../hooks/useThemes";

export const Footer = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div className={`footer ${theme && "dark-footer"}`}>
      <img src={jcLogo} alt="small-img" className="small-img" />
      <p>Living, learning, & leveling up one day at a time</p>
      <span className="footer-span">
        <a
          href="https://github.com/Itsmysecondacount"
          rel="noreferrer"
          target="_blank"
        >
          <AiFillGithub size={"4em"} className="logo-link" />
        </a>
        <a
          href="https://www.linkedin.com/in/jorge-castillo-79b06a14b/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin size={"4em"} className="logo-link" />
        </a>
      </span>
    </div>
  );
};
