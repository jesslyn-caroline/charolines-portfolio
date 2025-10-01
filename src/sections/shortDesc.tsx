interface Props {
    desc : string
}

function ShortDescSection ({desc} : Props) {
    return (
    <section className={`flex flex-col space-y-2`}>
        <h2 className={`font-bold`}>Short Description</h2>
        <p className={`text-black`}>
            {desc}
        </p>
    </section>
    )
}

export default ShortDescSection