import './proyectItem.css';

export const ProjectsItem = ({ item }) => {
	return (
		<>
			<figure className="figure-container">
				<img src={item.img} alt="example" />
				<figcaption>
					<h2>{item.title}</h2>
					<p>{item.description}</p>
					<span className="a-ref-black">
						<a href={item.url} target="_blank" rel="noreferrer">
							See Project
						</a>
					</span>
				</figcaption>
			</figure>
		</>
	);
};
