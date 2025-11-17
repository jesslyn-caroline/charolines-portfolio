import { Link, useLocation } from "react-router"

function ProjectsCard() {
    const location = useLocation()

    const projects : { path: string, value: string }[] = [
        { "path" : "/hcia-practice", "value" : "HCIA Practice" },
        { "path" : "/sentifica", "value" : "Sentifica" },
        { "path" : "/pyfarm", "value" : "PyFarm: Harvesting Game" },
        { "path" : "/kaitosoft", "value" : "Kaitosoft" },
        { "path" : "/cinnamon", "value" : "Cinnamon" },
        { "path" : "/fukuro", "value" : "fukuro" },
    ]

    return (
    <div className={`w-full h-fit rounded-md p-0.5 bg-gradient-to-br from-secondary to-primary hover:from-primary hover:to-secondary transition`}>
        <div className={`bg-background px-5 py-4 rounded-sm transition flex flex-col gap-y-1.5`}>
            <h2 className={`w-fit bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent text-lg font-semibold`}>My Projects </h2>
            <div className={`grid grid-cols-1 md:grid-cols-2 md:grid-rows-${Math.ceil(projects.length / 2)} gap-y-1.5 gap-x-5`}>
                {
                    projects.map((project) => {
                        return (
                        <Link to={project.path} className={`text-sm ${location.pathname === project.path ? "underline font-semibold text-primary" : "text-text"} hover:underline`}>{project.value}</Link>
                        )
                    })
                }
            </div>
        </div>
    </div>
    )
}

export default ProjectsCard