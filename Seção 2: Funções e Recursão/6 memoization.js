/*6. Memoization
Implemente function memoize(fn) que armazene em cache chamadas
anteriores de fn (por argumentos), retornando resultados instantâneos em
repetidas invocações.*/
function memoize(fn) {
    const cache = new Map();

    return function(...args) {
        // Cria uma chave única para os argumentos
        const key = JSON.stringify(args);

        // Verifica se o resultado já está no cache
        if (cache.has(key)) {
            return cache.get(key);
        }

        // Chama a função original e armazena o resultado no cache
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}
// Exemplo de uso
function fatorial(n) {
    if (n < 0) {
        throw new Error("O número deve ser maior ou igual a zero.");
    }
    if (n === 0) {
        return 1;
    }
    return n * fatorial(n - 1);
}
// Cria uma versão memoizada da função fatorial
const fatorialMemoizado = memoize(fatorial);
// Exemplo de uso com a função memoizada
try {
    console.log(fatorialMemoizado(5)); // Saída: 120
    console.log(fatorialMemoizado(0)); // Saída: 1
    console.log(fatorialMemoizado(-1)); // Lança um erro
    console.log(fatorialMemoizado(5)); // Retorna o resultado do cache: 120
}
catch (error) {
    console.error(error.message); // Saída: O número deve ser maior ou igual a zero.
}