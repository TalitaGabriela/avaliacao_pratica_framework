import { Injectable } from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto.js';
import { UpdateFilmeDto } from './dto/update-filme.dto.js';
import { Filme } from './entities/filme.entity.ts';

@Injectable()
export class FilmesService {
  private filmes: Filme[] = [];

  create(createFilmeDto: CreateFilmeDto): Filme {
    const novoFilme: Filme = {
      id: this.filmes.length + 1,
      ...createFilmeDto,
    };
    this.filmes.push(novoFilme);
    return novoFilme;
  }

  findAll() : Filme[] {
    return this.filmes;
  }

  findOne(id: number) : Filme | undefined{
    return this.filmes.find((f) => f.id === id);
  }

  update(id: number, updateFilmeDto: UpdateFilmeDto) : Filme | undefined {
    const index = this.filmes.findIndex((f) => f.id === id);
    if (index === -1) return undefined;

    this.filmes[index] = {
      ...this.filmes[index],
      ...updateFilmeDto
    };
    return this.filmes[index];
  }

  remove(id: number): Filme | undefined {
    const index = this.filmes.findIndex((f) => f.id === id);
    if (index === -1) return undefined;
    
    const [removido] = this.filmes.splice(index, 1);
    return removido;
  }
}
