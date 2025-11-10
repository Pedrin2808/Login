create database Robson;
use Robson;

create table tb_login (
	id_usuario int primary key auto_increment,
    nome_usuario varchar (200),
    email varchar (300),
    cpf varchar (20),
    telefone varchar (20),
    dt_nascimento date,
    senha varchar(500)
);



