let mascota = {
  nombre :  "Cristian" ,
  edad : 0,
  energiaVital: 70,
  hambre : 50, 
  cansancio: 50,
  duracionVida: Date.now(),
  mostrarEstado: function () {
    console.log(`Nombre: ${this.nombre} Edad: ${this.edad} Hambre: ${this.hambre} Energía: ${this.energiaVital}`);
  },
 vivir: function () {
   this.edad += 1
   this.energiaVital -=30
   this.hambre +=15
 } ,
sigueConVida: function () {
  return this.energiaVital > 0 && this.hambre < 80 && this.hambre >= 0  
},
comer: function () {
  this.hambre -= 10
  this.energiaVital += 20  
},
correr : function () {
  this.energiaVital -= 20
  this.hambre += 20   
  this.cansancio +=20
},
dormir: function () {
  this.cansancio -= 30
  this.energiaVital += 15
  this.hambre -=10
}
}
// mascota.mostrarEstado()
// mascota.vivir()
// mascota.mostrarEstado()
// mascota.vivir()

do {
    mascota.edad +=1;
} while (mascota.energiaVital > 0){
  mascota.mostrarEstado()
};