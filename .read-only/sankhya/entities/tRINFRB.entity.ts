import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TRINFRB',
  [
    'codemp',
    'dtref',
    'tpamb',
    'sequencia',
    'chave',
    'codativecon',
    'nunota',
    'nuprocessoInss',
    'seqprocessoInss',
  ],
  { unique: true },
)
@Index('TRINFRB_I01', ['nunota'], {})
@Entity('TRINFRB', { schema: 'SANKHYA' })
export class TrinfrbEntity {
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

  @Column('int', { primary: true, name: 'CODATIVECON' })
  codativecon: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { name: 'TPINSC', nullable: true })
  tpinsc: number | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 14 })
  nrinsc: string | null;

  @Column('smallint', { name: 'TPINSCESTAB', nullable: true })
  tpinscestab: number | null;

  @Column('varchar', { name: 'NRINSCESTAB', nullable: true, length: 14 })
  nrinscestab: string | null;

  @Column('float', {
    name: 'VLRRECEITABRUTAESTAB',
    nullable: true,
    precision: 53,
  })
  vlrreceitabrutaestab: number | null;

  @Column('float', {
    name: 'VLRRECEITABRUTAATIV',
    nullable: true,
    precision: 53,
  })
  vlrreceitabrutaativ: number | null;

  @Column('float', {
    name: 'VLRABATIMENTOBRUTOATIV',
    nullable: true,
    precision: 53,
  })
  vlrabatimentobrutoativ: number | null;

  @Column('float', {
    name: 'VLREXCLUSAOBRUTAATIV',
    nullable: true,
    precision: 53,
  })
  vlrexclusaobrutaativ: number | null;

  @Column('float', { name: 'VLRCPRBAPUR', nullable: true, precision: 53 })
  vlrcprbapur: number | null;

  @Column('int', { primary: true, name: 'NUPROCESSO_INSS' })
  nuprocessoInss: number;

  @Column('smallint', { primary: true, name: 'SEQPROCESSO_INSS' })
  seqprocessoInss: number;

  @Column('float', { name: 'VLREXCRECBRUTA', nullable: true, precision: 53 })
  vlrexcrecbruta: number | null;

  @Column('float', { name: 'VLRBCCPRB', nullable: true, precision: 53 })
  vlrbccprb: number | null;

  @Column('float', { name: 'VLRCPRBSUSP', nullable: true, precision: 53 })
  vlrcprbsusp: number | null;

  @Column('varchar', { name: 'CODRECOLHIMENTO', nullable: true, length: 6 })
  codrecolhimento: string | null;

  @Column('float', { name: 'ALIQUOTA', nullable: true, precision: 53 })
  aliquota: number | null;

  @Column('int', { name: 'EMPFILIAL', nullable: true })
  empfilial: number | null;

  @Column('float', { name: 'VLRADICRECBRUTA', nullable: true, precision: 53 })
  vlradicrecbruta: number | null;

  @Column('int', { name: 'CODEMPESTAB', nullable: true })
  codempestab: number | null;
}
