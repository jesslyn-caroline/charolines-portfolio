import { useEffect, useState } from "react";

function NavigationBar() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const toggleMenu = (value: boolean) => setIsOpen(value)

    const menu: string[] = ['About', 'Skills', 'Education', 'Experience', 'Projects']

    const [activeSection, setActiveSection] = useState<string>('')

    useEffect(() => {
        const sections = document.querySelectorAll('section')

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setActiveSection(entry.target.id)
            }), { threshold: 0.8 }
        })

        sections.forEach((section) => {
            observer.observe(section)
        })

        return () => observer.disconnect()
    }, [])

    return (
    <div className={`w-full flex md:justify-center fixed top-5 left-5 z-5`}>
        <div className={`
            w-fit h-fit p-3 md:px-8 md:py-2 gap-x-10
            flex flex-row justify-center items-center
            bg-[#FFFBEB99] border border-[#7B33061A] rounded-full 
            text-[#973C00] text-md
            shadow-md shadow-[#7B33060D] backdrop-blur-xs
            sticky top-10
        `}>
            <button onClick={() => toggleMenu(true)}>
                <img src='/magic-wand-1.svg' alt='Magic Wand' className={`size-6`}/>
            </button>
            <div className={`hidden md:flex flex-row items-center gap-x-4`}>
                { ...menu.map((item) => (<a href={`#${item.toLowerCase()}`} className={`${activeSection === item.toLowerCase() ? 'active:opacity-100' : 'opacity-60'} transition-opacity duration-300`}>{item}</a>))}
            </div>
        </div>
        <div className={`
            w-full h-screen fixed top-0 left-0 ${isOpen ? 'translate-y-0' : '-translate-y-full'} transition-all duration-300
            bg-[#FFFBEB99] shadow-md shadow-[#7B33060D] backdrop-blur-xs
            text-[#973C00] text-md 
            flex flex-col items-center gap-y-10 py-10 md:hidden 
        `}>
            { ...menu.map((item) => (<a href={`#${item.toLowerCase()}`} className={`${activeSection === item.toLowerCase() ? 'active:opacity-100' : 'opacity-60'} transition-opacity duration-300`}>{item}</a>))}
        </div>
    </div>
    
)}

export default NavigationBar