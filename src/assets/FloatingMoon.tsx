import { motion } from 'framer-motion';

function FloatingMoon() {
    return (
    <motion.div
        animate={{
            y: [0, -30, 0],
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
        <img src='/moon.svg' alt='Floating Moon' className={`size-10`}/>
    </motion.div>
)}

export default FloatingMoon;