import * as repoAdmin from '../repository/AdminRepository.js';
import { Router } from 'express';

const endpoints = Router();

endpoints.post('/login', async (req, resp) => {
    try {
        const { email, senha } = req.body;

        if (!email || !senha)
            return resp.status(400).send({ erro: "Informe email e senha" });

        const admin = await repoAdmin.loginAdmin(email, senha);
        if (!admin)
            return resp.status(401).send({ erro: "Credenciais inválidas" });

        resp.send(admin);
    } catch (err) {
        console.error(err);
        resp.status(500).send({ erro: "Erro ao realizar login do admin" });
    }
});

endpoints.get('/usuarios', async (req, resp) => {
    try {
        const usuarios = await repoAdmin.listarUsuarios();
        resp.send(usuarios);
    } catch (err) {
        console.error(err);
        resp.status(500).send({ erro: "Erro ao listar usuários" });
    }
});

export default endpoints;
