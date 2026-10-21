import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { FilmesModule } from './filmes/filmes.module.js';
import { IdGeneratorService } from './common/id-generator/id-generator.service.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'avaliacao_pratica_framework',
    }),
    FilmesModule,
  ],
  controllers: [AppController],
  providers: [AppService, IdGeneratorService],
})
export class AppModule {}
