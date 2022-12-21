function multiplicar(x = 1, y = 1) {
    let resultado = x * y;
    return resultado;
}

console.log('Com os dois parâmetros: ' + multiplicar(2, 3));

console.log('Sem parâmetros: ' + multiplicar());

console.log('Com apenas o primeiro parâmetro: ' + multiplicar(2));

console.log('Com apenas o segundo parâmetro: ' + multiplicar(undefined, 3));