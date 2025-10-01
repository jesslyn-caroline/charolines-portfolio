import GithubLink from "./sections/githubLink"
import PreviewSection from "./sections/preview"
import Role from "./sections/role"
import ShortDescSection from "./sections/shortDesc"
import Technology from "./sections/technology"
import TitleSection from "./sections/title"

function Pyfarm() {
    const folderDir = "/pyfarm"

    let projectLink:string = "https://github.com/jesslyn-caroline/harvesting-game-pyfarm"
    let title:string = "PyFarm: Harvesting Game"
    let subtitle:string = "Group Project • OOP • Console-based Game"
    let desc:string = "PyFarm is a console-based farming game where players can plant, water, and harvest crops, care for animals, and sell both crops and livestock products at varying prices. The game includes a shop to buy and sell items, as well as a financial report system that tracks daily income and expenses, which is challenging players to manage their farm efficiently."
    let technologies:string[] = ["Python"]
    let githubLink:string = "https://github.com/jesslyn-caroline/harvesting-game-pyfarm"
    let role:string = "Collaborating with other team members to develop the game using OOP and implementing design patterns"
    let images:string[] = ["/image1.png", "/image2.png", "/image3.png", "/image4.png", "/image5.png", "/image6.png", "/image7.png", "/image8.png", "/image9.png", "/image10.png", "/image11.png", "/image12.png"]

    return (
    <div className={`flex flex-col space-y-8 max-w-full w-full`}>
        <TitleSection link={projectLink} title={title} subtitle={subtitle} />
        <ShortDescSection desc={desc} />
        <Technology technologies={technologies} />
        <Role role={role} />
        <GithubLink link={githubLink} />
        <PreviewSection folderDir={folderDir} images={images} />
    </div>
    )
}

export default Pyfarm