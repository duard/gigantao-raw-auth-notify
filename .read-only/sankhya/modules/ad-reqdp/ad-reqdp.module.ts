import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdReqdpEntity } from '../../entities/aD_REQDP.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdReqdpEntity])],
})
export class AdReqdpModule {}
