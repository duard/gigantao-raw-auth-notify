import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TgflnfEntity } from '../../entities/tGFLNF.entity';
import { TgflnfController } from './tgflnf.controller';
import { TgflnfService } from './tgflnf.service';
import { CreateTgflnfUseCase } from './use-cases/create-tgflnf.usecase';
import { FindAllTgflnfUseCase } from './use-cases/find-all-tgflnf.usecase';
import { FindOneTgflnfUseCase } from './use-cases/find-one-tgflnf.usecase';
import { UpdateTgflnfUseCase } from './use-cases/update-tgflnf.usecase';
import { DeleteTgflnfUseCase } from './use-cases/delete-tgflnf.usecase';
import { TgflnfRepositoryImpl } from './repositories/tgflnf.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TgflnfEntity])],
  controllers: [TgflnfController],
  providers: [
    TgflnfService,
    CreateTgflnfUseCase,
    FindAllTgflnfUseCase,
    FindOneTgflnfUseCase,
    UpdateTgflnfUseCase,
    DeleteTgflnfUseCase,
    {
      provide: 'TgflnfRepository',
      useClass: TgflnfRepositoryImpl,
    },
  ],
  exports: [TgflnfService],
})
export class TgflnfModule {}
