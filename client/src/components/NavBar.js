import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/logo4.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";

const SECTION_IDS = ["home", "skills", "projects"];

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    // Change navbar style on scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Highlight section in view using IntersectionObserver
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveLink(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        SECTION_IDS.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // Smooth scroll behavior
    const handleNavClick = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setActiveLink(id);
        }
    };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand
                    onClick={() => handleNavClick("home")}
                    style={{ cursor: "pointer" }}
                >
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ width: "120px", height: "auto" }} // adjust size here
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon" />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {SECTION_IDS.map((id) => (
                            <Nav.Link
                                key={id}
                                onClick={() => handleNavClick(id)}
                                className={
                                    activeLink === id ? "active navbar-link" : "navbar-link"
                                }
                            >
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </Nav.Link>
                        ))}
                    </Nav>
                    <span>
                        <div className="social-icon">
                            <a
                                href="https://www.linkedin.com/in/erika-cole-398a37189/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={navIcon1} alt="LinkedIn" />
                            </a>
                            <a
                                href="https://github.com/ecole1rllco"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={navIcon2} alt="GitHub" />
                            </a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
