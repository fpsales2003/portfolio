import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function IntroText() {
    const textIndex = useMotionValue(0);
    const texts = [
        "Hi there I'm Francis Sales",
        "I'm a Junior at Syracuse University",
        "Studying Information Management",
        "This website is currently under construction",
        "Please refer to my LinkedIn @francis-sales"
    ];

    const baseText = useTransform(textIndex, (latest) => texts[latest] || "")
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) => baseText.get().slice(0, latest));
    const updatedThisRound = useMotionValue(true);

    useEffect(() => {
        animate(count, 60, {
            type: "tween",
            duration: 1.5,
            ease: "easeIn",
            delay: 0.2,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1, // make on scroll
            onUpdate(latest) {
                if (updatedThisRound.get() === true && latest > 0) {
                    updatedThisRound.set(false);
                } else if (updatedThisRound.get() === false && latest === 0) {
                    if (textIndex.get() === texts.length - 1) {
                        textIndex.set(0);
                    } else {
                        textIndex.set(textIndex.get() + 1);
                    }
                    updatedThisRound.set(true);
                }
            }
        })
    })
    return <motion.span className="inline">{displayText}</motion.span>
}