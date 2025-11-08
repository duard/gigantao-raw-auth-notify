import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TapamoEntity } from './tAPAMO.entity';
import { TapcusEntity } from './tAPCUS.entity';
import { TapepjEntity } from './tAPEPJ.entity';
import { TapeqjEntity } from './tAPEQJ.entity';
import { TapmapEntity } from './tAPMAP.entity';
import { TapmrmEntity } from './tAPMRM.entity';
import { TappfaEntity } from './tAPPFA.entity';
import { TapseoEntity } from './tAPSEO.entity';
import { TaptopEntity } from './tAPTOP.entity';
import { TapvpjEntity } from './tAPVPJ.entity';
import { TcbimodEntity } from './tCBIMOD.entity';
import { TcbimorEntity } from './tCBIMOR.entity';
import { TcblanEntity } from './tCBLAN.entity';
import { TcblanConfEntity } from './tCBLAN_CONF.entity';
import { TcbmetEntity } from './tCBMET.entity';
import { TcbsalEntity } from './tCBSAL.entity';
import { TccratEntity } from './tCCRAT.entity';
import { TcecabEntity } from './tCECAB.entity';
import { TcecabHisEntity } from './tCECAB_HIS.entity';
import { TcsconEntity } from './tCSCON.entity';
import { TcscpaEntity } from './tCSCPA.entity';
import { TcsiteEntity } from './tCSITE.entity';
import { TgfqueEntity } from './tGFQUE.entity';
import { TsictaEntity } from './tSICTA.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgacltEntity } from './tGACLT.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TcbplaEntity } from './tCBPLA.entity';
import { TfpbenEntity } from './tFPBEN.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TfpfinEntity } from './tFPFIN.entity';
import { TfprtfEntity } from './tFPRTF.entity';
import { TfprtmEntity } from './tFPRTM.entity';
import { TfprttEntity } from './tFPRTT.entity';
import { TgabdlcEntity } from './tGABDLC.entity';
import { TgacllEntity } from './tGACLL.entity';
import { TgaculEntity } from './tGACUL.entity';
import { TgatriEntity } from './tGATRI.entity';
import { TgfacoEntity } from './tGFACO.entity';
import { TgfalvEntity } from './tGFALV.entity';
import { TgfattEntity } from './tGFATT.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfcotEntity } from './tGFCOT.entity';
import { TgfcriEntity } from './tGFCRI.entity';
import { TgfcvnEntity } from './tGFCVN.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TgfgruEntity } from './tGFGRU.entity';
import { TgfgvpEntity } from './tGFGVP.entity';
import { TgfixnEntity } from './tGFIXN.entity';
import { TgfnpcEntity } from './tGFNPC.entity';
import { TgfppgEntity } from './tGFPPG.entity';
import { TgfpptEntity } from './tGFPPT.entity';
import { TgfprjEntity } from './tGFPRJ.entity';
import { TgfsitEntity } from './tGFSIT.entity';
import { TgfratEntity } from './tGFRAT.entity';
import { TgfravEntity } from './tGFRAV.entity';
import { TgmaiEntity } from './tGMAI.entity';
import { TgmcfgiEntity } from './tGMCFGI.entity';
import { TimeprEntity } from './tIMEPR.entity';
import { TimlotEntity } from './tIMLOT.entity';
import { TimtxcEntity } from './tIMTXC.entity';
import { TmstipcobaftEntity } from './tMSTIPCOBAFT.entity';
import { TsifatEntity } from './tSIFAT.entity';
import { TsilibEntity } from './tSILIB.entity';

@Index('PK_TCSPRJ', ['codproj'], { unique: true })
@Entity('TCSPRJ', { schema: 'SANKHYA' })
export class TcsprjEntity {
  @Column('int', { primary: true, name: 'CODPROJ' })
  codproj: number;

  @Column('char', { name: 'IDENTIFICACAO', length: 60 })
  identificacao: string;

  @Column('char', { name: 'ABREVIATURA', length: 20 })
  abreviatura: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('smallint', { name: 'GRAU', nullable: true })
  grau: number | null;

  @Column('int', { name: 'CODPROJPAI', nullable: true })
  codprojpai: number | null;

  @Column('char', { name: 'ANALITICO', length: 1, default: () => "'S'" })
  analitico: string;

  @Column('money', { name: 'LIMBONIF', nullable: true })
  limbonif: number | null;

