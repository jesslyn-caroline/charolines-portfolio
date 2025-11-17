import { Route, Routes, useLocation } from "react-router-dom"
import { Analytics } from "@vercel/analytics/react"

import Layout from "./layout"
import HCIAPractice from "./hcia-practice"
import Sentifica from "./sentifica"
import Pyfarm from "./pyfarm"
import Kaitosoft from "./kaitosoft"
import Cinnamon from "./cinnamon"
import Fukuro from "./fukuro"
import Home from "./pages/home"
import { useLayoutEffect } from "react"

function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [ location.pathname ]);

  return (
    <>
      <Analytics />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/hcia-practice" element={<HCIAPractice />} />
          <Route path="/sentifica" element={<Sentifica />} />
          <Route path="/pyfarm" element={<Pyfarm />} />
          <Route path="/kaitosoft" element={<Kaitosoft />} />
          <Route path="/cinnamon" element={<Cinnamon />} />
          <Route path="/fukuro" element={<Fukuro />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
