import { Route, Routes } from "react-router-dom"
import Layout from "./layout"
import HCIAPractice from "./hcia-practice"
import Sentifica from "./sentifica"
import Pyfarm from "./pyfarm"
import Kaitosoft from "./kaitosoft"
import Cinnamon from "./cinnamon"
import Fukuro from "./fukuro"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h1 className={`font-bold`}><i className="ri-arrow-left-line font-normal"/>&ensp;Click on the project</h1>} />
        <Route path="/hcia-practice" element={<HCIAPractice />} />
        <Route path="/sentifica" element={<Sentifica />} />
        <Route path="/pyfarm" element={<Pyfarm />} />
        <Route path="/kaitosoft" element={<Kaitosoft />} />
        <Route path="/cinnamon" element={<Cinnamon />} />
        <Route path="/fukuro" element={<Fukuro />} />
      </Route>
    </Routes>
  )
}

export default App
