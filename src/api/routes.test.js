const supertest = require('supertest');
const { app } = require('../app.js');
const mockRequest = supertest(app);

describe('Routes', () => {

  it('should return Server Home', async() => {
    const response = await mockRequest.get('/')
    expect(response.text).toBe('Server Home')
    expect(response.status).toBe(200)
  })

  it('should return the content.json', async() => {
    const response = await mockRequest.get('/content')
    console.log(response.text)
    // expect(response.text).toBe('Server Home')
    expect(response.status).toBe(200)
  })

  it('should throw a 404 error', async() => {
    const response = await mockRequest.get('/turtles')
    expect(response.status).toBe(404)
  })



  xit('should throw a 500 error', async() => {
    // const response = await mockRequest.get('/turtles')
    // expect(response.status).toBe(500)
  })

})

