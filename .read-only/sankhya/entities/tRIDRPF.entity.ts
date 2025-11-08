import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TRIDRPF',
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
    'codimp',
    'dtfg',
  ],
  { unique: true },
)
@Entity('TRIDRPF', { schema: 'SANKHYA' })
export class TridrpfEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('int', { name: 'CODPARC' })
  codparc: number;

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

  @Column('smallint', { primary: true, name: 'SEQITE' })
  seqite: number;

  @Column('datetime', { primary: true, name: 'DTFG' })
  dtfg: Date;

  @Column('varchar', { name: 'COMPFP', nullable: true, length: 7 })
  compfp: string | null;

  @Column('varchar', { name: 'INDDECTERC', nullable: true, length: 1 })
  inddecterc: string | null;

  @Column('float', { name: 'VLRRENDBRUTO', nullable: true, precision: 53 })
  vlrrendbruto: number | null;

  @Column('float', { name: 'VLRRENDTRIB', nullable: true, precision: 53 })
  vlrrendtrib: number | null;

  @Column('float', { name: 'VLRIR', nullable: true, precision: 53 })
  vlrir: number | null;

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

  @Column('varchar', { name: 'NRPROC', nullable: true, length: 21 })
  nrproc: string | null;

  @Column('smallint', { name: 'INDORIGREC', nullable: true })
  indorigrec: number | null;

  @Column('varchar', { name: 'CNPJORIGRECURSO', nullable: true, length: 14 })
  cnpjorigrecurso: string | null;

  @Column('varchar', { name: 'DESCRDEP', nullable: true, length: 30 })
  descrdep: string | null;

  @Column('float', { name: 'VLRDESPCUSTAS', nullable: true, precision: 53 })
  vlrdespcustas: number | null;

  @Column('float', { name: 'VLRDESPADVOGADOS', nullable: true, precision: 53 })
  vlrdespadvogados: number | null;

  @Column('smallint', { name: 'INDNIF', nullable: true })
  indnif: number | null;

  @Column('varchar', { name: 'NIFBENEF', nullable: true, length: 30 })
  nifbenef: string | null;

  @Column('smallint', { name: 'FRMTRIBUT', nullable: true })
  frmtribut: number | null;

  @Column('varchar', { name: 'DSCLOGRAD', nullable: true, length: 80 })
  dsclograd: string | null;

  @Column('varchar', { name: 'NRLOGRAD', nullable: true, length: 10 })
  nrlograd: string | null;

  @Column('varchar', { name: 'COMPLEM', nullable: true, length: 30 })
  complem: string | null;

  @Column('varchar', { name: 'BAIRRO', nullable: true, length: 30 })
  bairro: string | null;

  @Column('varchar', { name: 'CIDADE', nullable: true, length: 40 })
  cidade: string | null;

  @Column('varchar', { name: 'ESTADO', nullable: true, length: 40 })
  estado: string | null;

  @Column('varchar', { name: 'CODPOSTAL', nullable: true, length: 12 })
  codpostal: string | null;

  @Column('varchar', { name: 'TELEF', nullable: true, length: 17 })
  telef: string | null;

  @Column('smallint', { primary: true, name: 'CODIMP' })
  codimp: number;

  @Column('varchar', { name: 'OBSERV', nullable: true, length: 200 })
  observ: string | null;

  @Column('datetime', { name: 'DTESCRCONT', nullable: true })
  dtescrcont: Date | null;

  @Column('char', { name: 'TEMDEDIRPF', nullable: true, length: 1 })
  temdedirpf: string | null;
}
