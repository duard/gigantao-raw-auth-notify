import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { AdAlteracaixEntity } from './aD_ALTERACAIX.entity';
import { AdInsperealEntity } from './aD_INSPEREAL.entity';
import { AdSolcompraosEntity } from './aD_SOLCOMPRAOS.entity';
import { TcbimorEntity } from './tCBIMOR.entity';
import { TceiteEntity } from './tCEITE.entity';
import { TceiteHisEntity } from './tCEITE_HIS.entity';
import { TcfpnuEntity } from './tCFPNU.entity';
import { TcsfpeEntity } from './tCSFPE.entity';
import { TcsmprEntity } from './tCSMPR.entity';
import { TgamovEntity } from './tGAMOV.entity';
import { TgapatEntity } from './tGAPAT.entity';
import { TgasalEntity } from './tGASAL.entity';
import { TgfacoEntity } from './tGFACO.entity';
import { TgfageEntity } from './tGFAGE.entity';
import { TgfcolEntity } from './tGFCOL.entity';
import { TgfcteEntity } from './tGFCTE.entity';
import { TgfctpEntity } from './tGFCTP.entity';
import { TgfcusEntity } from './tGFCUS.entity';
import { TgfdesEntity } from './tGFDES.entity';
import { TgfdidEntity } from './tGFDID.entity';
import { TgfeacEntity } from './tGFEAC.entity';
import { TgfeloEntity } from './tGFELO.entity';
import { TgfemmEntity } from './tGFEMM.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfeprEntity } from './tGFEPR.entity';
import { TgfestEntity } from './tGFEST.entity';
import { TgfetaEntity } from './tGFETA.entity';
import { TgfexcEntity } from './tGFEXC.entity';
import { TgffcpEntity } from './tGFFCP.entity';
import { Tgfgir1Entity } from './tGFGIR1.entity';
import { TgfiacEntity } from './tGFIAC.entity';
import { TgficpEntity } from './tGFICP.entity';
import { TgfiteEntity } from './tGFITE.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfntaEntity } from './tGFNTA.entity';
import { TgflotEntity } from './tGFLOT.entity';
import { TgfmfciEntity } from './tGFMFCI.entity';
import { TgfordEntity } from './tGFORD.entity';
import { TgfoslEntity } from './tGFOSL.entity';
import { TgfpemEntity } from './tGFPEM.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgftopEntity } from './tGFTOP.entity';
import { TgfvceEntity } from './tGFVCE.entity';
import { TgwcteEntity } from './tGWCTE.entity';
import { TgwendEntity } from './tGWEND.entity';
import { TgwenpEntity } from './tGWENP.entity';
import { TgweplEntity } from './tGWEPL.entity';
import { TgwestEntity } from './tGWEST.entity';
import { TgwexlEntity } from './tGWEXL.entity';
import { TgwitrEntity } from './tGWITR.entity';
import { TgwittEntity } from './tGWITT.entity';
import { TgwivrEntity } from './tGWIVR.entity';
import { TprestsmpEntity } from './tPRESTSMP.entity';
import { TprlspEntity } from './tPRLSP.entity';
import { TsiempEntity } from './tSIEMP.entity';

@Index('PK_TGFLOC', ['codlocal'], { unique: true })
@Entity('TGFLOC', { schema: 'SANKHYA' })
export class TgflocEntity {
  @Column('int', { primary: true, name: 'CODLOCAL' })
  codlocal: number;

  @Column('char', { name: 'DESCRLOCAL', length: 40 })
  descrlocal: string;

  @Column('float', { name: 'VLRCUS', nullable: true, precision: 53 })
  vlrcus: number | null;

  @Column('money', { name: 'VLRVENDA', nullable: true })
  vlrvenda: number | null;

  @Column('char', { name: 'INCSOBREIRF', length: 1, default: () => "'S'" })
  incsobreirf: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('char', { name: 'ANALITICO', length: 1, default: () => "'S'" })
  analitico: string;

  @Column('int', { name: 'CODLOCALPAI' })
  codlocalpai: number;

