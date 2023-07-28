import { Module } from '@nestjs/common';
import { ShopController } from './shop.controller';
import { ShopService } from './shop.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shop } from './entities/shop.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Shop])],/* use this line to able inject repository */
    controllers: [ShopController],
    providers: [ShopService],
})
export class ShopModule {}
