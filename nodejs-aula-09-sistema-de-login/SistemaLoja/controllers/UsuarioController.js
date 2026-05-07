//controller de usuario
import express from "express";
const router = express.Router();
//importando o model
import Usuario from "../models/Usuario.js";
//importando o bcrypt (hash de senha)
import bcrypt from "bcrypt";

//rota de login
router.get("/login", (req,res) => {
    res.render("login");
});

//rota do formulario de cadastro do usuario
router.get("/cadastro", (req,res) => {
    res.render("cadastro");
});

//rota de criaçao de usuario no banco
router.post("/caduser", (req,res) => {
    //coletando as informaçoes do formulario
    const email = req.body.email;
     const senha = req.body.senha;
     //verificando se o usuario ja existe
     Usuario.findOne({where: {email:email}}).then(usuario => {
        //se nao houver um usuario igual
        if (usuario == undefined) {
 //aqui sera feito o hash de senha
     //criando "sal" do hash
     const salt = bcrypt.genSaltSync(10);
     const hash = bcrypt.hashSync(senha,salt);
    //enviando para o banco
    Usuario.create ({
        email: email,
        senha: hash,
    }).then(() => {
        res.redirect("/login");
    }).catch(error => {
        console.log("Não foi possivel cadastrar o usuario" + error)
    });
    //se houver um usuario com o mesmo
        } else {
         res.send(`Usuario já cadastrado! 
            <br
            <br><a href="/login" >Faça o login</a>`)
        }
     });
    
    });

    //rota de autenticaçao(login)
router.post("/autenticacao" ,  (req,res) => {
    //capturar os dados do formulario login
    const email = req.body.email
    const senha = req.body.senha
    //buscando o usuario no banco
    Usuario.findOne({where: {email:email}}).then((usuario) => {
        //se o usuario existir
        if (usuario != undefined) {
            //valida a senha
            const correct = bcrypt.compareSync(senha, usuario.senha);
            //se a senha for valida
            if (correct)  {
                //autoriza o login
                //cria a sessao para o usuario
                req.session.usuario ={
                    //inserindo as inoformaçoes do usuario na sessao
                    id: usuario.id,
                    email: usuario.email
                }
                res.send(`Sessão do usuario criada com sucesso!<br>
                    ID do usuário logado: ${req.session.usuario['id']}<br>
                    E-mail do usuário logado: ${req.session.usuario['email']}`)
                //res.redirect("/");
                //se a senha estiver incorreta
            }else {
                res.send(`Senha inválida!
                    <br><a href="/login">Tente novamente.</a>`)
            }
            //se o usuario nao existir
        }else {
          res.send(`O usuário informado não existe!
                    <br><a href="/login">Tente novamente.</a>`)
        }
    });
});

    //exportando o modulo
    export default router;
