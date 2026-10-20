import { Inject, Injectable } from '@nestjs/common';
import { LogService } from 'src/common/log.service';
import { IdGeneratorService } from '../common/id-generator/id-generator.service';
import { CreateDisciplinaDto } from './dto/create-disciplina.dto';
import { UpdateDisciplinaDto } from './dto/update-disciplina.dto';
import { Disciplina } from './entities/disciplina.entity';

@Injectable()
export class DisciplinasService {
  private disciplinas: Disciplina[] = [];

  constructor(private readonly idGenerator: IdGeneratorService,
    @Inject('APP_NAME') private readonly appName: string,
    @Inject('STARTUP_DATE') private startupDate: string, /*private readonly requestScoped: RequestScopedService*/ private readonly logService: LogService) { }

  create(createDisciplinaDto: CreateDisciplinaDto): Disciplina {
    const novaDisciplina: Disciplina = {
      id: this.idGenerator.generateId(),
      ...createDisciplinaDto,
    };
    this.disciplinas.push(novaDisciplina);

    this.logService.log("CREATE",`Disciplina criada: ${JSON.stringify(novaDisciplina)}`);

    //console.log(`[${this.appName} - ${this.startupDate}] Criada disciplina:`, novaDisciplina);
    //console.log(this.requestScoped.getTimestamp());
    return novaDisciplina;
  }

  findAll(): Disciplina[] {
    console.log(this.disciplinas);
    this.logService.log("FINDALL",'Listando todas as disciplinas');
    return this.disciplinas;
  }
  findOne(id: number): Disciplina | undefined {
    this.logService.log('FINDONE','Buscando a disciplina de id:' + id);

    return this.disciplinas.find((d) => d.id === id);
  }
  update(id: number, updateDisciplinaDto: UpdateDisciplinaDto): Disciplina | undefined {
    const index = this.disciplinas.findIndex((d) => d.id === id);
    if (index === -1) return undefined;

    this.disciplinas[index] = {
      ...this.disciplinas[index],
      ...updateDisciplinaDto,
    };
    this.logService.log('UPDATE',`Disciplina atualizada: ${JSON.stringify(this.disciplinas[index])}`);

    return this.disciplinas[index];
  }
  remove(id: number): Disciplina | undefined {
    const index = this.disciplinas.findIndex((d) => d.id === id);
    if (index === -1) return undefined;

    const [removida] = this.disciplinas.splice(index, 1);
    this.logService.log('DELETE',`Disciplina removida: ${JSON.stringify(removida)}`);

    return removida;
  }
}
