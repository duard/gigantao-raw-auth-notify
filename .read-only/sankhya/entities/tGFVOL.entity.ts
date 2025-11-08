import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { AdAcessoriosEntity } from './aD_ACESSORIOS.entity';
import { AdSolcompraosEntity } from './aD_SOLCOMPRAOS.entity';
import { TapirmEntity } from './tAPIRM.entity';
import { TapseoEntity } from './tAPSEO.entity';
import { TceiteEntity } from './tCEITE.entity';
import { TceiteHisEntity } from './tCEITE_HIS.entity';
import { TcsfpeEntity } from './tCSFPE.entity';
import { TcsmprEntity } from './tCSMPR.entity';
import { TgaahiEntity } from './tGAAHI.entity';
import { TgaareEntity } from './tGAARE.entity';
import { TgaartsEntity } from './tGAARTS.entity';
import { TgainsEntity } from './tGAINS.entity';
import { TgamaaEntity } from './tGAMAA.entity';
import { TgampaEntity } from './tGAMPA.entity';
import { TgangrEntity } from './tGANGR.entity';
import { TgariEntity } from './tGARI.entity';
import { TgfcacEntity } from './tGFCAC.entity';
import { Tgfcoi2Entity } from './tGFCOI2.entity';
import { TgfcteEntity } from './tGFCTE.entity';
import { TgfctpEntity } from './tGFCTP.entity';
import { TgfdavEntity } from './tGFDAV.entity';
import { TgfemmEntity } from './tGFEMM.entity';
import { TgfeppEntity } from './tGFEPP.entity';
import { Tgfgir1Entity } from './tGFGIR1.entity';
import { TgficpEntity } from './tGFICP.entity';
import { TgfitcEntity } from './tGFITC.entity';
import { TgfiteEntity } from './tGFITE.entity';
import { TgfivcEntity } from './tGFIVC.entity';
import { TgfmedEntity } from './tGFMED.entity';
import { TgfmsiEntity } from './tGFMSI.entity';
import { TgfnscEntity } from './tGFNSC.entity';
import { TgfoeqEntity } from './tGFOEQ.entity';
import { TgfpapEntity } from './tGFPAP.entity';
import { TgfpddEntity } from './tGFPDD.entity';
import { TgfpedEntity } from './tGFPED.entity';
import { TgfpmfEntity } from './tGFPMF.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfstmvproEntity } from './tGFSTMVPRO.entity';
import { TgfunpEntity } from './tGFUNP.entity';
import { TgfvoaEntity } from './tGFVOA.entity';
import { TgfvoahEntity } from './tGFVOAH.entity';
import { TgfvorEntity } from './tGFVOR.entity';
import { TgwcteEntity } from './tGWCTE.entity';
import { TgwenpEntity } from './tGWENP.entity';
import { TgweplEntity } from './tGWEPL.entity';
import { TgwestEntity } from './tGWEST.entity';
import { TgwexpEntity } from './tGWEXP.entity';
import { TgwexuEntity } from './tGWEXU.entity';
import { TgwitrEntity } from './tGWITR.entity';
import { TgwittEntity } from './tGWITT.entity';
import { TgwivrEntity } from './tGWIVR.entity';
import { TgwragEntity } from './tGWRAG.entity';
import { TgwrplEntity } from './tGWRPL.entity';
import { TgwteqEntity } from './tGWTEQ.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgwvolEntity } from './tGWVOL.entity';
import { TmsordcarregEntity } from './tMSORDCARREG.entity';
import { TmsparqbEntity } from './tMSPARQB.entity';
import { TmspedEntity } from './tMSPED.entity';

@Index('PK_TGFVOL', ['codvol'], { unique: true })
@Entity('TGFVOL', { schema: 'SANKHYA' })
export class TgfvolEntity {
  @Column('char', { primary: true, name: 'CODVOL', length: 2 })
  codvol: string;

