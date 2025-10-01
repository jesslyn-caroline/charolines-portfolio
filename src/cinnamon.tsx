import GithubLink from "./sections/githubLink"
import PreviewSection from "./sections/preview"
import Role from "./sections/role"
import ShortDescSection from "./sections/shortDesc"
import Technology from "./sections/technology"
import TitleSection from "./sections/title"

function Cinnamon() {
    const folderDir = "/cinnamon"

    let projectLink:string = "https://github.com/evelyn-zhan/cinnamon-health-app"
    let title:string = "Cinnamon: Health App"
    let subtitle:string = "Group Project • Mobile Front-End Development"
    let desc:string = "Cinnamon is a mobile application that helps to track and manage the health of a user. The app provides news about health-related topics and resources. It also a note app to help users to take notes and stay organized. Moreover, this app also provides healthy recipes to help users to stay healthy. User also can log their weight to track their progress."
    let technologies:string[] = ["Flutter"]
    let role:string = "Collaborating with other team members to design and develop the app using Flutter"
    let githubLink:string = "https://github.com/evelyn-zhan/cinnamon-health-app"
    let images:string[] = ["/image2.png", "/image3.png", "/image4.png", "/image5.png", "/image6.png", "/image7.png", "/image8.png", "/image9.png", "/image10.png"]

    return (
    <div className={`flex flex-col space-y-8 max-w-full w-full`}>
        <TitleSection link={projectLink} title={title} subtitle={subtitle} />
        <ShortDescSection desc={desc} />
        <Technology technologies={technologies} />
        <Role role={role} />
        <GithubLink link={githubLink} />
        <PreviewSection folderDir={folderDir} images={images} previewPerPage={3}/>
    </div>
    )
}

export default Cinnamon