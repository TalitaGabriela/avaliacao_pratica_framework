import { Injectable } from '@nestjs/common';

@Injectable()
export class IdGeneratorService {
    private counter = 1;

    generateId(): number {
        return this.counter++;
    }
}
