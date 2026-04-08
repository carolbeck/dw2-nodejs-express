//importando a ORM sequelize
import Sequelize from "sequelize";

//definindo os dados de conexao com o banco de dados
const connection = new Sequelize({
    //tipo de banco
    dialect: 'mysql',
    //endereco do banco
    host:"localhost",
    //nome de usuario do banco
    username: "root",
    //senha
    password: "",
    //fuso horario
    timezone: "-03:00",
    //nome do banco que sera usado na aplicacao
    database:'sistemaloja'

});
//exportando o modulo
export default connection;