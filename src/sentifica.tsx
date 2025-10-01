import GithubLink from "./sections/githubLink"
import PreviewSection from "./sections/preview"
import Role from "./sections/role"
import ShortDescSection from "./sections/shortDesc"
import Technology from "./sections/technology"
import TitleSection from "./sections/title"

function Sentifica() {
    const folderDir = "/sentifica"

    let projectLink:string = "https://sertifica.vercel.app"
    let title:string = "Sentifica"
    let subtitle:string = "Group Project • AI and Machine Learning"
    let desc:string = " Sentifica is a web application that helps to analyze sentiments of text using AI. The web app provides a user interface for users to input text and get the sentiment analysis result."
    let technologies:string[] = ["Tailwind CSS", "React", "Axios", "Python (Model AI)", "Flask"]
    let githubLink:string = "https://github.com/jesslyn-caroline/sentifica"
    let role:string = "In charge of building the interface of the web app with React, and integrating with APIs"
    let images:string[] = ["/image1.png", "/image2.png", "/image3.png", "/image4.png", "/image5.png", "/image6.png"]

    return (
    <div className={`flex flex-col space-y-8 max-w-full w-full`}>
        <TitleSection link={projectLink} title={title} subtitle={subtitle} />
        <ShortDescSection desc={desc} />
        <Technology technologies={technologies} />
        <Role role={role} />
        <GithubLink link={githubLink} />
        <PreviewSection folderDir={folderDir} images={images} />

        <p className={`text-gray-400 text-xs flex gap-x-2 items-center`}><i className="ri-pushpin-fill text-lg"/><span>Unable to analyze currently due to free plan limitations</span></p>
    </div>
    )
}

export default Sentifica