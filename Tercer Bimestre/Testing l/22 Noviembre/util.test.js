const {generateText, validateText, createElement } = require('../util.js')

describe('Test unitarios para generateText - Todos los escenarios', () => {
    test('Happy path - Salida con datos no vacios', () => {
        const text = generateText('Lucas', 27);
        expect(text).toBe('Lucas (27 years old)');
    }),
    test('Salida con datos vacios', () => {
        const text = generateText('', null);
        expect(text).toBe(' (null years old)');
    }), 
    test('Salida sin datos', () => {
        const text = generateText();
        expect(text).toBe('undefined (undefined years old)');
    });
})