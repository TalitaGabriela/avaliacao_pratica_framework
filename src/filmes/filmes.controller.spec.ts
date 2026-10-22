import { Test, TestingModule } from '@nestjs/testing';
import { FilmesController } from './filmes.controller.js';
import { FilmesService } from './filmes.service.js';
import { IdGeneratorService } from '../common/id-generator/id-generator.service.js';
import { LogService } from '../common/log.service.js';

describe('FilmesController', () => {
  let controller: FilmesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilmesController],
      providers: [
        FilmesService,
        IdGeneratorService,
        LogService,
        { provide: 'APP_NAME', useValue: 'Sistema de Filmes' },
        { provide: 'STARTUP_DATE', useValue: new Date().toISOString() },
      ],
    }).compile();

    controller = module.get<FilmesController>(FilmesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
