import { Test, TestingModule } from '@nestjs/testing';
import { FilmesController } from './filmes.controller.js';
import { FilmesService } from './filmes.service.js';

describe('FilmesController', () => {
  let controller: FilmesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilmesController],
      providers: [FilmesService],
    }).compile();

    controller = module.get<FilmesController>(FilmesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
