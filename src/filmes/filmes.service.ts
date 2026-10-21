import { Inject, Injectable } from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto.js';
import { UpdateFilmeDto } from './dto/update-filme.dto.js';
import { Filme } from './entities/filme.entity.js';
import { IdGeneratorService } from '../common/id-generator/id-generator.service.js';
import { LogService } from '../common/log.service.js';

@Injectable()
export class FilmesService {
  private filmes: Filme[] = [];

  constructor(private readonly idGenerator: IdGeneratorService,
    @Inject('APP_NAME') private readonly appName: string,
    @Inject('STARTUP_DATE') private readonly startupDate: string,
    private readonly logService: LogService) { }

  create(createFilmeDto: CreateFilmeDto): Filme {
    const novoFilme: Filme = {
      id: this.idGenerator.generateId(),
      ...createFilmeDto,
    };
    this.filmes.push(novoFilme);

    console.log(`[${this.appName} - ${this.startupDate}] Filme cadastrado:`, novoFilme);
    this.logService.log('CREATE', `Filme cadastrado: ${JSON.stringify(novoFilme)}`);

    return novoFilme;
  }

  findAll(): Filme[] {
    this.logService.log('FINDALL', 'Listando todos os filmes');
    return this.filmes;
  }

  findOne(id: number): Filme | undefined {
    this.logService.log('FINDONE', 'Buscando o filme de id: ' + id);
    return this.filmes.find((f) => f.id === id);
  }

  update(id: number, updateFilmeDto: UpdateFilmeDto): Filme | undefined {
    const index = this.filmes.findIndex((f) => f.id === id);
    if (index === -1) return undefined;

    this.filmes[index] = {
      ...this.filmes[index],
      ...updateFilmeDto,
    };
    this.logService.log('UPDATE', `Filme atualizado: ${JSON.stringify(this.filmes[index])}`);

    return this.filmes[index];
  }

  remove(id: number): Filme | undefined {
    const index = this.filmes.findIndex((f) => f.id === id);
    if (index === -1) return undefined;

    const [removido] = this.filmes.splice(index, 1);
    this.logService.log('DELETE', `Filme removido: ${JSON.stringify(removido)}`);

    return removido;
  }

  // lista os filmes com nota maior ou igual a nota informada
  findByNotaMinima(nota: number): Filme[] {
    this.logService.log('FINDBYNOTA', 'Listando filmes com nota maior ou igual a: ' + nota);
    return this.filmes.filter((f) => f.nota >= nota);
  }
}