import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfdimescEntity } from './tGFDIMESC.entity';

@Index('PK_TGFDIMESCR22', ['codemp', 'dtref', 'codcfo', 'reg'], {
  unique: true,
})
@Entity('TGFDIMESCR22', { schema: 'SANKHYA' })
export class Tgfdimescr22Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('int', { primary: true, name: 'CODCFO' })
  codcfo: number;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 2,
    default: () => "'22'",
  })
  reg: string;

  @Column('varchar', { name: 'REGPAI', length: 2, default: () => "'24'" })
  regpai: string;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('float', { name: 'VLRCTB', nullable: true, precision: 53 })
  vlrctb: number | null;

  @Column('float', { name: 'BASECALC', nullable: true, precision: 53 })
  basecalc: number | null;

  @Column('float', { name: 'IMPOSTOCRED', nullable: true, precision: 53 })
  impostocred: number | null;

  @Column('float', { name: 'ISENTASNAOTRIB', nullable: true, precision: 53 })
  isentasnaotrib: number | null;

  @Column('float', { name: 'OUTRAS', nullable: true, precision: 53 })
  outras: number | null;

  @Column('float', { name: 'BASECALCIMPRET', nullable: true, precision: 53 })
  basecalcimpret: number | null;

  @Column('float', { name: 'IMPOSTORETIDO', nullable: true, precision: 53 })
  impostoretido: number | null;

  @Column('float', { name: 'DIFALIQUOTA', nullable: true, precision: 53 })
  difaliquota: number | null;

  @ManyToOne(
    () => TgfdimescEntity,
    (tgfdimescEntity) => tgfdimescEntity.tgfdimescrs,
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
  ])
  tgfdimesc: TgfdimescEntity;
}
