import GithubLink from "./sections/githubLink"
import PreviewSection from "./sections/preview"
import ShortDescSection from "./sections/shortDesc"
import Technology from "./sections/technology"
import TitleSection from "./sections/title"

function Kaitosoft() {
    const folderDir = "/kaitosoft"

    let projectLink:string = "https://kaitosoft-testing.vercel.app"
    let title:string = "KaitoSoft"
    let subtitle:string = "Self Project • Front-End Development"
    let desc:string = "This project is built with React and Tailwind CSS, with animations powered by Framer Motion to create a smooth and interactive user experience"
    let technologies:string[] = ["Tailwind CSS", "React"]
    let githubLink:string = "https://github.com/jesslyn-caroline/kaitosoft"
    let images:string[] = ["/image1.png", "/image2.png", "/image3.png", "/image4.png"]

    return (
    <div className={`flex flex-col space-y-8 max-w-full w-full`}>
        <TitleSection link={projectLink} title={title} subtitle={subtitle} />
        <ShortDescSection desc={desc} />
        <Technology technologies={technologies} />
        <GithubLink link={githubLink} />
        <PreviewSection folderDir={folderDir} images={images} />
    </div>
    )
}

export default Kaitosoft