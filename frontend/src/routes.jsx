import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/login";
import Admin from "./pages/Admin";

export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </BrowserRouter>
    );
}