  @Column('datetime', { name: 'DTINICIO', nullable: true })
  dtinicio: Date | null;

  @Column('datetime', { name: 'DTTERMINO', nullable: true })
  dttermino: Date | null;

  @Column('int', { name: 'ULTIMORDO', nullable: true })
  ultimordo: number | null;

  @Column('float', { name: 'PERCRETENCAO', nullable: true, precision: 53 })
  percretencao: number | null;

  @Column('char', { name: 'RETENCAOATIVA', nullable: true, length: 1 })
  retencaoativa: string | null;

  @Column('smallint', { name: 'HRINICIALMIN', nullable: true })
  hrinicialmin: number | null;

  @Column('smallint', { name: 'INTERVALOMAX', nullable: true })
  intervalomax: number | null;

  @Column('smallint', { name: 'INTERVALOMIN', nullable: true })
  intervalomin: number | null;

  @Column('smallint', { name: 'HRFINALMAX', nullable: true })
  hrfinalmax: number | null;

  @Column('smallint', { name: 'CARGAHORMAX', nullable: true })
  cargahormax: number | null;

  @Column('smallint', { name: 'AMOSTRACUSMAX', nullable: true })
  amostracusmax: number | null;

  @Column('float', { name: 'AREATOTAL', nullable: true, precision: 53 })
  areatotal: number | null;

  @Column('float', { name: 'VLRORCADO', nullable: true, precision: 53 })
  vlrorcado: number | null;

  @Column('int', { name: 'CODCTACTB3', nullable: true })
  codctactb3: number | null;

  @Column('int', { name: 'CODCTACTB4', nullable: true })
  codctactb4: number | null;

  @Column('char', { name: 'CONCLUIDO', nullable: true, length: 1 })
  concluido: string | null;

  @Column('float', { name: 'VLRTERMINO', nullable: true, precision: 53 })
  vlrtermino: number | null;

  @Column('int', { name: 'CODCTACTB5', nullable: true })
  codctactb5: number | null;

  @Column('char', { name: 'TIMCONTACOMPART', nullable: true, length: 1 })
  timcontacompart: string | null;

  @Column('float', { name: 'TIMTXPART', nullable: true, precision: 53 })
  timtxpart: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @OneToMany(() => TapamoEntity, (tapamoEntity) => tapamoEntity.codproj)
  tapamos: TapamoEntity[];

  @OneToMany(() => TapcusEntity, (tapcusEntity) => tapcusEntity.codproj)
  tapcuses: TapcusEntity[];

  @OneToMany(() => TapepjEntity, (tapepjEntity) => tapepjEntity.codproj2)
  tapepjs: TapepjEntity[];

  @OneToMany(() => TapeqjEntity, (tapeqjEntity) => tapeqjEntity.codproj2)
  tapeqjs: TapeqjEntity[];

  @OneToMany(() => TapmapEntity, (tapmapEntity) => tapmapEntity.codproj)
  tapmaps: TapmapEntity[];

  @OneToMany(() => TapmrmEntity, (tapmrmEntity) => tapmrmEntity.codproj)
  tapmrms: TapmrmEntity[];

  @OneToMany(() => TappfaEntity, (tappfaEntity) => tappfaEntity.codproj2)
  tappfas: TappfaEntity[];

  @OneToMany(() => TapseoEntity, (tapseoEntity) => tapseoEntity.codproj2)
  tapseos: TapseoEntity[];

  @OneToMany(() => TaptopEntity, (taptopEntity) => taptopEntity.codproj2)
  taptops: TaptopEntity[];

  @OneToMany(() => TapvpjEntity, (tapvpjEntity) => tapvpjEntity.codproj2)
  tapvpjs: TapvpjEntity[];

  @OneToMany(() => TcbimodEntity, (tcbimodEntity) => tcbimodEntity.codproj2)
  tcbimods: TcbimodEntity[];

  @OneToMany(() => TcbimorEntity, (tcbimorEntity) => tcbimorEntity.codproj2)
  tcbimors: TcbimorEntity[];

  @OneToMany(() => TcblanEntity, (tcblanEntity) => tcblanEntity.codproj)
  tcblans: TcblanEntity[];

  @OneToMany(
    () => TcblanConfEntity,
    (tcblanConfEntity) => tcblanConfEntity.codproj,
  )
  tcblanConfs: TcblanConfEntity[];

