interface Props {
    link : string,
    title : string,
    subtitle : string
}

function TitleSection({ link, title, subtitle } : Props) {
    return (
    <section className={`flex flex-col`}>
        <a href={link} className={`underline w-fit font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:underline`}>
            {title}<i className="ri-arrow-right-up-line"/>
        </a>
        <span className={`text-sm text-gray-500`}>{subtitle}</span>
    </section>
    )
}

export default TitleSection