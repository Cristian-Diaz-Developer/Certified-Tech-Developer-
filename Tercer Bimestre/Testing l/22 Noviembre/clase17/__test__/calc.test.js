// const { expect } = require("@jest/globals")

//const { expect } = require("@jest/globals");

const {suma, resta, multiplicacion, division} =require('../calc.js');

describe ('prueba de sumas',()=>{
    test('Suma de dos numeros', () => {
        expect(suma(1,2)).toBe(3);
    });
    
    // test ('Suma de 0', () =>{
    //     expect(suma(0,0)).toBe(0)
    // });

    // test ('Suma de Valores Nulos', () =>{
    //     expect(suma(null,null)).toBe(0)
    // }); 

    // test ('Suma de Texto', () =>{
    //     expect(suma('a','b')).toBe(0)
    // }); 

})
// describe ('prueba de restas',()=>{
//     test('Resta de dos numeros positivos', () => {
//         expect(suma(15,2)).toBe(13);
//     });
    
//     test ('Resta de dos numeros negativos', () =>{
//         expect(suma(-1,-3)).toBe(-4)
//     });

//     test ('Resta de dos nulos', () =>{
//         expect(suma(null,null)).toBe(0)
//     }); 

//     test ('Resta de Texto', () =>{
//         expect(suma('a','b')).toBe(0)
//     }); 

// })
