import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfdimescEntity } from './tGFDIMESC.entity';

@Index('PK_TGFDIMESCR98', ['codemp', 'dtref', 'reg'], { unique: true })
@Entity('TGFDIMESCR98', { schema: 'SANKHYA' })
export class Tgfdimescr98Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 2,
    default: () => "'98'",
  })
  reg: string;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'QTDREG' })
  qtdreg: number;

  @ManyToOne(
    () => TgfdimescEntity,
    (tgfdimescEntity) => tgfdimescEntity.tgfdimescr33,
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
  ])
  tgfdimesc: TgfdimescEntity;
}
