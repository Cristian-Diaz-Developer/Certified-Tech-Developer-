const jsonHelper = require("./jsonHelper");

const concesionaria = {
    vehiculos: jsonHelper.leerArchivo("AUTOS"),
    incrementarPrecio: function (porcentaje) {
        let aux = porcentaje / 100 + 1;
        for (let i = 0; i < this.vehiculos.length; i++) {
            const vehiculo = this.vehiculos[i];
            vehiculo.precio *= aux;
        }
        jsonHelper.escribirArchivo("AUTOS", this.vehiculos);
        return `Los vehiculos aumentaron un %${porcentaje}`;
    },
    agregarAuto: function (marca, modelo, anio, precio, patente) {
        let nuevoAuto = {
            marca: marca,
            modelo: modelo,
            anio: anio,
            precio: precio,
            patente: patente,
            vendido: false
        }
        this.vehiculos.push(nuevoAuto)
        jsonHelper.escribirArchivo("AUTOS", this.vehiculos)
        return "Vehículo agregado correctamente"
    },
    venderAuto: function (patente) {
        let seleccionado;
        for (let i = 0; i < this.vehiculos.length; i++) {
            if (patente === this.vehiculos[i].patente) {
                this.vehiculos[i].vendido = true
                seleccionado = this.vehiculos[i]
            }
        }
        jsonHelper.escribirArchivo("AUTOS", this.vehiculos)
        return "El vehículo: " + seleccionado.marca + " " + seleccionado.modelo + " ha sido vendido"
    },
    totalDeVentas: function () {
        let suma = 0;
        for (let i = 0; i < this.vehiculos.length; i++) {
            if (this.vehiculos[i].vendido) {
                suma = suma + this.vehiculos[i].precio
            }
        }
        return `El total de ventas es: $ ${suma}`
    },
    eliminarAuto: function (patente) {
        let autoEliminado;
        for (let i = 0; i < this.vehiculos.length; i++) {
            if (patente === this.vehiculos[i].patente) {
                autoEliminado = this.vehiculos.splice(i, 1)
                console.log(autoEliminado)
            }
        }
        jsonHelper.escribirArchivo("AUTOS", this.vehiculos)
        return `El vehículo: ${autoEliminado[0].marca} - ${autoEliminado[0].modelo} - ${autoEliminado[0].anio} - patente: ${autoEliminado[0].patente} ha sido eliminado`
    }
};

//concesionaria.agregarAuto("ford", "focus", "2011", "123456", "ABD123")
//console.log(concesionaria.venderAuto('ABC123'))
//console.log(concesionaria.totalDeVentas())
//console.log(concesionaria.eliminarAuto('JTH240'))
//console.log(concesionaria.vehiculos);
//console.log(concesionaria.incrementarPrecio(20));
