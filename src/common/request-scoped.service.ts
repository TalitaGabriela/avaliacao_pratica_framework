import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class RequestScopedService {
    private readonly createdAt = new Date();

    getTimestamp() {
        return `Service criado em: ${this.createdAt.toISOString()}`;
    }
}