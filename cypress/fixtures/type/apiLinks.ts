import { scrapePage } from './scrapePage'
/**
 * Defines processed list of scraped links used in preprocess to
 * load to cypress environment before tests run 
 */
export interface apiLinks
    extends scrapePage {
        links?: Array<string>
        count?: number
}
