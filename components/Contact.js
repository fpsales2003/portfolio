import { motion } from "framer-motion"

const Contact = () => {
    const emailAddress = "fsales2003@gmail.com"

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="h-full relative"
        >
            <a
                href={`mailto:${emailAddress}`}
                target="_blank"
            >
                <div className="bg-black text-white rounded-xl w-auto h-[5rem] flex justify-center items-center p-3 font-playfair italic text-2xl md:text-5xl">
                    <p>contact me</p>
                </div>
            </a>
        </motion.div>
    )
}

export default Contact