import { useLocation } from "react-router"
import About from "../sections/About"
import Education from "../sections/Education"
import Experience from "../sections/Experience"
import Hero from "../sections/Hero"
import Projects from "../sections/Projects"
import Technology from "../sections/Technology"
import NavigationBar from "../components/navigations/NavigationBar"
import { useEffect } from "react"
import Footer from "../components/navigations/Footer"

function MainPage() {
    const location = useLocation()

    useEffect(() => {
        document.getElementById(location.hash.slice(1))?.scrollIntoView({ 
        behavior: 'smooth' 
    })}, [])

    return (
    <div className={`w-full h-full flex flex-col justify-center`}>
        <NavigationBar />

        <div className={`max-w-480 min-h-screen w-screen h-fit flex flex-col justify-center pb-30`}>
            <section><Hero /></section>
            <section id='about'><About /></section>
            <section id='skills'><Technology /></section>
            <section id='education'><Education /></section>
            <section id='experience'><Experience /></section>
            <section id='projects'><Projects /></section>
        </div>

        <Footer />
    </div>
)}

export default MainPage