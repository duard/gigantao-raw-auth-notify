import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdGigpontosintegraEntity } from 'src/sankhya/entities/AD_GIGPONTOSINTEGRA.entity';
import { AdGigpontosintegraController } from './ad-gigpontosintegra.controller';
import { AdGigpontosintegraRepository } from './domain/ad-gigpontosintegra.repository';
import { AdGigpontosintegraRepositoryImpl } from './infrastructure/ad-gigpontosintegra.repository.impl';
import { AdGigpontosintegraService } from './ad-gigpontosintegra.service';
import { CreateAdGigpontosintegraUseCase } from './usecases/create-ad-gigpontosintegra.usecase';
import { FindAllAdGigpontosintegraUseCase } from './usecases/find-all-ad-gigpontosintegra.usecase';
import { FindOneAdGigpontosintegraUseCase } from './usecases/find-one-ad-gigpontosintegra.usecase';
import { UpdateAdGigpontosintegraUseCase } from './usecases/update-ad-gigpontosintegra.usecase';
import { DeleteAdGigpontosintegraUseCase } from './usecases/delete-ad-gigpontosintegra.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([AdGigpontosintegraEntity])],
  controllers: [AdGigpontosintegraController],
  providers: [
    AdGigpontosintegraService,
    CreateAdGigpontosintegraUseCase,
    FindAllAdGigpontosintegraUseCase,
    FindOneAdGigpontosintegraUseCase,
    UpdateAdGigpontosintegraUseCase,
    DeleteAdGigpontosintegraUseCase,
    {
      provide: AdGigpontosintegraRepository,
      useClass: AdGigpontosintegraRepositoryImpl,
    },
  ],
  exports: [AdGigpontosintegraRepository], // New: Export the repository
})
export class AdGigpontosintegraModule {}
