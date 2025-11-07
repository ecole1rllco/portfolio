import { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/eka2.png';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');

    const toRotate2 = ["Hello,", "Bonjour,", "こんにちは,", "Kamusta,", "안녕하세요,"];

    // Timing config
    const typingSpeed = 180;   // ms per char
    const deletingSpeed = 60;  // ms per char
    const fullTextPause = 600; // pause after full word
    const emptyPause = 200;    // pause after deletion

    useEffect(() => {
        const ticker = setTimeout(() => tick(), isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(ticker);
    }, [text, isDeleting]);

    const tick = () => {
        const i = loopNum % toRotate2.length;
        const fullText = toRotate2[i];
        const updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
            // pause at full word before deleting
            setTimeout(() => setIsDeleting(true), fullTextPause);
        } else if (isDeleting && updatedText === '') {
            // move to next word
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{text}&nbsp;
                            <p>I’m a fullstack developer specializing in the .NET ecosystem, building scalable backends with C#, RESTful APIs, and SQL while also crafting clean, user-focused interfaces. Outside of coding, I bring experience in content creation and brand strategy to connect technology with people.</p>
                        </h1>
                        <a href="#connect" className="text-decoration-none">
                            <button>Let's Connect<ArrowRightCircle size={25}></ArrowRightCircle></button>
                        </a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
