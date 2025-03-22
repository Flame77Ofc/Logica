// Meu primeiro programa com o SoulCode!
// Variáveis: Guardam dados no computador para utilizar mais tarde
// Os tipos de variáveis
let nome = String;              nome = "Gabriel";
let pontos = Number;            pontos = 650;
let idade = parseInt;           idade = 14;
let altura = parseFloat;        altura = 1.50;
let luzAcessa = Boolean;        luzAcessa = true;
let janelaAberta = Boolean;     janelaAberta = false;


// Mostrando mensagens para o usuário
console.log('Aprendendo Lógica de programação')
console.log('Para aprender também, veja o site do SoulCode!')


// Unindo mensagens com variáveis
console.log('Meu nome é', nome)
console.log('Minha idade é ' + idade)
console.log(`Minha altura é ${altura}`)


// Constantes
/* São variáveis que não podem ser modificadas. Um exemplo é: 
Nome de pessoa, pois nunca muda
O número de PI, continua no mesmo valor */
const nome2 = "João"
const numPI = 3.14
console.log(nome2, numPI)