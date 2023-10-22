import Image from "next/image"

const ProjectCard = ({ img, altText }) => {
    return (
        <div>
            <Image 
                src={`/${img}.png`}
                alt={altText}
                width={1000}
                height={400}
                className="rounded-lg w-[50vw] h-auto"
            />
        </div>
    )
}

export default ProjectCard