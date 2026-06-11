import EducationCard from "../components/cards/EducationCard"
import { educations } from "../data/education"

function Education () {
    return (
    <div className={`h-fit flex flex-col items-center gap-y-3 px-5 lg:px-20 py-24`}>
        <h1 className={`text-4xl text-[#7B3306] text-center`}>Education</h1>
        <div className={`mt-6 md:max-w-3xl w-full flex flex-col gap-y-4`}>
            {
                ...educations.map((education) => {
                    return (
                        <EducationCard {...education}/>
                    )
                })
            }

        </div>
    </div>

)}

export default Education