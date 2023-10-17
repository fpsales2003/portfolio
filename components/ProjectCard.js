const ProjectCard = ({ title, organization, date }) => {
    return (
        <div className="">
            <div className="">
                <div>
                    {title}
                </div>
                <div>
                    {organization}
                </div>
                <div>
                    {date}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard