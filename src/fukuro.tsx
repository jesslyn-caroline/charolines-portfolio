import GithubLink from "./sections/githubLink"
// import PreviewSection from "./sections/preview"
// import Role from "./sections/role"
import ShortDescSection from "./sections/shortDesc"
import Technology from "./sections/technology"
import TitleSection from "./sections/title"

function Fukuro() {

    // const folderDir = "/fukuro"

    let projectLink:string = "https://github.com/jesslyn-caroline/fukuro"
    let title:string = "Fukuro"
    let subtitle:string = "Ongoing • Group Project • Mobile App Development"
    let desc:string = "Fukuro is an education app, learning about programming. Fukuro has various courses"
    let technologies:string[] = ["Flutter"]
    let githubLink:string = "https://github.com/jesslyn-caroline/fukuro"
    // let role:string = ""
    // let images:string[] = []

    return (
    <div className={`flex flex-col space-y-8 max-w-full w-full`}>
        <TitleSection link={projectLink} title={title} subtitle={subtitle} />
        <ShortDescSection desc={desc} />
        <Technology technologies={technologies} />
        {/* <Role role={role} /> */}
        <GithubLink link={githubLink} />
        {/* <PreviewSection folderDir={folderDir} images={images} /> */}

    </div>
    )
}

export default Fukuro