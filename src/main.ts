import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // if u want to add any middleware u must add it here
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
