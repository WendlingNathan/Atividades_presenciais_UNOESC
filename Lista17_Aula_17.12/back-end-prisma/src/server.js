const express = require('express');
const cors = require('cors');
const formData = require('express-form-data');

const app = express();
const porta = 8081;

// Configura o CORS
app.use(cors({ origin: '*' }));

// Configura o tratamento das requisições POST
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Faz o parsing no formato multipart
app.use(formData.parse());

// Carrega o módulo rotas.js e define que as rotas iniciarão
// com o endereço '/api/usuarios'
app.use('/api/usuarios', require('./rotas'));

// Responde a requisição no endereço http://localhost:8081/
app.use('/', (request, response) => {
    response.status(200).send('Página home!');
});

// Instancia o servidor
app.listen(porta,
    () => console.log(`Servidor iniciado na porta: ${porta}`)
);