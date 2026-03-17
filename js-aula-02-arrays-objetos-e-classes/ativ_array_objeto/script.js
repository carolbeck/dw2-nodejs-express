let listaClientes = [
  {nome: "Anny Vitoria", endereco: "Rua Jose Alves, 123", cpf: "48287310923"},
  {nome: "Natasha Pedroso",endereco: "Rua Antonio Golçalves, 765", cpf:"37619835590"},
  {nome: "Caroline Beck",endereco: "Avenida Luiz Rangel,726",cpf: "50676609880"}
];

document.write("<h2>Lista dos Clientes</h2>");

listaClientes.forEach(function(cliente){
    document.write("Nome: " + cliente.nome + "<br>");
    document.write("Endereco: " + cliente.endereco + "<br>");
    document.write("Cpf: " + cliente.cpf + "<br><br>");
});

listaClientes.push({
    nome: "Diego Max",
endereco: "Rua Luiz Silva, 289", 
cpf: 45609826756
});

document.write("<h2>Cliente adicionado no FINAL</h2>");

listaClientes.forEach(function(cliente){
    document.write("Nome: " + cliente.nome + "<br>");
    document.write("Endereco: " + cliente.endereco + "<br>");
    document.write("Cpf: " + cliente.cpf + "<br><br>");
});

listaClientes.unshift({
    nome:"Joao Costa",
    endereco: "Rua Militao Araujo,678",
    cpf: 46729876512
});

document.write("<h2>Cliente adicionado ao INICIO</h2>");

listaClientes.forEach(function(cliente){
    document.write("Nome: " + cliente.nome + "<br>");
    document.write("Endereco: " + cliente.endereco + "<br>");
    document.write("Cpf: " + cliente.cpf + "<br><br>");
});

document.write("<h2>Total de Clientes</h2>");
document.write("Quantidade: " + listaClientes.length);