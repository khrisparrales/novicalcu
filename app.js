/**Obtener el valor del input  */
let valorBase;
let valorsuma;
let valorporcentaje;
let valorbasesuma;
let valor12;

function myFunction() {
  /**convertir valor base a un decimal */
  /**validar que funcione con comas */
  valorBase = document.getElementById("base").value;
  valorBase = valorBase.replace(",", ".");

  valorBase = parseFloat(valorBase);
  console.log(valorBase);
  /**Al valor sumarle 40 */
  valorsuma = valorBase + 40;

  /**Al valor sumarle el 10% */
  valorporcentaje = valorsuma + Math.floor(valorsuma * 10) / 100;
  valorporcentaje = valorporcentaje.toFixed(3);
  valorbasesuma = valorBase + Math.floor(valorBase * 10) / 100;
  valorbasesuma = valorbasesuma.toFixed(3);
  valor12 = valorBase - Math.floor(valorBase * 12) / 100;
  valor12 = valor12.toFixed(3);

  /**Mostrar el valor en la pagina */
  document.getElementById("resultadosumatotal").innerHTML = valorsuma;
  document.getElementById("resultadosumaporcentaje").innerHTML =
    valorporcentaje;
  document.getElementById("resultadobasesumaporcentaje").innerHTML =
    valorbasesuma;
  document.getElementById("resultadobasesumaporcentaje12").innerHTML = valor12;
}
