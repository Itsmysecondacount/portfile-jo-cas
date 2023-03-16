import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./footer.css";
import jcLogo from "../../assets/png-transparent-linkedin-social-media-blog-social-network-computer-icons-jc-text-trademark-logo.png";

export const Footer = () => {
  return (
    <div className="footer">
      <img src={jcLogo} alt="small-img" className="small-img" />
      <p>Living, learning, & leveling up one day at a time</p>
      <span className="footer-span">
        <a href="https://github.com/Itsmysecondacount">
          <AiFillGithub size={"3em"} className="logo-link" />
        </a>
        <a href="http://">
          <AiFillLinkedin size={"3em"} className="logo-link" />
        </a>
      </span>
    </div>
  );
};
