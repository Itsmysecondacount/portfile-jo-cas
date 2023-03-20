import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import "./modal.css";

export const Modal = () => {
  const [theme, setTheme] = useState("light");

  const handleChange = () => setTheme(theme === "dark" ? "light" : "dark");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="modal-styles">
      <MdDarkMode
        onClick={handleChange}
        size={"3em"}
        className="theme-button"
      />
    </div>
  );
};
