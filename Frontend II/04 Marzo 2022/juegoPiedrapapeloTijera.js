//1 Es tijera - 2 Es Papel - 3 Es Piedra

let eleccion = parseInt(prompt("Selecciones un movimiento 1 Es tijera - 2 Es Papel - 3 Es Piedra"));

let rand = parseInt((Math.random()*3+1));

if (isNan (eleccion)){


}else{
    if (eleccion < 1 && eleccion > 3){
        alert("El valor ingresado no el valido")
    }
        if(eleccion == rand){
            console.log("Empate");
        }
        if(eleccion == 1 && rand ==2){
            console.log("Ganaste");
        }
        if(eleccion == 1 && rand ==3){
            console.log("Perdiste");
        }
    
        if(eleccion == 2 && rand ==1){
            console.log("Perdiste");
        }
       
        if(eleccion == 2 && rand ==3){
            console.log("Ganaste");
        }
    
        if(eleccion == 3 && rand ==1){
            console.log("Ganaste");
        }
        
        if(eleccion == 3 && rand ==2){
            console.log("Perdiste");
        }
    } 
        
    
