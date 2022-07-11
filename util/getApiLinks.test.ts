import { pages } from '../cypress/fixtures/pagesToScrape'
import { apiLinks } from '../cypress/fixtures/type/apiLinks'
import { getApiLinks } from './getApiLinks'

test('gets links from url', () => {
    return getApiLinks(pages).then(data => {
        
        // ensure config matches expectations
        expect(data).toHaveLength(3)
        expect(data instanceof Array<apiLinks> ? true : false).toBe(true)

    })
})