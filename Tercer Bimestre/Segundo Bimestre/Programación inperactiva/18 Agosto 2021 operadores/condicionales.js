// let numero1 = 5;
// let numero2 = 8;
 
// if(numero1 < numero2) {
//   console.log("numero1 no es mayor que numero2");
// }
// if(numero2 > 0) {
//   console.log("numero2 es positivo");
// }
// if(numero1 < 0 && numero1 !== 0) {
//   console.log("numero1 es negativo o distinto de cero");
// }
// if(numero1++ < numero2 || numero1++ == numero2 ) {
//   console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
// }



function setWeather() {
  let choice = select.value;

  switch (choice) {
    case 'sunny':
      para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      break;
    case 'rainy':
      para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
      break;
    case 'snowing':
      para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast':
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      para.textContent = '';
  }
}