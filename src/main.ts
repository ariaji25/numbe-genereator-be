import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet'
import * as bodyParser from 'body-parser'
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());
  app.use(bodyParser.json({limit: '30mb'}));
  app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(3000);
}
bootstrap();
