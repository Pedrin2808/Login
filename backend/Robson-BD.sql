create database BTRobson;
use BTRobson;

create table tb_usuario (
	id_usuario int primary key auto_increment,
    nome_usuario varchar (200),
    email varchar (300),
    cpf varchar (20),
    telefone varchar (20),
    dt_nascimento date,
    senha varchar(500),
    id_curso int
);

create table tb_adm(
	id_adm int primary key auto_increment,
    nome varchar (200),
    email varchar (200),
    senha varchar (300),
    id_curso int,
    id_usuario int,
    foreign key (id_usuario) references tb_usuario(id_usuario)
);