import { Router } from "express";
import { cadastrarUsuario, autenticarUsuario, listarUsuarios } from "../repository/UsuarioRepository.js";

const endpoints = Router();

// Rota para cadastrar novo usuário
endpoints.post("/registrar", async (req, resp) => {
    try {
        const novoUsuario = req.body;

        if (!novoUsuario.nome_usuario || !novoUsuario.email || !novoUsuario.senha)
            return resp.status(400).send({ erro: "Preencha todos os campos obrigatórios" });

        const usuario = await cadastrarUsuario(novoUsuario);
        resp.status(201).send(usuario);
    } catch (err) {
        console.error(err);
        resp.status(500).send({ erro: "Erro ao cadastrar usuário" });
    }
});

// Rota de login
endpoints.post("/login", async (req, resp) => {
    try {
        const { email, senha } = req.body;

        if (!email || !senha)
            return resp.status(400).send({ erro: "Preencha email e senha" });

        const usuario = await autenticarUsuario(email, senha);

        if (!usuario)
            return resp.status(400).send({ erro: "Email ou senha incorretos" });

        resp.send(usuario);
    } catch (err) {
        console.error(err);
        resp.status(500).send({ erro: "Erro no servidor ao logar" });
    }
});

// Rota de listagem (para admin)
endpoints.get("/", async (req, resp) => {
    try {
        const usuarios = await listarUsuarios();
        resp.send(usuarios);
    } catch (err) {
        console.error(err);
        resp.status(500).send({ erro: "Erro ao listar usuários" });
    }
});

export default endpoints;
