function Fukuro() {

    return (
    <div className={`flex flex-col space-y-8 max-w-full w-full`}>
        <div className={`flex flex-col`}>
            <a href="https://github.com/jesslyn-caroline/fukuro" className={`font-bold text-xl hover:underline`}>
                fukuro<i className="ri-arrow-right-up-line"/>
            </a>
            <span className={`text-sm text-gray-500`}>Group Project • Mobile Development</span>
        </div>
        
        <div className={`flex flex-col space-y-2`}>
            <p className={`text-black`}>
                Ongoing Project
            </p>
        </div>
    </div>
    )
}

export default Fukuro