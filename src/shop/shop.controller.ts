import { Controller, Get } from '@nestjs/common';
import { ShopService } from './shop.service';

@Controller('api/shops')
export class ShopController {
    constructor(private readonly shopService: ShopService) {}
    @Get()
    findAll() {
        return this.shopService.findAll();
    }
}
