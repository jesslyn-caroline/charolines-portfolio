import StarBorder1 from "../assets/StarBorder1"
import { projects } from "../data/projects"
import ProjectCard from "../components/cards/ProjectCard"

function Projects() {
    return (
    <div className={`w-full flex flex-col justify-start items-center gap-y-3 px-5 md:px-20 py-24`}>
        <h1 className={`text-4xl text-[#7B3306] text-center`}>Projects</h1>
        <StarBorder1 />
        <div className={`mt-5 w-full grid grid-cols-2 md:grid-cols-3 gap-4`}>
            { ...projects.map((project) => {
                return <ProjectCard {...project}/>
            }) }
        </div>
    </div>
)}

export default Projects