const aleatorio = () => {
    return Promise.resolve(Math.trunc(Math.random() * 10));
}

const somaAleatoria = () => {
    let primeiro, segundo, terceiro;

    return aleatorio()
        .then(v => {
            primeiro = v;
            return aleatorio();
        })
        .then(v => {
            segundo = v;
            return aleatorio();
        })
        .then(v => {
            terceiro = v;
            return primeiro + segundo + terceiro;
        })
        .then(soma => {
            console.log(`${primeiro}+${segundo}+${terceiro}=${soma}`);
        })
};

somaAleatoria();