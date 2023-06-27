let personas = [
  "Pepe",
  "Joaquín",
  "Damián",
  "Carlos",
  "David",
  "Jose",
  "Martín",
  "Sofia",
];
let admitidos = [];
let rechazados = [];

personas.forEach((element) => {
  if (element != "Jose" && element != "Sofia") {
    admitidos.push(element);
  } else {
    rechazados.push(element);
  }
});

admitidos.forEach((element) => {
  console.log(`La lista de admitidos es: ${element}`);
});

rechazados.forEach((element) => {
  console.log(`La lista de rechazados es: ${element}`);
});

admitidos.sort(function (a, b) {
  return a.localeCompare(b);
});
console.log(`La lista ordenada de admitidos es: ${admitidos}`);

rechazados.sort(function (a, b) {
  return a.localeCompare(b);
});
console.log(`La lista ordenada de rechazados es: ${rechazados}`);
