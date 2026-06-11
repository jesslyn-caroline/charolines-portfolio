import { motion } from 'framer-motion'

interface Props {
    size?: string
}

function MagicCircle({ size = 'size-10'}: Props) {
    return (
    <motion.div
        animate={{
            rotate: [0, 360],
        }}
        transition={{
            duration: 10,
            times: [1], 
            repeat: Infinity
        }} 
    >
        <img src='/magic-circle.svg' alt='Magic Circle' className={size}/>
    </motion.div>
)}

export default MagicCircle