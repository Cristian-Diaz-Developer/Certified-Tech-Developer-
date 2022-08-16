 function esBisiesto(year) {
  if (year % 4 === 0){
  console.log("El año", year, "es bisiesto");
  } else {
    console.log("El año", year, " no es bisiesto");
  }
}
console.log(esBisiesto (2004));