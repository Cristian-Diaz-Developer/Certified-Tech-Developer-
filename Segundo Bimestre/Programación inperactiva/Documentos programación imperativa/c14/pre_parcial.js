const v = "\x1b[32m%s\x1b[0m";
const o = "*".repeat(80) + "\n";
const oo = "*".repeat(25);
// Te proveemos la siguiente plantilla que tiene tre partes:
// - Array de objetos que está colapsado aquí debajo.
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Cecilia Hansen";
const tema = "el tema que te tocó";

const departamentos = [
  {
    id: 1,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 2395.8
  },
  {
    id: 2,
    propietarios: "Dueños: Luis Perez y María Martinez",
    cantidadHabitacion: 1,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 1597.2
  },
  {
    id: 3,
    propietarios: "Dueña: Laura García",
    cantidadHabitacion: 2,
    disponible: false,
    aceptaMascotas: false,
    cantidadPersonas: 4,
    precioAlquiler: 3993
  },
  {
    id: 4,
    propietarios: "Dueña: Julieta Tols",
    cantidadHabitacion: 1,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 1996.5
  },
  {
    id: 5,
    propietarios: "Dueños: Julieta Tols y Pablo Groming",
    cantidadHabitacion: 1,
    disponible: false,
    aceptaMascotas: false,
    cantidadPersonas: 1,
    precioAlquiler: 11979
  },
  {
    id: 6,
    propietarios: "Dueño: Pablo Groming",
    cantidadHabitacion: 2,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 3,
    precioAlquiler: 4658.5
  },
  {
    id: 7,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 3,
    precioAlquiler: 3327.5
  },
  {
    id: 8,
    propietarios: "Dueña: Julieta Tols",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 9,
    propietarios: "Dueñas: Julieta Tols y Laura García",
    cantidadHabitacion: 3,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 10,
    propietarios: "Dueñas: Julieta Tols y Laura García",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 11,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 3,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 12,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 13,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 4059.55
  },
  {
    id: 14,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 1,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 3993
  },
  {
    id: 15,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 798.6
  },
  {
    id: 16,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 798.6
  },
  {
    id: 17,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 665.5
  }
]


/*******************************/
/* Desarrollo de las consignas */
/*******************************/
const inmobiliaria = {
  // A

  departamentos: departamentos,


  // B

  listarDepartamentos: function (arrayDeptos) {
    for (let i = 0; i < arrayDeptos.length; i++) {
      let disponible = arrayDeptos[i].disponible ? "Disponible" : "Alquilado"
      let mascotas = arrayDeptos[i].aceptaMascotas ? "Aceptan Mascotas" : "No aceptan Mascotas"
      console.log(
        `id: ${arrayDeptos[i].id}, precio: ${arrayDeptos[i].precioAlquiler}, está: ${disponible}, ${arrayDeptos[i].cantidadHabitacion} ambientes, máximo ${arrayDeptos[i].cantidadPersonas} personas, ${mascotas}, propietarios: ${arrayDeptos[i].propietarios}`
      )
    }
  },

  // C
  departamentosDisponibles: function () {
    let disponibles = []
    for (let i = 0; i < this.departamentos.length; i++) {
      if (this.departamentos[i].disponible) {
        disponibles.push(this.departamentos[i])
      }

    }
    return disponibles
  },

  // D
  buscarPorId: function (id) {
    for (let i = 0; i < this.departamentos.length; i++) {
      if (id === this.departamentos[i].id) {
        return this.departamentos[i]
      }
    }
  },

  // E
  /*   buscarPorPrecio: function (precio) {
      let disponibles = this.departamentosDisponibles()
      return disponibles.filter(dd => dd.precioAlquiler <= precio)
    }, */
  buscarPorPrecio: function (alquiler) {
    let deptosResultado = [];
    let mensajeError =
      "No se encontraron departamentos con alquileres menores a: $" + alquiler;
    let disponibles = this.departamentosDisponibles();
    for (let i = 0; i < disponibles.length; i++) {
      if (disponibles[i].precioAlquiler <= alquiler) {
        deptosResultado.push(disponibles[i]);
      }
    }
    if (deptosResultado.length > 0) {
      return deptosResultado;
    } else {
      return mensajeError;
    }
  },

  // F
  precioConImpuesto: function (porcentaje) {
    let aux = porcentaje / 100 + 1;
    for (let i = 0; i < this.departamentos.length; i++) {
      this.departamentos[i].precioAlquiler *= aux;
    }
    return this.departamentos;
  },

  // G
  //   Agregar un método simplificarPropietarios que permita modificar los
  // textos de la propiedad propietarios para que en lugar de decir “Dueños:
  // ....”, “Dueña: ....”, etc. diga “Prop.: ....”
  // ejemplo : "Dueños: Martín Gutierrez y José Torres" pasará a ser "Prop.: Martín Gutierrez y José Torres"
  // Resultado esperado: un array con los departamentos modificados;
  simplificarPropietarios: function () {
    let deptosModif = []
    for (let i = 0; i < this.departamentos.length; i++) {
      if (this.departamentos[i].propietarios.includes("Dueña:")) {
        this.departamentos[i].propietarios = this.departamentos[i].propietarios.replace("Dueña:", "Prop.:")
      } else if (this.departamentos[i].propietarios.includes("Dueño:")) {
        this.departamentos[i].propietarios = this.departamentos[i].propietarios.replace("Dueño:", "Prop.:")
      } else if (this.departamentos[i].propietarios.includes("Dueñas:")) {
        this.departamentos[i].propietarios = this.departamentos[i].propietarios.replace("Dueñas:", "Prop.:")
      } else if (this.departamentos[i].propietarios.includes("Dueños:")) {
        this.departamentos[i].propietarios = this.departamentos[i].propietarios.replace("Dueños:", "Prop.:")
      }
      deptosModif.push(this.departamentos[i])
    }
    return deptosModif
  },
  //Consignas Clase
  //A
  //   Agregar un método que permita alquilar un departamento. 
  // Este método recibe por parámetro el id del departamento y actualiza la propiedad del departamento en false.
  // Resultado esperado: que quede actualizada la propiedad de departamentos de la inmobiliaria, donde el departamento que alquilo no está disponible.


}

/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]);

console.log(v, "\n" + oo + "   B. listarDepartamentos");
// Ejecución aquí
inmobiliaria.listarDepartamentos(inmobiliaria.departamentos)
console.log(o);

console.log(v, oo + "   C. departamentosDisponibles");
// Ejecución aquí
inmobiliaria.listarDepartamentos(inmobiliaria.departamentosDisponibles())
console.log(o);

console.log(v, oo + " D. buscarPorId");
// Ejecución aquí
console.log(inmobiliaria.buscarPorId(1))
console.log(o);

console.log(v, oo + "  E. buscarPorPrecio");
// Ejecución aquí
console.log(inmobiliaria.buscarPorPrecio(1597.2))
console.log(o);

console.log(v, oo + " F. precioConImpuesto");
// Ejecución aquí
console.log(o);

console.log(v, oo + " G. simplificarPropietarios");
// Ejecución aquí
console.log(inmobiliaria.simplificarPropietarios())
console.log(o);
