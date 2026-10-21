import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FilmesService } from './filmes.service.js';
import { CreateFilmeDto } from './dto/create-filme.dto.js';
import { UpdateFilmeDto } from './dto/update-filme.dto.js';
import { LogService } from '../common/log.service.js';

@Controller('filmes')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService, private readonly logService: LogService) { }

  @Post()
  create(@Body() createFilmeDto: CreateFilmeDto) {
    return this.filmesService.create(createFilmeDto);
  }

  @Get()
  findAll() {
    return this.filmesService.findAll();
  }

  @Get('nota/:nota')
  findByNotaMinima(@Param('nota') nota: string) {
    return this.filmesService.findByNotaMinima(+nota);
  }

  @Get('logs')
  getLogs() {
    return this.logService.getLogs();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filmesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFilmeDto: UpdateFilmeDto) {
    return this.filmesService.update(+id, updateFilmeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filmesService.remove(+id);
  }
}
