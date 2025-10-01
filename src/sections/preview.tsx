import Carousel_ from "../components/carousel_"

interface Props {
    folderDir : string
    images : string[],
    previewPerPage? : number
}

function PreviewSection({folderDir, images, previewPerPage = 1} : Props) {
    return (
    <section>
        <h3 className={`text-lg font-bold mt-8`}>Preview</h3>
        <div className={`w-full max-w-3xl`}>
            <Carousel_ num={previewPerPage}>
                { images.map((image) => {
                    return (
                        <img src={`${folderDir + image}`} alt="" className={`w-full rounded-lg object-cover`} />
                    )
                })}
            </Carousel_>      
        </div>
    </section>
    )
}

export default PreviewSection