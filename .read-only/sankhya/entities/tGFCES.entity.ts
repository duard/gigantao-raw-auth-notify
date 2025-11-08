import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfdneEntity } from './tGFDNE.entity';
import { TgfnesEntity } from './tGFNES.entity';
import { TgfrneEntity } from './tGFRNE.entity';

@Index('PK_TGFCES', ['nuest'], { unique: true })
@Entity('TGFCES', { schema: 'SANKHYA' })
export class TgfcesEntity {
  @Column('int', { primary: true, name: 'NUEST' })
  nuest: number;

  @Column('varchar', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('varchar', { name: 'TIPVISUAL', length: 2, default: () => "'PD'" })
  tipvisual: string;

  @Column('varchar', { name: 'DESCRROOT', length: 50 })
  descrroot: string;

  @OneToMany(() => TgfdneEntity, (tgfdneEntity) => tgfdneEntity.nuest2)
  tgfdnes: TgfdneEntity[];

  @OneToMany(() => TgfnesEntity, (tgfnesEntity) => tgfnesEntity.nuest)
  tgfnes: TgfnesEntity[];

  @OneToMany(() => TgfrneEntity, (tgfrneEntity) => tgfrneEntity.nuest2)
  tgfrnes: TgfrneEntity[];
}
