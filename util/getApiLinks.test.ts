import { pages } from '../cypress/fixtures/scrapePages'
import { getApiLinks } from './getApiLinks'

test('gets links from url', () => {
    getApiLinks(pages).then(data => {
       for(const d of data){
            expect(d.links.length).to.be.greaterThan(0)
        }
    })
})