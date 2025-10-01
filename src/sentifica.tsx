import Carousel_ from "./components/carousel_"

function Sentifica() {

    return (
    <div className={`flex flex-col space-y-8 max-w-full w-full`}>
        <div className={`flex flex-col`}>
            <a href="https://sentifica.vercel.app" className={`font-bold text-xl hover:underline`}>
                Sentifica<i className="ri-arrow-right-up-line"/>
            </a>
            <span className={`text-sm text-gray-500`}>Group Project • AI and Machine Learning</span>
        </div>
        
        <div className={`flex flex-col space-y-2`}>
            <h2 className={`font-bold`}>Short Description</h2>
            <p className={`text-black`}>
                Sentifica is a web application that helps to analyze sentiments of text using AI. The web app provides a user interface for users to input text and get the sentiment analysis result.
            </p>
        </div>
        
        <div className={`text-sm flex flex-col md:flex-row items-center`}>
            <h2 className={`font-bold`}>Technologies: </h2>
            <ul className={`pl-5 flex flex-row flex-wrap gap-3 text-xs`}>
                <li className={`px-3 py-1 bg-blue-100 rounded-full`}>Tailwind CSS</li>
                <li className={`px-3 py-1 bg-blue-100 rounded-full`}>React</li>
                <li className={`px-3 py-1 bg-blue-100 rounded-full`}>Axios</li>
                <li className={`px-3 py-1 bg-blue-100 rounded-full`}>Python (Back-End Development and AI Model)</li>
            </ul>
        </div>

        <p className={`font-bold text-sm`}>My role: <span className={`font-normal text-black`}>In charge of building the interface of the web app with React, and integrating with APIs</span></p>
        <p className={`flex items-center gap-x-2 text-sm`}>
            <i className="ri-github-fill text-xl"/><span className={`font-bold`}>Github: </span>
            <a href="https://github.com/jesslyn-caroline/sentifica" className={`underline`}>https://github.com/jesslyn-caroline/sentifica</a>
        </p>

        <h3 className={`text-lg font-bold mt-8`}>Preview</h3>
        <div className={`w-full max-w-3xl`}>
            <Carousel_ num={1}>
                <img src="/sentifica/image1.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/sentifica/image2.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/sentifica/image3.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/sentifica/image4.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/sentifica/image5.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/sentifica/image6.png" alt="" className={`w-full rounded-lg object-cover`} />
            </Carousel_>      
        </div>
        <p className={`text-gray-400 text-xs flex gap-x-2 items-center`}><i className="ri-pushpin-fill text-lg"/><span>Unable to analyze currently due to free plan limitations</span></p>
    </div>
    )
}

export default Sentifica