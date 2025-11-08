import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TsiendService } from './tsiend.service';
import { TsiendController } from './tsiend.controller';
import { TsiendEntity as TsiendRepoEntity } from 'src/sankhya/entities/tSIEND.entity';
import { TsiendRepository } from './domain/tsiend.repository';
import { TsiendRepositoryImpl } from './infrastructure/tsiend.repository.impl';
import { CreateTsiendUseCase } from './usecases/create-tsiend.usecase';
import { FindAllTsiendUseCase } from './usecases/find-all-tsiend.usecase';
import { FindByTsiendUseCase } from './usecases/find-by-tsiend.usecase';
import { UpdateTsiendUseCase } from './usecases/update-tsiend.usecase';
import { DeleteTsiendUseCase } from './usecases/delete-tsiend.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([TsiendRepoEntity])],
  controllers: [TsiendController],
  providers: [
    TsiendService,
    {
      provide: TsiendRepository,
      useClass: TsiendRepositoryImpl,
    },
    CreateTsiendUseCase,
    FindAllTsiendUseCase,
    FindByTsiendUseCase,
    UpdateTsiendUseCase,
    DeleteTsiendUseCase,
  ],
  exports: [TsiendService],
})
export class TsiendModule {}
