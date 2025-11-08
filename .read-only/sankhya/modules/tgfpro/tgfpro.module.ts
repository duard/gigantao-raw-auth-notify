import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TgfproEntity } from 'src/sankhya/entities/tGFPRO.entity';
import { TgfproController } from './tgfpro.controller';
import { TgfproService } from './tgfpro.service';
import { TgfproRepositoryImpl } from './repositories/tgfpro.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TgfproEntity])],
  controllers: [TgfproController],
  providers: [
    TgfproService,
    {
      provide: 'TgfproRepository',
      useClass: TgfproRepositoryImpl,
    },
  ],
  exports: [TgfproService],
})
export class TgfproModule {}
