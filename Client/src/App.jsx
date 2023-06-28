import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Contacto from "./pages/Contacto";
import Cuidados from "./pages/Cuidados";
import Productos from "./pages/Productos";
import Servicios from "./pages/Servicios";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/contacto" element={<Contacto></Contacto>}></Route>
          <Route path="/cuidados" element={<Cuidados></Cuidados>}></Route>
          <Route path="/productos" element={<Productos></Productos>}></Route>
          <Route path="/servicios" element={<Servicios></Servicios>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
