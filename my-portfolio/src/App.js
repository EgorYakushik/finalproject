import "./styles/main.css";

import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
        <Nav />

        {/* <Home /> */}
        <Projects />
        <Footer />

    </div>
  );
}

export default App;
