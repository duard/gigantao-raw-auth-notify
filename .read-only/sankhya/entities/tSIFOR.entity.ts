import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfveiEntity } from './tGFVEI.entity';
import { TsifopEntity } from './tSIFOP.entity';

@Index('PK_TSIFOR', ['tipform', 'codform'], { unique: true })
@Entity('TSIFOR', { schema: 'SANKHYA' })
export class TsiforEntity {
  @Column('char', { primary: true, name: 'TIPFORM', length: 1 })
  tipform: string;

  @Column('smallint', { primary: true, name: 'CODFORM' })
  codform: number;

  @Column('char', { name: 'DESCRFORM', length: 36 })
  descrform: string;

  @Column('text', { name: 'FORMULA', nullable: true })
  formula: string | null;

  @Column('char', { name: 'TIPDIST', length: 1, default: () => "'A'" })
  tipdist: string;

  @Column('text', { name: 'FORMULAWEB', nullable: true })
  formulaweb: string | null;

  @Column('float', { name: 'INDCUSTO', precision: 53, default: () => '(100)' })
  indcusto: number;

  @Column('char', { name: 'FRETECALCFUNC', length: 1, default: () => "'N'" })
  fretecalcfunc: string;

  @Column('char', { name: 'CONSIDERARRATEIO', nullable: true, length: 1 })
  considerarrateio: string | null;

  @OneToMany(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tsifor)
  tgfveis: TgfveiEntity[];

  @OneToMany(() => TsifopEntity, (tsifopEntity) => tsifopEntity.tsifor)
  tsifops: TsifopEntity[];
}
