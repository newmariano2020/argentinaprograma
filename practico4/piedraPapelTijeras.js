const readlineSync = require("readline-sync");
let vecesUserWin = 0;
let vecesCpuwin = 0;
let vecesDraw = 0;
let partidasJugadas = 0;

const juegoPiedraPapeloTijera = () => {
  const obtenerJugadaComputadora = () => {
    let jugadaCpu = Math.floor(Math.random() * 3);
    if (jugadaCpu == 0) {
      jugadaCpu = "piedra";
    } else if (jugadaCpu == 1) {
      jugadaCpu = "papel";
    } else jugadaCpu = "tijera";

    return jugadaCpu;
  };
  const obtenerJugadaUsuario = () => {
    const jugadaUser = readlineSync.question(
      "Elije tu jugada: piedra, papel, tijera :"
    );

    return jugadaUser;
  };
  const determinarGanador = (jugadaCpu, jugadaUser) => {
    let ganador;
    console.log(
      `La opción seleccionada por la computadora ha sido ${jugadaCpu}`
    );
    console.log(
      `La opción seleccionada por la el usuario ha sido ${jugadaUser}`
    );
    return ganador;
  };
  let jugadaElegidaCpu = obtenerJugadaComputadora();
  let jugadaElegidaUser = obtenerJugadaUsuario();

  determinarGanador(jugadaElegidaCpu, jugadaElegidaUser);
  let resultadoRonda;
  if (jugadaElegidaCpu == "piedra" && jugadaElegidaUser == "piedra") {
    vecesDraw++;
    resultadoRonda = "empate";
  } else if (jugadaElegidaCpu == "papel" && jugadaElegidaUser == "piedra") {
    vecesCpuwin++;
    resultadoRonda = "gana Cpu";
  } else if (jugadaElegidaCpu == "tijera" && jugadaElegidaUser == "piedra") {
    vecesUserWin++;
    resultadoRonda = "gana Usuario";
  } else if (jugadaElegidaCpu == "piedra" && jugadaElegidaUser == "tijera") {
    vecesCpuwin++;
    resultadoRonda = "gana Cpu";
  } else if (jugadaElegidaCpu == "piedra" && jugadaElegidaUser == "papel") {
    vecesUserWin++;
    resultadoRonda = "gana Usuario";
  } else if (jugadaElegidaCpu == "papel" && jugadaElegidaUser == "piedra") {
    vecesUserWin++;
    resultadoRonda = "gana Usuario";
  } else if (jugadaElegidaCpu == "papel" && jugadaElegidaUser == "papel") {
    vecesDraw++;
    resultadoRonda = "empate";
  } else if (jugadaElegidaCpu == "tijera" && jugadaElegidaUser == "tijera") {
    vecesDraw++;
    resultadoRonda = "empate";
  } else if (jugadaElegidaCpu == "tijera" && jugadaElegidaUser == "papel") {
    vecesCpuwin++;
    resultadoRonda = "gana cpu";
  } else {
    console.log("ha ocurrido un error");
  }
  console.log(`El resultado de la ronda ha sido: ${resultadoRonda}`);
  let playAgain = readlineSync.question("Deseas jugar de nuevo? si o no :");
  if (playAgain == "si") {
    partidasJugadas++
    juegoPiedraPapeloTijera();
  } else if (playAgain == "no") {
    console.log(
      `partidas jugadas: ${partidasJugadas}, Veces que ganaste al Cpu: ${vecesUserWin}, veces que perdiste con el Cpu: ${vecesCpuwin}, veces que empataste con el cpu: ${vecesDraw}`
    );
    console.log("Gracias por Jugar!");
  }
};
juegoPiedraPapeloTijera();
