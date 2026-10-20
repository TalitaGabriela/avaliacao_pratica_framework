import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { CreateDisciplinaDto } from 'src/disciplinas/dto/create-disciplina.dto';

@Injectable()
export class ValidaNomePipe implements PipeTransform<CreateDisciplinaDto, CreateDisciplinaDto> {
    transform(value: CreateDisciplinaDto) {
        if (!value) {// validei se a requisiçao n mandou corpo vazio
            throw new BadRequestException('O corpo da requisição não pode ser vazio.');
        }

        const { nome } = value;

        if (!nome || typeof nome !== 'string') {// verifica se o nome veio nulo ou n é string
            throw new BadRequestException('O nome da disciplina é obrigatório.');
        }

        if (nome.trim().length === 0) {// valida nome vazio
            throw new BadRequestException('O nome da disciplina não pode ser vazio ou conter apenas espaços.');
        }

        return { //atualizo o dto com o nome validado e retorno
            ...value,
            nome: nome.trim(),
        };
    }
}