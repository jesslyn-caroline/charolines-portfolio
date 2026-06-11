import { motion } from 'framer-motion'

interface Props {
    size: string,
    delay: number
}

function Particle({ size, delay } : Props) {
    return (
    <motion.div
        animate={{ 
            y: [0, -30, 0],
            opacity: [0, 0.8, 0.1],
        }}
        transition={{ 
            delay: delay,
            duration: 4,
            times: [0, 0.5, 1], 
            repeat: Infinity
        }}
    >
        <div className={`${size} bg-[#FFB900] rounded-full`} />
    </motion.div>
)}

export default Particle