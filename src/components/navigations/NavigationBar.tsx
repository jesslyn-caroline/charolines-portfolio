function NavigationBar() {
    return (
    <div className={`w-full flex justify-center fixed top-5 z-5`}>
        <div className={`
            w-fit h-fit px-8 py-2 
            flex flex-row items-center gap-x-4 
            bg-[#FFFBEB99] border border-[#7B33061A] rounded-full 
            text-[#973C00] text-md
            shadow-md shadow-[#7B33060D] backdrop-blur-xs
            sticky top-10
        `}>
            <img src='/magic-wand-1.svg' alt='Magic Wand' className={`w-6 h-6 mr-5`}/>
            <a href='#about' className={`opacity-60`}>About</a>
            <a href='#skills' className={`opacity-60`}>Skills</a>
            <span className={`opacity-60`}>Contact</span>
            <span className={``}>Resume</span>
        </div>
    </div>
    
)}

export default NavigationBar