function writeHTML(title, text) {
    const body = document.getElementById("body");
    const template = `
    <h1>Hola! ${title}</h1>
    <p>WOW ${text}</p>
    `;
    body.innerHTML += template;
}

writeHTML('Estamos insertando elementos HTML a traves de Javascript', 'Cuanto dinamismo!');