  @OneToMany(() => TcbmetEntity, (tcbmetEntity) => tcbmetEntity.codproj2)
  tcbmets: TcbmetEntity[];

  @OneToMany(() => TcbsalEntity, (tcbsalEntity) => tcbsalEntity.codproj2)
  tcbsals: TcbsalEntity[];

  @OneToMany(() => TccratEntity, (tccratEntity) => tccratEntity.codproj2)
  tccrats: TccratEntity[];

  @OneToMany(() => TcecabEntity, (tcecabEntity) => tcecabEntity.codproj)
  tcecabs: TcecabEntity[];

  @OneToMany(
    () => TcecabHisEntity,
    (tcecabHisEntity) => tcecabHisEntity.codproj,
  )
  tcecabHis: TcecabHisEntity[];

  @OneToMany(() => TcsconEntity, (tcsconEntity) => tcsconEntity.codprojsint)
  tcscons: TcsconEntity[];

  @OneToMany(() => TcsconEntity, (tcsconEntity) => tcsconEntity.codproj)
  tcscons2: TcsconEntity[];

  @OneToMany(() => TcscpaEntity, (tcscpaEntity) => tcscpaEntity.codproj)
  tcscpas: TcscpaEntity[];

  @OneToMany(() => TcsiteEntity, (tcsiteEntity) => tcsiteEntity.codproj2)
  tcsites: TcsiteEntity[];

