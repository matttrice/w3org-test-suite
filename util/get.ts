const axios = require('axios')
/**
 * Accpets a single url and requests the html and processes the response
 * @param url
 */
export async function get(url: string): Promise<string[]> {
    try {
        // validateStatusFalse because we still want the returned page data for 404
        return await axios.get(url, { validateStatus: false })
    } catch (err) {
        console.log({ name: err.name, error: err.message, url: url })
    }
}
