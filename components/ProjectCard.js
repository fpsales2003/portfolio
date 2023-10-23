import Image from "next/image"

const ProjectCard = ({ img, altText }) => {
    return (
        <div className="">
            <Image 
                src={`/${img}.png`}
                alt={altText}
                width={1000}
                height={400}
                className="rounded-lg w-[50vw] h-full"
            />
        </div>
    )
}

export default ProjectCard