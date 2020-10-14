import { restCountries } from "../src/client/js/app"
const fetch = require('node-fetch') //Since jest run on node environment which does not have fetch API like in a browser, it is producing referenceError. To fix this I used node-fetch module to require fetch in app.js (check the updated answer)

test('testing sidet data', () => {
    let countryData = {country: 'Bulgaria'};
    expect(restCountries(countryData)).resolves.toHaveProperty('name','Bulgaria')
    });

//Your test gives the full restCountries URL to the restCountries function, while it only expects an object with a 'country' key. Once you match up the arguments, it seems to pass.