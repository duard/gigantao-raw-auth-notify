import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TfplgrService } from './tfplgr.service';
import { TfplgrController } from './tfplgr.controller';
import { TfplgrEntity as TfplgrRepoEntity } from 'src/sankhya/entities/tFPLGR.entity';
import { TfplgrRepository } from './domain/tfplgr.repository';
import { TfplgrRepositoryImpl } from './infrastructure/tfplgr.repository.impl';
import { CreateTfplgrUseCase } from './usecases/create-tfplgr.usecase';
import { FindAllTfplgrUseCase } from './usecases/find-all-tfplgr.usecase';
import { FindByTfplgrUseCase } from './usecases/find-by-tfplgr.usecase';
import { UpdateTfplgrUseCase } from './usecases/update-tfplgr.usecase';
import { DeleteTfplgrUseCase } from './usecases/delete-tfplgr.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([TfplgrRepoEntity])],
  controllers: [TfplgrController],
  providers: [
    TfplgrService,
    {
      provide: TfplgrRepository,
      useClass: TfplgrRepositoryImpl,
    },
    CreateTfplgrUseCase,
    FindAllTfplgrUseCase,
    FindByTfplgrUseCase,
    UpdateTfplgrUseCase,
    DeleteTfplgrUseCase,
  ],
  exports: [TfplgrService],
})
export class TfplgrModule {}
