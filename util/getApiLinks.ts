import { apiLinks } from '../cypress/fixtures/type/apiLinks'
import { scrapePage } from '../cypress/fixtures/type/scrapePage'
import { convertDomToLinks } from './convertDomToLinks'
import { get } from './get'

/**
 * Processes the main pagesToScrape list of web urls and 
 * returns an array of links found for each page.
 * Used to preprocess and store the list of links in an 
 * environment variable for later use with cypress functions
 * that require a static list
 * @param pages  
 */
export async function getApiLinks(pages: Array<scrapePage>): Promise<apiLinks[]> {

    const pageWrapper : Array<apiLinks> = []

    for (let i = 0; i < pages.length; i++) {
        const pageSource = await get(pages[i].url)
        const foundLinks = convertDomToLinks(pageSource, pages[i].url)
        pageWrapper.push({ ...pages[i], links: foundLinks, count: foundLinks.length })
    }
    return pageWrapper
}


