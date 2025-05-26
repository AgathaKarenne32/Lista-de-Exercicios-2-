/*3. Palavras Únicas
Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
todas as palavras únicas e exibi-las em um array.*/
function palavrasUnicas(frase) {
    const palavras = frase.split(" ");
    const palavrasUnicas = [];
    
    for (let i = 0; i < palavras.length; i++) {
        const palavra = palavras[i];
        if (!palavrasUnicas.includes(palavra)) {
            palavrasUnicas.push(palavra);
        }
    }
    
    return palavrasUnicas;
}
// Exemplo de uso 
const frase = "olá mundo";
const resultado = palavrasUnicas(frase);
console.log(resultado); // Saída: ["olá", "mundo"]
// Exemplo de uso
const frase2 = "programação é divertida";
const resultado2 = palavrasUnicas(frase2);
console.log(resultado2); // Saída: ["programação", "é", "divertida"]
