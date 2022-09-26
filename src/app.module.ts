import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemController } from './item/item.controller';
import { ItemService } from './item/item.service';
import { ItemModule } from './item/item.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ExampleMiddleware } from './users/middleware/example.middleware';
import { People } from './typeORM/entities/people.entity';
import { PeopleModule } from './people/people.module';
import { Profile } from './typeORM/entities/profile.entity';

import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // ItemModule,
    // UsersModule,
    PeopleModule,
    ConfigModule.forRoot({
      // load: [configuration],
      // isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST,
      port: +process.env.PORT,
      username: process.env.USER_NAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [People, Profile],
      synchronize: true,
      autoLoadEntities: true,
    })],
  controllers: [AppController],
  // controllers: [AppController, ItemController],
  providers: [AppService],
  // providers: [AppService, ItemService],
})
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    // console.log('beso');
    // console.log(process.env.TYPE);
    // console.log(process.env.HOST);
    // console.log(process.env.PORT);
    // console.log(process.env.USER_NAME);
    // console.log(process.env.PASSWORD);
    // console.log(process.env.DATABASE);
    // consumer.apply(ExampleMiddleware).forRoutes('*')

    // throw new Error('Method not implemented.');
  }
}
