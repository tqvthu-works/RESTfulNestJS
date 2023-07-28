import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';

export let app: INestApplication;
async function bootstrap() {
    app = await NestFactory.create(AppModule);

    await app.listen(3000);
}
bootstrap();

/* import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
class User extends BaseEntity {
  static readonly COND =2
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  firstName: string;

  @Column({ length: 100, nullable: true })
  lastName: string | null;

  @Column({ nullable: true })
  age: number | null;
}
User.find({where: {age: User.COND}}) */
