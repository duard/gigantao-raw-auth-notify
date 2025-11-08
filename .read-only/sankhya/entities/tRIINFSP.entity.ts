import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TRIINFSP',
  [
    'codemp',
    'dtref',
    'tpamb',
    'sequencia',
    'chave',
    'nunota',
    'tpservico',
    'nuprocessoInssPrinc',
    'seqprocessoInssPrinc',
    'nuprocessoInssAdicional',
    'seqprocessoInssAdicional',
  ],
  { unique: true },
)
@Index('TRIINFSP_I01', ['nunota'], {})
@Entity('TRIINFSP', { schema: 'SANKHYA' })
export class TriinfspEntity {
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

  @Column('varchar', { primary: true, name: 'TPSERVICO', length: 10 })
  tpservico: string;

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

  @Column('smallint', { name: 'TPINSC', nullable: true })
  tpinsc: number | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 14 })
  nrinsc: string | null;

  @Column('smallint', { name: 'TPINSCESTABPREST', nullable: true })
  tpinscestabprest: number | null;

  @Column('varchar', { name: 'NRINSCESTABPREST', nullable: true, length: 14 })
  nrinscestabprest: string | null;

  @Column('smallint', { name: 'TPINSCTOMADOR', nullable: true })
  tpinsctomador: number | null;

  @Column('varchar', { name: 'NRINSCTOMADOR', nullable: true, length: 14 })
  nrinsctomador: string | null;

  @Column('smallint', { name: 'INDOBRA', nullable: true })
  indobra: number | null;

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

  @Column('int', { name: 'CODEMPESTABPREST', nullable: true })
  codempestabprest: number | null;

  @Column('int', { name: 'CODPARCTOMADOR', nullable: true })
  codparctomador: number | null;

  @Column('float', { name: 'VLRADICIONALCALC', nullable: true, precision: 53 })
  vlradicionalcalc: number | null;

  @Column('float', { name: 'VLRADICIONALDIF', nullable: true, precision: 53 })
  vlradicionaldif: number | null;
}
