const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Lápis", "preco": 2.5 }',
    '{ "nome": "Caneta", "preco": 7.5 }',
];

const precos = carrinho.map(item => JSON.parse(item).preco);
console.log(precos);