  @Column('smallint', { name: 'GRAU' })
  grau: number;

  @Column('char', { name: 'VALESTINDEP', length: 1, default: () => "'N'" })
  valestindep: string;

  @Column('int', { name: 'DIASPRODUCAO', default: () => '(0)' })
  diasproducao: number;

  @Column('float', {
    name: 'CAPACIDADEPRODUCAO',
    precision: 53,
    default: () => '(0)',
  })
  capacidadeproducao: number;

  @Column('char', { name: 'DOMINGO', length: 1, default: () => "'N'" })
  domingo: string;

  @Column('char', { name: 'SEGUNDA', length: 1, default: () => "'N'" })
  segunda: string;

  @Column('char', { name: 'TERCA', length: 1, default: () => "'N'" })
  terca: string;

  @Column('char', { name: 'QUARTA', length: 1, default: () => "'N'" })
  quarta: string;

  @Column('char', { name: 'QUINTA', length: 1, default: () => "'N'" })
  quinta: string;

  @Column('char', { name: 'SEXTA', length: 1, default: () => "'N'" })
  sexta: string;

  @Column('char', { name: 'SABADO', length: 1, default: () => "'N'" })
  sabado: string;

  @Column('varchar', {
    name: 'ACEITANOVAPROD',
    length: 1,
    default: () => "'N'",
  })
  aceitanovaprod: string;

  @Column('char', { name: 'UTILIZAWMS', length: 1, default: () => "'N'" })
  utilizawms: string;

  @Column('varchar', { name: 'AD_DESCRBASE', nullable: true, length: 100 })
  adDescrbase: string | null;

  @Column('varchar', { name: 'AD_GRUPOLOCCAIXA', nullable: true, length: 10 })
  adGrupoloccaixa: string | null;

  @Column('varchar', { name: 'AD_LOCALCX', nullable: true, length: 100 })
  adLocalcx: string | null;

  @OneToMany(
    () => AdAlteracaixEntity,
    (adAlteracaixEntity) => adAlteracaixEntity.codlocal2,
  )
  adAlteracaixes: AdAlteracaixEntity[];

  @OneToMany(
    () => AdInsperealEntity,
    (adInsperealEntity) => adInsperealEntity.codlocal2,
  )
  adInspereals: AdInsperealEntity[];

  @OneToMany(
    () => AdSolcompraosEntity,
    (adSolcompraosEntity) => adSolcompraosEntity.codlocal,
  )
  adSolcompraos: AdSolcompraosEntity[];

  @OneToMany(() => TcbimorEntity, (tcbimorEntity) => tcbimorEntity.codlocal2)
  tcbimors: TcbimorEntity[];

  @OneToMany(() => TceiteEntity, (tceiteEntity) => tceiteEntity.codlocal)
  tceites: TceiteEntity[];

  @OneToMany(
    () => TceiteHisEntity,
    (tceiteHisEntity) => tceiteHisEntity.codlocal,
  )
  tceiteHis: TceiteHisEntity[];

  @OneToMany(() => TcfpnuEntity, (tcfpnuEntity) => tcfpnuEntity.codlocal)
  tcfpnus: TcfpnuEntity[];

  @OneToMany(() => TcsfpeEntity, (tcsfpeEntity) => tcsfpeEntity.codlocal)
  tcsfpes: TcsfpeEntity[];

  @OneToMany(() => TcsmprEntity, (tcsmprEntity) => tcsmprEntity.codlocal)
  tcsmprs: TcsmprEntity[];

  @OneToMany(() => TgamovEntity, (tgamovEntity) => tgamovEntity.codlocal)
  tgamovs: TgamovEntity[];

  @OneToMany(() => TgapatEntity, (tgapatEntity) => tgapatEntity.codlocal)
  tgapats: TgapatEntity[];

  @OneToMany(() => TgasalEntity, (tgasalEntity) => tgasalEntity.codlocal2)
  tgasals: TgasalEntity[];

