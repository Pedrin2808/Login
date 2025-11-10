import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/login";
import Admin from "./pages/Admin";
import Inicio from "./pages/inicio"

export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/inicio" element={<Inicio />} />
            </Routes>
        </BrowserRouter>
    );
}
