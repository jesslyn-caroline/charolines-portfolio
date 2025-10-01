import Carousel_ from "./components/carousel_"

function HCIAPractice() {
    return (
    <div className={`flex flex-col space-y-8 max-w-full w-full`}>
        <div className={`flex flex-col`}>
            <a href="https://hcia-practice.vercel.app" className={`font-bold text-xl hover:underline`}>
                HCIA Practice Web<i className="ri-arrow-right-up-line"/>
            </a>
            <span className={`text-sm text-gray-500`}>Web Development • Collaboration</span>
        </div>
        
        <div className={`flex flex-col space-y-2`}>
            <h2 className={`font-bold`}>Short Description</h2>
            <p className={`text-black`}>
                HCIA Practice is a web application that helps students practice their knowledge in AI and Machine Learning concepts from Huawei Talent.
                This web provides questions for students to try and prepare for Certified ICT Associate (HCIA) exam. The questions are provided by Admin.
            </p>
        </div>

        <div className={`text-md flex flex-col space-y-1`}>
            <h2 className={`font-bold`}>Features</h2>
            <div className={`grid grid-cols-2 md:grid-cols-2 gap-5`}>
                <div className={`text-sm flex flex-col gap-y-1`}>
                    <span className={`font-semibold`}>Students</span>
                    <ul className={`text-black pl-5`}>
                        <li className={`list-disc pl-3`}>Play Quiz in two mode, timer will not pause when user switch tab</li>
                        <li className={`list-disc pl-3`}>Review questions from previous attempts</li>
                    </ul>
                </div>
                <div className={`text-sm flex flex-col gap-y-1`}>
                    <span className={`font-semibold`}>Admin</span>
                    <ul className={`text-black pl-5`}>
                        <li className={`list-disc pl-3`}>Create and manage questions</li>
                        <li className={`list-disc pl-3`}>Play Quiz in two mode, timer will not pause when user switch tab</li>
                        <li className={`list-disc pl-3`}>Review questions from previous attempts</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div className={`text-sm flex flex-col md:flex-row items-center`}>
            <h2 className={`font-bold`}>Technologies: </h2>
            <ul className={`pl-5 flex flex-row flex-wrap gap-3 text-xs`}>
                <li className={`px-3 py-1 bg-blue-100 rounded-full`}>Tailwind CSS</li>
                <li className={`px-3 py-1 bg-blue-100 rounded-full`}>React</li>
                <li className={`px-3 py-1 bg-blue-100 rounded-full`}>TypeScript</li>
                <li className={`px-3 py-1 bg-blue-100 rounded-full`}>Axios</li>
                <li className={`px-3 py-1 bg-blue-100 rounded-full`}>Express JS</li>
                <li className={`px-3 py-1 bg-blue-100 rounded-full`}>MongoDB</li>
            </ul>
        </div>

        <p className={`font-bold text-sm`}>My role: <span className={`font-normal text-black`}>In charge of building the interface of the web app with React, and integrating with APIs</span></p>
        <p className={`flex items-center gap-x-2 text-sm`}>
            <i className="ri-github-fill text-xl"/><span className={`font-bold`}>Github: </span>
            <a href="https://github.com/jesslyn-caroline/hcia-practice" className={`underline`}>https://github.com/jesslyn-caroline/hcia-practice</a>
        </p>
      
        <h3 className={`text-lg font-bold mt-8`}>Preview</h3>
        <div className={`w-full max-w-3xl`}>
            <Carousel_ num={1}>
                <img src="/hcia-practice/image1.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/hcia-practice/image2.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/hcia-practice/image3.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/hcia-practice/image4.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/hcia-practice/image5.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/hcia-practice/image6.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/hcia-practice/image7.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/hcia-practice/image8.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/hcia-practice/image9.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/hcia-practice/image10.png" alt="" className={`w-full rounded-lg object-cover`} />
            </Carousel_>      
        </div>
        
        <div className={`mt-4 text-md flex flex-col space-y-1`}>
            <h2 className={`font-bold`}>For Testing</h2>
            <div className={`grid grid-cols-2 md:grid-cols-2 gap-5`}>
                <div className={`text-sm flex flex-col gap-y-1`}>
                    <span className={`font-semibold`}>Students</span>
                    <ul className={`text-black`}>
                        <li>Username: 231111664</li>
                        <li>Password: charoline</li>
                    </ul>
                </div>
                <div className={`text-sm flex flex-col gap-y-1`}>
                    <span className={`font-semibold`}>Admin</span>
                    <ul className={`text-black`}>
                        <li>Username: admin01.kelvinchen</li>
                        <li>Password: admin01.hwp</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default HCIAPractice