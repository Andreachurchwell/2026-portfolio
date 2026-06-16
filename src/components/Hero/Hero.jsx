import "./Hero.css";
import { motion } from "framer-motion";
import botanicalWallpaper from "../../assets/botanical-wallpaper.png";


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
                    Hello, I'm
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
                    Always learning, always creating.
                </motion.h2>

                <motion.p
                    className="description"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .8 }}
                >
                    From healthcare to software, I've found joy in building
                    things that help people understand, explore, and grow
                    with confidence.
                </motion.p>

                <div className="buttons">

                    <a href="#projects" className="hero-button romantic-link label-button is-pink">
                        View Projects
                    </a>

                    <a href="#contact" className="hero-button outline romantic-link label-button is-sage">
                        Contact Me
                    </a>

                </div>

            </div>
            <div className="hero-image botanical-wallpaper" aria-label="Decorative botanical wallpaper artwork">

                <img
                    src={botanicalWallpaper}
                    alt="Vintage botanical wallpaper with watercolor flowers and leaves"
                    className="botanical-print"
                />

            </div>

        </section>
    );
}

export default Hero;
