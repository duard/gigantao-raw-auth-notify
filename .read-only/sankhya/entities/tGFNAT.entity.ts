import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { AdAcertoviagemiteEntity } from './aD_ACERTOVIAGEMITE.entity';
import { TcacpiEntity } from './tCACPI.entity';
import { TcacprEntity } from './tCACPR.entity';
import { TcametEntity } from './tCAMET.entity';
import { TcaparEntity } from './tCAPAR.entity';
import { TcbimodEntity } from './tCBIMOD.entity';
import { TcbimorEntity } from './tCBIMOR.entity';
import { TccempEntity } from './tCCEMP.entity';
import { TccratEntity } from './tCCRAT.entity';
import { TcedespEntity } from './tCEDESP.entity';
import { TcedespHisEntity } from './tCEDESP_HIS.entity';
import { TceictnEntity } from './tCEICTN.entity';
import { TcscnvEntity } from './tCSCNV.entity';
import { TcsconEntity } from './tCSCON.entity';
import { TcsfipEntity } from './tCSFIP.entity';
import { TcsgmtEntity } from './tCSGMT.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TcstpnEntity } from './tCSTPN.entity';
import { TcspadEntity } from './tCSPAD.entity';
import { TcsrpnEntity } from './tCSRPN.entity';
import { TcsserEntity } from './tCSSER.entity';
import { TfpbenEntity } from './tFPBEN.entity';
import { TfpeveEntity } from './tFPEVE.entity';
import { TfpfinEntity } from './tFPFIN.entity';
import { TgarecEntity } from './tGAREC.entity';
import { TgatriEntity } from './tGATRI.entity';
import { TgfacoEntity } from './tGFACO.entity';
import { TgfattEntity } from './tGFATT.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfclxEntity } from './tGFCLX.entity';
import { TgfcodrecdirfnatEntity } from './tGFCODRECDIRFNAT.entity';
import { TgfcotEntity } from './tGFCOT.entity';
import { TgfcriEntity } from './tGFCRI.entity';
import { TgfcrnEntity } from './tGFCRN.entity';
import { TgfdnpEntity } from './tGFDNP.entity';
import { TgfenaEntity } from './tGFENA.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TgfgruEntity } from './tGFGRU.entity';
import { TgfgvpEntity } from './tGFGVP.entity';
import { TgfixnEntity } from './tGFIXN.entity';
import { Tgflcdprrq100Entity } from './tGFLCDPRRQ100.entity';
import { TcbplaEntity } from './tCBPLA.entity';
import { TgfgntEntity } from './tGFGNT.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TcbhisEntity } from './tCBHIS.entity';
import { TgfnatpcEntity } from './tGFNATPC.entity';
import { TgfncbEntity } from './tGFNCB.entity';
import { TgfnccEntity } from './tGFNCC.entity';
import { TgfnpcEntity } from './tGFNPC.entity';
import { TgfnscEntity } from './tGFNSC.entity';
import { TgfppgEntity } from './tGFPPG.entity';
import { TgfprjEntity } from './tGFPRJ.entity';
import { TgfratEntity } from './tGFRAT.entity';
import { TgfravEntity } from './tGFRAV.entity';
import { TgifinEntity } from './tGIFIN.entity';
import { TgmaiEntity } from './tGMAI.entity';
import { TimhcbEntity } from './tIMHCB.entity';
import { TimtxcEntity } from './tIMTXC.entity';
import { TjcapjEntity } from './tJCAPJ.entity';
import { TjcprvEntity } from './tJCPRV.entity';
import { TmsocoEntity } from './tMSOCO.entity';
import { TmstipcobaftEntity } from './tMSTIPCOBAFT.entity';
import { TmstvcEntity } from './tMSTVC.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TsifatEntity } from './tSIFAT.entity';
import { TsilibEntity } from './tSILIB.entity';
import { TsiobcEntity } from './tSIOBC.entity';

@Index('PK_TGFNAT', ['codnat'], { unique: true })
@Entity('TGFNAT', { schema: 'SANKHYA' })
export class TgfnatEntity {
  @Column('int', { primary: true, name: 'CODNAT' })
  codnat: number;

  @Column('char', { name: 'DESCRNAT', length: 40 })
  descrnat: string;

  @Column('char', { name: 'INCRESULT', length: 1, default: () => "'S'" })
  incresult: string;

  @Column('int', { name: 'CODNATPAI', nullable: true })
  codnatpai: number | null;

  @Column('smallint', { name: 'GRAU', nullable: true })
  grau: number | null;

  @Column('char', { name: 'ATIVA', length: 1, default: () => "'S'" })
  ativa: string;

