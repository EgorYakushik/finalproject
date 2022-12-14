import "./styles/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";
import Education from "./pages/Education";
import Skills from "./pages/Skills";

import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/project/:id" element={<Project />}/>
          <Route path="/education" element={<Education />}/>
          <Route path="/skills" element={<Skills />}/>
          <Route path="/contacts" element={<Contacts />}/>
        </Routes>
        <Footer />
      </Router>
        

    </div>
  );
}

export default App;
