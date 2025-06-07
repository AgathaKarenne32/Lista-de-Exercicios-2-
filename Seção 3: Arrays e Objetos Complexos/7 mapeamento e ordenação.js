/**7. Mapeamento e Ordenação
Dado um array produtos = [{ nome, preco }, ...], crie uma função que
retorne um novo array apenas com os nomes, ordenados por preço
crescente, usando map, sort. */
function mapearEOrdenarPorPreco(produtos) {
    // Mapeia o array de produtos para um novo array contendo apenas os nomes
    const produtosOrdenados = [...produtos].sort((a, b) => a.preco - b.preco);
    
    // Ordena o array de produtos por preço crescente
    const nomesOrdenados = produtosOrdenados.map(produto => produto.nome);
    
    return nomesOrdenados;
    
}
// Exemplo de uso
const produtos = [
    { nome: "Produto A", preco: 30 },
    { nome: "Produto B", preco: 20 },
    { nome: "Produto C", preco: 50 }
];
const resultado = mapearEOrdenarPorPreco(produtos);
console.log(resultado); // Saída: ["Produto B", "Produto A", "Produto C"]
// Exemplo de uso com produtos com preços iguais
const produtos2 = [
    { nome: "Produto X", preco: 10 },
    { nome: "Produto Y", preco: 10 },
    { nome: "Produto Z", preco: 20 }
];
const resultado2 = mapearEOrdenarPorPreco(produtos2);
console.log(resultado2); // Saída: ["Produto X", "Produto Y", "Produto Z"]
// Exemplo de uso com produtos com preços decrescentes
const produtos3 = [
    { nome: "Produto D", preco: 40 },
    { nome: "Produto E", preco: 30 },
    { nome: "Produto F", preco: 20 }
];
const resultado3 = mapearEOrdenarPorPreco(produtos3);
console.log(resultado3); // Saída: ["Produto F", "Produto E", "Produto D"]
// Exemplo de uso com produtos com preços iguais e diferentes
const produtos4 = [
    { nome: "Produto G", preco: 15 },
    { nome: "Produto H", preco: 15 },
    { nome: "Produto I", preco: 25 }
];
const resultado4 = mapearEOrdenarPorPreco(produtos4);
console.log(resultado4); // Saída: ["Produto G", "Produto H", "Produto I"]
// Exemplo de uso com produtos com preços iguais e diferentes
const produtos5 = [
    { nome: "Produto J", preco: 5 },
    { nome: "Produto K", preco: 10 },
    { nome: "Produto L", preco: 5 }
];
const resultado5 = mapearEOrdenarPorPreco(produtos5);
console.log(resultado5); // Saída: ["Produto J", "Produto L", "Produto K"]
