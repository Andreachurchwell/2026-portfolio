import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import MouseRibbon from "./components/MouseRibbon/MouseRibbon";
import Contact from "./components/Contact/Contact";
import botanicalWallpaper from "./assets/botanical-wallpaper.webp";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <MouseRibbon />
      <div className="site-wallpaper" aria-hidden="true">
        <img src={botanicalWallpaper} alt="" />
      </div>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="site-footer"><a href="#about">Andrea Churchwell</a><p>Made with care, curiosity, and React.</p><a href="#about">Back to top ↑</a></footer>
    </MotionConfig>
  );
}

export default App;
