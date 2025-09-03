import { Container, Row, Col, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav';
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp4.png';
import projImg1 from '../assets/img/project-img.png';

export const Projects = () => {

    const projects = [
        {
            title: "Personal Portfolio",
            description: "A personal portfolio showcasing my expertise in React for dynamic front-end experiences and Node.js for robust back-end functionality.",
            imageUrl: projImg1
        }
    ];

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Here are some of my recent projects demonstrating my skills and expertise.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                const isSingleProject = projects.length === 1;
                                                return (
                                                    <Col key={index} sm={isSingleProject ? 12 : 6} md={isSingleProject ? 12 : 4}>
                                                        <ProjectCard
                                                            key={index}
                                                            {...project}
                                                            />
                                                    </Col>
                                                )
                                            })
                                         }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="Background" />
        </section>
    )

}




