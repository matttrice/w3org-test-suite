import { getApiLinks } from './getApiLinks'

const urls = 'https://www.w3.org/standards/webdesign/htmlcss'

test('gets links from url', () => {
    getApiLinks(urls).then(data => {
        expect(data).to.be.an('array')
    })
})