const app = require('./server.js')

// designates what port the app server will listen to for incoming requests
app.listen(4040, function () {
    console.log('Example app listening on port 4040!')
})