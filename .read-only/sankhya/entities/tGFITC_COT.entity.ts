import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFITC_COT',
  [
    'numcotacao',
    'codprod',
    'codparc',
    'controle',
    'codlocal',
    'cabecalho',
    'diferenciador',
  ],
  { unique: true },
)
@Entity('TGFITC_COT', { schema: 'SANKHYA' })
export class TgfitcCotEntity {
  @Column('int', { primary: true, name: 'NUMCOTACAO' })
  numcotacao: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "' '",
  })
  controle: string;

  @Column('int', { primary: true, name: 'CODLOCAL', default: () => '(0)' })
  codlocal: number;

  @Column('smallint', { name: 'CODCONTATO', nullable: true })
  codcontato: number | null;

  @Column('float', { name: 'PRECO', nullable: true, precision: 53 })
  preco: number | null;

  @Column('float', { name: 'IPI', nullable: true, precision: 53 })
  ipi: number | null;

  @Column('float', { name: 'ICMS', nullable: true, precision: 53 })
  icms: number | null;

  @Column('float', { name: 'FRETE', nullable: true, precision: 53 })
  frete: number | null;

  @Column('float', { name: 'QTDCOTADA', nullable: true, precision: 53 })
  qtdcotada: number | null;

  @Column('varchar', { name: 'OBS', nullable: true, length: 255 })
  obs: string | null;

  @Column('float', { name: 'VLRDESC', nullable: true, precision: 53 })
  vlrdesc: number | null;

  @Column('float', { name: 'PERCDESC', nullable: true, precision: 53 })
  percdesc: number | null;

  @Column('varchar', {
    primary: true,
    name: 'CABECALHO',
    length: 1,
    default: () => "'N'",
  })
  cabecalho: string;

  @Column('smallint', {
    primary: true,
    name: 'DIFERENCIADOR',
    default: () => '(0)',
  })
  diferenciador: number;

  @Column('float', { name: 'VLRSUBST', nullable: true, precision: 53 })
  vlrsubst: number | null;

  @Column('float', { name: 'ALIQIPI', nullable: true, precision: 53 })
  aliqipi: number | null;

  @Column('float', { name: 'ALIQICMS', nullable: true, precision: 53 })
  aliqicms: number | null;

  @Column('date', { name: 'DHENTREGA', nullable: true })
  dhentrega: Date | null;

  @Column('varchar', { name: 'STATUSPROD', nullable: true, length: 1 })
  statusprod: string | null;

  @Column('varchar', { name: 'CODPROPARC', nullable: true, length: 40 })
  codproparc: string | null;

  @Column('varchar', { name: 'DESCRPROPARC', nullable: true, length: 80 })
  descrproparc: string | null;

  @Column('smallint', {
    name: 'REJEITADO',
    nullable: true,
    default: () => '(0)',
  })
  rejeitado: number | null;

  @Column('varchar', { name: 'CONDPAGT', nullable: true, length: 30 })
  condpagt: string | null;

  @Column('smallint', { name: 'PRAZOPARC', nullable: true })
  prazoparc: number | null;

  @Column('smallint', { name: 'QTDPARCPAGT', nullable: true })
  qtdparcpagt: number | null;

  @Column('float', { name: 'VLRACRESC', nullable: true, precision: 53 })
  vlracresc: number | null;

  @Column('float', { name: 'PERCACRESC', nullable: true, precision: 53 })
  percacresc: number | null;

  @Column('float', { name: 'OUTROS', nullable: true, precision: 53 })
  outros: number | null;

  @Column('int', { name: 'TAXAJURO', nullable: true })
  taxajuro: number | null;

  @Column('smallint', { name: 'PRAZOMEDIO', nullable: true })
  prazomedio: number | null;

  @Column('smallint', { name: 'PRAZOENTREGA', nullable: true })
  prazoentrega: number | null;

  @Column('smallint', { name: 'GARANTIA', nullable: true })
  garantia: number | null;

  @Column('char', { name: 'MODFRETE', nullable: true, length: 1 })
  modfrete: string | null;

  @Column('int', { name: 'CODMOEDA', nullable: true })
  codmoeda: number | null;

  @Column('int', { name: 'CODTIPVENDA', nullable: true })
  codtipvenda: number | null;
}
