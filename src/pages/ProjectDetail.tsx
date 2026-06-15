import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import { projects, type ProjectCardProps } from "../data/projects"
import { RiArrowLeftLine } from "@remixicon/react"
import StarBorder3 from "../assets/StarBorder3"
import PreviewCarousel from "../components/carousel/PreviewCarousel"

function ProjectDetail() {
    const { path } = useParams()
    const [project, setProject] = useState<ProjectCardProps>()

    useEffect(() => {
        const foundProject = projects.find((project) => project.path === path)
        setProject(foundProject)
    }, [])

    return (
    <div className={`max-w-480 min-h-screen w-screen h-fit flex flex-col gap-y-5 px-5 md:px-20 py-16`}>
        <Link to = '/' className={`flex flex-row gap-x-3`}>
            <RiArrowLeftLine className={`text-[#7B3306B3]`}/>
            <span className={`text-[#7B3306B3]`}>Back</span>
        </Link>
        <div className={`w-full flex flex-col`}>
            <span className={`text-[#FE9A0099] text-md`}>{ project?.year }</span>
            <h1 className={`mt-5 text-3xl text-[#7B3306]`}>{ project?.name }</h1>
            <StarBorder3 />
        </div>
        { project && <PreviewCarousel dir={project.previewSrc} total={project.total} /> }
    </div>
)}

export default ProjectDetail