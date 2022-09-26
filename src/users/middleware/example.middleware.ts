import { Injectable, NestMiddleware, HttpException, HttpStatus } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('example');
    console.log(!req.body);
    if (!req.body == false) {
      // const error = new Error();
      // error.message = 'No Data'
      // throw error

      throw new HttpException("No Data", HttpStatus.BAD_GATEWAY);
    } else {
      next();
    }
  }
}
