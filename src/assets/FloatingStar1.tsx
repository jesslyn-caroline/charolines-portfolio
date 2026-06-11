import { motion } from 'framer-motion';

function FloatingStar1() {
    return (
    <motion.div
        animate={{
            y: [0, -15, 0],
            rotate: [0, 3, -3, 0],
        }}
        transition={{
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
        <img src='/star-2.svg' alt='Moving Star' className={`size-10`}/>
    </motion.div>
)}

export default FloatingStar1;