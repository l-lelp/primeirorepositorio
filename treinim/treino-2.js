/* função para entrar num jogar de Poker sem olhar nenhuma resolução
*/

const anoNascimento = 2001
const data = new Date()
const dataAtual = data.getFullYear()
const idade = dataAtual - anoNascimento
const nome = "Matheus"
const hobby = "Jogar bola"

if (idade >= 18) {
    console.log("O que que há velhinho?")
} else {
    console.log("Andam dizendo que tuê eh o...????")
}

// Ok, agora vamos usar operadores lógicos //

if (idade >= 18 && nome == "Matheus") {
    console.log("Certamente você se chama João")
} else {
    console.log("Talvez seja hora de parar")
}

// Ou //

if (idade <= 0 || hobby == "Jogar bola") {
    console.log("Você está certo")
} else {
    console.log("Você está errado")
}