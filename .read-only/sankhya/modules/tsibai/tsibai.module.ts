import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TsibaiService } from './tsibai.service';
import { TsibaiController } from './tsibai.controller';
import { TsibaiEntity as TsibaiRepoEntity } from 'src/sankhya/entities/tSIBAI.entity';
import { TsibaiRepository } from 'src/sankhya/modules/tsibai/domain/tsibai.repository';
import { TsibaiRepositoryImpl } from 'src/sankhya/modules/tsibai/infrastructure/tsibai.repository.impl';
import { CreateTsibaiUseCase } from 'src/sankhya/modules/tsibai/usecases/create-tsibai.usecase';
import { FindAllTsibaiUseCase } from 'src/sankhya/modules/tsibai/usecases/find-all-tsibai.usecase';
import { FindByTsibaiUseCase } from 'src/sankhya/modules/tsibai/usecases/find-by-tsibai.usecase';
import { UpdateTsibaiUseCase } from 'src/sankhya/modules/tsibai/usecases/update-tsibai.usecase';
import { DeleteTsibaiUseCase } from 'src/sankhya/modules/tsibai/usecases/delete-tsibai.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([TsibaiRepoEntity])],
  controllers: [TsibaiController],
  providers: [
    TsibaiService,
    {
      provide: TsibaiRepository,
      useClass: TsibaiRepositoryImpl,
    },
    CreateTsibaiUseCase,
    FindAllTsibaiUseCase,
    FindByTsibaiUseCase,
    UpdateTsibaiUseCase,
    DeleteTsibaiUseCase,
  ],
  exports: [TsibaiService],
})
export class TsibaiModule {}
