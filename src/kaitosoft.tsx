import Carousel_ from "./components/carousel_"

function Kaitosoft() {

    return (
    <div className={`flex flex-col space-y-8 max-w-full w-full`}>
        <div className={`flex flex-col`}>
            <a href="https://kaitosoft-testing.vercel.app" className={`font-bold text-xl hover:underline`}>
                Kaitosoft<i className="ri-arrow-right-up-line"/>
            </a>
            <span className={`text-sm text-gray-500`}>Self Project • Web Development</span>
        </div>
        
        <div className={`flex flex-col space-y-2`}>
            <h2 className={`font-bold`}>Short Description</h2>
            <p className={`text-black`}>
                This project is built with React and Tailwind CSS, with animations powered by Framer Motion to create a smooth and interactive user experience
            </p>
        </div>
        
        <div className={`text-sm flex flex-col md:flex-row items-center`}>
            <h2 className={`font-bold`}>Technologies: </h2>
            <ul className={`pl-5 flex flex-row flex-wrap gap-3 text-xs`}>
                <li className={`px-3 py-1 bg-blue-100 rounded-full`}>Tailwind CSS</li>
                <li className={`px-3 py-1 bg-blue-100 rounded-full`}>React</li>
            </ul>
        </div>

        <p className={`flex items-center gap-x-2 text-sm`}>
            <i className="ri-github-fill text-xl"/><span className={`font-bold`}>Github: </span>
            <a href="https://github.com/jesslyn-caroline/kaitosoft" className={`underline`}>https://github.com/jesslyn-caroline/kaitosoft</a>
        </p>

        <h3 className={`text-lg font-bold mt-8`}>Preview</h3>
        <div className={`w-full max-w-3xl`}>
            <Carousel_ num={1}>
                <img src="/kaitosoft/image1.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/kaitosoft/image2.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/kaitosoft/image3.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/kaitosoft/image4.png" alt="" className={`w-full rounded-lg object-cover`} />
            </Carousel_>      
        </div>
    </div>
    )
}

export default Kaitosoft