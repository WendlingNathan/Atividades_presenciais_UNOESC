const numeros = [5, 3, 2, 7];

const produto = numeros.reduce(function(acumulador, valorAtual) {
    console.log(acumulador, valorAtual);
    return acumulador * valorAtual;
}, 1);

console.log(produto);