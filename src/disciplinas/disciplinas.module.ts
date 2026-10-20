import { Module } from '@nestjs/common';
import { DisciplinasService } from './disciplinas.service';
import { DisciplinasController } from './disciplinas.controller';
import { IdGeneratorService } from 'src/common/id-generator/id-generator.service';
import { APP_NAME } from 'src/common/constants';
import { StartupDateProvider } from 'src/common/startupdateprovider';
import { RequestScopedService } from 'src/common/request-scoped.service';
import { LogService } from 'src/common/log.service';

@Module({
  controllers: [DisciplinasController],
  providers: [DisciplinasService, IdGeneratorService, StartupDateProvider, RequestScopedService,
    {
      provide: 'APP_NAME',
      useValue: APP_NAME,
    },
    LogService
  ]
})
export class DisciplinasModule { }

