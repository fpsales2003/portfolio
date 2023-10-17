import ProjectCard from "@/components/ProjectCard"
import CursorBlinker from "@/components/CursorBlinker";
import IntroText from "@/components/IntroText";

import { getProjects } from "@/constants"

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const Home = () => {

    const projects = getProjects();
    
    const baseText = "Hi there";
    const count = useMotionValue(0);

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 15
        },
        visible: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }

    return <div className="bg-black">
        <div className="h-screen flex justify-center items-center">
            <div className="bg-white fixed left-50 top-50 h-[450px] w-[700px] rounded-lg"></div>
            <span className="z-10 w-[450px]">
                <motion.span
                className="text-black z-10 font-playfair italic text-6xl"
                variants={itemVariants}
                >
                    <IntroText />
                </motion.span>
                <CursorBlinker />
            </span>
        </div>
          <div>
            {projects.map((project, index) => {
                    const {title, organization, date} = project;
                    return <ProjectCard
                        title={title} 
                        organization={organization}
                        date={date}
                        key={index}
                    />
                })}
          </div>
    </div>
};

export default Home