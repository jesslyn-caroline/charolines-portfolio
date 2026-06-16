import { RiGithubLine, RiLinkedinLine, RiMailLine } from "@remixicon/react"
import MagicCircle from "../assets/MagicCircle"
import TwinklingStar from "../assets/TwinklingStar"
import ContactBtn from "../components/buttons/ContactBtn"
import PageBorder from "../assets/PageBorder"
import Particle from "../assets/Particle"
import StarBorder1 from "../assets/StarBorder1"
import hero from "../data/hero"

function Hero() {
    return (
    <div className={`max-h-255 h-screen w-full flex justify-center items-center relative`}>
        <div className={`w-fit h-fit flex flex-col justify-center items-center gap-y-3 mt-15 px-16`}>
            <h1 className={`text-3xl md:text-5xl text-[#7B3306] text-center`}>Jesslyn Caroline</h1>
            <StarBorder1 />
            <h2 className={`max-w-xl text-sm md:text-md text-center text-[#7B3306] opacity-70`}>
                { hero }
            </h2>
            <div className={`flex flex-row gap-x-6 mt-10`}>
                <ContactBtn icon={<RiLinkedinLine/>} link='https://www.linkedin.com/in/jesslyn-caroline/'/>
                <ContactBtn icon={<RiGithubLine/>} link='https://github.com/jesslyn-caroline'/>
                <ContactBtn icon={<RiMailLine/>} link='mailto:jesslyn.caroline2005@gmail.com'/>
            </div>
        </div>

        {/* === Decorations ===*/}
        {/* Stars */}
        <div className={`absolute top-[25%] left-[13%]`}><TwinklingStar size='size-16' delay={Math.random() * 2}/></div>
        <div className={`absolute top-[40%] right-[13%]`}><TwinklingStar size='size-14' delay={Math.random() * 2}/></div>
        <div className={`absolute bottom-[20%] right-[20%]`}><TwinklingStar size='size-10' delay={Math.random() * 2}/></div>
        <div className={`absolute bottom-[10%] left-[25%]`}><TwinklingStar size='size-14' delay={Math.random() * 2}/></div>

        {/* Magic Cirle */}
        <div className={`absolute bottom-[10%] left-[8%]`}><MagicCircle size='size-50'/></div>
        <div className={`absolute top-[20%] right-[8%]`}><MagicCircle size='size-40'/></div>

        {/* Border */}
        <div className={`absolute top-0 left-0 mt-5 ml-5 md:mt-10 md:ml-10`}><PageBorder flip='rotate-0'/></div>
        <div className={`absolute top-0 right-0 mt-5 mr-5 md:mt-10 md:mr-10`}><PageBorder flip='rotate-90'/></div>
        <div className={`absolute bottom-0 left-0 mb-5 ml-5 md:mb-10 md:ml-10`}><PageBorder flip='rotate-270'/></div>
        <div className={`absolute bottom-0 right-0 mb-5 mr-5 md:mb-10 md:mr-10`}><PageBorder flip='rotate-180'/></div>
        
        {/* Particles */}
        <div className={`absolute top-[40%] left-[10%]`}><Particle size='size-2' delay={Math.random() * 2}/></div>
        <div className={`absolute bottom-[10%] left-[10%]`}><Particle size='size-1' delay={Math.random() * 2}/></div>
        <div className={`absolute bottom-[25%] right-[10%]`}><Particle size='size-3' delay={Math.random() * 2}/></div>
        <div className={`absolute top-[20%] right-[20%]`}><Particle size='size-2' delay={Math.random() * 2}/></div>
        <div className={`absolute bottom-[20%] left-[25%]`}><Particle size='size-1' delay={Math.random() * 2}/></div>
        <div className={`absolute top-[20%] left-[25%]`}><Particle size='size-1' delay={Math.random() * 2}/></div>
    </div>
)}

export default Hero