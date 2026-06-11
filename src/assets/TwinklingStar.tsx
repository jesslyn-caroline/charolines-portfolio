import { motion } from 'framer-motion'

interface Props { 
    size?: string,
    delay?: number
}

function TwinklingStar({ size = 'size-10', delay = 1}: Props) {
    return (
        <motion.div
            animate={{
                scale: [0.1, 1, 0.1],
                opacity: [0.5, 1, 0.5],
                rotate: [0, 360],
            }}
            transition={{
                delay: delay,
                duration: 3,
                times: [0, 0.5, 1], 
                repeat: Infinity
            }} 
        >
            <img src='/star-1.svg' alt='Twinkling Star' className={size}/>
        </motion.div>
)}

export default TwinklingStar