let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo";

let tamanoCita = cita.length;

console.log(`El tamaño de la cita es ${tamanoCita}`);

let indice = cita.indexOf(substring);

console.log(`El indice del substring es ${indice}`);

let longitudSubstring = substring.length;

let longitudCitaSinSubstring = indice;

let citaRevisada = cita.slice(0, longitudCitaSinSubstring + longitudSubstring);
console.log(citaRevisada);
