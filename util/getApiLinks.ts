/**
 * Converts response of provided url to a list of links
 * @param url
 */
export async function getApiLinks(pages: Array<{ name: string, url: string }>) {

    const pageWrapper : Array<{ name: string, url: string, links: Array<string> }> = []

    for (let i = 0; i < pages.length; i++) {
        const processed = await requestLinks(pages[i].url)
        pageWrapper.push({ ...pages[i], links: processed })
    }
    return pageWrapper
}

async function requestLinks(url: string) {
    const jsdom = require("jsdom")
    const { JSDOM } = jsdom
    const axios = require('axios')

    const links: string[] = []
    // @todo accept list of urls
    // @todo ignore or convert relative ../
    // @todo ignore internal page refs #
    try {
        const page = await axios.get(url)
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
    } catch (error) {
        console.log({ name:'axios', url: url, error: error.message } )
    }
    return links
}
