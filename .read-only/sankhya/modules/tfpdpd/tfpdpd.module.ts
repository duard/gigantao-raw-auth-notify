import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TfpdpdEntity } from '../../entities/tFPDPD.entity';
import { TfpdpdMapper } from './domain/tfpdpd.mapper';
import { TfpdpdRepositoryImpl } from './infra/tfpdpd.repository';
import { TfpdpdRepository } from './infra/tfpdpd.repository.abstract';
import { TfpdpdController } from './tfpdpd.controller';
import { TfpdpdService } from './tfpdpd.service';
import { TfpdpdCreateUseCase } from './use-cases/tfpdpd.create.usecase';
import { TfpdpdFindAllUseCase } from './use-cases/tfpdpd.find-all.usecase';
import { TfpdpdFindOneUseCase } from './use-cases/tfpdpd.find-one.usecase';
import { TfpdpdRemoveUseCase } from './use-cases/tfpdpd.remove.usecase';
import { TfpdpdUpdateUseCase } from './use-cases/tfpdpd.update.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([TfpdpdEntity])],
  controllers: [TfpdpdController],
  providers: [
    TfpdpdMapper,
    TfpdpdService,
    TfpdpdCreateUseCase,
    TfpdpdFindAllUseCase,
    TfpdpdFindOneUseCase,
    TfpdpdUpdateUseCase,
    TfpdpdRemoveUseCase,
    {
      provide: TfpdpdRepository,
      useClass: TfpdpdRepositoryImpl,
    },
  ],
})
export class TfpdpdModule {}
