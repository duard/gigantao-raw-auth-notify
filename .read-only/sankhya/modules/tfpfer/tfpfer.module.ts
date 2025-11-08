import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TfpferEntity } from '../../entities/tFPFER.entity';
import { TfpferMapper } from './domain/tfpfer.mapper';
import { TfpferRepositoryImpl } from './infra/tfpfer.repository';
import { TfpferRepository } from './infra/tfpfer.repository.abstract';
import { TfpferController } from './tfpfer.controller';
import { TfpferService } from './tfpfer.service';
import { TfpferCreateUseCase } from './use-cases/tfpfer.create.usecase';
import { TfpferFindAllUseCase } from './use-cases/tfpfer.find-all.usecase';
import { TfpferFindOneUseCase } from './use-cases/tfpfer.find-one.usecase';
import { TfpferRemoveUseCase } from './use-cases/tfpfer.remove.usecase';
import { TfpferUpdateUseCase } from './use-cases/tfpfer.update.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([TfpferEntity])],
  controllers: [TfpferController],
  providers: [
    TfpferService,
    TfpferCreateUseCase,
    TfpferFindAllUseCase,
    TfpferFindOneUseCase,
    TfpferUpdateUseCase,
    TfpferRemoveUseCase,
    TfpferMapper,
    {
      provide: TfpferRepository,
      useClass: TfpferRepositoryImpl,
    },
  ],
})
export class TfpferModule {}
