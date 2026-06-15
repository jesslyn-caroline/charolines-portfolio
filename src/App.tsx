import { Route, Routes } from "react-router"
import MainPage from "./pages/MainPage"
import ProjectDetail from "./pages/ProjectDetail"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/projects/:path" element={<ProjectDetail />} />
    </Routes>
)}

export default App