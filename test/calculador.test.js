let app = require ("../app");

describe("Operações basicas", () => {

    test("Deve retornar o valor 10 ao somar 5 + 5", () => {
        let resultado = app.soma(5,5);
        expect(resultado).toEqual(10); // ou toBeGreaterThanOrEqual(9)
    })

    test("Deve rettornar o valor 10 ao multiplicar o valor 2*5", () => {
        let resultado = app.mult(2,5);
        expect(resultado).toEqual(10);
    })
})