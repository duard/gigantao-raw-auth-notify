import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { AdItevaloresdporcEntity } from './aD_ITEVALORESDPORC.entity';
import { TcacprEntity } from './tCACPR.entity';
import { TcametEntity } from './tCAMET.entity';
import { TcaparEntity } from './tCAPAR.entity';
import { TcblanEntity } from './tCBLAN.entity';
import { TcblanConfEntity } from './tCBLAN_CONF.entity';
import { TcbmetEntity } from './tCBMET.entity';
import { TcbsalEntity } from './tCBSAL.entity';
import { TccratEntity } from './tCCRAT.entity';
import { TccresEntity } from './tCCRES.entity';
import { TcedespEntity } from './tCEDESP.entity';
import { TcedespHisEntity } from './tCEDESP_HIS.entity';
import { TcfabtEntity } from './tCFABT.entity';
import { TcfoscabEntity } from './tCFOSCAB.entity';
import { TcimovEntity } from './tCIMOV.entity';
import { TcimovajEntity } from './tCIMOVAJ.entity';
import { TcscxtEntity } from './tCSCXT.entity';
import { TcsfapEntity } from './tCSFAP.entity';
import { TcsoseEntity } from './tCSOSE.entity';
import { TfpbenEntity } from './tFPBEN.entity';
import { TfpdepEntity } from './tFPDEP.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TfpeveEntity } from './tFPEVE.entity';
import { TfpfinEntity } from './tFPFIN.entity';
import { TfprtfEntity } from './tFPRTF.entity';
import { TfprtmEntity } from './tFPRTM.entity';
import { TfprttEntity } from './tFPRTT.entity';
import { TgaahiEntity } from './tGAAHI.entity';
import { TgaculEntity } from './tGACUL.entity';
import { TgarecEntity } from './tGAREC.entity';
import { TgatriEntity } from './tGATRI.entity';
import { TgfacoEntity } from './tGFACO.entity';
import { TgfattEntity } from './tGFATT.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfclxEntity } from './tGFCLX.entity';
import { TgfcotEntity } from './tGFCOT.entity';
import { TgfcriEntity } from './tGFCRI.entity';
import { TgfcrnEntity } from './tGFCRN.entity';
import { TgfcrtEntity } from './tGFCRT.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfetaEntity } from './tGFETA.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TgfgruEntity } from './tGFGRU.entity';
import { TgfgvpEntity } from './tGFGVP.entity';
import { TgfixnEntity } from './tGFIXN.entity';
import { TgfmeqEntity } from './tGFMEQ.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TgfnccEntity } from './tGFNCC.entity';
import { TgfppgEntity } from './tGFPPG.entity';
import { TgfprjEntity } from './tGFPRJ.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfratEntity } from './tGFRAT.entity';
import { TgfravEntity } from './tGFRAV.entity';
import { TgfvenEntity } from './tGFVEN.entity';
import { TgmaiEntity } from './tGMAI.entity';
import { TgmcfgiEntity } from './tGMCFGI.entity';
import { TimimbEntity } from './tIMIMB.entity';
import { TimtxcEntity } from './tIMTXC.entity';
import { TmstcrEntity } from './tMSTCR.entity';
import { TsiceuEntity } from './tSICEU.entity';
import { TgfunnEntity } from './tGFUNN.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfntaEntity } from './tGFNTA.entity';
import { TmiungEntity } from './tMIUNG.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsifatEntity } from './tSIFAT.entity';
import { TsilibEntity } from './tSILIB.entity';
import { TsilorEntity } from './tSILOR.entity';
import { TsiobcEntity } from './tSIOBC.entity';

@Index('PK_TSICUS', ['codcencus'], { unique: true })
@Entity('TSICUS', { schema: 'SANKHYA' })
export class TsicusEntity {
  @Column('int', { primary: true, name: 'CODCENCUS' })
  codcencus: number;

  @Column('char', { name: 'DESCRCENCUS', length: 50 })
  descrcencus: string;

  @Column('int', { name: 'CODCENCUSPAI' })
  codcencuspai: number;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('char', { name: 'ANALITICO', length: 1, default: () => "'S'" })
  analitico: string;

  @Column('smallint', { name: 'GRAU' })
  grau: number;

  @Column('float', { name: 'AREA', nullable: true, precision: 53 })
  area: number | null;

  @Column('datetime', {
    name: 'DTINCLUSAO',
    nullable: true,
    default: () => 'getdate()',
  })
  dtinclusao: Date | null;

