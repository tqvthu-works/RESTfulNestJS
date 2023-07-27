import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ShopModule } from './shop/shop.module';
import { ProductModule } from './product/product.module';
import { RouterModule } from '@nestjs/core';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'nestjs',
            entities: [],
            synchronize: true,
        }),
        ShopModule,
        ProductModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
@Module({
    imports: [TypeOrmModule.forRoot(), ShopModule],
})
export class AppModule {
    constructor(private dataSource: DataSource) {}
}