  @Column('varchar', { name: 'DESCRVOL', nullable: true, length: 30 })
  descrvol: string | null;

  @Column('char', {
    name: 'UTILIREGVOLWMS',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  utiliregvolwms: string | null;

  @Column('smallint', { name: 'DECQTD', nullable: true })
  decqtd: number | null;

  @Column('varchar', { name: 'CODVOLFCI', nullable: true, length: 6 })
  codvolfci: string | null;

  @Column('varchar', {
    name: 'UTILICONFPESO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  utiliconfpeso: string | null;

  @Column('bigint', { name: 'NUVERSAO', nullable: true })
  nuversao: string | null;

  @Column('char', { name: 'ATUNUVERSAO', nullable: true, length: 1 })
  atunuversao: string | null;

  @Column('varchar', { name: 'UNIDADEREPOM', nullable: true, length: 10 })
  unidaderepom: string | null;

  @Column('varchar', { name: 'UNIDADEEFRETE', nullable: true, length: 10 })
  unidadeefrete: string | null;

  @OneToMany(
    () => AdAcessoriosEntity,
    (adAcessoriosEntity) => adAcessoriosEntity.und,
  )
  adAcessorios: AdAcessoriosEntity[];

  @OneToMany(
    () => AdSolcompraosEntity,
    (adSolcompraosEntity) => adSolcompraosEntity.codvol,
  )
  adSolcompraos: AdSolcompraosEntity[];

  @OneToMany(() => TapirmEntity, (tapirmEntity) => tapirmEntity.codvol)
  tapirms: TapirmEntity[];

  @OneToMany(() => TapseoEntity, (tapseoEntity) => tapseoEntity.codvol)
  tapseos: TapseoEntity[];

  @OneToMany(() => TceiteEntity, (tceiteEntity) => tceiteEntity.codvol)
  tceites: TceiteEntity[];

  @OneToMany(() => TceiteHisEntity, (tceiteHisEntity) => tceiteHisEntity.codvol)
  tceiteHis: TceiteHisEntity[];

  @OneToMany(() => TcsfpeEntity, (tcsfpeEntity) => tcsfpeEntity.codvol)
  tcsfpes: TcsfpeEntity[];

  @OneToMany(() => TcsmprEntity, (tcsmprEntity) => tcsmprEntity.codvol)
  tcsmprs: TcsmprEntity[];

  @OneToMany(() => TgaahiEntity, (tgaahiEntity) => tgaahiEntity.codvol)
  tgaahis: TgaahiEntity[];

  @OneToMany(() => TgaareEntity, (tgaareEntity) => tgaareEntity.codvol)
  tgaares: TgaareEntity[];

  @OneToMany(() => TgaartsEntity, (tgaartsEntity) => tgaartsEntity.voldosagem)
  tgaarts: TgaartsEntity[];

  @OneToMany(
    () => TgaartsEntity,
    (tgaartsEntity) => tgaartsEntity.volqtdadquirir,
  )
  tgaarts2: TgaartsEntity[];

  @OneToMany(
    () => TgaartsEntity,
    (tgaartsEntity) => tgaartsEntity.voldosagempor,
  )
  tgaarts3: TgaartsEntity[];

  @OneToMany(
    () => TgaartsEntity,
    (tgaartsEntity) => tgaartsEntity.volareatratada,
  )
  tgaarts4: TgaartsEntity[];

  @OneToMany(() => TgainsEntity, (tgainsEntity) => tgainsEntity.codvol2)
  tgains: TgainsEntity[];

  @OneToMany(() => TgamaaEntity, (tgamaaEntity) => tgamaaEntity.codvol)
  tgamaas: TgamaaEntity[];

  @OneToMany(() => TgampaEntity, (tgampaEntity) => tgampaEntity.codvol)
  tgampas: TgampaEntity[];

  @OneToMany(() => TgangrEntity, (tgangrEntity) => tgangrEntity.codvol)
  tgangrs: TgangrEntity[];

  @OneToMany(() => TgariEntity, (tgariEntity) => tgariEntity.codvol)
  tgaris: TgariEntity[];

  @OneToMany(() => TgfcacEntity, (tgfcacEntity) => tgfcacEntity.codvol)
  tgfcacs: TgfcacEntity[];

  @OneToMany(() => Tgfcoi2Entity, (tgfcoi2Entity) => tgfcoi2Entity.codvol2)
  tgfcois: Tgfcoi2Entity[];

  @OneToMany(() => TgfcteEntity, (tgfcteEntity) => tgfcteEntity.codvol2)
  tgfctes: TgfcteEntity[];

  @OneToMany(() => TgfctpEntity, (tgfctpEntity) => tgfctpEntity.codvol)
  tgfctps: TgfctpEntity[];

  @OneToMany(() => TgfdavEntity, (tgfdavEntity) => tgfdavEntity.codvol)
  tgfdavs: TgfdavEntity[];

  @OneToMany(() => TgfemmEntity, (tgfemmEntity) => tgfemmEntity.codvol2)
  tgfemms: TgfemmEntity[];

  @OneToMany(() => TgfeppEntity, (tgfeppEntity) => tgfeppEntity.codvol)
  tgfepps: TgfeppEntity[];

  @OneToMany(() => Tgfgir1Entity, (tgfgir1Entity) => tgfgir1Entity.codvol)
  tgfgirs: Tgfgir1Entity[];

  @OneToMany(() => TgficpEntity, (tgficpEntity) => tgficpEntity.codvol)
  tgficps: TgficpEntity[];

  @OneToMany(() => TgfitcEntity, (tgfitcEntity) => tgfitcEntity.codvol)
  tgfitcs: TgfitcEntity[];

  @OneToMany(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.codvol)
  tgfites: TgfiteEntity[];

  @OneToMany(() => TgfivcEntity, (tgfivcEntity) => tgfivcEntity.codvol)
  tgfivcs: TgfivcEntity[];

  @OneToMany(() => TgfmedEntity, (tgfmedEntity) => tgfmedEntity.codvol)
  tgfmeds: TgfmedEntity[];

  @OneToMany(() => TgfmsiEntity, (tgfmsiEntity) => tgfmsiEntity.codvol)
  tgfmsis: TgfmsiEntity[];

  @OneToMany(() => TgfnscEntity, (tgfnscEntity) => tgfnscEntity.codvol)
  tgfnscs: TgfnscEntity[];

  @OneToMany(() => TgfoeqEntity, (tgfoeqEntity) => tgfoeqEntity.codvol)
  tgfoeqs: TgfoeqEntity[];

  @OneToMany(() => TgfpapEntity, (tgfpapEntity) => tgfpapEntity.unidadeparc)
  tgfpaps: TgfpapEntity[];

  @OneToMany(() => TgfpddEntity, (tgfpddEntity) => tgfpddEntity.codvol)
  tgfpdds: TgfpddEntity[];

  @OneToMany(() => TgfpedEntity, (tgfpedEntity) => tgfpedEntity.codvol)
  tgfpeds: TgfpedEntity[];

  @OneToMany(() => TgfpmfEntity, (tgfpmfEntity) => tgfpmfEntity.codvol)
  tgfpmfs: TgfpmfEntity[];

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.codvolcompra)
  tgfpros: TgfproEntity[];

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.codvolres)
  tgfpros2: TgfproEntity[];

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.codvolfethab)
  tgfpros3: TgfproEntity[];

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.codvol)
  tgfpros4: TgfproEntity[];

