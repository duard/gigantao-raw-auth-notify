import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TRINFAP',
  [
    'codemp',
    'dtref',
    'tpamb',
    'sequencia',
    'chave',
    'indaquis',
    'nunota',
    'nuprocessoInss',
    'seqprocessoInss',
    'nuprocessoSenar',
    'seqprocessoSenar',
    'nuprocessoGilrat',
    'seqprocessoGilrat',
  ],
  { unique: true },
)
@Entity('TRINFAP', { schema: 'SANKHYA' })
export class TrinfapEntity {
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

  @Column('varchar', { primary: true, name: 'INDAQUIS', length: 10 })
  indaquis: string;

  @Column('smallint', { name: 'INDOPCCP', nullable: true })
  indopccp: number | null;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { name: 'TPINSC', nullable: true })
  tpinsc: number | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 14 })
  nrinsc: string | null;

  @Column('smallint', { name: 'TPINSCPROD', nullable: true })
  tpinscprod: number | null;

  @Column('varchar', { name: 'NRINSCPROD', nullable: true, length: 14 })
  nrinscprod: string | null;

  @Column('smallint', { name: 'TPINSCESTAB', nullable: true })
  tpinscestab: number | null;

  @Column('varchar', { name: 'NRINSCESTAB', nullable: true, length: 14 })
  nrinscestab: string | null;

  @Column('float', { name: 'VLRBRUTO', nullable: true, precision: 53 })
  vlrbruto: number | null;

  @Column('float', { name: 'VLRCPAPUR', nullable: true, precision: 53 })
  vlrcpapur: number | null;

  @Column('float', { name: 'VLRRATAPUR', nullable: true, precision: 53 })
  vlrratapur: number | null;

  @Column('float', { name: 'VLRSENARAPUR', nullable: true, precision: 53 })
  vlrsenarapur: number | null;

  @Column('int', { primary: true, name: 'NUPROCESSO_INSS' })
  nuprocessoInss: number;

  @Column('smallint', { primary: true, name: 'SEQPROCESSO_INSS' })
  seqprocessoInss: number;

  @Column('int', { primary: true, name: 'NUPROCESSO_SENAR' })
  nuprocessoSenar: number;

  @Column('smallint', { primary: true, name: 'SEQPROCESSO_SENAR' })
  seqprocessoSenar: number;

  @Column('int', { primary: true, name: 'NUPROCESSO_GILRAT' })
  nuprocessoGilrat: number;

  @Column('smallint', { primary: true, name: 'SEQPROCESSO_GILRAT' })
  seqprocessoGilrat: number;

  @Column('float', { name: 'VLRCPSUSP', nullable: true, precision: 53 })
  vlrcpsusp: number | null;

  @Column('float', { name: 'VLRSENARSUSP', nullable: true, precision: 53 })
  vlrsenarsusp: number | null;

  @Column('float', { name: 'VLRRATSUSP', nullable: true, precision: 53 })
  vlrratsusp: number | null;

  @Column('float', { name: 'VLRBASECPAPUR', nullable: true, precision: 53 })
  vlrbasecpapur: number | null;

  @Column('float', { name: 'VLRBASERATAPUR', nullable: true, precision: 53 })
  vlrbaseratapur: number | null;

  @Column('float', { name: 'VLRBASESENARAPUR', nullable: true, precision: 53 })
  vlrbasesenarapur: number | null;

  @Column('int', { name: 'CODEMPESTAB', nullable: true })
  codempestab: number | null;
}
