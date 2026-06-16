import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import MouseRibbon from "./components/MouseRibbon/MouseRibbon";
import Contact from "./components/Contact/Contact";
import botanicalWallpaper from "./assets/botanical-wallpaper.png";

function App() {
  return (
    <>
      <MouseRibbon />
      <div className="site-wallpaper" aria-hidden="true">
        <img src={botanicalWallpaper} alt="" />
      </div>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
