import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfdctfEntity } from './tGFDCTF.entity';

@Index('PK_TGFDCTFT9', ['codemp', 'dtref', 'reg'], { unique: true })
@Entity('TGFDCTFT9', { schema: 'SANKHYA' })
export class Tgfdctft9Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 4,
    default: () => "'T9'",
  })
  reg: string;

  @Column('smallint', { name: 'QTDREG' })
  qtdreg: number;

  @ManyToOne(() => TgfdctfEntity, (tgfdctfEntity) => tgfdctfEntity.tgfdctfts)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
  ])
  tgfdctf: TgfdctfEntity;
}
