import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFLIV_EXC',
  ['nunota', 'origem', 'sequencia', 'codemp', 'dtexclusao'],
  { unique: true },
)
@Index('TGFLIV_EXC_I01', ['codparc', 'empparc'], {})
@Entity('TGFLIV_EXC', { schema: 'SANKHYA' })
export class TgflivExcEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('char', { primary: true, name: 'ORIGEM', length: 1 })
  origem: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { name: 'NUMNOTA' })
  numnota: number;

  @Column('char', { name: 'SERIENOTA', nullable: true, length: 3 })
  serienota: string | null;

  @Column('datetime', { name: 'DTDOC' })
  dtdoc: Date;

  @Column('datetime', { name: 'DHMOV' })
  dhmov: Date;

  @Column('char', { name: 'EMPPARC', length: 1 })
  empparc: string;

  @Column('int', { name: 'CODPARC' })
  codparc: number;

  @Column('int', { name: 'CODCFO' })
  codcfo: number;

  @Column('int', { name: 'NUMLANC', nullable: true })
  numlanc: number | null;

  @Column('char', { name: 'ESPDOC', nullable: true, length: 2 })
  espdoc: string | null;

  @Column('smallint', { name: 'CODTRIB', nullable: true })
  codtrib: number | null;

  @Column('char', { name: 'TIPICMS', nullable: true, length: 1 })
  tipicms: string | null;

  @Column('money', { name: 'BASEICMS', nullable: true })
  baseicms: number | null;

  @Column('float', { name: 'ALIQICMS', nullable: true, precision: 53 })
  aliqicms: number | null;

  @Column('money', { name: 'VLRICMS', nullable: true })
  vlricms: number | null;

  @Column('money', { name: 'ISENTASICMS', nullable: true })
  isentasicms: number | null;

  @Column('money', { name: 'OUTRASICMS', nullable: true })
  outrasicms: number | null;

  @Column('money', { name: 'BASERETENCAO', nullable: true })
  baseretencao: number | null;

  @Column('money', { name: 'ICMSRETENCAO', nullable: true })
  icmsretencao: number | null;

  @Column('char', { name: 'TIPIPI', nullable: true, length: 1 })
  tipipi: string | null;

  @Column('money', { name: 'BASEIPI', nullable: true })
  baseipi: number | null;

  @Column('float', { name: 'ALIQIPI', nullable: true, precision: 53 })
  aliqipi: number | null;

  @Column('money', { name: 'VLRIPI', nullable: true })
  vlripi: number | null;

  @Column('money', { name: 'ISENTASIPI', nullable: true })
  isentasipi: number | null;

  @Column('money', { name: 'OUTRASIPI', nullable: true })
  outrasipi: number | null;

  @Column('money', { name: 'VLRCTB', nullable: true })
  vlrctb: number | null;

  @Column('int', { name: 'CODCTACTB', nullable: true })
  codctactb: number | null;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('char', { name: 'DIGITADO', length: 1 })
  digitado: string;

  @Column('char', { name: 'ENTSAI', nullable: true, length: 1 })
  entsai: string | null;

  @Column('money', { name: 'DIFICMS', nullable: true })
  dificms: number | null;

  @Column('char', { name: 'UFORIGEM', nullable: true, length: 2 })
  uforigem: string | null;

  @Column('char', { name: 'UFDESTINO', nullable: true, length: 2 })
  ufdestino: string | null;

  @Column('int', { name: 'NUMNOTA2', nullable: true })
  numnota2: number | null;

  @Column('money', { name: 'GTOTECF', nullable: true })
  gtotecf: number | null;

  @Column('datetime', { primary: true, name: 'DTEXCLUSAO' })
  dtexclusao: Date;

  @Column('char', { name: 'NT_USERNAME', nullable: true, length: 255 })
  ntUsername: string | null;

  @Column('datetime', { name: 'DTFILT', nullable: true })
  dtfilt: Date | null;

  @Column('smallint', { name: 'CODEMPORIG', nullable: true })
  codemporig: number | null;

  @Column('int', { name: 'CODMODDOC', nullable: true })
  codmoddoc: number | null;

  @Column('char', { name: 'HOSTNAME', nullable: true, length: 255 })
  hostname: string | null;

  @Column('char', { name: 'PROGRAMA', nullable: true, length: 80 })
  programa: string | null;

  @Column('int', { name: 'CODCONTATOENTREGA', nullable: true })
  codcontatoentrega: number | null;

  @Column('varchar', { name: 'UFENTREGA', nullable: true, length: 2 })
  ufentrega: string | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;
}
