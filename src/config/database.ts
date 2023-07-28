import { DataSource, DataSourceOptions } from "typeorm";
// import { Shop } from "@/models/Shop";
import { Shop } from "@/shop/entities/shop.entity";
import { flatten } from "@nestjs/common";
export const databaseConfig: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'default',
    password: 'secret',
    database: 'nestjs',
    entities: [
        "src/shop/entities/*ts"
    ],
    migrations: ['src/migrations/*.ts'],
    migrationsTableName: 'migrations',
    synchronize: false,
    
};


export default new DataSource(databaseConfig)