  @Column('float', { name: 'FRACGEREN', nullable: true, precision: 53 })
  fracgeren: number | null;

  @Column('float', { name: 'FRACCONT', nullable: true, precision: 53 })
  fraccont: number | null;

  @Column('float', { name: 'AREAPERM', nullable: true, precision: 53 })
  areaperm: number | null;

  @Column('float', { name: 'AREACONT', nullable: true, precision: 53 })
  areacont: number | null;

  @Column('float', { name: 'AREAREAL', nullable: true, precision: 53 })
  areareal: number | null;

  @Column('char', { name: 'VEICULO', length: 1, default: () => "'N'" })
  veiculo: string;

  @Column('char', { name: 'CALCELALURPARTEA', nullable: true, length: 1 })
  calcelalurpartea: string | null;

  @OneToMany(
    () => AdItevaloresdporcEntity,
    (adItevaloresdporcEntity) => adItevaloresdporcEntity.codcencus,
  )
  adItevaloresdporcs: AdItevaloresdporcEntity[];

  @OneToMany(() => TcacprEntity, (tcacprEntity) => tcacprEntity.codcencus)
  tcacprs: TcacprEntity[];

  @OneToMany(() => TcacprEntity, (tcacprEntity) => tcacprEntity.crprograma)
  tcacprs2: TcacprEntity[];

  @OneToMany(() => TcacprEntity, (tcacprEntity) => tcacprEntity.programa)
  tcacprs3: TcacprEntity[];

  @OneToMany(() => TcametEntity, (tcametEntity) => tcametEntity.codcencus2)
  tcamets: TcametEntity[];

  @OneToMany(() => TcaparEntity, (tcaparEntity) => tcaparEntity.codcencus)
  tcapars: TcaparEntity[];

  @OneToMany(() => TcblanEntity, (tcblanEntity) => tcblanEntity.codcencus2)
  tcblans: TcblanEntity[];

  @OneToMany(
    () => TcblanConfEntity,
    (tcblanConfEntity) => tcblanConfEntity.codcencus,
  )
  tcblanConfs: TcblanConfEntity[];

  @OneToMany(() => TcbmetEntity, (tcbmetEntity) => tcbmetEntity.codcencus2)
  tcbmets: TcbmetEntity[];

  @OneToMany(() => TcbsalEntity, (tcbsalEntity) => tcbsalEntity.codcencus2)
  tcbsals: TcbsalEntity[];

  @OneToMany(() => TccratEntity, (tccratEntity) => tccratEntity.codcencus2)
  tccrats: TccratEntity[];

  @OneToMany(() => TccresEntity, (tccresEntity) => tccresEntity.codcencus2)
  tccres: TccresEntity[];

  @OneToMany(() => TcedespEntity, (tcedespEntity) => tcedespEntity.codcencus)
  tcedesps: TcedespEntity[];

  @OneToMany(
    () => TcedespHisEntity,
    (tcedespHisEntity) => tcedespHisEntity.codcencus,
  )
  tcedespHis: TcedespHisEntity[];

  @OneToMany(() => TcfabtEntity, (tcfabtEntity) => tcfabtEntity.codcencus)
  tcfabts: TcfabtEntity[];

  @OneToMany(() => TcfoscabEntity, (tcfoscabEntity) => tcfoscabEntity.codcencus)
  tcfoscabs: TcfoscabEntity[];

  @OneToMany(() => TcimovEntity, (tcimovEntity) => tcimovEntity.codcencus)
  tcimovs: TcimovEntity[];

  @OneToMany(() => TcimovajEntity, (tcimovajEntity) => tcimovajEntity.codcencus)
  tcimovajs: TcimovajEntity[];

  @OneToMany(() => TcscxtEntity, (tcscxtEntity) => tcscxtEntity.codcencus2)
  tcscxts: TcscxtEntity[];

  @OneToMany(() => TcsfapEntity, (tcsfapEntity) => tcsfapEntity.codcencus)
  tcsfaps: TcsfapEntity[];

  @OneToMany(() => TcsoseEntity, (tcsoseEntity) => tcsoseEntity.codcencus)
  tcsoses: TcsoseEntity[];

  @OneToMany(() => TfpbenEntity, (tfpbenEntity) => tfpbenEntity.codcencus)
  tfpbens: TfpbenEntity[];

  @OneToMany(() => TfpbenEntity, (tfpbenEntity) => tfpbenEntity.codcencusdif)
  tfpbens2: TfpbenEntity[];

