import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidaNotaPipe implements PipeTransform<string, number> {
  transform(value: string): number {
    const nota = parseFloat(value); // parseFloat para aceitar nota com casas decimais (ex.: 8.5)
    if (isNaN(nota)) {
      throw new BadRequestException(`A nota "${value}" não é um número válido`);
    }
    if (nota < 0 || nota > 10) { // escala de notas do cineclube: 0 a 10
      throw new BadRequestException('A nota deve estar entre 0 e 10');
    }
    return nota;
  }
}