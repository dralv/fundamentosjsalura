const nomes = [' João', ' Juliana', ' Ana', ' Mateus', ' Carlos', ' Andre', ' Pedro', ' Manuel'];

console.log("A turma tem " + nomes.length + " alunos");

const sala1 = nomes.slice(0,nomes.length/2); // (inicio, final)

const sala2 = nomes.slice(nomes.length/2);

console.log(`Os alunos da sala 1 são: ${sala1}`);

console.log(`Os alunos da sala 2 são: ${sala2}`);