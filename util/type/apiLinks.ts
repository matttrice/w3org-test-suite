/**
 * Defines processed list of scraped links used in preprocess to
 * load to cypress environment before tests run 
 */
export type apiLinks = { 
        name: string; 
        url: string; 
        links: Array<string>; 
        count: number; 
    }
