import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import { projects, type ProjectCardProps } from "../data/projects"
import { RiArrowLeftLine, RiExternalLinkLine } from "@remixicon/react"
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
            { project.link ? 
                <Link to={ project.link } className={`mt-5 flex flex-row items-center gap-x-3`}>
                    <h1 className={`text-2xl md:text-3xl text-[#7B3306]`}>{ project.name }</h1>
                    <RiExternalLinkLine className={`size-5 text-[#7B3306]`} />
                </Link> : 
                <h1 className={`mt-5 text-2xl md:text-3xl text-[#7B3306]`}>{ project.name }</h1> }
            <StarBorder3 />
        </div>
        <PreviewCarousel dir={project.previewSrc} total={project.totalPreview} /> 

        <h2 className={`mt-5 text-[#7B3306] text-sm font-semibold`}>{ project.shortDesc }</h2>
        <p className={`mb-5 text-[#7B33068C] text-sm leading-6`}>{ project.desc }</p>

        { project.features && 
            <ProjectDetailSection section='Features'>
                <ul className={`flex flex-col gap-y-1 text-sm text-[#7B33068C]`}>
                { ...project.features.map((feature) => (
                    <li className={`flex items-center gap-3`}>
                        <img src="/star-4.svg" alt="" className={`w-3 h-3`} />
                        <span>{ feature }</span>
                    </li>
                ))}
                </ul>
            </ProjectDetailSection> }

        <ProjectDetailSection section='Project Details'>
            <ul className={`flex flex-col divide-y divide-[#FBBF2433] text-sm text-[#7B33068C]`}>
            { ...project.projectDetails.map((detail) => (
                <li className={`py-3 flex flex-row justify-between items-center gap-3`}>
                    <span className={`text-[#FE9A0099] text-xs font-medium uppercase`}>{ detail[0] }</span>
                    { detail[0] === 'Github' ? 
                        <a href={ detail[1] } target="_blank" className={`text-[#7B3306BF] text-xs font-medium underline`}>{ detail[1] }</a> : 
                        <span className={`text-[#7B3306BF] text-xs font-medium`}>{ detail[1] }</span> 
                    }
                </li>
            ))}
            </ul>
        </ProjectDetailSection>

        { project.responsibilities && 
            <ProjectDetailSection section='Responsibilities'>
                <ul className={`flex flex-col gap-y-1 text-sm text-[#7B33068C]`}>
                { ...project.responsibilities.map((responsibility) => (
                    <li className={`flex items-center gap-3`}>
                        <img src="/star-4.svg" alt="" className={`w-3 h-3`} />
                        <span>{ responsibility }</span>
                    </li>
                ))}
                </ul>
            </ProjectDetailSection> }
        
        <ProjectDetailSection section='Technologies'>
            <ul className={`flex flex-row flex-wrap gap-4 text-xs text-[#7B3306CC] font-medium`}>
            { ...project.technologies.map((technology) => (
                <li className={`px-3.5 py-1.5 bg-[#FBBF241A] border border-[#FBBF2480] rounded-full`}>{ technology }</li>
            ))}
            </ul>
        </ProjectDetailSection>
    </div>  
)}

export default ProjectDetail

function ProjectDetailSection({ section, children }: { section: string, children: React.ReactNode }) {
    return (
    <div className={`flex flex-col`}>
        <h3 className={`flex flex-row items-center gap-x-4`}>
            <span className={`text-[#E17100B3] font-medium uppercase text-xs tracking-widest whitespace-nowrap`}>{ section }</span>
            <div className={`w-full h-0.5 bg-linear-to-r from-[#FBBF2466] to-transparent`} />
        </h3>
        <div className={`py-3.5`}>
            { children }
        </div>
    </div>
)}