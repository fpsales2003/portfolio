import ProjectCard from "@/components/ProjectCard"
import Image from "next/image";
import Link from "next/link";

import { getProjects } from "@/constants"
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

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
                delay: 0.9
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
            y: -20,
            transition: {
                delay: 0.5,
                duration: 0.3
            }
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.4,
                duration: 0.5
            }
        }
    }

    const slideVariants = {
        hidden: {
            opacity: 0,
            display: "none",
            x: 1000,
            transition: {
                duration: 0.5
            }
        },
        visible: {
            opacity: 1,
            display: "block",
            x: 0,
            transition: {
                duration: 0.5
            }
        }
    }

    const linkVariants ={
        hidden: {
            opacity: 0,
            y: -20,
            transition: {
                delay: 0.5,
                duration: 0.3
            }
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.4,
                duration: 0.5
            }
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
                        const {img, alt, title, date, description, git, link, demo, skills} = project;
                        return (
                        <motion.div
                            key={index}
                            className="relative"
                            initial="hidden"
                            animate={index === currentSlide ? "visible" : "hidden"}
                            variants={slideVariants}
                        >
                            <motion.div 
                                className="z-20 absolute bottom-4 right-4 cursor-pointer"
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
                                className="absolute bg-black w-full h-full text-white font-playfair rounded-lg flex justify-center items-center"
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
                                        className="flex flex-col items-center"
                                    >
                                            <div className="text-4xl italic self-start">
                                                <h2>
                                                    {title}
                                                </h2>
                                            </div>
                                            <div className="self-start">
                                                {date}
                                            </div>
                                        <div>
                                            {description}
                                        </div>
                                    </div>
                                    <div>
                                        {skills}
                                    </div>
                                </motion.div>
                                <motion.div
                                            className="flex items-center flex-start gap-5 z-20 absolute bottom-4 left-4"
                                            initial="hidden"
                                            animate={isRotated ? "visible" : "hidden"}
                                            variants={linkVariants}
                                        >
                                            <Link
                                                href={link ? link : demo}
                                                prefetch={true}
                                                target="_blank"
                                            >
                                                <div className="bg-white text-black italic p-2 rounded-xl">
                                                    {`${link ? "live site" : "live demo"}`}
                                                </div>
                                            </Link>
                                            <Link
                                                href={git}
                                                prefetch={true}
                                                target="_blank"
                                            >
                                                <div className="bg-white rounded-full">
                                                    <Image 
                                                        src="/github.svg"
                                                        alt="github link"
                                                        width={50}
                                                        height={50}
                                                    />
                                                </div>
                                            </Link>
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