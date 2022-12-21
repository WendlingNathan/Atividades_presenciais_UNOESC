let array = [1,2,3,4,5,6,7,8,9];

function mediaArray(array) {
    let soma = 0;
    let media = 0;

    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }

    media = soma / array.length;

    return media;
}

let media = mediaArray(array);

console.log(media);