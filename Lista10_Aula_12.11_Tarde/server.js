const express = require('express');
const cors = require('cors');

const app = express();
const porta = 8080;

app.use(cors({origin: '*'}));

app.listen(porta, () => console.log(`Servidor iniciado na porta: ${porta}`));

function sleep(ms) {
    return new Promise(
        (resolve) => setTimeout(resolve, ms)
    );
}

app.get('/processa-requisicao', function(req, res) {
    sleep(3000).then(() => {
        res.status(200).send('<h2>Olá mundo!</h2>')
    });
});

app.get('/devolve-json/:estado', function(req, res) {
    const estado = req.params.est;
    console.log('Chegou aqui!' + estado);
    const cidadeSC = [{ cidade: 'São Miguel do Oeste', estado: 'SC'}, {cidade: 'Maravilha', estado: 'SC'}];
    const cidadeRS = [{ cidade: 'Passo Fundo', estado: 'RS'}, {cidade: 'Porto Alegre', estado: 'RS'}];
    const cidadePR = [{ cidade: 'Curitiba', estado: 'PR'}, {cidade: 'São José dos Pinhais', estado: 'PR'}];

    let cidades;

    if (estado == 'SC') {
        cidades = cidadeSC;
    } else if (estado == 'RS') {
        cidades == cidadeRS;
    } else if (estado == 'PR') {
        cidades = cidadePR;
    }

    res.setHeader('Content-Type', 'application/json');
    res.status(201).send(JSON.stringify(cidades));
});