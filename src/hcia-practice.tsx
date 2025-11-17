import GithubLink from "./sections/githubLink"
import PreviewSection from "./sections/preview"
import Role from "./sections/role"
import ShortDescSection from "./sections/shortDesc"
import Technology from "./sections/technology"
import TitleSection from "./sections/title"

function HCIAPractice() {
    const folderDir = "/hcia-practice"

    let projectLink:string = "https://hcia-practice.vercel.app"
    let title:string = "HCIA Practice"
    let subtitle:string = "Group Project • Web Development"
    let desc:string = "HCIA Practice is a web application that helps students practice their knowledge in AI and Machine Learning concepts from Huawei Talent. This web provides questions for students to try and prepare for Certified ICT Associate (HCIA) exam. The questions are provided by Admin."
    let technologies:string[] = ["Tailwind CSS", "React", "TypeScript", "Axios", "Express JS", "MongoDB"]
    let githubLink:string = "https://github.com/jesslyn-caroline/hcia-practice"
    let role:string = "In charge of building the interface of the web app with React, and integrating with APIs"
    let images:string[] = ["/image1.png", "/image2.png", "/image3.png", "/image4.png", "/image5.png", "/image6.png" , "/image7.png", "/image8.png", "/image9.png", "/image10.png"]

    return (
    <div className={`flex flex-col space-y-8 max-w-full w-full`}>
        <TitleSection link={projectLink} title={title} subtitle={subtitle} />
        <ShortDescSection desc={desc} />  
        <HCIAPracticeFeatures />
        <Technology technologies={technologies} />
        <Role role={role} />
        <GithubLink link={githubLink} />
        <PreviewSection folderDir={folderDir} images={images} />
        <Testing />
    </div>
    )
}

function HCIAPracticeFeatures () {
    return (
    <div className={`flex flex-col space-y-1`}>
        <h2 className={`font-bold text-primary`}>Features</h2>
        <div className={`grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-y-1 gap-x-5`}>
            <div className={`text-sm flex flex-col gap-y-1`}>
                <span className={`font-semibold text-secondary`}>Students</span>
                <ul className={`pl-5`}>
                    <li className={`list-disc pl-3`}>Play Quiz in two mode, timer will not pause when user switch tab</li>
                    <li className={`list-disc pl-3`}>Review questions from previous attempts</li>
                </ul>
            </div>
            <div className={`text-sm flex flex-col gap-y-1`}>
                <span className={`font-semibold text-secondary`}>Admin</span>
                <ul className={`pl-5`}>
                    <li className={`list-disc pl-3`}>Create and manage questions</li>
                    <li className={`list-disc pl-3`}>Play Quiz in two mode, timer will not pause when user switch tab</li>
                    <li className={`list-disc pl-3`}>Review questions from previous attempts</li>
                </ul>
            </div>
        </div>
    </div>
    )
}

function Testing () {
    return (
    <div className={`mt-4 flex flex-col space-y-1`}>
        <h2 className={`font-bold text-primary text-md`}>For Testing</h2>
        <table className={`text-sm`}>
            <thead className={`text-secondary`}>
                <tr>
                    <th className="text-left">Role</th>
                    <th className="text-left">Username</th>
                    <th className="text-left">Password</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Admin</td>
                    <td>admin01.kelvinchen</td>
                    <td>admin01.hwp</td>
                </tr>
                <tr>
                    <td>Students</td>
                    <td>231111664</td>
                    <td>charoline</td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}

export default HCIAPractice