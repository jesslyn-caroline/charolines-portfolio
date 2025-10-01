import Carousel_ from "./components/carousel_"

function Cinnamon() {

    return (
    <div className={`flex flex-col space-y-8 max-w-full w-full`}>
        <div className={`flex flex-col`}>
            <a href="https://github.com/evelyn-zhan/cinnamon-health-app" className={`font-bold text-xl hover:underline`}>
                Cinnamon: Health App<i className="ri-arrow-right-up-line"/>
            </a>
            <span className={`text-sm text-gray-500`}>Group Project • Mobile Front-End Development</span>
        </div>
        
        <div className={`flex flex-col space-y-2`}>
            <h2 className={`font-bold`}>Short Description</h2>
            <p className={`text-black`}>
                Cinnamon is a mobile application that helps to track and manage the health of a user. The app provides news about health-related topics and resources. It also a note app to help users to take notes and stay organized. Moreover, this app also provides healthy recipes to help users to stay healthy. 
                User also can log their weight to track their progress.
            </p>
        </div>
        
        <div className={`text-sm flex flex-col md:flex-row items-center`}>
            <h2 className={`font-bold`}>Technologies: </h2>
            <ul className={`pl-5 flex flex-row flex-wrap gap-3 text-xs`}>
                <li className={`px-3 py-1 bg-blue-100 rounded-full`}>Flutter</li>
            </ul>
        </div>

        <p className={`font-bold text-sm`}>My role: <span className={`font-normal text-black`}>Collaborating with other members to design and build the interface of the app</span></p>
        <p className={`flex items-center gap-x-2 text-sm`}>
            <i className="ri-github-fill text-xl"/><span className={`font-bold`}>Github: </span>
            <a href="https://github.com/jesslyn-caroline/sentifica" className={`underline`}>https://github.com/jesslyn-caroline/sentifica</a>
        </p>

        <h3 className={`text-lg font-bold mt-8`}>Preview</h3>
        <div className={`w-full max-w-3xl`}>
            <Carousel_ num={3}>
                <img src="/cinnamon/image2.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/cinnamon/image3.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/cinnamon/image4.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/cinnamon/image5.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/cinnamon/image6.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/cinnamon/image7.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/cinnamon/image8.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/cinnamon/image9.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/cinnamon/image10.png" alt="" className={`w-full rounded-lg object-cover`} />
            </Carousel_>      
        </div>
    </div>
    )
}

export default Cinnamon