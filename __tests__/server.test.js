
const supertest = require('supertest');
const app = require('../server.js');

const request = supertest(app);

describe('Testing the server app object', () => {
  test('Should respond with the sum of 2 numbers', async () => {
    let response = await request.get('/addition?number1=2&number2=3');
    expect(response.status).toEqual(200);
    expect(response.body.value).toEqual(5);
  });
});