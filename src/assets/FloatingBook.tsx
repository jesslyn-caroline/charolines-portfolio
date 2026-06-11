import { motion } from 'framer-motion';

function FloatingBook() {
    return (
    <motion.div
        animate={{
            y: [-5, -25, -5],
            rotate: [0, 3, -3, 0],
        }}
        transition={{
            delay: Math.random() * 2,
            y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
            },
            rotate: {
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
            },
        }}
    >
        <img src='/book.svg' alt='Floating Book' className={`size-10`}/>
    </motion.div>
)}

export default FloatingBook;