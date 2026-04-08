import Sequelize from 'sequelize';
import connection from '../config/sequelize-config.js';

//criando o modulo
//o metodo define () do Sequelize croa uma tabela no bd
const Cliente = connection.define('clientes',{
    nome: {
        type:Sequelize.STRING,
        allowNull: false,
    },
      cpf: {
        type:Sequelize.STRING,
        allowNull: false,
    },
    endereco:{
        type:Sequelize.STRING,
        allowNull: false,
    },
});
//o metodo sync() sincronuiza os dados com o banco
//force: false: nao recria a tabela caso ela ja exista
Cliente.sync({force:false});
export default Cliente;