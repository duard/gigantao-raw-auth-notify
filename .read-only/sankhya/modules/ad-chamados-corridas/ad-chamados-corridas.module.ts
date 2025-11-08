import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdChamadosCorridasService } from './ad-chamados-corridas.service';
import { AdChamadosCorridasController } from './ad-chamados-corridas.controller';
import { AdChamadoscorridasEntity } from 'src/sankhya/entities/aD_CHAMADOSCORRIDAS.entity';
import { AdChamadosCorridasRepository } from './domain/ad-chamados-corridas.repository';
import { AdChamadosCorridasRepositoryImpl } from './infrastructure/ad-chamados-corridas.repository.impl';
import { CreateAdChamadosCorridasUseCase } from './usecases/ad-chamados-corridas.create.usecase';
import { FindAllAdChamadosCorridasUseCase } from './usecases/ad-chamados-corridas.find-all.usecase';
import { FindAdChamadosCorridasByUseCase } from './usecases/ad-chamados-corridas.find-by.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([AdChamadoscorridasEntity])],
  controllers: [AdChamadosCorridasController],
  providers: [
    AdChamadosCorridasService,
    {
      provide: AdChamadosCorridasRepository,
      useClass: AdChamadosCorridasRepositoryImpl,
    },
    CreateAdChamadosCorridasUseCase,
    FindAllAdChamadosCorridasUseCase,
    FindAdChamadosCorridasByUseCase,
  ],
  exports: [AdChamadosCorridasService],
})
export class AdChamadosCorridasModule {}
