interface Props { role: string }

function Role({ role } : Props) {
    return (
        <section className={`flex flex-col gap-y-2`}>
            <h3 className={`font-bold text-primary`}>Key responsibilities</h3>
            <p className={`text-md`}>{role}</p>
        </section>
    )
}

export default Role