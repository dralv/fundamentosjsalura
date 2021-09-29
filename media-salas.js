const salaJs = [7,8,8,7,10,6.5,4,10,7];

const salaJAVA = [6,5,8,9,5,6];

const salaPyton = [7,3.5,8,9.5]



function mediaSala(notaDaSala){

    const somaDasNotas = notaDaSala.reduce((acum,atual) => atual+acum, 0)
    return somaDasNotas / notaDaSala.length
}

console.log(`A média da sala de JS foi ${mediaSala(salaJs)}`);

console.log(`A média da sala de Java foi ${mediaSala(salaJAVA)}`);

console.log(`A média da sala de Pyton foi ${mediaSala(salaPyton)}`);