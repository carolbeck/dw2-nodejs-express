//forma de importar CommonJS (antiga)
//const express = require("express")

//importando o Express com ES6 Modules (nova)
import express from "express";
//metodo do express usado para criar as rotas da aplicaçao
const router = express.Router();

//importando o model de cliente
import Cliente from "../models/Cliente.js";

//importando o MIDDLEWARE DE AUTENTICAÇAO
import Auth from "../middlewares/Auth.js";

// ROTA CLIENTES
router.get("/clientes",Auth,  function (req, res) {
  //const clientes = [
  //{nome: "Ana Silva", cpf: "123.456.789-00", endereco: "Rua das Flores, 123, Bairro Jardim Primavera, Cidade Felicidade, Estado do Sonho, CEP: 12345-678"},
  //{nome: "Pedro Almeida", cpf: "987.654.321-00", endereco: "Avenida Central, 456, Bairro Centro, Cidade Nova, Estado da Esperança, CEP: 98765-432"},
  //{nome: "Marina Oliveira", cpf: "456.789.123-00", endereco: "Travessa dos Sonhos, 789, Bairro Vista Linda, Cidade Sol Nascente, Estado da Harmonia, CEP: 54321-987"},
  //{nome: "Rafael Santos", cpf: "321.654.987-00", endereco: "Praça da Amizade, 321, Bairro Bela Vista, Cidade Alegria, Estado da Serenidade, CEP: 87654-321"}

  //Aqui iremos chamar o model "Cliente", invocar o metodo findAll() para buscar todos os registros da tabela de cliente
  Cliente.findAll()
    .then((clientes) => {
      res.render("clientes", {
        clientes: clientes,
      });
    })
    .catch((error) => {
      console.log("Ocorreu um erro ao buscar os clientes." + error);
    });
});

//rota de cadastro de cliente(subrota / cadastrar)
router.post("/clientes/cadastrar", Auth, (req, res) => {
  //criando as variaeis que irao armazenar os dados vindos do formulario
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  //enviando os dados para o banco
  //o metodo create cadastra informaçoes no bd
  Cliente.create({
    //coluna //variavel
    nome: nome,
    cpf: cpf,
    endereco: endereco,
    //se a promessa FOR BEM SUCEDIDA O USUARIO SERA REDIRECIONADO PARA A PAGIINA DE CLIENTES
  })
    .then(() => {
      res.redirect("/clientes");
      //falha da promessa
    })
    .catch((error) => {
      console.log("Ocorreu um erro ao cadastrar o cliente." + error);
    });
});

//rota de  exclusao de cliente
router.get("/clientes/excluir/:id",Auth, (req, res) => {
  //CAPTURANDO O PARAMETRO DA ROTA
  const id = req.params.id;
  //enviando o id do cliente para apagar do banco de dados
  Cliente.destroy({
    where: {
      //banco //parametro recebido
      id: id,
    },
  })
    .then(() => {
      res.redirect("/clientes");
      //falha
    })
    .catch((error) => {
      console.log("Ocorreu um erro ao excluir o cliente" + error);
    });
});

//rota de edicao do cliente
router.get("/clientes/editar/:id", Auth, (req, res) => {
  const id = req.params.id;
  //buscando o cliente no banco
  Cliente.findByPk(id).then((cliente) => {
    res.render("clienteEditar", {
      //passando os dados do cliente para a pagina
      cliente: cliente,
    });
  });
});

//rota de alteraçao de cliente
router.post("/clientes/alterar", Auth,  (req, res) => {
  //coletando  os dados do formulario

  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  const id = req.body.id; //alterando o cliente no banco
  Cliente.update(
    {
      nome: nome,
      cpf: cpf,
      endereco: endereco,
    },
    { where: { id: id } },
  ).then(() => {
    res.redirect("/clientes");
  });
});
//exportando o modulo para usa-lo em outro arquivo
export default router;
