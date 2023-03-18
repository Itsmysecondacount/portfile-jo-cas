import { MdDarkMode } from "react-icons/md";
import "./modal.css";

export const Modal = ({ toggleTheme }) => {
  return (
    <div className="modal-styles">
      <MdDarkMode onClick={toggleTheme} color={"#8B81DC"} size={"3em"} />
    </div>
  );
};
