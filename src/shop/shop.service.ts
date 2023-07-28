import { Injectable } from '@nestjs/common';
import { Shop } from './entities/shop.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '@/shared/base.service';

export class ShopService extends BaseService<Shop> {
    private readonly shops: Shop[] = [];
    constructor(
        @InjectRepository(Shop)
        repository: Repository<Shop>,
    ) {
        super(repository);
    }
    create(shop: Shop) {
        this.shops.push(shop);
    }

    findAll(): any {
        return '=============';
    }
}
