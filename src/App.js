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
function avanzarEnY(cadenaControladores, posicionY){
    for(var i = 0; i<cadenaControladores.length;i++){
        if(cadenaControladores[i]=="A") posicionY++;
    }
    return posicionY;
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
    y = avanzarEnY(controladores, posicionInicialY);
    let posicionFinal = `(${x},${y})${orientacion}`;
  return posicionFinal;
}

export default controladorAuto;
