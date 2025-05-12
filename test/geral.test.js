let app = require('../src/app');
let supertest = require("supertest");
let request = supertest(app);

test("A aplicação deve responder na porta 3000", () => {
    return request.get("/").then(res => expect(res.statusCode).toEqual(200));
});

test("Deve retornar vermelho como cor favorita", () => {

    return request.get("/cor/usuario1").then(res => {
        expect(res.statusCode).toEqual(200)
        expect(res.body.cor).toEqual("vermelho")
        expect(res.body.color).toEqual("red")
    })
});