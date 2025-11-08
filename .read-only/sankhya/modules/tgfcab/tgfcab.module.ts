import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TgfcabEntity } from '../../entities/tGFCAB.entity';
import { TgfcabController } from './tgfcab.controller';
import { TgfcabService } from './tgfcab.service';
import { CreateTgfcabUseCase } from './use-cases/create-tgfcab.use-case';
import { FindAllTgfcabUseCase } from './use-cases/find-all-tgfcab.use-case';
import { FindOneTgfcabUseCase } from './use-cases/find-one-tgfcab.use-case';
import { UpdateTgfcabUseCase } from './use-cases/update-tgfcab.use-case';
import { DeleteTgfcabUseCase } from './use-cases/delete-tgfcab.use-case';
import { FindAllTgfcabSummarizedUseCase } from './use-cases/find-all-tgfcab-summarized.use-case';
import { TgfcabRepositoryImpl } from './repositories/tgfcab.repository';
import { TgflnfModule } from '../tgflnf/tgflnf.module';
import { TsiufsModule } from '../tsiufs/tsiufs.module';
import { TsiusuModule } from '../tsiusu/tsiusu.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([TgfcabEntity]),
    TgflnfModule,
    TsiufsModule,
    TsiusuModule,
  ],
  controllers: [TgfcabController],
  providers: [
    TgfcabService,
    CreateTgfcabUseCase,
    FindAllTgfcabUseCase,
    FindAllTgfcabSummarizedUseCase,
    FindOneTgfcabUseCase,
    UpdateTgfcabUseCase,
    DeleteTgfcabUseCase,
    {
      provide: 'TgfcabRepository',
      useClass: TgfcabRepositoryImpl,
    },
  ],
  exports: [TgfcabService],
})
export class TgfcabModule {
  constructor() {
    console.log('TgfcabModule initialized');
  }
}
