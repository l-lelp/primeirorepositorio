/* Site de Poker.

nome: JoÃ£o
ano: 2001

*/

function obterAnoAtual() {
    const dataAtual = new Date ();
    const anoAtual = dataAtual.getFullYear();
    return anoAtual;
      }


const nome = "Joao";
const anoNascimento = 2001;
const anoAtual = obterAnoAtual();
const idade = anoAtual - anoNascimento;


if (idade >= 18) {
    console.log("Pode jogar");
}
else {
    console.log("Acesso proibido!")
}