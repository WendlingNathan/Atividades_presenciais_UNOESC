const aleatorio = () => {
    return Promise.resolve(Math.trunc(Math.random() * 10));
}

const somaAleatoria = async () => {
    const primeiro = await aleatorio();
    const segundo = await aleatorio();
    const terceiro = await aleatorio();

    const soma = primeiro + segundo + terceiro;
    console.log(`${primeiro}+${segundo}+${terceiro}=${soma}`);
};

somaAleatoria();