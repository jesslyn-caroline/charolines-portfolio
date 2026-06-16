import type { SkillCardProps } from "../../data/technologies"
import { motion } from "framer-motion"

const variants:any = {
    pink: {
        borderShadow: 'shadow-[0_0_30px_#F472B42E,0_8px_32px_#783C0A14,0_0_0_1px_#C8A0501F]',
        circleShadowAnimation: ['0 0 1px #F472B4, 0 0 1px #F472B4', '0 0 13.7px #F472B4, 0 0 6.85px #F472B4', '0 0 1px #F472B4, 0 0 1px #F472B4'],
        circleBackground: 'bg-[#F472B4]',
        tagBackground: 'bg-[#F472B41F]',
    },
    blue: {
        borderShadow: 'shadow-[0_0_30px_#51A2FF2E,0_8px_32px_#783C0A14,0_0_0_1px_#C8A0501F]',
        circleShadowAnimation: ['0 0 1px #51A2FF, 0 0 1px #51A2FF', '0 0 13.7px #51A2FF, 0 0 6.85px #51A2FF', '0 0 1px #51A2FF, 0 0 1px #51A2FF'],
        circleBackground: 'bg-[#51A2FF]',
        tagBackground: 'bg-[#51A2FF1F]',
    },
    orange: {
        borderShadow: 'shadow-[0_0_30px_#FB923C2E,0_8px_32px_#783C0A14,0_0_0_1px_#C8A0501F]',
        circleShadowAnimation: ['0 0 1px #FB923C, 0 0 1px #FB923C', '0 0 13.7px #FB923C, 0 0 6.85px #FB923C', '0 0 1px #FB923C, 0 0 1px #FB923C'],
        circleBackground: 'bg-[#FB923C]',
        tagBackground: 'bg-[#FB923C1F]',
    },
    purple: {
        borderShadow: 'shadow-[0_0_30px_#A78BFA2E,0_8px_32px_#783C0A14,0_0_0_1px_#C8A0501F]',
        circleShadowAnimation: ['0 0 1px #A78BFA, 0 0 1px #A78BFA', '0 0 13.7px #A78BFA, 0 0 6.85px #A78BFA', '0 0 1px #A78BFA, 0 0 1px #A78BFA'],
        circleBackground: 'bg-[#A78BFA]',
        tagBackground: 'bg-[#A78BFA1F]',
    },
    green: {
        borderShadow: 'shadow-[0_0_30px_#34D3992E,0_8px_32px_#783C0A14,0_0_0_1px_#C8A0501F]',
        circleShadowAnimation: ['0 0 1px #34D399, 0 0 1px #34D399', '0 0 13.7px #34D399, 0 0 6.85px #34D399', '0 0 1px #34D399, 0 0 1px #34D399'],
        circleBackground: 'bg-[#34D399]',
        tagBackground: 'bg-[#34D3991F]',
    },
}

function TechnologyCard({ color, skill, technologies } : SkillCardProps) {
    return (
    <div className={`w-full bg-[#fff8ebe8] border border-[#FFFFFF99] rounded-xl ${variants[color].borderShadow} p-6 md:p-8 hover:scale-102 transition ease-in-out duration-300`}>
        <div className={`flex flex-col gap-y-3`}>
            <div className={`flex flex-row items-center gap-x-4`}>
                <motion.div 
                    animate={{ boxShadow: variants[color].circleShadowAnimation }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className={`w-2 h-2 rounded-full ${variants[color].circleBackground}`}
                />
                <h2 className={`text-[#461901CC] text-lg font-medium`}>{skill}</h2>
            </div>
            <div>
                <ul className={`list-none flex flex-wrap gap-4 text-sm text-[#7B3306BF]`}>
                    { ...technologies.map((tech) => {
                        return (
                        <li className={`px-4 py-1 rounded-full ${variants[color].tagBackground} border border-[#C8963C33]`}>{tech}</li>
                    )}) }
                </ul>
            </div>
        </div>
    </div>
)}

export default TechnologyCard