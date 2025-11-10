import Cabecalho from "../components/cabecalho/cabecalho";
import "./inicio.scss"

export default function Inicio() {
    return (
        <div className="inicio">
            <Cabecalho />

            <div className="conteudo-inicio">
                <h1>Hello World</h1>
            </div>
        </div>
    );
}