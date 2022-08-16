//#####¿Qué devuelve cada Expresión? Pt1

//1
!true //→ DEVUELVE FALSE

//2
!false //→ DEVUELVE TRUE

//3
!!false //→ DEVUELVE FALSE

//4
!!true //→ DEVUELVE TRUE

//5
!1 //→ DEVUELVE FALSE

//6
!!1 //→ DEVUELVE TRUE

//7
!0 //→ DEVUELVE TRUE

//8
!!0 //→ DEVUELVE FALSE

//9
!!"" //→ DEVUELVE FALSE

//10
let x = 5;
let y = 9;

//10-A
(x < 10 && x !== 5)  //→ DEVUELVE FALSE


//10-B
//false-or-true
x > 9 || x === 5 //→ DEVUELVE TRUE


//10-C
// !(FALSE)
!(x === y) //→ DEVUELVE TRUE

//#####¿Qué devuelve cada Expresión? Pt2

//1
let x = 10
let y = "a"
y === "b" || x >= 10 //→ DEVUELVE TRUE

//2
let x = 3
let y = 8
//TRUE-----OR--FALSE-------FALSE---AND--TRUE
// !(TRUE)----------------- !(FALSE)
// FALSE--------------AND----TRUE
//FALSE
!(x == "3" || x === y) && !(y !== 8 && x <= y) //→ DEVUELVE FALSE

//3
let str = ""
let msj = "jaja!"
let esGracioso = "false"

//(false--true)--and--true
// ! ((true)----AND--true)
// ! (TRUE)
// FALSE
!((str || msj) && esGracioso) //→ DEVUELVE FALSE

//Code
//Crear el código JS que exprese los siguientes enunciados

//1-Para subir a una montaña rusa la edad debe ser mayor a 12 años 
//y la altura debe ser mayor a 1,30 m.

function montaniaRusa(edad, altura) {
    return edad > 12 && altura > 1.3
}

//2-Si no hay suficiente luz o el objeto se mueve rápidamente, 
//la cámara de fotos debe usar el flash.

function flash(luz, rapidez) {
    return !luz || !rapidez
}

//3-Un estudiante pasa de nivel si su nota es mayor a 7 en sus dos evaluaciones 
//parciales, o si obtiene un 4 en el examen final. 

function pasarNivel(parcial1, parcial2, examenFinal) {
    return parcial1 > 7 && parcial2 > 7 || examenFinal === 4
}

//4-Dejamos ver la TV a nuestro hijo si realizó la tarea pero además, 
//si tocó sus prácticas de piano y lo hizo de memoria.

function verTv(tarea, piano, memoria) {
    return tarea && piano && memoria
}