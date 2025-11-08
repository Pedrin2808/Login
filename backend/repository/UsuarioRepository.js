import con from "./conection.js";

// Inserir novo usuário
export async function cadastrarUsuario(usuario) {
    const comando = `
        INSERT INTO tb_usuario (nome_usuario, email, cpf, telefone, dt_nascimento, senha)
        VALUES (?, ?, ?, ?, ?, MD5(?))
    `;

    const [resposta] = await con.query(comando, [
        usuario.nome_usuario,
        usuario.email,
        usuario.cpf,
        usuario.telefone,
        usuario.dt_nascimento,
        usuario.senha
    ]);

    usuario.id_usuario = resposta.insertId;
    return usuario;
}

// Autenticar login
export async function autenticarUsuario(email, senha) {
    const comando = `
        SELECT id_usuario, nome_usuario, email 
        FROM tb_usuario
        WHERE email = ? AND senha = MD5(?)
    `;

    const [linhas] = await con.query(comando, [email, senha]);
    return linhas[0];
}

// Listar todos (para o admin)
export async function listarUsuarios() {
    const comando = `
        SELECT id_usuario, nome_usuario, email, cpf, telefone, dt_nascimento
        FROM tb_usuario
    `;

    const [linhas] = await con.query(comando);
    return linhas;
}
