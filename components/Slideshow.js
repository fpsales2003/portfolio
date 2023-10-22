import ProjectCard from "@/components/ProjectCard"
import Image from "next/image";

import { getProjects } from "@/constants"
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { getNamedRouteRegex } from "next/dist/shared/lib/router/utils/route-regex";

const Slideshow = ({ }) => {

    const projects = getProjects();

    const [ currentSlide, setCurrentSlide ] = useState(0);
    const [ isRotated, setIsRotated ] = useState(false);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % projects.length)
    }
    const previousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + projects.length) % projects.length)
    }

    const controls = useAnimation();

    const rotatePlus = async () => {
        setIsRotated(!isRotated);
        if (isRotated) {
            controls.start("initial");
        } else {
            controls.start("rotated")
        }
    }

    const rotateVariants = {
        initial: { 
            rotate: 0,
            transition: {
                duration: 0.4,
                delay: 0.1
            } 
        },
        rotated: { 
            rotate: 45,
            transition: {
                duration: 0.4
            }
        }
    }

    const descVariants = {
        hidden: { 
            opacity: 0 ,
            transition: {
                delay: 0.65
            }
        },
        visible: { 
            opacity: 1,
            delay: 0.1
        }
    }

    const descTextVariants = {
        hidden: {
            opacity: 0,
            transition: {
                delay: 0.2
            }
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.4,
                duration: 0.5
            }
        }
    }

    const slideVariants = {
        hidden: {
            x: "100%",
            display: "none"
        },
        visible: {
            x: 0,
            display: "block"
        }
    }

    return (
            <motion.div 
                className="flex justify-center items-center overflow-hidden relative gap-5"
            >
                <button onClick={previousSlide}>
                    <Image 
                        src="/left-arrow.svg"
                        alt="Previous Slide"
                        width={50}
                        height={50}
                    />
                </button>
                {projects.map((project, index) => {
                        const {img, alt, title, date, description, skills} = project;
                        return (
                        <motion.div
                            key={index}
                            className="relative"
                            initial="hidden"
                            animate={index === currentSlide ? "visible" : "hidden"}
                            variants={slideVariants}
                        >
                            <motion.div 
                                className="z-50 absolute bottom-4 right-4"
                                initial="initial"
                                animate={controls}
                                variants={rotateVariants}
                                onClick={rotatePlus}
                            >
                                <Image 
                                    className="bg-white rounded-full"
                                    src="/plus.svg"
                                    alt="Show More"
                                    width={50}
                                    height={50}
                                />
                            </motion.div>
                            <motion.div 
                                className="absolute bg-black w-full h-full text-white font-playfair rounded-lg flex justify-center items-center z-10"
                                initial={"hidden"}
                                animate={isRotated ? "visible" : "hidden" }
                                variants={descVariants}
                            >
                                <motion.div
                                    className="flex justify-center items-center gap-10 m-20"
                                    initial="hidden"
                                    animate={isRotated ? "visible" : "hidden"}
                                    variants={descTextVariants}
                                >
                                    <div
                                        className="flex flex-col justify-center items-center gap-20"
                                    >
                                        <div className="text-4xl italic">
                                            <h2>
                                                {title}
                                            </h2>
                                        </div>
                                        <div>{date}</div>
                                        <div>{description}</div>
                                    </div>
                                    {/* <div>{skills}</div> */}
                                </motion.div>
                            </motion.div>
                            <ProjectCard
                                key={index}
                                img={img}
                                alt={alt}
                            />
                        </motion.div>
                    )})}
                    <button onClick={nextSlide}>
                        <Image 
                            src="/right-arrow.svg"
                            alt="Next Slide"
                            width={50}
                            height={50}
                        />
                    </button>
            </motion.div>
   )
}
export default Slideshow