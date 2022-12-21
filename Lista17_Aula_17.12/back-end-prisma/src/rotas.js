const controlador = require('./controllers/controladorUsuario');

const roteador = require('express').Router();

roteador.get('/', controlador.listarUsuarios);
roteador.post('/', controlador.criarUsuario);
roteador.get('/:id', controlador.buscarUsuarioPorID);
roteador.put('/:id', controlador.alterarUsuario);
roteador.delete('/:id', controlador.excluirUsuario);

module.exports = roteador;