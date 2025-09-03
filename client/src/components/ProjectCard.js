import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imageUrl }) => {
    return (
        <div className="proj-imgbx">
            <img src={imageUrl} alt={title} />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
    )
}
