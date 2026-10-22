import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { CreateFilmeDto } from '../../filmes/dto/create-filme.dto.js';

@Injectable()
export class ValidaFilmePipe implements PipeTransform<CreateFilmeDto, CreateFilmeDto> {
    transform(value: CreateFilmeDto) {
        if (!value) {// valida se a requisição não mandou corpo vazio
            throw new BadRequestException('O corpo da requisição não pode ser vazio.');
        }

        const { titulo, nota } = value;

        if (!titulo || titulo.trim().length === 0) {// valida título vazio ou só com espaços
            throw new BadRequestException('O título do filme não pode ser vazio.');
        }

        if (nota < 0 || nota > 10) {// valida se a nota está dentro da escala
            throw new BadRequestException('A nota deve estar entre 0 e 10.');
        }

        return { // retorna o dto com o título sem espaços nas pontas
            ...value,
            titulo: titulo.trim(),
        };
    }
}