function converteTemperatura(temp, opcao) {
    opcao = opcao.toUpperCase();
    let resultado;

    switch (opcao) {
        case 'F':
            resultado = ((temp - 32) / 9) * 5;
            return resultado;
            break;
        case 'K':
            resultado = ((temp - 273) / 5) * 5;
            return resultado;
            break;
        default:
            resultado = 'Algo de errado aconteceu!';
            break;
    }
}

//A variável 'opcao' indíca qual é a temperatura que queremos na conversão
let temp = converteTemperatura(100, 'f');

console.log(temp);