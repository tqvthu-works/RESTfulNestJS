import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '@/shared/base.service';
import { Shop } from '@/shop/entities/shop.entity';
import { IApiResponse } from '@/shared/interfaces/common.interface';
import { Request } from 'express';
import { shopifyConfig } from '@/shared/config/shopify';
import { v4 as uuid } from 'uuid';
import { HttpStatus } from '@nestjs/common';

export class ShopAuthService extends BaseService<Shop> {
    constructor(
        @InjectRepository(Shop)
        repository: Repository<Shop>,
    ) {
        super(repository);
    }
    async install(request: Request): Promise<IApiResponse> {
        const shop = request.query.shop;
        const urlStore = `${shop as string}/admin`;
        const redirectUrl = `${shopifyConfig.api_url}/api/auth/callback`;
        const apiKey = shopifyConfig.api_key;
        const scopes = shopifyConfig.scopes.join(',');
        const state = uuid();
        const url = `https://${urlStore}/oauth/authorize?client_id=${apiKey}&scope=${scopes}&redirect_uri=${redirectUrl}&state=${state}`;
        return {
            status: true,
            data: url,
            http_code: HttpStatus.OK,
        };
    }
}
