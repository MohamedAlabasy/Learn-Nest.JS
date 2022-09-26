import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { ExampleMiddleware } from './middleware/example.middleware';

@Module({
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        // consumer.apply(ExampleMiddleware).forRoutes('users')

        // consumer.apply(ExampleMiddleware).forRoutes(UsersController)

        // consumer.apply(ExampleMiddleware).forRoutes({
        //     path: 'users|users/*',
        //     method: RequestMethod.GET
        // })

        consumer
            .apply(ExampleMiddleware).forRoutes({
                path: 'users',
                method: RequestMethod.GET
            }, {
                path: 'users/*',
                method: RequestMethod.GET
            })
            // apply any number of middleware
            .apply(ExampleMiddleware).forRoutes({
                path: 'users',
                method: RequestMethod.GET
            }, {
                path: 'users/*',
                method: RequestMethod.GET
            })

        // .apply(ExampleMiddleware).exclude(
        // { path: 'users', method: RequestMethod.GET },
        // { path: 'users', method: RequestMethod.POST },
        // ).forRoutes(UsersController)

        // throw new Error('Method not implemented.');
    }
}
