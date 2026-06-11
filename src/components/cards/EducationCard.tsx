import StarBorder2 from "../../assets/StarBorder2"
import type { EducationCardProps } from "../../data/education"

function EducationCard({ institution, degree, startDate, endDate, description, achievements }: EducationCardProps) {
    return (
    <div className={`w-full h-fit flex flex-col relative`}>
        <StarBorder2 />
        <div className={`w-full flex flex-col gap-y-1 py-3 md:px-10`}>
            <div className={`flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-y-1`}>
                <h2 className={`font-medium text-xs text-[#E17100CC] uppercase tracking-widest`}>{institution}</h2>
                <span className={`text-md text-[#7B3306] opacity-70`}>
                    {startDate} - {endDate}
                </span>
            </div>
            <h1 className={`text-lg font-semibold text-[#7B3306]`}>{degree}</h1>
            <h3 className={`mt-3 text-sm text-[#7B33068C]`}>{description}</h3>
            {achievements && achievements.length > 0 && (
                <ul className={`mt-2 text-sm text-[#7B33068C] list-disc list-inside`}>
                    {achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                    ))}
                </ul>
            )}
        </div>
    </div>
)}

export default EducationCard