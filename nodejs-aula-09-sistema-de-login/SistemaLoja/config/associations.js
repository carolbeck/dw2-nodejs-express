//este arquivo ira criar as associaçoes entre as tabelas
//importando os models
import Cliente from "../models/Cliente.js";
import Pedido from "../models/Pedido.js";

//definindo as associaçoes entre os models
const associations = () => {
    //um cliente possui muitos pedidos
    Cliente.hasMany(Pedido, {foreignKey: "cliente_id"});
    //um pedido possui um cliente
    Pedido.belongsTo(Cliente, {foreignKey: "cliente_id"});
}

export default associations;