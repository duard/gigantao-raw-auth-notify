import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { AdApontamentoEntity } from './aD_APONTAMENTO.entity';
import { AdApontamentoschecklistEntity } from './aD_APONTAMENTOSCHECKLIST.entity';
import { AdChecklistEntity } from './aD_CHECKLIST.entity';
import { AdChecklistlavautoEntity } from './aD_CHECKLISTLAVAUTO.entity';
import { AdConsumoveiculosEntity } from './aD_CONSUMOVEICULOS.entity';
import { AdProdmanutencaoEntity } from './aD_PRODMANUTENCAO.entity';
import { AdSopragemiteEntity } from './aD_SOPRAGEMITE.entity';
import { TapvpjEntity } from './tAPVPJ.entity';
import { TcecabEntity } from './tCECAB.entity';
import { TcecabHisEntity } from './tCECAB_HIS.entity';
import { TcfabtEntity } from './tCFABT.entity';
import { TcfcptEntity } from './tCFCPT.entity';
import { TcfmanveiEntity } from './tCFMANVEI.entity';
import { TcfoscabEntity } from './tCFOSCAB.entity';
import { TcfpnuEntity } from './tCFPNU.entity';
import { TcfpnuhistEntity } from './tCFPNUHIST.entity';
import { TcsaceEntity } from './tCSACE.entity';
import { TcsaveEntity } from './tCSAVE.entity';
import { TcscveEntity } from './tCSCVE.entity';
import { TcsiteEntity } from './tCSITE.entity';
import { TgaahEntity } from './tGAAH.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfcveEntity } from './tGFCVE.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TgfigtvEntity } from './tGFIGTV.entity';
import { TgfordEntity } from './tGFORD.entity';
import { TgfpecEntity } from './tGFPEC.entity';
import { TgfravEntity } from './tGFRAV.entity';
import { TgftfrEntity } from './tGFTFR.entity';
import { TsicidEntity } from './tSICID.entity';
import { Tpqqu1Entity } from './tPQQU1.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TmstrdEntity } from './tMSTRD.entity';
import { TsiforEntity } from './tSIFOR.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfveidocEntity } from './tGFVEIDOC.entity';
import { TgfviagEntity } from './tGFVIAG.entity';
import { TmscmpEntity } from './tMSCMP.entity';
import { TmscmphistEntity } from './tMSCMPHIST.entity';
import { TmsfvgEntity } from './tMSFVG.entity';
import { TmsfvmEntity } from './tMSFVM.entity';
import { TmsordcarregEntity } from './tMSORDCARREG.entity';
import { TmsveihkmEntity } from './tMSVEIHKM.entity';
import { TpqrpoEntity } from './tPQRPO.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFVEI', ['codveiculo'], { unique: true })
@Index('TGFVEI_CODPROD', ['codprod'], {})
@Entity('TGFVEI', { schema: 'SANKHYA' })
export class TgfveiEntity {
  @Column('int', { primary: true, name: 'CODVEICULO' })
  codveiculo: number;

  @Column('char', { name: 'PLACA', length: 10 })
  placa: string;

  @Column('char', { name: 'EMPPARC', length: 1, default: () => "'P'" })
  empparc: string;

  @Column('int', { name: 'CODPARC' })
  codparc: number;

  @Column('char', { name: 'PROPRIO', length: 1, default: () => "'S'" })
  proprio: string;

  @Column('char', { name: 'COMBUSTIVEL', length: 1, default: () => "'D'" })
  combustivel: string;

  @Column('char', { name: 'EMITEEXPED', length: 1, default: () => "'S'" })
  emiteexped: string;

  @Column('char', { name: 'VIATRANSP', length: 1, default: () => "'R'" })
  viatransp: string;

  @Column('char', { name: 'MARCAMODELO', nullable: true, length: 30 })
  marcamodelo: string | null;

