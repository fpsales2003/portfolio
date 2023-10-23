import Slideshow from "@/components/Slideshow";
import CursorBlinker from "@/components/CursorBlinker";
import IntroText from "@/components/IntroText";
import Contact from "@/components/Contact";
import FindMe from "@/components/FindMe";

import { useEffect, useRef, useState } from "react";

import { motion, useAnimationFrame, useInView, useMotionValue, useScroll, useSpring, useTransform, useVelocity, wrap } from "framer-motion";

const Home = () => {

    const targetRef = useRef();
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 5]);
    const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

    const slideVariants = {
        hidden: { x: "100%", opacity: 0 },
        show: { x: 0, opacity: 1, transition: {duration: 1} }
    }

    return <section>
        <div className="bg-black">
                <div 
                ref={targetRef}
                className="flex justify-center items-center bg-black h-[100vh] mb-[15vh]">
                    <motion.div 
                        style={{ scale }}
                        className="bg-white fixed left-50 top-50 h-[50vh] w-[50vw] rounded-lg"
                    ></motion.div>
                    <motion.div 
                        className="z-9 w-[450px] fixed"
                        style= {{ opacity }}
                    >
                        <motion.span
                            className="text-black z-10 font-playfair italic text-6xl"
                        >
                            <IntroText />
                        </motion.span>
                        <CursorBlinker />
                    </motion.div>
                </div>
                <div className="flex flex-col justify-center items-center relative">
                    <h1
                        className="text-black z-11 font-playfair italic text-6xl mb-[10rem] w-[25rem]"
                    >
                        Check out some of my projects
                    </h1>
                        <Slideshow />
                </div>
        </div>
        <div className="flex justify-around items-center w-full h-[10vh] mt-[15vh] mb-[5vh]">
            <Contact />
            <FindMe />
        </div>
    </section>
};

export default Home