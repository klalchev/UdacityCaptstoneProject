const app = require('../src/server/server.js') //Link to the server file
const fetch = require('node-fetch') //Since jest run on node environment which does not have fetch API like in a browser, it is producing referenceError. To fix this I used node-fetch module to require fetch in app.js (check the updated answer)
const supertest = require ('supertest')
const request = supertest(app)

it('Testing /all endpoint', async done => {
    const response = await request.get('/all') //To send a GET request to /all, you use the .get method from Supertest

    expect(response.status).toBe(200) //check if HTTP status request was successful
    expect(response.body).toBeDefined(); //check if response body returned value of projectData
    done()
})

/*
once you require superset as above, you get the ability to send GET, POST, PUT, PATCH and DELETE requests
Supertest gives you a response from the endpoint. You can test both HTTP status and the body of the response,
whatever you send through res.json
However, Jest does not cleanly exit after doing the tests. This can create a problem in a CI/CD environment where you expect the tests to exit when done. Please fix this.
The simplest way of doing this is to split server side code into 2 files: one that sets up the endpoints and another one that starts the server. Then test only the file that sets the endpoints
https://zellwk.com/blog/endpoint-testing/
*/