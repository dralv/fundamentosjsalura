const alunos = ['João', 'Juliana', 'Caio', 'Ana'];

const mediaAlunos = [10,7,9,6];



let listaDeNotasAlunos = [alunos, mediaAlunos]

const exibeNomeNota = (nomeAluno) =>{
    if(listaDeNotasAlunos[0].includes(nomeAluno)){ // includes serve para encontrar um elemento em um array 
        indice = listaDeNotasAlunos[0].indexOf(nomeAluno);
        return listaDeNotasAlunos[0][indice] + " , sua nota é " + listaDeNotasAlunos[1][indice];
    } else{
        return "Aluno não encontrado"
    }
}

console.log(exibeNomeNota("Álvaro"));
