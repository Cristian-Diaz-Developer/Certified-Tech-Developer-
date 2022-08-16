const fs = require('fs')

const traductorJSON = { 
  /*Ahora vamos a realizar nuestra primera función, la de lectura de archivos, ¿que función del módulo fs podemos utilizar para realizar una lectura sincrónica del archivo json? crea una función que reciba como parámetro un string con el nombre del archivo json, realice la lectura y haga un parseo de los datos para poder utilizarlos como un array de objetos literales.*/ 
      leerJson : function (nombreArchivo) {
      return JSON.parse(
      fs.readFileSync(`${__dirname}/${nombreArchivo}.json`, "utf8"));
      },
/*Una vez creada nuestra función de lectura, haremos lo propio con la función de escritura. Crea una función que reciba como parámetros el nombre del archivo, y los datos a convertir en json, para poder crear tu base de datos en json (utilizaremos la función de lectura para poder manipular el listado de autos, modificarlos y agregar autos, y la función de escritura para sobreescribir nuestro json con la nueva lista actualizada cuando sea necesario) */
    escribirJson : function (nombreArchivo, datos) {
          fs.writeFileSync(`${__dirname}/${nombreArchivo}.json`,
          JSON.stringify(datos))
        }
      };

      /*Una vez creadas nuestras funciones necesitamos poder exportarlas para utilizar en otro u otros archivos que necesitemos. Maria te dejo un ejemplo de cómo podrías modificar tu código para que sea más práctico a la hora de modularizar: */
    module.exports = (traductorJSON)
