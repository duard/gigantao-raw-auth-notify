import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfdimescEntity } from './tGFDIMESC.entity';

@Index('PK_TGFDIMESCR48', ['codemp', 'dtref', 'reg', 'codcid', 'codtipativ'], {
  unique: true,
})
@Entity('TGFDIMESCR48', { schema: 'SANKHYA' })
export class Tgfdimescr48Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 2,
    default: () => "'48'",
  })
  reg: string;

  @Column('varchar', { primary: true, name: 'CODCID', length: 5 })
  codcid: string;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('float', { name: 'VLRRECPERC', nullable: true, precision: 53 })
  vlrrecperc: number | null;

  @Column('varchar', { primary: true, name: 'CODTIPATIV', length: 3 })
  codtipativ: string;

  @ManyToOne(
    () => TgfdimescEntity,
    (tgfdimescEntity) => tgfdimescEntity.tgfdimescr18,
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
  ])
  tgfdimesc: TgfdimescEntity;
}
