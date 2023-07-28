export interface IShopifyProduct {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    is_generated?: boolean;
    status: string;
    inventory: string;
    created_at: Date;
}
