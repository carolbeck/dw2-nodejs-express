//importando o Express com ES6 Modules (nova)
import express from "express"
//metodo do express usado para criar as rotas da aplicaçao
const router = express.Router()
//importando os models
import Pedido from "../models/Pedido.js";
import Cliente from "../models/Cliente.js";

//importando o MIDDLEWARE DE AUTENTICAÇAO
import Auth from "../middlewares/Auth.js";

// ROTA PEDIDOS
router.get("/pedidos", Auth, function(req,res){
   //fazendo inner join para trazer as informaçoes do cliente junto com as inofrmaçoes do pedido

   //realizando ambas as consultas em paralelo
   Promise.all([
    Pedido.findAll({
    include: [
        {
            model: Cliente, //inclui o modelo cliente relacionado
            required: true, //garante que somente pedidos com clientes relacionados sejam retornados
        },
    ],
}),
//busca todos os clientes
Cliente.findAll(),
   ])
.then(([pedidos, clientes]) => {
    res.render("pedidos", {
        //passando a lista de pedidos e clientes para a pagina
        pedidos:pedidos,
        clientes : clientes,
    })
}).catch(error => {
    console.log(`Ocorreu um erro ao listar os pedidos. ${error}`)
});
});
//ROTA DE CADASTRO DE PEDIDOS
router.post("/pedidos/cadastrar", Auth,(req,res) => {
    //CAPTURAR OS DADOS DO FORMULARIO
    const numero = req.body.numero
    const valor = req.body.valor
    const clienteId = req.body.clienteId;
    //cadastrando o banco
    Pedido.create({
        numero : numero,
        valor  :valor,
        cliente_id  : clienteId,
    }).then(() =>{
        res.redirect("/pedidos");
    }).catch(error => {
        console.log(error);
    });
});

//rota de exclusao de pedidos
router.get("/pedidos/excluir/:id",Auth, (req,res) => {
    Pedido.destroy({
        where : {
            id : id,
        },
    }).then(() =>{
        res.redirect("/pedidos");
    }).catch(error =>{
        console.log(error);
    }
        
    );
});
export default router;