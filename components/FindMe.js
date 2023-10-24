import Image from "next/image";

import { getSocials } from "@/constants";

import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

const FindMe = () => {

    const socials = getSocials();

    const [isClicked, setIsClicked] = useState(false);

    const controls = useAnimation();

    const buttonClick = async () => {
        setIsClicked(!isClicked);
        if (isClicked) {
            controls.start("hidden");
        } else {
            controls.start("visible")
        }
    }

    const clickVariants = {
        hidden: {
            display: "none",
            opacity: 0,
        },
        visible: {
            display: "flex",
            opacity: 1,
        }
    }

    return(
        <div
            className="h-full relative"
        >
                <motion.div
                    className="bg-black text-white rounded-xl h-[5rem] flex justify-center items-center p-5 font-playfair italic cursor-pointer text-2xl md:text-5xl"
                    initial="visible"
                    animate={isClicked ? "hidden" : "visible"}
                    variants={clickVariants}
                    onClick={buttonClick}
                    whileHover={{ scale: 1.05 }}
                >
                    <p>find me elsewhere</p>
                </motion.div>
                <motion.div
                    className="bg-white border-[3px] border-black rounded-xl h-[5rem] flex justify-center items-center gap-3 p-3 cursor-pointer"
                    initial="hidden"
                    animate={isClicked ? "visible" : "hidden"}
                    variants={clickVariants}
                    onClick={buttonClick}
                >
                    {socials.map((social, index) => {
                        const {link, img, alt} = social
                        return (
                            <div
                                key={index}
                                className="flex justify-center items-center"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <a 
                                        href={link}
                                        target="_blank"
                                    >
                                        <Image
                                            src={`/${img}.svg`}
                                            alt={alt}
                                            width={50}
                                            height={50}
                                        />
                                    </a>
                                </motion.div>
                            </div>
                        )
                })}
                </motion.div>
        </div>
    )
}

export default FindMe