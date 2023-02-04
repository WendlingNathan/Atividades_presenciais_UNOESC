let id, idForm, nomeForm, depenForm, slrForm;
const sURL = 'http://localhost:8081/api/funcionarios/';

window.onload = async function (e) {
    const query = window.location.search;
    const parametros = new URLSearchParams(query);
    id = parametros.get('id');

    idForm = document.querySelector('#iID');
    nomeForm = document.querySelector('#iNome');
    depenForm = document.querySelector('#iNumDependentes');
    slrForm = document.querySelector('#iSalario');

    const funcionario = await buscarFuncionario(id);
    preencherForm(funcionario);
};

function preencherForm(funcionario) {
    idForm.value = funcionario.id;
    nomeForm.value = funcionario.nome;
    depenForm.value = funcionario.numDependentes;
    slrForm.value = funcionario.salario;
}

async function buscarFuncionario(id) {
    const resposta = await axios.get(sURL + id);

    return resposta.data;
}

async function alterarFuncionario() {
    const id = idForm.value;
    const nome = nomeForm.value; 
    const numDependentes = depenForm.value;
    const salario = slrForm.value;

    axios.put(sURL, { id, nome, numDependentes, salario })
        .then(res => {
            alert(JSON.stringify(res.data));
            console.log(res.data);
            setTimeout(() => window.location.href = '/', 100);
        })
        .catch(res => console.log(res.response.data));
}