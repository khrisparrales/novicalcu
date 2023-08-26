/**Obtener el valor del input  */
let valorBase;
let valorsuma;
let valorporcentaje;
let valorbasesuma;
let valor12;
let valordebito;
function myFunction() {
  /**convertir valor base a un decimal */
  /**validar que funcione con comas */
  valorBase = document.getElementById("base").value;
  valorBase = valorBase.replace(",", ".");




  valorBase = parseFloat(valorBase);
  console.log(valorBase);
  /**Al valor sumarle 40 */
  valorsuma = valorBase + 0;

  /**Al valor sumarle el 10% */
  valorporcentaje = valorsuma + Math.floor(valorsuma * 6) / 100;
  valordebito = valorsuma + Math.floor(valorsuma * 4) / 100;
  let valor12c = valorsuma + Math.floor(valorsuma * 18) / 100;
  let valor9c = valorsuma + Math.floor(valorsuma * 15) / 100;
  let valor6c = valorsuma + Math.floor(valorsuma * 12) / 100;
  let valor3c = valorsuma + Math.floor(valorsuma * 9) / 100;
  valorporcentaje = valorporcentaje.toFixed(3);
  
  valorbasesuma = valorBase + Math.floor(valorBase * 10) / 100;
  valorbasesuma = valorbasesuma.toFixed(3);
  valor12 = valorBase - Math.floor(valorBase * 12) / 100;
  valor12 = valor12.toFixed(3);
let debitoiva=valordebito/1.12;
  /**Mostrar el valor en la pagina */
  document.getElementById("baseiva").innerHTML = valorBase/1.12;  
  document.getElementById("resultadosumatotal").innerHTML = valordebito +' sin iva '+valordebito/1.12;

  document.getElementById("resultadosumaporcentaje").innerHTML =
    valorporcentaje+' sin iva '+valorporcentaje/1.12;
  document.getElementById("resultado12c").innerHTML =
    valor12c+' sin iva '+valor12c/1.12;
  document.getElementById("resultado9c").innerHTML = valor9c+' sin iva '+valor9c/1.12;
  document.getElementById("resultado6c").innerHTML = valor6c+' sin iva '+valor6c/1.12;
  document.getElementById("resultado3c").innerHTML = valor3c+' sin iva '+valor3c/1.12;

  document.getElementById("cuota12c").innerHTML =
  valor12c/12;
  document.getElementById("cuota9c").innerHTML =
  valor9c/9;
  document.getElementById("cuota6c").innerHTML =
  valor6c/6;
  document.getElementById("cuota3c").innerHTML =
  valor3c/3;
}
