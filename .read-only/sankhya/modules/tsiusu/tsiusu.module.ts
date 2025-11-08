import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TsiusuEntity } from '../../entities/tSIUSU.entity';
import { TsiusuController } from './tsiusu.controller';
import { TsiusuService } from './tsiusu.service';
import { CreateTsiusuUseCase } from './use-cases/create-tsiusu.usecase';
import { FindAllTsiusuUseCase } from './use-cases/find-all-tsiusu.usecase';
import { FindOneTsiusuUseCase } from './use-cases/find-one-tsiusu.usecase';
import { UpdateTsiusuUseCase } from './use-cases/update-tsiusu.usecase';
import { DeleteTsiusuUseCase } from './use-cases/delete-tsiusu.usecase';
import { TsiusuRepositoryImpl } from './repositories/tsiusu.repository';

import { TsiusuByCpfRepositoryAbstract } from './repositories/tsiusu-by-cpf.repository.abstract';
import { TsiusuByCpfRepositoryImpl } from './repositories/tsiusu-by-cpf.repository.impl';
import { FindTsiusuByCpfUseCase } from './use-cases/find-tsiusu-by-cpf.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([TsiusuEntity])],
  controllers: [TsiusuController],
  providers: [
    TsiusuService,
    CreateTsiusuUseCase,
    FindAllTsiusuUseCase,
    FindOneTsiusuUseCase,
    UpdateTsiusuUseCase,
    DeleteTsiusuUseCase,
    FindTsiusuByCpfUseCase,
    {
      provide: 'TsiusuRepository',
      useClass: TsiusuRepositoryImpl,
    },
    {
      provide: TsiusuByCpfRepositoryAbstract,
      useClass: TsiusuByCpfRepositoryImpl,
    },
  ],
  exports: [TsiusuService, FindTsiusuByCpfUseCase, TsiusuByCpfRepositoryAbstract],
})
export class TsiusuModule {}
