const jsonHelper = require("./jsonHelper");

const carrera = {
    autos: jsonHelper.leerArchivo("autos"),
    autosPorTanda: 6,
    autosHabilitados: function () {
        return this.autos.filter((auto) => auto.sancionado === false)
    },
    listarAutos: function (arrayAutos) {
        arrayAutos.forEach((auto) => {
            let estadoAuto = auto.sancionado ? "sancionado" : "habilitado"
            console.log(
                `Piloto: ${auto.piloto}, patente: ${auto.patente}, velocidad: ${auto.velocidad}, peso en kg: ${auto.peso}, estado: ${estadoAuto}, cilindrada: ${auto.cilindrada}`
            )
        })
    },
    buscarPorPatente: function (patente) {
        return this.autos.find((auto) => auto.patente === patente)
    },
    /* Agregar un método filtrarPorCilindrada que permite filtrar los autos habilitados, siempre y cuando su propiedad cilindrada sea menor o igual a la cilindrada enviada como argumento.
    - Este método recibirá por parámetro un number que represente la cilindrada máxima a buscar.
    - Este método devolverá un array con todos los autos que cumplan con la condición mencionada.
    - En caso de no encontrar ningún auto, devolverá un array vacío.
    - Este método debe usar autosHabilitados para buscar incluir solamente aquellos autos que estén habilitados. */
    filtrarPorCilindrada: function (number) {
        let habilitados = this.autosHabilitados();
        return habilitados.filter((auto) => auto.cilindrada <= number)
    },
    ordenarPorVelocidad: function () {
        return this.autos.sort((a, b) => a.velocidad - b.velocidad)
    },
    /* Agregar un método habilitarVehiculo que permita habilitar un vehículo en función de su patente y guardar los cambios en el archivo JSON.
    Este método recibirá por parámetro un string que represente la patente a buscar
    En caso de encontrar un auto con la patente buscada:
    Cambiará el valor de la propiedad sancionado a false.
    Escribirá los cambios en el archivo JSON que contiene los vehículos.
    Devolverá el auto modificado
    En caso contrario devolverá undefined */

    habilitarVehiculo: function (patente) {
        let autoEncontrado = this.buscarPorPatente(patente)
        if (autoEncontrado) {
            //cambio el valor de la propiedad
            autoEncontrado.sancionado = false
            //sobre-escribo el JSON
            jsonHelper.escribirArchivo("autos", this.autos)
            //retorno el auto modificado
            return autoEncontrado
        }
    },
    generarTanda: function (cilindrada, peso) {
        let habilitados = this.autosHabilitados();
        let filtrados = habilitados.filter(
            (auto) => auto.cilindrada <= cilindrada && auto.peso <= peso
        );
        let resultado = filtrados.slice(0, this.autosPorTanda);
        return resultado;
    },
    pesoPromedio: function (cilindrada, peso) {
        let sumatoriaHabilitados = this.generarTanda(cilindrada, peso).reduce(
            (acum, auto) => acum + auto.peso,
            0
        );
        let promedio =
            sumatoriaHabilitados / this.generarTanda(cilindrada, peso).length;
        return `El peso promedio de los vehiculos habilitados es de: ${promedio}Kg`;
    },
    /*  Agregar un método listarPodio, que calcule el podio en función del puntaje de los pilotos y muestre el resultado por consola.
     El método recibirá como parámetro un array de autos. Los mismos deberán ser generados con generarTanda.
     El método ordenará por puntaje los autos recibidos.
     El método imprimirá por consola los tres primeros puestos.
     Resultado esperado al ejecutar el método: un mensaje por consola por cada auto con el siguiente formato: 
 
     El ganador es: ______, con un puntaje de ______.
     El segundo puesto es para ______, con un puntaje de ______.
     El tercer puesto es para ______, con un puntaje de ______.
     Ejemplo:
     El ganador es: Leandro Ezequiel, con un puntaje de: 70.
     El segundo puesto es para Martin Cejas, con un puntaje de 55.
     El tercer puesto es para Nicolas Lopez, con un puntaje de 52. */

    listarPodio: function (arrayAutos) {
        arrayAutos = this.generarTanda(3000, 2000)
        let autosOrdenados = arrayAutos.sort((a, b)=> b.puntaje - a.puntaje)
        let ganadores = autosOrdenados.slice(0,3)
        console.log(`El ganador es: ${ganadores[0].piloto}, con un puntaje de ${ganadores[0].puntaje}.
        El segundo puesto es para ${ganadores[1].piloto}, con un puntaje de ${ganadores[1].puntaje}.
        El tercer puesto es para ${ganadores[2].piloto}, con un puntaje de ${ganadores[2].puntaje}.`)
    }
}

//C
//console.log(carrera.autosHabilitados())

//D
//carrera.listarAutos(carrera.autos))

//E
//console.log(carrera.buscarPorPatente("ODS523"))

//F
//console.log(carrera.listarAutos(carrera.filtrarPorCilindrada(1500)))

//G
//console.log(carrera.listarAutos(carrera.ordenarPorVelocidad()))

//H
//console.log(carrera.habilitarVehiculo("JQK433"))

//I
//console.log(carrera.generarTanda(2000, 1925.29)

//J
//console.log(carrera.pesoPromedio())

//K
//console.log(carrera.listarPodio(this.autos))