  @OneToMany(() => TgfacoEntity, (tgfacoEntity) => tgfacoEntity.codlocalorig)
  tgfacos: TgfacoEntity[];

  @OneToMany(() => TgfageEntity, (tgfageEntity) => tgfageEntity.codlocal2)
  tgfages: TgfageEntity[];

  @OneToMany(() => TgfcolEntity, (tgfcolEntity) => tgfcolEntity.codlocal)
  tgfcols: TgfcolEntity[];

  @OneToMany(() => TgfcteEntity, (tgfcteEntity) => tgfcteEntity.codlocal2)
  tgfctes: TgfcteEntity[];

  @OneToMany(() => TgfctpEntity, (tgfctpEntity) => tgfctpEntity.codlocal)
  tgfctps: TgfctpEntity[];

  @OneToMany(() => TgfcusEntity, (tgfcusEntity) => tgfcusEntity.codlocal2)
  tgfcuses: TgfcusEntity[];

  @OneToMany(() => TgfdesEntity, (tgfdesEntity) => tgfdesEntity.codlocal2)
  tgfdes: TgfdesEntity[];

  @OneToMany(() => TgfdidEntity, (tgfdidEntity) => tgfdidEntity.codlocal2)
  tgfds: TgfdidEntity[];

  @OneToMany(() => TgfeacEntity, (tgfeacEntity) => tgfeacEntity.codlocal2)
  tgfeacs: TgfeacEntity[];

  @OneToMany(() => TgfeloEntity, (tgfeloEntity) => tgfeloEntity.codlocal2)
  tgfelos: TgfeloEntity[];