  @OneToMany(() => TfpdepEntity, (tfpdepEntity) => tfpdepEntity.codcencus)
  tfpdeps: TfpdepEntity[];

  @OneToMany(() => TfpempEntity, (tfpempEntity) => tfpempEntity.codcencus)
  tfpemps: TfpempEntity[];

  @OneToMany(
    () => TfpempEntity,
    (tfpempEntity) => tfpempEntity.codcencusatocoop,
  )
  tfpemps2: TfpempEntity[];

  @OneToMany(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.codcencus)
  tfpeves: TfpeveEntity[];

  @OneToMany(() => TfpfinEntity, (tfpfinEntity) => tfpfinEntity.codcencus)
  tfpfins: TfpfinEntity[];

  @OneToMany(() => TfprtfEntity, (tfprtfEntity) => tfprtfEntity.codcencus2)
  tfprtfs: TfprtfEntity[];

  @OneToMany(() => TfprtmEntity, (tfprtmEntity) => tfprtmEntity.codcencus2)
  tfprtms: TfprtmEntity[];

  @OneToMany(() => TfprttEntity, (tfprttEntity) => tfprttEntity.codcencus2)
  tfprtts: TfprttEntity[];

  @OneToMany(() => TgaahiEntity, (tgaahiEntity) => tgaahiEntity.codcencus)
  tgaahis: TgaahiEntity[];

  @OneToMany(() => TgaculEntity, (tgaculEntity) => tgaculEntity.codcencus)
  tgaculs: TgaculEntity[];

  @OneToMany(() => TgarecEntity, (tgarecEntity) => tgarecEntity.codcencus)
  tgarecs: TgarecEntity[];

  @OneToMany(() => TgatriEntity, (tgatriEntity) => tgatriEntity.codcencus)
  tgatris: TgatriEntity[];

  @OneToMany(() => TgfacoEntity, (tgfacoEntity) => tgfacoEntity.codcencus)
  tgfacos: TgfacoEntity[];

  @OneToMany(() => TgfattEntity, (tgfattEntity) => tgfattEntity.codcencusdesp)
  tgfatts: TgfattEntity[];

