import { Modal } from "../modal";
import "./header.css";
import jcLogo from "../../assets/logo_sprite-export.png";
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
