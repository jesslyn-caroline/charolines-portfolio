interface Props {
    flip: string
}

function PageBorder({ flip }: Props) {
    return (
    <div className={flip}>
        <img src={`/page-border.svg`} alt='Page Border' className={`size-20`}/>
    </div>
)}

export default PageBorder