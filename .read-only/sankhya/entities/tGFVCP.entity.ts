import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFVCP', ['codrel', 'nunota', 'sequencia'], { unique: true })
@Entity('TGFVCP', { schema: 'SANKHYA' })
export class TgfvcpEntity {
  @Column('int', { primary: true, name: 'CODREL' })
  codrel: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'NUMNOTA', nullable: true })
  numnota: number | null;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('datetime', { name: 'DTFATUR', nullable: true })
  dtfatur: Date | null;

  @Column('datetime', { name: 'DTENTSAI', nullable: true })
  dtentsai: Date | null;

  @Column('varchar', { name: 'TIPMOV', nullable: true, length: 1 })
  tipmov: string | null;

  @Column('datetime', { name: 'DTMOV', nullable: true })
  dtmov: Date | null;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('smallint', { name: 'CODTIPOPER', nullable: true })
  codtipoper: number | null;

  @Column('datetime', { name: 'DHTIPOPER', nullable: true })
  dhtipoper: Date | null;

  @Column('smallint', { name: 'CODTIPVENDA', nullable: true })
  codtipvenda: number | null;

  @Column('datetime', { name: 'DHTIPVENDA', nullable: true })
  dhtipvenda: Date | null;

  @Column('varchar', { name: 'PENDENTE', nullable: true, length: 1 })
  pendente: string | null;

  @Column('varchar', { name: 'STATUSNOTA', nullable: true, length: 1 })
  statusnota: string | null;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('int', { name: 'CODLOCALORIG', nullable: true })
  codlocalorig: number | null;

  @Column('varchar', { name: 'CONTROLE', nullable: true, length: 11 })
  controle: string | null;

  @Column('float', { name: 'QTDNEG', nullable: true, precision: 53 })
  qtdneg: number | null;

  @Column('float', { name: 'VLRUNIT', nullable: true, precision: 53 })
  vlrunit: number | null;

  @Column('float', { name: 'VLRTOT', nullable: true, precision: 53 })
  vlrtot: number | null;

  @Column('float', { name: 'VLRCUS', nullable: true, precision: 53 })
  vlrcus: number | null;

  @Column('float', { name: 'BASEIPI', nullable: true, precision: 53 })
  baseipi: number | null;

  @Column('float', { name: 'VLRIPI', nullable: true, precision: 53 })
  vlripi: number | null;

  @Column('float', { name: 'ALIQIPI', nullable: true, precision: 53 })
  aliqipi: number | null;

  @Column('float', { name: 'BASEICMS', nullable: true, precision: 53 })
  baseicms: number | null;

  @Column('float', { name: 'VLRICMS', nullable: true, precision: 53 })
  vlricms: number | null;

  @Column('float', { name: 'ALIQICMS', nullable: true, precision: 53 })
  aliqicms: number | null;

  @Column('float', { name: 'VLRDESC', nullable: true, precision: 53 })
  vlrdesc: number | null;

  @Column('float', { name: 'BASESUBSTIT', nullable: true, precision: 53 })
  basesubstit: number | null;

  @Column('float', { name: 'VLRSUBST', nullable: true, precision: 53 })
  vlrsubst: number | null;

  @Column('varchar', { name: 'CODVOL', nullable: true, length: 2 })
  codvol: string | null;

  @Column('float', { name: 'QTDENTREGUE', nullable: true, precision: 53 })
  qtdentregue: number | null;

  @Column('datetime', { name: 'DTNEG', nullable: true })
  dtneg: Date | null;

  @Column('float', { name: 'QTDPEND', nullable: true, precision: 53 })
  qtdpend: number | null;
}
