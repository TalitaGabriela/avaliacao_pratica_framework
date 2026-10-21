import { Module } from '@nestjs/common';
import { FilmesService } from './filmes.service.js';
import { FilmesController } from './filmes.controller.js';

@Module({
  controllers: [FilmesController],
  providers: [FilmesService],
})
export class FilmesModule {}
