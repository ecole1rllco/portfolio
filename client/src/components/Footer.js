import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/logo4.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.png';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/erika-cole-398a37189/" target="_blank"><img src={navIcon1} alt="LinkedIn" /></a>
                            <a href="https://github.com/ecole1rllco" target="_blank"><img src={navIcon2} alt="GitHub" /></a>
                        </div>
                        <p>&copy; 2025 Erika Cole</p>
                    </Col>
                </Row>
            </Container>           
        </footer>
    )
}