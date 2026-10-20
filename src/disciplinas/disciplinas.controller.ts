import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { LogService } from 'src/common/log.service';
import { ParseIntPipe } from 'src/common/pipes/parse-int.pipe';
import { ValidaNomePipe } from 'src/common/pipes/valida-nome.pipe';
import { DisciplinasService } from './disciplinas.service';
import { CreateDisciplinaDto } from './dto/create-disciplina.dto';
import { UpdateDisciplinaDto } from './dto/update-disciplina.dto';

@Controller('disciplinas')
export class DisciplinasController {
  constructor(private readonly disciplinasService: DisciplinasService, private readonly logService: LogService) { }

  @Post() // valida nome passado para o body
  create(@Body(ValidaNomePipe) createDisciplinaDto: CreateDisciplinaDto) {
    return this.disciplinasService.create(createDisciplinaDto);
  }

  @Get('logs')
  getLogs() {
    return this.logService.getLogs();
  }

  @Get()
  findAll() {
    return this.disciplinasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.disciplinasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDisciplinaDto: UpdateDisciplinaDto) {
    return this.disciplinasService.update(+id, updateDisciplinaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.disciplinasService.remove(+id);
  }
}
