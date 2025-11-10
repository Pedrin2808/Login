import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";
import Cabecalho from "../components/cabecalho/cabecalho";
import Login from "../pages/login";
import "./Admin.scss";

export default function Admin() {
    const [usuarios, setUsuarios] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        carregarUsuarios();
    }, []);

    const carregarUsuarios = async () => {
        try {
            const resp = await api.get("/usuario");
            setUsuarios(resp.data);
        } catch {
            alert("Erro ao carregar usuários.");
        }
    };


    return (
        <div className="admin-page">
            <Cabecalho />
            <main className="conteudo">
                <h2>Usuários Registrados</h2>
                <ul className="lista-usuarios">
                    {usuarios.map((u) => (
                        <li key={u.id_usuario}>
                            {u.nome_usuario} — {u.email}
                        </li>
                    ))}
                </ul>
                <div className="bot">
                <Link className="volta" to="/">Voltar</Link>
                </div>
            </main>
        </div>
    );
}
