import { Module } from '@nestjs/common';
import { ShopifyAuthController } from './shopify-auth.controller';
import { ShopAuthService } from './shopify-auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shop } from '@/shop/entities/shop.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Shop])] /* use this line to able inject repository */,
    controllers: [ShopifyAuthController],
    providers: [ShopAuthService],
})
export class ShopifyAuthModule {}
