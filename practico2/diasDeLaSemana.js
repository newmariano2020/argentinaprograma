const readlineSync = require("readline-sync");

const diaDeLaSemana = () => {
  const consulta = readlineSync.question(
    `ingresa un número para verificar el día de la semana siendo que 1=Lunes, 2=Martes, 3=Miércoles, 4=jueves, 5=Viernes, 6=Sábados, 7=Domingo`
  );
  switch (consulta) {
    case "1":
      console.log("Hoy es Lunes");
      break;
    case "2":
      console.log("Hoy es Martes");
      break;
    case "3":
      console.log("Hoy es Miércoles");
      break;
    case "4":
      console.log("Hoy es Jueves");
      break;
    case "5":
      console.log("Hoy es Viernes");
      break;
    case "6":
      console.log("Hoy es Sábado");
      break;
    case "7":
      console.log("Hoy es Domingo");
      break;
    default:
        console.log('Número inválido');  
  }
};
diaDeLaSemana()
