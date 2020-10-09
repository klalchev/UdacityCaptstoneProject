import { restCountries } from "../src/client/js/app"

test('testing sidet data', () => {
    expect(restCountries('https://restcountries.eu/rest/v2/name/Bulgaria')).resolves.toBe([{
        'name':'Bulgaria',
        'alpha2Code':'BG',
        'capital': 'Sofia'
        // "text":"John is a very good football player",
        // "subjectivity_confidence":0.5427156021389409
    }])
})