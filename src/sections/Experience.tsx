import StarBorder1 from "../assets/StarBorder1"
import ExperienceCard from "../components/cards/ExperienceCard"
import { experiences } from "../data/experiences"

function Experience() {
    return (
    <div className={`w-full flex flex-col justify-start items-center gap-y-3 px-5 md:px-20 py-24`}>
        <h1 className={`text-4xl text-[#7B3306] text-center`}>Experience</h1>
        <StarBorder1 />
        <div className={`max-w-4xl w-full flex flex-col gap-y-5 relative md:px-10 pt-5 pb-16`}>
            <div className={`w-1 h-full bg-linear-to-b from-[#FFB90066] via-[#FF637E66] to-[#FFB90033] rounded-sm absolute top-0 lg:left-10`} />
            {
                ...experiences.map((experience) => {
                    return (
                        <ExperienceCard {...experience}/>
                    )
                })
            }
        </div>
    </div>
)}

export default Experience