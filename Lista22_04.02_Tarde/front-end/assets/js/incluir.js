let idForm, nomeForm, depenForm, slrForm;
const sURL = 'http://localhost:8081/api/funcionarios/';

window.onload = function (e) {
    idForm = document.querySelector('#iID');
    nomeForm = document.querySelector('#iNome');
    depenForm = document.querySelector('#iNumDependentes');
    slrForm = document.querySelector('#iSalario');
};

async function incluirFuncionario() {
    const id = idForm.value;
    const nome = nomeForm.value; 
    const numDependentes = depenForm.value;
    const salario = slrForm.value;

    axios.post(sURL, { id, nome, numDependentes, salario })
        .then(res => {
            res.data.toString = function() {
                return 'ID: ' + this.id + '\nNome: ' + this.nome +
                    '\nN° dependentes: ' + this.numDependentes + '\nSalário: ' + this.salario;
                }

            alert(res.data.toString());
            console.log(res.data);
            setTimeout(() => window.location.href = '/', 100);
        })
        .catch(res => console.log(res.response.data));
}