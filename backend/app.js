import express from "express";
import cors from "cors";
import usuarioController from "./controller/UsuarioController.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/usuario", usuarioController);

app.listen(5000, () => console.log("Servidor rodando na porta 5000"));
