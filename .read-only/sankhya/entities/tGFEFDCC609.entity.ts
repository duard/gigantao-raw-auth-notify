import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDCC609',
  [
    'codemp',
    'dtref',
    'regniv1',
    'codempestab',
    'seqc600',
    'nuprocesso',
    'seqprocesso',
  ],
  { unique: true },
)
@Entity('TGFEFDCC609', { schema: 'SANKHYA' })
export class Tgfefdcc609Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'C001'",
  })
  regniv1: string;

  @Column('int', { primary: true, name: 'CODEMPESTAB' })
  codempestab: number;

  @Column('int', { primary: true, name: 'SEQC600' })
  seqc600: number;

  @Column('int', { primary: true, name: 'NUPROCESSO' })
  nuprocesso: number;

  @Column('smallint', { primary: true, name: 'SEQPROCESSO' })
  seqprocesso: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C609'" })
  registro: string;

  @Column('varchar', { name: 'NUM_PROC', nullable: true, length: 21 })
  numProc: string | null;

  @Column('varchar', { name: 'IND_PROC', nullable: true, length: 1 })
  indProc: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
