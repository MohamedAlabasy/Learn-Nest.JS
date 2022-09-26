import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemController } from './item/item.controller';
import { ItemService } from './item/item.service';
import { ItemModule } from './item/item.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ExampleMiddleware } from './users/middleware/example.middleware';


@Module({
  imports: [
    // ItemModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'testss',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  // controllers: [AppController, ItemController],
  providers: [AppService],
  // providers: [AppService, ItemService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(ExampleMiddleware).forRoutes('*')

    // throw new Error('Method not implemented.');
  }
}
