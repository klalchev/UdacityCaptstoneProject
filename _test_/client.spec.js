import { getWeatherDemo } from "../src/client/js/app"

test('testing sidet data', () => {
    expect(getWeatherDemo('/test')).resolves.toBe({
        'title':'neutral',
        'message':'this is a message',
        'time': 'now'
        // "text":"John is a very good football player",
        // "subjectivity_confidence":0.5427156021389409
      })
})