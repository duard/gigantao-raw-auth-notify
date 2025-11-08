import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { AdAcessoriosEntity } from './aD_ACESSORIOS.entity';
import { AdApontsolEntity } from './aD_APONTSOL.entity';
import { AdCadhabEntity } from './aD_CADHAB.entity';
import { AdGeraoscomiteEntity } from './aD_GERAOSCOMITE.entity';
import { AdItensroteiroEntity } from './aD_ITENSROTEIRO.entity';
import { AdItequitaEntity } from './aD_ITEQUITA.entity';
import { AdProdmanutencaoEntity } from './aD_PRODMANUTENCAO.entity';
import { AdProdservosEntity } from './aD_PRODSERVOS.entity';
import { AdSolcompraosEntity } from './aD_SOLCOMPRAOS.entity';
import { AstreqEntity } from './aSTREQ.entity';
import { ComprarecenteEntity } from './cOMPRARECENTE.entity';
import { GfratendimentoclienteitensEntity } from './gFRATENDIMENTOCLIENTEITENS.entity';
import { TapiapEntity } from './tAPIAP.entity';
import { TapirmEntity } from './tAPIRM.entity';
import { TappfaEntity } from './tAPPFA.entity';
import { TapseoEntity } from './tAPSEO.entity';
import { TcbimorEntity } from './tCBIMOR.entity';
import { TcciteEntity } from './tCCITE.entity';
import { TceiteEntity } from './tCEITE.entity';
import { TceiteHisEntity } from './tCEITE_HIS.entity';
import { TcfabtiteEntity } from './tCFABTITE.entity';
import { TcfitepnuEntity } from './tCFITEPNU.entity';
import { TcfmansrvEntity } from './tCFMANSRV.entity';
import { TcfoscabEntity } from './tCFOSCAB.entity';
import { TcfpnuEntity } from './tCFPNU.entity';
import { TcfservosEntity } from './tCFSERVOS.entity';
import { TcibemEntity } from './tCIBEM.entity';
import { TcictaEntity } from './tCICTA.entity';
import { TcicteEntity } from './tCICTE.entity';
import { TcidemEntity } from './tCIDEM.entity';
import { TcidibiEntity } from './tCIDIBI.entity';
import { TciestEntity } from './tCIEST.entity';
import { TcilocEntity } from './tCILOC.entity';
import { TcimovEntity } from './tCIMOV.entity';
import { TcimovajEntity } from './tCIMOVAJ.entity';
import { TcisalEntity } from './tCISAL.entity';
import { TcisalajEntity } from './tCISALAJ.entity';
import { TcitaxEntity } from './tCITAX.entity';
import { TcitaxajEntity } from './tCITAXAJ.entity';
import { TcsagfEntity } from './tCSAGF.entity';
import { TcsbloEntity } from './tCSBLO.entity';
import { TcsbmeEntity } from './tCSBME.entity';
import { TcscomEntity } from './tCSCOM.entity';
import { TcscprEntity } from './tCSCPR.entity';
import { TcscveEntity } from './tCSCVE.entity';
import { TcsehiEntity } from './tCSEHI.entity';
import { TcserrEntity } from './tCSERR.entity';
import { TcsfpeEntity } from './tCSFPE.entity';
import { TcsfprEntity } from './tCSFPR.entity';
import { TcsiteEntity } from './tCSITE.entity';
import { TcslbeEntity } from './tCSLBE.entity';
import { TcsmodEntity } from './tCSMOD.entity';
import { TcsmprEntity } from './tCSMPR.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TcsoccEntity } from './tCSOCC.entity';
import { TcspfpEntity } from './tCSPFP.entity';
import { TcspitEntity } from './tCSPIT.entity';
import { TcsppfEntity } from './tCSPPF.entity';
import { TcspreEntity } from './tCSPRE.entity';
import { TcspreqtdEntity } from './tCSPREQTD.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TcsprnEntity } from './tCSPRN.entity';
import { TcspscEntity } from './tCSPSC.entity';
import { TcstpnEntity } from './tCSTPN.entity';
import { TcsoosEntity } from './tCSOOS.entity';
import { TcsserEntity } from './tCSSER.entity';
import { TcsitsEntity } from './tCSITS.entity';
import { TcsvpcEntity } from './tCSVPC.entity';
import { TgaahEntity } from './tGAAH.entity';
import { TgaahiEntity } from './tGAAHI.entity';
import { TgaartsEntity } from './tGAARTS.entity';
import { TgacllEntity } from './tGACLL.entity';
import { TgacltEntity } from './tGACLT.entity';
import { TgacujEntity } from './tGACUJ.entity';
import { TgaculEntity } from './tGACUL.entity';
import { TgadprEntity } from './tGADPR.entity';
import { TgagarEntity } from './tGAGAR.entity';
import { TgagplEntity } from './tGAGPL.entity';
import { TgagtEntity } from './tGAGT.entity';
import { TgagtpEntity } from './tGAGTP.entity';
import { TgaicpEntity } from './tGAICP.entity';
import { TgainsEntity } from './tGAINS.entity';
import { TgamaaEntity } from './tGAMAA.entity';
import { TgamovEntity } from './tGAMOV.entity';
import { TgampaEntity } from './tGAMPA.entity';
import { TgangrEntity } from './tGANGR.entity';
import { TgapatEntity } from './tGAPAT.entity';
import { TgapesiEntity } from './tGAPESI.entity';
import { TgarecEntity } from './tGAREC.entity';
import { TgariEntity } from './tGARI.entity';
import { TgasalEntity } from './tGASAL.entity';
import { Tgfadrcstr1000Entity } from './tGFADRCSTR1000.entity';
import { Tgfadrcstr1010Entity } from './tGFADRCSTR1010.entity';
import { Tgfadrcstr1100Entity } from './tGFADRCSTR1100.entity';
import { Tgfadrcstr1110Entity } from './tGFADRCSTR1110.entity';
import { Tgfadrcstr1120Entity } from './tGFADRCSTR1120.entity';
import { Tgfadrcstr1200Entity } from './tGFADRCSTR1200.entity';
import { Tgfadrcstr1210Entity } from './tGFADRCSTR1210.entity';
import { Tgfadrcstr1220Entity } from './tGFADRCSTR1220.entity';
import { Tgfadrcstr1300Entity } from './tGFADRCSTR1300.entity';
import { Tgfadrcstr1310Entity } from './tGFADRCSTR1310.entity';
import { Tgfadrcstr1320Entity } from './tGFADRCSTR1320.entity';
import { Tgfadrcstr1400Entity } from './tGFADRCSTR1400.entity';
import { Tgfadrcstr1410Entity } from './tGFADRCSTR1410.entity';
import { Tgfadrcstr1420Entity } from './tGFADRCSTR1420.entity';
import { Tgfadrcstr1500Entity } from './tGFADRCSTR1500.entity';
import { Tgfadrcstr1510Entity } from './tGFADRCSTR1510.entity';
import { Tgfadrcstr1520Entity } from './tGFADRCSTR1520.entity';
import { TgfaidEntity } from './tGFAID.entity';
import { TgfampEntity } from './tGFAMP.entity';
import { TgfavrEntity } from './tGFAVR.entity';
import { TgfbarEntity } from './tGFBAR.entity';
import { TgfcacEntity } from './tGFCAC.entity';
import { TgfcajaEntity } from './tGFCAJA.entity';
import { TgfccfEntity } from './tGFCCF.entity';
import { TgfcipmproEntity } from './tGFCIPMPRO.entity';
import { TgfclaEntity } from './tGFCLA.entity';
import { TgfcmpEntity } from './tGFCMP.entity';
import { TgfcodrecdirfproEntity } from './tGFCODRECDIRFPRO.entity';
import { Tgfcoi2Entity } from './tGFCOI2.entity';
import { TgfcpoEntity } from './tGFCPO.entity';
import { TgfcppEntity } from './tGFCPP.entity';
import { TgfcteEntity } from './tGFCTE.entity';
import { TgfctpEntity } from './tGFCTP.entity';
import { TgfcusEntity } from './tGFCUS.entity';
import { TgfdavEntity } from './tGFDAV.entity';
import { TgfddcEntity } from './tGFDDC.entity';
import { TgfdepEntity } from './tGFDEP.entity';
import { TgfdidEntity } from './tGFDID.entity';
import { TgfeacEntity } from './tGFEAC.entity';
import { Tgfefdfk260Entity } from './tGFEFDFK260.entity';
import { Tgfefdfk265Entity } from './tGFEFDFK265.entity';
import { TgfemmEntity } from './tGFEMM.entity';
import { TgfepiEntity } from './tGFEPI.entity';
import { TgfeppEntity } from './tGFEPP.entity';
import { TgfeprEntity } from './tGFEPR.entity';
import { TgfestEntity } from './tGFEST.entity';
import { TgfetqEntity } from './tGFETQ.entity';
import { TgfexcEntity } from './tGFEXC.entity';
import { TgffamEntity } from './tGFFAM.entity';
import { TgffcpEntity } from './tGFFCP.entity';
import { TgffrmEntity } from './tGFFRM.entity';
import { TgffvcEntity } from './tGFFVC.entity';
import { TgfgarEntity } from './tGFGAR.entity';
import { Tgfgir1Entity } from './tGFGIR1.entity';
import { TgftppEntity } from './tGFTPP.entity';
import { TgfgvaEntity } from './tGFGVA.entity';
import { TgfgvrEntity } from './tGFGVR.entity';
import { TgfgxeEntity } from './tGFGXE.entity';
import { TgfiacEntity } from './tGFIAC.entity';
import { TgfiasEntity } from './tGFIAS.entity';
import { TgficpEntity } from './tGFICP.entity';
import { TgfiffpEntity } from './tGFIFFP.entity';
import { TgfimalEntity } from './tGFIMAL.entity';
import { TgfipcEntity } from './tGFIPC.entity';
import { TgfipmEntity } from './tGFIPM.entity';
import { TgfircstEntity } from './tGFIRCST.entity';
import { TgfisuEntity } from './tGFISU.entity';
import { TgfitcEntity } from './tGFITC.entity';
import { TgfitdEntity } from './tGFITD.entity';
import { TgfiteEntity } from './tGFITE.entity';
import { TgfitsEntity } from './tGFITS.entity';
import { TgfivcEntity } from './tGFIVC.entity';
import { TgflotEntity } from './tGFLOT.entity';
import { TgflseEntity } from './tGFLSE.entity';
import { TgfmcsEntity } from './tGFMCS.entity';
import { TgfmepiEntity } from './tGFMEPI.entity';
import { TgfmeqEntity } from './tGFMEQ.entity';
import { TgfmfciEntity } from './tGFMFCI.entity';
import { TgfmpeEntity } from './tGFMPE.entity';
import { TgfnmaEntity } from './tGFNMA.entity';
import { TgfordEntity } from './tGFORD.entity';
import { TgfpalEntity } from './tGFPAL.entity';
import { TgfpapEntity } from './tGFPAP.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfpcoEntity } from './tGFPCO.entity';
import { TgfpddEntity } from './tGFPDD.entity';
import { TgfpemEntity } from './tGFPEM.entity';
import { TgfimgEntity } from './tGFIMG.entity';
import { TgfplaiEntity } from './tGFPLAI.entity';
import { TgfplcEntity } from './tGFPLC.entity';
import { TgfmveEntity } from './tGFMVE.entity';
import { TgfpmfEntity } from './tGFPMF.entity';
import { TgfpmpeEntity } from './tGFPMPE.entity';
import { TgfppeEntity } from './tGFPPE.entity';
import { TgfpplEntity } from './tGFPPL.entity';
import { TgfppmEntity } from './tGFPPM.entity';
import { TgfrpcEntity } from './tGFRPC.entity';
import { TgfpprEntity } from './tGFPPR.entity';
import { TgfpraEntity } from './tGFPRA.entity';
import { TgfprdEntity } from './tGFPRD.entity';
import { TgfprfEntity } from './tGFPRF.entity';
import { TsirfeEntity } from './tSIRFE.entity';
import { TgfforEntity } from './tGFFOR.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TgfcatEntity } from './tGFCAT.entity';
import { TgadigEntity } from './tGADIG.entity';
import { TgfipiEntity } from './tGFIPI.entity';
import { TsipaiEntity } from './tSIPAI.entity';
import { TgwrfaEntity } from './tGWRFA.entity';
import { TgfntaEntity } from './tGFNTA.entity';
import { TgfterEntity } from './tGFTER.entity';
import { TgfcprEntity } from './tGFCPR.entity';
import { TgfcitEntity } from './tGFCIT.entity';
import { TsimoeEntity } from './tSIMOE.entity';
import { TgagruEntity } from './tGAGRU.entity';
import { TsikitEntity } from './tSIKIT.entity';
import { TgfgrdEntity } from './tGFGRD.entity';
import { TgflstEntity } from './tGFLST.entity';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgfgruEntity } from './tGFGRU.entity';
import { TgflocEntity } from './tGFLOC.entity';
import { TgfmarEntity } from './tGFMAR.entity';
import { TgwarsEntity } from './tGWARS.entity';
import { TgfpatEntity } from './tGFPAT.entity';
import { TcbplaEntity } from './tCBPLA.entity';
import { TgfcprbEntity } from './tGFCPRB.entity';
import { TcscosEntity } from './tCSCOS.entity';
import { TgfproiEntity } from './tGFPROI.entity';
import { TgfpsdEntity } from './tGFPSD.entity';
import { TgfptpEntity } from './tGFPTP.entity';
import { TgframEntity } from './tGFRAM.entity';
import { TgfreclasEntity } from './tGFRECLAS.entity';
import { TgfrstEntity } from './tGFRST.entity';
import { TgfsapEntity } from './tGFSAP.entity';
import { TgfsazEntity } from './tGFSAZ.entity';
import { TgfsemEntity } from './tGFSEM.entity';
import { TgfserEntity } from './tGFSER.entity';
import { TgfseuEntity } from './tGFSEU.entity';
import { TgfsolEntity } from './tGFSOL.entity';
import { TgfstmvproEntity } from './tGFSTMVPRO.entity';
import { TgftaxEntity } from './tGFTAX.entity';
import { TgftraEntity } from './tGFTRA.entity';
import { TgfvceEntity } from './tGFVCE.entity';
import { TgfvcsEntity } from './tGFVCS.entity';
import { TgfvdpEntity } from './tGFVDP.entity';
import { TgfveiEntity } from './tGFVEI.entity';
import { TgfvoaEntity } from './tGFVOA.entity';
import { TgfvoahEntity } from './tGFVOAH.entity';
import { TgfvoemEntity } from './tGFVOEM.entity';
import { TgfvorEntity } from './tGFVOR.entity';
import { TgiiteEntity } from './tGIITE.entity';
import { TgvavprEntity } from './tGVAVPR.entity';
import { TgvpeprEntity } from './tGVPEPR.entity';
import { TgvravEntity } from './tGVRAV.entity';
import { TgvresEntity } from './tGVRES.entity';
import { TgvrngEntity } from './tGVRNG.entity';
import { TgwaxpEntity } from './tGWAXP.entity';
import { TgwcserEntity } from './tGWCSER.entity';
import { TgwcteEntity } from './tGWCTE.entity';
import { TgwempeEntity } from './tGWEMPE.entity';
import { TgwenpEntity } from './tGWENP.entity';
import { TgwepaEntity } from './tGWEPA.entity';
import { TgweplEntity } from './tGWEPL.entity';
import { TgwestEntity } from './tGWEST.entity';
import { TgwexpEntity } from './tGWEXP.entity';
import { TgwexplEntity } from './tGWEXPL.entity';
import { TgwgpdEntity } from './tGWGPD.entity';
import { TgwinvEntity } from './tGWINV.entity';
import { TgwitrEntity } from './tGWITR.entity';
import { TgwittEntity } from './tGWITT.entity';
import { TgwivlEntity } from './tGWIVL.entity';
import { TgwivrEntity } from './tGWIVR.entity';
import { TgwivrserEntity } from './tGWIVRSER.entity';
import { TgwlboEntity } from './tGWLBO.entity';
import { TgwlceEntity } from './tGWLCE.entity';
import { TgwquaEntity } from './tGWQUA.entity';
import { TgwragEntity } from './tGWRAG.entity';
import { TgwrarmEntity } from './tGWRARM.entity';
import { TgwrconEntity } from './tGWRCON.entity';
import { TgwromEntity } from './tGWROM.entity';
import { TgwrplEntity } from './tGWRPL.entity';
import { TgwtrcdEntity } from './tGWTRCD.entity';
import { TgwtrfEntity } from './tGWTRF.entity';
import { TimcnfEntity } from './tIMCNF.entity';
import { TimimbEntity } from './tIMIMB.entity';
import { TmsordcarregEntity } from './tMSORDCARREG.entity';
import { TmsparqbEntity } from './tMSPARQB.entity';
import { TmspedEntity } from './tMSPED.entity';
import { TotconEntity } from './tOTCON.entity';
import { TotlenEntity } from './tOTLEN.entity';
import { TotrecEntity } from './tOTREC.entity';
import { TprbomEntity } from './tPRBOM.entity';
import { TprcoiEntity } from './tPRCOI.entity';
import { TprcpmpEntity } from './tPRCPMP.entity';
import { TprcprEntity } from './tPRCPR.entity';
import { TprestsmpEntity } from './tPRESTSMP.entity';
import { TprfxtEntity } from './tPRFXT.entity';
import { TprhmrpEntity } from './tPRHMRP.entity';
import { TprhsmpEntity } from './tPRHSMP.entity';
import { TprimpsEntity } from './tPRIMPS.entity';
import { TprimrpEntity } from './tPRIMRP.entity';
import { TprirpaEntity } from './tPRIRPA.entity';
import { TprlmpEntity } from './tPRLMP.entity';
import { TprlpaEntity } from './tPRLPA.entity';
import { TprlspEntity } from './tPRLSP.entity';
import { TprmpaEntity } from './tPRMPA.entity';
import { TprrwaEntity } from './tPRRWA.entity';
import { TprswxpEntity } from './tPRSWXP.entity';
import { TprtacEntity } from './tPRTAC.entity';
import { TprtppEntity } from './tPRTPP.entity';
import { TprtxpEntity } from './tPRTXP.entity';
import { TprtxppEntity } from './tPRTXPP.entity';
import { TprwxpEntity } from './tPRWXP.entity';
import { TripprodEntity } from './tRIPPROD.entity';
import { TsieveEntity } from './tSIEVE.entity';
import { TsitdaEntity } from './tSITDA.entity';
import { TsitokpEntity } from './tSITOKP.entity';
import { TsitokpvrEntity } from './tSITOKPVR.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TslipxEntity } from './tSLIPX.entity';
import { TtkprotempEntity } from './tTKPROTEMP.entity';