  @OneToMany(() => TgfemmEntity, (tgfemmEntity) => tgfemmEntity.codlocal2)
  tgfemms: TgfemmEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.codlocalterc)
  tgfemps: TgfempEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.localesp)
  tgfemps2: TgfempEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.wmslocalajest)
  tgfemps3: TgfempEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.localpad)
  tgfemps4: TgfempEntity[];

  @OneToMany(() => TgfeprEntity, (tgfeprEntity) => tgfeprEntity.codlocal2)
  tgfeprs: TgfeprEntity[];

  @OneToMany(() => TgfestEntity, (tgfestEntity) => tgfestEntity.codlocal2)
  tgfests: TgfestEntity[];

  @OneToMany(() => TgfetaEntity, (tgfetaEntity) => tgfetaEntity.codlocalentdest)
  tgfetas: TgfetaEntity[];

  @OneToMany(() => TgfetaEntity, (tgfetaEntity) => tgfetaEntity.codlocalentorig)
  tgfetas2: TgfetaEntity[];

  @OneToMany(() => TgfetaEntity, (tgfetaEntity) => tgfetaEntity.codlocalsaiorig)
  tgfetas3: TgfetaEntity[];

  @OneToMany(() => TgfetaEntity, (tgfetaEntity) => tgfetaEntity.codlocalsaidest)
  tgfetas4: TgfetaEntity[];

  @OneToMany(() => TgfexcEntity, (tgfexcEntity) => tgfexcEntity.codlocal2)
  tgfexcs: TgfexcEntity[];

  @OneToMany(() => TgffcpEntity, (tgffcpEntity) => tgffcpEntity.codlocal2)
  tgffcps: TgffcpEntity[];

  @OneToMany(
    () => Tgfgir1Entity,
    (tgfgir1Entity) => tgfgir1Entity.codlocalorig2,
  )
  tgfgirs: Tgfgir1Entity[];

  @OneToMany(() => TgfiacEntity, (tgfiacEntity) => tgfiacEntity.codlocal2)
  tgfiacs: TgfiacEntity[];

  @OneToMany(() => TgficpEntity, (tgficpEntity) => tgficpEntity.codlocalmp2)
  tgficps: TgficpEntity[];

  @OneToMany(() => TgficpEntity, (tgficpEntity) => tgficpEntity.codlocal2)
  tgficps2: TgficpEntity[];

  @OneToMany(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.codlocalterc)
  tgfites: TgfiteEntity[];

  @OneToMany(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.codlocalorig)
  tgfites2: TgfiteEntity[];

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgflocs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgflocs)
  @JoinColumn([{ name: 'AD_CODUSU', referencedColumnName: 'codusu' }])
  adCodusu: TsiusuEntity;

  @ManyToOne(() => TgfntaEntity, (tgfntaEntity) => tgfntaEntity.tgflocs)
  @JoinColumn([{ name: 'CODTAB', referencedColumnName: 'codtab' }])
  codtab: TgfntaEntity;

  @OneToMany(() => TgflotEntity, (tgflotEntity) => tgflotEntity.codlocal2)
  tgflots: TgflotEntity[];

  @OneToMany(() => TgfmfciEntity, (tgfmfciEntity) => tgfmfciEntity.codlocal2)
  tgfmfcis: TgfmfciEntity[];

  @OneToMany(() => TgfordEntity, (tgfordEntity) => tgfordEntity.codlocal)
  tgfords: TgfordEntity[];

  @OneToMany(() => TgfoslEntity, (tgfoslEntity) => tgfoslEntity.codlocal2)
  tgfosls: TgfoslEntity[];

  @OneToMany(() => TgfpemEntity, (tgfpemEntity) => tgfpemEntity.codlocalpad)
  tgfpems: TgfpemEntity[];

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.codlocalpadrao)
  tgfpros: TgfproEntity[];

  @OneToMany(() => TgftopEntity, (tgftopEntity) => tgftopEntity.codlocalimpxml)
  tgftops: TgftopEntity[];

  @OneToMany(() => TgfvceEntity, (tgfvceEntity) => tgfvceEntity.codlocal2)
  tgfvces: TgfvceEntity[];

  @OneToMany(() => TgwcteEntity, (tgwcteEntity) => tgwcteEntity.codlocal2)
  tgwctes: TgwcteEntity[];

  @OneToMany(() => TgwendEntity, (tgwendEntity) => tgwendEntity.codlocal)
  tgwends: TgwendEntity[];

  @OneToMany(() => TgwenpEntity, (tgwenpEntity) => tgwenpEntity.codlocal)
  tgwenps: TgwenpEntity[];

  @OneToMany(() => TgweplEntity, (tgweplEntity) => tgweplEntity.codlocal2)
  tgwepls: TgweplEntity[];

  @OneToMany(() => TgwestEntity, (tgwestEntity) => tgwestEntity.codlocal2)
  tgwests: TgwestEntity[];

  @OneToMany(() => TgwexlEntity, (tgwexlEntity) => tgwexlEntity.codlocal2)
  tgwexls: TgwexlEntity[];

  @OneToMany(() => TgwitrEntity, (tgwitrEntity) => tgwitrEntity.codlocal)
  tgwitrs: TgwitrEntity[];

  @OneToMany(() => TgwittEntity, (tgwittEntity) => tgwittEntity.codlocal)
  tgwitts: TgwittEntity[];

  @OneToMany(() => TgwivrEntity, (tgwivrEntity) => tgwivrEntity.codlocal)
  tgwivrs: TgwivrEntity[];

  @OneToMany(
    () => TprestsmpEntity,
    (tprestsmpEntity) => tprestsmpEntity.codlocal,
  )
  tprestsmps: TprestsmpEntity[];

  @OneToMany(() => TprlspEntity, (tprlspEntity) => tprlspEntity.codlocal)
  tprlsps: TprlspEntity[];

  @OneToMany(() => TsiempEntity, (tsiempEntity) => tsiempEntity.codlocrec)
  tsiemps: TsiempEntity[];

  @OneToMany(() => TsiempEntity, (tsiempEntity) => tsiempEntity.codlocsuc)
  tsiemps2: TsiempEntity[];

  @OneToMany(() => TsiempEntity, (tsiempEntity) => tsiempEntity.codlocdes)
  tsiemps3: TsiempEntity[];

  @OneToMany(() => TsiempEntity, (tsiempEntity) => tsiempEntity.codlocest)
  tsiemps4: TsiempEntity[];
}
