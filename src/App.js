import './App.css';
import { FirstAprouchInformation } from './components/firstAprouchInformation';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { ProjectsList } from './components/projectsList';
import { Skills } from './components/skills';
import { arrayProjects as array } from './data';

function App() {
	return (
		<>
			<Header />
			<FirstAprouchInformation />
			<Skills />
			<ProjectsList projectList={array} />
			<Footer />
		</>
	);
}

export default App;
