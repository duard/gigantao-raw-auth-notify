import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TRITCAE',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave', 'codativecon'],
  {
    unique: true,
  },
)
@Entity('TRITCAE', { schema: 'SANKHYA' })
export class TritcaeEntity {
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

  @Column('varchar', { primary: true, name: 'CODATIVECON', length: 8 })
  codativecon: string;

  @Column('float', { name: 'VLRRECBRUTAATIV', nullable: true, precision: 53 })
  vlrrecbrutaativ: number | null;

  @Column('float', { name: 'VLREXCRECBRUTA', nullable: true, precision: 53 })
  vlrexcrecbruta: number | null;

  @Column('float', { name: 'VLRADICRECBRUTA', nullable: true, precision: 53 })
  vlradicrecbruta: number | null;

  @Column('float', { name: 'VLRBCCPRB', nullable: true, precision: 53 })
  vlrbccprb: number | null;

  @Column('float', { name: 'VLRCPRBAPUR', nullable: true, precision: 53 })
  vlrcprbapur: number | null;

  @Column('smallint', { name: 'TPINSC', nullable: true })
  tpinsc: number | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 14 })
  nrinsc: string | null;

  @Column('smallint', { name: 'TPINSCESTAB', nullable: true })
  tpinscestab: number | null;

  @Column('varchar', { name: 'NRINSCESTAB', nullable: true, length: 14 })
  nrinscestab: string | null;

  @Column('float', { name: 'VLRCPRBSUSP', nullable: true, precision: 53 })
  vlrcprbsusp: number | null;

  @Column('varchar', { name: 'CODRECOLHIMENTO', nullable: true, length: 6 })
  codrecolhimento: string | null;

  @Column('int', { name: 'CODEMPESTAB', nullable: true })
  codempestab: number | null;
}
