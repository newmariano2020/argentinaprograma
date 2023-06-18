const readlineSync = require("readline-sync");

const meses = [
  { nombre: "enero", dias: "dias 31" },
  { nombre: "febrero", dias: "dias 28" },
  { nombre: "marzo", dias: "31" },
  { nombre: "abril", dias: "30" },
  { nombre: "mayo", dias: "31" },
  { nombre: "junio", dias: "30" },
  { nombre: "julio", dias: "31" },
  { nombre: "agosto", dias: "31" },
  { nombre: "septiembre", dias: "30" },
  { nombre: "octubre", dias: "31" },
  { nombre: "noviembre", dias: "30" },
  { nombre: "diciembre", dias: "31" },
];

const verificadorCantidadDiasDelMes = () => {
  let respuesta = readlineSync.question(
    `ingresa un numero correspondiente al mes deseado teniendo en cuenta que 1=enero, 2= febrero, 3=marzo, 4=abril, 5=mayo, 6=junio, 7=julio, 8=agosto, 9=septiembre, 10=octubre, 11=noviembre, 12=diciembre`
  );
  let respuestaNumerica = parseInt(respuesta) - 1;

  console.log(respuestaNumerica);
  console.log(meses[respuestaNumerica]);

  if (respuestaNumerica > 0 && respuestaNumerica < 12) {
    console.log(
      `La cantidad de dias del mes de ${meses[respuestaNumerica].nombre} es ${meses[respuestaNumerica].dias}}`
    );
  } else {
    console.log("no has proporcionado un numero valido del 1 al 12");
  }
};

verificadorCantidadDiasDelMes();
