import { Link, Outlet, useLocation } from "react-router"
import SwitchModeBtn from "./components/buttons/switch_mode_btn"
import ProjectsCard from "./components/cards/projects_card"

function Layout() {

    const location = useLocation();

    return (
    <div className={`flex justify-center w-full h-full bg-background text-text transition overflow-y-visible scroll-bar-hidden`}>
        <div className={`max-w-[1920px] min-h-screen w-screen flex flex-col overflow-y-visible scroll-bar-hidden`}>
            <div className={`min-h-16 h-16 w-full px-8 md:px-16 lg:px-24 flex justify-end items-center`}>
                <SwitchModeBtn />
            </div>
            <div className={`px-8 md:px-16 lg:px-24 pb-36`}> 
                <Outlet />
                <div className={`my-8`}>
                    <ProjectsCard />
                </div>
                <Link to="/" className={`${location.pathname === '/'? "hidden" : "block"} text-primary text-sm group flex flex-row items-center gap-x-2`}>
                    <i className="ri-arrow-left-line text-xl"/>
                    <span className={`w-fit text-md group-hover:underline`}>Back to Home</span>
                </Link>
            </div>
        </div>
    </div>
    )
}

export default Layout