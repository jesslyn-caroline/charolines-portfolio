interface Props {
    technologies : string[]
}

function Technology({technologies} : Props) {
    return (
    <section className={`text-sm flex flex-col items-start gap-y-2`}>
        <h2 className={`font-bold`}>{technologies.length == 1 ? "Technology" : "Technologies"} </h2>
        <ul className={`flex flex-row flex-wrap gap-3 text-xs`}>
            { technologies.map((technology) => {
                return <li className={`px-3 py-1 bg-blue-100 rounded-full`}>{technology}</li>
            })}
        </ul>
    </section>
    )
}

export default Technology