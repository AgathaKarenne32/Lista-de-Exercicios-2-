/*4. Fatorial Recursivo
Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
um Error, e n === 0 retornando 1.*/
function fatorial(n) {
    if (n < 0) {
        throw new Error("O número deve ser maior ou igual a zero.");
    }
    if (n === 0) {
        return 1;
    }
    return n * fatorial(n - 1);
}
// Exemplo de uso
try {
    console.log(fatorial(5)); // Saída: 120
    console.log(fatorial(0)); // Saída: 1
    console.log(fatorial(-1)); // Lança um erro
}
catch (error) {
    console.error(error.message); // Saída: O número deve ser maior ou igual a zero.
}
// Exemplo de uso com tratamento de erro
try {
    console.log(fatorial(3)); // Saída: 6
}
catch (error) {
    console.error("Erro ao calcular fatorial:", error.message);
}