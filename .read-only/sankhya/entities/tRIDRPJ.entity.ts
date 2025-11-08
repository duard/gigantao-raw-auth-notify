import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TRIDRPJ',
  [
    'codemp',
    'dtref',
    'tpamb',
    'sequencia',
    'chave',
    'nrodocumento',
    'tipodocumento',
    'natrend',
    'seqite',
    'dtfg',
  ],
  { unique: true },
)
@Entity('TRIDRPJ', { schema: 'SANKHYA' })
export class TridrpjEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 255 })
  chave: string;

  @Column('int', { primary: true, name: 'NRODOCUMENTO' })
  nrodocumento: number;

  @Column('varchar', { primary: true, name: 'TIPODOCUMENTO', length: 1 })
  tipodocumento: string;

  @Column('smallint', { primary: true, name: 'NATREND' })
  natrend: number;

  @Column('datetime', { primary: true, name: 'DTFG' })
  dtfg: Date;

  @Column('float', { name: 'VLRBRUTO', nullable: true, precision: 53 })
  vlrbruto: number | null;

  @Column('smallint', { name: 'INDFCISCP', nullable: true })
  indfciscp: number | null;

  @Column('varchar', { name: 'NRINSCFCISCP', nullable: true, length: 14 })
  nrinscfciscp: string | null;

  @Column('smallint', { name: 'PERCSCP', nullable: true })
  percscp: number | null;

  @Column('varchar', { name: 'INDJUD', nullable: true, length: 1 })
  indjud: string | null;

  @Column('varchar', { name: 'PAISRESIDEXT', nullable: true, length: 3 })
  paisresidext: string | null;

  @Column('float', { name: 'VLRBASEIR', nullable: true, precision: 53 })
  vlrbaseir: number | null;

  @Column('float', { name: 'VLRIR', nullable: true, precision: 53 })
  vlrir: number | null;

  @Column('float', { name: 'VLRBASEAGREG', nullable: true, precision: 53 })
  vlrbaseagreg: number | null;

  @Column('float', { name: 'VLRAGREG', nullable: true, precision: 53 })
  vlragreg: number | null;

  @Column('float', { name: 'VLRBASECSLL', nullable: true, precision: 53 })
  vlrbasecsll: number | null;

  @Column('float', { name: 'VLRCSLL', nullable: true, precision: 53 })
  vlrcsll: number | null;

  @Column('float', { name: 'VLRBASECOFINS', nullable: true, precision: 53 })
  vlrbasecofins: number | null;

  @Column('float', { name: 'VLRCOFINS', nullable: true, precision: 53 })
  vlrcofins: number | null;

  @Column('float', { name: 'VLRBASEPP', nullable: true, precision: 53 })
  vlrbasepp: number | null;

  @Column('float', { name: 'VLRPP', nullable: true, precision: 53 })
  vlrpp: number | null;

  @Column('smallint', { name: 'INDORIGREC', nullable: true })
  indorigrec: number | null;

  @Column('float', { name: 'VLRDESPCUSTAS', nullable: true, precision: 53 })
  vlrdespcustas: number | null;

  @Column('float', { name: 'VLRDESPADVOGADOS', nullable: true, precision: 53 })
  vlrdespadvogados: number | null;

  @Column('varchar', { name: 'CNPJORIGRECURSO', nullable: true, length: 14 })
  cnpjorigrecurso: string | null;

  @Column('varchar', { name: 'DESCRDEP', nullable: true, length: 50 })
  descrdep: string | null;

  @Column('varchar', { name: 'NRPROC', nullable: true, length: 60 })
  nrproc: string | null;

  @Column('smallint', { name: 'INDNIF', nullable: true })
  indnif: number | null;

  @Column('varchar', { name: 'NIFBENEF', nullable: true, length: 30 })
  nifbenef: string | null;

  @Column('smallint', { name: 'RELFONTPG', nullable: true })
  relfontpg: number | null;

  @Column('smallint', { name: 'FRMTRIBUT', nullable: true })
  frmtribut: number | null;

  @Column('varchar', { name: 'DSCLOGRAD', nullable: true, length: 80 })
  dsclograd: string | null;

  @Column('varchar', { name: 'NRLOGRAD', nullable: true, length: 10 })
  nrlograd: string | null;

  @Column('varchar', { name: 'COMPLEM', nullable: true, length: 30 })
  complem: string | null;

  @Column('varchar', { name: 'BAIRRO', nullable: true, length: 60 })
  bairro: string | null;

  @Column('varchar', { name: 'CIDADE', nullable: true, length: 40 })
  cidade: string | null;

  @Column('varchar', { name: 'ESTADO', nullable: true, length: 40 })
  estado: string | null;

  @Column('varchar', { name: 'CODPOSTAL', nullable: true, length: 12 })
  codpostal: string | null;

  @Column('varchar', { name: 'TELEF', nullable: true, length: 15 })
  telef: string | null;

  @Column('int', { name: 'CODPARC' })
  codparc: number;

  @Column('smallint', { primary: true, name: 'SEQITE' })
  seqite: number;

  @Column('datetime', { name: 'DTESCRCONT', nullable: true })
  dtescrcont: Date | null;

  @Column('varchar', { name: 'OBSERV', nullable: true, length: 200 })
  observ: string | null;
}
