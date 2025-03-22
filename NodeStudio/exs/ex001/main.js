// Calcular media
let nota1 = parseFloat
let nota2 = parseFloat
let nota3 = parseFloat
let resultado = parseFloat

nota1 = 5.50
nota2 = 7.60
nota3 = 8.90
resultado = (nota1 + nota2 + nota3) / 3

if (resultado >= 6) {
    console.log('Você foi aprovado com a nota', resultado)
} else if (resultado >= 5) {
    console.log('Você ficou de recuperação com a nota', resultado)
} else {
    console.log('Reprovado com a nota', resultado)
}