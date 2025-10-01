interface Props {
    link : string
}

function GithubLink({ link } : Props) {
    return (
    <section className={`flex flex-col gap-y-2 text-sm`}>
        <span className={`flex flex-row items-center gap-x-2`}><i className="ri-github-fill text-xl"/><span className={`font-bold`}>Github Respository</span></span>
        <a href={link} className={`underline text-black`}>{link}</a>
    </section>
    )
}

export default GithubLink