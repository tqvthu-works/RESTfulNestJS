export const DATASOURCE = {
    SHOPIFY: 'shopify',
    DSERS: 'dsers',
    ALIEXPRESS: 'aliexpress',
} as const;

export const DOMAINSOURCE = {
    [DATASOURCE.SHOPIFY.toUpperCase()]: ['shopify.com', 'myshopify.com'],
    [DATASOURCE.DSERS.toUpperCase()]: ['dsers.com'],
    [DATASOURCE.ALIEXPRESS.toUpperCase()]: ['aliexpress.com'],
} as const;
