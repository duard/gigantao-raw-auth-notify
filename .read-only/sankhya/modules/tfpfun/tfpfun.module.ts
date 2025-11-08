import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TfpfunEntity } from '../../entities/tFPFUN.entity';
import { TfpfunController } from './tfpfun.controller';
import { FindAllTfpfunController } from './tfpfun.find-all.controller';
import { TfpfunService } from './tfpfun.service';
import { CreateTfpfunUseCase } from './usecases/tfpfun.create.usecase';
import { FindAllTfpfunUseCase } from './usecases/tfpfun.find-all.usecase';
import { FindTfpfunByUseCase } from './usecases/tfpfun.find-by.usecase';
import { TfpfunRepositoryImpl } from './infrastructure/tfpfun.repository';

import { TfpfunRepositoryAbstract } from './domain/tfpfun.repository.abstract';
import { TfpfunByCpfRepositoryAbstract } from './domain/tfpfun-by-cpf.repository.abstract';
import { TfpfunByCpfRepositoryImpl } from './infrastructure/tfpfun-by-cpf.repository.impl';
import { FindTfpfunByCpfUseCase } from './usecases/tfpfun.find-by-cpf.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([TfpfunEntity])],
  controllers: [TfpfunController, FindAllTfpfunController],
  providers: [
    TfpfunService,
    CreateTfpfunUseCase,
    FindAllTfpfunUseCase,
    FindTfpfunByUseCase,
    FindTfpfunByCpfUseCase,
    { provide: TfpfunRepositoryAbstract, useClass: TfpfunRepositoryImpl },
    {
      provide: TfpfunByCpfRepositoryAbstract,
      useClass: TfpfunByCpfRepositoryImpl,
    },
  ],
  exports: [TfpfunService, FindTfpfunByCpfUseCase, TfpfunByCpfRepositoryAbstract],
})
export class TfpfunModule {}
