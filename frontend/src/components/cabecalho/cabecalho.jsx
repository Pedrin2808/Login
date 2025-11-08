import { Link } from "react-router-dom";
import "./cabecalho.scss";

export default function Cabecalho() {
    return (
        <header className="cabecalho">
            <div className="logo-area">
                <img src="src/assets/images/logo.png" alt="Logo" className="logo" />
                <h1 className="titulo">COFFEE BREAK</h1>
            </div>

            <nav className="menu">
                <Link to="/">Login</Link>
            </nav>
        </header>
    );
}
