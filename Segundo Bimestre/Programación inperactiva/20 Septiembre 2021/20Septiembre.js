// let numeros1  = [2,4,6];
// let elDoble = numeros1.map(function (Unnumero){
//     return Unnumero*2;
// });
// console.log(elDoble);


// let numeros = [5,7,16];
// let resultado = numeros.reduce(function(acumulador, numero){
//     return  acumulador + numero ;
// });
// console.log(resultado);

// let paises  = ["Argentina", "Brasil", "Colombia"]
// paises.forEach(function (unpais){
//     console.log(unpais);
// });
let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]
let aprobados = estudiantes.filter(function(aprobado)
{    
    return aprobado.promedio >= 7
})

let desaprobados = estudiantes.filter(function(desaprobado)
{    
    return desaprobado.promedio < 7
})
