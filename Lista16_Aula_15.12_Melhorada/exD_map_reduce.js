const alunos = [
    { nome: 'Fulana', nota: 7.3, bolsista: false },
    { nome: 'Beltrana', nota: 9.2, bolsista: true },
    { nome: 'Sicrana', nota: 9.8, bolsista: false },
    { nome: 'Maria das Dores', nota: 8.7, bolsista: true },
];

// console.log(alunos.map(aluno => aluno.nota));
const resultado = alunos.map(aluno => aluno.nota)
                        .reduce((acumulador, atual) => {
                            // console.log(acumulador, atual);
                            return acumulador + atual;
                        }, 0);
// console.log(resultado);
//------------
const todosBolsistas = alunos.map(aluno => aluno.bolsista)
                             .reduce((acumulador, atual) => acumulador && atual);
console.log(todosBolsistas);
//------------
const algumBolsista = alunos.map(aluno => aluno.bolsista)
                             .reduce((acumulador, atual) => acumulador || atual);
console.log(algumBolsista);