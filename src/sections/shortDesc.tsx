interface Props {
    desc : string
}

function ShortDescSection ({desc} : Props) {
    return (
    <section className={`flex flex-col space-y-2`}>
        <h2 className={`font-bold text-primary`}>Short Description</h2>
        <p className={`text-md`}>
            {desc}
        </p>
    </section>
    )
}

export default ShortDescSection