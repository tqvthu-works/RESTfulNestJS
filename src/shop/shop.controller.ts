import { Controller, Get } from '@nestjs/common';

@Controller('api/shops')
export class ShopController {

  @Get()
  findAll() {
    return "All shops";
  }

}
