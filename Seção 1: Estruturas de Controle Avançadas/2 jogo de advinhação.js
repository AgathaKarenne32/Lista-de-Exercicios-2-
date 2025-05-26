/*2. Jogo de Adivinhação
Escreva um script que gere um número aleatório de 1 a 100 e peça ao
usuário, para adivinhar. Use while para repetir até acertar, contando
tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.*/
function jogoDeAdivinhacao() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let tentativa;
    let tentativas = 0;

    do {
        tentativa = parseInt(prompt("Adivinhe o número entre 1 e 100:"));
        tentativas++;

        if (tentativa < numeroAleatorio) {
            console.log("Mais alto!");
        } else if (tentativa > numeroAleatorio) {
            console.log("Mais baixo!");
        } else {
            console.log(`Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`);
        }
    } while (tentativa !== numeroAleatorio);
}
// Inicia o jogo
jogoDeAdivinhacao();
// Exemplo de uso
// Nota: O código acima usa `prompt` e `console.log`, que são comuns em ambientes de navegador.
// Em um ambiente Node.js, você pode usar o pacote `readline` para ler entradas do usuário.
// Exemplo de uso em Node.js
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Adivinhe o número entre 1 e 100: ", (input) => {
//     const tentativa = parseInt(input);
//     // Lógica de comparação e feedback aqui
//     rl.close();
// });
// Nota: O código acima é um exemplo básico de jogo de adivinhação.