  @Column('varchar', { name: 'ESPECIETIPO', nullable: true, length: 22 })
  especietipo: string | null;

  @Column('char', { name: 'CAPPOTCIL', nullable: true, length: 15 })
  cappotcil: string | null;

  @Column('char', { name: 'COR', nullable: true, length: 20 })
  cor: string | null;

  @Column('smallint', { name: 'ANOFABRIC', nullable: true })
  anofabric: number | null;

  @Column('char', { name: 'CHASSIS', nullable: true, length: 18 })
  chassis: string | null;

  @Column('char', { name: 'NUMMOTOR', nullable: true, length: 18 })
  nummotor: string | null;

  @Column('money', { name: 'VLRSEGMENSAL', nullable: true })
  vlrsegmensal: number | null;

  @Column('money', { name: 'VLRDEPRECMENSAL', nullable: true })
  vlrdeprecmensal: number | null;

  @Column('smallint', { name: 'CODEMPFOLHA', nullable: true })
  codempfolha: number | null;

  @Column('int', { name: 'CODFUNC', nullable: true })
  codfunc: number | null;

  @Column('char', { name: 'CATEGORIA', nullable: true, length: 20 })
  categoria: string | null;

  @Column('float', { name: 'PESOMAX', precision: 53, default: () => '(0)' })
  pesomax: number;

  @Column('float', { name: 'M3MAX', nullable: true, precision: 53 })
  m3Max: number | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('smallint', { name: 'ANOMOD', nullable: true })
  anomod: number | null;

  @Column('char', { name: 'RENAVAM', nullable: true, length: 15 })
  renavam: string | null;

  @Column('char', { name: 'VOLTAGEM', nullable: true, length: 10 })
  voltagem: string | null;

  @Column('char', { name: 'ANTT', nullable: true, length: 20 })
  antt: string | null;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('varchar', { name: 'CORFAB', nullable: true, length: 20 })
  corfab: string | null;

  @Column('varchar', { name: 'POTENCIA', nullable: true, length: 4 })
  potencia: string | null;

  @Column('varchar', { name: 'SERIAL', nullable: true, length: 9 })
  serial: string | null;

  @Column('varchar', { name: 'CMKG', nullable: true, length: 9 })
  cmkg: string | null;

  @Column('varchar', { name: 'DISTEIXOS', nullable: true, length: 4 })
  disteixos: string | null;

  @Column('varchar', { name: 'TIPINT', nullable: true, length: 1 })
  tipint: string | null;

  @Column('int', { name: 'TIPVEI', nullable: true })
  tipvei: number | null;

  @Column('int', { name: 'ESPVEI', nullable: true })
  espvei: number | null;

  @Column('varchar', { name: 'CONDVIN', nullable: true, length: 1 })
  condvin: string | null;

  @Column('int', { name: 'CONDVEI', nullable: true })
  condvei: number | null;

  @Column('int', { name: 'CODMARCAMOD', nullable: true })
  codmarcamod: number | null;

  @Column('int', { name: 'NURESPPERG', nullable: true })
  nurespperg: number | null;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('smallint', { name: 'TIPOCOMBUST', nullable: true })
  tipocombust: number | null;

  @Column('smallint', { name: 'CORDENATRAN', nullable: true })
  cordenatran: number | null;

  @Column('smallint', { name: 'MAXLOTACAO', nullable: true })
  maxlotacao: number | null;

  @Column('smallint', { name: 'RESTRICAO', default: () => '(0)' })
  restricao: number;

  @Column('varchar', {
    name: 'TIPOROD',
    nullable: true,
    length: 2,
    default: () => "'00'",
  })
  tiporod: string | null;

  @Column('varchar', {
    name: 'TIPOCAR',
    nullable: true,
    length: 2,
    default: () => "'00'",
  })
  tipocar: string | null;

  @Column('char', {
    name: 'TIPOPROP',
    nullable: true,
    length: 1,
    default: () => "'2'",
  })
  tipoprop: string | null;

