import { PLANS, GRAPHQL_RESOURCE_KEY, GRAPHQL_QUERY_RESOURCE_KEY, EShopifyResource } from '@/shared/constant/shopify';

export type IGraphQLResourceKey = (typeof GRAPHQL_RESOURCE_KEY)[keyof typeof GRAPHQL_RESOURCE_KEY];
export type IGraphQueryResourceKey = (typeof GRAPHQL_QUERY_RESOURCE_KEY)[keyof typeof GRAPHQL_QUERY_RESOURCE_KEY];
export type TPlanKey = (typeof PLANS)[keyof typeof PLANS];
export type TPlanConfig = {
    [key in TPlanKey]: {
        level: number;
        title: string;
        price: number;
        quota: {
            [resource in EShopifyResource]?: {
                item_limit: number;
                loyalty_bonus: number;
            };
        };
    };
};
