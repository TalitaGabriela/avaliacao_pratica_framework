import { Injectable } from '@nestjs/common';

@Injectable()
export class LogService {
    private logs: string[] = [];

    log(metodo: string, message: string) {
        const timestamp = new Date().toISOString();
        const logMessage = `[${timestamp}] [${metodo}] ${message}`;
        this.logs.push(logMessage);
        console.log(logMessage);
    }

    getLogs() {
        return this.logs;
    }
}
                                        