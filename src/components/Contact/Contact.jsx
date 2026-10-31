import { FaFileDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./Contact.css";

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact-copy">
                <p className="section-label">Contact</p>

                <h2>Say hello.</h2>

                <p>
                    Thanks for stopping by. If something here sparked your curiosity,
                    I'd love to hear from you. I'm always excited to talk about software,
                    data, AI, basketball, and the projects that help us keep learning.
                </p>
            </div>

            <div className="contact-panel">
                <svg className="cat-easter-egg" viewBox="0 0 80 72" aria-hidden="true">
                    <path d="M16 43 C16 25 31 15 45 27 L53 13 L57 33 C66 43 61 62 39 62 C25 62 16 55 16 43Z" />
                    <path d="M28 43 C31 40 35 40 38 43" />
                    <path d="M47 43 C50 40 54 40 57 43" />
                    <path d="M40 49 C38 52 36 52 34 49" />
                </svg>

                <a
                    href="https://www.linkedin.com/in/andrea-churchwell-669443321/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link primary-contact romantic-link label-button is-pink"
                >
                    <FaLinkedinIn aria-hidden="true" />
                    <span>Connect on LinkedIn</span>
                </a>

                <a
                    href="https://github.com/Andreachurchwell"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link romantic-link label-button is-sage"
                >
                    <FaGithub aria-hidden="true" />
                    <span>View GitHub</span>
                </a>

                <a
                    href={`${import.meta.env.BASE_URL}Andrea-Churchwell-Resume.pdf`}
                    download
                    className="contact-link resume-link romantic-link label-button is-sage"
                >
                    <FaFileDownload aria-hidden="true" />
                    <span>Download Resume</span>
                </a>
            </div>
        </section>
    );
}

export default Contact;