  @ManyToOne(() => TgfqueEntity, (tgfqueEntity) => tgfqueEntity.tcsprjs)
  @JoinColumn([{ name: 'NUQUE', referencedColumnName: 'nuque' }])
  nuque: TgfqueEntity;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tcsprjs)
  @JoinColumn([{ name: 'TIMNMCTACOMP', referencedColumnName: 'codctabcoint' }])
  timnmctacomp: TsictaEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcsprjs)
  @JoinColumn([{ name: 'TIMPARCPROJ', referencedColumnName: 'codemp' }])
  timparcproj: TsiempEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcsprjs2)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcsprjs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TgacltEntity, (tgacltEntity) => tgacltEntity.tcsprjs)
  @JoinColumn([{ name: 'CODCLT', referencedColumnName: 'codclt' }])
  codclt: TgacltEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcsprjs)
  @JoinColumn([{ name: 'CODUSURESP', referencedColumnName: 'codusu' }])
  codusuresp: TsiusuEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tcsprjs)
  @JoinColumn([{ name: 'CODCTACTB2', referencedColumnName: 'codctactb' }])
  codctactb: TcbplaEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tcsprjs2)
  @JoinColumn([{ name: 'CODCTACTB', referencedColumnName: 'codctactb' }])
  codctactb2: TcbplaEntity;

  @OneToMany(() => TfpbenEntity, (tfpbenEntity) => tfpbenEntity.codproj)
  tfpbens: TfpbenEntity[];

  @OneToMany(() => TfpempEntity, (tfpempEntity) => tfpempEntity.codprojatocoop)
  tfpemps: TfpempEntity[];

  @OneToMany(() => TfpfinEntity, (tfpfinEntity) => tfpfinEntity.codproj)
  tfpfins: TfpfinEntity[];

  @OneToMany(() => TfprtfEntity, (tfprtfEntity) => tfprtfEntity.codproj2)
  tfprtfs: TfprtfEntity[];

  @OneToMany(() => TfprtmEntity, (tfprtmEntity) => tfprtmEntity.codproj2)
  tfprtms: TfprtmEntity[];

  @OneToMany(() => TfprttEntity, (tfprttEntity) => tfprttEntity.codproj2)
  tfprtts: TfprttEntity[];

  @OneToMany(() => TgabdlcEntity, (tgabdlcEntity) => tgabdlcEntity.codproj2)
  tgabdlcs: TgabdlcEntity[];

  @OneToMany(() => TgacllEntity, (tgacllEntity) => tgacllEntity.codproj)
  tgaclls: TgacllEntity[];

  @OneToMany(() => TgaculEntity, (tgaculEntity) => tgaculEntity.codproj)
  tgaculs: TgaculEntity[];

  @OneToMany(() => TgatriEntity, (tgatriEntity) => tgatriEntity.codproj)
  tgatris: TgatriEntity[];

  @OneToMany(() => TgfacoEntity, (tgfacoEntity) => tgfacoEntity.codproj)
  tgfacos: TgfacoEntity[];

  @OneToMany(() => TgfalvEntity, (tgfalvEntity) => tgfalvEntity.codprj2)
  tgfalvs: TgfalvEntity[];

  @OneToMany(() => TgfattEntity, (tgfattEntity) => tgfattEntity.codprojdesp)
  tgfatts: TgfattEntity[];

  @OneToMany(() => TgfattEntity, (tgfattEntity) => tgfattEntity.codprojrec)
  tgfatts2: TgfattEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.codproj2)
  tgfcabs: TgfcabEntity[];

  @OneToMany(() => TgfcotEntity, (tgfcotEntity) => tgfcotEntity.codproj)
  tgfcots: TgfcotEntity[];

  @OneToMany(() => TgfcriEntity, (tgfcriEntity) => tgfcriEntity.codproj2)
  tgfcris: TgfcriEntity[];

  @OneToMany(() => TgfcvnEntity, (tgfcvnEntity) => tgfcvnEntity.codproj)
  tgfcvns: TgfcvnEntity[];

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.codproj)
  tgffins: TgffinEntity[];

  @OneToMany(() => TgfgruEntity, (tgfgruEntity) => tgfgruEntity.codproj)
  tgfgrus: TgfgruEntity[];

  @OneToMany(() => TgfgvpEntity, (tgfgvpEntity) => tgfgvpEntity.codprojeto)
  tgfgvps: TgfgvpEntity[];

  @OneToMany(() => TgfixnEntity, (tgfixnEntity) => tgfixnEntity.codproj)
  tgfixns: TgfixnEntity[];

  @OneToMany(() => TgfnpcEntity, (tgfnpcEntity) => tgfnpcEntity.codproj2)
  tgfnpcs: TgfnpcEntity[];

  @OneToMany(() => TgfppgEntity, (tgfppgEntity) => tgfppgEntity.codprojpad)
  tgfppgs: TgfppgEntity[];

  @OneToMany(() => TgfpptEntity, (tgfpptEntity) => tgfpptEntity.codproj)
  tgfppts: TgfpptEntity[];

  @OneToMany(() => TgfprjEntity, (tgfprjEntity) => tgfprjEntity.codproj2)
  tgfprjs: TgfprjEntity[];

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.codproj)
  tgfpros: TgfproEntity[];

  @ManyToMany(() => TgfsitEntity, (tgfsitEntity) => tgfsitEntity.tcsprjs)
  tgfsits: TgfsitEntity[];

  @OneToMany(() => TgfratEntity, (tgfratEntity) => tgfratEntity.codproj2)
  tgfrats: TgfratEntity[];

  @OneToMany(() => TgfravEntity, (tgfravEntity) => tgfravEntity.codproj2)
  tgfravs: TgfravEntity[];

  @OneToMany(() => TgmaiEntity, (tgmaiEntity) => tgmaiEntity.codproj)
  tgmais: TgmaiEntity[];

  @OneToMany(() => TgmcfgiEntity, (tgmcfgiEntity) => tgmcfgiEntity.codproj2)
  tgmcfgis: TgmcfgiEntity[];

  @OneToMany(
    () => TimeprEntity,
    (timeprEntity) => timeprEntity.eprprojcorbancario,
  )
  timeprs: TimeprEntity[];

  @OneToMany(() => TimeprEntity, (timeprEntity) => timeprEntity.eprprojeto)
  timeprs2: TimeprEntity[];

  @OneToMany(() => TimlotEntity, (timlotEntity) => timlotEntity.lotprojeto)
  timlots: TimlotEntity[];

  @OneToMany(() => TimtxcEntity, (timtxcEntity) => timtxcEntity.txccodproj)
  timtxcs: TimtxcEntity[];

  @OneToMany(
    () => TmstipcobaftEntity,
    (tmstipcobaftEntity) => tmstipcobaftEntity.codproj,
  )
  tmstipcobafts: TmstipcobaftEntity[];

  @OneToMany(() => TsifatEntity, (tsifatEntity) => tsifatEntity.codproj)
  tsifats: TsifatEntity[];

  @OneToMany(() => TsilibEntity, (tsilibEntity) => tsilibEntity.codproj)
  tsilibs: TsilibEntity[];
}
