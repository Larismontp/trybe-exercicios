//1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)
const a = 10;
const b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// 2.Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
const numberOne = 20;
const numberTwo = 30;
if (numberOne >= numberTwo) {
  console.log("numberOne");
}else{
  console.log("numberTwo");
}
// 3.Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
const one = 4;
const two = 6;
const three = 8;
if (one > two && one > three) {
  console.log("one");
} else if (two > three) {
  console.log("two");
}else{
  console.log("three");
}
// 4.Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
const valor = "-";
if (valor === "+") {
  console.log("positive");
}else if (valor === "-") {
  console.log("negative");
}else{
  console.log("zero");
}
// 5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.
const anguloOne = 60;
const anguloTwo = 60;
const anguloThree = 60;
let SomaDosAngulos = anguloOne + anguloTwo + anguloThree;
if (anguloOne < 0 || anguloTwo < 0 || anguloThree < 0) {
  console.log("inválido");  
} else if (SomaDosAngulos = 180) {
  console.log("true");
}else{
  console.log("false");
};
// 6.Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)
let pecaDeXadrez = "queen";
if (pecaDeXadrez.toLowerCase() === "queen") {
  console.log("Move-se pelas colunas, fileiras e diagonal de outra cor");
} else if (pecaDeXadrez.toLowerCase() === "dama") {
  console.log("move-se para qualquer casa ao longo da coluna, fileira ou diagonal que ocupa");
} else if (pecaDeXadrez.toLowerCase() === "torre") {
  console.log("move-se a qualquer casa ao longo da coluna ou fileira que ocupa");
}else if (pecaDeXadrez.toLowerCase() === "bispo") {
  console.log("move-se a qualquer casa ao longo de uma diagonal que ocupa");
}else if (pecaDeXadrez.toLowerCase() === "cavalo") {
  console.log("move-se para a casa mais próxima em relação à qual ocupa, mas não na mesma coluna, fileira ou diagonal"); 
}else if (pecaDeXadrez.toLowerCase() === "peao") {
  console.log("O peão avança para uma casa vazia, imediatamente à sua frente na mesma coluna, ou Em seu primeiro lance o peão pode avançar duas casas na mesma coluna, desde que ambas estejam vazias, ou O peão avança a uma casa ocupada por uma peça adversária, que esteja diagonalmente à sua frente, numa coluna adjacente, capturando aquela peça.");
}else if (pecaDeXadrez.toLowerCase() === "rei") {
  console.log("move-se somente uma unidade para cada lado");
}else{
 console.log("Erro"); 
}
// 7.Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
const nota = 100;

if(nota < 0 || nota > 100) {
  console.log("Erro, nota inválida")
}else if (nota >= 90) {
  console.log("A");
}else if (nota >= 80) {
  console.log("B");
}else if (nota >= 70) {
  console.log("C");
}else if (nota >= 60) {
  console.log("D");
}else if (nota >= 50) {
  console.log("E");
}else {
  console.log("F");
}
// 8.🚀 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
// Bonus: use somente um if.
const numeroUm = 5;
const numeroDois = 6;
const numeroTres = 7;
if (numeroUm % 2 === 0 || numeroDois % 2 === 0 || numeroTres % 2 === 0) {
  console.log("true");
} else {
  console.log("false");
}
// 9.Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
// Bonus: use somente um if.
const One = 3;
const Two = 4;
const Three = 6;
if (One % 2 !== 0 || Two % 2 !== 0 || Three % 2 !== 0) {
  console.log("true");
} else {
  console.log("false");
}
// 10.Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)
const custoProduto = 15;
const valorVenda = 20;
const custoTotal = custoProduto * 1.2
const lucro = valorVenda - custoTotal
if (custoProduto < 0 || valorVenda < 0) {
  console.log("Erro");
} else {
  console.log(lucro * 1000);
}
// let lucro = valorVenda - custoProduto * 1000
// let teste = 2;
// console.log(teste == 2 ? true : false);

// 11.Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
// R$ 2.670,00: salário com INSS já deduzido;
// 7.5%: alíquota de imposto de renda;
// R$ 142,80 parcela a se deduzir do imposto.
// Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
// O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
// Resultado: R$ 2.612,55.
// Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?

let salarioBruto = 3000.00;
let descontoInss;
let aliquota1 = 8 / 100;
let aliquota2 = 9 / 100;
let aliquota3 = 11 / 100;
let aliquota4 = 570.00;


if (salarioBruto <= 1556.94) {
  descontoInss = salarioBruto * aliquota1;
}else if (salarioBruto <= 2594.22) {
  descontoInss = salarioBruto * aliquota2;  
}else if (salarioBruto <= 5189.82) {
  descontoInss = salarioBruto * aliquota3;  
}else {
  descontoInss = aliquota4;  
}

let descontoIR;
let aliquotaOne = 7.5 / 100;
let aliquotaTwo = 15 / 100;
let aliquotaThree = 22.5 / 100;
let aliquotaFour = 27.5 / 100;

let salarioComDescontoInss = salarioBruto - descontoInss;

if (salarioComDescontoInss <= 1903.98) {
  descontoIR = 0;
}else if (salarioComDescontoInss <= 2826.65) {
  descontoIR = salarioComDescontoInss * aliquotaOne - 142.80;
}else if (salarioComDescontoInss <= 3751.05) {
  descontoIR = salarioComDescontoInss * aliquotaTwo - 354.80;
}else if (salarioComDescontoInss <= 4664.68) {
  descontoIR = salarioComDescontoInss * aliquotaThree - 636.13;  
}else {
  descontoIR = salarioComDescontoInss * aliquotaFour - 868.36;  
}

console.log("Salário liquido: " + (salarioComDescontoInss - descontoIR));
















