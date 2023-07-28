import { Module } from '@nestjs/common';
import { ShopController } from './shop.controller';
import { ShopService } from './shop.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shop } from './entities/shop.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [TypeOrmModule.forFeature([Shop]), ConfigModule] /* use this line to able inject repository */,
    controllers: [ShopController],
    providers: [ShopService],
})
export class ShopModule {}
