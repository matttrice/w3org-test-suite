import { pages } from '../cypress/fixtures/scrapePages'
import { getApiLinks } from './getApiLinks'

test('gets links from url', () => {
    getApiLinks(pages).then(data => {
        //console.log(data)
        expect(data.length).toBeGreaterThan(0)
    })
})