const readlineSync = require("readline-sync");

const VerificadorDeValor = () => {
  const consulta = readlineSync.question(`ingresa un número=`);
  if (consulta > 0) {
    console.log("el número es positivo");
  } else if (consulta == 0) {
    console.log("el número es cero");
  } else if (consulta < 0) {
    console.log("el número es negativo");
  }
  else {
    console.log('no has ingresado un numero')
  }
};

VerificadorDeValor();
