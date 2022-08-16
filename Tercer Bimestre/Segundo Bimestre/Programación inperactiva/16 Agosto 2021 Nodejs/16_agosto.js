//Primera situación Fila en el banco 
let cliente = 'Cristian'
let turnos_faltantes = '10'
let tipo_servicio = 'Asesoría'
let satisfacion_servicio = true
const total_cajas = 3
console.log(cliente)
console.log(turnos_faltantes)
console.log(tipo_servicio)
console.log(satisfacion_servicio)
console.log(total_cajas)

//Segunda situación Restaurante
cliente = 'Fabian'
let nombre_restaurante = 'Asadero el pollito frito'
let distancia_mesas = 2.5
let abierto = true
const direccion_restaurante = 'Call 9A #15-30'
console.log(cliente)
console.log(distancia_mesas + 'M')
console.log(abierto)
console.log(direccion_restaurante)
console.log('Me gustaría reservar una mesa en '+ nombre_restaurante + ' en la dirección '+ direccion_restaurante )


//Piensen cuál es la diferencia entre la línea 2 y la línea 3. ¿Cuál creen que es la mejor opción?
//RTA: La mejor opción es la linea 3 porque hace uso de la variable definidad anteriormente, adicional de que podemos cambiar su valor y está cambiaría directamente en la impresión de la variable

let variable1 = 'remeras'
let variable2 = 'pantalones'
let variable3;
variable3 = variable1
variable1 = variable2
variable2 = variable3
console.log(variable1, variable3)


