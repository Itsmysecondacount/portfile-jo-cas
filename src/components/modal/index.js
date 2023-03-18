import { MdDarkMode } from "react-icons/md";

export const Modal = ({ toggleTheme }) => {
  return (
    <div className="modal-styles">
      <MdDarkMode onClick={toggleTheme} color={"#8B81DC"} size={"3em"} />
    </div>
  );
};
