import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //definição do middleware
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, //permite converter os dados
      whitelist: true // remove dados que não estão no DTO
    }),
  )
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