  @OneToMany(
    () => TgfstmvproEntity,
    (tgfstmvproEntity) => tgfstmvproEntity.codvol,
  )
  tgfstmvpros: TgfstmvproEntity[];

  @OneToMany(() => TgfunpEntity, (tgfunpEntity) => tgfunpEntity.codvol2)
  tgfunps: TgfunpEntity[];

  @OneToMany(() => TgfvoaEntity, (tgfvoaEntity) => tgfvoaEntity.codvol2)
  tgfvoas: TgfvoaEntity[];

  @OneToMany(() => TgfvoahEntity, (tgfvoahEntity) => tgfvoahEntity.codvol2)
  tgfvoahs: TgfvoahEntity[];

  @OneToMany(() => TgfvorEntity, (tgfvorEntity) => tgfvorEntity.codvol2)
  tgfvors: TgfvorEntity[];

  @OneToMany(() => TgwcteEntity, (tgwcteEntity) => tgwcteEntity.codvol)
  tgwctes: TgwcteEntity[];

  @OneToMany(() => TgwenpEntity, (tgwenpEntity) => tgwenpEntity.codvol)
  tgwenps: TgwenpEntity[];

  @OneToMany(() => TgweplEntity, (tgweplEntity) => tgweplEntity.codvol2)
  tgwepls: TgweplEntity[];

