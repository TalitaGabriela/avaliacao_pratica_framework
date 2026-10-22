import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { FilmesModule } from './filmes/filmes.module.js';
import { IdGeneratorService } from './common/id-generator/id-generator.service.js';

@Module({
  imports: [FilmesModule],
  controllers: [AppController],
  providers: [AppService, IdGeneratorService],
})
export class AppModule {}
