//DECLARANDO E EXIBINDO ITENS DE UM ARRAY
let produtos = [];
document.write(typeof (produtos));

let products  = ["Computador", "Notebook", "Celular", "Tablet"];
document.write(`<p>${products}</p>`);

document.write(`<p>Exibindo os elementos do vetor atraves do indice :</p>`);
document.write(`<p>${products[0]}</p>`);
document.write(`<p>${products[1]}</p>`);
document.write(`<p>${products[2]}</p>`);
document.write(`<p>${products[3]}</p>`);

 
document.write(`<hr><p>Exibindo os elementos do vetor através do forEach: </p>`);
products.forEach((product) => {
    document.write(`<p>${product}</p>`);
});
 
document.write(`<hr><p>Exibindo os elementos do vetor através do forEach COM ÍNDICE: </p>`);
products.forEach((product, i) => {
    document.write(`<p>${i+1} - ${product}</p>`);
});

//METODOS DE MANIPULAÇAO DE VETORES
let frutas = ['Laranja', 'Maça', 'Banana']
document.write(`<p>Nossa lista de frutas é: ${frutas}</p>`)
frutas[3] = 'Morango'
document.write(`<p>Agora nossa lista  de frutas é:${frutas}</p>`)

document.write(`<h4>O metodo PUSH -  Insere um novo elemento no FINAL do vetor.</h4>`)
frutas.push('Abacaxi')
document.write(`<p>Agolra nossa lista de frutas é: ${frutas}</p>`)

document.write(`<h4>O metodo UNSHIFT  - Insere um novo elemento no INICIO do vetor.</h4>`)
frutas.unshift('Pera')
document.write(`<p>Agora nossa lista  de frutas é:${frutas}</p>`)

//COMO CONTAR OS ELEMENTOS DE UM VETOR - METODO LENGTH
const items = frutas.length

document.write(`<p>Na nossa lista temos${items} frutas.</p>`)
