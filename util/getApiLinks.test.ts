import { getApiLinks } from './getApiLinks'

const urls = 'https://www.w3.org/standards/webdesign/htmlcss'

test('gets links from url', () => {
    getApiLinks(urls).then(data => {
        //console.log(data)
        expect(data.length).toBeGreaterThan(0)
    })
})