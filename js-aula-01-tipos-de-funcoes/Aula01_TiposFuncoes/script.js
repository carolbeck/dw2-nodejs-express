
const painel = document.getElementById("resultado");

function imprimir(texto) {
    painel.innerHTML += texto + "<br>";
}

function exibirInformacoes() {
    imprimir("<b>Informações:</b>");
    imprimir("Nome: Caroline Beck");
    imprimir("Idade: 20 anos");
    imprimir("Cidade: Cananeia");
    imprimir("---");
}
exibirInformacoes();

function dividir(num1, num2) {
    let resultado = num1 / num2;
    imprimir("O resultado da divisão foi: " + resultado);
}
dividir(10, 2);

function multiplicar(n1, n2, n3) {
    return n1 * n2 * n3;
}
let resultadoMultiplicacao = multiplicar(2, 4, 5);
imprimir("Resultado da multiplicação: " + resultadoMultiplicacao);

function verificarIdade(idade) {
    return idade >= 18 ? "Maior de idade" : "Menor de idade";
}
imprimir("Verificação de idade (20): " + verificarIdade(20));

const calcularMedia = function(nota1, nota2) {
    let media = (nota1 + nota2) / 2;
    return media <= 5 ? "Reprovado" : "Aprovado";
};
imprimir("Status do aluno (6 e 7): " + calcularMedia(6, 7));

const triplo = n => "O triplo do número é: " + (n * 3);
imprimir(triplo(5));

const somarQuatro = (a, b, c, d) => a + b + c + d;
imprimir("Soma de quatro números: " + somarQuatro(10, 20, 30, 40));