import conection from "./conection.js";

export async function loginAdmin(email, senha) {
    const comando = `
        select id_adm, nome, email
        from tb_adm
        where email = ? and senha = MD5(?)
    `;
    const [registros] = await conection.query(comando, [email, senha]);
    return registros[0];
}

export async function listarUsuarios() {
    const comando = `
        select id_usuario, nome_usuario, email, cpf, telefone, dt_nascimento
        from tb_usuario
    `;
    const [registros] = await conection.query(comando);
    return registros;
}