  @Column('float', { name: 'TARA', nullable: true, precision: 53 })
  tara: number | null;

  @Column('varchar', { name: 'CODBEM', nullable: true, length: 30 })
  codbem: string | null;

  @Column('int', { name: 'CODCENCUS', nullable: true })
  codcencus: number | null;

  @Column('char', { name: 'AFERICAO', length: 1, default: () => "'N'" })
  afericao: string;

  @Column('char', { name: 'TIPOAFERICAO', length: 1, default: () => "'K'" })
  tipoafericao: string;

  @Column('varchar', { name: 'TIPROD', nullable: true, length: 2 })
  tiprod: string | null;

  @Column('varchar', { name: 'TIPCAR', nullable: true, length: 2 })
  tipcar: string | null;

  @Column('char', { name: 'TIPPROP', nullable: true, length: 1 })
  tipprop: string | null;

  @Column('smallint', { name: 'CODFORMCUSTOFRETE', nullable: true })
  codformcustofrete: number | null;

  @Column('varchar', { name: 'CODEMBARCACAO', nullable: true, length: 10 })
  codembarcacao: string | null;

  @Column('smallint', { name: 'TIPOEMBARCACAO', nullable: true })
  tipoembarcacao: number | null;

  @Column('varchar', { name: 'NOMEEMBARCACAO', nullable: true, length: 60 })
  nomeembarcacao: string | null;

  @Column('varchar', {
    name: 'TIPOVEICULO',
    nullable: true,
    length: 1,
    default: () => "'1'",
  })
  tipoveiculo: string | null;

  @Column('varchar', { name: 'CAVALO', nullable: true, length: 1 })
  cavalo: string | null;

  @Column('varchar', { name: 'BLOQUEADO', nullable: true, length: 10 })
  bloqueado: string | null;

  @Column('varchar', { name: 'VALTRANSP', nullable: true, length: 10 })
  valtransp: string | null;

  @Column('int', { name: 'CODVEI1', nullable: true })
  codvei1: number | null;

  @Column('int', { name: 'CODVEI2', nullable: true })
  codvei2: number | null;

  @Column('int', { name: 'CODVEI3', nullable: true })
  codvei3: number | null;

  @Column('int', { name: 'CODMARCAVEI', nullable: true })
  codmarcavei: number | null;

  @Column('int', { name: 'CODMODELOVEI', nullable: true })
  codmodelovei: number | null;

  @Column('int', { name: 'CODTIPCAR', nullable: true })
  codtipcar: number | null;

  @Column('int', { name: 'CODTIPVEI', nullable: true })
  codtipvei: number | null;

  @Column('int', { name: 'CODPARCGESTOR', nullable: true })
  codparcgestor: number | null;

  @Column('int', { name: 'KMACUM', nullable: true })
  kmacum: number | null;

  @Column('int', { name: 'KMBASEACUM', nullable: true })
  kmbaseacum: number | null;

  @Column('varchar', { name: 'AD_TAG', nullable: true, length: 100 })
  adTag: string | null;

  @Column('varchar', { name: 'AD_TIPOMOTOR', nullable: true, length: 100 })
  adTipomotor: string | null;

  @Column('varchar', { name: 'AD_TIPOEQPTO', nullable: true, length: 100 })
  adTipoeqpto: string | null;

  @Column('varchar', { name: 'AD_EXIBEDASH', nullable: true, length: 10 })
  adExibedash: string | null;

