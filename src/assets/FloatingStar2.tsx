import { motion } from 'framer-motion';

function FloatingStar2() {
    return (
    <motion.div
        animate={{
            y: [0, -15, 0],
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
        <img src='/star-3.svg' alt='Moving Star' className={`size-10`}/>
    </motion.div>
)}

export default FloatingStar2;