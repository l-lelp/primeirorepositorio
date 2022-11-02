// Revisando

const anoNascimento = 2004
const anoAtual = new Date()
const ano = anoAtual.getFullYear()
const idade = ano - anoNascimento

if (idade >= 18) {
    console.log("Você está dentro!")
} else {
    console.log("Você está fora!")
}