  @Column('char', {
    name: 'AD_EMCONTRATO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  adEmcontrato: string | null;

  @Column('varchar', { name: 'AD_CAPACIDADE', nullable: true, length: 100 })
  adCapacidade: string | null;

  @Column('varchar', { name: 'AD_FABRICANTE', nullable: true, length: 100 })
  adFabricante: string | null;

  @OneToMany(
    () => AdApontamentoEntity,
    (adApontamentoEntity) => adApontamentoEntity.codveiculo,
  )
  adApontamentos: AdApontamentoEntity[];

  @OneToMany(
    () => AdApontamentoschecklistEntity,
    (adApontamentoschecklistEntity) => adApontamentoschecklistEntity.codveiculo,
  )
  adApontamentoschecklists: AdApontamentoschecklistEntity[];

  @OneToMany(
    () => AdChecklistEntity,
    (adChecklistEntity) => adChecklistEntity.codveiculo,
  )
  adChecklists: AdChecklistEntity[];

  @OneToMany(
    () => AdChecklistlavautoEntity,
    (adChecklistlavautoEntity) => adChecklistlavautoEntity.codveiculo,
  )
  adChecklistlavautos: AdChecklistlavautoEntity[];

  @OneToMany(
    () => AdConsumoveiculosEntity,
    (adConsumoveiculosEntity) => adConsumoveiculosEntity.codveiculo,
  )
  adConsumoveiculos: AdConsumoveiculosEntity[];

  @OneToMany(
    () => AdProdmanutencaoEntity,
    (adProdmanutencaoEntity) => adProdmanutencaoEntity.codveiculo2,
  )
  adProdmanutencaos: AdProdmanutencaoEntity[];

  @OneToMany(
    () => AdSopragemiteEntity,
    (adSopragemiteEntity) => adSopragemiteEntity.codveiculo,
  )
  adSopragemites: AdSopragemiteEntity[];

  @OneToMany(() => TapvpjEntity, (tapvpjEntity) => tapvpjEntity.codveiculo2)
  tapvpjs: TapvpjEntity[];

  @OneToMany(() => TcecabEntity, (tcecabEntity) => tcecabEntity.codveiculo)
  tcecabs: TcecabEntity[];

  @OneToMany(
    () => TcecabHisEntity,
    (tcecabHisEntity) => tcecabHisEntity.codveiculo,
  )
  tcecabHis: TcecabHisEntity[];

  @OneToMany(() => TcfabtEntity, (tcfabtEntity) => tcfabtEntity.codveiculo)
  tcfabts: TcfabtEntity[];

  @OneToMany(() => TcfcptEntity, (tcfcptEntity) => tcfcptEntity.carreta)
  tcfcpts: TcfcptEntity[];

  @OneToMany(() => TcfcptEntity, (tcfcptEntity) => tcfcptEntity.codveiculo)
  tcfcpts2: TcfcptEntity[];

  @OneToMany(() => TcfcptEntity, (tcfcptEntity) => tcfcptEntity.carreta2)
  tcfcpts3: TcfcptEntity[];

  @OneToMany(
    () => TcfmanveiEntity,
    (tcfmanveiEntity) => tcfmanveiEntity.codveiculo2,
  )
  tcfmanveis: TcfmanveiEntity[];

  @OneToMany(
    () => TcfoscabEntity,
    (tcfoscabEntity) => tcfoscabEntity.codveiculo,
  )
  tcfoscabs: TcfoscabEntity[];

  @OneToMany(() => TcfpnuEntity, (tcfpnuEntity) => tcfpnuEntity.codveiculo)
  tcfpnus: TcfpnuEntity[];

  @OneToMany(
    () => TcfpnuhistEntity,
    (tcfpnuhistEntity) => tcfpnuhistEntity.codveiculo,
  )
  tcfpnuhists: TcfpnuhistEntity[];

  @OneToMany(() => TcsaceEntity, (tcsaceEntity) => tcsaceEntity.codveiculo2)
  tcsaces: TcsaceEntity[];

  @OneToMany(() => TcsaveEntity, (tcsaveEntity) => tcsaveEntity.codveiculo2)
  tcsaves: TcsaveEntity[];

  @OneToMany(() => TcscveEntity, (tcscveEntity) => tcscveEntity.codveiculo2)
  tcscves: TcscveEntity[];

  @OneToMany(() => TcsiteEntity, (tcsiteEntity) => tcsiteEntity.adCodveiculo)
  tcsites: TcsiteEntity[];

  @OneToMany(() => TgaahEntity, (tgaahEntity) => tgaahEntity.codveiculo)
  tgaahs: TgaahEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.codveiculo)
  tgfcabs: TgfcabEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.codveitracao)
  tgfcabs2: TgfcabEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.reboque)
  tgfcabs3: TgfcabEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.reboque2)
  tgfcabs4: TgfcabEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.reboque3)
  tgfcabs5: TgfcabEntity[];

  @OneToMany(() => TgfcveEntity, (tgfcveEntity) => tgfcveEntity.codveiculo2)
  tgfcves: TgfcveEntity[];

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.codveiculo)
  tgffins: TgffinEntity[];

  @OneToMany(() => TgfigtvEntity, (tgfigtvEntity) => tgfigtvEntity.codveiculo)
  tgfigtvs: TgfigtvEntity[];

  @OneToMany(() => TgfordEntity, (tgfordEntity) => tgfordEntity.codveiculo)
  tgfords: TgfordEntity[];

  @OneToMany(() => TgfordEntity, (tgfordEntity) => tgfordEntity.codvei)
  tgfords2: TgfordEntity[];

  @OneToMany(() => TgfordEntity, (tgfordEntity) => tgfordEntity.codvei2)
  tgfords3: TgfordEntity[];

  @OneToMany(() => TgfordEntity, (tgfordEntity) => tgfordEntity.codvei3)
  tgfords4: TgfordEntity[];

  @OneToMany(() => TgfpecEntity, (tgfpecEntity) => tgfpecEntity.codveiculo)
  tgfpecs: TgfpecEntity[];

  @OneToMany(() => TgfravEntity, (tgfravEntity) => tgfravEntity.codveiculo2)
  tgfravs: TgfravEntity[];

  @OneToMany(() => TgftfrEntity, (tgftfrEntity) => tgftfrEntity.codveiculo2)
  tgftfrs: TgftfrEntity[];

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tgfveis)
  @JoinColumn([{ name: 'CODCID', referencedColumnName: 'codcid' }])
  codc: TsicidEntity;

  @ManyToOne(() => Tpqqu1Entity, (tpqqu1Entity) => tpqqu1Entity.tgfveis)
  @JoinColumn([{ name: 'CODQUEST', referencedColumnName: 'codquest' }])
  codquest: Tpqqu1Entity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfveis)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfveis2)
  @JoinColumn([{ name: 'CODPRODAGRUPAPTENC', referencedColumnName: 'codprod' }])
  codprodagrupaptenc: TgfproEntity;

  @ManyToOne(
    () => AdChecklistEntity,
    (adChecklistEntity) => adChecklistEntity.tgfveis,
  )
  @JoinColumn([
    { name: 'AD_CODCHECKLIST', referencedColumnName: 'codchecklist' },
  ])
  adCodchecklist: AdChecklistEntity;

  @ManyToOne(() => TmstrdEntity, (tmstrdEntity) => tmstrdEntity.tgfveis)
  @JoinColumn([{ name: 'CODTIPRD', referencedColumnName: 'codtiprd' }])
  codtiprd: TmstrdEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfveis3)
  @JoinColumn([{ name: 'CODPRODAGRUPAPT', referencedColumnName: 'codprod' }])
  codprodagrupapt: TgfproEntity;

  @ManyToOne(() => TsiforEntity, (tsiforEntity) => tsiforEntity.tgfveis)
  @JoinColumn([
    { name: 'TIPFORMFRETE', referencedColumnName: 'tipform' },
    { name: 'CODFORMFRETE', referencedColumnName: 'codform' },
  ])
  tsifor: TsiforEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfveis)
  @JoinColumn([{ name: 'CODPARCPROPANTT', referencedColumnName: 'codparc' }])
  codparcpropantt: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfveis2)
  @JoinColumn([{ name: 'CODMOTORISTA', referencedColumnName: 'codparc' }])
  codmotorista: TgfparEntity;

  @OneToMany(
    () => TgfveidocEntity,
    (tgfveidocEntity) => tgfveidocEntity.codveiculo2,
  )
  tgfveidocs: TgfveidocEntity[];

  @OneToMany(() => TgfviagEntity, (tgfviagEntity) => tgfviagEntity.codveiprin)
  tgfviags: TgfviagEntity[];

  @OneToMany(() => TgfviagEntity, (tgfviagEntity) => tgfviagEntity.codveireb)
  tgfviags2: TgfviagEntity[];

  @OneToMany(() => TgfviagEntity, (tgfviagEntity) => tgfviagEntity.codveireb2)
  tgfviags3: TgfviagEntity[];

  @OneToMany(() => TgfviagEntity, (tgfviagEntity) => tgfviagEntity.codveireb3)
  tgfviags4: TgfviagEntity[];

  @OneToOne(() => TmscmpEntity, (tmscmpEntity) => tmscmpEntity.codveiculo2)
  tmscmp: TmscmpEntity;

  @OneToMany(() => TmscmpEntity, (tmscmpEntity) => tmscmpEntity.carreta)
  tmscmps: TmscmpEntity[];

  @OneToMany(() => TmscmpEntity, (tmscmpEntity) => tmscmpEntity.carreta2)
  tmscmps2: TmscmpEntity[];

  @OneToMany(() => TmscmpEntity, (tmscmpEntity) => tmscmpEntity.carreta3)
  tmscmps3: TmscmpEntity[];

  @OneToMany(
    () => TmscmphistEntity,
    (tmscmphistEntity) => tmscmphistEntity.carreta,
  )
  tmscmphists: TmscmphistEntity[];

  @OneToMany(
    () => TmscmphistEntity,
    (tmscmphistEntity) => tmscmphistEntity.carreta2,
  )
  tmscmphists2: TmscmphistEntity[];

  @OneToMany(
    () => TmscmphistEntity,
    (tmscmphistEntity) => tmscmphistEntity.carreta3,
  )
  tmscmphists3: TmscmphistEntity[];

  @OneToMany(() => TmsfvgEntity, (tmsfvgEntity) => tmsfvgEntity.codveicavalo)
  tmsfvgs: TmsfvgEntity[];

  @OneToMany(() => TmsfvmEntity, (tmsfvmEntity) => tmsfvmEntity.codveiculo)
  tmsfvms: TmsfvmEntity[];

  @OneToMany(
    () => TmsordcarregEntity,
    (tmsordcarregEntity) => tmsordcarregEntity.codveiculo,
  )
  tmsordcarregs: TmsordcarregEntity[];

  @OneToMany(
    () => TmsordcarregEntity,
    (tmsordcarregEntity) => tmsordcarregEntity.codvei,
  )
  tmsordcarregs2: TmsordcarregEntity[];

  @OneToMany(
    () => TmsordcarregEntity,
    (tmsordcarregEntity) => tmsordcarregEntity.codvei2,
  )
  tmsordcarregs3: TmsordcarregEntity[];

  @OneToMany(
    () => TmsordcarregEntity,
    (tmsordcarregEntity) => tmsordcarregEntity.codvei3,
  )
  tmsordcarregs4: TmsordcarregEntity[];

  @OneToMany(
    () => TmsveihkmEntity,
    (tmsveihkmEntity) => tmsveihkmEntity.codveiculo2,
  )
  tmsveihkms: TmsveihkmEntity[];

  @OneToMany(() => TpqrpoEntity, (tpqrpoEntity) => tpqrpoEntity.codveiculo2)
  tpqrpos: TpqrpoEntity[];

  @OneToMany(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.adCodveiculo)
  tsiusus: TsiusuEntity[];
}
