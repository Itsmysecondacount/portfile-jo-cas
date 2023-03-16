import { Modal } from "../modal";
import "./header.css";
import jcLogo from "../../assets/png-transparent-linkedin-social-media-blog-social-network-computer-icons-jc-text-trademark-logo.png";

export const Header = () => {
  return (
    <div className="header-layout">
      <img src={jcLogo} alt="jocas-img-small" />
      <Modal />
    </div>
  );
};
