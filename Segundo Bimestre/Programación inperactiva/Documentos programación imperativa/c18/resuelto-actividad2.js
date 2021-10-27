const esp = (nombre) => console.log(`hola ${nombre}, ¿cómo estás hoy?`);
const eng = (name) => console.log("hi " + name + ", how are you today? ");
const br = (param) => console.log(`oi ${param}, como você está hoje?`);

function saludar(nombre, callback) {
  callback(nombre);
}

let nombre = "Eze";

saludar(nombre, esp);
saludar(nombre, eng);
saludar(nombre, br);
saludar(nombre, (param) =>
  console.log(`Hallo ${param}, wie geht es dir heute? `)
);
