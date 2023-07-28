import 'dotenv/config';
import { DataSourceOptions } from 'typeorm';
export const typeormDBConfig: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'default',
    password: 'secret',
    database: 'nestjs',
    entities: ['src/shop/entities/*ts'],
    migrations: ['src/shared/migrations/*.ts'],
    migrationsTableName: 'migrations',
    synchronize: false,
};
