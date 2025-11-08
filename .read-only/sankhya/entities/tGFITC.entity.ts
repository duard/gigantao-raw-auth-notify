import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgfmtcEntity } from './tGFMTC.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfcotEntity } from './tGFCOT.entity';
import { TgfitdEntity } from './tGFITD.entity';

@Index(
  'PK_TGFITC',
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
@Index('TGFITC_I01', ['cabecalho', 'numcotacao', 'codparc'], {})
@Index(
  'TGFITC_I02',
  [
    'numcotacao',
    'codprod',
    'controle',
    'codlocal',
    'diferenciador',
    'seqnotacpa',
    'nunotacpa',
  ],
  {},
)
@Entity('TGFITC', { schema: 'SANKHYA' })
export class TgfitcEntity {
  @Column('int', { primary: true, name: 'NUMCOTACAO' })
  numcotacao: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('char', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "' '",
  })
  controle: string;

  @Column('int', { primary: true, name: 'CODLOCAL', default: () => '(0)' })
  codlocal: number;

  @Column('int', { name: 'CODCONTATO', nullable: true })
  codcontato: number | null;

  @Column('datetime', { name: 'DTCOLETAPRECO', nullable: true })
  dtcoletapreco: Date | null;

  @Column('smallint', { name: 'PRAZOVALPROP', nullable: true })
  prazovalprop: number | null;

  @Column('float', { name: 'PRECO', nullable: true, precision: 53 })
  preco: number | null;

  @Column('float', { name: 'IPI', nullable: true, precision: 53 })
  ipi: number | null;

  @Column('float', { name: 'ICMS', nullable: true, precision: 53 })
  icms: number | null;

  @Column('float', { name: 'FRETE', nullable: true, precision: 53 })
  frete: number | null;

  @Column('float', { name: 'OUTROS', nullable: true, precision: 53 })
  outros: number | null;

  @Column('float', { name: 'TAXAJURO', nullable: true, precision: 53 })
  taxajuro: number | null;

  @Column('smallint', { name: 'GARANTIA', nullable: true })
  garantia: number | null;

  @Column('float', { name: 'QTDCOTADA', nullable: true, precision: 53 })
  qtdcotada: number | null;

  @Column('float', { name: 'FATMINIMO', nullable: true, precision: 53 })
  fatminimo: number | null;

  @Column('float', {
    name: 'RESULTCOT',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  resultcot: number | null;

  @Column('smallint', { name: 'PRAZOMEDIO', nullable: true })
  prazomedio: number | null;

  @Column('smallint', { name: 'PRAZOENTREGA', nullable: true })
  prazoentrega: number | null;

  @Column('smallint', { name: 'QUALPROD', default: () => '(0)' })
  qualprod: number;

  @Column('smallint', { name: 'CONFIABFORN', default: () => '(0)' })
  confiabforn: number;

  @Column('smallint', { name: 'QUALATEND', default: () => '(0)' })
  qualatend: number;

  @Column('char', {
    name: 'MELHOR',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  melhor: string | null;

  @Column('smallint', { name: 'CODTIPVENDA', default: () => '(0)' })
  codtipvenda: number;

  @Column('char', { name: 'OBS', nullable: true, length: 255 })
  obs: string | null;

  @Column('char', {
    name: 'SITUACAO',
    nullable: true,
    length: 1,
    default: () => "'P'",
  })
  situacao: string | null;

  @Column('float', { name: 'PERCDESC', nullable: true, precision: 53 })
  percdesc: number | null;

  @Column('float', { name: 'VLRDESC', nullable: true, precision: 53 })
  vlrdesc: number | null;

  @Column('float', { name: 'PERCACRESC', nullable: true, precision: 53 })
  percacresc: number | null;

  @Column('float', { name: 'VLRACRESC', nullable: true, precision: 53 })
  vlracresc: number | null;

  @Column('datetime', { name: 'DTMOEDA', nullable: true })
  dtmoeda: Date | null;

  @Column('int', { name: 'CODMOEDA', nullable: true })
  codmoeda: number | null;

  @Column('float', { name: 'VLRMOEDA', nullable: true, precision: 53 })
  vlrmoeda: number | null;

  @Column('char', {
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

  @Column('float', { name: 'CUSMEDICM', nullable: true, precision: 53 })
  cusmedicm: number | null;

  @Column('float', { name: 'CUSSEMICM', nullable: true, precision: 53 })
  cussemicm: number | null;

  @Column('float', { name: 'CUSREP', nullable: true, precision: 53 })
  cusrep: number | null;

  @Column('float', { name: 'CUSGER', nullable: true, precision: 53 })
  cusger: number | null;

  @Column('float', { name: 'VLRSUBST', nullable: true, precision: 53 })
  vlrsubst: number | null;

  @Column('float', { name: 'CUSVARIAVEL', nullable: true, precision: 53 })
  cusvariavel: number | null;

  @Column('float', { name: 'PRECOCALC', nullable: true, precision: 53 })
  precocalc: number | null;

  @Column('float', { name: 'ALIQIPI', nullable: true, precision: 53 })
  aliqipi: number | null;

  @Column('float', { name: 'ALIQICMS', nullable: true, precision: 53 })
  aliqicms: number | null;

  @Column('float', { name: 'DIFALIQICMS', nullable: true, precision: 53 })
  difaliqicms: number | null;

  @Column('float', { name: 'VLRDESCRAT', nullable: true, precision: 53 })
  vlrdescrat: number | null;

  @Column('float', { name: 'FRETERAT', nullable: true, precision: 53 })
  freterat: number | null;

  @Column('datetime', { name: 'DHENTREGA', nullable: true })
  dhentrega: Date | null;

  @Column('datetime', { name: 'DHEMBARQUE', nullable: true })
  dhembarque: Date | null;

  @Column('int', { name: 'CAPVEICULO', nullable: true })
  capveiculo: number | null;

  @Column('char', { name: 'TIPCARGA', nullable: true, length: 40 })
  tipcarga: string | null;

  @Column('float', { name: 'AVALFORNEC', nullable: true, precision: 53 })
  avalfornec: number | null;

  @Column('int', { name: 'NUMEROOS', nullable: true })
  numeroos: number | null;

  @Column('int', { name: 'SEQITEMCOT', nullable: true })
  seqitemcot: number | null;

  @Column('datetime', { name: 'DTLIMITE', nullable: true })
  dtlimite: Date | null;

  @Column('datetime', { name: 'DTENVIOCOT', nullable: true })
  dtenviocot: Date | null;

  @Column('int', { name: 'RESPMINCOT', nullable: true })
  respmincot: number | null;

  @Column('datetime', { name: 'DTLIMPRECO', nullable: true })
  dtlimpreco: Date | null;

  @Column('varchar', {
    name: 'TIPOCOLPRECO',
    nullable: true,
    length: 10,
    default: () => "'MANUAL'",
  })
  tipocolpreco: string | null;

  @Column('varchar', { name: 'STATUSPRODCOT', length: 1, default: () => "'O'" })
  statusprodcot: string;

  @Column('varchar', { name: 'CONDPAGT', nullable: true, length: 30 })
  condpagt: string | null;

  @Column('smallint', { name: 'PRAZOPARC', nullable: true })
  prazoparc: number | null;

  @Column('smallint', { name: 'QTDPARCPAGT', nullable: true })
  qtdparcpagt: number | null;

  @Column('int', { name: 'NUNOTACPA', nullable: true })
  nunotacpa: number | null;

  @Column('smallint', { name: 'SEQNOTACPA', nullable: true })
  seqnotacpa: number | null;

  @Column('int', { name: 'CODPRODESP', nullable: true })
  codprodesp: number | null;

  @Column('char', { name: 'MODFRETE', nullable: true, length: 1 })
  modfrete: string | null;

  @Column('float', { name: 'CUSTOFINAL', nullable: true, precision: 53 })
  custofinal: number | null;

  @Column('float', { name: 'PRECOMOE', nullable: true, precision: 53 })
  precomoe: number | null;

  @Column('float', { name: 'VLRDESCMOE', nullable: true, precision: 53 })
  vlrdescmoe: number | null;

  @Column('smallint', { name: 'VALPROPOSTA', nullable: true })
  valproposta: number | null;

  @Column('varchar', { name: 'OBSMOTCANC', nullable: true, length: 255 })
  obsmotcanc: string | null;

  @Column('int', { name: 'AD_NUNOTAPED', nullable: true })
  adNunotaped: number | null;

  @Column('float', { name: 'AD_QTDCOTADA', nullable: true, precision: 53 })
  adQtdcotada: number | null;

  @Column('float', { name: 'AD_QTDNEGOC', nullable: true, precision: 53 })
  adQtdnegoc: number | null;

  @Column('varchar', { name: 'AD_CONTROLE', nullable: true, length: 100 })
  adControle: string | null;

  @Column('varchar', { name: 'AD_APROVAALT', nullable: true, length: 10 })
  adAprovaalt: string | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfitcs)
  @JoinColumn([{ name: 'CODPARCDEST', referencedColumnName: 'codparc' }])
  codparcdest: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfitcs2)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgfitcs)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol: TgfvolEntity;

  @ManyToOne(() => TgfmtcEntity, (tgfmtcEntity) => tgfmtcEntity.tgfitcs)
  @JoinColumn([{ name: 'CODMOTCAN', referencedColumnName: 'codigo' }])
  codmotcan: TgfmtcEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfitcs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfcotEntity, (tgfcotEntity) => tgfcotEntity.tgfitcs)
  @JoinColumn([{ name: 'NUMCOTACAO', referencedColumnName: 'numcotacao' }])
  numcotacao2: TgfcotEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfitcs2)
  @JoinColumn([{ name: 'AD_CODPROD', referencedColumnName: 'codprod' }])
  adCodprod: TgfproEntity;

  @OneToMany(() => TgfitdEntity, (tgfitdEntity) => tgfitdEntity.tgfitc)
  tgfitds: TgfitdEntity[];
}
