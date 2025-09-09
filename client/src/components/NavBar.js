import { useState, useEffect, useRef } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/logo4.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";

const SECTION_IDS = ["home", "skills", "projects"];

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const lastActiveRef = useRef(activeLink);

  // navbar background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // scroll spy for active link
  useEffect(() => {
    const getActiveFromScroll = () => {
      const viewportH = window.innerHeight;
      const topGuard = viewportH * 0.2;   // top 20% of viewport
      const bottomGuard = viewportH * 0.6; // bottom 60% cutoff

      let newActive = "";

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const inView =
          rect.top <= bottomGuard && rect.bottom >= topGuard; // overlaps middle band
        if (inView) {
          newActive = id;
          break; // first match wins -> exactly one active
        }
      }

      if (newActive !== lastActiveRef.current) {
        lastActiveRef.current = newActive;
        setActiveLink(newActive); // can be "" to unset
      }
    };

    // run on mount and on scroll/resize
    getActiveFromScroll();
    window.addEventListener("scroll", getActiveFromScroll, { passive: true });
    window.addEventListener("resize", getActiveFromScroll);
    return () => {
      window.removeEventListener("scroll", getActiveFromScroll);
      window.removeEventListener("resize", getActiveFromScroll);
    };
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span>
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/erika-cole-398a37189/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/ecole1rllco" target="_blank" rel="noreferrer">
                <img src={navIcon2} alt="" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
