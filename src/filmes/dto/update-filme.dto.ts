import { PartialType } from '@nestjs/mapped-types';
import { CreateFilmeDto } from './create-filme.dto.js';

export class UpdateFilmeDto extends PartialType(CreateFilmeDto) {}
