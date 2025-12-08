import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Stack from "./components/Stack";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Stack />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
