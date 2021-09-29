const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro'];

const notas = [7, 4.5, 8, 7.5];

const reprovados = nomes.filter((nome,indice) => notas[indice]<5) // retorna um boolean, caso verdadeiro o elemento é adicionado em um novo array

console.log(`Reprovados: ${reprovados}`)

// let situacao;

// for(let i = 0; i < nomes.length ; i++){

//     if(notas[i]< 7){
//         situacao = 'não passou.'
//     } else{
//         situacao = 'passou.'
//     }

//     console.log(`${nomes[i]}, você ${situacao}`)
// }

