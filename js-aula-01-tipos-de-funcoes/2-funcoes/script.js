//TIPOS DE FUNÇOES
//FUNÇAO SIMPLES
function showMessage(){
    const message = "<h2>Ola, bem-vindo!</h2>"
    document.write(message)
}
//INVOCANDO A FUNCAO
showMessage();

//FUNCAO COM PARAMETRO / ARGUMENTO
const user = "Caroline Beck";

function showuserMessage(user){
    //essa  funçao recebe um parametro
 document.write(`<h3>O que deseja fazer hoje, ${user}?</h3>`)
}

showuserMessage(user);//envio de argumento

//funcao com mais de um parametro
const n1 = 10;
const n2= 5;

function sum(n1,n2){
    //essa funcao recebe dois parametros
    let result= n1 + n2;
    document.write(`<p>A soma de ${n1} + ${n2} é igual a ${result}.</p>`)
}

//invocando a funçao
sum(n1, n2)//enviando os argumentos

//FUNÇAO COM RETORNO
const num1 = 50;
const num2 = 3;

//É INDICADO QUE AS FUNÇOES POSSUAM O MINIMO DE RESPONSABILIDADES POSSIVEIS
//ESSA FUNÇAO IRA MULTIPLICAR DOIS NUMEROS
function mult(num1,num2){
return num1 * num2;
}

document.write(`O resultado é${mult(num1,num2)}.`);

//funcao com retorno condicional
const number = 4;

function parImpar(number){
    if(number % 2 == 0){
    return"par";
    } else {
        return "impar";
    
    }
};
document.write(`<p>O numero ${parImpar(number)}.</p>`)

//FUNÇAO ANONIMA
const divisao = function(n){
return n /2;
};
let numero  = 200;

document.write(`<p>A metade de ${numero} é ${divisao(numero)}.</p>`)

//FUNÇAO SETA(ARROW FUNCTION) - > É UM TIPO DE FUNÇAO ANONIMA
const dobro = (x) =>{
    return x * 2;
};
const x = 300;
document.write(`<p>O dobro de ${x} é ${dobro(x)}.</p>`)

//ARROW FUNCTION COM MAIS  DE UM PARAMETRO
const calculadora = (a,operador, b) => {
    return eval(`${a} ${operador} ${b}`);
};

document.write(`<p>O resultado da operaçao matematica é ${calculadora(1100, "-", 1)}`)
