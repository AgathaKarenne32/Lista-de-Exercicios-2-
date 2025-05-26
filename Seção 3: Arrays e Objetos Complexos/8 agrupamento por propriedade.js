/**8. Agrupamento por Propriedade
Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
cada chave é um cliente e o valor é a soma de todos os seus total. */
function agruparPorCliente(vendas) {
    return vendas.reduce((acumulador, venda) => {
        const { cliente, total } = venda;
        // Se o cliente já existe no acumulador, soma o total
        if (acumulador[cliente]) {
            acumulador[cliente] += total;
        } else {
            // Caso contrário, inicializa com o total da venda
            acumulador[cliente] = total;
        }
        return acumulador;
    }, {});
}
// Exemplo de uso
const vendas = [
    { cliente: "João", total: 100 },
    { cliente: "Maria", total: 200 },
    { cliente: "João", total: 150 },
    { cliente: "Ana", total: 300 },
    { cliente: "Maria", total: 50 }
];
const resultado = agruparPorCliente(vendas);
console.log(resultado); // Saída: { João: 250, Maria: 250, Ana: 300 }
// Exemplo de uso com clientes sem vendas
const vendas2 = [
    { cliente: "Carlos", total: 400 },
    { cliente: "Ana", total: 100 },
    { cliente: "Carlos", total: 200 }
];
const resultado2 = agruparPorCliente(vendas2);
console.log(resultado2); // Saída: { Carlos: 600, Ana: 100 }
// Exemplo de uso com clientes com vendas iguais
const vendas3 = [
    { cliente: "Pedro", total: 50 },
    { cliente: "Pedro", total: 50 },
    { cliente: "Maria", total: 100 }
];
const resultado3 = agruparPorCliente(vendas3);
console.log(resultado3); // Saída: { Pedro: 100, Maria: 100 }
// Exemplo de uso com clientes com vendas diferentes
const vendas4 = [
    { cliente: "Lucas", total: 300 },
    { cliente: "Lucas", total: 200 },
    { cliente: "Julia", total: 150 }
];
const resultado4 = agruparPorCliente(vendas4);
console.log(resultado4); // Saída: { Lucas: 500, Julia: 150 }