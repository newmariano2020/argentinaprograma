let numero1 = 1;
let numero2 = 1;
let numero3 = 44;
let numero4 = 22;

let resultadoSuma = numero1 + numero2;
let resultadoResta = numero3 - numero4;
let resultadoFinal = resultadoSuma * resultadoResta;
console.log(resultadoFinal);

function chequeoPar(numero){
    return numero % 2 === 0
}

let esPar = chequeoPar(resultadoFinal);

console.log(`Mis variables iniciales fueron: ${numero1}, ${numero2}, ${numero3}, ${numero4}. La respuesta a verificar si el resultado final es par es ${esPar}`);

