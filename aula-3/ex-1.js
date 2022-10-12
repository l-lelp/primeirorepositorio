/* Objetivo: Criar uma Função sem parâmetro e sem retorno
Função que horas são?
Vamos criar uma função que quando chamada ela mostra no console a seguinte mensagem: Olá, agora são 10:20:43 PM*/

//1º Quais variáveis vou precisar declarar?

//2º Que comandos vou escrever pra "PROCESSAR"as informações e dar um resultado final?

//3º Resultado final: console.log(), retorno de uma função

let horaAtual = new Date ();
horaAtual = horaAtual.toLocaleTimeString()
console.log("Ola, agora sao " + horaAtual)
