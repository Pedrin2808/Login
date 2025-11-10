import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../pages/login.scss";

export default function Login() {
    const navigate = useNavigate();
    const [modo, setModo] = useState("login");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome_usuario, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");
    const [dt_nascimento, setNascimento] = useState("");
    const [mensagem, setMensagem] = useState("");

    async function logar() {
        try {
            const resposta = await axios.post("http://localhost:5000/usuario/login", {
                email,
                senha
            });

            if (email === "adm@gmail.com" && senha === "adm") {

                if (resposta.data) {
                    setMensagem("Login realizado com sucesso!");
                    console.log("Usuário logado:", resposta.data);
                    setTimeout(() => navigate("/admin"), 1000);
                }
            }
            else {

                if (resposta.data) {
                    setMensagem("Login realizado com sucesso!");
                    console.log("Usuário logado:", resposta.data);
                    setTimeout(() => navigate("/inicio"), 1000);
                }

            }

        } catch (err) {
            console.error(err);
            setMensagem("Erro ao realizar login. Verifique suas credenciais.");
        }
    }

    async function registrar() {
        try {
            const resposta = await axios.post("http://localhost:5000/usuario/registrar", {
                nome_usuario,
                email,
                cpf,
                telefone,
                dt_nascimento,
                senha
            });

            if (resposta.data) {
                setMensagem("Usuário cadastrado com sucesso!");
                setModo("login");
                limparCampos();
            }
        } catch (err) {
            console.error(err);
            setMensagem("Erro ao registrar usuário.");
        }
    }

    function limparCampos() {
        setNome("");
        setEmail("");
        setCpf("");
        setTelefone("");
        setNascimento("");
        setSenha("");
    }

    return (
        <div className="container-login">
            <div className="box-login">
                <h1 className="titulo">{modo === "login" ? "Login do Usuário" : "Registrar Novo Usuário"}</h1>

                {modo === "login" ? (
                    <>
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />

                        <button onClick={logar}>Entrar</button>

                        <p className="alternar" onClick={() => setModo("registrar")}>
                            Não tem conta? <span>Registrar</span>
                        </p>
                    </>
                ) : (
                    <>
                        <input
                            type="text"
                            placeholder="Nome completo"
                            value={nome_usuario}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="CPF"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Telefone"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                        />
                        <input
                            type="date"
                            value={dt_nascimento}
                            onChange={(e) => setNascimento(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />

                        <button onClick={registrar}>Registrar</button>

                        <p className="alternar" onClick={() => setModo("login")}>
                            Já tem conta? <span>Entrar</span>
                        </p>
                    </>
                )}

                {mensagem && <p className="mensagem">{mensagem}</p>}
            </div>
        </div>
    );
}