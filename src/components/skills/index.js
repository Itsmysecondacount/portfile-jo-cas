import { AiOutlineCode } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";
import "./skills.css";

export const Skills = () => {
  return (
    <div className="skills-container">
      <div className="designer-skills">
        <MdDesignServices size={"3em"} />
        <h2>Designer</h2>
        <p>
          I value simple content structure, clean design patterns, and
          thoughtful interactions.
        </p>
        <h3>Things I enjoy designing:</h3>
        <p>UX, UI, Web, Apps, Logos</p>
        <h3>Design Tools:</h3>
        <ul>
          <li>Affinity Designer</li>
          <li>Figma</li>
          <li>Font Awesome</li>
          <li>Pen & Paper</li>
          <li>Sketch</li>
          <li>Webflow</li>
        </ul>
      </div>

      <div className="frontend-skills">
        <AiOutlineCode size={"3em"} />
        <h2>Frontend Developer</h2>
        <p>
          I like to code things from scratch, and enjoy bringing ideas to life
          in the browser.
        </p>
        <h3>Languages I speak:</h3>
        <p>HTML, Pug, Slim, CSS, Sass, Git</p>
        <h3>Dev Tools:</h3>
        <ul>
          <li>Atom</li>
          <li>Bitbucket</li>
          <li>Bootstrap</li>
          <li>Github</li>
          <li>Terminal</li>
          <li>React</li>
        </ul>
      </div>
    </div>
  );
};
