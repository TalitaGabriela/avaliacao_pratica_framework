import { Module } from '@nestjs/common';
import { FilmesService } from './filmes.service.js';
import { FilmesController } from './filmes.controller.js';
import { IdGeneratorService } from '../common/id-generator/id-generator.service.js';
import { APP_NAME } from '../common/constants.js';
import { StartupDateProvider } from '../common/startupdateprovider.js';
import { LogService } from '../common/log.service.js';

@Module({
  controllers: [FilmesController],
  providers: [FilmesService, IdGeneratorService, StartupDateProvider, LogService,
    {
      provide: 'APP_NAME',
      useValue: APP_NAME,
    },
  ],
})
export class FilmesModule {}