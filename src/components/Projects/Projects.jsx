import "./Projects.css";

const stack = {
    ourDoor: ["React", "FastAPI", "ChromaDB", "OpenAI", "SQLite"],
    bracket: ["Python", "Pandas", "Streamlit", "Feature Engineering", "Monte Carlo Simulation"],
    cesium: ["JavaScript", "Git", "Testing", "Open Source"],
    weather: ["Python", "Tkinter", "OpenWeather API", "SQLite", "Matplotlib", "Scikit-learn"],
    nba: ["Python", "Pandas", "Plotly", "Logistic Regression", "Data Visualization"],
    cat: ["Python", "OpenCV", "YOLO", "Computer Vision"],
};

function StackList({ items }) {
    return (
        <ul className="project-stack" aria-label="Technology stack">
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
}

function Projects() {
    return (
        <section className="projects" id="projects">

            <div className="projects-heading">
                <p className="section-label">
                    Featured Work
                </p>

                <h2>
                    Projects I've Loved Building
                </h2>
            </div>

            <article className="project-feature">
                <div className="project-feature-copy">
                    <p className="project-kicker">Featured Project</p>

                    <h3>Our Door</h3>

                    <p className="project-subtitle">
                        AI Learning Platform
                    </p>

                    <p className="project-description">
                        A private learning space designed to help students learn with AI rather
                        than simply receive answers. Students can choose between hints,
                        curriculum references, and next steps while instructors gain anonymous
                        insight into common struggles.
                    </p>

                    <div className="project-context" aria-label="Project context">
                        
                        <span>Built with Team Three's Company</span>
                        <span>Educational guardrails to encourage learning</span>
                        <span>Anonymous instructor insights</span>
                    </div>

                    <StackList items={stack.ourDoor} />

                    <div className="project-links">
                        <a href="https://ourdoor.sampom.me" target="_blank" rel="noreferrer" className="romantic-link label-button is-pink">
                            Our Door
                        </a>
                        <a href="https://github.com/SamPomeroy/our-door" target="_blank" rel="noreferrer" className="romantic-link label-button is-sage">
                            GitHub Repository
                        </a>
                    </div>
                </div>

                <div className="project-feature-art" aria-hidden="true">
                    <div className="chapter-card">
                        <p>01</p>
                        <h4>Learn with AI, not from it.</h4>
                    </div>
                </div>
            </article>

            <div className="project-spread">
                <article className="project-story bracket-story">
                    <p className="project-number">02</p>
                    <h3>Andrea's Bracket Breakdown</h3>
                    <p className="project-subtitle">March Madness Simulator</p>
                    <p className="project-description">
                        Built an interactive NCAA tournament simulator using feature engineering
                        and Monte Carlo methods to explore bracket outcomes and probabilities.
                    </p>
                    <StackList items={stack.bracket} />
                    <div className="project-links">
                        <a
                            href="https://march-madness-bracket-simulator-aagsrgemhfrs8ibkjjqcme.streamlit.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="romantic-link label-button is-pink"
                        >
                            Streamlit App
                        </a>
                        <a
                            href="https://github.com/Andreachurchwell/march-madness-bracket-simulator"
                            target="_blank"
                            rel="noreferrer"
                            className="romantic-link label-button is-sage"
                        >
                            GitHub Repository
                        </a>
                    </div>
                </article>

                <article className="project-story cesium-story" id="open-source">
                    <p className="project-number">03</p>
                    <h3>CesiumJS Open Source</h3>
                    <p className="project-subtitle">Open Source Contribution</p>
                    <p className="project-description">
                        Contributed a fix to the CesiumJS engine, working within a large
                        open-source codebase through testing, code reviews, and collaboration
                        before the change was merged into the project.
                    </p>
                    <StackList items={stack.cesium} />
                    <a
                        className="project-highlight romantic-link label-button is-sage"
                        href="https://github.com/CesiumGS/cesium"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Merged PR #13562
                    </a>
                </article>
            </div>

            <div className="project-notes">
                <article className="project-note">
                    <p className="project-number">04</p>
                    <h3>Volunteer Weather</h3>
                    <p className="project-subtitle">Weather Analytics Dashboard</p>
                    <p>
                        Built a Python and Tkinter weather dashboard featuring forecasts, radar
                        animations, map overlays, and interactive visualizations.
                    </p>
                    <p>
                        Developed a hometown temperature prediction model using linear regression
                        and collaborated on a team feature comparing weather patterns across
                        hometowns nationwide. Selected to present the GUI at graduation.
                    </p>
                    <StackList items={stack.weather} />
                    <div className="project-links compact-links">
                        <a
                            href="https://github.com/Andreachurchwell/TPS_Capstone2025"
                            target="_blank"
                            rel="noreferrer"
                            className="romantic-link label-button is-sage"
                        >
                            GitHub Repository
                        </a>
                    </div>
                </article>

                <article className="project-note">
                    <p className="project-number">05</p>
                    <h3>NBA Fatigue Study</h3>
                    <p className="project-subtitle">Sports Data Analysis</p>
                    <p>
                        Analyzed NBA scheduling data from 2019-2024 to investigate how
                        back-to-backs, four-in-six stretches, and travel mileage influence team
                        performance.
                    </p>
                    <p>
                        Built a logistic regression model and created interactive visualizations
                        to uncover scheduling trends and differences across teams.
                    </p>
                    <StackList items={stack.nba} />
                </article>

                <article className="project-note">
                    <p className="project-number">06</p>
                    <h3>Catwalk Detection</h3>
                    <p className="project-subtitle">Computer Vision Project</p>
                    <p>
                        Created a real-time cat detection application using OpenCV and YOLO that
                        processes webcam input and automatically locks a Windows computer when a
                        cat is detected.
                    </p>
                    <StackList items={stack.cat} />
                    <div className="project-links compact-links">
                        <a
                            href="https://github.com/Andreachurchwell/camera-face-detection"
                            target="_blank"
                            rel="noreferrer"
                            className="romantic-link label-button is-sage"
                        >
                            GitHub Repository
                        </a>
                    </div>
                </article>
            </div>

        </section>
    );
}

export default Projects;
