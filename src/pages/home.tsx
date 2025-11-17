import { motion } from "framer-motion";

import ShortDescCard from "../components/cards/short_desc_card";
import TechnologiesCard from "../components/cards/technologies_card";

function Home() {
    return (
        <div className={`flex flex-col gap-y-1.5`}>
            <i className={`text-primary text-4xl ri-puzzle-fill`}/>
            <h1 className={`text-2xl font-semibold`}>
                <span>Hi! I'm  </span>
                <span className={`bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent`}>
                    Jesslyn Caroline
                </span>
                <span>.</span>
            </h1>
            <h2 className={`text-md`}>
                A 3rd year Computer Science student at Mikroskil University, who likes competitive programming and continuously exploring curiosity in technology.
            </h2>
            <motion.div 
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.5 } }}}
                initial="hidden" whileInView="show"
                className={`grid lg:grid-cols-2 gap-5 mt-3.5`}>
                <motion.div variants={{ hidden: { opacity: 0, y: "100%" }, show: { opacity: 1, y: 0, transition: { duration: 1 } }}}>
                    <ShortDescCard />
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: "100%" }, show: { opacity: 1, y: 0, transition: { duration: 1 } }}}>
                    <TechnologiesCard />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Home;