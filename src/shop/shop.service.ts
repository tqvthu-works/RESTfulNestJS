import { Injectable } from '@nestjs/common';
import { Shop } from './interfaces/shop.interface';

@Injectable()
export class ShopService {
  private readonly shops: Shop[] = [];

  create(shop: Shop) {
    this.shops.push(shop);
  }

  findAll(): Shop[] {
    return this.shops;
  }
}