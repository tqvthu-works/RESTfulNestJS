import { Controller, Get } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ApiController } from '@/shared/api.controller';

@Controller('api/shops')
export class ShopController extends ApiController {
    constructor(private readonly shopService: ShopService) {
        super();
    }
    @Get()
    findAll() {
        return this.shopService.findAll();
    }
}
