function obtenerCadenaSinSignos(cadenaControlAuto){
    return cadenaControlAuto.replace(/[^a-zA-Z0-9]/g, '');
}
function obtenerCadenaControles(cadenaControlAuto){
    let controladores=[];
    let cadenaSinSignos= obtenerCadenaSinSignos(cadenaControlAuto);
    for(var i =5; i<cadenaSinSignos.length;i++){
        controladores.push(cadenaSinSignos[i])
    }
    return controladores;
}
function deplazarEnY(cadenaControladores, posicionY, orientacion){
    for(var i = 0; i<cadenaControladores.length;i++){
        if(cadenaControladores[i]=="A" && orientacion =="N") posicionY++;
        if(cadenaControladores[i]=="A" && orientacion =="S") posicionY--;
    }
    return posicionY;
}
function desplazarEnX(cadenaControladores, posicionX, orientacion){
    for(var i = 0; i<cadenaControladores.length;i++){
        if(cadenaControladores[i]=="A" && orientacion =="E") posicionX++;
        if(cadenaControladores[i]=="A" && orientacion =="O") posicionX--;
    }
    return posicionX;
}
function obtenerOrientacionFinal(orientacion, orientaciones){
    let orientacionFinal = orientacion;
    if(orientacion==orientaciones[3]) orientacionFinal = orientaciones[0];
          else orientacionFinal = orientaciones[orientaciones.indexOf(orientacion)+1];
    return orientacionFinal;
  }
  function obtenerPosicionInicialY(cadenaControlAuto){
    let cadenaSinSignos= obtenerCadenaSinSignos(cadenaControlAuto);
    return cadenaSinSignos[3];
}
function obtenerPosicionInicialX(cadenaControlAuto){
    let cadenaSinSignos= obtenerCadenaSinSignos(cadenaControlAuto);
    return cadenaSinSignos[2];
}
function obtenerOrientacionInicial(cadenaControlAuto){
    let cadenaSinSignos= obtenerCadenaSinSignos(cadenaControlAuto);
    return cadenaSinSignos[4];
}
function obtenerDimensionMatriz(cadenaControlAuto){
    let cadenaSinSignos= obtenerCadenaSinSignos(cadenaControlAuto);
    let dimensiones=[cadenaSinSignos[0], cadenaSinSignos[1]];
    return dimensiones;
}
function controladorAuto(cadenaControlAuto) {
    let dimensionMatriz = obtenerDimensionMatriz(cadenaControlAuto);
    let posicionInicialX = obtenerPosicionInicialX(cadenaControlAuto);
    let posicionInicialY= obtenerPosicionInicialY(cadenaControlAuto);
    let orientacion = obtenerOrientacionInicial(cadenaControlAuto);
    let x = posicionInicialX;
    let y=posicionInicialY;
    let controladores=obtenerCadenaControles(cadenaControlAuto);
    y = deplazarEnY(controladores, posicionInicialY, orientacion);
    x = desplazarEnX(controladores, posicionInicialX, orientacion);
    for(var i = 0; i<controladores.length;i++){
        if (controladores[i]== "I") orientacion=obtenerOrientacionFinal(orientacion, ['N','O','S','E']);;
        if (controladores[i]== "D") orientacion=obtenerOrientacionFinal(orientacion, ['N','O','S','E'].reverse());;
    }
    let posicionFinal = `(${x},${y})${orientacion}`;
  return posicionFinal;
}

export default controladorAuto;
