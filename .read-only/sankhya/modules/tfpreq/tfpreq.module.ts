import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TfpreqService } from './tfpreq.service';
import { FindAllTfpreqController } from './tfpreq.find-all.controller';
import { CreateTfpreqUseCase } from './usecases/tfpreq.create.usecase';
import { FindAllTfpreqUseCase } from './usecases/tfpreq.find-all.usecase';
import { FindTfpreqByUseCase } from './usecases/tfpreq.find-by.usecase';
import { UpdateTfpreqUseCase } from './usecases/tfpreq.update.usecase';
import { RemoveTfpreqUseCase } from './usecases/tfpreq.remove.usecase';
import { TfpreqRepository } from './infrastructure/tfpreq.repository.abstract';
import { TfpreqController } from './tfpreq.controller';
import { TfpreqRepositoryImpl } from './infrastructure/tfpreq.repository';
import { TfpreqEntity } from 'src/sankhya/entities/tFPREQ.entity';
import { TfpfunEntity } from 'src/sankhya/entities/tFPFUN.entity';
import { TsiusuEntity } from 'src/sankhya/entities/tSIUSU.entity';
import { TfpcarEntity } from 'src/sankhya/entities/tFPCAR.entity';
import { TsiempEntity } from 'src/sankhya/entities/tSIEMP.entity';
import { TfpreqMapper } from './domain/tfpreq.mapper';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TfpreqEntity,
      TfpfunEntity,
      TsiusuEntity,
      TfpcarEntity,
      TsiempEntity,
    ]),
  ],
  controllers: [FindAllTfpreqController, TfpreqController],
  providers: [
    TfpreqService,
    CreateTfpreqUseCase,
    FindAllTfpreqUseCase,
    FindTfpreqByUseCase,
    UpdateTfpreqUseCase,
    RemoveTfpreqUseCase,
    TfpreqMapper,
    {
      provide: TfpreqRepository,
      useClass: TfpreqRepositoryImpl,
    },
  ],
})
export class TfpreqModule {}
