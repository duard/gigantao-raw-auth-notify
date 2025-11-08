import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TmstvcService } from './tmstvc.service';
import { TmstvcController } from './tmstvc.controller';
import { TmstvcEntity } from 'src/sankhya/entities/tMSTVC.entity';
import { TmstvcRepository } from './domain/tmstvc.repository';
import { TmstvcRepositoryImpl } from './infrastructure/tmstvc.repository.impl';
import { CreateTmstvcUseCase } from './usecases/create-tmstvc.usecase';
import { FindAllTmstvcUseCase } from './usecases/find-all-tmstvc.usecase';
import { FindTmstvcByUseCase } from './usecases/find-by-tmstvc.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([TmstvcEntity])],
  controllers: [TmstvcController],
  providers: [
    TmstvcService,
    {
      provide: TmstvcRepository,
      useClass: TmstvcRepositoryImpl,
    },
    CreateTmstvcUseCase,
    FindAllTmstvcUseCase,
    FindTmstvcByUseCase,
  ],
  exports: [TmstvcService],
})
export class TmstvcModule {}
