import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imageUrl }) => {
    return (
        <a href="https://github.com/ecole1rllco/portfolio" target="_blank" rel="noreferrer">
            <div className="proj-imgbx">
                <img src={imageUrl} alt={title} />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
            </div>
        </a>
    )
}
