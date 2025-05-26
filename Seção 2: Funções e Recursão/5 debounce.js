/** 5. Debounce
Crie function debounce(fn, delay) que receba uma função fn e um delay
em ms, retornando uma nova função que só executa fn se não for
chamada novamente dentro do intervalo.*/
function debounce(fn, delay) {
    let timeoutId;

    return function(...args) {
        // Limpa o timeout anterior se a função for chamada novamente
        clearTimeout(timeoutId);

        // Define um novo timeout para chamar a função após o delay
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}
// Exemplo de uso
function minhaFuncao() {
    console.log("Função executada!");
}
const debouncedFunc = debounce(minhaFuncao, 2000);
// Chama a função debouncedFunc várias vezes
debouncedFunc(); // Não executa imediatamente