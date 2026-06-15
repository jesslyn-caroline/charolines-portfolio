import { RiExternalLinkLine } from "@remixicon/react"
import type { ProjectCardProps } from "../../data/projects"
import { Link } from "react-router"

function ProjectCard({ name, description, path,  year, tags }: ProjectCardProps) {
    return (
    <div className={`
        bg-linear-to-br from-[#FFFBEB] to-[#FFF1F2] border-2 border-[#FFD23080] 
        hover:border-[#FFD230] hover:rotate-1 transition duration-500 
        rounded-lg p-5 flex flex-col gap-y-2
    `}>
        <div className={`flex flex-row justify-between items-center`}>
            <span className={`text-[#FE9A0099] text-sm`}>{ year }</span>
            <Link to={`/projects/${path}`} target="_blank"><RiExternalLinkLine className={`text-[#E1710080] size-5`} /></Link>
        </div>
        <h3 className={`text-[#7B3306] text-xl font-medium`}>{ name }</h3>
        <p className={`text-[#7B3306B3] text-sm leading-6`}>{ description }</p>
        <div className={`mt-3 flex flex-row flex-wrap gap-2`}>
            { ...tags.map((tag) => {
                return (
                <span className={`
                    bg-[#FEF3C6] w-fit h-fit px-3 py-1 
                    border-2 border-[#FFD23080] rounded-full 
                    text-[#973C00] text-xs font-medium
                `}>{ tag }</span>
            )}) }
        </div>
    </div>
)}

export default ProjectCard