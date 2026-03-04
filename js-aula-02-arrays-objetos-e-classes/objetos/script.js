// OS OBJETOS LITERAIS NO JAVASCRIPT
document.write(`<h4>Objetos loterais possuem Atributos (propriedades)  e Metodos (funçoes)</h4>`,

);
const pessoa = {};
document.write(typeof (pessoa))

//CRIANDO UM OBJETO
const carro = {
    //PROPRIEDADES
    modelo: "gol",
    cor:"vermelho",
    //METODOS
    acelerar(){
        return "Acelerando...";
    },
    frear (){
        return "Freando...";
    },
    };
    document.write(`<p>O modelo do carro é: ${carro.modelo}</p>`) 
     document.write(`<p>A cor do carro é: ${carro.cor}</p>`)
      document.write(`<p>Quando o carro acelera ele faz : ${carro.acelerar()}</p>`)
       document.write(`<p>Ativando os freios: ${carro.frear()}</p>`)

       //MANIPULANDO ARRAYS DE OBJERS
       const productlist = [
        {
          nome:"Computador",
          marca:"Lenovo",
          preco:3000,
          descricao: "PC moderno com bom desempenho",
       },
       {
  nome:"Tablet",
          marca:"Samsung",
          preco:2000,
          descricao: "Otima velocidade de processamento",
       }
       ,
       {
          nome:"Celular",
          marca:"Apple",
          preco:12000,
          descricao: "Ultra resistente",
       },
    ];
    //EXIBINDO O ARRAY DE OBJETOS ATRAVES DO FOREACH
    document.write(`<h4>Exibindo o array de objetos atraves do forEach:</h4>`)
    productlist.forEach((product) =>{
        document.write(`
            Produto:${product.nome} <br>
               Marca:${product.marca} <br>
                  Preco:${product.preco} <br>
                     Descricao:${product.descricao} <br>
            `);
    })