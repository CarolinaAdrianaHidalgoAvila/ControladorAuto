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
function deplazarEnY(posicionY, orientacion){
    if(orientacion =="N") posicionY++;
    if( orientacion =="S") posicionY--;
    return posicionY;
}
function desplazarEnX(posicionX, orientacion){
    if( orientacion =="E") posicionX++;
    if( orientacion =="O") posicionX--;
    return posicionX;
}
function SaltarEnY(posicionInicialY,orientacion){
  let posicionActual = parseInt(posicionInicialY);
  if(orientacion =="N"){
      posicionActual = posicionInicialY + 2;
  }
    return posicionActual;
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
function posicionMayorLimite(posicion, limite){
    let respuesta = false;
    if(posicion> limite) respuesta = true;
    return respuesta;
}
function controladorAuto(cadenaControlAuto) {
    let [dimensionMatrizX, dimensionMatrizY] = obtenerDimensionMatriz(cadenaControlAuto);
    let posicionInicialX = obtenerPosicionInicialX(cadenaControlAuto);
    let posicionInicialY= obtenerPosicionInicialY(cadenaControlAuto);
    let orientacion = obtenerOrientacionInicial(cadenaControlAuto);
    let x = posicionInicialX;
    let y= parseInt(posicionInicialY);
    let controladores=obtenerCadenaControles(cadenaControlAuto);
    for(var i=0;i<controladores.length;i++){   
      let comando = controladores[i];
      if(comando =="A" ) { 
        x = desplazarEnX(x, orientacion);
        y = deplazarEnY(y, orientacion);
      }
      if (comando == "S"){
          y = SaltarEnY(y, orientacion);
      }  
      if(comando=="I") orientacion =  obtenerOrientacionFinal(orientacion, ['N','O','S','E']); 
      if(comando=="D") orientacion =  obtenerOrientacionFinal(orientacion, ['N','O','S','E'].reverse());
    }
    let posicionFinal = `(${x},${y})${orientacion}`;
    if( posicionMayorLimite(y,dimensionMatrizY)==true) posicionFinal = `(${x},${y-1})${orientacion}`;
    if(  posicionMayorLimite(x,dimensionMatrizX)==true) posicionFinal = `(${x-1},${y})${orientacion}`;
  return posicionFinal;
}

export default controladorAuto;
