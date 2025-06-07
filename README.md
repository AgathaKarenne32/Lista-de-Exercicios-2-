---
# Lista-de-Exercicios-2-
  Lista de tarefas 2 codifica +prati

Este repositório contém uma coleção de exercícios resolvidos em JavaScript, abrangendo diversos conceitos fundamentais e padrões de programação. Cada exercício é uma função independente que demonstra uma solução específica para um problema comum, acompanhada de exemplos de uso.

---

## Exercícios

### 1. Validação de Datas

**Função:** `ehDataValida(dia, mes, ano)`

Verifica se um conjunto de dia, mês e ano forma uma data real, considerando o número de dias em cada mês e anos bissextos.

**Como usar:**
```javascript
console.log(ehDataValida(29, 2, 2020)); // true (ano bissexto)
console.log(ehDataValida(31, 4, 2021)); // false (abril tem 30 dias)
```

---

### 2. Jogo de Adivinhação

**Função:** `jogoDeAdivinhacao()`

Um jogo interativo onde o usuário tenta adivinhar um número aleatório entre 1 e 100. Fornece dicas ("mais alto", "mais baixo") e conta as tentativas.

**Como usar:**
```javascript
jogoDeAdivinhacao(); // Inicia o jogo no console/navegador
```
*Este jogo utiliza `prompt` para interação, sendo ideal para ambientes de navegador.*

---

### 3. Palavras Únicas

**Função:** `palavrasUnicas(frase)`

Extrai e retorna todas as palavras únicas de uma dada string em um novo array.

**Como usar:**
```javascript
console.log(palavrasUnicas("olá olá mundo mundo")); // Saída: ["olá", "mundo"]
console.log(palavrasUnicas("programação é divertida")); // Saída: ["programação", "é", "divertida"]
```

---

### 4. Fatorial Recursivo

**Função:** `fatorial(n)`

Calcula o fatorial de um número `n` de forma recursiva. Lança um `Error` se `n` for negativo e retorna 1 se `n` for 0.

**Como usar:**
```javascript
try {
    console.log(fatorial(5)); // Saída: 120
    console.log(fatorial(0)); // Saída: 1
    console.log(fatorial(-1)); // Lança um erro
} catch (error) {
    console.error(error.message); // Saída: O número deve ser maior ou igual a zero.
}
```

---

### 5. Debounce

**Função:** `debounce(fn, delay)`

Recebe uma função `fn` e um `delay` (em milissegundos), retornando uma nova função que só executa `fn` se não for chamada novamente dentro do intervalo especificado. Útil para otimizar chamadas de funções frequentes (ex: ao digitar em um campo de busca).

**Como usar:**
```javascript
function minhaFuncao() {
    console.log("Função executada!");
}
const debouncedFunc = debounce(minhaFuncao, 2000);

debouncedFunc(); 
// Se chamada novamente dentro de 2 segundos, a execução anterior é cancelada.
// "Função executada!" só aparece 2 segundos após a *última* chamada a debouncedFunc.
```

---

### 6. Memoization

**Função:** `memoize(fn)`

Recebe uma função `fn` e retorna uma versão "memoizada" dela. A função memoizada armazena em cache os resultados de chamadas anteriores, retornando-os instantaneamente para invocações com os mesmos argumentos.

**Como usar:**
```javascript
const fatorialMemoizado = memoize(fatorial); // Usando a função fatorial do Exercício 4

console.log(fatorialMemoizado(5)); // Calcula e armazena: 120
console.log(fatorialMemoizado(5)); // Retorna do cache: 120 (não recalcula)
```

---

### 7. Mapeamento e Ordenação

**Função:** `mapearEOrdenarPorPreco(produtos)`

Dado um array de objetos `produtos = [{ nome, preco }, ...]`, retorna um novo array contendo apenas os nomes dos produtos, ordenados por preço crescente. Utiliza os métodos `map` e `sort`.

**Como usar:**
```javascript
const produtos = [
    { nome: "Produto A", preco: 30 },
    { nome: "Produto B", preco: 20 },
    { nome: "Produto C", preco: 50 }
];
console.log(mapearEOrdenarPorPreco(produtos)); // Saída: ["Produto B", "Produto A", "Produto C"]
```

---

### 8. Agrupamento por Propriedade

**Função:** `agruparPorCliente(vendas)`

Dado um array `vendas = [{ cliente, total }, ...]`, utiliza o método `reduce` para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus totais de vendas.

**Como usar:**
```javascript
const vendas = [
    { cliente: "João", total: 100 },
    { cliente: "Maria", total: 200 },
    { cliente: "João", total: 150 }
];
console.log(agruparPorCliente(vendas)); // Saída: { João: 250, Maria: 200 }
```

---

### 9. Conversão Entre Formatos

**Funções:**
* `paresParaObjeto(pares)`: Recebe um array de pares `[ [chave, valor], ... ]` e retorna o objeto equivalente.
* `objetoParaPares(obj)`: Recebe um objeto e retorna um array de pares `[ [chave, valor], ... ]`.

**Como usar:**
```javascript
const pares = [["nome", "João"], ["idade", 30]];
const objeto = paresParaObjeto(pares);
console.log(objeto); // Saída: { nome: "João", idade: 30 }

const paresConvertidos = objetoParaPares(objeto);
console.log(paresConvertidos); // Saída: [ ["nome", "João"], ["idade", 30] ]
```
