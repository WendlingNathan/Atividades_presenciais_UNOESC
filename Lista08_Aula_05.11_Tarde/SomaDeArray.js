let array = [1,2,3,4,5,6,7,8,9];

function somarArray(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}

let soma = somarArray(array);

console.log(soma);