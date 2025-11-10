import con from "./conection.js";

export async function cadastrarUsuario(usuario) {
    const comando = `
        INSERT INTO tb_login (nome_usuario, email, cpf, telefone, dt_nascimento, senha)
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

export async function autenticarUsuario(email, senha) {
    const comando = `
        SELECT id_usuario, nome_usuario, email 
        FROM tb_login
        WHERE email = ? AND senha = MD5(?)
    `;

    const [linhas] = await con.query(comando, [email, senha]);
    return linhas[0];
}

export async function listarUsuarios() {
    const comando = `
        SELECT id_usuario, nome_usuario, email, cpf, telefone, dt_nascimento
        FROM tb_login
    `;

    const [linhas] = await con.query(comando);
    return linhas;
}
