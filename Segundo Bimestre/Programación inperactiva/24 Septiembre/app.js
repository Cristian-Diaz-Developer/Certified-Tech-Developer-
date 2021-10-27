const jsonHelper = require("./lecturaEscritura");

const inmobiliaria = {
  departamentos: jsonHelper.leerJson("departamentos"),
  listarDepartamentos: function (arrDeptos) {
    arrDeptos.forEach((depto) => {
      let disponibilidad = depto.disponible ? "disponible" : "alquilado";
      console.log(
        `id: ${depto.id}, precio $${depto.precioAlquiler}, está ${disponibilidad}, ${depto.ambientes} ambientes`
      );
    });
  },
  buscarPorId: function (id) {
    return this.departamentos.find((depto) => depto.id === id);
  },
  departamentosNoDisponibles: function () {
    return this.departamentos.filter((depto) => !depto.disponible);
  },
  departamentosDisponibles :function () {
    return this.departamentos.filter((depto) => depto.disponible);
  } ,
  filtrarPorAmbientes : function (numero) {
    return this.departamentos.filter((depto) => depto.ambientes >= numero);
  },
  filtrarPorPrecio : function (valorMaxAlquiler) {
    return this.departamentosDisponibles().filter((depto) => depto.precioAlquiler <= valorMaxAlquiler); 
} ,
rebajarPrecioAlquiler: function (porcentajeDescuento) {
  let descuento =  1 - porcentajeDescuento /100 
  this.departamentosDisponibles().forEach(depto => {
      depto.precioAlquiler *= descuento    
  });
  return jsonHelper.escribirJson('departamentos',this.departamentos)
}
,
  calcularRecaudación: function () {
    let alquilados = this.departamentosNoDisponibles();
    let valor = alquilados.reduce(
      (acum, depto) => acum + depto.precioAlquiler,
      0
    );
    return `La recaudacion total es de: $${valor}`;
  },
};

// console.log(inmobiliaria.departamentos);
// inmobiliaria.listarDepartamentos(inmobiliaria.departamentos);
// console.log(inmobiliaria.buscarPorId(10));
// console.log(inmobiliaria.buscarPorId(100));
// inmobiliaria.listarDepartamentos(inmobiliaria.departamentosNoDisponibles());
// inmobiliaria.listarDepartamentos(inmobiliaria.departamentosDisponibles());
// inmobiliaria.listarDepartamentos(inmobiliaria.filtrarPorAmbientes(2));
// inmobiliaria.listarDepartamentos(inmobiliaria.filtrarPorPrecio(37000))
//console.log(inmobiliaria.calcularRecaudación());
