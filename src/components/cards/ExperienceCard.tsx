import type { ExperienceCardProps } from "../../data/experiences"

function ExperienceCard({company, position, startDate, endDate, responsibilities}: ExperienceCardProps) {
    return (
    <div className={`flex flex-row gap-x-2 md:gap-x-10`}>
        <span className={`size-4 md:size-5 bg-linear-to-br from-[#FFD230] to-[#FFA1AD] border-3 border-[#FFFBEB] rounded-full z-5`} />
        <div className={`
            w-full h-fit px-6 py-5 md:px-8 md:py-6 rounded-lg
            flex flex-col gap-y-2.5
            bg-linear-to-br from-[#FFFBEB] to-[#FFF7ED] border-2 border-[#FFD23080] 
            hover:border-[#FFD230] hover:rotate-1 transition duration-500 
            shadow-[0_0_2px_-1px_#0000001A,0_1px_3px_#0000001A]
        `}>
            <div className={`w-fit flex flex-row items-center gap-x-3 bg-[#FEF3C6] border-2 border-[#FFD23080] px-3 py-1 rounded-full`}>
                <span className={`size-1.5 flex rounded-full bg-[#FE9A00]`} />
                <span className={`text-[#973C00] text-xs`}>{startDate} - {endDate}</span>
            </div>
            <div>
                <h1 className={`text-lg text-[#7B3306] font-medium`}>{position}</h1>
                <h2 className={`text-sm text-[#BB4D00] font-medium`}>{company}</h2>
            </div>
            <ul className={`text-sm list-disc list-inside`}>
                {responsibilities.map((responsibility, index) => (
                    <li key={index} className={`text-sm text-[#7B3306B3]`}>{responsibility}</li>
                ))}
            </ul>
        </div>
        
    </div>
)}

export default ExperienceCard