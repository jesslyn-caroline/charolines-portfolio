function ShortDescCard() {
    return (
    <div className={`w-full h-fit rounded-md p-0.5 bg-gradient-to-br from-secondary to-primary hover:from-primary hover:to-secondary transition`}>
        <div className={`bg-background px-5 py-4 rounded-sm transition flex flex-col gap-y-1.5`}>
            <h2 className={`w-fit bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent text-lg font-semibold`}>Overview About Me</h2>
            <ul className={`text-sm flex flex-col gap-y-1.5`}>
                <li>🏫 I am a 3rd year Computer Science student</li>
                <li>⚡️ I do <span className={`font-semibold text-primary`}>Competitive Programming</span></li>
                <li>💻 Developing my skills in <span className={`font-semibold text-primary`}>Web Development   </span></li>
                <li>🌱 More experienced in Front-End Web Development</li>
            </ul>
        </div>
    </div>
    )
}

export default ShortDescCard;