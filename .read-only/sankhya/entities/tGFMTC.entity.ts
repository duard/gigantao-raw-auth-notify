import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfcotEntity } from './tGFCOT.entity';
import { TgfitcEntity } from './tGFITC.entity';

@Index('PK_TGFMTC', ['codigo'], { unique: true })
@Entity('TGFMTC', { schema: 'SANKHYA' })
export class TgfmtcEntity {
  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('varchar', { name: 'MOTIVO', length: 200 })
  motivo: string;

  @OneToMany(() => TgfcotEntity, (tgfcotEntity) => tgfcotEntity.codmotcan)
  tgfcots: TgfcotEntity[];

  @OneToMany(() => TgfitcEntity, (tgfitcEntity) => tgfitcEntity.codmotcan)
  tgfitcs: TgfitcEntity[];
}
