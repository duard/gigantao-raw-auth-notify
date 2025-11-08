import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TfpsfeService } from './tfpsfe.service';
import { FindAllTfpsfeController } from './tfpsfe.find-all.controller';
import { CreateTfpsfeUseCase } from './usecases/tfpsfe.create.usecase';
import { FindAllTfpsfeUseCase } from './usecases/tfpsfe.find-all.usecase';
import { FindTfpsfeByUseCase } from './usecases/tfpsfe.find-by.usecase';
import { UpdateTfpsfeUseCase } from './usecases/tfpsfe.update.usecase';
import { RemoveTfpsfeUseCase } from './usecases/tfpsfe.remove.usecase';
import { TfpsfeRepository } from './infrastructure/tfpsfe.repository.abstract';
import { TfpsfeController } from './tfpsfe.controller';
import { TfpsfeRepositoryImpl } from './infrastructure/tfpsfe.repository';
import { TfpsfeEntity } from 'src/sankhya/entities/tFPSFE.entity';
import { TfpfunEntity } from 'src/sankhya/entities/tFPFUN.entity';
import { TsiempEntity } from 'src/sankhya/entities/tSIEMP.entity';
import { TfpreqEntity } from 'src/sankhya/entities/tFPREQ.entity';
import { TfpsfeMapper } from './domain/tfpsfe.mapper';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TfpsfeEntity,
      TfpfunEntity,
      TsiempEntity,
      TfpreqEntity,
    ]),
  ],
  controllers: [FindAllTfpsfeController, TfpsfeController],
  providers: [
    TfpsfeService,
    CreateTfpsfeUseCase,
    FindAllTfpsfeUseCase,
    FindTfpsfeByUseCase,
    UpdateTfpsfeUseCase,
    RemoveTfpsfeUseCase,
    TfpsfeMapper,
    {
      provide: TfpsfeRepository,
      useClass: TfpsfeRepositoryImpl,
    },
  ],
})
export class TfpsfeModule {}
