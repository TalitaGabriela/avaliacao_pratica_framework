import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FilmesService } from './filmes.service.js';
import { CreateFilmeDto } from './dto/create-filme.dto.js';
import { UpdateFilmeDto } from './dto/update-filme.dto.js';
import { LogService } from '../common/log.service.js';
import { ParseIntPipe } from '../common/pipes/parse-int.pipe.js';
import { ValidaNotaPipe } from '../common/pipes/valida-nota.pipe.js';
import { ValidaFilmePipe } from '../common/pipes/valida-filme.pipe.js';

@Controller('filmes')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService, private readonly logService: LogService) {}

  @Post() // valida o título e a nota do filme enviado no body
  create(@Body(ValidaFilmePipe) createFilmeDto: CreateFilmeDto) {
    return this.filmesService.create(createFilmeDto);
  }

  @Get()
  findAll() {
    return this.filmesService.findAll();
  }

  @Get('logs')
  getLogs() {
    return this.logService.getLogs();
  }

  @Get('nota/:nota')
  findByNotaMinima(@Param('nota', ValidaNotaPipe) nota: number) {
    return this.filmesService.findByNotaMinima(nota);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.filmesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateFilmeDto: UpdateFilmeDto) {
    return this.filmesService.update(id, updateFilmeDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.filmesService.remove(id);
  }
}
