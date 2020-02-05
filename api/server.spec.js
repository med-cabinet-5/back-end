const request = require('supertest');
const server = require('./server');

describe('server.js', () => {

    describe('index route', () => {
        it('Successful OK status code from the index route.', async () => {
            const expectedStatusCode = 200;

            const response = await request(server).get('/');

            expect(response.status).toEqual(expectedStatusCode);

        });

        it('This should return a JSON object from the index route.', async () => {
            const expectedBody = { message: "ARJGJKSDHFKJSDHFSDHG. It's alive!!!!!!! THE API IS ONLINE." };

            const response = await request(server).get('/');

            expect(response.body).toEqual(expectedBody);
        });

        it('Index route should successfully return a JSON object.', async () => {
            const response = await request(server).get('/');

            expect(response.type).toEqual('application/json');
        });
    });
});