import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const token = request.headers['x-access-token'];

        if (token !== 'secrettoken') {
            throw new UnauthorizedException('Token inválido ou ausente');
        }
        return true;
    }
}