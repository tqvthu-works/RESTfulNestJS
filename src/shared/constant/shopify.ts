export const GRAPHQL_RESOURCE_KEY = {
    PRODUCT: 'Product',
    COLLECTION: 'Collection',
} as const;

export const GRAPHQL_QUERY_RESOURCE_KEY = {
    PRODUCTS: 'products',
} as const;

export const PLANS = {
    FREE: 'free',
    ESSENTIAL: 'essential',
    PREMIUM: 'premium',
} as const;

export const SUBSCRIPTION = {
    EVERY_30_DAYS_INTERVAL: 'every_30_days',
} as const;

export enum EShopifyResource {
    PRODUCT = 'product',
    // BLOG = 'blog',
    // ARTICLE = 'article',
    // PAGE = 'page',
}

export const TAG = {
    GENERATED: 'aicg_is_generated',
} as const;
