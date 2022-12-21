const produtos1 = [
    {nome: 'Notebook Samsumg', preco: 4999.99, vendido: true, tipo: 'notebook'},
    {nome: 'Notebook Sony', preco: 5999.99, vendido: false, tipo: 'notebook'},
    {nome: 'iPad', preco: 6999.99, vendido: false, tipo: 'tablet'},
    {nome: 'iPhone', preco: 7999.99, vendido: true, tipo: 'smartphone'},
    {nome: 'Copo de plástico', preco: 1.99, vendido: false, tipo: 'copo'},
    {nome: 'Copo de vidro', preco: 10.99, vendido: true, tipo: 'copo'},
];

const filtro = produtos1.filter(produto => produto.preco > 5000).map(produto => `Nome: ${produto.nome}`)
// console.log(' == Caso 1 ==');
// console.table(filtro);

// -----------------------------------------------------------------------

const produtos2 = [
    {nome: 'Notebook Samsumg', preco: 4999.99, vendido: true, tipo: 'notebook'},
    {nome: 'Notebook Sony', preco: 5999.99, vendido: false, tipo: 'notebook'},
    {nome: 'iPad', preco: 6999.99, vendido: false, tipo: 'tablet'},
    {nome: 'iPhone', preco: 7999.99, vendido: true, tipo: 'smartphone'},
    {nome: 'Copo de plástico', preco: 1.99, vendido: false, tipo: 'copo'},
    {nome: 'Copo de vidro', preco: 10.99, vendido: true, tipo: 'copo'},
];

const Filter = produto => produto.preco > 5000;
const Map = produto => `Nome: ${produto.nome}`;

const resultado = produtos2.filter(Filter).map(Map);
// console.log(' == Caso 2 ==');
// console.table(filtro);

// ------------------------------------------------------------------------

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Lápis", "preco": 2.5 }',
    '{ "nome": "Caneta", "preco": 7.5 }',
];
const resul = carrinho.map(produto => JSON.parse(produto));
// console.log(resul);

const arrayPrecos = resul.map(produto => `Preço: ${produto.preco}`);
// console.log(arrayPrecos);

// ------------------------------------------------------------------------

const valores = [3, 2, 6, 8, 3];

const final = valores.reduce( (numero, acumulador) => {
    return acumulador * numero;
}, 1);

// console.log(final);

// -------------------------------------------------------------------------

const alunos = [
    { nome: 'Fulana', nota: 7.3, bolsista: true },
    { nome: 'Beltrana', nota: 9.2, bolsista: true },
    { nome: 'Sicrana', nota: 9.8, bolsista: false },
    { nome: 'Maria das Dores', nota: 8.7, bolsista: true },
];

const somaNotas = alunos.map(aluno => aluno.nota).reduce( (nota, soma) => {
    return soma + nota
}, 0);

const allBolsistas = alunos.map(aluno => aluno.bolsista).reduce( (retornos, resposta) => {
    return resposta === true ? true : false;
});

console.log(somaNotas);
console.log(allBolsistas);