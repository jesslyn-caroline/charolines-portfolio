import { motion } from 'framer-motion';

function FloatingWand() {
    return (
    <motion.div
        animate={{
            y: [0, -25, 0],
            rotate: [0, 3, -3, 0],
        }}
        transition={{
            delay: Math.random() * 2,
            y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
            },
            rotate: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
            },
        }}
    >
        <img src='/magic-wand-2.svg' alt='Moving Wand' className={`size-11`}/>
    </motion.div>
)}

export default FloatingWand;