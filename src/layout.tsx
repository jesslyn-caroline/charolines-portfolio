import { Link, Outlet, useLocation } from "react-router"

function Layout() {
    const routes:{
        path: string,
        name: string
    }[] = [
        { "path" : "/hcia-practice", "name" : "HCIA Practice" },
        { "path" : "/sentifica", "name" : "Sentifica" },
        { "path" : "/pyfarm", "name" : "PyFarm: Harvesting Game" },
        { "path" : "/kaitosoft", "name" : "Kaitosoft" },
        { "path" : "/cinnamon", "name" : "Cinnamon" },
        { "path" : "/fukuro", "name" : "fukuro" },
    ]

    const location = useLocation()

    return (
    <div className={`max-w-[1920px] min-h-screen w-screen h-fit bg-white`}>
        <div className={`px-8 py-16 flex flex-col space-y-8 z-30`}>
            <div className={`flex flex-col space-y-2`}>
                <h2 className={`font-bold text-xl`} ><i className="ri-code-line"/>&ensp;Jesslyn Caroline.&ensp;<i className="ri-code-s-slash-line"/></h2>
                <h3 className={`text-black`}>A 3rd-year Computer Science student who enjoys Competitive Programming and exploring new things in Development!</h3>
            </div>
            <div className={`flex flex-col-reverse lg:flex-row gap-y-16 md:gap-x-16 md:gap-y-0 overflow-y-scroll scroll-bar-hidden`}>
                <div className={`min-w-1/6 flex flex-col space-y-2`}>
                    <h2 className={`text-lg flex items-center`}>
                        <i className="ri-git-repository-line text-xl"/>&ensp; <span className={`font-bold`}>Projects</span>
                    </h2>
                    {
                        routes.map((route) => (
                            <Link to={route.path} className={`text-black hover:underline ${location.pathname === route.path ? "font-bold underline" : ""} transition`}>{route.name}</Link>
                        ))
                    }
                 
                </div>
                <div className={``}>
                    <Outlet />
                </div>
            </div>
        </div>     
    </div>
    )
}

export default Layout