  @OneToMany(() => TgfattEntity, (tgfattEntity) => tgfattEntity.codcencusrec)
  tgfatts2: TgfattEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.codcencus)
  tgfcabs: TgfcabEntity[];

  @OneToMany(() => TgfclxEntity, (tgfclxEntity) => tgfclxEntity.codcencus)
  tgfclxes: TgfclxEntity[];

  @OneToMany(() => TgfcotEntity, (tgfcotEntity) => tgfcotEntity.codcencus)
  tgfcots: TgfcotEntity[];

  @OneToMany(() => TgfcriEntity, (tgfcriEntity) => tgfcriEntity.codcencus2)
  tgfcris: TgfcriEntity[];

  @OneToMany(() => TgfcrnEntity, (tgfcrnEntity) => tgfcrnEntity.codcencus2)
  tgfcrns: TgfcrnEntity[];

  @OneToMany(() => TgfcrtEntity, (tgfcrtEntity) => tgfcrtEntity.codcencus2)
  tgfcrts: TgfcrtEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.codcencus)
  tgfemps: TgfempEntity[];

  @OneToMany(() => TgfetaEntity, (tgfetaEntity) => tgfetaEntity.codcencus)
  tgfetas: TgfetaEntity[];

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.codcencus)
  tgffins: TgffinEntity[];

  @OneToMany(() => TgfgruEntity, (tgfgruEntity) => tgfgruEntity.codcencus)
  tgfgrus: TgfgruEntity[];

  @OneToMany(() => TgfgvpEntity, (tgfgvpEntity) => tgfgvpEntity.codcencus)
  tgfgvps: TgfgvpEntity[];

  @OneToMany(() => TgfixnEntity, (tgfixnEntity) => tgfixnEntity.codcencus)
  tgfixns: TgfixnEntity[];

  @OneToMany(() => TgfmeqEntity, (tgfmeqEntity) => tgfmeqEntity.codcencus)
  tgfmeqs: TgfmeqEntity[];

  @OneToMany(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.codcencus)
  tgfnats: TgfnatEntity[];

  @OneToMany(() => TgfnccEntity, (tgfnccEntity) => tgfnccEntity.codcencus2)
  tgfnccs: TgfnccEntity[];

  @OneToMany(() => TgfppgEntity, (tgfppgEntity) => tgfppgEntity.codcencuspad)
  tgfppgs: TgfppgEntity[];

  @OneToMany(() => TgfprjEntity, (tgfprjEntity) => tgfprjEntity.codcencus2)
  tgfprjs: TgfprjEntity[];

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.codcencus)
  tgfpros: TgfproEntity[];

  @OneToMany(() => TgfratEntity, (tgfratEntity) => tgfratEntity.codcencus2)
  tgfrats: TgfratEntity[];

  @OneToMany(() => TgfravEntity, (tgfravEntity) => tgfravEntity.codcencus2)
  tgfravs: TgfravEntity[];

  @OneToMany(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.codcencuspad)
  tgfvens: TgfvenEntity[];

  @OneToMany(() => TgmaiEntity, (tgmaiEntity) => tgmaiEntity.codcencus)
  tgmais: TgmaiEntity[];

  @OneToMany(() => TgmcfgiEntity, (tgmcfgiEntity) => tgmcfgiEntity.codcencus2)
  tgmcfgis: TgmcfgiEntity[];

  @OneToMany(
    () => TimimbEntity,
    (timimbEntity) => timimbEntity.imbcodcencuslocacao,
  )
  timimbs: TimimbEntity[];

  @OneToMany(
    () => TimimbEntity,
    (timimbEntity) => timimbEntity.imbcodcencuscorbancario,
  )
  timimbs2: TimimbEntity[];

  @OneToMany(
    () => TimimbEntity,
    (timimbEntity) => timimbEntity.imbcodcencusincorpora,
  )
  timimbs3: TimimbEntity[];

  @OneToMany(
    () => TimimbEntity,
    (timimbEntity) => timimbEntity.imbcodcencusloteamento,
  )
  timimbs4: TimimbEntity[];

  @OneToMany(
    () => TimimbEntity,
    (timimbEntity) => timimbEntity.imbcodcencusrevenda,
  )
  timimbs5: TimimbEntity[];

  @OneToMany(() => TimimbEntity, (timimbEntity) => timimbEntity.imbcodcencusadm)
  timimbs6: TimimbEntity[];

  @OneToMany(
    () => TimimbEntity,
    (timimbEntity) => timimbEntity.imbcodcencusvenda,
  )
  timimbs7: TimimbEntity[];

  @OneToMany(() => TimtxcEntity, (timtxcEntity) => timtxcEntity.txccodcencus)
  timtxcs: TimtxcEntity[];

  @OneToMany(() => TmstcrEntity, (tmstcrEntity) => tmstcrEntity.codcencus)
  tmstcrs: TmstcrEntity[];

  @OneToMany(() => TsiceuEntity, (tsiceuEntity) => tsiceuEntity.codcencus2)
  tsiceus: TsiceuEntity[];

  @ManyToOne(() => TgfunnEntity, (tgfunnEntity) => tgfunnEntity.tsicuses)
  @JoinColumn([{ name: 'CODUNN', referencedColumnName: 'codunn' }])
  codunn: TgfunnEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tsicuses)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tsicuses2)
  @JoinColumn([{ name: 'CODPARCRESP', referencedColumnName: 'codparc' }])
  codparcresp: TgfparEntity;

  @ManyToOne(() => TgfntaEntity, (tgfntaEntity) => tgfntaEntity.tsicuses)
  @JoinColumn([{ name: 'CODTAB', referencedColumnName: 'codtab' }])
  codtab: TgfntaEntity;

  @ManyToOne(() => TmiungEntity, (tmiungEntity) => tmiungEntity.tsicuses)
  @JoinColumn([{ name: 'CODUNG', referencedColumnName: 'codung' }])
  codung: TmiungEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsicuses)
  @JoinColumn([{ name: 'CODUSURESP', referencedColumnName: 'codusu' }])
  codusuresp: TsiusuEntity;

  @OneToMany(() => TsifatEntity, (tsifatEntity) => tsifatEntity.codcencus)
  tsifats: TsifatEntity[];

  @OneToMany(() => TsilibEntity, (tsilibEntity) => tsilibEntity.codcencus)
  tsilibs: TsilibEntity[];

  @OneToMany(() => TsilorEntity, (tsilorEntity) => tsilorEntity.codcencus2)
  tsilors: TsilorEntity[];

  @OneToMany(() => TsiobcEntity, (tsiobcEntity) => tsiobcEntity.codcencus)
  tsiobcs: TsiobcEntity[];

  @OneToMany(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.codcencuspad)
  tsiusus: TsiusuEntity[];
}
