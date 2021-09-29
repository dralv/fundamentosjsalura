const notas = [10, 9, 8, 7, 6];

// for(let i = 0; i < notas.length; i++){

//     if(notas[i]<10){
//         notas[i]++
//     }
// }

const notasNovas = notas.forEach(addPonto)

function addPonto(notas){
    if(notas<10){
        notas++;
    }
    
    
}

console.log(notasNovas);

// const notasAtualizadas = notas.map( nota => nota < 10 ? ++nota : nota)

// console.log(notasAtualizadas);

