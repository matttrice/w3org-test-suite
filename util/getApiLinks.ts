import { apiLinks } from './type/apiLinks'

/**
 * Accepts a list of web pages and returns an array of objects
 * containing the url of each link found on each web page
 * @param pages 
 * @returns 
 */
export async function getApiLinks(pages: Array<{ name: string, url: string }>): Promise<apiLinks[]> {

    const pageWrapper : Array<apiLinks> = []

    for (let i = 0; i < pages.length; i++) {
        const foundLinks = await requestLinks(pages[i].url)
        pageWrapper.push({ ...pages[i], links: foundLinks, count: foundLinks.length })
    }
    return pageWrapper
}

/**
 * Accpets a single url and requests the html and processes the response
 * @param url 
 * @returns 
 */
async function requestLinks(url: string): Promise<string[]> {
    const axios = require('axios')

    let page = null
    try {
        // validateStatusFalse because we still want the returned page data for 404
        page = await axios.get(url, { validateStatus: false })
        return convertDomToLinks(page, url)
    } catch (err) {
        console.log({ name : err.name, error: err.message, url: url } )
    }
}

/**
 * Traverses and html response to select and return all anchor links
 * @param page 
 * @param url 
 * @returns 
 */
function convertDomToLinks(page, url): string[] {
    
    const links: Array<string>  = []
    const jsdom = require("jsdom")
    const { JSDOM } = jsdom

    // const dom = new JSDOM(res.data) // this does not filter out css links
    const dom = new JSDOM(page.data, { url: url })
    const anchors = [...dom.window.document.querySelectorAll('a')]
    
    // extract href to list for later use 
    // @todo use in specs with gleb's cypress-each plugin 
    for (const url of anchors) {
        //console.log(a.href)
        if (url.href)
            links.push(url.href)
    }
    return links
}