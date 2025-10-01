interface Props { role: string }

function Role({ role } : Props) {
    return (
        <section className={`flex flex-col gap-y-2 font-bold text-sm`}>
            <span>My role in this project</span>
            <span className={`font-normal text-black`}>{role}</span>
        </section>
    )
}

export default Role