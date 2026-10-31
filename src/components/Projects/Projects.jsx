import "./Projects.css";

const stack = {
    october: ["Python", "Streamlit", "pandas", "NumPy", "Statcast", "MLB Stats API"],
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
                    Built with curiosity. Designed with purpose.
                </h2>
                <p className="projects-intro">From learning with AI to finding patterns in sports data — a few things I’ve brought to life.</p>
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
                            Explore Our Door ↗
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

            <article className="project-feature october-feature" aria-labelledby="october-title">
                <div className="project-feature-copy">
                    <p className="project-kicker">Featured Project · 02</p>
                    <h3 id="october-title">October Shift</h3>
                    <p className="project-subtitle">Which MLB teams are built best for October?</p>
                    <p className="project-description">
                        Built an interactive analytics dashboard that compares all 30 MLB teams
                        through their offense, projected rotations, bullpens, recent form, and
                        quality-adjusted results. Team profiles and ranking history put each
                        contender’s strengths and weaknesses in context.
                    </p>
                    <p className="project-description">
                        When pitching features didn’t consistently improve a simpler prediction
                        baseline, I reframed the project around a question the data could answer
                        more honestly: how do teams compare entering October?
                    </p>
                    <div className="project-context" aria-label="October Shift engineering highlights">
                        <span>15-step data pipeline</span>
                        <span>Frozen, reproducible season baseline</span>
                        <span>Relative ratings, not championship odds</span>
                    </div>
                    <StackList items={stack.october} />
                    <div className="project-links">
                        <a href="https://october-shift.streamlit.app/" target="_blank" rel="noreferrer" className="romantic-link label-button is-pink">Explore the dashboard ↗</a>
                        <a href="https://github.com/Andreachurchwell/2026-mlb-prediction" target="_blank" rel="noreferrer" className="romantic-link label-button is-sage">GitHub Repository</a>
                    </div>
                </div>
                <aside className="october-overview" aria-label="October Shift at a glance">
                    <p className="section-label">Baseball, beyond the standings</p>
                    <p className="october-stat"><strong>30</strong><span>teams. One comparative view.</span></p>
                    <ul>
                        <li><span>01</span> Offense &amp; recent momentum</li>
                        <li><span>02</span> Rotation strength &amp; depth</li>
                        <li><span>03</span> Bullpen quality &amp; reliability</li>
                        <li><span>04</span> Results with opponent context</li>
                    </ul>
                    <p className="october-baseline">2026 regular-season baseline<br /><strong>Preserved through September 27</strong></p>
                </aside>
            </article>

            <div className="project-spread">
                <article className="project-story bracket-story">
                    <p className="project-number">03</p>
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
                            Try the simulator ↗
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
                    <p className="project-number">04</p>
                    <h3>CesiumJS Open Source</h3>
                    <p className="project-subtitle">One merged fix. One in-depth investigation.</p>
                    <p className="project-description">
                        Contributed to CesiumJS through FCF, collaborating with maintainers
                        on two issues in its 3D geospatial engine.
                    </p>
                    <div className="contribution-detail">
                        <h4>Resilient glTF texture loading</h4>
                        <p>
                            Traced invalid sampler wrap modes through the texture-loading code
                            and clarified fallback behavior with maintainers. The resulting fix
                            was merged in PR #13562, closing issue #12781.
                        </p>
                        <a className="romantic-link label-button is-sage contribution-link" href="https://github.com/CesiumGS/cesium/pull/13562" target="_blank" rel="noreferrer">Merged fix · PR #13562 ↗</a>
                    </div>
                    <div className="contribution-detail">
                        <h4>Google Maps attribution investigation</h4>
                        <p>
                            Added runtime logging and compared attribution responses across
                            zoom levels to investigate repeated map credits. Traced the overlap
                            to distinct provider responses rather than duplicate credit IDs,
                            helping maintainers clarify why a simple deduplication fix would
                            discard required attribution.
                        </p>
                        <a className="romantic-link label-button is-sage contribution-link" href="https://github.com/CesiumGS/cesium/issues/12944" target="_blank" rel="noreferrer">Investigation · Issue #12944 ↗</a>
                    </div>
                    <StackList items={stack.cesium} />
                </article>
            </div>

            <div className="project-notes">
                <article className="project-note">
                    <p className="project-number">05</p>
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
                    <p className="project-number">06</p>
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
                    <p className="project-number">07</p>
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
