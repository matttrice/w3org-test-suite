import { scrapePage } from './type/scrapePage';

/**
 * List of pages to scrape and friendly name
 */
export const pages :Array<scrapePage> = [
    { name: 'badpage' , url: 'https://www.w3.org/standards/badpage' },
    { name: 'multimodal', url: 'https://www.w3.org/standards/webofdevices/multimodal' },
    { name: 'htlmcss', url: 'https://www.w3.org/standards/webdesign/htmlcss'}
    ]