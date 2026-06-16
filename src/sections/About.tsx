import FloatingBook from "../assets/FloatingBook"
import FloatingMoon from "../assets/FloatingMoon"
import FloatingStar1 from "../assets/FloatingStar1"
import FloatingStar2 from "../assets/FloatingStar2"
import FloatingWand from "../assets/FloatingWand"
import Particle from "../assets/Particle"
import StarBorder1 from "../assets/StarBorder1"

function About() {
    return (
    <div className={`w-full h-fit flex justify-center px-5 py-32 relative`}>
        <div className={`w-full flex flex-col justify-center items-center gap-y-3`}>
            <h1 className={`text-4xl text-[#7B3306] text-center`}>About Her</h1>
            <StarBorder1 />
            <h2 className={`max-w-2xl text-md text-center text-[#7B3306] opacity-70 flex flex-col gap-y-1.5`}>
                Her name is Jesslyn Caroline. She enjoys exploring new ideas and diving deep into the world of Web Development. Driven by curiosity and a passion for technology, she is always eager to learn new tools, frameworks, and techniques that help her grow as a developer. She enjoys solving problems, building interactive web applications, and creating user-friendly digital experiences. Through continuous learning and hands-on projects, she strives to improve her skills and stay up to date with the ever-evolving technology landscape.
            </h2>
        </div>

        {/* === Decorations ===*/}
        {/* Floating Objects */}
        <div className={`absolute top-[40%] right-[13%] opacity-30 md:opacity-100`}><FloatingStar1 /></div>
        <div className={`absolute top-[60%] right-[10%] opacity-30 md:opacity-100`}><FloatingWand /></div>
        <div className={`absolute top-[30%] left-[10%] opacity-30 md:opacity-100`}><FloatingMoon /></div>
        <div className={`absolute top-[50%] left-[13%] opacity-30 md:opacity-100`}><FloatingStar2 /></div>
        <div className={`absolute top-[75%] left-[7%] opacity-30 md:opacity-100`}><FloatingBook /></div>

        {/* Particles */}
        <div className={`absolute top-[20%] right-[12%]`}><Particle size='size-2' delay={Math.random() * 2}/></div>
        <div className={`absolute top-[50%] left-[8%]`}><Particle size='size-1' delay={Math.random() * 2}/></div>
        <div className={`absolute bottom-[30%] right-[18%]`}><Particle size='size-1' delay={Math.random() * 2}/></div>
        <div className={`absolute bottom-[15%] left-[18%]`}><Particle size='size-1' delay={Math.random() * 2}/></div>
        <div className={`absolute bottom-[15%] right-[8%]`}><Particle size='size-1' delay={Math.random() * 2}/></div>
    </div>
)}

export default About