import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import { projects, type ProjectCardProps } from "../data/projects"
import { RiArrowLeftLine, RiExternalLinkLine, RiGithubFill } from "@remixicon/react"
import StarBorder3 from "../assets/StarBorder3"
import PreviewCarousel from "../components/carousel/PreviewCarousel"

function ProjectDetail() {
    const { path } = useParams()
    const [project, setProject] = useState<ProjectCardProps>()

    useEffect(() => {
        const foundProject = projects.find((project) => project.path === path)
        setProject(foundProject)
    }, [])

    return ( project && 
    <div className={`max-w-480 min-h-screen w-screen h-fit flex flex-col gap-y-5 px-5 md:px-20 pt-16 pb-24`}>
        <Link to = '/' className={`flex flex-row gap-x-3`}>
            <RiArrowLeftLine className={`text-[#7B3306B3]`}/>
            <span className={`text-[#7B3306B3]`}>Back</span>
        </Link>
        <div className={`w-full flex flex-col`}>
            <span className={`text-[#FE9A0099] text-md`}>{ project.year }</span>
            { project.link ? 
                <Link to={ project.link } className={`mt-5 flex flex-row items-center gap-x-3`}>
                    <h1 className={`text-2xl md:text-3xl text-[#7B3306]`}>{ project.name }</h1>
                    <RiExternalLinkLine className={`size-5 text-[#7B3306]`} />
                </Link> : 
                <h1 className={`mt-5 text-2xl md:text-3xl text-[#7B3306]`}>{ project.name }</h1> }
            <StarBorder3 />
        </div>
        <PreviewCarousel dir={project.previewSrc} total={project.total} /> 

        <h2 className={`text-[#7B3306] text-sm font-semibold`}>{ project.shortDesc }</h2>
        <p className={`text-[#7B33068C] text-sm leading-6`}>{ project.desc }</p>

        <div className={`flex flex-col py-3`}>
            <h3 className={`flex flex-row items-center gap-x-4`}>
                <span className={`text-[#E17100B3] font-medium uppercase text-xs tracking-widest`}>Features</span>
                <div className={`w-full h-0.5 bg-linear-to-r from-[#FBBF2466] to-transparent`} />
            </h3>
            <ul className={`mt-2 flex flex-col gap-y-1 text-sm text-[#7B33068C]`}>
            { ...project.features.map((feature) => (
                <li className={`flex items-center gap-3`}>
                    <img src="/star-4.svg" alt="" className={`w-3 h-3`} />
                    <span>{ feature }</span>
                </li>
            ))}
            </ul>
        </div>

        { project.responsibilities && <div className={`flex flex-col py-3`}>
            <h3 className={`flex flex-row items-center gap-x-4`}>
                <span className={`text-[#E17100B3] font-medium uppercase text-xs tracking-widest whitespace-nowrap`}>Key Responsibilities</span>
                <div className={`w-full h-0.5 bg-linear-to-r from-[#FBBF2466] to-transparent`} />
            </h3>
            <ul className="mt-2 flex flex-col gap-y-1 text-sm text-[#7B33068C]">
            { ...project.responsibilities.map((responsibility) => (
                <li className={`flex items-center gap-3`}>
                    <img src="/star-4.svg" alt="" className={`w-3 h-3`} />
                    <span>{ responsibility }</span>
                </li>
            ))}
            </ul>
        </div> }

        <div className={`flex flex-col py-3`}>
            <h3 className={`flex flex-row items-center gap-x-4`}>
                <span className={`text-[#E17100B3] font-medium uppercase text-xs tracking-widest whitespace-nowrap`}>Technologies</span>
                <div className={`w-full h-0.5 bg-linear-to-r from-[#FBBF2466] to-transparent`} />
            </h3>
            <ul className={`mt-4 flex flex-row flex-wrap gap-4 text-sm text-[#7B3306CC] font-medium`}>
            { ...project.technologies.map((responsibility) => (
                <li className={`px-3.5 py-1 bg-[#FBBF241A] border border-[#FBBF2480] rounded-full`}>{ responsibility }</li>
            ))}
            </ul>
        </div> 
        
        <Link to={ project.github } className={`
            mt-10 w-fit bg-[#FEF3C6] border-[#FFD23080] border-2 text-[#973C00]
            flex flex-row items-center gap-x-2
            hover:bg-[#FEE685] hover:border-[#FFB900] 
            animation ease-in duration-200
            rounded-full px-3 py-2
        `}>
            <RiGithubFill className={`size-5`} />
            <span className={`text-sm font-medium`}>Github</span>
        </Link>
    </div>  
)}

export default ProjectDetail