  @Column('char', { name: 'ANALITICA', length: 1, default: () => "'S'" })
  analitica: string;

  @Column('int', { name: 'CODCTACTB2', nullable: true })
  codctactb2: number | null;

  @Column('smallint', { name: 'CODHISTCTB2', nullable: true })
  codhistctb2: number | null;

  @Column('char', { name: 'GRUPOMKP', nullable: true, length: 30 })
  grupomkp: string | null;

  @Column('char', { name: 'SUBGRUPOMKP', nullable: true, length: 30 })
  subgrupomkp: string | null;

  @Column('smallint', { name: 'DECVLR', nullable: true })
  decvlr: number | null;

  @Column('text', { name: 'FORMULA', nullable: true })
  formula: string | null;

  @Column('smallint', { name: 'CSTPIS', nullable: true })
  cstpis: number | null;

  @Column('smallint', { name: 'CSTCOFINS', nullable: true })
  cstcofins: number | null;

  @Column('varchar', { name: 'NATBCCRED', nullable: true, length: 2 })
  natbccred: string | null;

  @Column('float', { name: 'ALIQPIS', nullable: true, precision: 53 })
  aliqpis: number | null;

  @Column('float', { name: 'ALIQCOFINS', nullable: true, precision: 53 })
  aliqcofins: number | null;

  @Column('char', { name: 'REGIMEEFD', length: 1, default: () => "'A'" })
  regimeefd: string;

  @Column('char', { name: 'TIPNAT', nullable: true, length: 1 })
  tipnat: string | null;

  @Column('char', { name: 'FINREGP100', length: 1, default: () => "'N'" })
  finregp100: string;

  @Column('varchar', { name: 'FINCODATIVP100', nullable: true, length: 8 })
  fincodativp100: string | null;

  @Column('varchar', { name: 'GERALCDPR', nullable: true, length: 1 })
  geralcdpr: string | null;

  @Column('char', { name: 'RECADIANTRURAL', nullable: true, length: 1 })
  recadiantrural: string | null;

  @Column('smallint', { name: 'NATEFDCONTM410M810', nullable: true })
  natefdcontm410M810: number | null;

  @Column('varchar', { name: 'AD_USAACERTO', nullable: true, length: 10 })
  adUsaacerto: string | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @OneToMany(
    () => AdAcertoviagemiteEntity,
    (adAcertoviagemiteEntity) => adAcertoviagemiteEntity.codnat,
  )
  adAcertoviagemites: AdAcertoviagemiteEntity[];

  @OneToMany(() => TcacpiEntity, (tcacpiEntity) => tcacpiEntity.codnat2)
  tcacpis: TcacpiEntity[];

  @OneToMany(() => TcacprEntity, (tcacprEntity) => tcacprEntity.codnatreceita)
  tcacprs: TcacprEntity[];

  @OneToMany(() => TcametEntity, (tcametEntity) => tcametEntity.codnat2)
  tcamets: TcametEntity[];

  @OneToMany(() => TcaparEntity, (tcaparEntity) => tcaparEntity.codnat)
  tcapars: TcaparEntity[];

  @OneToMany(() => TcbimodEntity, (tcbimodEntity) => tcbimodEntity.codnat2)
  tcbimods: TcbimodEntity[];

  @OneToMany(() => TcbimorEntity, (tcbimorEntity) => tcbimorEntity.codnat2)
  tcbimors: TcbimorEntity[];

  @OneToMany(() => TccempEntity, (tccempEntity) => tccempEntity.codnat)
  tccemps: TccempEntity[];

  @OneToMany(() => TccratEntity, (tccratEntity) => tccratEntity.codnat2)
  tccrats: TccratEntity[];

  @OneToMany(() => TcedespEntity, (tcedespEntity) => tcedespEntity.codnat)
  tcedesps: TcedespEntity[];

  @OneToMany(
    () => TcedespHisEntity,
    (tcedespHisEntity) => tcedespHisEntity.codnat,
  )
  tcedespHis: TcedespHisEntity[];

  @OneToMany(() => TceictnEntity, (tceictnEntity) => tceictnEntity.codnat2)
  tceictns: TceictnEntity[];

  @OneToMany(() => TcscnvEntity, (tcscnvEntity) => tcscnvEntity.codnat)
  tcscnvs: TcscnvEntity[];

  @OneToMany(() => TcsconEntity, (tcsconEntity) => tcsconEntity.codnat)
  tcscons: TcsconEntity[];

  @OneToMany(() => TcsfipEntity, (tcsfipEntity) => tcsfipEntity.codnat2)
  tcsfips: TcsfipEntity[];

  @OneToMany(() => TcsgmtEntity, (tcsgmtEntity) => tcsgmtEntity.codnat2)
  tcsgmts: TcsgmtEntity[];

