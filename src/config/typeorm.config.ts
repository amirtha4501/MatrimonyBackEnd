import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: 5432,
    username: process.env.DB_USERNAME || 'ammu',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'matrimony',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true
};