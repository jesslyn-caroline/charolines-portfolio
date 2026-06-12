import NavigationBar from "./components/navigations/NavigationBar"
import About from "./sections/About"
import Education from "./sections/Education"
import Experience from "./sections/Experience"
import Hero from "./sections/Hero"
import Technology from "./sections/Technology"

function App() {
  return (
    <div className={`w-full h-full flex justify-center pb-40`}>
      <NavigationBar />

      <div className={`max-w-480 min-h-screen w-screen h-fit flex flex-col justify-center`}>
        <Hero />
        <div id='about'><About /></div>
        <div id='skills'><Technology /></div>
        <div id='education'><Education /></div>
        <div id='experience'><Experience /></div>
      </div>
    </div>
    
)}

export default App