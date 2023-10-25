import Image from "next/image"

const ProjectCard = ({ img, altText }) => {
    return (
        <div className="">
            <Image 
                src={`/${img}.png`}
                alt={altText}
                width={800}
                height={600}
                className="rounded-lg md:w-[70vw] lg:w-[60vw] xl:w-[50vw] w-[90vw] h-auto"
            />
        </div>
    )
}

export default ProjectCard