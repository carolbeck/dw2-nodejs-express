
function showMessage(){
    const message = "<h2>Oii, tudo bem?Bom dia!</h2>"
    document.write(message)
}

showMessage();

const user = "Caroline Marceli Beck Camilo";

function showuserMessage(user){

 document.write(`<h3>Qual sera seu objetivo, ${user}?</h3>`)
}

showuserMessage(user);

const n1 = 60;
const n2= 3;

function sum(n1,n2){
    
    let result= n1 + n2;
    document.write(`<p>A soma de ${n1} + ${n2} é igual a ${result}.</p>`)
}

sum(n1, n2)


const num1 = 37;
const num2 = 4;

function mult(num1,num2){
return num1 * num2;
}

document.write(`O resultado é${mult(num1,num2)}.`);

const number = 9;

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
let numero  = 274;

document.write(`<p>A metade de ${numero} é ${divisao(numero)}.</p>`)

const dobro = (x) =>{
    return x * 2;
};
const x = 349;
document.write(`<p>O dobro de ${x} é ${dobro(x)}.</p>`)

const calculadora = (a,operador, b) => {
    return eval(`${a} ${operador} ${b}`);
};

document.write(`<p>O resultado dessa conta é ${calculadora(1100, "-", 1)}`)
