const request = require('supertest');
const server = require('../api/server');

it("should set db environment to testing", function () {
    expect(process.env.DB_ENV).toBe("test");
});

describe('successful registration process', () => {
    it('status code should be 201', async () => {
        const res = await request(server).post('/api/auth/register')
            .send({
                "first_name": "John",
                "last_name": "Smith",
                "username": "appleman",
                "email": "johnsmith@medcab.com",
                "password": "apple420"
            })
        expect(res.statusCode).toEqual(201);
    });

    it('response should be in JSON', async () => {
        const res = await request(server).post('/api/auth/register')
            .send({
                "first_name": "John",
                "last_name": "Smith",
                "username": "appleman",
                "email": "johnsmith@medcab.com",
                "password": "apple420"
            })
        expect(res.type).toMatch(/json/i);
    });
});

describe('when users successfully login', () => {
    it('status code should be 200', async () => {
        const res = await request(server).post('/api/auth/login')
            .send({
                "username": "appleman",
                "password": "apple420"
            })
        expect(res.statusCode).toEqual(200);
    });

    it('response should be in JSON format', async () => {
        const res = await request(server).post('/api/auth/login')
            .send({
                "username": "appleman",
                "password": "apple420"
            })
        expect(res.type).toMatch(/json/i);
    });
});