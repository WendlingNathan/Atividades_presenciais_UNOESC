let nomeForm, emailForm;
const URL = 'http://localhost:8081/api/usuarios/';

window.onload = function (e) {
    nomeForm = document.querySelector('#iNome');
    emailForm = document.querySelector('#iEmail');
};

async function incluirUsuario() {
    const nome = nomeForm.value;
    const email = emailForm.value;

    axios.post(URL, { nome, email })
        .then(res => {
            alert(res.data.mensagem);
            console.log(res.data.usuario);
            setTimeout(() => window.location.href = '/front-end', 100);
        })
        .catch(res => console.log(res.response.data));
}