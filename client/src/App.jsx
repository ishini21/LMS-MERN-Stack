import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth/index";

function App() { 
  return (
    <>
      <Routes>
      <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </>
  )
}

export default App
