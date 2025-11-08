import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TfpanxEntity } from '../../entities/tFPANX.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TfpanxEntity])],
})
export class TfpanxModule {}
