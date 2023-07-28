import 'dotenv/config';
import { PLANS } from '../constant/shopify';
import { TPlanConfig } from '../contract/shopify';

export const planConfig: TPlanConfig = {
    [PLANS.FREE]: {
        level: 1,
        title: 'Free',
        price: 0,
        quota: {
            product: {
                item_limit: 1,
                loyalty_bonus: 1,
            },
        },
    },
    [PLANS.ESSENTIAL]: {
        level: 2,
        title: 'Essential',
        price: 15,
        quota: {
            product: {
                item_limit: 10,
                loyalty_bonus: 10,
            },
        },
    },
    [PLANS.PREMIUM]: {
        level: 3,
        title: 'Premium',
        price: 49,
        quota: {
            product: {
                item_limit: 100,
                loyalty_bonus: 100,
            },
        },
    },
} as const;
