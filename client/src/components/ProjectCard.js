
export const ProjectCard = ({ title, description, imageUrl, webSiteUrl }) => {
    return (
        <a href={webSiteUrl} target="_blank" rel="noreferrer">
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
