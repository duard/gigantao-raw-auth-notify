import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDCF509',
  [
    'codemp',
    'dtref',
    'regniv1',
    'codempestab',
    'chave',
    'nuprocesso',
    'seqprocesso',
  ],
  { unique: true },
)
@Entity('TGFEFDCF509', { schema: 'SANKHYA' })
export class Tgfefdcf509Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'F001'",
  })
  regniv1: string;

  @Column('int', { primary: true, name: 'CODEMPESTAB' })
  codempestab: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('int', { primary: true, name: 'NUPROCESSO' })
  nuprocesso: number;

  @Column('smallint', { primary: true, name: 'SEQPROCESSO' })
  seqprocesso: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'F509'" })
  registro: string;

  @Column('varchar', { name: 'NUM_PROC', nullable: true, length: 21 })
  numProc: string | null;

  @Column('char', { name: 'IND_PROC', nullable: true, length: 1 })
  indProc: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
