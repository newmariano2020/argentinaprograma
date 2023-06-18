const readlineSync = require("readline-sync");

const VerificadorDeEdad = () => {
  const consulta = readlineSync.question(`Ingresa tu edad =`);
  if (consulta >= 18) {
    console.log("Eres mayor de edad");
  } else {
    console.log("eres menor de edad");
  }
};

VerificadorDeEdad();
