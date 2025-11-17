import { Outlet, useLocation } from "react-router"
import { motion } from "framer-motion"
import SwitchModeBtn from "./components/buttons/switch_mode_btn"
import ProjectsCard from "./components/cards/projects_card"

function Layout() {

    const location = useLocation();

    return (
    <div className={`flex justify-center bg-background text-text transition`}>
        <div className={`max-w-[1920px] w-screen min-h-screen flex flex-col`}>
            <div className={`min-h-16 h-16 w-full px-8 md:px-16 lg:px-24 flex justify-end items-center`}>
                <SwitchModeBtn />
            </div>
            <div className={`px-8 md:px-16 lg:px-24 pb-36`}> 
                <Outlet />
                <motion.div 
                    initial={{ opacity: 0, x: "100%" }} whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.8 }}
                    viewport={{ once: location.pathname === '/'? true : false }}
                    className={`my-8`}>
                    <ProjectsCard />
                </motion.div>
                <div onClick={() => window.location.href = "/"} className={`${location.pathname === '/'? "hidden" : ""} cursor-pointer flex items-center gap-x-2 group`}>
                    <i className="ri-arrow-left-line text-xl"/>
                    <span className={`w-fit text-md group-hover:underline`}>Back to Home</span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Layout