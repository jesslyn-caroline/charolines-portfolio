import StarBorder from "../assets/StarBorder"
import TechnologyCard from "../components/cards/TechnologyCard"
import { skillsAndTechnologies } from "../data/technologies"

function Technology() {
    return (
    <div className={`px-5 lg:px-20 py-24 flex flex-col`}>
        <div className={`w-full flex flex-col justify-center items-center gap-y-3`}>
            <h1 className={`text-4xl text-[#7B3306] text-center`}>Skill & Technology</h1>
            <StarBorder />
            <div className={`mt-6 grid grid-cols-1 md:grid-cols-2 gap-8`}>
            {
                ...skillsAndTechnologies.map((skillAndTech) => {
                    return (
                        <TechnologyCard {...skillAndTech}/>
                    )
                })
            }
            </div>
        </div>
    </div>
)}

export default Technology