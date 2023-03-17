import { ProjectsItem } from '../projectsItem';
import './dashboard.css';
import { AiFillGithub } from 'react-icons/ai';

export const ProjectsList = ({ projectList }) => {
	return (
		<div className="projects-display">
			<h2>My personal projects</h2>
			<p>Here are a few past design projects I've worked on</p>
			<div className="project-item-display">
				{projectList.map((item) => (
					<ProjectsItem key={'item' + item.key} item={item} />
				))}
			</div>
			<span>
				<a href="https://github.com/Itsmysecondacount" target="_blank" rel="noreferrer">
					<AiFillGithub /> See code on GitHub
				</a>
			</span>
		</div>
	);
};
