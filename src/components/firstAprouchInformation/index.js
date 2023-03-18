import imageReact from '../../assets/real_sprite.png';
import imagePc from '../../assets/table_art.png';
import './aprouch.css';

export const FirstAprouchInformation = () => {
	return (
		<>
			<div className="aprouch-information">
				<h1>Designer, Frontend Developer</h1>
				<p>I design and code beautifully simple things, and I love what I do.</p>
				<img className="pixel-art" src={imageReact} alt="pixel-art" />
				<img src={imagePc} alt="copy" />
			</div>
			<div className="small-information-about">
				<h2>Hi, I'm Jorge. Nice to meet you</h2>
				<p>
					I'm a designer and frontend developer with experience using React. I'm
					passionate about creating beautiful and user-friendly websites and applications
					that help solve problems and make people's lives easier. Whether it's designing
					a new interface or coding a complex feature, I'm always up for a challenge and
					love working with others to bring ideas to life. In addition to my design and
					development skills, I'm also constantly learning about the latest technologies
					and trends in the field. I believe that staying up-to-date on emerging tools and
					techniques is essential to delivering the best possible results for clients and
					users. In my free time, you can find me exploring new design trends, playing
					video games, or hiking in the great outdoors.
				</p>
			</div>
		</>
	);
};
