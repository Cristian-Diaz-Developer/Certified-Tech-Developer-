    const boldButton = document.getElementById('boldButton');
    const removeBoldButton = document.getElementById('removeBoldButton');
    const text = document.getElementById('text');

    // boldButton.addEventListener('click', function () {
    //     text.classList.add('bold');
    // });

    // removeBoldButton.addEventListener('click', function () {
    //     text.classList.remove('bold');
    // });

    // boldButton.addEventListener('click', function () {
    //   if (text.classList.contains('bold')) {
    //     text.classList.remove('bold');
    //   } else {
    //     text.classList.add('bold');
    //   }
    // });

    boldButton.addEventListener('click', function () {
      text.classList.toggle('bold');
    });

    const redButton = document.getElementById('redButton');
    const removeRedButton = document.getElementById('removeRedButton');

    redButton.addEventListener('click', function () {
        text.classList.add('rojo');
    });

    removeRedButton.addEventListener('click', function () {
        text.classList.remove('rojo');
    });

    const imag = document.getElementById('imagen');
    const imgButton = document.getElementById('imgButton');

    imgButton.addEventListener('click', function () {
        imag.classList.toggle('imag');
    });

    const verdanaButton = document.getElementById('verdanaButton');

    verdanaButton.addEventListener('click', function () {
      if (text.classList.contains('verdana')) {
        text.classList.remove('verdana');
      } else {
        text.classList.add('verdana');
      }
    });





















































    // const redButton = document.getElementById('redButton');
    // const removeRedButton = document.getElementById('removeRedButton');

    // redButton.addEventListener('click', function () {
    //     text.classList.add('rojo');
    // });
    
    // removeRedButton.addEventListener('click', function () {
    //     text.classList.remove('rojo');
    // });

    // const imagButton = document.getElementById('imagButton');
    // const imag = document.getElementById('imagen');

    // imagButton.addEventListener('click', function () {
    //     imag.classList.toggle('imag');
    // });

    // const verdanaButton = document.getElementById('verdanaButton');

    // verdanaButton.addEventListener('click', function () {
    //   if (text.classList.contains('verdana')) {
    //     text.classList.remove('verdana');
    //   } else {
    //     text.classList.add('verdana');
    //   }
    // });