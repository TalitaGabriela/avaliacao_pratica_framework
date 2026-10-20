import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DisciplinasModule } from './disciplinas/disciplinas.module';
import { IdGeneratorService } from './common/id-generator/id-generator.service';

@Module({
  imports: [DisciplinasModule],
  controllers: [AppController],
  providers: [AppService, IdGeneratorService],
})
export class AppModule { }
