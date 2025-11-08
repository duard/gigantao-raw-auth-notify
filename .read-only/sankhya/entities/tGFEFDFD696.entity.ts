import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFD696',
  ['codemp', 'dtref', 'regniv1', 'seqd695', 'sequencia'],
  { unique: true },
)
@Entity('TGFEFDFD696', { schema: 'SANKHYA' })
export class Tgfefdfd696Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'D001'",
  })
  regniv1: string;

  @Column('int', { primary: true, name: 'SEQD695' })
  seqd695: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'D696'" })
  registro: string;

  @Column('int', { name: 'CST_ICMS' })
  cstIcms: number;

  @Column('int', { name: 'CFOP', nullable: true })
  cfop: number | null;

  @Column('float', { name: 'ALIQ_ICMS', nullable: true, precision: 53 })
  aliqIcms: number | null;

  @Column('float', { name: 'VL_OPR', nullable: true, precision: 53 })
  vlOpr: number | null;

  @Column('float', { name: 'VL_BC_ICMS', nullable: true, precision: 53 })
  vlBcIcms: number | null;

  @Column('float', { name: 'VL_ICMS', nullable: true, precision: 53 })
  vlIcms: number | null;

  @Column('float', { name: 'VL_BC_ICMS_UF', nullable: true, precision: 53 })
  vlBcIcmsUf: number | null;

  @Column('float', { name: 'VL_ICMS_UF', nullable: true, precision: 53 })
  vlIcmsUf: number | null;

  @Column('float', { name: 'VL_RED_BC', nullable: true, precision: 53 })
  vlRedBc: number | null;

  @Column('varchar', { name: 'COD_OBS', nullable: true, length: 6 })
  codObs: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
