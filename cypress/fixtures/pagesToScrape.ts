import { scrapePage } from './type/scrapePage'

/**
 * List of pages to scrape and friendly name
 */
export const pages :Array<scrapePage> = [
    { name: 'badpage' , url: 'https://www.w3.org/standards/badpage',
      code: 404    
    },
    { name: 'multimodal', url: 'https://www.w3.org/standards/webofdevices/multimodal',
      code: 200
    },
    { name: 'htmlcss', url: 'https://www.w3.org/standards/webdesign/htmlcss',
      code: 200
    }
    ]