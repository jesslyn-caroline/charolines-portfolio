function StarBorder() {
    return (
    <div className={`flex flex-row justify-center items-center gap-x-3`}>
        <div className={`w-28 h-0.5 bg-linear-to-r from-[#FFFFFF00] via-[#FFB900] to-[#FFFFFF00]`}/>
        <img src='/holed-star.svg' alt='Holed Star' className={`size-6`}/>
        <div className={`w-28 h-0.5 bg-linear-to-r from-[#FFFFFF00] via-[#FFB900] to-[#FFFFFF00]`}/>
    </div>
)}

export default StarBorder