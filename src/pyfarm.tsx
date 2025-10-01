import Carousel_ from "./components/carousel_"

function Pyfarm() {

    return (
    <div className={`flex flex-col space-y-8 max-w-full w-full`}>
        <div className={`flex flex-col`}>
            <a href="https://github.com/jesslyn-caroline/harvesting-game-pyfarm" className={`font-bold text-xl hover:underline`}>
                PyFarm: Harvesting Game<i className="ri-arrow-right-up-line"/>
            </a>
            <span className={`text-sm text-gray-500`}>Group Project • OOP • Console-based Game</span>
        </div>
        
        <div className={`flex flex-col space-y-2`}>
            <h2 className={`font-bold`}>Short Description</h2>
            <p className={`text-black`}>
                PyFarm is a console-based farming game where players can plant, water, and harvest crops, care for animals, and sell both crops and livestock products at varying prices. The game includes a shop to buy and sell items, as well as a financial report system that tracks daily income and expenses, which is challenging players to manage their farm efficiently.
            </p>
        </div>
        
        <div className={`text-sm flex flex-col md:flex-row items-start md:items-center gap-3`}>
            <h2 className={`font-bold`}>Technologies: </h2>
            <ul className={`md:pl-5 flex flex-row flex-wrap gap-3 text-xs`}>
                <li className={`px-3 py-1 bg-blue-100 rounded-full`}>Python</li>
            </ul>
        </div>

        <p className={`font-bold text-sm`}>My role: 
            <span className={`font-normal text-black`}> Collaborating with other team members to develop the game using OOP and design patterns</span>
        </p>
        <p className={`flex items-center gap-x-2 text-sm`}>
            <i className="ri-github-fill text-xl"/><span className={`font-bold`}>Github: </span>
            <a href="https://github.com/jesslyn-caroline/harvesting-game-pyfarm" className={`underline`}>https://github.com/jesslyn-caroline/harvesting-game-pyfarm</a>
        </p>

        <h3 className={`text-lg font-bold mt-8`}>Preview</h3>
        <div className={`w-full max-w-3xl`}>
            <Carousel_ num={1}>
                <img src="/pyfarm/image1.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/pyfarm/image2.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/pyfarm/image3.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/pyfarm/image4.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/pyfarm/image5.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/pyfarm/image6.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/pyfarm/image7.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/pyfarm/image8.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/pyfarm/image9.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/pyfarm/image10.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/pyfarm/image11.png" alt="" className={`w-full rounded-lg object-cover`} />
                <img src="/pyfarm/image12.png" alt="" className={`w-full rounded-lg object-cover`} />
            </Carousel_>      
        </div>
    </div>
    )
}

export default Pyfarm