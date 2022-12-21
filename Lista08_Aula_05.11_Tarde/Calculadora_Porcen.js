
function calcularPorcentagem(valor, num) {
    let resultado;

    resultado = (valor/100) * num;

    return resultado;
}

let exemplo = calcularPorcentagem(25, 50);

console.log(exemplo);