//la lista de clientes.
let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];
// podes continuar tu codigo a partir de aca!

// crear un objeto literal llamado “banco”, el cual tendrá una propiedad llamada “clientes”, que estará compuesta de la lista de objetos obtenidos en el punto anterior.

const banco = {
  clientes: arrayCuentas,

  // Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el objeto cliente que corresponda con ese nombre ingresado.
  // ayuda: let clienteEncontrado =  banco.consultarCliente(“Ramon Connell”);

  consultarCliente: function (titular) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (titular === this.clientes[i].titularCuenta) {
        return this.clientes[i]
      }
    }
  },

  // Crear otro método llamado depósito, que recibirá dos parámetros, el titular de cuenta y una cantidad de dinero a depositar. El método debe obtener a la cuenta correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos. Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su nuevo saldo es: xxx”.
  deposito: function (titular, cantidad) {
    let cliente = this.consultarCliente(titular)
    cliente.saldoEnPesos = cliente.saldoEnPesos + cantidad
    console.log(`Depósito realizado, su nuevo saldo es: $ ${cliente.saldoEnPesos}`)
  },
  // Crear un último método llamado extracción, que recibirá también dos parámetros: el titular de cuenta y el monto a extraer. El método debe obtener la cuenta correspondiente y restar el monto al saldo actual. En caso de que el resultado sea menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”, de lo contrario deberá imprimir “Extracción realizada correctamente, su nuevo saldo es: xxx”.
  extraccion: function (titular, monto) {
    let cliente = this.consultarCliente(titular)
    if ((cliente.saldoEnPesos - monto) < 0) {
      console.log("Fondos insuficientes")
    } else {
      cliente.saldoEnPesos = cliente.saldoEnPesos - monto
      console.log(`Extracción realizada correctamente, su nuevo saldo es: $ ${cliente.saldoEnPesos}`)
    }
  }
}

//console.log(banco.extraccion("Abigael Natte", 20000))


// Propiedad única
// Crear una función llamada propiedadUnica, que reciba un arreglo de objetos como parámetro y un string. Esta deberá retornar un nuevo arreglo de objetos, teniendo como parámetro la propiedad que fue pasada como string. 
// Ejemplo: 
let array = [{ nombre: "Lean", edad: 27 }, { nombre: "Eze", edad: 49 }]
// propiedadUnica(array, “edad”) debe retornar [ { edad: 27 }, { edad: 49 } ]
// propiedadUnica(array, “nombre”) debe retornar [ { nombre: “Lean”}, { nombre: “Eze” } ]
function propiedadUnica(arrayObj, string) {
  let arrayObj2 = []
  for (let i = 0; i < arrayObj.length; i++) {
    if (arrayObj[i].hasOwnProperty(string)) {
      arrayObj2.push({
        [string]: arrayObj[i][string]
      })
    }
  }
  return arrayObj2
}
console.log(propiedadUnica(array, 'edad'))

// Calculador de notas
// Crear el objeto “alumno”, el cual va a consistir en las siguientes propiedades básicas:
// Nombre
// Número de legajo
// Lista de notas
// Nos gustaría calcular el promedio del alumno y si el mismo está aprobado, basado en una nota de aprobación que le va a ser dada. Para este ejercicio, vamos a dejar que pienses todos los métodos y propiedades que puedan hacer falta para que el programa funcione correctamente de la manera solicitada.

const alumno = {
  nombre: "Mauro",
  num_legajo: 123456,
  lista_notas: [10, 9, 8, 7],
  promedio: function () {
    let sumaNotas = 0
    for (let i = 0; i < this.lista_notas.length; i++) {
      sumaNotas = sumaNotas + this.lista_notas[i]
    }
    return sumaNotas / this.lista_notas.length
  }
}
console.log(alumno.promedio())
