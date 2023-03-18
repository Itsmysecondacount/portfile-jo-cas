import { Modal } from "../modal";
import "./header.css";
import jcLogo from "../../assets/png-transparent-linkedin-social-media-blog-social-network-computer-icons-jc-text-trademark-logo.png";
import { ThemeContext } from "../hooks/useThemes";
import React from "react";

export const Header = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <div className={`header-layout ${theme && "dark-header"}`}>
      <img src={jcLogo} alt="jocas-img-small" />
      <Modal toggleTheme={toggleTheme} />
    </div>
  );
};