  @ManyToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfnats)
  tgfpros: TgfproEntity[];

  @ManyToMany(() => TcstpnEntity, (tcstpnEntity) => tcstpnEntity.tgfnats)
  tcstpns: TcstpnEntity[];

  @OneToMany(() => TcspadEntity, (tcspadEntity) => tcspadEntity.codnat)
  tcspads: TcspadEntity[];

  @OneToMany(() => TcsrpnEntity, (tcsrpnEntity) => tcsrpnEntity.codnat2)
  tcsrpns: TcsrpnEntity[];

  @OneToMany(() => TcsserEntity, (tcsserEntity) => tcsserEntity.codnat2)
  tcssers: TcsserEntity[];

  @OneToMany(() => TfpbenEntity, (tfpbenEntity) => tfpbenEntity.codnat)
  tfpbens: TfpbenEntity[];

  @OneToMany(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.codnat)
  tfpeves: TfpeveEntity[];

  @OneToMany(() => TfpfinEntity, (tfpfinEntity) => tfpfinEntity.codnat)
  tfpfins: TfpfinEntity[];

  @OneToMany(() => TgarecEntity, (tgarecEntity) => tgarecEntity.codnat)
  tgarecs: TgarecEntity[];

  @OneToMany(() => TgatriEntity, (tgatriEntity) => tgatriEntity.codnat)
  tgatris: TgatriEntity[];

  @OneToMany(() => TgfacoEntity, (tgfacoEntity) => tgfacoEntity.codnat)
  tgfacos: TgfacoEntity[];

  @OneToMany(() => TgfattEntity, (tgfattEntity) => tgfattEntity.codnatdesp)
  tgfatts: TgfattEntity[];

  @OneToMany(() => TgfattEntity, (tgfattEntity) => tgfattEntity.codnatrec)
  tgfatts2: TgfattEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.codnat)
  tgfcabs: TgfcabEntity[];

  @OneToMany(() => TgfclxEntity, (tgfclxEntity) => tgfclxEntity.codnat)
  tgfclxes: TgfclxEntity[];

  @OneToMany(
    () => TgfcodrecdirfnatEntity,
    (tgfcodrecdirfnatEntity) => tgfcodrecdirfnatEntity.codnat2,
  )
  tgfcodrecdirfnats: TgfcodrecdirfnatEntity[];

  @OneToMany(() => TgfcotEntity, (tgfcotEntity) => tgfcotEntity.codnat)
  tgfcots: TgfcotEntity[];

  @OneToMany(() => TgfcriEntity, (tgfcriEntity) => tgfcriEntity.codnat2)
  tgfcris: TgfcriEntity[];

  @OneToMany(() => TgfcrnEntity, (tgfcrnEntity) => tgfcrnEntity.codnat2)
  tgfcrns: TgfcrnEntity[];

  @OneToMany(() => TgfdnpEntity, (tgfdnpEntity) => tgfdnpEntity.codnat2)
  tgfdnps: TgfdnpEntity[];

  @OneToMany(() => TgfenaEntity, (tgfenaEntity) => tgfenaEntity.codnat2)
  tgfenas: TgfenaEntity[];

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.codnat2)
  tgffins: TgffinEntity[];

  @OneToMany(() => TgfgruEntity, (tgfgruEntity) => tgfgruEntity.codnat)
  tgfgrus: TgfgruEntity[];

  @OneToMany(() => TgfgvpEntity, (tgfgvpEntity) => tgfgvpEntity.codnat)
  tgfgvps: TgfgvpEntity[];

  @OneToMany(() => TgfixnEntity, (tgfixnEntity) => tgfixnEntity.codnat)
  tgfixns: TgfixnEntity[];

  @OneToMany(
    () => Tgflcdprrq100Entity,
    (tgflcdprrq100Entity) => tgflcdprrq100Entity.codnat,
  )
  tgflcdprrqs: Tgflcdprrq100Entity[];

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfnats2)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfnats3)
  @JoinColumn([{ name: 'CODSERVUNICO', referencedColumnName: 'codprod' }])
  codservunico: TgfproEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tgfnats)
  @JoinColumn([{ name: 'CODCTACTBEFD', referencedColumnName: 'codctactb' }])
  codctactbefd: TcbplaEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tgfnats2)
  @JoinColumn([{ name: 'CODCTACTB', referencedColumnName: 'codctactb' }])
  codctactb: TcbplaEntity;

  @ManyToOne(() => TgfgntEntity, (tgfgntEntity) => tgfgntEntity.tgfnats)
  @JoinColumn([{ name: 'CODGRUPONAT', referencedColumnName: 'codgruponat' }])
  codgruponat: TgfgntEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tgfnats)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;

  @ManyToOne(() => TcbhisEntity, (tcbhisEntity) => tcbhisEntity.tgfnats)
  @JoinColumn([{ name: 'CODHISTCTB', referencedColumnName: 'codhistctb' }])
  codhistctb: TcbhisEntity;

  @OneToMany(() => TgfnatpcEntity, (tgfnatpcEntity) => tgfnatpcEntity.codnat2)
  tgfnatpcs: TgfnatpcEntity[];

  @OneToMany(() => TgfncbEntity, (tgfncbEntity) => tgfncbEntity.codnat2)
  tgfncbs: TgfncbEntity[];

  @OneToMany(() => TgfnccEntity, (tgfnccEntity) => tgfnccEntity.codnat2)
  tgfnccs: TgfnccEntity[];

  @OneToMany(() => TgfnpcEntity, (tgfnpcEntity) => tgfnpcEntity.codnat2)
  tgfnpcs: TgfnpcEntity[];

  @OneToMany(() => TgfnscEntity, (tgfnscEntity) => tgfnscEntity.codnat2)
  tgfnscs: TgfnscEntity[];

  @OneToMany(() => TgfppgEntity, (tgfppgEntity) => tgfppgEntity.codnatpad)
  tgfppgs: TgfppgEntity[];

  @OneToMany(() => TgfprjEntity, (tgfprjEntity) => tgfprjEntity.codnat2)
  tgfprjs: TgfprjEntity[];

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.codnat)
  tgfpros2: TgfproEntity[];

  @OneToMany(() => TgfratEntity, (tgfratEntity) => tgfratEntity.codnat2)
  tgfrats: TgfratEntity[];

  @OneToMany(() => TgfravEntity, (tgfravEntity) => tgfravEntity.codnat2)
  tgfravs: TgfravEntity[];

  @OneToMany(() => TgifinEntity, (tgifinEntity) => tgifinEntity.codnat2)
  tgifins: TgifinEntity[];

  @OneToMany(() => TgmaiEntity, (tgmaiEntity) => tgmaiEntity.codnat)
  tgmais: TgmaiEntity[];

  @OneToMany(() => TimhcbEntity, (timhcbEntity) => timhcbEntity.hcbnattxadm)
  timhcbs: TimhcbEntity[];

  @OneToMany(() => TimhcbEntity, (timhcbEntity) => timhcbEntity.hcbnatureza)
  timhcbs2: TimhcbEntity[];

  @OneToMany(() => TimhcbEntity, (timhcbEntity) => timhcbEntity.hcbnatdebito)
  timhcbs3: TimhcbEntity[];

  @OneToMany(() => TimtxcEntity, (timtxcEntity) => timtxcEntity.txccodnat)
  timtxcs: TimtxcEntity[];

  @OneToMany(() => TjcapjEntity, (tjcapjEntity) => tjcapjEntity.codnat)
  tjcapjs: TjcapjEntity[];

  @OneToMany(() => TjcprvEntity, (tjcprvEntity) => tjcprvEntity.codnat2)
  tjcprvs: TjcprvEntity[];

  @OneToMany(() => TmsocoEntity, (tmsocoEntity) => tmsocoEntity.codnatrec)
  tmsocos: TmsocoEntity[];

  @OneToMany(() => TmsocoEntity, (tmsocoEntity) => tmsocoEntity.codnatdesp)
  tmsocos2: TmsocoEntity[];

  @OneToMany(
    () => TmstipcobaftEntity,
    (tmstipcobaftEntity) => tmstipcobaftEntity.codnat,
  )
  tmstipcobafts: TmstipcobaftEntity[];

  @OneToMany(
    () => TmstipcobaftEntity,
    (tmstipcobaftEntity) => tmstipcobaftEntity.codnatsimples,
  )
  tmstipcobafts2: TmstipcobaftEntity[];

  @OneToMany(() => TmstvcEntity, (tmstvcEntity) => tmstvcEntity.codnat)
  tmstvcs: TmstvcEntity[];

  @OneToMany(() => TsiempEntity, (tsiempEntity) => tsiempEntity.codnattransf)
  tsiemps: TsiempEntity[];

  @OneToMany(() => TsifatEntity, (tsifatEntity) => tsifatEntity.codnat)
  tsifats: TsifatEntity[];

  @OneToMany(() => TsilibEntity, (tsilibEntity) => tsilibEntity.codnat)
  tsilibs: TsilibEntity[];

  @OneToMany(() => TsiobcEntity, (tsiobcEntity) => tsiobcEntity.codnat)
  tsiobcs: TsiobcEntity[];
}
