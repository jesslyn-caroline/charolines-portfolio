interface Props {
    icon: React.ReactElement,
    link: string
}

function ContactBtn({icon, link}: Props) {
    return (
    <div className={`
        bg-[#FEF3C6] border-[#FFD23080] border-2 
        hover:bg-[#FEE685] hover:border-[#FFB900] hover:scale-110 
        animation ease-in duration-200
        rounded-full p-2
    `}>
        <a href={link} target="_blank" className={`text-[#973C00] size-5`}>{icon}</a>
    </div>
)}

export default ContactBtn