  @OneToMany(() => TgwestEntity, (tgwestEntity) => tgwestEntity.codvol2)
  tgwests: TgwestEntity[];

  @OneToMany(() => TgwexpEntity, (tgwexpEntity) => tgwexpEntity.codvol)
  tgwexps: TgwexpEntity[];

  @OneToMany(() => TgwexuEntity, (tgwexuEntity) => tgwexuEntity.codvol2)
  tgwexus: TgwexuEntity[];

  @OneToMany(() => TgwitrEntity, (tgwitrEntity) => tgwitrEntity.codvoldest)
  tgwitrs: TgwitrEntity[];

  @OneToMany(() => TgwitrEntity, (tgwitrEntity) => tgwitrEntity.codvolorig)
  tgwitrs2: TgwitrEntity[];

  @OneToMany(() => TgwittEntity, (tgwittEntity) => tgwittEntity.codvoldest)
  tgwitts: TgwittEntity[];

  @OneToMany(() => TgwittEntity, (tgwittEntity) => tgwittEntity.codvolorig)
  tgwitts2: TgwittEntity[];

  @OneToMany(() => TgwivrEntity, (tgwivrEntity) => tgwivrEntity.codvol)
  tgwivrs: TgwivrEntity[];

  @OneToMany(() => TgwragEntity, (tgwragEntity) => tgwragEntity.codvol2)
  tgwrags: TgwragEntity[];

  @OneToMany(() => TgwrplEntity, (tgwrplEntity) => tgwrplEntity.codvol)
  tgwrpls: TgwrplEntity[];

  @ManyToMany(() => TgwteqEntity, (tgwteqEntity) => tgwteqEntity.tgfvols)
  tgwteqs: TgwteqEntity[];

  @ManyToMany(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfvols)
  @JoinTable({
    name: 'TGWUXU',
    joinColumns: [{ name: 'CODVOL', referencedColumnName: 'codvol' }],
    inverseJoinColumns: [{ name: 'CODUSU', referencedColumnName: 'codusu' }],
    schema: 'SANKHYA',
  })
  tsiusus: TsiusuEntity[];

  @OneToMany(() => TgwvolEntity, (tgwvolEntity) => tgwvolEntity.codvol2)
  tgwvols: TgwvolEntity[];

  @OneToMany(
    () => TmsordcarregEntity,
    (tmsordcarregEntity) => tmsordcarregEntity.codvolmerc,
  )
  tmsordcarregs: TmsordcarregEntity[];

  @OneToMany(() => TmsparqbEntity, (tmsparqbEntity) => tmsparqbEntity.codvol)
  tmsparqbs: TmsparqbEntity[];

  @OneToMany(() => TmspedEntity, (tmspedEntity) => tmspedEntity.codvolmerc)
  tmspeds: TmspedEntity[];
}
