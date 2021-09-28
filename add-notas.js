const notas = [10, 6, 8 ];

notas.push(10);

console.log(notas);

let soma = 0;

for(var i = 0 ; i<notas.length; i++){

    soma = soma + notas[i];
}

let media = soma/notas.length;

console.log(media);