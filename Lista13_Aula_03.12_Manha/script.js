const UL = document.getElementById('usuarios');
const URL = 'https://jsonplaceholder.typicode.com/users';

fetch(URL)
    .then( (resposta) => resposta.json() )
    .then( function (dados) {
        console.log(dados);

        return dados.map(function (usuario) {
            let li = document.createElement('li');
            li.innerHTML = `${usuario.name} (${usuario.username})`;
            UL.appendChild(li);
        })
    })
    .catch( (erro) => {
        console.log('Erro!' + erro);
    })