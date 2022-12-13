import "./styles/main.css";

import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";
import Education from "./pages/Education";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="App">
        <Nav />

        {/* <Home /> */}
        {/* <Projects /> */}
        <Project />
        {/* <Contacts /> */}
        {/* <Education /> */}
        {/* <Skills /> */}

        <Footer />

    </div>
  );
}

export default App;
