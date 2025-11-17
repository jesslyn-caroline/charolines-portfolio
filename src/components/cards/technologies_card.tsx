function TechnologiesCard() {
    return (
    <div className={`w-full h-fit rounded-md p-0.5 bg-gradient-to-br from-secondary to-primary hover:from-primary hover:to-secondary transition`}>
        <div className={`bg-background px-5 py-4 rounded-sm transition flex flex-col gap-y-1.5`}>
            <h2 className={`w-fit bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent text-lg font-semibold`}>Technologies</h2>
            <div className={`grid grid-cols-3 md:grid-cols-4 text-sm gap-y-2 gap-x-6`}>
                <div>
                    <h3 className={`text-primary font-semibold`}>Front-End</h3>
                </div>
                <ul className={`col-span-2 md:col-span-3 flex flex-wrap gap-x-4 gap-y-1.5`}>
                    <li>React</li>
                    <li>Tailwind CSS</li>
                    <li>TypeScript</li>
                    <li>JavaScript</li>
                </ul>
                <div className={`text-primary`}>
                    <h3 className={`font-semibold`}>Back-End</h3>
                </div>
                <ul className={`col-span-2 md:col-span-3 flex flex-wrap gap-4`}>
                    <li>Node JS</li>
                    <li>Express JS</li>
                </ul>
                <div className={`text-primary`}>
                    <h3 className={`font-semibold`}>Mobile App</h3>
                </div>
                <ul className={`col-span-2 md:col-span-3 flex flex-wrap gap-4`}>
                    <li>Flutter</li>
                </ul>
                <div className={`text-primary`}>
                    <h3 className={`font-semibold`}>Database</h3>
                </div>
                <ul className={`col-span-2 md:col-span-3 flex flex-wrap gap-4`}>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                </ul>
                <div className={`text-primary`}>
                    <h3 className={`font-semibold`}>Programming Language</h3>
                </div>
                <ul className={`col-span-2 md:col-span-3 flex flex-wrap gap-4`}>
                    <li>C++</li>
                    <li>Python</li>
                </ul>
                <div className={`text-primary`}>
                    <h3 className={`font-semibold`}>UI UX Software</h3>
                </div>
                <ul className={`col-span-2 md:col-span-3 flex flex-wrap gap-4`}>
                    <li>Figma</li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default TechnologiesCard