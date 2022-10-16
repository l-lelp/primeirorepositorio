// Adivinhe o número

const numeroEscolhido = 4;
const numeroSorteado = Math.floor(Math.random()*6) + 1;

if (numeroEscolhido == numeroSorteado) {
    console.log("Você ganhou!!!");
} else {
    console.log("Você é um fracasso! :( :( :(");
}