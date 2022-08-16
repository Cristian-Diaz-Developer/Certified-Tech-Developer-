let x=10
let y ="a"
y==="b" || x >= 10 

let x=3
let y=8
!(x == "3" || x === y) && !(y !== 8 && x <= y) 

let str = ""
let msj = "jaja!"
let esGracioso = "false"
!((str || msj) && esGracioso) 
!true 
!false 
!!false 
!!true 
!1 
!!1 
!0 
!!0 
!!"" 
let x = 5 ;
let y = 9;
    x < 10 && x!==5 
x>9 || x===5 
!(x===y) 


// Para subir a una montaña rusa la edad debe ser mayor a 12 años y la altura debe ser mayor a 1,30 m.
function montañaRusa(edad, altura) {
  return (edad > 12 && altura > 1.30);
}
    
console.log(montañaRusa(13,1.50));

// Si no hay suficiente luz o el objeto se mueve rápidamente, la cámara de fotos debe usar el flash.
let suficienteLuz;
let movimeintoRapido;
function EncenderFlash(suficienteLuz,movimeintoRapido ) {
  return (suficienteLuz || movimeintoRapido);  
}

// Un estudiante pasa de nivel si su nota es mayor a 7 en sus dos evaluaciones parciales, o si obtiene un 4 en el examen final. 

let NotaPrimerParcial;
let NotaSegundoParcial;
let NotaExamenFinal;

function ApruebaNivel(NotaPrimerParcial, NotaSegundoParcial, NotaSegundoParcial) {
  return ((NotaPrimerParcial > 7 && NotaSegundoParcial >7) || (NotaExamenFinal >= 4));
}
console.log(ApruebaNivel(6,8,5));
// Dejamos ver la TV a nuestro hijo si realizó la tarea pero además, si tocó sus prácticas de piano y lo hizo de memoria.

function puedeVerTV(realizoTarea, practicoPiano, deMemoria) {
    return (realizoTarea && practicoPiano && deMemoria);
  } 
console.log(puedeVerTV(true, true, true));