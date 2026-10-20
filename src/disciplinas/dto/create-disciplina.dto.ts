import { IsNumber, IsString } from "class-validator";

export class CreateDisciplinaDto {
    @IsString()
    nome: string;
    @IsNumber()
    cargaHoraria: number;
    @IsNumber()
    semestre: number;
    @IsString()
    curso: string;
}
