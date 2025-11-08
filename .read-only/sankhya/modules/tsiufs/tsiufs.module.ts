import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TsiufsEntity } from '../../entities/tSIUFS.entity';
import { TsiufsController } from './tsiufs.controller';
import { TsiufsService } from './tsiufs.service';
import { CreateTsiufsUseCase } from './use-cases/create-tsiufs.usecase';
import { FindAllTsiufsUseCase } from './use-cases/find-all-tsiufs.usecase';
import { FindOneTsiufsUseCase } from './use-cases/find-one-tsiufs.usecase';
import { UpdateTsiufsUseCase } from './use-cases/update-tsiufs.usecase';
import { DeleteTsiufsUseCase } from './use-cases/delete-tsiufs.usecase';
import { TsiufsRepositoryImpl } from './repositories/tsiufs.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TsiufsEntity])],
  controllers: [TsiufsController],
  providers: [
    TsiufsService,
    CreateTsiufsUseCase,
    FindAllTsiufsUseCase,
    FindOneTsiufsUseCase,
    UpdateTsiufsUseCase,
    DeleteTsiufsUseCase,
    {
      provide: 'TsiufsRepository',
      useClass: TsiufsRepositoryImpl,
    },
  ],
  exports: [TsiufsService],
})
export class TsiufsModule {}
