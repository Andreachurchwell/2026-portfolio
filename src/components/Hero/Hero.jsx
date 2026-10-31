import "./Hero.css";
import { motion } from "framer-motion";
import botanicalWallpaper from "../../assets/botanical-wallpaper.webp";


function Hero() {
    return (
        <section className="hero" id="about">

            <div className="hero-text">

                <motion.p
                    className="intro"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6 }}
                >
                    SOFTWARE · DATA · CURIOSITY
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .8 }}
                >
                    Andrea Churchwell
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .4 }}
                >
                    Thoughtful software. A human perspective.
                </motion.h2>

                <motion.p
                    className="description"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .8 }}
                >
                    I’m Andrea — a builder with a background in healthcare and a love
                    for software, data, and AI. I create tools that help people
                    learn, explore, and make sense of what matters.
                </motion.p>

                <p className="hero-skills">React <span>·</span> Python <span>·</span> Data analysis <span>·</span> AI applications</p>

                <div className="buttons">

                    <a href="#projects" className="hero-button romantic-link label-button is-pink">
                        Explore my work ↗
                    </a>

                    <a href="#contact" className="hero-button outline romantic-link label-button is-sage">
                        Contact Me
                    </a>

                </div>

            </div>
            <div className="hero-image botanical-wallpaper" aria-hidden="true">

                <img
                    src={botanicalWallpaper}
                    alt=""
                    fetchPriority="high"
                    className="botanical-print"
                />
                <div className="hero-art-note"><span>A little curiosity goes a long way.</span><p>Always learning.<br />Always creating.</p><span>Andrea Churchwell · Selected work</span></div>

            </div>

        </section>
    );
}

export default Hero;
