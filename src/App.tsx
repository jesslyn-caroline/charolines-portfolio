import { Route, Routes } from "react-router"
import { Analytics } from "@vercel/analytics/next"
import MainPage from "./pages/MainPage"
import ProjectDetail from "./pages/ProjectDetail"

function App() {
  return (
  <>
    <Analytics />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/projects/:path" element={<ProjectDetail />} />
    </Routes>
  </>  
)}

export default App