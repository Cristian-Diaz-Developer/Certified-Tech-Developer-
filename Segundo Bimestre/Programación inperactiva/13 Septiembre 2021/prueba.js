const app = require('./app')
const traductorJSON = require('./app')

/*Una vez exportadas las funciones, o el objeto si utilizaste el ejemplo del punto anterior, requeri estas funcionalidades en un nuevo archivo js, y revisa que todo funcione correctamente
Hasta acá María está más que contenta con nuestro desempeño y trabajo. Ahora nos pide avanzar con las características de la concesionaria de autos que se centrará en tener la lista de autos, y dos funciones: una para agregar autos a la lista, y otra para editar la lista y vender los vehículos. Empezemos*/

/*En el archivo JS en el que tenemos requeridas nuestras funciones de lectura / escritura de archivos, crea el objeto literal concesionaria, luego agrega la propiedad autos, la cual deberá tener la lista de vehículos del archivo json (previamente parseada). Verifica que puedas visualizar esta propiedad correctamente.*/
const concesionaria = {
  autos : app.leerJson("AUTOS"),
  /*Al objeto concesionaria crea un método llamado agregarAuto el cual recibe como parámetros: una marca, un modelo, el año del vehículo, el precio, y la patente. El método deberá agregar el nuevo auto a la propiedad autos, y debemos guardar en nuestra base de datos (reescribir el JSON) la lista actualizada
PD: todos los vehículos nuevos tienen su propiedad vendido como false por defecto */
 agregarAuto : app.escribirJson("AUTOS", this.autos)

}
console.log(concesionaria.autos);