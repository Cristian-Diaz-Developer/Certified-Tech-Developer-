const v = "\x1b[32m%s\x1b[0m";
const o = "*".repeat(80) + "\n";
const oo = "*".repeat(25);
// Te proveemos la siguiente plantilla que tiene tres partes:
// - Array de objetos que está colapsado aquí debajo.
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "tu nombre aquí";
const tema = "TEMA 2";

const profesionales = [
  {
    id: 0,
    estaHabilitado: false,
    honorarioConsulta: 2007.68,
    edad: 29,
    nombre: "huber Wilkins",
    email: "huberwilkins@speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 0,
    puntaje: 8,
  },
  {
    id: 1,
    estaHabilitado: true,
    honorarioConsulta: 2325.56,
    edad: 21,
    nombre: "goldie Haley",
    email: "goldiehaley@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 0,
    puntaje: 7,
  },
  {
    id: 2,
    estaHabilitado: false,
    honorarioConsulta: 2208.17,
    edad: 36,
    nombre: "pena Landry",
    email: "penalandry@speedbolt.com",
    especialidad: "Dermatologia",
    cantidadConsultas: 0,
    puntaje: 7,
  },
  {
    id: 3,
    estaHabilitado: false,
    honorarioConsulta: 3266.71,
    edad: 20,
    nombre: "leanne Burch",
    email: "leanneburch@speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 1,
    puntaje: 5,
  },
  {
    id: 4,
    estaHabilitado: false,
    honorarioConsulta: 2674.09,
    edad: 31,
    nombre: "haynes Fuentes",
    email: "haynesfuentes@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 0,
    puntaje: 4,
  },
  {
    id: 5,
    estaHabilitado: true,
    honorarioConsulta: 1851.37,
    edad: 27,
    nombre: "tamika Fuentes",
    email: "tamikanewman@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 0,
    puntaje: 6,
  },
  {
    id: 6,
    estaHabilitado: true,
    honorarioConsulta: 2568.94,
    edad: 34,
    nombre: "russo Baldwin",
    email: "russobaldwin@speedbolt.com",
    especialidad: "Dermatologia",
    cantidadConsultas: 4,
    puntaje: 10,
  },
  {
    id: 7,
    estaHabilitado: true,
    honorarioConsulta: 2601.76,
    edad: 36,
    nombre: "dodson Shaffer",
    email: "dodsonshaffer@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 0,
    puntaje: 0,
  },
  {
    id: 8,
    estaHabilitado: true,
    honorarioConsulta: 1949.92,
    edad: 40,
    nombre: "guerra Bright",
    email: "guerrabright@speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 8,
    puntaje: 0,
  },
  {
    id: 9,
    estaHabilitado: true,
    honorarioConsulta: 3898.11,
    edad: 20,
    nombre: "dina Navarro",
    email: "dinanavarro@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 6,
    puntaje: 8,
  },
  {
    id: 10,
    estaHabilitado: false,
    honorarioConsulta: 2745.73,
    edad: 27,
    nombre: "stafford Watts",
    email: "staffordwatts@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 0,
    puntaje: 6,
  },
  {
    id: 11,
    estaHabilitado: false,
    honorarioConsulta: 2808.98,
    edad: 39,
    nombre: "joni Avery",
    email: "joniavery@speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 3,
    puntaje: 9,
  },
  {
    id: 12,
    estaHabilitado: true,
    honorarioConsulta: 1941.13,
    edad: 21,
    nombre: "mayra Tran",
    email: "mayratran@speedbolt.com",
    especialidad: "Oftamologia",
    cantidadConsultas: 8,
    puntaje: 3,
  },
  {
    id: 13,
    estaHabilitado: false,
    honorarioConsulta: 3930.0344999999998,
    edad: 23,
    nombre: "ward Dale",
    email: "warddale@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 1,
    puntaje: 3,
  },
];


/*******************************/
/* Desarrollo de las consignas */
/*******************************/

/* A.
Crear un objeto literal que represente la empresa. Este objeto literal lo llamaremos por ejemplo appProfesionales . Agregar una propiedad llamada profesionales que contenga al array de profesionales.
*/
let appProfesionales = {
  profesionales: profesionales, 


/* B  Agregar un método listarProfesionales que permita confeccionar un listado que facilite al usuario, leer los datos de los profesionales que estén dentro del array que se recibe por parámetro, de manera que imprima por consola los siguientes datos con este formato 
id 3 inactivo, Neumonología, Leanne Burch, consultas: 1, email: leanneburch@speedbolt.com */
      listarProfesionales : function(arrayEntrante) {
        for (let i = 0; i < arrayEntrante.length; i++) {
          
          console.log( 'Id' +  arrayEntrante[i].id + (arrayEntrante[i].estaHabilitado ? 'ok' : 'Inactivo') + ', ' + arrayEntrante[i].especialidad +arrayEntrante[i].nombre + ', ' + 'Consultas: ' + arrayEntrante[i].cantidadConsultas + ', '+ 'Email: ' + arrayEntrante[i].email );
          
        }
      }
    ,  

/* C Agregar un método filtrarHabilitados que permita filtrar profesionales que estén habilitados, es decir, con la ropiedad estaHabilitado en true. Este método deberá retornar un array de profesionales habilitados    
*/
filtrarHabilitados : function () {
  let profesionalesHabilitados = [];
  for (let i = 0; i < this.profesionales.length; i++) {
    if (this.profesionales[i].estaHabilitado) {
      profesionalesHabilitados.push(this.profesionales[i]);
    }
    
  }
  return profesionalesHabilitados;
},

/* D */
buscarPorID : function (id) {
      for (let i = 0; i < this.profesionales.length; i++) {
        if (this.profesionales[i].id === id) {
        return this.profesionales[i]
        }

      }
    },
/* E Agregar un método deshabilitarProfesional que permite cambiar el estado de la propiedad de un profesional estaHabilitado  a false, él mismo deberá realizar los siguiente pasos.
Recibe como parámetro el id del profesional y reutiliza el método buscarPorID para obtener el profesional.
Una vez encontrado el profesional deberá cambiar el valor de la propiedad estaHabilitado a false*/
deshabilitarProfesional : function (id) {   
  let cambio = this.buscarPorID(id);
    if (cambio) {
      cambio.estaHabilitado = false; 
    }
    return cambio;
},
/*F  Agregar un método corregirNombres que corrija los nombres de todos los profesionales pasando la primera letra a mayúscula. Por ejemplo “julián Martinez” deberán modificarlo por “Julián Martinez”*/
  corregirNombres : function () {
    for (let i = 0; i < this.profesionales.length; i++) {
      let nombre = this.profesionales[i].nombre
       this.profesionales[i].nombre= nombre.charAt(0).toUpperCase() + nombre.slice(1) ; // ''      
    }
    return this.profesionales
  }
  }

/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]);

console.log(v, "\n" + oo + "   B. listarProfesional");
// Ejecución aquí
console.log(o);

console.log(v, oo + "   C. filtrarHabilitados");
// Ejecución aquí
console.log(appProfesionales.filtrarHabilitados());
console.log(o);

console.log(v, oo + " D. buscarPorId(1)");
// Ejecución aquí
console.log(appProfesionales.buscarPorID(1));
console.log(o);

console.log(v, oo + "  E. deshabilitarProfesional");
// Ejecución aquí
console.log(appProfesionales.deshabilitarProfesional(12));
console.log(o);

console.log(v, oo + " F. corregirNombres");
// Ejecución aquí
console.log(appProfesionales.corregirNombres(profesionales));
console.log(o);