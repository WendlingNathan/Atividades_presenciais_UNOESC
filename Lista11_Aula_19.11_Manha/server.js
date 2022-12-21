const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const porta = 8080;

app.listen(porta, 
    () => console.log(`Servidor iniciado na porta ${porta}`)
);

function sleep(ms) {
    return new Promise(
        (resolve) => setTimeout(resolve, ms)
    );
}

app.get('/processa-formulario-1', function(req, res) {
    const email = 'nathan@gmail.com';
    const senha = 123456;

    let nome2, senha2;

    nome2 = req.query['fEmail'];
    senha2 = req.query['fSenha'];

    sleep(3000).then(() => {
        processaRequisicao(res, nome2, senha2, email, senha);
    });

    function processaRequisicao(res, nome2, senha2, email, senha) {
        let msg = '';
        let mensagem ='';
        
        if (nome2 == email && senha2 == senha) {
            msg = 'Login efetuado com sucesso!';
            let achou = true;

            criarTeladeResposta(res, msg, achou);
    
        } else if (nome2 == email && senha2 != senha) {
            msg = 'Senha incorreta!';
            let achou = false;

            criarTeladeResposta(res, msg, achou);
    
        } else if (nome2 != email) {
            msg = 'Usuário incorreto!';
            let achou = false;

            criarTeladeResposta(res, msg, achou);
        }
    }
});

app.get('/processa-formulario-2', function(req, res) {
    const emails = [
        'nathan1@gmail.com',
        'nathan2@gmail.com',
        'nathan3@gmail.com'
    ];
    
    const senhas = [
        123,
        123456,
        654321
    ];

    let emailForm = req.query['fEmail'];
    let senhaForm = parseFloat(req.query['fSenha']);

    sleep(2000).then(() => {
        processaRequisicao(res, emails, senhas, emailForm, senhaForm);
    });

    function processaRequisicao(res, emails, senhas, emailForm, senhaForm) {
        let msg = '';
        let mensagem = '';
        let achou = false;

        for (let i = 0; i < emails.length; i++) {
            if (emailForm === emails[i]) {
                if (senhaForm === senhas[i]){
                    msg = 'Login efetuado com sucesso!';
                    achou = true;
                    
                    criarTeladeResposta(res, msg, achou);
                    break;
                } else {
                    msg = 'Login não efetuado!';
                    criarTeladeResposta(res, msg, achou);
                    break;
                }
            }
        }
        msg = 'Usuário inválido!';
        criarTeladeResposta(res, msg, achou);
    }
});

app.get('/processa-formulario-3', function(req, res) {
    const dados = {
        usuarios: [
            {nome: 'Nathan@a', senha: 123},
            {nome: 'Cauã@a', senha: 123456},
            {nome: 'Alguem@a', senha: 1010}
        ]
    };

    let emailForm = req.query['fEmail'];
    let senhaForm = parseFloat(req.query['fSenha']);

    sleep(2000).then(() => {
        processaRequisicao(res, dados, emailForm, senhaForm);
    });

    function processaRequisicao(res, dados, emailForm, senhaForm) {
        let msg = '';
        let mensagem = '';
        let achou = false;

        for (let i = 0; i < dados.usuarios.length; i++) {
            if (emailForm === dados.usuarios[i].nome) {
                if (senhaForm === dados.usuarios[i].senha){
                    msg = 'Login efetuado com sucesso!';
                    achou = true;
                    
                    criarTeladeResposta(res, msg, achou);
                    break;
                } else {
                    msg = 'Login não efetuado!';
                    criarTeladeResposta(res, msg, achou);
                    break;
                }
            }
        }
        msg = 'Usuário inválido!';
        criarTeladeResposta(res, msg, achou);
    }
});

app.get('/processa-formulario-4', function(req, res) {
    class Usuario {
        constructor(email, senha) {
            this.email = email;
            this.senha = senha;
        }

        autentica(email, senha) {
            if (email === this.email && senha === this.senha) {
                return true;
            } else {
                return false;
            }
        }
    }

    const u1 = new Usuario('email1@gmail.com', 123);
    const u2 = new Usuario('email2@gmail.com', 321);
    const u3 = new Usuario('email3@gmail.com', 123456);

    const listaUsuarios = [u1, u2, u3];

    let emailForm = req.query['fEmail'];
    let senhaForm = parseFloat(req.query['fSenha']);

    let msg = '';
    let mensagem = '';
    let achou = false;
    let resposta = '';

    for (let i = 0; i < listaUsuarios.length; i++) {
        let resposta = listaUsuarios[i].autentica(emailForm, senhaForm);
    }
        if (resposta === true) {
            msg = 'Login efetuado com sucesso!';
            achou = true;
            criarTeladeResposta(res, msg, achou);
            break;
        } else {
            msg = 'Login não efetuado!';
            criarTeladeResposta(res, msg, achou);
            break;
        }
});

function criarTeladeResposta(res, msg, achou) {
    if (achou == true) {
        mensagem = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
            <div class="alert alert-primary mt-3">
                <h3>${msg}</h3>
            </div>
        `;

        HTML = `
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
            <div class="container" style="margin-top: 0.5rem>
                ${mensagem}
                <button type="button" onclick="window.history.back()" class="btn btn-outline-danger">
                    Voltar
                </button>
            </div>
        `;
    } else {
        mensagem = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
            <div class="alert alert-danger mt-3">
                <h3>${msg}</h3>
            </div>
        `;

        HTML = `
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
            <div class="container" style="margin-top: 0.5rem>
                ${mensagem}
                <button type="button" onclick="window.history.back()" class="btn btn-outline-danger">
                    Voltar
                </button>
            </div>
        `;
    }

    res.send(HTML);
}