import { IsNumber, IsString } from "class-validator";

export class CreateFilmeDto {
    @IsString()
    titulo: string;
    @IsNumber()
    ano: number;
    @IsString()
    genero: string;
    @IsString()
    diretor: string;
    @IsNumber()
    nota: number;
}
