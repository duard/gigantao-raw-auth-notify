import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFXIVD', ['codemp', 'codprod', 'codlocalorig', 'controle'], {
  unique: true,
})
@Entity('TFXIVD', { schema: 'SANKHYA' })
export class TfxivdEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODLOCALORIG', default: () => '(0)' })
  codlocalorig: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "' '",
  })
  controle: string;

  @Column('char', { name: 'USOPROD', length: 1, default: () => "'V'" })
  usoprod: string;

  @Column('int', { name: 'CODCFO', default: () => '(0)' })
  codcfo: number;

  @Column('float', { name: 'QTDNEG', precision: 53, default: () => '(0)' })
  qtdneg: number;

  @Column('float', { name: 'VLRUNIT', precision: 53, default: () => '(0)' })
  vlrunit: number;

  @Column('float', { name: 'VLRTOT', precision: 53, default: () => '(0)' })
  vlrtot: number;

  @Column('float', { name: 'VLRCUS', precision: 53, default: () => '(0)' })
  vlrcus: number;

  @Column('float', { name: 'BASEICMS', precision: 53, default: () => '(0)' })
  baseicms: number;

  @Column('float', { name: 'VLRICMS', precision: 53, default: () => '(0)' })
  vlricms: number;

  @Column('float', { name: 'VLRDESC', precision: 53, default: () => '(0)' })
  vlrdesc: number;

  @Column('float', { name: 'BASESUBSTIT', precision: 53, default: () => '(0)' })
  basesubstit: number;

  @Column('float', { name: 'VLRSUBST', precision: 53, default: () => '(0)' })
  vlrsubst: number;

  @Column('float', { name: 'ALIQICMS', nullable: true, precision: 53 })
  aliqicms: number | null;

  @Column('char', { name: 'PENDENTE', length: 1, default: () => "'S'" })
  pendente: string;

  @Column('varchar', { name: 'CODVOL', length: 2, default: () => "'0'" })
  codvol: string;

  @Column('smallint', { name: 'CODTRIB', nullable: true })
  codtrib: number | null;

  @Column('smallint', { name: 'CODOBSPADRAO', nullable: true })
  codobspadrao: number | null;

  @Column('smallint', { name: 'CODVEND', default: () => '(0)' })
  codvend: number;

  @Column('smallint', { name: 'CODEXEC', default: () => '(0)' })
  codexec: number;

  @Column('float', { name: 'VLRREPRED', precision: 53, default: () => '(0)' })
  vlrrepred: number;

  @Column('float', { name: 'PERCDESC', precision: 53, default: () => '(0)' })
  percdesc: number;

  @Column('float', {
    name: 'ALIQICMSRED',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  aliqicmsred: number | null;

  @Column('float', {
    name: 'BASESUBSTSEMRED',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  basesubstsemred: number | null;

  @Column('float', { name: 'BASICMMOD', nullable: true, precision: 53 })
  basicmmod: number | null;

  @Column('float', { name: 'BASICMSTMOD', nullable: true, precision: 53 })
  basicmstmod: number | null;

  @Column('float', { name: 'BASESTUFDEST', nullable: true, precision: 53 })
  basestufdest: number | null;

  @Column('float', { name: 'VLRICMSUFDEST', nullable: true, precision: 53 })
  vlricmsufdest: number | null;

  @Column('varchar', { name: 'PRODUTONFE', nullable: true, length: 60 })
  produtonfe: string | null;

  @Column('char', { name: 'CODANTECIPST', nullable: true, length: 1 })
  codantecipst: string | null;

  @Column('int', { name: 'CSOSN', nullable: true })
  csosn: number | null;

  @Column('int', { name: 'QTDVOL', nullable: true })
  qtdvol: number | null;

  @Column('float', { name: 'PESO', nullable: true, precision: 53 })
  peso: number | null;

  @Column('smallint', { name: 'VARIACAOFCP', nullable: true })
  variacaofcp: number | null;

  @Column('char', { name: 'ORIGPROD', nullable: true, length: 1 })
  origprod: string | null;

  @Column('char', { name: 'CANCELADO', nullable: true, length: 1 })
  cancelado: string | null;

  @Column('int', { name: 'IDALIQICMS', nullable: true })
  idaliqicms: number | null;

  @Column('int', { name: 'NUFOP', nullable: true })
  nufop: number | null;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;

  @Column('int', { name: 'CODESPECST', nullable: true })
  codespecst: number | null;

  @Column('varchar', { name: 'CODBENEFNAUF', nullable: true, length: 10 })
  codbenefnauf: string | null;
}
