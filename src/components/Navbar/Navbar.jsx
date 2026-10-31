import "./Navbar.css";

function Navbar() {
    return (
        <nav aria-label="Main navigation">
            <a className="nav-brand" href="#about" aria-label="Andrea Churchwell home">ac<span>.</span></a>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#open-source">Open Source</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
