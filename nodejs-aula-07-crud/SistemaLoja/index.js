// Importando o Express
//const express = require("express")
import express from "express";
//importando o controller de cliente (onde estao as rotas)
import ClienteController from "./controllers/ClienteController.js"
import ProdutoController from "./controllers/ProdutoController.js"
import PedidoController from "./controllers/PedidoController.js"
import connection from "./config/sequelize-config.js";

//realizando a conexao com o banco de dados
connection.authenticate().then(() => {
    console.log("Conexao com o banco de dados realizada com sucesso!")
}).catch((error) => {
    console.log(`/ocorreu um erro ao se conectar ao banco`)
})

//criando o banco de dados (somente se ainda nao existir)
connection.query("CREATE DATABASE IF NOT EXISTS SistemaLoja;").then(() =>{
}).catch((error) =>{
    console.log(`Ocorreu um erro ao criar o banco de dados. Erro ${error}`);
})

// Iniciando o Express 
const app = express() 
// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs')
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'))
//configurando o express para aceitar dados vindo de formulario
app.use(express.urlencoded({extended: false}))

//ativando o uso das rotas
app.use("/",ClienteController)
app.use("/",PedidoController)
app.use("/",ProdutoController)


// ROTA PRINCIPAL
app.get("/",function(req,res){
    res.render("index")
})


// INICIA O SERVIDOR NA PORTA 8080
const port = 8080
app.listen(port, function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log(`Servidor iniciado com sucesso em http://localhost:${port}`)
    }
})