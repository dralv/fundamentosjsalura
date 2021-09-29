const notas = [10, 6.5, 8, 7.5];

let somaNotas = 0;


notas.forEach(notas => { // para cada elemento, executar uma função 

    somaNotas += notas;

})

let media = somaNotas/notas.length;

console.log(media);