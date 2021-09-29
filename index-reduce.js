const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acum, atual) => atual + acum, 0) // o zero é o valor inicial do acumulado, o atual é o elemento no array

console.log(soma) //170