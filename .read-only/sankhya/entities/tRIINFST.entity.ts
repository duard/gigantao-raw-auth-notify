import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TRIINFST',
  [
    'codemp',
    'dtref',
    'tpamb',
    'sequencia',
    'chave',
    'nunota',
    'tipodocumento',
    'tpservico',
    'nuprocessoInssPrinc',
    'seqprocessoInssPrinc',
    'nuprocessoInssAdicional',
    'seqprocessoInssAdicional',
  ],
  { unique: true },
)
@Index('TRIINFST_I01', ['nunota'], {})
@Entity('TRIINFST', { schema: 'SANKHYA' })
export class TriinfstEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 255 })
  chave: string;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { primary: true, name: 'TPSERVICO' })
  tpservico: number;

  @Column('float', { name: 'VLRBASERET', nullable: true, precision: 53 })
  vlrbaseret: number | null;

  @Column('float', { name: 'VLRRETENCAO', nullable: true, precision: 53 })
  vlrretencao: number | null;

  @Column('float', { name: 'VLRRETSUB', nullable: true, precision: 53 })
  vlrretsub: number | null;

  @Column('float', { name: 'VLRNRETPRINC', nullable: true, precision: 53 })
  vlrnretprinc: number | null;

  @Column('float', { name: 'VLRSERVICOS15', nullable: true, precision: 53 })
  vlrservicos15: number | null;

  @Column('float', { name: 'VLRSERVICOS20', nullable: true, precision: 53 })
  vlrservicos20: number | null;

  @Column('float', { name: 'VLRSERVICOS25', nullable: true, precision: 53 })
  vlrservicos25: number | null;

  @Column('float', { name: 'VLRADICIONAL', nullable: true, precision: 53 })
  vlradicional: number | null;

  @Column('float', { name: 'VLRNRETADIC', nullable: true, precision: 53 })
  vlrnretadic: number | null;

  @Column('varchar', { primary: true, name: 'TIPODOCUMENTO', length: 1 })
  tipodocumento: string;

  @Column('smallint', { name: 'TPINSC', nullable: true })
  tpinsc: number | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 14 })
  nrinsc: string | null;

  @Column('smallint', { name: 'TPINSCESTAB', nullable: true })
  tpinscestab: number | null;

  @Column('varchar', { name: 'NRINSCESTAB', nullable: true, length: 14 })
  nrinscestab: string | null;

  @Column('smallint', { name: 'INDOBRA', nullable: true })
  indobra: number | null;

  @Column('varchar', { name: 'CNPJPRESTADOR', nullable: true, length: 14 })
  cnpjprestador: string | null;

  @Column('smallint', { name: 'INDCPRB', nullable: true })
  indcprb: number | null;

  @Column('float', { name: 'VLRTOTALBRUTO', nullable: true, precision: 53 })
  vlrtotalbruto: number | null;

  @Column('int', { primary: true, name: 'NUPROCESSO_INSS_PRINC' })
  nuprocessoInssPrinc: number;

  @Column('smallint', { primary: true, name: 'SEQPROCESSO_INSS_PRINC' })
  seqprocessoInssPrinc: number;

  @Column('int', { name: 'NUPROCESSO_INSS_15', nullable: true })
  nuprocessoInss_15: number | null;

  @Column('smallint', { name: 'SEQPROCESSO_INSS_15', nullable: true })
  seqprocessoInss_15: number | null;

  @Column('int', { name: 'NUPROCESSO_INSS_20', nullable: true })
  nuprocessoInss_20: number | null;

  @Column('smallint', { name: 'SEQPROCESSO_INSS_20', nullable: true })
  seqprocessoInss_20: number | null;

  @Column('int', { name: 'NUPROCESSO_INSS_25', nullable: true })
  nuprocessoInss_25: number | null;

  @Column('smallint', { name: 'SEQPROCESSO_INSS_25', nullable: true })
  seqprocessoInss_25: number | null;

  @Column('float', { name: 'VLRNRETADIC15', nullable: true, precision: 53 })
  vlrnretadic15: number | null;

  @Column('float', { name: 'VLRNRETADIC20', nullable: true, precision: 53 })
  vlrnretadic20: number | null;

  @Column('float', { name: 'VLRNRETADIC25', nullable: true, precision: 53 })
  vlrnretadic25: number | null;

  @Column('float', { name: 'VLRCRTOM', nullable: true, precision: 53 })
  vlrcrtom: number | null;

  @Column('float', { name: 'VLRCRTOMSUSP', nullable: true, precision: 53 })
  vlrcrtomsusp: number | null;

  @Column('float', { name: 'VLRRETENCAOCALC', nullable: true, precision: 53 })
  vlrretencaocalc: number | null;

  @Column('float', { name: 'VLRDIFRET', nullable: true, precision: 53 })
  vlrdifret: number | null;

  @Column('int', {
    primary: true,
    name: 'NUPROCESSO_INSS_ADICIONAL',
    default: () => '(-1)',
  })
  nuprocessoInssAdicional: number;

  @Column('smallint', {
    primary: true,
    name: 'SEQPROCESSO_INSS_ADICIONAL',
    default: () => '(-1)',
  })
  seqprocessoInssAdicional: number;

  @Column('int', { name: 'CODEMPESTAB', nullable: true })
  codempestab: number | null;

  @Column('int', { name: 'CODPARCPRESTADOR', nullable: true })
  codparcprestador: number | null;

  @Column('float', { name: 'VLRADICIONALCALC', nullable: true, precision: 53 })
  vlradicionalcalc: number | null;

  @Column('float', { name: 'VLRADICIONALDIF', nullable: true, precision: 53 })
  vlradicionaldif: number | null;
}
