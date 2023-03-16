import imageReact from "../../assets/FSAv9bAXMAYrQMR.jpg";
import "./aprouch.css";

export const FirstAprouchInformation = () => {
  return (
    <>
      <div className="aprouch-information">
        <h1>Designer, Frontend Developer</h1>
        <p>
          I design and code beautifully simple things, and I love what I do.
        </p>
        <img className="pixel-art" src={imageReact} alt="pixel-art-image" />
        <img src="https://mattfarley.ca/img/hero-devices.svg" alt="copy" />
      </div>
      <div className="small-information-about">
        <h2>Hi, I'm Jorge. Nice to meet you</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          repudiandae qui, doloremque veniam eius optio molestiae eos magnam
          officia, atque nulla illum nam odit praesentium magni aperiam
          obcaecati eveniet distinctio.
        </p>
      </div>
    </>
  );
};
