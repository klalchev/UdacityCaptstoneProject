const app = require('../src/server/server.js') //Link to the server file
const supertest = require ('supertest')
const request = supertest(app)

it('Testing /all endpoint', async done => {
    const response = await request.get('/all') //To send a GET request to /all, you use the .get method from Supertest
    expect(response.status).toBe(200) //check if HTTP status request was successful
    expect(response.body).toBeDefined(); //check if response body returned value of projectData
    done()
})

//once you require superset as above, you get the ability to send GET, POST, PUT, PATCH and DELETE requests
 //Supertest gives you a response from the endpoint. You can test both HTTP status and the body of the response,
//whatever you send through res.json