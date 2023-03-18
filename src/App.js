import "./App.css";
import { FirstAprouchInformation } from "./components/firstAprouchInformation";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { ProjectsList } from "./components/projectsList";
import { Skills } from "./components/skills";
import img1 from "./assets/projects-images/1.png";
import img2 from "./assets/projects-images/2.png";
import img3 from "./assets/projects-images/3.png";
import { ThemeProvider } from "./components/hooks/useThemes";

const array = [
  {
    key: 1,
    img: img1,
    title: "Todo Machine Whit React Router",
    description:
      "Este proyecto es un ToDo machine que usa react router agregar los todos",
    url: "https://itsmysecondacount.github.io/proyect-todo-platzi-whit-router/#/",
  },
  {
    key: 2,
    img: img2,
    title: "Todo Machine Whit Listener",
    description:
      "Este es un proyecto de un ToDo machine con un open modal usando el LocalStorage así como tambien agregando un listener para poder saber si se hiso un cambio desde otra pestaña y poder bloquear el add en caso de que suceda",
    url: "https://itsmysecondacount.github.io/reactProyectFromPlatzi/",
  },
  {
    key: 3,
    img: img3,
    title: "Learning State Machines",
    description:
      "Aquí aprendí a usar las maquinas de estado con el xstate y se configuró una pasarela para que vallas completando datos así como el consumo de una api para hacer un desplegable con todos los paises que se pueden visitar",
    url: "https://itsmysecondacount.github.io/learning-xstate/",
  },
];

function App() {
  return (
    <ThemeProvider>
      <Header />
      <FirstAprouchInformation />
      <Skills />
      <ProjectsList projectList={array} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
