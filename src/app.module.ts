import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ShopModule } from './shop/shop.module';
import { ProductModule } from './product/product.module';
import { Shop } from './shop/entities/shop.entity';
import { ShopifyAuthModule } from './shopify-auth/shopify-auth.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'default',
            password: 'secret',
            database: 'nestjs',
            entities: [Shop],
            // migrations: ['src/migrations/Shop.ts'],
            migrationsTableName: 'migrations',
            synchronize: false /* absolutely do not change this config to true */,
        }),
        ShopModule,
        ProductModule,
        ShopifyAuthModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    constructor(private dataSource: DataSource) {}
}
