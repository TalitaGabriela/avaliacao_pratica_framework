import { Test, TestingModule } from '@nestjs/testing';
import { FilmesService } from './filmes.service.js';
import { IdGeneratorService } from '../common/id-generator/id-generator.service.js';
import { LogService } from '../common/log.service.js';

describe('FilmesService', () => {
  let service: FilmesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FilmesService,
        IdGeneratorService,
        LogService,
        { provide: 'APP_NAME', useValue: 'Sistema de Filmes' },
        { provide: 'STARTUP_DATE', useValue: new Date().toISOString() },
      ],
    }).compile();

    service = module.get<FilmesService>(FilmesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
