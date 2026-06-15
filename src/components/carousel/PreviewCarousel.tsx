import { useEffect, useState } from "react";

function PreviewCarousel({ dir, total }: { dir: string, total: number }) {
    const [num, setNum] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setNum(prev => ((prev % total) + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, [])

    return (
    <div className={`w-full border-2 border-[#FFD230] rounded-lg relative`}>
        <img src={`${dir}/${num}.png`} alt='Preview' className={`w-full rounded-lg z-0 shadow-[0_10px_40px_0px_#783C0A40]`} />
    </div>
)}

export default PreviewCarousel