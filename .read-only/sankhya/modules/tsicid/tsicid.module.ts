import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TsicidService } from './tsicid.service';
import { TsicidController } from './tsicid.controller';
import { TsicidEntity as TsicidRepoEntity } from 'src/sankhya/entities/tSICID.entity';
import { TsicidRepository } from './domain/tsicid.repository';
import { TsicidRepositoryImpl } from './infrastructure/tsicid.repository.impl';
import { CreateTsicidUseCase } from './usecases/create-tsicid.usecase';
import { FindAllTsicidUseCase } from './usecases/find-all-tsicid.usecase';
import { FindByTsicidUseCase } from './usecases/find-by-tsicid.usecase';
import { UpdateTsicidUseCase } from './usecases/update-tsicid.usecase';
import { DeleteTsicidUseCase } from './usecases/delete-tsicid.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([TsicidRepoEntity])],
  controllers: [TsicidController],
  providers: [
    TsicidService,
    {
      provide: TsicidRepository,
      useClass: TsicidRepositoryImpl,
    },
    CreateTsicidUseCase,
    FindAllTsicidUseCase,
    FindByTsicidUseCase,
    UpdateTsicidUseCase,
    DeleteTsicidUseCase,
  ],
  exports: [TsicidService],
})
export class TsicidModule {}
