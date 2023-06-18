const readlineSync = require("readline-sync");



verificadorPar=()=>{
    const consulta = readlineSync.question(`ingresa un número para verificar si es par o no=`);
    consultaNumero = parseInt(consulta)
    if((Math.sign(consultaNumero) === 1)){
        if((consultaNumero % 2 === 0 )){
            console.log('El numero es positivo y par')
        } else {
            console.log('El numero es positivo e impar')
        }
    }
    else if(consultaNumero !== 0){
        console.log("El numero es negativo")
    }
    else if(consultaNumero === 0){
        console.log("El numero es cero")
    }
    
}
verificadorPar();