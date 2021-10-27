// Link consigna: https://docs.google.com/document/d/1V0GAgZfDsq4cT5jmvnLOlS9Eo-bF_WPwKJnYtZPXi10/edit# 
// Equipo 8: Jose Fernando Horta | Adriana Rodriguez | Elias Vasquez | Geovani Carvajal | Alex Ovalle | Cecilia Hansen

//Agregá caminos 
let edad = 21

function esImpar(edad) {
    if (edad % 2 == 0) {
        return "¿Sabías que tu edad es impar?"
    }
    else {
        return "¿Sabías que tu edad es par?";
    }
}


if (edad < 0) {
    console.log("Error, edad inválida. Por favor ingrese un número válido.")
} else {
    if (edad < 18) {
        console.log("No puede pasar al bar.")
        console.log(esImpar(edad))
    }
    else if (edad < 21) {
        console.log("Puede pasar al bar, pero no puede tomar alcohol.")
        console.log(esImpar(edad))
    }
    else {
        if (edad === 21) {
            console.log("Felicitaciones por haber llegado a la mayoría de edad");
        }
        console.log("Puede pasar al bar y tomar alcohol.")
        console.log(esImpar(edad))
    }
}

//TOTAL-A-PAGAR

function totalAPagar(vehiculo, litrosConsumidos) {
    let total = 0
    let precioPorLitro
    switch (vehiculo) {
        case "coche":
            precioPorLitro = 86
            break
        case "moto":
            precioPorLitro = 70
            break
        case "autobus":
            precioPorLitro = 55
            break
    }
    if (litrosConsumidos > 0 && litrosConsumidos < 25) {
        total = total + 50
    } else if (litrosConsumidos > 25) {
        total = total + 25
    }
    total = total + litrosConsumidos * precioPorLitro
    return total
}
console.log(totalAPagar("moto", 1)); // deberia retornar 120

//local de sandwiches

function precioSandwich(base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) {
    let total = 0
    switch (base) {
        case "pollo":
            total = total + 150
            break
        case "carne":
            total = total + 200
            break
        case "veggie":
            total = total + 100
    }
    switch (pan) {
        case "blanco":
            total = total + 50
            break
        case "negro":
            total = total + 60
            break
        case "s/gluten":
            total = total + 75
            break
    }
    if (queso) {
        total = total + 20
    }
    if (tomate) {
        total = total + 15
    }
    if (lechuga) {
        total = total + 10
    }
    if (cebolla) {
        total = total + 15
    }
    if (mayonesa) {
        total = total + 5
    }
    if (mostaza) {
        total = total + 5
    }
    return total
}

console.log(precioSandwich("veggie", "negro", true, false, true, false, true, true)); //deberia retornar 200


//numero secreto
function numSecreto(num) {
    let random = Math.floor(Math.random() * (10 - 1)) + 1
    if (num === random) {
        return "Felicitaciones encontraste el número secreto"
    } else {
        return `La próxima tendrás más suerte, tu número ingresado fue ${num} y el número secreto era ${random} `
    }
}

console.log(numSecreto(5));

//paracaidas
function abrirParacaidas(velocidad, altura) {
    if (velocidad < 1000 && (altura >= 2000 && altura < 3000)) {
        return true
    } else {
        return false
    }
}

//Traductor condicional
function traductor(palabra) {
    switch (palabra) {
        case "casa":
            return "home";
        case "perro":
            return "dog";
        case "pelota":
            return "ball";
        case "árbol":
            return "tree";
        case "genio":
            return "genius";
        default:
            return "La palabra ingresada es incorrecta";
    }
}


console.log(traductor("pelota"));

//Valoración de películas

function valoracionPelicula(valor) {
    switch (valor) {
        case "muy mala":
            console.log("Calificaste la película como Muy Mala. Lo lamentamos mucho.");
            break
        case "mala":
            console.log("Calificaste la película como Mala. Lo lamentamos mucho.");
            break
        case "mediocre":
            console.log("Calificaste la película como Mediocre. La próxima seguro te gusta");
            break
        case "buena":
            console.log("Calificaste la película como Buena. Gracias!");
            break
        case "muy buena":
            console.log("Calificaste la película como Muy Buena. Muchas gracias!!!.");
            break
        default:
            console.log("Ingresaste un valor inválido");
    }
    return "Gracias por su visita"
}

console.log(valoracionPelicula("muy mala"));


