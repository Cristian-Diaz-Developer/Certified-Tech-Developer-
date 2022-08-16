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

// Nos solicitan también crear un objeto literal llamado “banco”, el cual tendrá una propiedad llamada “clientes”, que estará compuesta de la lista de objetos obtenidos en el punto anterior.

const banco = {
  clientes: arrayCuentas,
  // Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el objeto cliente que corresponda con ese nombre ingresado.
  consultarCliente: function (titular) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (titular === this.clientes[i].titularCuenta) {
        return this.clientes[i];
      }
    }
  },
  /*Crear otro método llamado depósito, que recibirá dos parámetros, el titular de cuenta y una cantidad de dinero a depositar. El método debe obtener a la cuenta correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos. Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su nuevo saldo es: xxx”.*/
  deposito: function (titular, cantidadDinero) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (titular === this.clientes[i].titularCuenta) {
        this.clientes[i].saldoEnPesos = this.clientes[i].saldoEnPesos + cantidadDinero
        console.log("Deposito realizado, su nuevo saldo es: " + this.clientes[i].saldoEnPesos);
      }
    }
  },
  /*Crear un último método llamado extracción, que recibirá también dos parámetros: el titular de cuenta y el monto a extraer. El método debe obtener la cuenta correspondiente y restar el monto al saldo actual. En caso de que el resultado sea menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”, de lo contrario deberá imprimir “Extracción realizada correctamente, su nuevo saldo es: xxx”.*/
  extraccion: function (titular, cantidadDinero) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (titular === this.clientes[i].titularCuenta) {
        if (this.clientes[i].saldoEnPesos >= cantidadDinero) {
          this.clientes[i].saldoEnPesos = this.clientes[i].saldoEnPesos - cantidadDinero;
          console.log("Extraccion realizada correctamente, su nuevo saldo es: " + this.clientes[i].saldoEnPesos);
        } else {
          console.log("Fondos insuficientes");
        }
      }
    }
  }
};

let clienteExtraido = banco.extraccion("Abigael Natte", 30000);
//let clienteConDeposito = banco.deposito("Abigael Natte", 200);
// console.log(banco.clientes);
//let clienteEncontrado = banco.consultarCliente("lean"); // {}
//console.log(clienteEncontrado);





