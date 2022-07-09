/**
 * Converts response of provided url to a list of links
 * @param url
 */
export function getApiLinks(url : string) {

    const jsdom = require("jsdom")
    const { JSDOM } = jsdom
    const axios = require('axios')

    const linkObject: string[] = []
    // @todo accept list of urls
    // @todo ignore or convert relative ../
    // @todo ignore internal page refs #
    axios
        .get(url)
        .then(res => {
            console.log(`statusCode: ${res.status}`)
            const dom = new JSDOM(res.data)

            const links = [...dom.window.document.querySelectorAll('a')]
            
            // extract href to list for later use 
            // @todo use in specs with gleb's cypress-each plugin 
            links.forEach(a => {
                console.log(a.href)
                linkObject.push(a.href)
            })
            return linkObject
        })
        .catch(error => {
            console.error(error)
        })
}