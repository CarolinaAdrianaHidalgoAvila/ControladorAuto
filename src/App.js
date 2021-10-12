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
function avanzarEnY(cadenaControladores, posicionY, orientacion){
    for(var i = 0; i<cadenaControladores.length;i++){
        if(cadenaControladores[i]=="A" && orientacion =="N") posicionY++;
    }
    return posicionY;
}
function obtenerOrientacionFinal(orientacion, orientaciones){
    let orientacionFinal = orientacion;
    if(orientacion==orientaciones[3]) orientacionFinal = orientaciones[0];
          else orientacionFinal = orientaciones[orientaciones.indexOf(orientacion)+1];
    return orientacionFinal;
  }
function controladorAuto(cadenaControlAuto) {
    let dimensionMatrizX = 5;
    let dimensionMatrizY = 5;
    let posicionInicialX = 1;
    let posicionInicialY= 2;
    let orientacion = "N" ;
    let x = posicionInicialX;
    let y=posicionInicialY;
    let controladores=obtenerCadenaControles(cadenaControlAuto);
    y = avanzarEnY(controladores, posicionInicialY, orientacion);
    for(var i = 0; i<controladores.length;i++){
        if (controladores[i]== "I") orientacion=obtenerOrientacionFinal(orientacion, ['N','O','S','E']);;
        if (controladores[i]== "D") orientacion=obtenerOrientacionFinal(orientacion, ['N','O','S','E'].reverse());;
    }
    let posicionFinal = `(${x},${y})${orientacion}`;
  return posicionFinal;
}

export default controladorAuto;