@Index('PK_TGFPRO', ['codprod'], { unique: true })
@Index('TGFPRO_I01', ['referencia'], {})
@Index('TGFPRO_I02', ['codgar', 'tipcontest'], {})
@Index('TGFPRO_I03', ['codgrupoprod'], {})
@Index('TGFPRO_I04', ['codtab'], {})
@Index('TGFPRO_I05', ['codipi'], {})
@Index('TGFPRO_I06', ['codprodagrupapt'], {})
@Index('TGFPRO_I07', ['codprodagrupaptenc'], {})
@Index('TGFPRO_I08', ['codprodinnatura'], {})
@Index('TGFPRO_I09', ['marca'], {})
@Index('TGFPRO_I10', ['descrprod'], {})
@Index('TGFPRO_I11', ['refforn'], {})
@Index('TGFPRO_I12', ['tipcontest', 'wmsprodrastsermed'], {})
@Entity('TGFPRO', { schema: 'SANKHYA' })
export class TgfproEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { name: 'DESCRPROD', length: 40 })
  descrprod: string;

  @Column('char', { name: 'COMPLDESC', nullable: true, length: 40 })
  compldesc: string | null;

  @Column('text', { name: 'CARACTERISTICAS', nullable: true })
  caracteristicas: string | null;

  @Column('varchar', { name: 'REFERENCIA', nullable: true, length: 15 })
  referencia: string | null;

  @Column('int', { name: 'CODGRUPOPROD' })
  codgrupoprod: number;

  @Column('char', { name: 'MARCA', nullable: true, length: 10 })
  marca: string | null;

  @Column('char', { name: 'LOCALIZACAO', nullable: true, length: 15 })
  localizacao: string | null;

  @Column('smallint', { name: 'CODIPI', nullable: true })
  codipi: number | null;

  @Column('smallint', { name: 'CLASSUBTRIB', nullable: true })
  classubtrib: number | null;

  @Column('float', { name: 'MARGLUCRO', nullable: true, precision: 53 })
  marglucro: number | null;

  @Column('float', { name: 'MULTIPVENDA', nullable: true, precision: 53 })
  multipvenda: number | null;

  @Column('smallint', { name: 'DECCUSTO', nullable: true })
  deccusto: number | null;

  @Column('smallint', { name: 'DECVLR', nullable: true })
  decvlr: number | null;

  @Column('smallint', { name: 'DECQTD', nullable: true })
  decqtd: number | null;

  @Column('float', { name: 'COMGER', nullable: true, precision: 53 })
  comger: number | null;

  @Column('float', { name: 'COMVEND', nullable: true, precision: 53 })
  comvend: number | null;

  @Column('float', { name: 'DESCMAX', nullable: true, precision: 53 })
  descmax: number | null;

  @Column('decimal', {
    name: 'PESOBRUTO',
    precision: 15,
    scale: 5,
    default: () => '(0)',
  })
  pesobruto: number;

  @Column('decimal', {
    name: 'PESOLIQ',
    precision: 15,
    scale: 5,
    default: () => '(0)',
  })
  pesoliq: number;

  @Column('float', { name: 'MEDAUX', nullable: true, precision: 53 })
  medaux: number | null;

  @Column('smallint', { name: 'PRAZOVAL', nullable: true })
  prazoval: number | null;

  @Column('money', { name: 'AGRUPMIN', nullable: true })
  agrupmin: number | null;

  @Column('smallint', { name: 'QTDEMB', nullable: true })
  qtdemb: number | null;

  @Column('char', { name: 'ALERTAESTMIN', length: 1, default: () => "'S'" })
  alertaestmin: string;

  @Column('char', { name: 'PROMOCAO', length: 1, default: () => "'N'" })
  promocao: string;

  @Column('char', { name: 'TEMICMS', length: 1, default: () => "'N'" })
  temicms: string;

  @Column('char', { name: 'TEMISS', length: 1, default: () => "'N'" })
  temiss: string;

  @Column('char', { name: 'TEMIPIVENDA', length: 1, default: () => "'N'" })
  temipivenda: string;

  @Column('char', { name: 'TEMIPICOMPRA', length: 1, default: () => "'N'" })
  temipicompra: string;

  @Column('char', { name: 'TEMIRF', length: 1, default: () => "'N'" })
  temirf: string;

  @Column('float', { name: 'PERCIRF', nullable: true, precision: 53 })
  percirf: number | null;

  @Column('char', { name: 'TEMINSS', length: 1, default: () => "'N'" })
  teminss: string;

  @Column('float', { name: 'PERCINSS', precision: 53, default: () => '(0)' })
  percinss: number;

  @Column('float', { name: 'REDBASEINSS', precision: 53, default: () => '(0)' })
  redbaseinss: number;

  @Column('char', {
    name: 'USOPROD',
    nullable: true,
    length: 1,
    default: () => "'V'",
  })
  usoprod: string | null;

  @Column('char', {
    name: 'ORIGPROD',
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  origprod: string | null;

  @Column('char', {
    name: 'TIPSUBST',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  tipsubst: string | null;

  @Column('float', { name: 'CODICMSFAST', nullable: true, precision: 53 })
  codicmsfast: number | null;

  @Column('char', {
    name: 'TIPLANCNOTA',
    nullable: true,
    length: 1,
    default: () => "'A'",
  })
  tiplancnota: string | null;

  @Column('char', {
    name: 'TIPCONTEST',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  tipcontest: string | null;

  @Column('smallint', { name: 'CODTAB', nullable: true })
  codtab: number | null;

  @Column('image', { name: 'IMAGEM', nullable: true })
  imagem: Buffer | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('float', { name: 'ESTMAX', nullable: true, precision: 53 })
  estmax: number | null;

  @Column('float', { name: 'ESTMIN', nullable: true, precision: 53 })
  estmin: number | null;

  @Column('char', { name: 'APRESDETALHE', length: 1, default: () => "'N'" })
  apresdetalhe: string;

  @Column('char', { name: 'SELECIONADO', nullable: true, length: 1 })
  selecionado: string | null;

  @Column('char', { name: 'TITCONTEST', nullable: true, length: 10 })
  titcontest: string | null;

  @Column('text', { name: 'LISCONTEST', nullable: true })
  liscontest: string | null;

  @Column('int', { name: 'GRUPOICMS', nullable: true })
  grupoicms: number | null;

  @Column('numeric', {
    name: 'PERCAUMENTCUSTO',
    nullable: true,
    precision: 5,
    scale: 2,
  })
  percaumentcusto: number | null;

  @Column('char', {
    name: 'LOCAL',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  local: string | null;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('char', {
    name: 'USALOCAL',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  usalocal: string | null;

  @Column('char', { name: 'HOMEPAGE', nullable: true, length: 255 })
  homepage: string | null;

  @Column('int', { name: 'CODCTACTB2', nullable: true })
  codctactb2: number | null;

  @Column('int', { name: 'CODCTACTB3', nullable: true })
  codctactb3: number | null;

  @Column('datetime', { name: 'TEMPOSERV', nullable: true })
  temposerv: Date | null;

  @Column('char', { name: 'ENDIMAGEM', nullable: true, length: 200 })
  endimagem: string | null;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('char', { name: 'CODPRODROI', nullable: true, length: 2 })
  codprodroi: string | null;

  @Column('char', { name: 'GRUPODESCPROD', nullable: true, length: 15 })
  grupodescprod: string | null;

  @Column('char', { name: 'REFFORN', nullable: true, length: 30 })
  refforn: string | null;

  @Column('char', { name: 'HRDOBRADA', length: 1, default: () => "'N'" })
  hrdobrada: string;

  @Column('char', { name: 'ICMSGERENCIA', length: 1, default: () => "'N'" })
  icmsgerencia: string;

  @Column('float', { name: 'M3', nullable: true, precision: 53 })
  m3: number | null;

  @Column('char', { name: 'TEMCIAP', length: 1, default: () => "'N'" })
  temciap: string;

  @Column('char', { name: 'IMPLAUDOLOTE', length: 1, default: () => "'N'" })
  implaudolote: string;

  @Column('int', { name: 'CODGAR', nullable: true })
  codgar: number | null;

  @Column('int', { name: 'CODCTACTB4', nullable: true })
  codctactb4: number | null;

  @Column('char', { name: 'DIMENSOES', length: 1, default: () => "'N'" })
  dimensoes: string;

  @Column('float', { name: 'PERCQUEBRATEC', nullable: true, precision: 53 })
  percquebratec: number | null;

  @Column('smallint', { name: 'CODFILTRO', nullable: true })
  codfiltro: number | null;

  @Column('char', { name: 'ENDMODROTULO', nullable: true, length: 255 })
  endmodrotulo: string | null;

  @Column('int', { name: 'CODGENERO', nullable: true })
  codgenero: number | null;

  @Column('char', { name: 'PADRAO', length: 1, default: () => "'S'" })
  padrao: string;

  @Column('varchar', { name: 'NATUREZAOPERDES', nullable: true, length: 2 })
  naturezaoperdes: string | null;

  @Column('int', { name: 'CNAE', nullable: true })
  cnae: number | null;

  @ManyToOne(() => TgfgruEntity, (tgfgruEntity) => tgfgruEntity.tgfpros)
  @JoinColumn([{ name: 'CODGRUPOPROD', referencedColumnName: 'codgrupoprod' }])
  tgfgru: TgfgruEntity;

  @OneToMany(() => TgfestEntity, (tgfestEntity) => tgfestEntity.codprod2)
  tgfests: TgfestEntity[];

  @Column('char', { name: 'SOLCOMPRA', length: 1, default: () => "'N'" })
  solcompra: string;

  @Column('char', { name: 'CONFERE', length: 1, default: () => "'S'" })
  confere: string;

  @Column('char', { name: 'REMETER', length: 1, default: () => "'N'" })
  remeter: string;

  @Column('char', { name: 'MOTIVOINCEXC', nullable: true, length: 1 })
  motivoincexc: string | null;

  @Column('numeric', {
    name: 'ARREDPRECO',
    nullable: true,
    precision: 10,
    scale: 2,
  })
  arredpreco: number | null;

  @Column('char', { name: 'TEMCOMISSAO', length: 1, default: () => "'S'" })
  temcomissao: string;

  @Column('char', { name: 'COMPONOBRIG', nullable: true, length: 1 })
  componobrig: string | null;

  @Column('char', { name: 'FATTOTAL', nullable: true, length: 1 })
  fattotal: string | null;

  @Column('char', { name: 'NOMETAB', nullable: true, length: 32 })
  nometab: string | null;

  @Column('char', { name: 'AP1RCTEGO', length: 1, default: () => "'N'" })
  ap1Rctego: string;

  @Column('char', { name: 'CALCULOGIRO', length: 1, default: () => "'E'" })
  calculogiro: string;

  @Column('float', { name: 'REDBASEIRF', nullable: true, precision: 53 })
  redbaseirf: number | null;

  @Column('float', { name: 'ALTURA', nullable: true, precision: 53 })
  altura: number | null;

  @Column('float', { name: 'LARGURA', nullable: true, precision: 53 })
  largura: number | null;

  @Column('float', { name: 'ESPESSURA', nullable: true, precision: 53 })
  espessura: number | null;

  @Column('char', {
    name: 'UNIDADE',
    nullable: true,
    length: 2,
    default: () => "'MM'",
  })
  unidade: string | null;

  @Column('smallint', { name: 'CODFORMAPONTA', nullable: true })
  codformaponta: number | null;

  @Column('char', { name: 'CONFCEGAPESO', length: 1, default: () => "'N'" })
  confcegapeso: string;

  @Column('smallint', { name: 'ORDCALCCUSTPROD', nullable: true })
  ordcalccustprod: number | null;

  @Column('char', { name: 'REGRAWMS', length: 1, default: () => "'O'" })
  regrawms: string;

  @Column('char', { name: 'GRUPOPIS', length: 30, default: () => "'TODOS'" })
  grupopis: string;

  @Column('char', { name: 'GRUPOCOFINS', length: 30, default: () => "'TODOS'" })
  grupocofins: string;

  @Column('char', { name: 'GRUPOCSSL', length: 30, default: () => "'TODOS'" })
  grupocssl: string;

  @Column('smallint', { name: 'CSTIPIENT', nullable: true })
  cstipient: number | null;

  @Column('smallint', { name: 'CSTIPISAI', nullable: true })
  cstipisai: number | null;

  @Column('char', { name: 'STATUSINCEXC', nullable: true, length: 1 })
  statusincexc: string | null;

  @Column('char', { name: 'UTILIZAWMS', length: 1, default: () => "'N'" })
  utilizawms: string;

  @Column('char', { name: 'BALANCA', length: 1, default: () => "'N'" })
  balanca: string;

  @Column('varchar', { name: 'RENDIMENTO', nullable: true, length: 50 })
  rendimento: string | null;

  @Column('varchar', { name: 'OBSETIQUETA', nullable: true, length: 120 })
  obsetiqueta: string | null;

  @Column('int', { name: 'CODANP', nullable: true })
  codanp: number | null;

  @Column('varchar', { name: 'CODAUTCODIF', nullable: true, length: 21 })
  codautcodif: string | null;

  @Column('int', { name: 'CODPRODAGRUPAPT', nullable: true })
  codprodagrupapt: number | null;

  @Column('int', { name: 'CODPRODAGRUPAPTENC', nullable: true })
  codprodagrupaptenc: number | null;

  @Column('varchar', { name: 'CULTURA', nullable: true, length: 80 })
  cultura: string | null;

  @Column('varchar', { name: 'CIENTIFICO', nullable: true, length: 80 })
  cientifico: string | null;

  @Column('varchar', { name: 'FORMULACAO', nullable: true, length: 180 })
  formulacao: string | null;

  @Column('varchar', { name: 'CONCENTRACAO', nullable: true, length: 30 })
  concentracao: string | null;

  @Column('varchar', { name: 'MODOAPLIC', nullable: true, length: 240 })
  modoaplic: string | null;

  @Column('varchar', { name: 'EPOCAAPLIC', nullable: true, length: 120 })
  epocaaplic: string | null;

  @Column('varchar', { name: 'MANEJOINT', nullable: true, length: 120 })
  manejoint: string | null;

  @Column('float', { name: 'DOSAGEM', nullable: true, precision: 53 })
  dosagem: number | null;

  @Column('char', { name: 'VOLDOSAGEM', nullable: true, length: 2 })
  voldosagem: string | null;

  @Column('float', { name: 'DOSAGEMPOR', nullable: true, precision: 53 })
  dosagempor: number | null;

  @Column('char', { name: 'VOLDOSAGEMPOR', nullable: true, length: 2 })
  voldosagempor: string | null;

  @Column('varchar', { name: 'RENDIMENTOPR', nullable: true, length: 15 })
  rendimentopr: string | null;

  @Column('char', {
    name: 'RECEITUARIO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  receituario: string | null;

  @Column('char', {
    name: 'EXIGEBENEFIC',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  exigebenefic: string | null;

  @Column('char', { name: 'GERAPLAPROD', length: 1, default: () => "'N'" })
  geraplaprod: string;

  @Column('int', { name: 'APLICACAO', nullable: true })
  aplicacao: number | null;

  @Column('int', { name: 'INTERVALO', nullable: true })
  intervalo: number | null;

  @Column('int', { name: 'CARENCIA', nullable: true })
  carencia: number | null;

  @Column('float', { name: 'RENDIMENTOHA', nullable: true, precision: 53 })
  rendimentoha: number | null;

  @Column('smallint', { name: 'PRODUTONFE', default: () => '(0)' })
  produtonfe: number;

  @Column('smallint', { name: 'TIPGTINNFE', default: () => '(2)' })
  tipgtinnfe: number;

  @Column('varchar', { name: 'NCM', nullable: true, length: 10 })
  ncm: string | null;

  @Column('varchar', { name: 'CODVOLPLAN', nullable: true, length: 2 })
  codvolplan: string | null;

  @Column('float', { name: 'DESCMAXFLEX', nullable: true, precision: 53 })
  descmaxflex: number | null;

  @Column('float', { name: 'ACRESCMAX', nullable: true, precision: 53 })
  acrescmax: number | null;

  @Column('varchar', { name: 'FLEX', length: 1, default: () => "'S'" })
  flex: string;

  @Column('int', { name: 'NUMITEMREA', nullable: true })
  numitemrea: number | null;

  @Column('varchar', { name: 'IMPRIMIR', length: 1, default: () => "'0'" })
  imprimir: string;

  @Column('varchar', { name: 'CONFIRMAIMP', length: 1, default: () => "'N'" })
  confirmaimp: string;

  @Column('varchar', { name: 'APURAPRODEPE', nullable: true, length: 2 })
  apuraprodepe: string | null;

  @Column('varchar', { name: 'INDESPPRODEPE', nullable: true, length: 2 })
  indespprodepe: string | null;

  @Column('int', { name: 'QTDNFLAUDOSINT', default: () => '(0)' })
  qtdnflaudosint: number;

  @Column('varchar', { name: 'CODTRIBMUNISS', nullable: true, length: 20 })
  codtribmuniss: string | null;

  @Column('varchar', { name: 'TIPCONTESTWMS', length: 1, default: () => "'N'" })
  tipcontestwms: string;

  @Column('varchar', { name: 'LISTALPM', length: 1, default: () => "'N'" })
  listalpm: string;

  @Column('varchar', { name: 'ONEROSO', length: 1, default: () => "'N'" })
  oneroso: string;

  @Column('varchar', { name: 'REFMERCMED', length: 1, default: () => "'N'" })
  refmercmed: string;

  @Column('varchar', { name: 'TERMOLABIL', length: 1, default: () => "'N'" })
  termolabil: string;

  @Column('float', { name: 'TEMPMINIMA', nullable: true, precision: 53 })
  tempminima: number | null;

  @Column('float', { name: 'TEMPMAXIMA', nullable: true, precision: 53 })
  tempmaxima: number | null;

  @Column('varchar', { name: 'CONTROLADO', length: 1, default: () => "'N'" })
  controlado: string;

  @Column('varchar', { name: 'IDENPORTARIA', nullable: true, length: 30 })
  idenportaria: string | null;

  @Column('varchar', { name: 'IDENOTC', nullable: true, length: 30 })
  idenotc: string | null;

  @Column('varchar', { name: 'IDENCORRELATO', length: 1, default: () => "'N'" })
  idencorrelato: string;

  @Column('varchar', { name: 'IDENCOSME', length: 1, default: () => "'N'" })
  idencosme: string;

  @Column('varchar', { name: 'PRODFALTA', length: 1, default: () => "'N'" })
  prodfalta: string;

  @Column('int', { name: 'STATUSMED', default: () => '(0)' })
  statusmed: number;

  @Column('smallint', { name: 'SEQSPR', nullable: true })
  seqspr: number | null;

  @Column('smallint', { name: 'SEQSCA', nullable: true })
  seqsca: number | null;

  @Column('smallint', { name: 'SEQSTE', nullable: true })
  seqste: number | null;

  @Column('float', { name: 'MVAAJUSTADO', precision: 53, default: () => '(0)' })
  mvaajustado: number;

  @Column('varchar', { name: 'INFPUREZA', length: 1, default: () => "'N'" })
  infpureza: string;

  @Column('varchar', { name: 'FABRICANTE', nullable: true, length: 80 })
  fabricante: string | null;

  @Column('varchar', { name: 'USASTATUSLOTE', length: 1, default: () => "'N'" })
  usastatuslote: string;

  @Column('smallint', { name: 'TAMLOTE', nullable: true })
  tamlote: number | null;

  @Column('smallint', { name: 'TAMSERIE', nullable: true })
  tamserie: number | null;

  @Column('varchar', { name: 'UNIDMINARMAZ', nullable: true, length: 2 })
  unidminarmaz: string | null;

  @Column('varchar', { name: 'ORIGEMFAT', length: 1, default: () => "'E'" })
  origemfat: string;

  @Column('varchar', {
    name: 'USACODBARRASQTD',
    length: 1,
    default: () => "'N'",
  })
  usacodbarrasqtd: string;

  @Column('varchar', { name: 'MD5PAF', nullable: true, length: 32 })
  md5Paf: string | null;

  @Column('varchar', { name: 'VALCAPM3', length: 1, default: () => "'N'" })
  valcapm3: string;

  @Column('varchar', { name: 'QTDPECAFRAC', length: 1, default: () => "'N'" })
  qtdpecafrac: string;

  @Column('varchar', { name: 'UTILORDCORTE', length: 1, default: () => "'N'" })
  utilordcorte: string;

  @Column('int', { name: 'CODPRODPERDA', nullable: true })
  codprodperda: number | null;

  @Column('text', { name: 'DESCRUTILBEM', nullable: true })
  descrutilbem: string | null;

  @Column('varchar', { name: 'IMPORDEMCORTE', length: 1, default: () => "'N'" })
  impordemcorte: string;

  @Column('float', { name: 'PERCTROCA', precision: 53, default: () => '(0)' })
  perctroca: number;

  @Column('int', { name: 'CORFONTCONSPRECO', nullable: true })
  corfontconspreco: number | null;

  @Column('int', { name: 'CORFUNDOCONSPRECO', nullable: true })
  corfundoconspreco: number | null;

  @Column('smallint', { name: 'IDENTIMOB', nullable: true })
  identimob: number | null;

  @Column('smallint', { name: 'UTILIMOB', nullable: true })
  utilimob: number | null;

  @Column('varchar', {
    name: 'TEMCREDPISCOFINSDEPR',
    length: 1,
    default: () => "'N'",
  })
  temcredpiscofinsdepr: string;

  @Column('int', { name: 'CODPRODINNATURA', nullable: true })
  codprodinnatura: number | null;

  @Column('varchar', { name: 'UTILSMARTCARD', length: 1, default: () => "'N'" })
  utilsmartcard: string;

  @Column('char', { name: 'RECUPAVARIA', length: 1, default: () => "'N'" })
  recupavaria: string;

  @Column('float', { name: 'CONVERVOL', nullable: true, precision: 53 })
  convervol: number | null;

  @Column('int', { name: 'LASTRO', nullable: true })
  lastro: number | null;

  @Column('int', { name: 'CAMADAS', nullable: true })
  camadas: number | null;

  @Column('float', { name: 'ORDEMMEDIDA', nullable: true, precision: 53 })
  ordemmedida: number | null;

  @Column('float', { name: 'ALIQICMSINTEFD', nullable: true, precision: 53 })
  aliqicmsintefd: number | null;

  @Column('varchar', { name: 'CODREGMAPA', nullable: true, length: 20 })
  codregmapa: string | null;

  @Column('char', { name: 'APRESFORM', length: 1, default: () => "'S'" })
  apresform: string;

  @Column('varchar', { name: 'CODBARCOMP', length: 1, default: () => "'N'" })
  codbarcomp: string;

  @Column('char', { name: 'TEMMEDICAO', length: 1, default: () => "'N'" })
  temmedicao: string;

  @Column('smallint', { name: 'CODFILTROREQ', nullable: true })
  codfiltroreq: number | null;

  @Column('char', { name: 'NATBCPISCOFINS', length: 1, default: () => "'D'" })
  natbcpiscofins: string;

  @Column('char', { name: 'CONTARPORPESO', length: 1, default: () => "'N'" })
  contarporpeso: string;

  @Column('char', { name: 'PERMCOMPPROD', length: 1, default: () => "'S'" })
  permcompprod: string;

  @Column('smallint', { name: 'CODEXNCM', default: () => '(0)' })
  codexncm: number;

  @Column('int', { name: 'QTDCST', default: () => '(0)' })
  qtdcst: number;

  @Column('int', { name: 'DIASCST', default: () => '(0)' })
  diascst: number;

  @Column('int', { name: 'PERCTOLVARCST', default: () => '(100)' })
  perctolvarcst: number;

  @Column('float', { name: 'QTDPEDPEND', nullable: true, precision: 53 })
  qtdpedpend: number | null;

  @Column('int', { name: 'LEADTIME', nullable: true })
  leadtime: number | null;

  @Column('int', { name: 'DIASEXPEDICAO', nullable: true })
  diasexpedicao: number | null;

  @Column('char', { name: 'DTVALDIF', length: 1, default: () => "'X'" })
  dtvaldif: string;

  @Column('int', { name: 'SHELFLIFEMIN', nullable: true })
  shelflifemin: number | null;

  @Column('int', { name: 'SHELFLIFE', nullable: true })
  shelflife: number | null;

  @Column('char', { name: 'CODBARBALANCA', length: 1, default: () => "'N'" })
  codbarbalanca: string;

  @Column('char', { name: 'VALCBGLOBAL', length: 1, default: () => "'N'" })
  valcbglobal: string;

  @Column('char', { name: 'USAPONTOS', length: 1, default: () => "'N'" })
  usapontos: string;

  @Column('decimal', {
    name: 'PERCROYALTY',
    nullable: true,
    precision: 18,
    scale: 4,
  })
  percroyalty: number | null;

  @Column('char', { name: 'INTEGRAECONECT', length: 1, default: () => "'N'" })
  integraeconect: string;

  @Column('char', { name: 'ENQREINTEGRA', length: 1, default: () => "'N'" })
  enqreintegra: string;

  @Column('float', { name: 'PERCCMTNAC', precision: 53, default: () => '(0)' })
  perccmtnac: number;

  @Column('float', { name: 'PERCCMTIMP', precision: 53, default: () => '(0)' })
  perccmtimp: number;

  @Column('varchar', { name: 'NOTIFCONF', nullable: true, length: 500 })
  notifconf: string | null;

  @Column('char', { name: 'USASERIEFAB', nullable: true, length: 1 })
  usaseriefab: string | null;

  @Column('char', { name: 'TIPSERNFE', nullable: true, length: 1 })
  tipsernfe: string | null;

  @Column('char', { name: 'VENCOMPINDIV', nullable: true, length: 1 })
  vencompindiv: string | null;

  @Column('char', { name: 'EXCLUIRCONF', nullable: true, length: 1 })
  excluirconf: string | null;

  @Column('char', { name: 'PRODUZAUT', length: 1, default: () => "'N'" })
  produzaut: string;

  @Column('char', { name: 'USAIMPAGRUPMIN', length: 1, default: () => "'S'" })
  usaimpagrupmin: string;

  @Column('char', { name: 'RASTRESTOQUE', length: 1, default: () => "'N'" })
  rastrestoque: string;

  @Column('char', { name: 'IMPETIQCONF', length: 1, default: () => "'S'" })
  impetiqconf: string;

  @Column('float', { name: 'VLRCOMERC', nullable: true, precision: 53 })
  vlrcomerc: number | null;

  @Column('float', { name: 'VLRPARCIMPEXT', nullable: true, precision: 53 })
  vlrparcimpext: number | null;

  @Column('varchar', { name: 'CODFCI', nullable: true, length: 36 })
  codfci: string | null;

  @Column('varchar', { name: 'CODATIVREINTEGRA', nullable: true, length: 8 })
  codativreintegra: string | null;

  @Column('char', { name: 'SERVPARAINDUST', length: 1, default: () => "'N'" })
  servparaindust: string;

  @Column('char', { name: 'CAT1799SPRES', length: 1, default: () => "'N'" })
  cat1799Spres: string;

  @Column('float', { name: 'ALIQNAC', nullable: true, precision: 53 })
  aliqnac: number | null;

  @Column('float', { name: 'ALIQIMP', nullable: true, precision: 53 })
  aliqimp: number | null;

  @Column('varchar', { name: 'DESCRPRODNFE', nullable: true, length: 50 })
  descrprodnfe: string | null;

  @Column('char', { name: 'GERACUSTCOMPSEG', length: 1, default: () => "'N'" })
  geracustcompseg: string;

  @Column('float', { name: 'ESTSEGQTD', precision: 53, default: () => '(0)' })
  estsegqtd: number;

  @Column('smallint', { name: 'ESTSEGDIAS', nullable: true })
  estsegdias: number | null;

  @Column('datetime', { name: 'DTALTERESQ', nullable: true })
  dtalteresq: Date | null;

  @Column('smallint', { name: 'LOTECOMPRAS', nullable: true })
  lotecompras: number | null;

  @Column('float', { name: 'ESTMAXQTD', precision: 53, default: () => '(0)' })
  estmaxqtd: number;

  @Column('smallint', { name: 'ESTMAXDIAS', nullable: true })
  estmaxdias: number | null;

  @Column('datetime', { name: 'DTALTEREMQ', nullable: true })
  dtalteremq: Date | null;

  @Column('float', { name: 'DESVIOMAX', precision: 53, default: () => '(0)' })
  desviomax: number;

  @Column('float', {
    name: 'ARREDAGRUP',
    precision: 53,
    default: () => '(0.5)',
  })
  arredagrup: number;

  @Column('char', { name: 'APLICASAZO', length: 1, default: () => "'S'" })
  aplicasazo: string;

  @Column('float', {
    name: 'LOTECOMPMINIMO',
    precision: 53,
    default: () => '(0)',
  })
  lotecompminimo: number;

  @Column('float', {
    name: 'AGRUPCOMPMINIMO',
    precision: 53,
    default: () => '(0)',
  })
  agrupcompminimo: number;

  @Column('char', { name: 'USASERIESEPWMS', length: 1, default: () => "'N'" })
  usaseriesepwms: string;

  @Column('smallint', { name: 'TOPFATURCON', nullable: true })
  topfaturcon: number | null;

  @Column('varchar', { name: 'SERFATURCON', nullable: true, length: 3 })
  serfaturcon: string | null;

  @Column('char', {
    name: 'EXIGELASTROCAMADAS',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  exigelastrocamadas: string | null;

  @Column('char', { name: 'FIXOAGENDA', length: 1, default: () => "'S'" })
  fixoagenda: string;

  @Column('varchar', { name: 'USALOTEDTVAL', nullable: true, length: 1 })
  usalotedtval: string | null;

  @Column('varchar', { name: 'USALOTEDTFAB', nullable: true, length: 1 })
  usalotedtfab: string | null;

  @Column('char', { name: 'EXIBCOMPEXPKIT', length: 1, default: () => "'T'" })
  exibcompexpkit: string;

  @Column('smallint', { name: 'TIPORECEITAMOD21', nullable: true })
  tiporeceitamod21: number | null;

  @Column('int', { name: 'CODPRODSUBST', nullable: true })
  codprodsubst: number | null;

  @Column('datetime', { name: 'DTSUBST', nullable: true })
  dtsubst: Date | null;

  @Column('int', { name: 'CODCOMP', nullable: true })
  codcomp: number | null;

  @Column('smallint', { name: 'NATEFDCONTM410M810', nullable: true })
  natefdcontm410M810: number | null;

  @Column('float', { name: 'PERCTOLPESOMAIOR', nullable: true, precision: 53 })
  perctolpesomaior: number | null;

  @Column('float', { name: 'PERCTOLPESOMENOR', nullable: true, precision: 53 })
  perctolpesomenor: number | null;

  @Column('varchar', { name: 'CODVOLPESOVAR', nullable: true, length: 2 })
  codvolpesovar: string | null;

  @Column('char', {
    name: 'USACONTPESOVAR',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  usacontpesovar: string | null;

  @Column('float', {
    name: 'PERCTOLPESOMAIORSEP',
    nullable: true,
    precision: 53,
  })
  perctolpesomaiorsep: number | null;

  @Column('float', {
    name: 'PERCTOLPESOMENORSEP',
    nullable: true,
    precision: 53,
  })
  perctolpesomenorsep: number | null;

  @Column('float', { name: 'PCT_BF', nullable: true, precision: 53 })
  pctBf: number | null;

  @Column('smallint', { name: 'PRZ_BF', nullable: true })
  przBf: number | null;

  @Column('char', {
    name: 'CONTROLMEDIC',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  controlmedic: string | null;

  @Column('float', { name: 'PERCCMTFED', precision: 53, default: () => '(0)' })
  perccmtfed: number;

  @Column('float', { name: 'PERCCMTEST', precision: 53, default: () => '(0)' })
  perccmtest: number;

  @Column('float', { name: 'PERCCMTMUN', precision: 53, default: () => '(0)' })
  perccmtmun: number;

  @Column('smallint', { name: 'CODENQIPIENT', nullable: true })
  codenqipient: number | null;

  @Column('smallint', { name: 'CODENQIPISAI', nullable: true })
  codenqipisai: number | null;

  @Column('smallint', { name: 'DECVLRENT', nullable: true })
  decvlrent: number | null;

  @Column('int', { name: 'CODESPECST', nullable: true })
  codespecst: number | null;

  @Column('char', {
    name: 'DESCVENCONSUL',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  descvenconsul: string | null;

  @Column('int', { name: 'GRUPOICMS2', nullable: true })
  grupoicms2: number | null;

  @Column('float', { name: 'MVAPADRAO', nullable: true, precision: 53 })
  mvapadrao: number | null;

  @Column('float', { name: 'ALIQGERAL', nullable: true, precision: 53 })
  aliqgeral: number | null;

  @Column('int', { name: 'CODPRODSUBKIT', nullable: true })
  codprodsubkit: number | null;

  @Column('char', { name: 'TIPOKIT', nullable: true, length: 1 })
  tipokit: string | null;

  @Column('char', { name: 'VISIVELAPPOS', nullable: true, length: 1 })
  visivelappos: string | null;

  @Column('char', {
    name: 'UTILIZAENDFLUT',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  utilizaendflut: string | null;

  @Column('smallint', { name: 'MAXMULTECONECT', nullable: true })
  maxmulteconect: number | null;

  @Column('int', { name: 'QTDIDENTIF', nullable: true })
  qtdidentif: number | null;

  @Column('varchar', { name: 'TIPOIDENTIF', nullable: true, length: 50 })
  tipoidentif: string | null;

  @Column('int', { name: 'CODVTP', nullable: true })
  codvtp: number | null;

  @Column('char', { name: 'IMPETIQSEPWMS', nullable: true, length: 1 })
  impetiqsepwms: string | null;

  @Column('varchar', { name: 'NROPROCESSO', nullable: true, length: 30 })
  nroprocesso: string | null;

  @Column('smallint', { name: 'TIPOSN', nullable: true, default: () => '(0)' })
  tiposn: number | null;

  @Column('char', {
    name: 'ARMAZELOTE',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  armazelote: string | null;

  @Column('char', { name: 'TEMRASTROLOTE', length: 1, default: () => "'N'" })
  temrastrolote: string;

  @Column('varchar', { name: 'CODANVISA', nullable: true, length: 13 })
  codanvisa: string | null;

  @Column('varchar', { name: 'DESCRANP', nullable: true, length: 95 })
  descranp: string | null;

  @Column('float', { name: 'PERCMISTGLP', nullable: true, precision: 53 })
  percmistglp: number | null;

  @Column('char', { name: 'TIPOCONTAGEM', length: 1, default: () => "'D'" })
  tipocontagem: string;

  @Column('float', { name: 'PERCMISTGNN', nullable: true, precision: 53 })
  percmistgnn: number | null;

  @Column('float', { name: 'PERCMISTGNI', nullable: true, precision: 53 })
  percmistgni: number | null;

  @Column('float', { name: 'VLRPARTIDAGLP', nullable: true, precision: 53 })
  vlrpartidaglp: number | null;

  @Column('char', { name: 'COMERCIALIZACAOAGRI', nullable: true, length: 1 })
  comercializacaoagri: string | null;

  @Column('smallint', { name: 'OBRACONSTCIVIL', nullable: true })
  obraconstcivil: number | null;

  @Column('int', { name: 'CLASSIFCESSAOOBRA', nullable: true })
  classifcessaoobra: number | null;

  @Column('char', { name: 'TIPOINSSESPECIAL', nullable: true, length: 1 })
  tipoinssespecial: string | null;

  @Column('float', { name: 'PERCINSSESPECIAL', nullable: true, precision: 53 })
  percinssespecial: number | null;

  @Column('char', { name: 'CALCDIFAL', length: 1, default: () => "'N'" })
  calcdifal: string;

  @Column('char', { name: 'INDESCALA', nullable: true, length: 1 })
  indescala: string | null;

  @Column('varchar', { name: 'CNPJFABRICANTE', nullable: true, length: 14 })
  cnpjfabricante: string | null;

  @Column('varchar', { name: 'CODBENEFNAUF', nullable: true, length: 10 })
  codbenefnauf: string | null;

  @Column('varchar', { name: 'CODAGREGACAO', nullable: true, length: 20 })
  codagregacao: string | null;

  @Column('float', { name: 'QTDAGRUPAMENTOMTZ', nullable: true, precision: 53 })
  qtdagrupamentomtz: number | null;

  @Column('int', { name: 'CODIDCNAE', nullable: true })
  codidcnae: number | null;

  @Column('smallint', { name: 'CODFILTROCTA', nullable: true })
  codfiltrocta: number | null;

  @Column('char', { name: 'FORCAEXPECONECT', nullable: true, length: 1 })
  forcaexpeconect: string | null;

  @Column('varchar', { name: 'REGISTRARPESO', nullable: true, length: 2 })
  registrarpeso: string | null;

  @Column('smallint', { name: 'DESVIOMAXTOLCONFSEP', nullable: true })
  desviomaxtolconfsep: number | null;

  @Column('smallint', { name: 'DESVIOMINTOLCONFSEP', nullable: true })
  desviomintolconfsep: number | null;

  @Column('char', { name: 'SERVPRESTTER', nullable: true, length: 1 })
  servprestter: string | null;

  @Column('varchar', {
    name: 'FRAGMENTALOTE',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  fragmentalote: string | null;

  @Column('float', {
    name: 'PERCREDBASEICMSEFET',
    nullable: true,
    precision: 53,
  })
  percredbaseicmsefet: number | null;

  @Column('int', { name: 'NUVERSAOIMG', nullable: true })
  nuversaoimg: number | null;

  @Column('int', { name: 'INTEGRAFOX', nullable: true })
  integrafox: number | null;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;

  @Column('varchar', { name: 'MOTISENCAOANVISA', nullable: true, length: 255 })
  motisencaoanvisa: string | null;

  @Column('varchar', { name: 'CODNBS', nullable: true, length: 9 })
  codnbs: string | null;

  @Column('char', { name: 'CONSPRODCAT42', nullable: true, length: 1 })
  consprodcat42: string | null;

  @Column('varchar', { name: 'TIPOITEMSPED', nullable: true, length: 2 })
  tipoitemsped: string | null;

  @Column('float', { name: 'INCPESOBRUTO', nullable: true, precision: 53 })
  incpesobruto: number | null;

  @Column('float', { name: 'INCPESOLIQUIDO', nullable: true, precision: 53 })
  incpesoliquido: number | null;

  @Column('int', { name: 'NURFE', nullable: true })
  nurfe: number | null;

  @Column('float', { name: 'MVAORIGINALDRCST', nullable: true, precision: 53 })
  mvaoriginaldrcst: number | null;

  @Column('float', { name: 'TAMANHOMEDIOPECA', nullable: true, precision: 53 })
  tamanhomediopeca: number | null;

  @Column('float', { name: 'PERCENTSEPPUL', nullable: true, precision: 53 })
  percentseppul: number | null;

  @Column('char', { name: 'ATUNUVERSAO', nullable: true, length: 1 })
  atunuversao: string | null;

  @Column('text', { name: 'GRADEPADRAO', nullable: true })
  gradepadrao: string | null;

  @Column('float', { name: 'ALIQFETHAB', nullable: true, precision: 53 })
  aliqfethab: number | null;

  @Column('char', { name: 'OBTSTANTMEDENT', nullable: true, length: 1 })
  obtstantmedent: string | null;

  @Column('char', { name: 'DESCPRODDRCST', nullable: true, length: 1 })
  descproddrcst: string | null;

  @Column('char', { name: 'PARTICIPAADRCST', nullable: true, length: 1 })
  participaadrcst: string | null;

  @Column('float', { name: 'MVAORIGINALADRCST', nullable: true, precision: 53 })
  mvaoriginaladrcst: number | null;

  @Column('float', { name: 'ALIQFECOP', nullable: true, precision: 53 })
  aliqfecop: number | null;

  @Column('char', { name: 'PRODSUJFECOP', nullable: true, length: 1 })
  prodsujfecop: string | null;

  @Column('char', { name: 'DESDESCCALCPIS', nullable: true, length: 1 })
  desdesccalcpis: string | null;

  @Column('float', { name: 'ALIQINTERNACAT42', nullable: true, precision: 53 })
  aliqinternacat42: number | null;

  @Column('char', { name: 'CONESTORIGPROD', nullable: true, length: 1 })
  conestorigprod: string | null;

  @Column('char', { name: 'GERIMPNRETREINFAQ', nullable: true, length: 1 })
  gerimpnretreinfaq: string | null;

  @Column('char', { name: 'PRODALIADRCST', nullable: true, length: 1 })
  prodaliadrcst: string | null;

  @Column('smallint', { name: 'TIPUTILCOM', nullable: true })
  tiputilcom: number | null;

  @Column('varchar', { name: 'PRODINTERNO', nullable: true, length: 1 })
  prodinterno: string | null;

  @Column('char', { name: 'CALCFUSTPRO', nullable: true, length: 1 })
  calcfustpro: string | null;

  @Column('char', { name: 'CALCFUNTTELPRO', nullable: true, length: 1 })
  calcfunttelpro: string | null;

  @Column('varchar', { name: 'CODBARDIFGTIN', nullable: true, length: 30 })
  codbardifgtin: string | null;

  @Column('varchar', { name: 'CODBARTRIBDIFGTIN', nullable: true, length: 30 })
  codbartribdifgtin: string | null;

  @Column('int', { name: 'CODNATPAMCARD', nullable: true })
  codnatpamcard: number | null;

  @Column('varchar', { name: 'USANROFOGO', nullable: true, length: 10 })
  usanrofogo: string | null;

  @Column('int', { name: 'NUFOP', nullable: true })
  nufop: number | null;

  @Column('varchar', { name: 'TIPCARGAREPOM', nullable: true, length: 10 })
  tipcargarepom: string | null;

  @Column('varchar', { name: 'TIPCARGAPAMCARD', nullable: true, length: 10 })
  tipcargapamcard: string | null;

  @Column('varchar', { name: 'TIPCARGAEFRETE', nullable: true, length: 10 })
  tipcargaefrete: string | null;

  @Column('varchar', { name: 'TPCARGAMDFE', nullable: true, length: 10 })
  tpcargamdfe: string | null;

  @Column('varchar', { name: 'TIPCARGAPB', nullable: true, length: 10 })
  tipcargapb: string | null;

  @Column('text', { name: 'AD_OBSCESTA', nullable: true })
  adObscesta: string | null;

  @Column('char', { name: 'WMSPRODRASTSERMED', nullable: true, length: 1 })
  wmsprodrastsermed: string | null;

  @Column('varchar', { name: 'STATUSNCM', nullable: true, length: 1 })
  statusncm: string | null;

  @Column('varchar', { name: 'AD_CAPACIDADE', nullable: true, length: 100 })
  adCapacidade: string | null;

  @Column('text', { name: 'AD_DESCRCOMPLEMENTO', nullable: true })
  adDescrcomplemento: string | null;

  @Column('varchar', { name: 'BLOQVENDAFRAC', nullable: true, length: 1 })
  bloqvendafrac: string | null;

  @Column('float', { name: 'AD_PERCPIPE', nullable: true, precision: 53 })
  adPercpipe: number | null;

  @Column('datetime', { name: 'AD_DTVALCA', nullable: true })
  adDtvalca: Date | null;

  @Column('int', { name: 'AD_LIMITEUSU', nullable: true })
  adLimiteusu: number | null;

  @Column('smallint', { name: 'TPIRRFEXT', nullable: true })
  tpirrfext: number | null;

  @Column('int', { name: 'CODNATREND', nullable: true })
  codnatrend: number | null;

  @Column('varchar', { name: 'AD_QTDFIXO', nullable: true, length: 10 })
  adQtdfixo: string | null;

  @Column('char', { name: 'INDTIPREFBCICMSST', nullable: true, length: 1 })
  indtiprefbcicmsst: string | null;

  @Column('varchar', { name: 'CODVOLKANBAN', nullable: true, length: 6 })
  codvolkanban: string | null;

  @Column('char', {
    name: 'CALRUPTURAESTOQUE',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  calrupturaestoque: string | null;

  @Column('float', { name: 'PERCINDMISTURA', nullable: true, precision: 53 })
  percindmistura: number | null;

  @Column('char', { name: 'OPEEXPFETHAB', nullable: true, length: 1 })
  opeexpfethab: string | null;

  @Column('char', { name: 'OPEINTESTFETHAB', nullable: true, length: 1 })
  opeintestfethab: string | null;

  @Column('char', { name: 'OPEINTFETHAB', nullable: true, length: 1 })
  opeintfethab: string | null;

  @Column('char', { name: 'SERVDESPNTRIB', nullable: true, length: 1 })
  servdespntrib: string | null;

  @Column('varchar', { name: 'CODIGONFCOM', nullable: true, length: 10 })
  codigonfcom: string | null;

  @OneToMany(
    () => AdAcessoriosEntity,
    (adAcessoriosEntity) => adAcessoriosEntity.coditem,
  )
  adAcessorios: AdAcessoriosEntity[];

  @OneToMany(
    () => AdApontsolEntity,
    (adApontsolEntity) => adApontsolEntity.codprod,
  )
  adApontsols: AdApontsolEntity[];

  @ManyToMany(() => AdCadhabEntity, (adCadhabEntity) => adCadhabEntity.tgfpros)
  adCadhabs: AdCadhabEntity[];

  @OneToMany(
    () => AdGeraoscomiteEntity,
    (adGeraoscomiteEntity) => adGeraoscomiteEntity.codServ,
  )
  adGeraoscomites: AdGeraoscomiteEntity[];

  @OneToMany(
    () => AdItensroteiroEntity,
    (adItensroteiroEntity) => adItensroteiroEntity.codprod,
  )
  adItensroteiros: AdItensroteiroEntity[];

  @OneToMany(
    () => AdItequitaEntity,
    (adItequitaEntity) => adItequitaEntity.codprod,
  )
  adItequitas: AdItequitaEntity[];

  @OneToMany(
    () => AdProdmanutencaoEntity,
    (adProdmanutencaoEntity) => adProdmanutencaoEntity.codprod,
  )
  adProdmanutencaos: AdProdmanutencaoEntity[];

  @OneToMany(
    () => AdProdservosEntity,
    (adProdservosEntity) => adProdservosEntity.codprod,
  )
  adProdservos: AdProdservosEntity[];

  @OneToMany(
    () => AdSolcompraosEntity,
    (adSolcompraosEntity) => adSolcompraosEntity.codprod,
  )
  adSolcompraos: AdSolcompraosEntity[];

  @OneToMany(() => AstreqEntity, (astreqEntity) => astreqEntity.codprod)
  astreqs: AstreqEntity[];

  @OneToMany(
    () => ComprarecenteEntity,
    (comprarecenteEntity) => comprarecenteEntity.codprod2,
  )
  comprarecentes: ComprarecenteEntity[];

  @OneToMany(
    () => GfratendimentoclienteitensEntity,
    (gfratendimentoclienteitensEntity) =>
      gfratendimentoclienteitensEntity.codprod2,
  )
  gfratendimentoclienteitens: GfratendimentoclienteitensEntity[];

  @OneToMany(() => TapiapEntity, (tapiapEntity) => tapiapEntity.codserv)
  tapiaps: TapiapEntity[];

  @OneToMany(() => TapirmEntity, (tapirmEntity) => tapirmEntity.codserv)
  tapirms: TapirmEntity[];

  @OneToMany(() => TappfaEntity, (tappfaEntity) => tappfaEntity.codprod2)
  tappfas: TappfaEntity[];

  @OneToMany(() => TapseoEntity, (tapseoEntity) => tapseoEntity.codserv2)
  tapseos: TapseoEntity[];

  @OneToMany(() => TcbimorEntity, (tcbimorEntity) => tcbimorEntity.codprod2)
  tcbimors: TcbimorEntity[];

  @OneToMany(() => TcciteEntity, (tcciteEntity) => tcciteEntity.codprod2)
  tccites: TcciteEntity[];

  @OneToMany(() => TceiteEntity, (tceiteEntity) => tceiteEntity.codprod)
  tceites: TceiteEntity[];

  @OneToMany(
    () => TceiteHisEntity,
    (tceiteHisEntity) => tceiteHisEntity.codprod,
  )
  tceiteHis: TceiteHisEntity[];

  @OneToMany(
    () => TcfabtiteEntity,
    (tcfabtiteEntity) => tcfabtiteEntity.codprod,
  )
  tcfabtites: TcfabtiteEntity[];

  @OneToMany(
    () => TcfitepnuEntity,
    (tcfitepnuEntity) => tcfitepnuEntity.codprod2,
  )
  tcfitepnus: TcfitepnuEntity[];

  @OneToMany(
    () => TcfmansrvEntity,
    (tcfmansrvEntity) => tcfmansrvEntity.codprodmanutencao,
  )
  tcfmansrvs: TcfmansrvEntity[];

  @OneToMany(
    () => TcfmansrvEntity,
    (tcfmansrvEntity) => tcfmansrvEntity.codprod,
  )
  tcfmansrvs2: TcfmansrvEntity[];

  @OneToMany(() => TcfoscabEntity, (tcfoscabEntity) => tcfoscabEntity.codprod)
  tcfoscabs: TcfoscabEntity[];

  @OneToMany(() => TcfpnuEntity, (tcfpnuEntity) => tcfpnuEntity.codprod)
  tcfpnus: TcfpnuEntity[];

  @OneToMany(
    () => TcfservosEntity,
    (tcfservosEntity) => tcfservosEntity.codprod,
  )
  tcfservos: TcfservosEntity[];

  @OneToMany(() => TcibemEntity, (tcibemEntity) => tcibemEntity.codprod2)
  tcibems: TcibemEntity[];

  @OneToMany(() => TcibemEntity, (tcibemEntity) => tcibemEntity.codprodorig)
  tcibems2: TcibemEntity[];

  @OneToMany(() => TcictaEntity, (tcictaEntity) => tcictaEntity.codprod2)
  tcictas: TcictaEntity[];

  @OneToMany(() => TcicteEntity, (tcicteEntity) => tcicteEntity.codprod2)
  tcictes: TcicteEntity[];

  @OneToMany(() => TcidemEntity, (tcidemEntity) => tcidemEntity.codprod2)
  tcidems: TcidemEntity[];

  @OneToMany(() => TcidibiEntity, (tcidibiEntity) => tcidibiEntity.codprod2)
  tcidibis: TcidibiEntity[];

  @OneToMany(() => TciestEntity, (tciestEntity) => tciestEntity.codprod2)
  tciests: TciestEntity[];

  @OneToMany(() => TcilocEntity, (tcilocEntity) => tcilocEntity.codprod2)
  tcilocs: TcilocEntity[];

  @OneToMany(() => TcimovEntity, (tcimovEntity) => tcimovEntity.codprod2)
  tcimovs: TcimovEntity[];

  @OneToMany(() => TcimovajEntity, (tcimovajEntity) => tcimovajEntity.codprod2)
  tcimovajs: TcimovajEntity[];

  @OneToMany(() => TcisalEntity, (tcisalEntity) => tcisalEntity.codprod2)
  tcisals: TcisalEntity[];

  @OneToMany(() => TcisalajEntity, (tcisalajEntity) => tcisalajEntity.codprod2)
  tcisalajs: TcisalajEntity[];

  @OneToMany(() => TcitaxEntity, (tcitaxEntity) => tcitaxEntity.codprod2)
  tcitaxes: TcitaxEntity[];

  @OneToMany(() => TcitaxajEntity, (tcitaxajEntity) => tcitaxajEntity.codprod2)
  tcitaxajs: TcitaxajEntity[];

  @OneToMany(() => TcsagfEntity, (tcsagfEntity) => tcsagfEntity.codprod2)
  tcsagfs: TcsagfEntity[];

  @OneToMany(() => TcsbloEntity, (tcsbloEntity) => tcsbloEntity.codprod2)
  tcsblos: TcsbloEntity[];

  @OneToMany(() => TcsbmeEntity, (tcsbmeEntity) => tcsbmeEntity.codprod2)
  tcsbmes: TcsbmeEntity[];

  @OneToMany(() => TcscomEntity, (tcscomEntity) => tcscomEntity.codprod2)
  tcscoms: TcscomEntity[];

  @OneToMany(() => TcscprEntity, (tcscprEntity) => tcscprEntity.codprod2)
  tcscprs: TcscprEntity[];

  @OneToMany(() => TcscveEntity, (tcscveEntity) => tcscveEntity.codserv)
  tcscves: TcscveEntity[];

  @OneToMany(() => TcsehiEntity, (tcsehiEntity) => tcsehiEntity.codprod)
  tcsehis: TcsehiEntity[];

  @OneToMany(() => TcserrEntity, (tcserrEntity) => tcserrEntity.codprod)
  tcserrs: TcserrEntity[];

  @OneToMany(() => TcsfpeEntity, (tcsfpeEntity) => tcsfpeEntity.codprod)
  tcsfpes: TcsfpeEntity[];

  @OneToMany(() => TcsfprEntity, (tcsfprEntity) => tcsfprEntity.codprod2)
  tcsfprs: TcsfprEntity[];

  @OneToMany(() => TcsiteEntity, (tcsiteEntity) => tcsiteEntity.codprod2)
  tcsites: TcsiteEntity[];

  @OneToMany(() => TcsiteEntity, (tcsiteEntity) => tcsiteEntity.codserv2)
  tcsites2: TcsiteEntity[];

  @OneToMany(() => TcslbeEntity, (tcslbeEntity) => tcslbeEntity.codprod)
  tcslbes: TcslbeEntity[];

  @OneToMany(() => TcsmodEntity, (tcsmodEntity) => tcsmodEntity.codprod)
  tcsmods: TcsmodEntity[];

  @OneToMany(() => TcsmprEntity, (tcsmprEntity) => tcsmprEntity.codprod)
  tcsmprs: TcsmprEntity[];

  @ManyToMany(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tgfpros)
  @JoinTable({
    name: 'TCSNTS',
    joinColumns: [{ name: 'CODSERV', referencedColumnName: 'codprod' }],
    inverseJoinColumns: [{ name: 'CODNAT', referencedColumnName: 'codnat' }],
    schema: 'SANKHYA',
  })
  tgfnats: TgfnatEntity[];

  @OneToMany(() => TcsoccEntity, (tcsoccEntity) => tcsoccEntity.codprod2)
  tcsoccs: TcsoccEntity[];

  @OneToMany(() => TcspfpEntity, (tcspfpEntity) => tcspfpEntity.codprod2)
  tcspfps: TcspfpEntity[];

  @OneToMany(() => TcspitEntity, (tcspitEntity) => tcspitEntity.codprod2)
  tcspits: TcspitEntity[];

  @OneToMany(() => TcsppfEntity, (tcsppfEntity) => tcsppfEntity.codprod2)
  tcsppfs: TcsppfEntity[];

  @OneToMany(() => TcspreEntity, (tcspreEntity) => tcspreEntity.codprod2)
  tcspres: TcspreEntity[];

  @OneToMany(
    () => TcspreqtdEntity,
    (tcspreqtdEntity) => tcspreqtdEntity.codprod2,
  )
  tcspreqtds: TcspreqtdEntity[];

  @OneToMany(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.codprod)
  tcsprjs: TcsprjEntity[];

  @OneToMany(() => TcsprnEntity, (tcsprnEntity) => tcsprnEntity.codprod2)
  tcsprns: TcsprnEntity[];

  @OneToMany(() => TcspscEntity, (tcspscEntity) => tcspscEntity.codprod2)
  tcspscs: TcspscEntity[];

  @ManyToMany(() => TcstpnEntity, (tcstpnEntity) => tcstpnEntity.tgfpros)
  @JoinTable({
    name: 'TCSPXT',
    joinColumns: [{ name: 'CODPROD', referencedColumnName: 'codprod' }],
    inverseJoinColumns: [{ name: 'CODTPN', referencedColumnName: 'codtpn' }],
    schema: 'SANKHYA',
  })
  tcstpns: TcstpnEntity[];

  @ManyToMany(() => TcsoosEntity, (tcsoosEntity) => tcsoosEntity.tgfpros)
  tcsoos: TcsoosEntity[];

  @OneToMany(() => TcsserEntity, (tcsserEntity) => tcsserEntity.codprod2)
  tcssers: TcsserEntity[];

  @ManyToMany(() => TcsitsEntity, (tcsitsEntity) => tcsitsEntity.tgfpros)
  @JoinTable({
    name: 'TCSSES',
    joinColumns: [{ name: 'CODPROD', referencedColumnName: 'codprod' }],
    inverseJoinColumns: [{ name: 'CODSIT', referencedColumnName: 'codsit' }],
    schema: 'SANKHYA',
  })
  tcsits: TcsitsEntity[];

  @OneToMany(() => TcsvpcEntity, (tcsvpcEntity) => tcsvpcEntity.codprod2)
  tcsvpcs: TcsvpcEntity[];

  @OneToMany(() => TgaahEntity, (tgaahEntity) => tgaahEntity.codprod)
  tgaahs: TgaahEntity[];

  @OneToMany(() => TgaahiEntity, (tgaahiEntity) => tgaahiEntity.codprod)
  tgaahis: TgaahiEntity[];

  @OneToMany(() => TgaartsEntity, (tgaartsEntity) => tgaartsEntity.codcultura)
  tgaarts: TgaartsEntity[];

  @OneToMany(() => TgacllEntity, (tgacllEntity) => tgacllEntity.codprod2)
  tgaclls: TgacllEntity[];

  @OneToMany(() => TgacltEntity, (tgacltEntity) => tgacltEntity.codprod)
  tgaclts: TgacltEntity[];

  @OneToMany(() => TgacujEntity, (tgacujEntity) => tgacujEntity.codprod2)
  tgacujs: TgacujEntity[];

  @OneToMany(() => TgaculEntity, (tgaculEntity) => tgaculEntity.codprod)
  tgaculs: TgaculEntity[];

  @OneToMany(() => TgadprEntity, (tgadprEntity) => tgadprEntity.codprod2)
  tgadprs: TgadprEntity[];

  @OneToMany(() => TgagarEntity, (tgagarEntity) => tgagarEntity.codprodpermuta)
  tgagars: TgagarEntity[];

  @OneToMany(() => TgagplEntity, (tgagplEntity) => tgagplEntity.codprod2)
  tgagpls: TgagplEntity[];

  @OneToMany(() => TgagtEntity, (tgagtEntity) => tgagtEntity.codserv)
  tgagts: TgagtEntity[];

  @OneToMany(() => TgagtpEntity, (tgagtpEntity) => tgagtpEntity.codprod2)
  tgagtps: TgagtpEntity[];

  @OneToMany(() => TgaicpEntity, (tgaicpEntity) => tgaicpEntity.codprod2)
  tgaicps: TgaicpEntity[];

  @OneToMany(() => TgainsEntity, (tgainsEntity) => tgainsEntity.codprodins2)
  tgains: TgainsEntity[];

  @OneToMany(() => TgainsEntity, (tgainsEntity) => tgainsEntity.codprod)
  tgains2: TgainsEntity[];

  @OneToMany(() => TgamaaEntity, (tgamaaEntity) => tgamaaEntity.codprod2)
  tgamaas: TgamaaEntity[];

  @OneToMany(() => TgamovEntity, (tgamovEntity) => tgamovEntity.codprod)
  tgamovs: TgamovEntity[];

  @OneToMany(() => TgampaEntity, (tgampaEntity) => tgampaEntity.codprod2)
  tgampas: TgampaEntity[];

  @OneToMany(() => TgangrEntity, (tgangrEntity) => tgangrEntity.codprod)
  tgangrs: TgangrEntity[];

  @OneToMany(() => TgapatEntity, (tgapatEntity) => tgapatEntity.codprod)
  tgapats: TgapatEntity[];

  @OneToMany(() => TgapesiEntity, (tgapesiEntity) => tgapesiEntity.codprod)
  tgapesis: TgapesiEntity[];

  @OneToMany(() => TgarecEntity, (tgarecEntity) => tgarecEntity.codprod)
  tgarecs: TgarecEntity[];

  @OneToMany(() => TgariEntity, (tgariEntity) => tgariEntity.codprod2)
  tgaris: TgariEntity[];

  @OneToMany(() => TgasalEntity, (tgasalEntity) => tgasalEntity.codprod2)
  tgasals: TgasalEntity[];

  @OneToMany(
    () => Tgfadrcstr1000Entity,
    (tgfadrcstr1000Entity) => tgfadrcstr1000Entity.codItem2,
  )
  tgfadrcstr1s: Tgfadrcstr1000Entity[];

  @OneToMany(
    () => Tgfadrcstr1010Entity,
    (tgfadrcstr1010Entity) => tgfadrcstr1010Entity.codItem2,
  )
  tgfadrcstr1s2: Tgfadrcstr1010Entity[];

  @OneToMany(
    () => Tgfadrcstr1100Entity,
    (tgfadrcstr1100Entity) => tgfadrcstr1100Entity.codItem2,
  )
  tgfadrcstr1s3: Tgfadrcstr1100Entity[];

  @OneToMany(
    () => Tgfadrcstr1110Entity,
    (tgfadrcstr1110Entity) => tgfadrcstr1110Entity.codItem2,
  )
  tgfadrcstr1s4: Tgfadrcstr1110Entity[];

  @OneToMany(
    () => Tgfadrcstr1120Entity,
    (tgfadrcstr1120Entity) => tgfadrcstr1120Entity.codItem2,
  )
  tgfadrcstr1s5: Tgfadrcstr1120Entity[];

  @OneToMany(
    () => Tgfadrcstr1200Entity,
    (tgfadrcstr1200Entity) => tgfadrcstr1200Entity.codItem2,
  )
  tgfadrcstr1s6: Tgfadrcstr1200Entity[];

  @OneToMany(
    () => Tgfadrcstr1210Entity,
    (tgfadrcstr1210Entity) => tgfadrcstr1210Entity.codItem2,
  )
  tgfadrcstr1s7: Tgfadrcstr1210Entity[];

  @OneToMany(
    () => Tgfadrcstr1220Entity,
    (tgfadrcstr1220Entity) => tgfadrcstr1220Entity.codItem2,
  )
  tgfadrcstr1s8: Tgfadrcstr1220Entity[];

  @OneToMany(
    () => Tgfadrcstr1300Entity,
    (tgfadrcstr1300Entity) => tgfadrcstr1300Entity.codItem2,
  )
  tgfadrcstr1s9: Tgfadrcstr1300Entity[];

  @OneToMany(
    () => Tgfadrcstr1310Entity,
    (tgfadrcstr1310Entity) => tgfadrcstr1310Entity.codItem2,
  )
  tgfadrcstr110: Tgfadrcstr1310Entity[];

  @OneToMany(
    () => Tgfadrcstr1320Entity,
    (tgfadrcstr1320Entity) => tgfadrcstr1320Entity.codItem2,
  )
  tgfadrcstr111: Tgfadrcstr1320Entity[];

  @OneToMany(
    () => Tgfadrcstr1400Entity,
    (tgfadrcstr1400Entity) => tgfadrcstr1400Entity.codItem2,
  )
  tgfadrcstr112: Tgfadrcstr1400Entity[];

  @OneToMany(
    () => Tgfadrcstr1410Entity,
    (tgfadrcstr1410Entity) => tgfadrcstr1410Entity.codItem2,
  )
  tgfadrcstr113: Tgfadrcstr1410Entity[];

  @OneToMany(
    () => Tgfadrcstr1420Entity,
    (tgfadrcstr1420Entity) => tgfadrcstr1420Entity.codItem2,
  )
  tgfadrcstr114: Tgfadrcstr1420Entity[];

  @OneToMany(
    () => Tgfadrcstr1500Entity,
    (tgfadrcstr1500Entity) => tgfadrcstr1500Entity.codItem2,
  )
  tgfadrcstr115: Tgfadrcstr1500Entity[];

  @OneToMany(
    () => Tgfadrcstr1510Entity,
    (tgfadrcstr1510Entity) => tgfadrcstr1510Entity.codItem2,
  )
  tgfadrcstr116: Tgfadrcstr1510Entity[];

  @OneToMany(
    () => Tgfadrcstr1520Entity,
    (tgfadrcstr1520Entity) => tgfadrcstr1520Entity.codItem2,
  )
  tgfadrcstr117: Tgfadrcstr1520Entity[];

  @OneToMany(() => TgfaidEntity, (tgfaidEntity) => tgfaidEntity.codprod2)
  tgfas: TgfaidEntity[];

  @OneToMany(() => TgfampEntity, (tgfampEntity) => tgfampEntity.codprod2)
  tgfamps: TgfampEntity[];

  @OneToMany(() => TgfavrEntity, (tgfavrEntity) => tgfavrEntity.codprod)
  tgfavrs: TgfavrEntity[];

  @OneToMany(() => TgfbarEntity, (tgfbarEntity) => tgfbarEntity.codprod2)
  tgfbars: TgfbarEntity[];

  @OneToMany(() => TgfcacEntity, (tgfcacEntity) => tgfcacEntity.codprod)
  tgfcacs: TgfcacEntity[];

  @OneToMany(() => TgfcajaEntity, (tgfcajaEntity) => tgfcajaEntity.filcodprod)
  tgfcajas: TgfcajaEntity[];

  @OneToMany(() => TgfccfEntity, (tgfccfEntity) => tgfccfEntity.codprod2)
  tgfccfs: TgfccfEntity[];

  @OneToMany(
    () => TgfcipmproEntity,
    (tgfcipmproEntity) => tgfcipmproEntity.codprod2,
  )
  tgfcipmpros: TgfcipmproEntity[];

  @ManyToMany(() => TgfclaEntity, (tgfclaEntity) => tgfclaEntity.tgfpros)
  tgfclas: TgfclaEntity[];

  @OneToMany(() => TgfcmpEntity, (tgfcmpEntity) => tgfcmpEntity.codprod)
  tgfcmps: TgfcmpEntity[];

  @OneToMany(
    () => TgfcodrecdirfproEntity,
    (tgfcodrecdirfproEntity) => tgfcodrecdirfproEntity.codprod2,
  )
  tgfcodrecdirfpros: TgfcodrecdirfproEntity[];

  @OneToMany(() => Tgfcoi2Entity, (tgfcoi2Entity) => tgfcoi2Entity.codprod2)
  tgfcois: Tgfcoi2Entity[];

  @OneToMany(() => TgfcpoEntity, (tgfcpoEntity) => tgfcpoEntity.codprod2)
  tgfcpos: TgfcpoEntity[];

  @OneToMany(() => TgfcppEntity, (tgfcppEntity) => tgfcppEntity.codprod2)
  tgfcpps: TgfcppEntity[];

  @OneToMany(() => TgfcteEntity, (tgfcteEntity) => tgfcteEntity.codprod2)
  tgfctes: TgfcteEntity[];

  @OneToMany(() => TgfctpEntity, (tgfctpEntity) => tgfctpEntity.codprod)
  tgfctps: TgfctpEntity[];

  @OneToMany(() => TgfcusEntity, (tgfcusEntity) => tgfcusEntity.codprod2)
  tgfcuses: TgfcusEntity[];

  @OneToMany(() => TgfdavEntity, (tgfdavEntity) => tgfdavEntity.codprod)
  tgfdavs: TgfdavEntity[];

  @OneToMany(() => TgfddcEntity, (tgfddcEntity) => tgfddcEntity.codprod)
  tgfddcs: TgfddcEntity[];

  @OneToMany(() => TgfdepEntity, (tgfdepEntity) => tgfdepEntity.codprodganhe)
  tgfdeps: TgfdepEntity[];

  @OneToMany(() => TgfdidEntity, (tgfdidEntity) => tgfdidEntity.codprod2)
  tgfds: TgfdidEntity[];

  @OneToMany(() => TgfeacEntity, (tgfeacEntity) => tgfeacEntity.codprod2)
  tgfeacs: TgfeacEntity[];

  @OneToMany(
    () => Tgfefdfk260Entity,
    (tgfefdfk260Entity) => tgfefdfk260Entity.codprod,
  )
  tgfefdfks: Tgfefdfk260Entity[];

  @OneToMany(
    () => Tgfefdfk265Entity,
    (tgfefdfk265Entity) => tgfefdfk265Entity.codprod,
  )
  tgfefdfks2: Tgfefdfk265Entity[];

  @OneToMany(() => TgfemmEntity, (tgfemmEntity) => tgfemmEntity.codprod2)
  tgfemms: TgfemmEntity[];

  @OneToMany(() => TgfepiEntity, (tgfepiEntity) => tgfepiEntity.codprod2)
  tgfepis: TgfepiEntity[];

  @OneToMany(() => TgfeppEntity, (tgfeppEntity) => tgfeppEntity.codprod2)
  tgfepps: TgfeppEntity[];

  @OneToMany(() => TgfeprEntity, (tgfeprEntity) => tgfeprEntity.codprod2)
  tgfeprs: TgfeprEntity[];

  @OneToMany(() => TgfetqEntity, (tgfetqEntity) => tgfetqEntity.codprod2)
  tgfetqs: TgfetqEntity[];

  @OneToMany(() => TgfexcEntity, (tgfexcEntity) => tgfexcEntity.codprod2)
  tgfexcs: TgfexcEntity[];

  @OneToMany(() => TgffamEntity, (tgffamEntity) => tgffamEntity.codprodpai2)
  tgffams: TgffamEntity[];

  @OneToOne(() => TgffamEntity, (tgffamEntity) => tgffamEntity.codprodfilho2)
  tgffam: TgffamEntity;

  @OneToMany(() => TgffcpEntity, (tgffcpEntity) => tgffcpEntity.codprod2)
  tgffcps: TgffcpEntity[];

  @OneToMany(() => TgffrmEntity, (tgffrmEntity) => tgffrmEntity.codprod2)
  tgffrms: TgffrmEntity[];

  @OneToMany(() => TgffvcEntity, (tgffvcEntity) => tgffvcEntity.codprod2)
  tgffvcs: TgffvcEntity[];

  @OneToMany(() => TgfgarEntity, (tgfgarEntity) => tgfgarEntity.codgar2)
  tgfgars: TgfgarEntity[];

  @OneToMany(() => Tgfgir1Entity, (tgfgir1Entity) => tgfgir1Entity.codprod2)
  tgfgirs: Tgfgir1Entity[];

  @ManyToMany(() => TgftppEntity, (tgftppEntity) => tgftppEntity.tgfpros)
  tgftpps: TgftppEntity[];

  @OneToMany(() => TgfgvaEntity, (tgfgvaEntity) => tgfgvaEntity.codprod)
  tgfgvas: TgfgvaEntity[];

  @OneToMany(() => TgfgvrEntity, (tgfgvrEntity) => tgfgvrEntity.codprod)
  tgfgvrs: TgfgvrEntity[];

  @OneToMany(() => TgfgxeEntity, (tgfgxeEntity) => tgfgxeEntity.codprod2)
  tgfgxes: TgfgxeEntity[];

  @OneToMany(() => TgfgxeEntity, (tgfgxeEntity) => tgfgxeEntity.codprodesp2)
  tgfgxes2: TgfgxeEntity[];

  @OneToMany(() => TgfiacEntity, (tgfiacEntity) => tgfiacEntity.codprod2)
  tgfiacs: TgfiacEntity[];

  @OneToMany(() => TgfiasEntity, (tgfiasEntity) => tgfiasEntity.codserv)
  tgfias: TgfiasEntity[];

  @OneToMany(() => TgficpEntity, (tgficpEntity) => tgficpEntity.codmatprima2)
  tgficps: TgficpEntity[];

  @OneToMany(() => TgfiffpEntity, (tgfiffpEntity) => tgfiffpEntity.codprod2)
  tgfiffps: TgfiffpEntity[];

  @OneToMany(() => TgfimalEntity, (tgfimalEntity) => tgfimalEntity.codprod)
  tgfimals: TgfimalEntity[];

  @OneToMany(() => TgfipcEntity, (tgfipcEntity) => tgfipcEntity.codprod2)
  tgfipcs: TgfipcEntity[];

  @OneToMany(() => TgfipmEntity, (tgfipmEntity) => tgfipmEntity.codprod2)
  tgfipms: TgfipmEntity[];

  @OneToMany(() => TgfircstEntity, (tgfircstEntity) => tgfircstEntity.codprod)
  tgfircsts: TgfircstEntity[];

  @OneToMany(() => TgfisuEntity, (tgfisuEntity) => tgfisuEntity.codprod2)
  tgfisus: TgfisuEntity[];

  @OneToMany(() => TgfitcEntity, (tgfitcEntity) => tgfitcEntity.codprod2)
  tgfitcs: TgfitcEntity[];

  @OneToMany(() => TgfitcEntity, (tgfitcEntity) => tgfitcEntity.adCodprod)
  tgfitcs2: TgfitcEntity[];

  @OneToMany(() => TgfitdEntity, (tgfitdEntity) => tgfitdEntity.codprod2)
  tgfitds: TgfitdEntity[];

  @OneToMany(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.adCodprodalt)
  tgfites: TgfiteEntity[];

  @OneToMany(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.adCodprodalt2)
  tgfites2: TgfiteEntity[];

  @OneToMany(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.adCodprodalt3)
  tgfites3: TgfiteEntity[];

  @OneToMany(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.codprod2)
  tgfites4: TgfiteEntity[];

  @OneToMany(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.adCodprodalt4)
  tgfites5: TgfiteEntity[];

  @OneToMany(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.adCodprodalt5)
  tgfites6: TgfiteEntity[];

  @OneToMany(() => TgfitsEntity, (tgfitsEntity) => tgfitsEntity.codprod2)
  tgfits: TgfitsEntity[];

  @OneToMany(() => TgfivcEntity, (tgfivcEntity) => tgfivcEntity.codprod)
  tgfivcs: TgfivcEntity[];

  @OneToMany(() => TgflotEntity, (tgflotEntity) => tgflotEntity.codprod2)
  tgflots: TgflotEntity[];

  @OneToMany(() => TgflseEntity, (tgflseEntity) => tgflseEntity.codprod)
  tgflses: TgflseEntity[];

  @OneToMany(() => TgfmcsEntity, (tgfmcsEntity) => tgfmcsEntity.codprod2)
  tgfmcs: TgfmcsEntity[];

  @OneToMany(() => TgfmepiEntity, (tgfmepiEntity) => tgfmepiEntity.codprod2)
  tgfmepis: TgfmepiEntity[];

  @OneToMany(() => TgfmeqEntity, (tgfmeqEntity) => tgfmeqEntity.codprod)
  tgfmeqs: TgfmeqEntity[];

  @OneToMany(() => TgfmfciEntity, (tgfmfciEntity) => tgfmfciEntity.codprod2)
  tgfmfcis: TgfmfciEntity[];

  @OneToMany(() => TgfmpeEntity, (tgfmpeEntity) => tgfmpeEntity.codprod2)
  tgfmpes: TgfmpeEntity[];

  @OneToMany(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.codprod)
  tgfnats2: TgfnatEntity[];

  @OneToMany(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.codservunico)
  tgfnats3: TgfnatEntity[];

  @OneToMany(() => TgfnmaEntity, (tgfnmaEntity) => tgfnmaEntity.codprod2)
  tgfnmas: TgfnmaEntity[];

  @OneToMany(() => TgfordEntity, (tgfordEntity) => tgfordEntity.codprod)
  tgfords: TgfordEntity[];

  @OneToMany(() => TgfpalEntity, (tgfpalEntity) => tgfpalEntity.codprodalt2)
  tgfpals: TgfpalEntity[];

  @OneToMany(() => TgfpalEntity, (tgfpalEntity) => tgfpalEntity.codprod2)
  tgfpals2: TgfpalEntity[];

  @OneToMany(() => TgfpapEntity, (tgfpapEntity) => tgfpapEntity.codprod2)
  tgfpaps: TgfpapEntity[];

  @ManyToMany(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfpros)
  tgfpars: TgfparEntity[];

  @OneToMany(() => TgfpcoEntity, (tgfpcoEntity) => tgfpcoEntity.codprod2)
  tgfpcos: TgfpcoEntity[];

  @OneToMany(() => TgfpddEntity, (tgfpddEntity) => tgfpddEntity.codprod)
  tgfpdds: TgfpddEntity[];

  @OneToMany(() => TgfpemEntity, (tgfpemEntity) => tgfpemEntity.codprod2)
  tgfpems: TgfpemEntity[];

  @ManyToMany(() => TgfimgEntity, (tgfimgEntity) => tgfimgEntity.tgfpros)
  tgfimgs: TgfimgEntity[];

  @OneToMany(() => TgfplaiEntity, (tgfplaiEntity) => tgfplaiEntity.codprod)
  tgfplais: TgfplaiEntity[];

  @OneToMany(() => TgfplcEntity, (tgfplcEntity) => tgfplcEntity.codprod2)
  tgfplcs: TgfplcEntity[];

  @ManyToMany(() => TgfmveEntity, (tgfmveEntity) => tgfmveEntity.tgfpros)
  tgfmves: TgfmveEntity[];

  @OneToMany(() => TgfpmfEntity, (tgfpmfEntity) => tgfpmfEntity.codprod)
  tgfpmfs: TgfpmfEntity[];

  @OneToMany(() => TgfpmpeEntity, (tgfpmpeEntity) => tgfpmpeEntity.codprod2)
  tgfpmpes: TgfpmpeEntity[];

  @OneToMany(() => TgfppeEntity, (tgfppeEntity) => tgfppeEntity.codprod2)
  tgfppes: TgfppeEntity[];

  @OneToMany(() => TgfpplEntity, (tgfpplEntity) => tgfpplEntity.codprod2)
  tgfppls: TgfpplEntity[];

  @OneToMany(() => TgfppmEntity, (tgfppmEntity) => tgfppmEntity.codprod)
  tgfppms: TgfppmEntity[];

  @ManyToMany(() => TgfrpcEntity, (tgfrpcEntity) => tgfrpcEntity.tgfpros)
  tgfrpcs: TgfrpcEntity[];

  @OneToMany(() => TgfpprEntity, (tgfpprEntity) => tgfpprEntity.codprod2)
  tgfpprs: TgfpprEntity[];

  @OneToMany(() => TgfpraEntity, (tgfpraEntity) => tgfpraEntity.codprod2)
  tgfpras: TgfpraEntity[];

  @OneToMany(() => TgfprdEntity, (tgfprdEntity) => tgfprdEntity.codprod2)
  tgfprds: TgfprdEntity[];

  @OneToMany(() => TgfprfEntity, (tgfprfEntity) => tgfprfEntity.codprod2)
  tgfprfs: TgfprfEntity[];

  @ManyToOne(() => TsirfeEntity, (tsirfeEntity) => tsirfeEntity.tgfpros)
  @JoinColumn([{ name: 'MODETIQSEPWMS', referencedColumnName: 'nurfe' }])
  modetiqsepwms: TsirfeEntity;

  @ManyToOne(() => TgagtEntity, (tgagtEntity) => tgagtEntity.tgfpros)
  @JoinColumn([{ name: 'GRUPOTRANSG', referencedColumnName: 'grupotransg' }])
  grupotransg: TgagtEntity;

  @ManyToOne(() => TgfforEntity, (tgfforEntity) => tgfforEntity.tgfpros)
  @JoinColumn([{ name: 'CODFORMPREC', referencedColumnName: 'codformprec' }])
  codformprec: TgfforEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tgfpros)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;

  @ManyToOne(() => TgfcatEntity, (tgfcatEntity) => tgfcatEntity.tgfpros)
  @JoinColumn([{ name: 'CODCAT', referencedColumnName: 'codcat' }])
  codcat: TgfcatEntity;

  @ManyToOne(() => TgadigEntity, (tgadigEntity) => tgadigEntity.tgfpros)
  @JoinColumn([
    { name: 'CLASSETOX', referencedColumnName: 'nudig' },
    { name: 'TIPOCLASSETOX', referencedColumnName: 'tipo' },
  ])
  tgadig: TgadigEntity;

  @ManyToOne(() => TgadigEntity, (tgadigEntity) => tgadigEntity.tgfpros2)
  @JoinColumn([
    { name: 'GRUPOQUIMICO', referencedColumnName: 'nudig' },
    { name: 'TIPOGRUPOQUIMICO', referencedColumnName: 'tipo' },
  ])
  tgadig2: TgadigEntity;

  @ManyToOne(() => TgfipiEntity, (tgfipiEntity) => tgfipiEntity.tgfpros)
  @JoinColumn([{ name: 'CODIPI', referencedColumnName: 'codipi' }])
  codipi2: TgfipiEntity;

  @ManyToOne(() => TsipaiEntity, (tsipaiEntity) => tsipaiEntity.tgfpros)
  @JoinColumn([{ name: 'CODPAIS', referencedColumnName: 'codpais' }])
  codpais: TsipaiEntity;

  @ManyToOne(() => TgwrfaEntity, (tgwrfaEntity) => tgwrfaEntity.tgfpros)
  @JoinColumn([{ name: 'CODRFA', referencedColumnName: 'codrfa' }])
  codrfa: TgwrfaEntity;

  @ManyToOne(() => TgfntaEntity, (tgfntaEntity) => tgfntaEntity.tgfpros)
  @JoinColumn([{ name: 'CODTAB', referencedColumnName: 'codtab' }])
  codtab2: TgfntaEntity;

  @ManyToOne(() => TgadigEntity, (tgadigEntity) => tgadigEntity.tgfpros3)
  @JoinColumn([
    { name: 'PRINCATIVO', referencedColumnName: 'nudig' },
    { name: 'TIPOPRINCATIVO', referencedColumnName: 'tipo' },
  ])
  tgadig3: TgadigEntity;

  @ManyToOne(() => TgadigEntity, (tgadigEntity) => tgadigEntity.tgfpros4)
  @JoinColumn([
    { name: 'CLASSEAGT', referencedColumnName: 'nudig' },
    { name: 'TIPOCLASSEAGT', referencedColumnName: 'tipo' },
  ])
  tgadig4: TgadigEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfpros)
  @JoinColumn([{ name: 'CODPRODAGRUPAPTENC', referencedColumnName: 'codprod' }])
  codprodagrupaptenc2: TgfproEntity;

  @OneToMany(
    () => TgfproEntity,
    (tgfproEntity) => tgfproEntity.codprodagrupaptenc2,
  )
  tgfpros: TgfproEntity[];

  @ManyToOne(() => TgfterEntity, (tgfterEntity) => tgfterEntity.tgfpros)
  @JoinColumn([{ name: 'CODTER', referencedColumnName: 'codter' }])
  codter: TgfterEntity;

  @ManyToOne(() => TgfcprEntity, (tgfcprEntity) => tgfcprEntity.tgfpros)
  @JoinColumn([{ name: 'CODCPR', referencedColumnName: 'codcpr' }])
  codcpr: TgfcprEntity;

  @ManyToOne(() => TgfcitEntity, (tgfcitEntity) => tgfcitEntity.tgfpros)
  @JoinColumn([
    { name: 'CODSERVTELECOM', referencedColumnName: 'codservtelecom' },
  ])
  codservtelecom: TgfcitEntity;

  @ManyToOne(() => TsimoeEntity, (tsimoeEntity) => tsimoeEntity.tgfpros)
  @JoinColumn([{ name: 'CODMOEDA', referencedColumnName: 'codmoeda' }])
  codmoeda: TsimoeEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfpros2)
  @JoinColumn([{ name: 'CODPRODINNATURA', referencedColumnName: 'codprod' }])
  codprodinnatura2: TgfproEntity;

  @OneToMany(
    () => TgfproEntity,
    (tgfproEntity) => tgfproEntity.codprodinnatura2,
  )
  tgfpros2: TgfproEntity[];

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfpros3)
  @JoinColumn([{ name: 'CODPRODAGRUPAPT', referencedColumnName: 'codprod' }])
  codprodagrupapt2: TgfproEntity;

  @OneToMany(
    () => TgfproEntity,
    (tgfproEntity) => tgfproEntity.codprodagrupapt2,
  )
  tgfpros3: TgfproEntity[];

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfpros4)
  @JoinColumn([{ name: 'AD_CODIGOMO', referencedColumnName: 'codprod' }])
  adCodigomo: TgfproEntity;

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.adCodigomo)
  tgfpros4: TgfproEntity[];

  @ManyToOne(() => TgagruEntity, (tgagruEntity) => tgagruEntity.tgfpros)
  @JoinColumn([{ name: 'CODGPROD', referencedColumnName: 'codgprod' }])
  codgprod: TgagruEntity;

  @ManyToOne(() => TsikitEntity, (tsikitEntity) => tsikitEntity.tgfpros)
  @JoinColumn([{ name: 'CODCONFKIT', referencedColumnName: 'codconfkit' }])
  codconfkit: TsikitEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tgfpros2)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat: TgfnatEntity;

  @ManyToOne(() => TgfgrdEntity, (tgfgrdEntity) => tgfgrdEntity.tgfpros)
  @JoinColumn([{ name: 'IDGRADE', referencedColumnName: 'idgrade' }])
  idgrade: TgfgrdEntity;

  @ManyToOne(() => TgflstEntity, (tgflstEntity) => tgflstEntity.tgfpros)
  @JoinColumn([{ name: 'CODLST', referencedColumnName: 'codlst' }])
  codlst: TgflstEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgfpros)
  @JoinColumn([{ name: 'CODVOLCOMPRA', referencedColumnName: 'codvol' }])
  codvolcompra: TgfvolEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgfpros2)
  @JoinColumn([{ name: 'CODVOLRES', referencedColumnName: 'codvol' }])
  codvolres: TgfvolEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgfpros3)
  @JoinColumn([{ name: 'CODVOLFETHAB', referencedColumnName: 'codvol' }])
  codvolfethab: TgfvolEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgfpros4)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol: TgfvolEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgfpros)
  @JoinColumn([{ name: 'CODLOCALPADRAO', referencedColumnName: 'codlocal' }])
  codlocalpadrao: TgflocEntity;

  @ManyToOne(() => TgfmarEntity, (tgfmarEntity) => tgfmarEntity.tgfpros)
  @JoinColumn([{ name: 'CODMARCA', referencedColumnName: 'codigo' }])
  codmarca: TgfmarEntity;

  @ManyToOne(() => TgwarsEntity, (tgwarsEntity) => tgwarsEntity.tgfpros)
  @JoinColumn([{ name: 'CODAREASEP', referencedColumnName: 'codareasep' }])
  codareasep: TgwarsEntity;

  @ManyToOne(() => TgfpatEntity, (tgfpatEntity) => tgfpatEntity.tgfpros)
  @JoinColumn([{ name: 'CODPAT', referencedColumnName: 'codpat' }])
  codpat: TgfpatEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tgfpros)
  @JoinColumn([{ name: 'CODCTACTB', referencedColumnName: 'codctactb' }])
  codctactb: TcbplaEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tgfpros2)
  @JoinColumn([{ name: 'CODCTACTBEFD', referencedColumnName: 'codctactb' }])
  codctactbefd: TcbplaEntity;

  @ManyToOne(() => TgfcprbEntity, (tgfcprbEntity) => tgfcprbEntity.tgfpros)
  @JoinColumn([{ name: 'CODCPRB', referencedColumnName: 'codcprb' }])
  codcprb: TgfcprbEntity;

  @ManyToOne(() => TcscosEntity, (tcscosEntity) => tcscosEntity.tgfpros)
  @JoinColumn([{ name: 'CODCOS', referencedColumnName: 'codcos' }])
  codcos: TcscosEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tgfpros)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj: TcsprjEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfpros2)
  @JoinColumn([{ name: 'CODFAB', referencedColumnName: 'codparc' }])
  codfab: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfpros3)
  @JoinColumn([{ name: 'CODPARCCONSIG', referencedColumnName: 'codparc' }])
  codparcconsig: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfpros4)
  @JoinColumn([{ name: 'CODPARCFORN', referencedColumnName: 'codparc' }])
  codparcforn: TgfparEntity;

  @OneToMany(() => TgfproiEntity, (tgfproiEntity) => tgfproiEntity.codprod2)
  tgfprois: TgfproiEntity[];

  @OneToMany(() => TgfpsdEntity, (tgfpsdEntity) => tgfpsdEntity.codprod)
  tgfpsds: TgfpsdEntity[];

  @OneToMany(() => TgfptpEntity, (tgfptpEntity) => tgfptpEntity.codprod2)
  tgfptps: TgfptpEntity[];

  @OneToMany(() => TgframEntity, (tgframEntity) => tgframEntity.codprod)
  tgframs: TgframEntity[];

  @OneToMany(
    () => TgfreclasEntity,
    (tgfreclasEntity) => tgfreclasEntity.codprodorig,
  )
  tgfreclas: TgfreclasEntity[];

  @OneToMany(
    () => TgfreclasEntity,
    (tgfreclasEntity) => tgfreclasEntity.codproddest,
  )
  tgfreclas2: TgfreclasEntity[];

  @OneToMany(() => TgfrstEntity, (tgfrstEntity) => tgfrstEntity.codprod2)
  tgfrsts: TgfrstEntity[];

  @OneToMany(() => TgfsapEntity, (tgfsapEntity) => tgfsapEntity.codprod)
  tgfsaps: TgfsapEntity[];

  @OneToMany(() => TgfsazEntity, (tgfsazEntity) => tgfsazEntity.codprod2)
  tgfsazs: TgfsazEntity[];

  @OneToMany(() => TgfsemEntity, (tgfsemEntity) => tgfsemEntity.codprod2)
  tgfsems: TgfsemEntity[];

  @OneToMany(() => TgfserEntity, (tgfserEntity) => tgfserEntity.codprod2)
  tgfsers: TgfserEntity[];

  @OneToMany(() => TgfseuEntity, (tgfseuEntity) => tgfseuEntity.codserv2)
  tgfseus: TgfseuEntity[];

  @OneToMany(() => TgfseuEntity, (tgfseuEntity) => tgfseuEntity.codprod2)
  tgfseus2: TgfseuEntity[];

  @OneToMany(() => TgfsolEntity, (tgfsolEntity) => tgfsolEntity.codprod)
  tgfsols: TgfsolEntity[];

  @OneToMany(
    () => TgfstmvproEntity,
    (tgfstmvproEntity) => tgfstmvproEntity.codprod2,
  )
  tgfstmvpros: TgfstmvproEntity[];

  @ManyToMany(() => TgfmeqEntity, (tgfmeqEntity) => tgfmeqEntity.tgfpros)
  @JoinTable({
    name: 'TGFSVM',
    joinColumns: [{ name: 'CODPROD', referencedColumnName: 'codprod' }],
    inverseJoinColumns: [{ name: 'NUMEQ', referencedColumnName: 'numeq' }],
    schema: 'SANKHYA',
  })
  tgfmeqs2: TgfmeqEntity[];

  @OneToMany(() => TgftaxEntity, (tgftaxEntity) => tgftaxEntity.codprod2)
  tgftaxes: TgftaxEntity[];

  @OneToMany(() => TgftraEntity, (tgftraEntity) => tgftraEntity.codmatprima)
  tgftras: TgftraEntity[];

  @OneToMany(() => TgftraEntity, (tgftraEntity) => tgftraEntity.codprod2)
  tgftras2: TgftraEntity[];

  @OneToMany(() => TgfvceEntity, (tgfvceEntity) => tgfvceEntity.codprod2)
  tgfvces: TgfvceEntity[];

  @OneToMany(() => TgfvcsEntity, (tgfvcsEntity) => tgfvcsEntity.codprodsug2)
  tgfvcs: TgfvcsEntity[];

  @OneToMany(() => TgfvdpEntity, (tgfvdpEntity) => tgfvdpEntity.codprod2)
  tgfvdps: TgfvdpEntity[];

  @OneToMany(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.codprod2)
  tgfveis: TgfveiEntity[];

  @OneToMany(
    () => TgfveiEntity,
    (tgfveiEntity) => tgfveiEntity.codprodagrupaptenc,
  )
  tgfveis2: TgfveiEntity[];

  @OneToMany(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.codprodagrupapt)
  tgfveis3: TgfveiEntity[];

  @OneToMany(() => TgfvoaEntity, (tgfvoaEntity) => tgfvoaEntity.codprod2)
  tgfvoas: TgfvoaEntity[];

  @OneToMany(() => TgfvoahEntity, (tgfvoahEntity) => tgfvoahEntity.codprod2)
  tgfvoahs: TgfvoahEntity[];

  @OneToMany(() => TgfvoemEntity, (tgfvoemEntity) => tgfvoemEntity.codprod2)
  tgfvoems: TgfvoemEntity[];

  @OneToMany(() => TgfvorEntity, (tgfvorEntity) => tgfvorEntity.codprod2)
  tgfvors: TgfvorEntity[];

  @OneToMany(() => TgiiteEntity, (tgiiteEntity) => tgiiteEntity.codprod)
  tgiites: TgiiteEntity[];

  @OneToMany(() => TgvavprEntity, (tgvavprEntity) => tgvavprEntity.codprod2)
  tgvavprs: TgvavprEntity[];

  @OneToMany(() => TgvpeprEntity, (tgvpeprEntity) => tgvpeprEntity.codprod2)
  tgvpeprs: TgvpeprEntity[];

  @OneToMany(() => TgvravEntity, (tgvravEntity) => tgvravEntity.codprod)
  tgvravs: TgvravEntity[];

  @OneToMany(() => TgvresEntity, (tgvresEntity) => tgvresEntity.codprod)
  tgvres: TgvresEntity[];

  @OneToMany(() => TgvrngEntity, (tgvrngEntity) => tgvrngEntity.codprod2)
  tgvrngs: TgvrngEntity[];

  @OneToMany(() => TgwaxpEntity, (tgwaxpEntity) => tgwaxpEntity.codprod2)
  tgwaxps: TgwaxpEntity[];

  @OneToMany(() => TgwcserEntity, (tgwcserEntity) => tgwcserEntity.codprod2)
  tgwcsers: TgwcserEntity[];

  @OneToMany(() => TgwcteEntity, (tgwcteEntity) => tgwcteEntity.codprod2)
  tgwctes: TgwcteEntity[];

  @OneToMany(() => TgwempeEntity, (tgwempeEntity) => tgwempeEntity.codprod2)
  tgwempes: TgwempeEntity[];

  @OneToMany(() => TgwenpEntity, (tgwenpEntity) => tgwenpEntity.codprod)
  tgwenps: TgwenpEntity[];

  @OneToMany(() => TgwepaEntity, (tgwepaEntity) => tgwepaEntity.codprod2)
  tgwepas: TgwepaEntity[];

  @OneToMany(() => TgweplEntity, (tgweplEntity) => tgweplEntity.codprod2)
  tgwepls: TgweplEntity[];

  @OneToMany(() => TgwestEntity, (tgwestEntity) => tgwestEntity.codprod2)
  tgwests: TgwestEntity[];

  @OneToMany(() => TgwexpEntity, (tgwexpEntity) => tgwexpEntity.codprod2)
  tgwexps: TgwexpEntity[];

  @OneToMany(() => TgwexplEntity, (tgwexplEntity) => tgwexplEntity.codprod2)
  tgwexpls: TgwexplEntity[];

  @OneToMany(() => TgwgpdEntity, (tgwgpdEntity) => tgwgpdEntity.codprod2)
  tgwgpds: TgwgpdEntity[];

  @OneToMany(() => TgwinvEntity, (tgwinvEntity) => tgwinvEntity.codprod2)
  tgwinvs: TgwinvEntity[];

  @OneToMany(() => TgwitrEntity, (tgwitrEntity) => tgwitrEntity.codprod)
  tgwitrs: TgwitrEntity[];

  @OneToMany(() => TgwittEntity, (tgwittEntity) => tgwittEntity.codprod2)
  tgwitts: TgwittEntity[];

  @OneToMany(() => TgwivlEntity, (tgwivlEntity) => tgwivlEntity.codprod)
  tgwivls: TgwivlEntity[];

  @OneToMany(() => TgwivrEntity, (tgwivrEntity) => tgwivrEntity.codprod)
  tgwivrs: TgwivrEntity[];

  @OneToMany(
    () => TgwivrserEntity,
    (tgwivrserEntity) => tgwivrserEntity.codprod2,
  )
  tgwivrsers: TgwivrserEntity[];

  @OneToMany(() => TgwlboEntity, (tgwlboEntity) => tgwlboEntity.codprod)
  tgwlbos: TgwlboEntity[];

  @OneToMany(() => TgwlceEntity, (tgwlceEntity) => tgwlceEntity.codprod2)
  tgwlces: TgwlceEntity[];

  @OneToMany(() => TgwquaEntity, (tgwquaEntity) => tgwquaEntity.codprod)
  tgwquas: TgwquaEntity[];

  @OneToMany(() => TgwragEntity, (tgwragEntity) => tgwragEntity.codprod2)
  tgwrags: TgwragEntity[];

  @OneToMany(() => TgwrarmEntity, (tgwrarmEntity) => tgwrarmEntity.codprod)
  tgwrarms: TgwrarmEntity[];

  @OneToMany(() => TgwrarmEntity, (tgwrarmEntity) => tgwrarmEntity.codprod3)
  tgwrarms2: TgwrarmEntity[];

  @OneToMany(() => TgwrconEntity, (tgwrconEntity) => tgwrconEntity.codprod2)
  tgwrcons: TgwrconEntity[];

  @OneToMany(() => TgwromEntity, (tgwromEntity) => tgwromEntity.codprod)
  tgwroms: TgwromEntity[];

  @OneToMany(() => TgwrplEntity, (tgwrplEntity) => tgwrplEntity.codprod)
  tgwrpls: TgwrplEntity[];

  @OneToMany(() => TgwtrcdEntity, (tgwtrcdEntity) => tgwtrcdEntity.codprod2)
  tgwtrcds: TgwtrcdEntity[];

  @OneToMany(() => TgwtrfEntity, (tgwtrfEntity) => tgwtrfEntity.codprod)
  tgwtrfs: TgwtrfEntity[];

  @OneToMany(() => TimcnfEntity, (timcnfEntity) => timcnfEntity.cnfcodprod)
  timcnfs: TimcnfEntity[];

  @OneToMany(
    () => TimimbEntity,
    (timimbEntity) => timimbEntity.imbcodservtxinter,
  )
  timimbs: TimimbEntity[];

  @OneToMany(() => TimimbEntity, (timimbEntity) => timimbEntity.imbcodservtxadm)
  timimbs2: TimimbEntity[];

  @OneToMany(
    () => TmsordcarregEntity,
    (tmsordcarregEntity) => tmsordcarregEntity.codprod,
  )
  tmsordcarregs: TmsordcarregEntity[];

  @OneToMany(() => TmsparqbEntity, (tmsparqbEntity) => tmsparqbEntity.codprod)
  tmsparqbs: TmsparqbEntity[];

  @OneToMany(() => TmspedEntity, (tmspedEntity) => tmspedEntity.codprod)
  tmspeds: TmspedEntity[];

  @OneToMany(() => TotconEntity, (totconEntity) => totconEntity.codprod2)
  totcons: TotconEntity[];

  @OneToOne(() => TotlenEntity, (totlenEntity) => totlenEntity.codprod2)
  totlen: TotlenEntity;

  @OneToMany(() => TotlenEntity, (totlenEntity) => totlenEntity.codprodind)
  totlens: TotlenEntity[];

  @OneToMany(() => TotlenEntity, (totlenEntity) => totlenEntity.codserv)
  totlens2: TotlenEntity[];

  @OneToMany(() => TotrecEntity, (totrecEntity) => totrecEntity.codprodoe)
  totrecs: TotrecEntity[];

  @OneToMany(() => TotrecEntity, (totrecEntity) => totrecEntity.codprodod)
  totrecs2: TotrecEntity[];

  @OneToMany(() => TprbomEntity, (tprbomEntity) => tprbomEntity.codprodmp2)
  tprboms: TprbomEntity[];

  @OneToMany(() => TprcoiEntity, (tprcoiEntity) => tprcoiEntity.codprod2)
  tprcois: TprcoiEntity[];

  @OneToMany(() => TprcpmpEntity, (tprcpmpEntity) => tprcpmpEntity.codprod2)
  tprcpmps: TprcpmpEntity[];

  @OneToMany(() => TprcprEntity, (tprcprEntity) => tprcprEntity.codprodpa2)
  tprcprs: TprcprEntity[];

  @OneToMany(
    () => TprestsmpEntity,
    (tprestsmpEntity) => tprestsmpEntity.codprodmp,
  )
  tprestsmps: TprestsmpEntity[];

  @OneToMany(() => TprfxtEntity, (tprfxtEntity) => tprfxtEntity.codprodpa)
  tprfxts: TprfxtEntity[];

  @OneToMany(() => TprfxtEntity, (tprfxtEntity) => tprfxtEntity.codprodmp)
  tprfxts2: TprfxtEntity[];

  @OneToMany(() => TprhmrpEntity, (tprhmrpEntity) => tprhmrpEntity.codprod2)
  tprhmrps: TprhmrpEntity[];

  @OneToMany(() => TprhsmpEntity, (tprhsmpEntity) => tprhsmpEntity.codmpsubs)
  tprhsmps: TprhsmpEntity[];

  @OneToMany(() => TprhsmpEntity, (tprhsmpEntity) => tprhsmpEntity.codmpnova)
  tprhsmps2: TprhsmpEntity[];

  @OneToMany(() => TprimpsEntity, (tprimpsEntity) => tprimpsEntity.codprod2)
  tprimps: TprimpsEntity[];

  @OneToMany(() => TprimrpEntity, (tprimrpEntity) => tprimrpEntity.codprodmp2)
  tprimrps: TprimrpEntity[];

  @OneToMany(() => TprirpaEntity, (tprirpaEntity) => tprirpaEntity.codprodpa2)
  tprirpas: TprirpaEntity[];

  @OneToMany(() => TprlmpEntity, (tprlmpEntity) => tprlmpEntity.codprodpa2)
  tprlmps: TprlmpEntity[];

  @OneToMany(() => TprlmpEntity, (tprlmpEntity) => tprlmpEntity.codprodmp2)
  tprlmps2: TprlmpEntity[];

  @OneToMany(() => TprlpaEntity, (tprlpaEntity) => tprlpaEntity.codprodpa2)
  tprlpas: TprlpaEntity[];

  @OneToMany(() => TprlspEntity, (tprlspEntity) => tprlspEntity.codprodpa)
  tprlsps: TprlspEntity[];

  @OneToMany(() => TprmpaEntity, (tprmpaEntity) => tprmpaEntity.codprodpa)
  tprmpas: TprmpaEntity[];

  @OneToMany(() => TprmpaEntity, (tprmpaEntity) => tprmpaEntity.codprodmp)
  tprmpas2: TprmpaEntity[];

  @OneToMany(() => TprrwaEntity, (tprrwaEntity) => tprrwaEntity.codprodpa)
  tprrwas: TprrwaEntity[];

  @OneToMany(() => TprswxpEntity, (tprswxpEntity) => tprswxpEntity.codprodpa2)
  tprswxps: TprswxpEntity[];

  @OneToMany(() => TprtacEntity, (tprtacEntity) => tprtacEntity.codprodpa)
  tprtacs: TprtacEntity[];

  @OneToMany(() => TprtppEntity, (tprtppEntity) => tprtppEntity.codprodpa2)
  tprtpps: TprtppEntity[];

  @OneToMany(() => TprtxpEntity, (tprtxpEntity) => tprtxpEntity.codprodpa2)
  tprtxps: TprtxpEntity[];

  @OneToMany(() => TprtxppEntity, (tprtxppEntity) => tprtxppEntity.codprodpa2)
  tprtxpps: TprtxppEntity[];

  @OneToMany(() => TprwxpEntity, (tprwxpEntity) => tprwxpEntity.codprodpa2)
  tprwxps: TprwxpEntity[];

  @OneToMany(() => TripprodEntity, (tripprodEntity) => tripprodEntity.codprod2)
  tripprods: TripprodEntity[];

  @OneToMany(() => TsieveEntity, (tsieveEntity) => tsieveEntity.codserv)
  tsieves: TsieveEntity[];

  @OneToMany(() => TsitdaEntity, (tsitdaEntity) => tsitdaEntity.codprod)
  tsitdas: TsitdaEntity[];

  @OneToMany(() => TsitokpEntity, (tsitokpEntity) => tsitokpEntity.codprod2)
  tsitokps: TsitokpEntity[];

  @OneToMany(
    () => TsitokpvrEntity,
    (tsitokpvrEntity) => tsitokpvrEntity.codprod2,
  )
  tsitokpvrs: TsitokpvrEntity[];

  @OneToMany(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.codprod)
  tsiusus: TsiusuEntity[];

  @OneToMany(() => TslipxEntity, (tslipxEntity) => tslipxEntity.codprod)
  tslipxes: TslipxEntity[];

  @OneToMany(
    () => TtkprotempEntity,
    (ttkprotempEntity) => ttkprotempEntity.codprod2,
  )
  ttkprotemps: TtkprotempEntity[];
}
