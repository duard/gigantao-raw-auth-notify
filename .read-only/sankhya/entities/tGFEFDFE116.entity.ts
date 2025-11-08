import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFE116',
  ['codemp', 'dtref', 'regniv1', 'seqe100', 'regniv3', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFE116', { schema: 'SANKHYA' })
export class Tgfefdfe116Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'E001'",
  })
  regniv1: string;

  @Column('int', { primary: true, name: 'SEQE100' })
  seqe100: number;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV3',
    length: 4,
    default: () => "'E110'",
  })
  regniv3: string;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'E116'" })
  registro: string;

  @Column('varchar', { name: 'COD_OR', length: 3 })
  codOr: string;

  @Column('float', { name: 'VL_OR', nullable: true, precision: 53 })
  vlOr: number | null;

  @Column('datetime', { name: 'DT_VCTO', nullable: true })
  dtVcto: Date | null;

  @Column('varchar', { name: 'COD_REC', nullable: true, length: 255 })
  codRec: string | null;

  @Column('varchar', { name: 'NUM_PROC', length: 60 })
  numProc: string;

  @Column('varchar', { name: 'IND_PROC', nullable: true, length: 1 })
  indProc: string | null;

  @Column('varchar', { name: 'DESCPROC', nullable: true, length: 255 })
  descproc: string | null;

  @Column('varchar', { name: 'TXT_COMPL', nullable: true, length: 255 })
  txtCompl: string | null;

  @Column('datetime', { name: 'MES_REF', nullable: true })
  mesRef: Date | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
