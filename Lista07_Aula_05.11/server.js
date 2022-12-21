const express = require('express');

const app = express();
const porta = 8080;

// Instancia o servidor
app.listen(porta, 
    () => console.log(`Servidor iniciado na porta: ${porta}`)
);

// Responde a requisição no endereço http://localhost:8080/
app.get('/', (request, response) => {
    response.status(200).send('<h2>Exemplo de servidor node.js</h2>');
});

function sleep(ms) { 
    return new Promise(
        (resolve) => setTimeout(resolve, ms)
    ); 
}

// Tratamento da requisição GET
app.get('/processa-nome', function(req, res) {
    let nome;

    nome = req.query['fNome'];

    // Faz uma pausa intencional
    sleep(1000).then(() => {
        processaRequisicao(res, nome); 
    });
});

// Tratamento da requisição POST
// Exemplo com arrow function em vez de function convencional
app.post('/processa-nome', (req, res) => {
    let nome;

    nome = req.body.fNome;

    processaRequisicao(res, nome);
});

function processaRequisicao(res, nome) {
    let msgAlert = 'O seu nome ao contrário é: ';
    let resultado;

    if (isNaN(nome)) {
        let array = nome.split('');
        array = array.reverse();
        array = array.join('');
        resultado = array;
    } else {
        resultado = parseInt(nome);
        let array = nome.split('');
        array = array.reverse();
        array = array.join('');
    }

    msgAlert += resultado;
    let mensagem = `<h3><div class="alert alert-primary">${msgAlert}</div></h3>`;

    HTML = `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" 
            rel="stylesheet">
        <link rel="stylesheet" 
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" 
            crossorigin="anonymous">

        <div class="container" style="margin-top: 0.5rem">
            ${mensagem}

            <button type="button" onclick="window.history.back()" class="btn btn-outline-danger">
                <i class="fas fa-door-open"></i>
                Voltar
            </button>
            &nbsp
            <button type="button" onclick="alert('${msgAlert}');" class="btn btn-primary">
                <i class="fab fa-js-square"></i></i>
                JavaScript em um Pop-up
            </button>
        </div>
    `;

    res.send(HTML);
}