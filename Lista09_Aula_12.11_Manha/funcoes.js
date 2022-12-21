// a)

function parOuImpar(numero = 0) {
    if (numero % 2 == 0) {
        return `O número ${numero} é par!`;
    } else {
        return `O número ${numero} não é par, é ímpar!`
    }
}

// console.log(parOuImpar(3));

//------------------------------------------------------------
// b)

const parOuImpar2 = (numero = 0) => {
    if (numero % 2 == 0) {
        return `O número ${numero} é par!`;
    } else {
        return `O número ${numero} não é par, é ímpar!`
    }
}

// console.log(parOuImpar2(36));

// -----------------------------------------------------------
// c)

const parOuImpar3 = (numero = 0) => {
    let resultado = (numero % 2 == 0 ? 'O número é par!' : 'O número é ímpar!');
    console.log(`${numero} = ` + resultado);
}

parOuImpar3(22);