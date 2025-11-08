import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TfpanxdpdEntity } from '../../entities/tFPANXDPD.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TfpanxdpdEntity])],
})
export class TfpanxdpdModule {}
