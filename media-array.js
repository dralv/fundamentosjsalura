// let nota1 = 10;

// let nota2 = 6.5;

// let nota3 = 8;

// let nota4 = 7.5;

// let media = (nota1+nota2+nota3+nota4)/4;

// console.log(media);

const notas =[10, 8, 6, 7];

let soma = 0;

for(var i = 0 ; i<notas.length; i++){

    soma = soma + notas[i];
}

let media = soma/notas.length;

console.log(media);