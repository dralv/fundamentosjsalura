const notas = [10, 7, 8, 5, 10];
notas.pop();
console.log(notas);

let soma = 0;

for(var i = 0 ; i<notas.length; i++){

    soma = soma + notas[i];
}

let media = soma/notas.length;

console.log(`A média é ${media}`);