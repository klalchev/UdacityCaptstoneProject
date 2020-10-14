import { getWeatherDemo } from "../src/client/js/app"
const fetch = require('node-fetch') //Since jest run on node environment which does not have fetch API like in a browser, it is producing referenceError. To fix this I used node-fetch module to require fetch in app.js (check the updated answer)

test('testing sidet data', () => {
    expect(getWeatherDemo('/test')).resolves.toBe({
        'title':'neutral',
        'message':'this is a message',
        'time': 'now'
      })
})