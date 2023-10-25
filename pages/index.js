import Slideshow from "@/components/Slideshow";
import CursorBlinker from "@/components/CursorBlinker";
import IntroText from "@/components/IntroText";
import Contact from "@/components/Contact";
import FindMe from "@/components/FindMe";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

const Home = () => {

    const targetRef = useRef();
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 5]);
    const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

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
                        style={{ opacity }}
                        className="fixed top-[85vh] bg-white rounded-full border-[1px] border-white"
                    >
                        <Link
                            href="#projects"    
                        >
                            <Image 
                                src="/down-arrow.svg"
                                alt="arrow down"
                                width={50}
                                height={50}
                            />
                        </Link>
                    </motion.div>
                    <motion.div 
                        className="z-9 w-[45vw] fixed"
                        style= {{ opacity }}
                    >
                        <IntroText />
                        <CursorBlinker />
                    </motion.div>
                </div>
                <div className="w-[100vw] flex flex-col justify-center items-center relative" id="projects">
                    <h1
                        className="text-black z-11 font-playfair italic w-[50vw] h-auto md:w-[25rem] text-4xl md:text-6xl md:mb-[10rem] mb-[5rem]"
                    >
                        Check out some of my projects
                    </h1>
                    <Slideshow />
                </div>
        </div>
        <div className="flex justify-around items-center w-full h-[10vh] mt-[15vh] mb-[7vh]">
            <Contact />
            <FindMe />
        </div>
        <Footer />
    </section>
};

export default Home