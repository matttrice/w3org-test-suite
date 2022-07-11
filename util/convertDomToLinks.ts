/**
 * Traverses an html response to select and return all anchor links
 * @param page
 * @param url
 * @returns
 */
export function convertDomToLinks(page, url): string[] {

    const links: Array<string> = []
    const jsdom = require('jsdom')
    const { JSDOM } = jsdom

    // const dom = new JSDOM(res.data) // this does not filter out css links
    const dom = new JSDOM(page.data, { url: url })
    const anchors = [...dom.window.document.querySelectorAll('a:not([href*="mailto:"])')]

    // extract href to list for later use in specs with gleb's cypress-each plugin 
    for (const url of anchors) {
        //console.log(a.href)
        if (url.href)
            links.push(url.href)
    }
    return links
}
