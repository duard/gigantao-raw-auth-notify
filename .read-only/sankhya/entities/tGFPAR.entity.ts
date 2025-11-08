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
import { AdAcertoviagemEntity } from './aD_ACERTOVIAGEM.entity';
import { AdCadhabEntity } from './aD_CADHAB.entity';
import { AdChamadoscorridasEntity } from './aD_CHAMADOSCORRIDAS.entity';
import { AdComadmEntity } from './aD_COMADM.entity';
import { AdGeraoscomEntity } from './aD_GERAOSCOM.entity';
import { AdTsiusuhabEntity } from './aD_TSIUSUHAB.entity';
import { AstreqEntity } from './aSTREQ.entity';
import { GfratendimentoclienteEntity } from './gFRATENDIMENTOCLIENTE.entity';
import { TcaaluEntity } from './tCAALU.entity';
import { TcacpiEntity } from './tCACPI.entity';
import { TcadiaEntity } from './tCADIA.entity';
import { TcahpaEntity } from './tCAHPA.entity';
import { TcamapEntity } from './tCAMAP.entity';
import { TcaremEntity } from './tCAREM.entity';
import { TcbirpjnfretEntity } from './tCBIRPJNFRET.entity';
import { TcbplaEntity } from './tCBPLA.entity';
import { TcbrelEntity } from './tCBREL.entity';
import { TcccomEntity } from './tCCCOM.entity';
import { TccconEntity } from './tCCCON.entity';
import { TcccorEntity } from './tCCCOR.entity';
import { TcecabEntity } from './tCECAB.entity';
import { TcecabHisEntity } from './tCECAB_HIS.entity';
import { TcedespEntity } from './tCEDESP.entity';
import { TcedespHisEntity } from './tCEDESP_HIS.entity';
import { TceictnEntity } from './tCEICTN.entity';
import { TceiteEntity } from './tCEITE.entity';
import { TceiteHisEntity } from './tCEITE_HIS.entity';
import { TceratEntity } from './tCERAT.entity';
import { TcfabtEntity } from './tCFABT.entity';
import { TcfcptEntity } from './tCFCPT.entity';
import { TcfdocEntity } from './tCFDOC.entity';
import { TcfoscabEntity } from './tCFOSCAB.entity';
import { TcfpnuhistEntity } from './tCFPNUHIST.entity';
import { TcsagfEntity } from './tCSAGF.entity';
import { TcsaltEntity } from './tCSALT.entity';
import { TcscomEntity } from './tCSCOM.entity';
import { TcsconEntity } from './tCSCON.entity';
import { TcscpaEntity } from './tCSCPA.entity';
import { TcscprEntity } from './tCSCPR.entity';
import { TcseagEntity } from './tCSEAG.entity';
import { TcseqpEntity } from './tCSEQP.entity';
import { TcsfapEntity } from './tCSFAP.entity';
import { TcsgecEntity } from './tCSGEC.entity';
import { TcsnhcEntity } from './tCSNHC.entity';
import { TcsoccEntity } from './tCSOCC.entity';
import { TcsoseEntity } from './tCSOSE.entity';
import { TcspapEntity } from './tCSPAP.entity';
import { TcspscEntity } from './tCSPSC.entity';
import { TfcanuEntity } from './tFCANU.entity';
import { TfpambEntity } from './tFPAMB.entity';
import { TfpbenEntity } from './tFPBEN.entity';
import { TfpcomEntity } from './tFPCOM.entity';
import { TfpdedEntity } from './tFPDED.entity';
import { TfpdepEntity } from './tFPDEP.entity';
import { TfpfinEntity } from './tFPFIN.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpgpsEntity } from './tFPGPS.entity';
import { TfpgtfEntity } from './tFPGTF.entity';
import { TfphdeEntity } from './tFPHDE.entity';
import { TfpscpEntity } from './tFPSCP.entity';
import { TfpsinEntity } from './tFPSIN.entity';
import { TfptmeEntity } from './tFPTME.entity';
import { TfptomEntity } from './tFPTOM.entity';
import { TgaahEntity } from './tGAAH.entity';
import { TgaahiEntity } from './tGAAHI.entity';
import { TgaareEntity } from './tGAARE.entity';
import { TgaartEntity } from './tGAART.entity';
import { TgaavaEntity } from './tGAAVA.entity';
import { TgabemEntity } from './tGABEM.entity';
import { TgaculEntity } from './tGACUL.entity';
import { TgadivEntity } from './tGADIV.entity';
import { TgaemiEntity } from './tGAEMI.entity';
import { TgagarEntity } from './tGAGAR.entity';
import { TgagtEntity } from './tGAGT.entity';
import { TgagtmEntity } from './tGAGTM.entity';
import { TgagtsEntity } from './tGAGTS.entity';
import { TgainsEntity } from './tGAINS.entity';
import { TgamovEntity } from './tGAMOV.entity';
import { TgapatEntity } from './tGAPAT.entity';
import { TgapcaEntity } from './tGAPCA.entity';
import { TgapeaEntity } from './tGAPEA.entity';
import { TgapesiEntity } from './tGAPESI.entity';
import { TgarecEntity } from './tGAREC.entity';
import { TgariEntity } from './tGARI.entity';
import { TgasalEntity } from './tGASAL.entity';
import { TgatriEntity } from './tGATRI.entity';
import { TgccalEntity } from './tGCCAL.entity';
import { TgccredEntity } from './tGCCRED.entity';
import { TgcparEntity } from './tGCPAR.entity';
import { TgfaaxnEntity } from './tGFAAXN.entity';
import { TgfaaxnmEntity } from './tGFAAXNM.entity';
import { TgfacoEntity } from './tGFACO.entity';
import { TgfaepEntity } from './tGFAEP.entity';
import { TgfagdEntity } from './tGFAGD.entity';
import { TgfalvEntity } from './tGFALV.entity';
import { TgfasaEntity } from './tGFASA.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfcabExcEntity } from './tGFCAB_EXC.entity';
import { TgfcajaEntity } from './tGFCAJA.entity';
import { TgfcasEntity } from './tGFCAS.entity';
import { Tgfcat42R0150Entity } from './tGFCAT42R0150.entity';
import { Tgfcat42R1200Entity } from './tGFCAT42R1200.entity';
import { TgfccrEntity } from './tGFCCR.entity';
import { TgfcfiEntity } from './tGFCFI.entity';
import { TgfcfrEntity } from './tGFCFR.entity';
import { TgfciotEntity } from './tGFCIOT.entity';
import { TgfclxEntity } from './tGFCLX.entity';
import { TgfcontrEntity } from './tGFCONTR.entity';
import { TgfcpcEntity } from './tGFCPC.entity';
import { TgfcplEntity } from './tGFCPL.entity';
import { TgfcppEntity } from './tGFCPP.entity';
import { TgfcredcliEntity } from './tGFCREDCLI.entity';
import { TgfcrtEntity } from './tGFCRT.entity';
import { TgfcszEntity } from './tGFCSZ.entity';
import { TgfcteEntity } from './tGFCTE.entity';
import { TgfctfEntity } from './tGFCTF.entity';
import { TgfcttEntity } from './tGFCTT.entity';
import { TgfcvnEntity } from './tGFCVN.entity';
import { TgfdantEntity } from './tGFDANT.entity';
import { TgfdctfparEntity } from './tGFDCTFPAR.entity';
import { TgfdfpEntity } from './tGFDFP.entity';
import { TgfdnpEntity } from './tGFDNP.entity';
import { TgfembEntity } from './tGFEMB.entity';
import { TgfemdfEntity } from './tGFEMDF.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfestEntity } from './tGFEST.entity';
import { TgffdicEntity } from './tGFFDIC.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TgffpiEntity } from './tGFFPI.entity';
import { TgffrcEntity } from './tGFFRC.entity';
import { TgfftcEntity } from './tGFFTC.entity';
import { TgfgcbEntity } from './tGFGCB.entity';
import { TgfgirEntity } from './tGFGIR.entity';
import { TgfgvpEntity } from './tGFGVP.entity';
import { TgfiesEntity } from './tGFIES.entity';
import { TgfifcEntity } from './tGFIFC.entity';
import { TgfifeEntity } from './tGFIFE.entity';
import { TgfigaEntity } from './tGFIGA.entity';
import { TgfinssrefEntity } from './tGFINSSREF.entity';
import { TgfisuEntity } from './tGFISU.entity';
import { TgfitcEntity } from './tGFITC.entity';
import { TgfitdEntity } from './tGFITD.entity';
import { TgfiteEntity } from './tGFITE.entity';
import { TgfixnEntity } from './tGFIXN.entity';
import { TgflcdprEntity } from './tGFLCDPR.entity';
import { Tgflcdprr0000Entity } from './tGFLCDPRR0000.entity';
import { Tgflcdprr0010Entity } from './tGFLCDPRR0010.entity';
import { Tgflcdprr0030Entity } from './tGFLCDPRR0030.entity';
import { Tgflcdprr0040Entity } from './tGFLCDPRR0040.entity';
import { Tgflcdprr0045Entity } from './tGFLCDPRR0045.entity';
import { Tgflcdprr0050Entity } from './tGFLCDPRR0050.entity';
import { Tgflcdprr9999Entity } from './tGFLCDPRR9999.entity';
import { Tgflcdprrq100Entity } from './tGFLCDPRRQ100.entity';
import { Tgflcdprrq200Entity } from './tGFLCDPRRQ200.entity';
import { TgflcdprtercEntity } from './tGFLCDPRTERC.entity';
import { TgflcpEntity } from './tGFLCP.entity';
import { TgflcrEntity } from './tGFLCR.entity';
import { TgflisEntity } from './tGFLIS.entity';
import { TgflocEntity } from './tGFLOC.entity';
import { TgflseEntity } from './tGFLSE.entity';
import { TgfmdfesegEntity } from './tGFMDFESEG.entity';
import { TgfmdfevalpEntity } from './tGFMDFEVALP.entity';
import { TgfmdfpgfreEntity } from './tGFMDFPGFRE.entity';
import { TgfmeqEntity } from './tGFMEQ.entity';
import { TgfmmsEntity } from './tGFMMS.entity';
import { TgfmopEntity } from './tGFMOP.entity';
import { TgfmotEntity } from './tGFMOT.entity';
import { TgfmppEntity } from './tGFMPP.entity';
import { TgfmstEntity } from './tGFMST.entity';
import { TgfnceEntity } from './tGFNCE.entity';
import { TgfnscEntity } from './tGFNSC.entity';
import { TgfntaEntity } from './tGFNTA.entity';
import { TgfodpEntity } from './tGFODP.entity';
import { TgfordEntity } from './tGFORD.entity';
import { TgfpaemEntity } from './tGFPAEM.entity';
import { TgfpapEntity } from './tGFPAP.entity';
import { TgfpaxnEntity } from './tGFPAXN.entity';
import { TgfpecEntity } from './tGFPEC.entity';
import { TgfpegEntity } from './tGFPEG.entity';
import { TgfperEntity } from './tGFPER.entity';
import { TgfplacEntity } from './tGFPLAC.entity';
import { TgfplcEntity } from './tGFPLC.entity';
import { TgfpliEntity } from './tGFPLI.entity';
import { TgfpmaEntity } from './tGFPMA.entity';
import { TgfppaEntity } from './tGFPPA.entity';
import { TgfpplEntity } from './tGFPPL.entity';
import { TgfppzEntity } from './tGFPPZ.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfpsmEntity } from './tGFPSM.entity';
import { TgfptpEntity } from './tGFPTP.entity';
import { TgfratEntity } from './tGFRAT.entity';
import { TgfravEntity } from './tGFRAV.entity';
import { TgfrcfEntity } from './tGFRCF.entity';
import { TgfresEntity } from './tGFRES.entity';
import { TgfrocEntity } from './tGFROC.entity';
import { TgfrotEntity } from './tGFROT.entity';
import { TgfrpvEntity } from './tGFRPV.entity';
import { TgfrtpEntity } from './tGFRTP.entity';
import { TgfstmvEntity } from './tGFSTMV.entity';
import { TgftcfEntity } from './tGFTCF.entity';
import { TgftelEntity } from './tGFTEL.entity';
import { TgftfrEntity } from './tGFTFR.entity';
import { TgftitEntity } from './tGFTIT.entity';
import { TgftppEntity } from './tGFTPP.entity';
import { TgfunpEntity } from './tGFUNP.entity';
import { TgfvalpEntity } from './tGFVALP.entity';
import { TgfveiEntity } from './tGFVEI.entity';
import { TgfvenEntity } from './tGFVEN.entity';
import { TgfviagEntity } from './tGFVIAG.entity';
import { TgfvisEntity } from './tGFVIS.entity';
import { TgicabEntity } from './tGICAB.entity';
import { TgiiteEntity } from './tGIITE.entity';
import { TgikitEntity } from './tGIKIT.entity';
import { TgmcfgiEntity } from './tGMCFGI.entity';
import { TgpavrEntity } from './tGPAVR.entity';
import { TgprelEntity } from './tGPREL.entity';
import { TgpusuEntity } from './tGPUSU.entity';
import { TgvpepEntity } from './tGVPEP.entity';
import { TgvravEntity } from './tGVRAV.entity';
import { TgvresEntity } from './tGVRES.entity';
import { TgvrngEntity } from './tGVRNG.entity';
import { TgwageEntity } from './tGWAGE.entity';
import { TgwaxparEntity } from './tGWAXPAR.entity';
import { TgwcteEntity } from './tGWCTE.entity';
import { TgweplEntity } from './tGWEPL.entity';
import { TgwestEntity } from './tGWEST.entity';
import { TgwivrEntity } from './tGWIVR.entity';
import { TimapsEntity } from './tIMAPS.entity';
import { TimcarEntity } from './tIMCAR.entity';
import { TimcblEntity } from './tIMCBL.entity';
import { TimclcEntity } from './tIMCLC.entity';
import { TimcorEntity } from './tIMCOR.entity';
import { TimdtlEntity } from './tIMDTL.entity';
import { TimedgEntity } from './tIMEDG.entity';
import { TimimbEntity } from './tIMIMB.entity';
import { TimimpEntity } from './tIMIMP.entity';
import { TimirbEntity } from './tIMIRB.entity';
import { TimlcfEntity } from './tIMLCF.entity';
import { TimlclEntity } from './tIMLCL.entity';
import { TimlgsEntity } from './tIMLGS.entity';
import { TimltcEntity } from './tIMLTC.entity';
import { TimltpEntity } from './tIMLTP.entity';
import { TimlvcEntity } from './tIMLVC.entity';
import { TimmfdEntity } from './tIMMFD.entity';
import { TimprfEntity } from './tIMPRF.entity';
import { TimrclEntity } from './tIMRCL.entity';
import { TimrcmEntity } from './tIMRCM.entity';
import { TimsacEntity } from './tIMSAC.entity';
import { TimsgiEntity } from './tIMSGI.entity';
import { TimtnpEntity } from './tIMTNP.entity';
import { TimtvpEntity } from './tIMTVP.entity';
import { TimtxcEntity } from './tIMTXC.entity';
import { TimvdoEntity } from './tIMVDO.entity';
import { TjcapjEntity } from './tJCAPJ.entity';
import { TmscalocoEntity } from './tMSCALOCO.entity';
import { TmscmpEntity } from './tMSCMP.entity';
import { TmscmphistEntity } from './tMSCMPHIST.entity';
import { TmsfvgEntity } from './tMSFVG.entity';
import { TmsfvmEntity } from './tMSFVM.entity';
import { TmsnotasEntity } from './tMSNOTAS.entity';
import { TmsordcarregEntity } from './tMSORDCARREG.entity';
import { TmsparcredEntity } from './tMSPARCRED.entity';
import { TmspedrotEntity } from './tMSPEDROT.entity';
import { TpqpesEntity } from './tPQPES.entity';
import { TpqplaEntity } from './tPQPLA.entity';
import { TpqrpoEntity } from './tPQRPO.entity';
import { TpriatvEntity } from './tPRIATV.entity';
import { TprilopEntity } from './tPRILOP.entity';
import { TpriprocEntity } from './tPRIPROC.entity';
import { TprtlopEntity } from './tPRTLOP.entity';
import { TprtxatEntity } from './tPRTXAT.entity';
import { TprtxppEntity } from './tPRTXPP.entity';
import { TripparcEntity } from './tRIPPARC.entity';
import { TrsanuEntity } from './tRSANU.entity';
import { TrsreqEntity } from './tRSREQ.entity';
import { TsibaiEntity } from './tSIBAI.entity';
import { TsibcoEntity } from './tSIBCO.entity';
import { TsicarEntity } from './tSICAR.entity';
import { TsicidEntity } from './tSICID.entity';
import { TsictaEntity } from './tSICTA.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TsidisEntity } from './tSIDIS.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TsiendEntity } from './tSIEND.entity';
import { TsifatEntity } from './tSIFAT.entity';
import { TsilibEntity } from './tSILIB.entity';
import { TsilogftcEntity } from './tSILOGFTC.entity';
import { TsiobcEntity } from './tSIOBC.entity';
import { TsipaiEntity } from './tSIPAI.entity';
import { TsiregEntity } from './tSIREG.entity';
import { TsirtefEntity } from './tSIRTEF.entity';
import { TsiufsEntity } from './tSIUFS.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TwusuEntity } from './tWUSU.entity';

@Index('PK_TGFPAR', ['codparc'], { unique: true })
@Index('TGFPAR_I02', ['razaosocial'], {})
@Index('TGFPAR_I03', ['cgcCpf'], {})
@Index('TGFPAR_I04', ['codtabst'], {})
@Index('TGFPAR_I06', ['codcred'], {})
@Index('TGFPAR_I07', ['codparcmatriz'], {})
@Index('TGFPAR_I08', ['codgrupo'], {})
@Entity('TGFPAR', { schema: 'SANKHYA' })
export class TgfparEntity {
  @Column('int', { primary: true, name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @Column('varchar', { name: 'NOMEPARC', nullable: true, length: 80 })
  nomeparc: string | null;

  @Column('varchar', { name: 'RAZAOSOCIAL', nullable: true, length: 80 })
  razaosocial: string | null;

  @Column('char', { name: 'TIPPESSOA', length: 1 })
  tippessoa: string;

  @Column('int', { name: 'CODPARCMATRIZ', nullable: true })
  codparcmatriz: number | null;

  @Column('char', { name: 'NUMEND', nullable: true, length: 6 })
  numend: string | null;

  @Column('char', { name: 'COMPLEMENTO', nullable: true, length: 30 })
  complemento: string | null;

  @Column('char', { name: 'CEP', nullable: true, length: 8 })
  cep: string | null;

  @Column('char', { name: 'CAIXAPOSTAL', nullable: true, length: 10 })
  caixapostal: string | null;

  @Column('varchar', { name: 'TELEFONE', nullable: true, length: 13 })
  telefone: string | null;

  @Column('smallint', { name: 'RAMAL', nullable: true })
  ramal: number | null;

  @Column('varchar', { name: 'FAX', nullable: true, length: 13 })
  fax: string | null;

  @Column('char', { name: 'EMAIL', nullable: true, length: 80 })
  email: string | null;

  @Column('datetime', { name: 'DTCAD' })
  dtcad: Date;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('datetime', { name: 'DTNASC', nullable: true })
  dtnasc: Date | null;

  @Column('datetime', { name: 'DTULTCONTATO', nullable: true })
  dtultcontato: Date | null;

  @Column('datetime', { name: 'DTULTNEGOC', nullable: true })
  dtultnegoc: Date | null;

  @Column('char', { name: 'IDENTINSCESTAD', nullable: true, length: 16 })
  identinscestad: string | null;

  @Column('char', { name: 'INSCESTADNAUF', nullable: true, length: 16 })
  inscestadnauf: string | null;

  @Column('char', { name: 'CGC_CPF', nullable: true, length: 14 })
  cgcCpf: string | null;

  @Column('smallint', { name: 'PRAZOCONTATO', nullable: true })
  prazocontato: number | null;

  @Column('smallint', { name: 'PRAZOPAG', nullable: true })
  prazopag: number | null;

  @Column('smallint', { name: 'TOLERINADIMP', nullable: true })
  tolerinadimp: number | null;

  @Column('char', { name: 'CLIENTE', length: 1, default: () => "'S'" })
  cliente: string;

  @Column('char', { name: 'FORNECEDOR', length: 1, default: () => "'N'" })
  fornecedor: string;

  @Column('char', { name: 'TRANSPORTADORA', length: 1, default: () => "'N'" })
  transportadora: string;

  @Column('char', { name: 'VENDEDOR', length: 1, default: () => "'N'" })
  vendedor: string;

  @Column('char', { name: 'AGENCIA', length: 1, default: () => "'N'" })
  agencia: string;

  @Column('char', { name: 'CODCTABCO', nullable: true, length: 17 })
  codctabco: string | null;

  @Column('char', { name: 'CODAGE', nullable: true, length: 5 })
  codage: string | null;

  @Column('char', { name: 'NOMEAGE', nullable: true, length: 20 })
  nomeage: string | null;

  @Column('char', { name: 'CLASSIFICMS', nullable: true, length: 1 })
  classificms: string | null;

  @Column('char', { name: 'TARE', length: 1, default: () => "'N'" })
  tare: string;

  @Column('char', { name: 'IPIINCICMS', length: 1, default: () => "'N'" })
  ipiincicms: string;

  @Column('char', { name: 'RETEMISS', length: 1, default: () => "'N'" })
  retemiss: string;

  @Column('char', { name: 'RETEMINSS', length: 1, default: () => "'N'" })
  reteminss: string;

  @Column('char', { name: 'CONTACESSO', nullable: true, length: 30 })
  contacesso: string | null;

  @Column('char', {
    name: 'SITUACAO',
    nullable: true,
    length: 1,
    default: () => "'B'",
  })
  situacao: string | null;

  @Column('text', { name: 'OBSERVACOES', nullable: true })
  observacoes: string | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('int', { name: 'CODANT', nullable: true })
  codant: number | null;

  @Column('varchar', { name: 'GRUPOAUTOR', nullable: true, length: 30 })
  grupoautor: string | null;

  @Column('money', { name: 'LIMCRED', nullable: true })
  limcred: number | null;

  @Column('char', { name: 'BLOQUEAR', length: 1, default: () => "'N'" })
  bloquear: string;

  @Column('char', { name: 'SELECIONADO', nullable: true, length: 1 })
  selecionado: string | null;

  @Column('text', { name: 'MOTBLOQ', nullable: true })
  motbloq: string | null;

  @Column('char', {
    name: 'EVENDA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  evenda: string | null;

  @Column('char', {
    name: 'ECOMPRA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  ecompra: string | null;

  @Column('char', { name: 'HOMEPAGE', nullable: true, length: 255 })
  homepage: string | null;

  @Column('char', { name: 'CTAADIANT', length: 1, default: () => "'N'" })
  ctaadiant: string;

  @Column('char', { name: 'INSCMUN', nullable: true, length: 16 })
  inscmun: string | null;

  @Column('char', { name: 'CALCINSS', length: 1, default: () => "'N'" })
  calcinss: string;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('char', { name: 'RETEMPIS', length: 1, default: () => "'N'" })
  retempis: string;

  @Column('char', { name: 'RETEMCOFINS', length: 1, default: () => "'N'" })
  retemcofins: string;

  @Column('char', { name: 'RETEMCSL', length: 1, default: () => "'N'" })
  retemcsl: string;

  @Column('char', { name: 'USUARIO', length: 1, default: () => "'N'" })
  usuario: string;

  @Column('money', { name: 'LIMCREDMENSAL', nullable: true })
  limcredmensal: number | null;

  @Column('char', { name: 'CEI', nullable: true, length: 12 })
  cei: string | null;

  @Column('smallint', { name: 'CODTABST', nullable: true })
  codtabst: number | null;

  @Column('smallint', { name: 'QTDMAXTITVENCIDOS', nullable: true })
  qtdmaxtitvencidos: number | null;

  @Column('char', { name: 'TEMIPI', length: 1, default: () => "'S'" })
  temipi: string;

  @Column('char', {
    name: 'ALUNO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  aluno: string | null;

  @Column('char', {
    name: 'PROFESSOR',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  professor: string | null;

  @Column('float', { name: 'DESCFIN', nullable: true, precision: 53 })
  descfin: number | null;

  @Column('char', { name: 'DESCBONIF', length: 1, default: () => "'L'" })
  descbonif: string;

  @Column('char', { name: 'IMPLAUDOLOTE', length: 1, default: () => "'N'" })
  implaudolote: string;

  @Column('smallint', { name: 'DIASEM', nullable: true })
  diasem: number | null;

  @Column('char', { name: 'MEDICO', length: 1, default: () => "'N'" })
  medico: string;

  @Column('char', { name: 'TIPOFATUR', length: 1, default: () => "'L'" })
  tipofatur: string;

  @Column('smallint', { name: 'DIASVARPAGTO', nullable: true })
  diasvarpagto: number | null;

  @Column('char', { name: 'CODUNIMED', nullable: true, length: 17 })
  codunimed: string | null;

  @Column('int', { name: 'CODCRED', nullable: true })
  codcred: number | null;

  @Column('float', { name: 'PERCCUSVAR', nullable: true, precision: 53 })
  perccusvar: number | null;

  @Column('char', { name: 'MOTORISTA', length: 1, default: () => "'N'" })
  motorista: string;

  @Column('varchar', { name: 'NATUREZAOPERDES', nullable: true, length: 2 })
  naturezaoperdes: string | null;

  @Column('varchar', { name: 'SERIENFDES', nullable: true, length: 4 })
  serienfdes: string | null;

  @Column('varchar', { name: 'MODELONFDES', nullable: true, length: 2 })
  modelonfdes: string | null;

  @Column('char', { name: 'DESCSTIVA', length: 1, default: () => "'S'" })
  descstiva: string;

  @Column('smallint', { name: 'CSTIPIENT', nullable: true })
  cstipient: number | null;

  @Column('smallint', { name: 'CSTIPISAI', nullable: true })
  cstipisai: number | null;

  @Column('float', { name: 'VLRMINPEDCPA', nullable: true, precision: 53 })
  vlrminpedcpa: number | null;

  @Column('int', { name: 'QTDMAXPEDCPA', nullable: true })
  qtdmaxpedcpa: number | null;

  @Column('char', { name: 'OPERLOGIST', length: 1, default: () => "'N'" })
  operlogist: string;

  @Column('char', { name: 'AGRONOMO', length: 1, default: () => "'N'" })
  agronomo: string;

  @Column('char', { name: 'PRODUTORTEMNF', length: 1, default: () => "'S'" })
  produtortemnf: string;

  @Column('float', { name: 'POTENCIALNEG', nullable: true, precision: 53 })
  potencialneg: number | null;

  @Column('char', { name: 'ORDSUBST', nullable: true, length: 1 })
  ordsubst: string | null;

  @Column('float', { name: 'MAXCREDINDENIZ', nullable: true, precision: 53 })
  maxcredindeniz: number | null;

  @Column('float', { name: 'MAXDEBINDENIZ', nullable: true, precision: 53 })
  maxdebindeniz: number | null;

  @Column('float', { name: 'SALDOINDENIZ', nullable: true, precision: 53 })
  saldoindeniz: number | null;

  @Column('varchar', { name: 'FLEX', length: 1, default: () => "'S'" })
  flex: string;

  @Column('varchar', { name: 'SIMPLES', length: 1, default: () => "'N'" })
  simples: string;

  @Column('varchar', { name: 'EMAILNFE', nullable: true, length: 255 })
  emailnfe: string | null;

  @Column('varchar', { name: 'TIPANEXONFE', length: 1, default: () => "'X'" })
  tipanexonfe: string;

  @Column('varchar', { name: 'SEXO', nullable: true, length: 1 })
  sexo: string | null;

  @Column('int', { name: 'NURESPPERG', nullable: true })
  nurespperg: number | null;

  @Column('int', { name: 'NURESPPERGFECH', nullable: true })
  nuresppergfech: number | null;

  @Column('int', { name: 'CODCTACTB3', nullable: true })
  codctactb3: number | null;

  @Column('int', { name: 'CODCTACTB4', nullable: true })
  codctactb4: number | null;

  @Column('varchar', { name: 'AGRUPAR', nullable: true, length: 1 })
  agrupar: string | null;

  @Column('varchar', { name: 'EMAILDANFE', length: 1, default: () => "'N'" })
  emaildanfe: string;

  @Column('varchar', {
    name: 'VALDESCGRDCAR',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  valdescgrdcar: string | null;

  @Column('varchar', { name: 'AGRUPBOLEMPDIF', nullable: true, length: 1 })
  agrupbolempdif: string | null;

  @Column('float', { name: 'PERCREDINSS', nullable: true, precision: 53 })
  percredinss: number | null;

  @Column('char', { name: 'PERMITECORTE', length: 1, default: () => "'S'" })
  permitecorte: string;

  @Column('varchar', { name: 'INDNATRET', nullable: true, length: 2 })
  indnatret: string | null;

  @Column('varchar', { name: 'STATUSEDZ', length: 1, default: () => "'P'" })
  statusedz: string;

  @Column('varchar', { name: 'SITRECEITA', length: 1, default: () => "'I'" })
  sitreceita: string;

  @Column('varchar', { name: 'SITSINTEGRA', length: 1, default: () => "'I'" })
  sitsintegra: string;

  @Column('varchar', { name: 'SITCCF', length: 1, default: () => "'I'" })
  sitccf: string;

  @Column('varchar', { name: 'USATABCRFORN', length: 1, default: () => "'N'" })
  usatabcrforn: string;

  @Column('int', { name: 'QTDPEDPRZMED', nullable: true })
  qtdpedprzmed: number | null;

  @Column('int', { name: 'DIASPEDPRZMED', nullable: true })
  diaspedprzmed: number | null;

  @Column('char', { name: 'ARTPRECAD', length: 1, default: () => "'N'" })
  artprecad: string;

  @Column('char', { name: 'GERCTRCAUTO', length: 1, default: () => "'N'" })
  gerctrcauto: string;

  @Column('int', { name: 'CODLOCALPADRAO', default: () => '(0)' })
  codlocalpadrao: number;

  @Column('float', { name: 'SALDODISP', nullable: true, precision: 53 })
  saldodisp: number | null;

  @Column('float', { name: 'PROVACRESC', nullable: true, precision: 53 })
  provacresc: number | null;

  @Column('varchar', { name: 'EXIGELAUDOPRD', nullable: true, length: 1 })
  exigelaudoprd: string | null;

  @Column('char', {
    name: 'MEIRJ',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  meirj: string | null;

  @Column('char', {
    name: 'ENTREGAENDCONTATO',
    length: 1,
    default: () => "'N'",
  })
  entregaendcontato: string;

  @Column('char', { name: 'RETSTVENDA', length: 1, default: () => "'N'" })
  retstvenda: string;

  @Column('char', { name: 'TIPOGERBOLETO', length: 1, default: () => "'I'" })
  tipogerboleto: string;

  @Column('float', { name: 'PERCJURO', nullable: true, precision: 53 })
  percjuro: number | null;

  @Column('float', { name: 'PERCMULTA', nullable: true, precision: 53 })
  percmulta: number | null;

  @Column('char', { name: 'TIPJURO', nullable: true, length: 1 })
  tipjuro: string | null;

  @Column('float', { name: 'PERCDESCESPECIAL', nullable: true, precision: 53 })
  percdescespecial: number | null;

  @Column('varchar', { name: 'LATITUDE', nullable: true, length: 255 })
  latitude: string | null;

  @Column('varchar', { name: 'LONGITUDE', nullable: true, length: 255 })
  longitude: string | null;

  @Column('varchar', { name: 'SITESPECIALRESP', nullable: true, length: 2 })
  sitespecialresp: string | null;

  @Column('varchar', { name: 'MOTNAORETERISSQN', nullable: true, length: 2 })
  motnaoreterissqn: string | null;

  @Column('smallint', { name: 'SITCADSEFAZ', nullable: true })
  sitcadsefaz: number | null;

  @Column('datetime', { name: 'DHCADSEFAZ', nullable: true })
  dhcadsefaz: Date | null;

  @Column('float', { name: 'ALIQISSRETSIMPLES', nullable: true, precision: 53 })
  aliqissretsimples: number | null;

  @Column('varchar', { name: 'IDESTRANGEIRO', nullable: true, length: 20 })
  idestrangeiro: string | null;

  @Column('char', { name: 'TIPGERBOLCENT', nullable: true, length: 1 })
  tipgerbolcent: string | null;

  @Column('varchar', { name: 'COMOCONHECEU', nullable: true, length: 100 })
  comoconheceu: string | null;

  @Column('char', { name: 'TIPOGERBOLETODUP', length: 1, default: () => "'I'" })
  tipogerboletodup: string;

  @Column('char', { name: 'BOLDESTEMAIL', length: 1, default: () => "'A'" })
  boldestemail: string;

  @Column('smallint', { name: 'TPASSINANTE', nullable: true })
  tpassinante: number | null;

  @Column('char', { name: 'APLICLEITRANSP', length: 1, default: () => "'N'" })
  aplicleitransp: string;

  @Column('float', { name: 'VENDAMIN', nullable: true, precision: 53 })
  vendamin: number | null;

  @Column('smallint', { name: 'CODENQIPIENT', nullable: true })
  codenqipient: number | null;

  @Column('smallint', { name: 'CODENQIPISAI', nullable: true })
  codenqipisai: number | null;

  @Column('char', { name: 'ENVIPEDEMAILTOP', length: 1, default: () => "'A'" })
  envipedemailtop: string;

  @Column('char', { name: 'INTEGRAECONECT', length: 1, default: () => "'N'" })
  integraeconect: string;

  @Column('varchar', { name: 'SENHAECONECT', nullable: true, length: 32 })
  senhaeconect: string | null;

  @Column('varchar', { name: 'PRAZOPARCECONECT', nullable: true, length: 32 })
  prazoparceconect: string | null;

  @Column('smallint', { name: 'BASEPRAZOECONECT', default: () => '(0)' })
  baseprazoeconect: number;

  @Column('varchar', { name: 'PARCELAMECONECT', nullable: true, length: 32 })
  parcelameconect: string | null;

  @Column('smallint', { name: 'BASEPARCELECONECT', default: () => '(0)' })
  baseparceleconect: number;

  @Column('smallint', { name: 'DIAFECHAECONECT', nullable: true })
  diafechaeconect: number | null;

  @Column('smallint', { name: 'DIAPAGTOECONECT', nullable: true })
  diapagtoeconect: number | null;

  @Column('char', { name: 'PERFILECONECT', length: 1, default: () => "'B'" })
  perfileconect: string;

  @Column('datetime', { name: 'DTEMISNFEFORN', nullable: true })
  dtemisnfeforn: Date | null;

  @Column('char', { name: 'ESTABTRANSP', nullable: true, length: 1 })
  estabtransp: string | null;

  @Column('char', { name: 'TRANSPPROPRIA', nullable: true, length: 1 })
  transppropria: string | null;

  @Column('char', {
    name: 'TERMACORD',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  termacord: string | null;

  @Column('int', { name: 'INTERVANALISCRED', nullable: true })
  intervanaliscred: number | null;

  @Column('varchar', { name: 'INDCOMERCIALIZACAO', nullable: true, length: 5 })
  indcomercializacao: string | null;

  @Column('varchar', { name: 'INDAQUISICAO', nullable: true, length: 5 })
  indaquisicao: string | null;

  @Column('float', { name: 'MERCHANTID', nullable: true, precision: 53 })
  merchantid: number | null;

  @Column('varchar', { name: 'EMAILNOTIFENTREGA', nullable: true, length: 80 })
  emailnotifentrega: string | null;

  @Column('char', { name: 'IMPAGRUPFIN', nullable: true, length: 1 })
  impagrupfin: string | null;

  @Column('smallint', { name: 'TIPLOTACAO', nullable: true })
  tiplotacao: number | null;

  @Column('smallint', { name: 'UNIDIMPORT', nullable: true })
  unidimport: number | null;

  @Column('varchar', { name: 'ENQART227', nullable: true, length: 1 })
  enqart227: string | null;

  @Column('float', { name: 'LIMCHEQECONECT', nullable: true, precision: 53 })
  limcheqeconect: number | null;

  @Column('varchar', { name: 'ORGPUBLNFSE', nullable: true, length: 1 })
  orgpublnfse: string | null;

  @Column('char', { name: 'ASSOCIACAODESP', nullable: true, length: 1 })
  associacaodesp: string | null;

  @Column('int', { name: 'MODELONOTACOMPRA', nullable: true })
  modelonotacompra: number | null;

  @Column('varchar', {
    name: 'ARREDPRIMEIRAPARC',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  arredprimeiraparc: string | null;

  @Column('smallint', { name: 'SITCADRF', nullable: true })
  sitcadrf: number | null;

  @Column('datetime', { name: 'DHCADRF', nullable: true })
  dhcadrf: Date | null;

  @Column('varchar', { name: 'VLRLIQITEMNFE', nullable: true, length: 1 })
  vlrliqitemnfe: string | null;

  @Column('varchar', { name: 'VLRLIQITEMNFCE', nullable: true, length: 1 })
  vlrliqitemnfce: string | null;

  @Column('varchar', { name: 'CPFPRODRURAL', nullable: true, length: 11 })
  cpfprodrural: string | null;

  @Column('varchar', { name: 'EMAILNFSE', nullable: true, length: 255 })
  emailnfse: string | null;

  @Column('smallint', { name: 'NUFOP', nullable: true })
  nufop: number | null;

  @Column('varchar', { name: 'CNAE', nullable: true, length: 10 })
  cnae: string | null;

  @Column('smallint', { name: 'INDCREDNFE', nullable: true })
  indcrednfe: number | null;

  @Column('smallint', { name: 'INDCREDCTE', nullable: true })
  indcredcte: number | null;

  @Column('datetime', { name: 'DTINIATIV', nullable: true })
  dtiniativ: Date | null;

  @Column('datetime', { name: 'DTULTSIT', nullable: true })
  dtultsit: Date | null;

  @Column('datetime', { name: 'DTBAIXA', nullable: true })
  dtbaixa: Date | null;

  @Column('varchar', { name: 'REGAPUR', nullable: true, length: 50 })
  regapur: string | null;

  @Column('int', { name: 'CODGRUPO', nullable: true })
  codgrupo: number | null;

  @Column('varchar', { name: 'PARCINTER', nullable: true, length: 1 })
  parcinter: string | null;

  @Column('smallint', { name: 'INDOPCCP', nullable: true })
  indopccp: number | null;

  @Column('char', { name: 'TRUNCPARCELA', nullable: true, length: 1 })
  truncparcela: string | null;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;

  @Column('smallint', { name: 'CODCONTATOPADCOT', nullable: true })
  codcontatopadcot: number | null;

  @Column('char', {
    name: 'TIMESTADOCIVIL',
    nullable: true,
    length: 2,
    default: () => "'NI'",
  })
  timestadocivil: string | null;

  @Column('char', {
    name: 'TIMQUERCOMPRAR',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  timquercomprar: string | null;

  @Column('varchar', { name: 'TIMREFERENCIA02', nullable: true, length: 40 })
  timreferencia02: string | null;

  @Column('varchar', { name: 'TIMORGAO', nullable: true, length: 10 })
  timorgao: string | null;

  @Column('char', {
    name: 'TIMCOMPRADOR',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  timcomprador: string | null;

  @Column('int', { name: 'TIMBAIRROCOMPRA', nullable: true })
  timbairrocompra: number | null;

  @Column('datetime', { name: 'TIMDATACI', nullable: true })
  timdataci: Date | null;

  @Column('char', {
    name: 'TIMPROPVENDA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  timpropvenda: string | null;

  @Column('varchar', { name: 'TIMPAI', nullable: true, length: 50 })
  timpai: string | null;

  @Column('varchar', { name: 'TIMREFERENCIA01', nullable: true, length: 40 })
  timreferencia01: string | null;

  @Column('char', { name: 'TIMTIPOMORADIA', nullable: true, length: 2 })
  timtipomoradia: string | null;

  @Column('char', {
    name: 'TIMINQUILINO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  timinquilino: string | null;

  @Column('varchar', { name: 'TIMTELEFONE02', nullable: true, length: 30 })
  timtelefone02: string | null;

  @Column('char', {
    name: 'TIMPROPRIETA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  timproprieta: string | null;

  @Column('char', {
    name: 'TIMCORRESPBANCARIO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  timcorrespbancario: string | null;

  @Column('varchar', { name: 'TIMMAE', nullable: true, length: 50 })
  timmae: string | null;

  @Column('varchar', {
    name: 'TIMFAIXASALARIAL',
    nullable: true,
    length: 10,
    default: () => "'NI'",
  })
  timfaixasalarial: string | null;

  @Column('char', {
    name: 'TIMCORRETOR',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  timcorretor: string | null;

  @Column('text', { name: 'TIMOUTTELS', nullable: true })
  timouttels: string | null;

  @Column('varchar', { name: 'TIMTELEFONE01', nullable: true, length: 40 })
  timtelefone01: string | null;

  @Column('float', { name: 'TIMAINVESTIR', nullable: true, precision: 53 })
  timainvestir: number | null;

  @Column('char', {
    name: 'TIMFIADOR',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  timfiador: string | null;

  @Column('varchar', {
    name: 'TIMSENHASITE',
    nullable: true,
    length: 8,
    default: () => "'--'",
  })
  timsenhasite: string | null;

  @Column('varchar', {
    name: 'TIMSENHADESC',
    nullable: true,
    length: 8,
    default: () => "'--'",
  })
  timsenhadesc: string | null;

  @Column('varchar', { name: 'TIMCARTREGIMEBENSV', nullable: true, length: 3 })
  timcartregimebensv: string | null;

  @Column('varchar', { name: 'INSCRCNO', nullable: true, length: 12 })
  inscrcno: string | null;

  @Column('char', { name: 'PARCSUBSTISS', nullable: true, length: 1 })
  parcsubstiss: string | null;

  @Column('char', { name: 'EXIGCONTATOENTCAB', nullable: true, length: 1 })
  exigcontatoentcab: string | null;

  @Column('char', { name: 'ENVIADANFEREDESPACHO', nullable: true, length: 1 })
  enviadanferedespacho: string | null;

  @Column('varchar', { name: 'EXIGENOMEPARC', nullable: true, length: 1 })
  exigenomeparc: string | null;

  @Column('char', { name: 'CONSIDTOTITENSTRIB', nullable: true, length: 1 })
  considtotitenstrib: string | null;

  @Column('float', { name: 'SALDODISPCAC', nullable: true, precision: 53 })
  saldodispcac: number | null;

  @Column('float', { name: 'PROVACRESCCAC', nullable: true, precision: 53 })
  provacresccac: number | null;

  @Column('char', { name: 'ATUNUVERSAO', nullable: true, length: 1 })
  atunuversao: string | null;

  @Column('varchar', { name: 'DESCONSIDESCBASE', nullable: true, length: 1 })
  desconsidescbase: string | null;

  @Column('int', { name: 'CODIDENTCONS', nullable: true })
  codidentcons: number | null;

  @Column('varchar', { name: 'UTILIZANUCADPARC', nullable: true, length: 1 })
  utilizanucadparc: string | null;

  @Column('smallint', { name: 'TIPCLIENTESERVCOM', nullable: true })
  tipclienteservcom: number | null;

  @Column('varchar', { name: 'CHAVEPIX', nullable: true, length: 77 })
  chavepix: string | null;

  @Column('varchar', { name: 'TIPOTRANSPORTADOR', nullable: true, length: 10 })
  tipotransportador: string | null;

  @Column('varchar', { name: 'BLOQUEADO', nullable: true, length: 10 })
  bloqueado: string | null;

  @Column('varchar', { name: 'MOTIVOBLOQ', nullable: true, length: 3103 })
  motivobloq: string | null;

  @Column('varchar', { name: 'CENTRALCAD', nullable: true, length: 10 })
  centralcad: string | null;

  @Column('datetime', { name: 'DTVALRNTRC', nullable: true })
  dtvalrntrc: Date | null;

  @Column('varchar', { name: 'RNTRC', nullable: true, length: 100 })
  rntrc: string | null;

  @Column('int', { name: 'CODPARCSEG', nullable: true })
  codparcseg: number | null;

  @Column('varchar', { name: 'RESPONSAVELSEGURO', nullable: true, length: 100 })
  responsavelseguro: string | null;

  @Column('varchar', { name: 'APOLICE', nullable: true, length: 100 })
  apolice: string | null;

  @Column('varchar', { name: 'POSTO', nullable: true, length: 1 })
  posto: string | null;

  @Column('varchar', { name: 'AGREGADO', nullable: true, length: 1 })
  agregado: string | null;

  @Column('int', { name: 'QTDDEPENDENTES', nullable: true })
  qtddependentes: number | null;

  @Column('varchar', { name: 'IGNORASEGUROMOT', nullable: true, length: 10 })
  ignoraseguromot: string | null;

  @Column('int', { name: 'RGCODUFEXPEDICAO', nullable: true })
  rgcodufexpedicao: number | null;

  @Column('varchar', { name: 'EMISSORRG', nullable: true, length: 100 })
  emissorrg: string | null;

  @Column('datetime', { name: 'DTEMISAORG', nullable: true })
  dtemisaorg: Date | null;

  @Column('varchar', { name: 'USATDE', nullable: true, length: 10 })
  usatde: string | null;

  @Column('varchar', { name: 'OPERADORACELULAR', nullable: true, length: 10 })
  operadoracelular: string | null;

  @Column('varchar', { name: 'AD_EXIGEPEDCOMPRA', nullable: true, length: 10 })
  adExigepedcompra: string | null;

  @Column('int', { name: 'AD_CODPARCPIPE', nullable: true })
  adCodparcpipe: number | null;

  @Column('varchar', { name: 'EMAILCTE', nullable: true, length: 255 })
  emailcte: string | null;

  @Column('char', { name: 'CONSPARCADRCST', nullable: true, length: 1 })
  consparcadrcst: string | null;

  @Column('varchar', { name: 'DESCONSDESCINSS', nullable: true, length: 1 })
  desconsdescinss: string | null;

  @Column('varchar', { name: 'DEDUZIPIBCPISCF', nullable: true, length: 1 })
  deduzipibcpiscf: string | null;

  @Column('char', { name: 'CALCFETHAB', nullable: true, length: 1 })
  calcfethab: string | null;

  @Column('int', { name: 'GRUPOPISCOFINS', nullable: true })
  grupopiscofins: number | null;

  @Column('int', { name: 'AD_TXID', nullable: true })
  adTxid: number | null;

  @Column('int', { name: 'AD_OP', nullable: true })
  adOp: number | null;

  @Column('varchar', { name: 'REGISTROANS', nullable: true, length: 6 })
  registroans: string | null;

  @Column('char', { name: 'INAPLICPRODEPE', nullable: true, length: 1 })
  inaplicprodepe: string | null;

  @OneToMany(
    () => AdAcertoviagemEntity,
    (adAcertoviagemEntity) => adAcertoviagemEntity.codparc,
  )
  adAcertoviagems: AdAcertoviagemEntity[];

  @OneToMany(
    () => AdChamadoscorridasEntity,
    (adChamadoscorridasEntity) => adChamadoscorridasEntity.codparc,
  )
  adChamadoscorridas: AdChamadoscorridasEntity[];

  @OneToMany(() => AdComadmEntity, (adComadmEntity) => adComadmEntity.codparc)
  adComadms: AdComadmEntity[];

  @OneToMany(
    () => AdGeraoscomEntity,
    (adGeraoscomEntity) => adGeraoscomEntity.codparc,
  )
  adGeraoscoms: AdGeraoscomEntity[];

  @ManyToMany(() => AdCadhabEntity, (adCadhabEntity) => adCadhabEntity.tgfpars)
  @JoinTable({
    name: 'AD_TGFPARHAB',
    joinColumns: [{ name: 'CODPARC', referencedColumnName: 'codparc' }],
    inverseJoinColumns: [{ name: 'CODHAB', referencedColumnName: 'codhab' }],
    schema: 'SANKHYA',
  })
  adCadhabs: AdCadhabEntity[];

  @OneToMany(
    () => AdTsiusuhabEntity,
    (adTsiusuhabEntity) => adTsiusuhabEntity.codparc,
  )
  adTsiusuhabs: AdTsiusuhabEntity[];

  @OneToMany(() => AstreqEntity, (astreqEntity) => astreqEntity.codparc)
  astreqs: AstreqEntity[];

  @OneToMany(
    () => GfratendimentoclienteEntity,
    (gfratendimentoclienteEntity) => gfratendimentoclienteEntity.codparc,
  )
  gfratendimentoclientes: GfratendimentoclienteEntity[];

  @OneToMany(() => TcaaluEntity, (tcaaluEntity) => tcaaluEntity.codmae)
  tcaalus: TcaaluEntity[];

  @OneToMany(() => TcaaluEntity, (tcaaluEntity) => tcaaluEntity.codpai)
  tcaalus2: TcaaluEntity[];

  @OneToOne(() => TcaaluEntity, (tcaaluEntity) => tcaaluEntity.codparc2)
  tcaalu: TcaaluEntity;

  @OneToMany(() => TcaaluEntity, (tcaaluEntity) => tcaaluEntity.codresp)
  tcaalus3: TcaaluEntity[];

  @OneToMany(() => TcacpiEntity, (tcacpiEntity) => tcacpiEntity.codparc2)
  tcacpis: TcacpiEntity[];

  @OneToMany(() => TcadiaEntity, (tcadiaEntity) => tcadiaEntity.codparc)
  tcadias: TcadiaEntity[];

  @OneToMany(() => TcahpaEntity, (tcahpaEntity) => tcahpaEntity.codalu2)
  tcahpas: TcahpaEntity[];

  @OneToMany(() => TcamapEntity, (tcamapEntity) => tcamapEntity.codalu)
  tcamaps: TcamapEntity[];

  @OneToMany(() => TcamapEntity, (tcamapEntity) => tcamapEntity.codprof)
  tcamaps2: TcamapEntity[];

  @OneToMany(() => TcaremEntity, (tcaremEntity) => tcaremEntity.codparc)
  tcarems: TcaremEntity[];

  @OneToMany(
    () => TcbirpjnfretEntity,
    (tcbirpjnfretEntity) => tcbirpjnfretEntity.codparc,
  )
  tcbirpjnfrets: TcbirpjnfretEntity[];

  @OneToMany(() => TcbrelEntity, (tcbrelEntity) => tcbrelEntity.codparc2)
  tcbrels: TcbrelEntity[];

  @OneToMany(() => TcccomEntity, (tcccomEntity) => tcccomEntity.codparc2)
  tcccoms: TcccomEntity[];

  @OneToMany(() => TccconEntity, (tccconEntity) => tccconEntity.codparcfin)
  tcccons: TccconEntity[];

  @OneToMany(() => TcccorEntity, (tcccorEntity) => tcccorEntity.codparc2)
  tcccors: TcccorEntity[];

  @OneToMany(() => TcecabEntity, (tcecabEntity) => tcecabEntity.codparcimp)
  tcecabs: TcecabEntity[];

  @OneToMany(() => TcecabEntity, (tcecabEntity) => tcecabEntity.codparcnac)
  tcecabs2: TcecabEntity[];

  @OneToMany(() => TcecabEntity, (tcecabEntity) => tcecabEntity.codparctransp)
  tcecabs3: TcecabEntity[];

  @OneToMany(() => TcecabEntity, (tcecabEntity) => tcecabEntity.codparcagente)
  tcecabs4: TcecabEntity[];

  @OneToMany(() => TcecabEntity, (tcecabEntity) => tcecabEntity.codparcexp)
  tcecabs5: TcecabEntity[];

  @OneToMany(
    () => TcecabHisEntity,
    (tcecabHisEntity) => tcecabHisEntity.codparcagente,
  )
  tcecabHis: TcecabHisEntity[];

  @OneToMany(
    () => TcecabHisEntity,
    (tcecabHisEntity) => tcecabHisEntity.codparcexp,
  )
  tcecabHis2: TcecabHisEntity[];

  @OneToMany(
    () => TcecabHisEntity,
    (tcecabHisEntity) => tcecabHisEntity.codparcimp,
  )
  tcecabHis3: TcecabHisEntity[];

  @OneToMany(
    () => TcecabHisEntity,
    (tcecabHisEntity) => tcecabHisEntity.codparcnac,
  )
  tcecabHis4: TcecabHisEntity[];

  @OneToMany(
    () => TcecabHisEntity,
    (tcecabHisEntity) => tcecabHisEntity.codparctransp,
  )
  tcecabHis5: TcecabHisEntity[];

  @OneToMany(() => TcedespEntity, (tcedespEntity) => tcedespEntity.codparc)
  tcedesps: TcedespEntity[];

  @OneToMany(
    () => TcedespHisEntity,
    (tcedespHisEntity) => tcedespHisEntity.codparc,
  )
  tcedespHis: TcedespHisEntity[];

  @OneToMany(() => TceictnEntity, (tceictnEntity) => tceictnEntity.codparc)
  tceictns: TceictnEntity[];

  @OneToMany(() => TceiteEntity, (tceiteEntity) => tceiteEntity.codparcfab)
  tceites: TceiteEntity[];

  @OneToMany(
    () => TceiteHisEntity,
    (tceiteHisEntity) => tceiteHisEntity.codparcfab,
  )
  tceiteHis: TceiteHisEntity[];

  @OneToMany(() => TceratEntity, (tceratEntity) => tceratEntity.codparc2)
  tcerats: TceratEntity[];

  @OneToMany(
    () => TcfabtEntity,
    (tcfabtEntity) => tcfabtEntity.codparcmotorista,
  )
  tcfabts: TcfabtEntity[];

  @OneToMany(() => TcfabtEntity, (tcfabtEntity) => tcfabtEntity.codposto)
  tcfabts2: TcfabtEntity[];

  @OneToMany(() => TcfcptEntity, (tcfcptEntity) => tcfcptEntity.codparc)
  tcfcpts: TcfcptEntity[];

  @OneToMany(() => TcfcptEntity, (tcfcptEntity) => tcfcptEntity.codmotorista)
  tcfcpts2: TcfcptEntity[];

  @OneToMany(() => TcfcptEntity, (tcfcptEntity) => tcfcptEntity.codmotsaida)
  tcfcpts3: TcfcptEntity[];

  @OneToMany(() => TcfcptEntity, (tcfcptEntity) => tcfcptEntity.codusuresp)
  tcfcpts4: TcfcptEntity[];

  @OneToMany(() => TcfdocEntity, (tcfdocEntity) => tcfdocEntity.codparcseg)
  tcfdocs: TcfdocEntity[];

  @OneToMany(() => TcfdocEntity, (tcfdocEntity) => tcfdocEntity.codparc)
  tcfdocs2: TcfdocEntity[];

  @OneToMany(() => TcfdocEntity, (tcfdocEntity) => tcfdocEntity.codparcsegcarga)
  tcfdocs3: TcfdocEntity[];

  @OneToMany(() => TcfoscabEntity, (tcfoscabEntity) => tcfoscabEntity.codparc)
  tcfoscabs: TcfoscabEntity[];

  @OneToMany(
    () => TcfpnuhistEntity,
    (tcfpnuhistEntity) => tcfpnuhistEntity.codmotorista,
  )
  tcfpnuhists: TcfpnuhistEntity[];

  @OneToMany(() => TcsagfEntity, (tcsagfEntity) => tcsagfEntity.codparc2)
  tcsagfs: TcsagfEntity[];

  @OneToMany(() => TcsaltEntity, (tcsaltEntity) => tcsaltEntity.codparc2)
  tcsalts: TcsaltEntity[];

  @OneToMany(() => TcscomEntity, (tcscomEntity) => tcscomEntity.codparc2)
  tcscoms: TcscomEntity[];

  @OneToMany(() => TcsconEntity, (tcsconEntity) => tcsconEntity.codparc)
  tcscons: TcsconEntity[];

  @OneToMany(() => TcsconEntity, (tcsconEntity) => tcsconEntity.codparcprest)
  tcscons2: TcsconEntity[];

  @OneToMany(() => TcsconEntity, (tcsconEntity) => tcsconEntity.codparcsec)
  tcscons3: TcsconEntity[];

  @OneToMany(() => TcscpaEntity, (tcscpaEntity) => tcscpaEntity.codparc)
  tcscpas: TcscpaEntity[];

  @OneToMany(() => TcscprEntity, (tcscprEntity) => tcscprEntity.codforn)
  tcscprs: TcscprEntity[];

  @OneToMany(() => TcseagEntity, (tcseagEntity) => tcseagEntity.codparc)
  tcseags: TcseagEntity[];

  @OneToMany(() => TcseqpEntity, (tcseqpEntity) => tcseqpEntity.codparc)
  tcseqps: TcseqpEntity[];

  @OneToMany(() => TcsfapEntity, (tcsfapEntity) => tcsfapEntity.codparc2)
  tcsfaps: TcsfapEntity[];

  @OneToMany(() => TcsgecEntity, (tcsgecEntity) => tcsgecEntity.codparc2)
  tcsgecs: TcsgecEntity[];

  @OneToMany(() => TcsnhcEntity, (tcsnhcEntity) => tcsnhcEntity.codparc)
  tcsnhcs: TcsnhcEntity[];

  @OneToMany(() => TcsoccEntity, (tcsoccEntity) => tcsoccEntity.codparc)
  tcsoccs: TcsoccEntity[];

  @OneToMany(() => TcsoseEntity, (tcsoseEntity) => tcsoseEntity.codparcatend)
  tcsoses: TcsoseEntity[];

  @OneToMany(() => TcsoseEntity, (tcsoseEntity) => tcsoseEntity.codparc2)
  tcsoses2: TcsoseEntity[];

  @OneToMany(() => TcspapEntity, (tcspapEntity) => tcspapEntity.codparcb2B)
  tcspaps: TcspapEntity[];

  @OneToMany(() => TcspapEntity, (tcspapEntity) => tcspapEntity.codparc)
  tcspaps2: TcspapEntity[];

  @OneToMany(() => TcspscEntity, (tcspscEntity) => tcspscEntity.codparcpref)
  tcspscs: TcspscEntity[];

  @OneToMany(() => TfcanuEntity, (tfcanuEntity) => tfcanuEntity.codparc)
  tfcanus: TfcanuEntity[];

  @OneToMany(() => TfpambEntity, (tfpambEntity) => tfpambEntity.codparc)
  tfpambs: TfpambEntity[];

  @OneToMany(() => TfpbenEntity, (tfpbenEntity) => tfpbenEntity.codparc)
  tfpbens: TfpbenEntity[];

  @OneToMany(() => TfpcomEntity, (tfpcomEntity) => tfpcomEntity.codparc2)
  tfpcoms: TfpcomEntity[];

  @OneToMany(() => TfpdedEntity, (tfpdedEntity) => tfpdedEntity.codparc2)
  tfpdeds: TfpdedEntity[];

  @OneToMany(() => TfpdepEntity, (tfpdepEntity) => tfpdepEntity.codparc)
  tfpdeps: TfpdepEntity[];

  @OneToMany(() => TfpfinEntity, (tfpfinEntity) => tfpfinEntity.codparc)
  tfpfins: TfpfinEntity[];

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.codtomador)
  tfpfuns: TfpfunEntity[];

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.codparc)
  tfpfuns2: TfpfunEntity[];

  @OneToMany(() => TfpgpsEntity, (tfpgpsEntity) => tfpgpsEntity.codparc2)
  tfpgps: TfpgpsEntity[];

  @OneToMany(() => TfpgtfEntity, (tfpgtfEntity) => tfpgtfEntity.codparc2)
  tfpgtfs: TfpgtfEntity[];

  @OneToMany(() => TfphdeEntity, (tfphdeEntity) => tfphdeEntity.codparc)
  tfphdes: TfphdeEntity[];

  @OneToMany(() => TfpscpEntity, (tfpscpEntity) => tfpscpEntity.codparc2)
  tfpscps: TfpscpEntity[];

  @OneToMany(() => TfpsinEntity, (tfpsinEntity) => tfpsinEntity.codparc)
  tfpsins: TfpsinEntity[];

  @OneToMany(() => TfptmeEntity, (tfptmeEntity) => tfptmeEntity.codparc2)
  tfptmes: TfptmeEntity[];

  @OneToMany(() => TfptomEntity, (tfptomEntity) => tfptomEntity.codparc2)
  tfptoms: TfptomEntity[];

  @OneToMany(() => TgaahEntity, (tgaahEntity) => tgaahEntity.codparcalim)
  tgaahs: TgaahEntity[];

  @OneToMany(() => TgaahiEntity, (tgaahiEntity) => tgaahiEntity.codparc)
  tgaahis: TgaahiEntity[];

  @OneToMany(() => TgaareEntity, (tgaareEntity) => tgaareEntity.codparc2)
  tgaares: TgaareEntity[];

  @OneToMany(() => TgaartEntity, (tgaartEntity) => tgaartEntity.agronomo)
  tgaarts: TgaartEntity[];

  @OneToMany(() => TgaavaEntity, (tgaavaEntity) => tgaavaEntity.codparc2)
  tgaavas: TgaavaEntity[];

  @OneToMany(() => TgabemEntity, (tgabemEntity) => tgabemEntity.codparc2)
  tgabems: TgabemEntity[];

  @OneToMany(() => TgaculEntity, (tgaculEntity) => tgaculEntity.codparcagron)
  tgaculs: TgaculEntity[];

  @OneToMany(() => TgaculEntity, (tgaculEntity) => tgaculEntity.codparc2)
  tgaculs2: TgaculEntity[];

  @OneToMany(() => TgadivEntity, (tgadivEntity) => tgadivEntity.codparc2)
  tgadivs: TgadivEntity[];

  @OneToMany(() => TgadivEntity, (tgadivEntity) => tgadivEntity.codparccred)
  tgadivs2: TgadivEntity[];

  @OneToMany(() => TgaemiEntity, (tgaemiEntity) => tgaemiEntity.codparc2)
  tgaemis: TgaemiEntity[];

  @OneToMany(() => TgagarEntity, (tgagarEntity) => tgagarEntity.codparc)
  tgagars: TgagarEntity[];

  @OneToMany(() => TgagtEntity, (tgagtEntity) => tgagtEntity.codparc)
  tgagts2: TgagtEntity[];

  @OneToMany(() => TgagtmEntity, (tgagtmEntity) => tgagtmEntity.codparc2)
  tgagtms: TgagtmEntity[];

  @OneToMany(() => TgagtsEntity, (tgagtsEntity) => tgagtsEntity.codparc2)
  tgagts: TgagtsEntity[];

  @OneToMany(() => TgainsEntity, (tgainsEntity) => tgainsEntity.codparc2)
  tgains: TgainsEntity[];

  @OneToMany(() => TgamovEntity, (tgamovEntity) => tgamovEntity.codparc)
  tgamovs: TgamovEntity[];

  @OneToMany(() => TgapatEntity, (tgapatEntity) => tgapatEntity.codparc)
  tgapats: TgapatEntity[];

  @OneToMany(() => TgapatEntity, (tgapatEntity) => tgapatEntity.codmotorista)
  tgapats2: TgapatEntity[];

  @OneToMany(() => TgapcaEntity, (tgapcaEntity) => tgapcaEntity.codparctransp)
  tgapcas: TgapcaEntity[];

  @OneToMany(() => TgapeaEntity, (tgapeaEntity) => tgapeaEntity.codparc)
  tgapeas: TgapeaEntity[];

  @OneToMany(() => TgapesiEntity, (tgapesiEntity) => tgapesiEntity.codparc)
  tgapesis: TgapesiEntity[];

  @OneToMany(() => TgarecEntity, (tgarecEntity) => tgarecEntity.codparc2)
  tgarecs: TgarecEntity[];

  @OneToMany(() => TgarecEntity, (tgarecEntity) => tgarecEntity.codparcterc2)
  tgarecs2: TgarecEntity[];

  @OneToMany(() => TgariEntity, (tgariEntity) => tgariEntity.codparc2)
  tgaris: TgariEntity[];

  @OneToMany(() => TgasalEntity, (tgasalEntity) => tgasalEntity.codparc2)
  tgasals: TgasalEntity[];

  @OneToMany(() => TgatriEntity, (tgatriEntity) => tgatriEntity.codparc)
  tgatris: TgatriEntity[];

  @OneToMany(() => TgccalEntity, (tgccalEntity) => tgccalEntity.codparc2)
  tgccals: TgccalEntity[];

  @OneToMany(() => TgcparEntity, (tgcparEntity) => tgcparEntity.codparc2)
  tgcpars: TgcparEntity[];

  @OneToMany(() => TgfaaxnEntity, (tgfaaxnEntity) => tgfaaxnEntity.codparc2)
  tgfaaxns: TgfaaxnEntity[];

  @OneToMany(() => TgfaaxnmEntity, (tgfaaxnmEntity) => tgfaaxnmEntity.codparc2)
  tgfaaxnms: TgfaaxnmEntity[];

  @OneToMany(() => TgfacoEntity, (tgfacoEntity) => tgfacoEntity.codparctransp)
  tgfacos: TgfacoEntity[];

  @OneToMany(() => TgfacoEntity, (tgfacoEntity) => tgfacoEntity.codparc)
  tgfacos2: TgfacoEntity[];

  @OneToMany(() => TgfaepEntity, (tgfaepEntity) => tgfaepEntity.codparc2)
  tgfaeps: TgfaepEntity[];

  @OneToMany(() => TgfagdEntity, (tgfagdEntity) => tgfagdEntity.codparc)
  tgfagds: TgfagdEntity[];

  @OneToMany(() => TgfalvEntity, (tgfalvEntity) => tgfalvEntity.codparc2)
  tgfalvs: TgfalvEntity[];

  @OneToMany(() => TgfasaEntity, (tgfasaEntity) => tgfasaEntity.codparc)
  tgfasas: TgfasaEntity[];

  @ManyToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfpars)
  tgfcabs: TgfcabEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.codinterm)
  tgfcabs2: TgfcabEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.codmotorista2)
  tgfcabs3: TgfcabEntity[];

  @OneToMany(
    () => TgfcabEntity,
    (tgfcabEntity) => tgfcabEntity.codparctranspfinal,
  )
  tgfcabs4: TgfcabEntity[];

  @OneToMany(
    () => TgfcabEntity,
    (tgfcabEntity) => tgfcabEntity.codparcdescargamdfe,
  )
  tgfcabs5: TgfcabEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.codparctransp2)
  tgfcabs6: TgfcabEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.codparc2)
  tgfcabs7: TgfcabEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.codparcdest)
  tgfcabs8: TgfcabEntity[];

  @OneToMany(
    () => TgfcabExcEntity,
    (tgfcabExcEntity) => tgfcabExcEntity.codinterm,
  )
  tgfcabExcs: TgfcabExcEntity[];

  @OneToMany(
    () => TgfcabExcEntity,
    (tgfcabExcEntity) => tgfcabExcEntity.codparctranspfinal,
  )
  tgfcabExcs2: TgfcabExcEntity[];

  @OneToMany(() => TgfcajaEntity, (tgfcajaEntity) => tgfcajaEntity.filcodparc)
  tgfcajas: TgfcajaEntity[];

  @OneToMany(() => TgfcasEntity, (tgfcasEntity) => tgfcasEntity.codparc)
  tgfcas: TgfcasEntity[];

  @OneToMany(
    () => Tgfcat42R0150Entity,
    (tgfcat42R0150Entity) => tgfcat42R0150Entity.codparc2,
  )
  tgfcat42R0s: Tgfcat42R0150Entity[];

  @OneToMany(
    () => Tgfcat42R1200Entity,
    (tgfcat42R1200Entity) => tgfcat42R1200Entity.codparc,
  )
  tgfcat42R1s: Tgfcat42R1200Entity[];

  @OneToMany(() => TgfccrEntity, (tgfccrEntity) => tgfccrEntity.codparc)
  tgfccrs: TgfccrEntity[];

  @OneToMany(() => TgfcfiEntity, (tgfcfiEntity) => tgfcfiEntity.codparc2)
  tgfcfis: TgfcfiEntity[];

  @ManyToMany(() => TgfcfrEntity, (tgfcfrEntity) => tgfcfrEntity.tgfpars)
  tgfcfrs: TgfcfrEntity[];

  @OneToMany(() => TgfciotEntity, (tgfciotEntity) => tgfciotEntity.codparcciot)
  tgfciots: TgfciotEntity[];

  @OneToMany(() => TgfclxEntity, (tgfclxEntity) => tgfclxEntity.codparc)
  tgfclxes: TgfclxEntity[];

  @OneToMany(
    () => TgfcontrEntity,
    (tgfcontrEntity) => tgfcontrEntity.codparccontr2,
  )
  tgfcontrs: TgfcontrEntity[];

  @OneToMany(() => TgfcpcEntity, (tgfcpcEntity) => tgfcpcEntity.codparc2)
  tgfcpcs: TgfcpcEntity[];

  @OneToOne(() => TgfcplEntity, (tgfcplEntity) => tgfcplEntity.codparc2)
  tgfcpl: TgfcplEntity;

  @OneToMany(() => TgfcplEntity, (tgfcplEntity) => tgfcplEntity.codparctransp)
  tgfcpls: TgfcplEntity[];

  @OneToMany(() => TgfcppEntity, (tgfcppEntity) => tgfcppEntity.codparc2)
  tgfcpps: TgfcppEntity[];

  @OneToOne(
    () => TgfcredcliEntity,
    (tgfcredcliEntity) => tgfcredcliEntity.codcliente2,
  )
  tgfcredcli: TgfcredcliEntity;

  @OneToMany(
    () => TgfcredcliEntity,
    (tgfcredcliEntity) => tgfcredcliEntity.conjuge,
  )
  tgfcredclis: TgfcredcliEntity[];

  @OneToMany(() => TgfcrtEntity, (tgfcrtEntity) => tgfcrtEntity.codparc2)
  tgfcrts: TgfcrtEntity[];

  @OneToMany(() => TgfcszEntity, (tgfcszEntity) => tgfcszEntity.codparc2)
  tgfcszs: TgfcszEntity[];

  @OneToMany(() => TgfcteEntity, (tgfcteEntity) => tgfcteEntity.codparc2)
  tgfctes: TgfcteEntity[];

  @OneToMany(() => TgfctfEntity, (tgfctfEntity) => tgfctfEntity.codparc)
  tgfctfs: TgfctfEntity[];

  @OneToMany(() => TgfcttEntity, (tgfcttEntity) => tgfcttEntity.codparc2)
  tgfctts: TgfcttEntity[];

  @OneToMany(() => TgfcttEntity, (tgfcttEntity) => tgfcttEntity.codparccad)
  tgfctts2: TgfcttEntity[];

  @OneToMany(() => TgfcvnEntity, (tgfcvnEntity) => tgfcvnEntity.codparc)
  tgfcvns: TgfcvnEntity[];

  @OneToMany(() => TgfdantEntity, (tgfdantEntity) => tgfdantEntity.codparc)
  tgfdants: TgfdantEntity[];

  @OneToMany(
    () => TgfdctfparEntity,
    (tgfdctfparEntity) => tgfdctfparEntity.codparc2,
  )
  tgfdctfpars: TgfdctfparEntity[];

  @OneToMany(() => TgfdfpEntity, (tgfdfpEntity) => tgfdfpEntity.codparc2)
  tgfdfps: TgfdfpEntity[];

  @OneToMany(() => TgfdnpEntity, (tgfdnpEntity) => tgfdnpEntity.codparc2)
  tgfdnps: TgfdnpEntity[];

  @OneToMany(() => TgfembEntity, (tgfembEntity) => tgfembEntity.codparc)
  tgfembs: TgfembEntity[];

  @OneToMany(() => TgfemdfEntity, (tgfemdfEntity) => tgfemdfEntity.codmotorista)
  tgfemdfs: TgfemdfEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.codparcctb)
  tgfemps: TgfempEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.codparcnfce)
  tgfemps2: TgfempEntity[];

  @OneToMany(() => TgfestEntity, (tgfestEntity) => tgfestEntity.codparc2)
  tgfests: TgfestEntity[];

  @OneToMany(() => TgffdicEntity, (tgffdicEntity) => tgffdicEntity.codparc)
  tgffdics: TgffdicEntity[];

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.adCodparc)
  tgffins: TgffinEntity[];

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.codparc2)
  tgffins2: TgffinEntity[];

  @OneToMany(() => TgffpiEntity, (tgffpiEntity) => tgffpiEntity.codparc)
  tgffpis: TgffpiEntity[];

  @OneToMany(() => TgffrcEntity, (tgffrcEntity) => tgffrcEntity.codparc2)
  tgffrcs: TgffrcEntity[];

  @OneToMany(() => TgffrcEntity, (tgffrcEntity) => tgffrcEntity.codparctransp)
  tgffrcs2: TgffrcEntity[];

  @OneToMany(() => TgfftcEntity, (tgfftcEntity) => tgfftcEntity.codparc)
  tgfftcs: TgfftcEntity[];

  @OneToMany(() => TgfgirEntity, (tgfgirEntity) => tgfgirEntity.codparcforn)
  tgfgirs: TgfgirEntity[];

  @OneToMany(() => TgfgvpEntity, (tgfgvpEntity) => tgfgvpEntity.codparcapu)
  tgfgvps: TgfgvpEntity[];

  @OneToMany(() => TgfgvpEntity, (tgfgvpEntity) => tgfgvpEntity.codparc)
  tgfgvps2: TgfgvpEntity[];

  @OneToMany(() => TgfiesEntity, (tgfiesEntity) => tgfiesEntity.codparc2)
  tgfies: TgfiesEntity[];

  @OneToMany(() => TgfifcEntity, (tgfifcEntity) => tgfifcEntity.codparclojista)
  tgfifcs: TgfifcEntity[];

  @OneToMany(() => TgfifeEntity, (tgfifeEntity) => tgfifeEntity.codparc2)
  tgfifes: TgfifeEntity[];

  @OneToMany(() => TgfigaEntity, (tgfigaEntity) => tgfigaEntity.codparc)
  tgfigas: TgfigaEntity[];

  @OneToMany(
    () => TgfinssrefEntity,
    (tgfinssrefEntity) => tgfinssrefEntity.codparc2,
  )
  tgfinssrefs: TgfinssrefEntity[];

  @OneToMany(() => TgfisuEntity, (tgfisuEntity) => tgfisuEntity.codparc2)
  tgfisus: TgfisuEntity[];

  @OneToMany(() => TgfitcEntity, (tgfitcEntity) => tgfitcEntity.codparcdest)
  tgfitcs: TgfitcEntity[];

  @OneToMany(() => TgfitcEntity, (tgfitcEntity) => tgfitcEntity.codparc2)
  tgfitcs2: TgfitcEntity[];

  @OneToMany(() => TgfitdEntity, (tgfitdEntity) => tgfitdEntity.codparc2)
  tgfitds: TgfitdEntity[];

  @OneToMany(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.codparcexec)
  tgfites: TgfiteEntity[];

  @OneToMany(
    () => TgfixnEntity,
    (tgfixnEntity) => tgfixnEntity.codparcentregacte,
  )
  tgfixns: TgfixnEntity[];

  @OneToMany(
    () => TgfixnEntity,
    (tgfixnEntity) => tgfixnEntity.codparccoletacte,
  )
  tgfixns2: TgfixnEntity[];

  @OneToMany(() => TgflcdprEntity, (tgflcdprEntity) => tgflcdprEntity.codparc2)
  tgflcdprs: TgflcdprEntity[];

  @OneToMany(
    () => Tgflcdprr0000Entity,
    (tgflcdprr0000Entity) => tgflcdprr0000Entity.codparc2,
  )
  tgflcdprr0s: Tgflcdprr0000Entity[];

  @OneToMany(
    () => Tgflcdprr0010Entity,
    (tgflcdprr0010Entity) => tgflcdprr0010Entity.codparc2,
  )
  tgflcdprr0s2: Tgflcdprr0010Entity[];

  @OneToMany(
    () => Tgflcdprr0030Entity,
    (tgflcdprr0030Entity) => tgflcdprr0030Entity.codparc2,
  )
  tgflcdprr0s3: Tgflcdprr0030Entity[];

  @OneToMany(
    () => Tgflcdprr0040Entity,
    (tgflcdprr0040Entity) => tgflcdprr0040Entity.codparc2,
  )
  tgflcdprr0s4: Tgflcdprr0040Entity[];

  @OneToMany(
    () => Tgflcdprr0045Entity,
    (tgflcdprr0045Entity) => tgflcdprr0045Entity.codparc2,
  )
  tgflcdprr0s5: Tgflcdprr0045Entity[];

  @OneToMany(
    () => Tgflcdprr0050Entity,
    (tgflcdprr0050Entity) => tgflcdprr0050Entity.codparc2,
  )
  tgflcdprr0s6: Tgflcdprr0050Entity[];

  @OneToMany(
    () => Tgflcdprr9999Entity,
    (tgflcdprr9999Entity) => tgflcdprr9999Entity.codparc2,
  )
  tgflcdprr9s: Tgflcdprr9999Entity[];

  @OneToMany(
    () => Tgflcdprrq100Entity,
    (tgflcdprrq100Entity) => tgflcdprrq100Entity.codparc2,
  )
  tgflcdprrqs: Tgflcdprrq100Entity[];

  @OneToMany(
    () => Tgflcdprrq200Entity,
    (tgflcdprrq200Entity) => tgflcdprrq200Entity.codparc2,
  )
  tgflcdprrqs2: Tgflcdprrq200Entity[];

  @OneToMany(
    () => TgflcdprtercEntity,
    (tgflcdprtercEntity) => tgflcdprtercEntity.codparc2,
  )
  tgflcdprtercs: TgflcdprtercEntity[];

  @OneToMany(() => TgflcpEntity, (tgflcpEntity) => tgflcpEntity.codparc2)
  tgflcps: TgflcpEntity[];

  @OneToMany(
    () => TgflcrEntity,
    (tgflcrEntity) => tgflcrEntity.codparcretirada2,
  )
  tgflcrs: TgflcrEntity[];

  @OneToMany(() => TgflisEntity, (tgflisEntity) => tgflisEntity.codparc)
  tgflis: TgflisEntity[];

  @OneToMany(() => TgflocEntity, (tgflocEntity) => tgflocEntity.codparc)
  tgflocs: TgflocEntity[];

  @OneToMany(() => TgflseEntity, (tgflseEntity) => tgflseEntity.codparc)
  tgflses: TgflseEntity[];

  @OneToMany(
    () => TgfmdfesegEntity,
    (tgfmdfesegEntity) => tgfmdfesegEntity.codparcseg,
  )
  tgfmdfesegs: TgfmdfesegEntity[];

  @OneToMany(
    () => TgfmdfesegEntity,
    (tgfmdfesegEntity) => tgfmdfesegEntity.codparcrespseg,
  )
  tgfmdfesegs2: TgfmdfesegEntity[];

  @OneToMany(
    () => TgfmdfevalpEntity,
    (tgfmdfevalpEntity) => tgfmdfevalpEntity.codparcpag,
  )
  tgfmdfevalps: TgfmdfevalpEntity[];

  @OneToMany(
    () => TgfmdfevalpEntity,
    (tgfmdfevalpEntity) => tgfmdfevalpEntity.codparcforn,
  )
  tgfmdfevalps2: TgfmdfevalpEntity[];

  @OneToMany(
    () => TgfmdfpgfreEntity,
    (tgfmdfpgfreEntity) => tgfmdfpgfreEntity.codparc,
  )
  tgfmdfpgfres: TgfmdfpgfreEntity[];

  @OneToMany(
    () => TgfmdfpgfreEntity,
    (tgfmdfpgfreEntity) => tgfmdfpgfreEntity.codparcintpgfre,
  )
  tgfmdfpgfres2: TgfmdfpgfreEntity[];

  @OneToMany(() => TgfmeqEntity, (tgfmeqEntity) => tgfmeqEntity.codparc)
  tgfmeqs: TgfmeqEntity[];

  @ManyToMany(() => TgfviagEntity, (tgfviagEntity) => tgfviagEntity.tgfpars)
  tgfviags: TgfviagEntity[];

  @OneToMany(() => TgfmmsEntity, (tgfmmsEntity) => tgfmmsEntity.codparc2)
  tgfmms: TgfmmsEntity[];

  @OneToMany(() => TgfmopEntity, (tgfmopEntity) => tgfmopEntity.codparc)
  tgfmops: TgfmopEntity[];

  @OneToMany(() => TgfmotEntity, (tgfmotEntity) => tgfmotEntity.codparc)
  tgfmots: TgfmotEntity[];

  @OneToMany(
    () => TgfmppEntity,
    (tgfmppEntity) => tgfmppEntity.codparcmotorista2,
  )
  tgfmpps: TgfmppEntity[];

  @OneToMany(() => TgfmppEntity, (tgfmppEntity) => tgfmppEntity.codparc2)
  tgfmpps2: TgfmppEntity[];

  @OneToMany(() => TgfmstEntity, (tgfmstEntity) => tgfmstEntity.codparc2)
  tgfmsts: TgfmstEntity[];

  @OneToMany(() => TgfnceEntity, (tgfnceEntity) => tgfnceEntity.codparc)
  tgfnces: TgfnceEntity[];

  @OneToMany(() => TgfnscEntity, (tgfnscEntity) => tgfnscEntity.codparc)
  tgfnscs: TgfnscEntity[];

  @OneToMany(() => TgfodpEntity, (tgfodpEntity) => tgfodpEntity.codparctransp)
  tgfodps: TgfodpEntity[];

  @OneToMany(
    () => TgfordEntity,
    (tgfordEntity) => tgfordEntity.codparcmotorista,
  )
  tgfords: TgfordEntity[];

  @OneToMany(() => TgfordEntity, (tgfordEntity) => tgfordEntity.codparctransp)
  tgfords2: TgfordEntity[];

  @OneToMany(() => TgfordEntity, (tgfordEntity) => tgfordEntity.codparccli)
  tgfords3: TgfordEntity[];

  @OneToMany(() => TgfordEntity, (tgfordEntity) => tgfordEntity.codparccol)
  tgfords4: TgfordEntity[];

  @OneToMany(() => TgfordEntity, (tgfordEntity) => tgfordEntity.codparcpedag)
  tgfords5: TgfordEntity[];

  @OneToMany(() => TgfordEntity, (tgfordEntity) => tgfordEntity.codparcent)
  tgfords6: TgfordEntity[];

  @OneToMany(() => TgfordEntity, (tgfordEntity) => tgfordEntity.codparcrem)
  tgfords7: TgfordEntity[];

  @OneToMany(() => TgfordEntity, (tgfordEntity) => tgfordEntity.codparcdest)
  tgfords8: TgfordEntity[];

  @OneToMany(() => TgfordEntity, (tgfordEntity) => tgfordEntity.codparcorig)
  tgfords9: TgfordEntity[];

  @OneToMany(() => TgfpaemEntity, (tgfpaemEntity) => tgfpaemEntity.codparc2)
  tgfpaems: TgfpaemEntity[];

  @OneToMany(() => TgfpapEntity, (tgfpapEntity) => tgfpapEntity.codparc2)
  tgfpaps: TgfpapEntity[];

  @ManyToOne(() => TgfrotEntity, (tgfrotEntity) => tgfrotEntity.tgfpars)
  @JoinColumn([{ name: 'CODROTA', referencedColumnName: 'codrota' }])
  codrota: TgfrotEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tgfpars)
  @JoinColumn([{ name: 'CODCTACTB2', referencedColumnName: 'codctactb' }])
  codctactb: TcbplaEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tgfpars2)
  @JoinColumn([{ name: 'CODCTACTB', referencedColumnName: 'codctactb' }])
  codctactb2: TcbplaEntity;

  @ManyToOne(() => AdCadhabEntity, (adCadhabEntity) => adCadhabEntity.tgfpars2)
  @JoinColumn([{ name: 'AD_CODHAB', referencedColumnName: 'codhab' }])
  adCodhab: AdCadhabEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfpars)
  @JoinColumn([{ name: 'CODUSUCOBR', referencedColumnName: 'codusu' }])
  codusucobr: TsiusuEntity;

  @ManyToOne(() => TgccredEntity, (tgccredEntity) => tgccredEntity.tgfpars)
  @JoinColumn([{ name: 'CODCRED', referencedColumnName: 'codcred' }])
  codcred2: TgccredEntity;

  @ManyToOne(() => TimprfEntity, (timprfEntity) => timprfEntity.tgfpars)
  @JoinColumn([{ name: 'TIMPROFISSAO', referencedColumnName: 'prfcodigo' }])
  timprofissao: TimprfEntity;

  @ManyToOne(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.tgfpars)
  @JoinColumn([{ name: 'CODVEND', referencedColumnName: 'codvend' }])
  codvend: TgfvenEntity;

  @ManyToOne(() => TsirtefEntity, (tsirtefEntity) => tsirtefEntity.tgfpars)
  @JoinColumn([{ name: 'REDE', referencedColumnName: 'rede' }])
  rede: TsirtefEntity;

  @ManyToOne(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.tgfpars2)
  @JoinColumn([{ name: 'CODASSESSOR', referencedColumnName: 'codvend' }])
  codassessor: TgfvenEntity;

  @ManyToOne(() => TimcarEntity, (timcarEntity) => timcarEntity.tgfpars)
  @JoinColumn([{ name: 'TIMCARTORIO', referencedColumnName: 'carcodigo' }])
  timcartorio: TimcarEntity;

  @ManyToOne(() => TgfntaEntity, (tgfntaEntity) => tgfntaEntity.tgfpars)
  @JoinColumn([{ name: 'CODTAB', referencedColumnName: 'codtab' }])
  codtab: TgfntaEntity;

  @ManyToOne(() => TgfntaEntity, (tgfntaEntity) => tgfntaEntity.tgfpars2)
  @JoinColumn([{ name: 'CODTABST', referencedColumnName: 'codtab' }])
  codtabst2: TgfntaEntity;

  @ManyToOne(() => TgfgcbEntity, (tgfgcbEntity) => tgfgcbEntity.tgfpars)
  @JoinColumn([{ name: 'CODGRUPO', referencedColumnName: 'codgrupo' }])
  codgrupo2: TgfgcbEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tgfpars)
  @JoinColumn([{ name: 'CODCID', referencedColumnName: 'codcid' }])
  codc: TsicidEntity;

  @ManyToOne(() => TsiregEntity, (tsiregEntity) => tsiregEntity.tgfpars)
  @JoinColumn([{ name: 'CODREG', referencedColumnName: 'codreg' }])
  codreg: TsiregEntity;

  @ManyToOne(() => TgftppEntity, (tgftppEntity) => tgftppEntity.tgfpars)
  @JoinColumn([{ name: 'CODTIPPARC', referencedColumnName: 'codtipparc' }])
  codtipparc: TgftppEntity;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tgfpars)
  @JoinColumn([{ name: 'CODCTABCOINT', referencedColumnName: 'codctabcoint' }])
  codctabcoint: TsictaEntity;

  @ManyToOne(() => TsibcoEntity, (tsibcoEntity) => tsibcoEntity.tgfpars)
  @JoinColumn([{ name: 'CODBCO', referencedColumnName: 'codbco' }])
  codbco: TsibcoEntity;

  @ManyToOne(() => TsipaiEntity, (tsipaiEntity) => tsipaiEntity.tgfpars)
  @JoinColumn([{ name: 'TIMNACIONALIDAD', referencedColumnName: 'codpais' }])
  timnacionalidad: TsipaiEntity;

  @ManyToOne(() => TsibaiEntity, (tsibaiEntity) => tsibaiEntity.tgfpars)
  @JoinColumn([{ name: 'CODBAI', referencedColumnName: 'codbai' }])
  codbai: TsibaiEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfpars)
  @JoinColumn([{ name: 'CODPARCMATRIZ', referencedColumnName: 'codparc' }])
  codparcmatriz2: TgfparEntity;

  @OneToMany(() => TgfparEntity, (tgfparEntity) => tgfparEntity.codparcmatriz2)
  tgfpars: TgfparEntity[];

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfpars2)
  @JoinColumn([
    { name: 'CODPARCGRUECONOMICO', referencedColumnName: 'codparc' },
  ])
  codparcgrueconomico: TgfparEntity;

  @OneToMany(
    () => TgfparEntity,
    (tgfparEntity) => tgfparEntity.codparcgrueconomico,
  )
  tgfpars2: TgfparEntity[];

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tgfpars)
  @JoinColumn([{ name: 'CODEMPPREF', referencedColumnName: 'codemp' }])
  codemppref: TsiempEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tgfpars2)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tgfpars3)
  @JoinColumn([{ name: 'CODEMPPARC', referencedColumnName: 'codemp' }])
  codempparc: TsiempEntity;

  @ManyToOne(() => TsiendEntity, (tsiendEntity) => tsiendEntity.tgfpars)
  @JoinColumn([{ name: 'CODEND', referencedColumnName: 'codend' }])
  codend: TsiendEntity;

  @ManyToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfpars)
  @JoinTable({
    name: 'TGFPAS',
    joinColumns: [{ name: 'CODPARC', referencedColumnName: 'codparc' }],
    inverseJoinColumns: [{ name: 'CODSERV', referencedColumnName: 'codprod' }],
    schema: 'SANKHYA',
  })
  tgfpros: TgfproEntity[];

  @OneToMany(() => TgfpaxnEntity, (tgfpaxnEntity) => tgfpaxnEntity.codparc2)
  tgfpaxns: TgfpaxnEntity[];

  @OneToMany(() => TgfpecEntity, (tgfpecEntity) => tgfpecEntity.codmotorista)
  tgfpecs: TgfpecEntity[];

  @OneToMany(() => TgfpegEntity, (tgfpegEntity) => tgfpegEntity.codparctransp)
  tgfpegs: TgfpegEntity[];

  @ManyToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfpars)
  @JoinTable({
    name: 'TGFPEIN',
    joinColumns: [{ name: 'CODPARC', referencedColumnName: 'codparc' }],
    inverseJoinColumns: [{ name: 'CODEMP', referencedColumnName: 'codemp' }],
    schema: 'SANKHYA',
  })
  tgfemps3: TgfempEntity[];

  @OneToMany(() => TgfperEntity, (tgfperEntity) => tgfperEntity.codparc)
  tgfpers: TgfperEntity[];

  @OneToMany(() => TgfplacEntity, (tgfplacEntity) => tgfplacEntity.codparcfat2)
  tgfplacs: TgfplacEntity[];

  @OneToMany(() => TgfplcEntity, (tgfplcEntity) => tgfplcEntity.codparc2)
  tgfplcs: TgfplcEntity[];

  @OneToMany(() => TgfpliEntity, (tgfpliEntity) => tgfpliEntity.codparc2)
  tgfplis: TgfpliEntity[];

  @OneToMany(() => TgfpmaEntity, (tgfpmaEntity) => tgfpmaEntity.codparc2)
  tgfpmas: TgfpmaEntity[];

  @OneToMany(() => TgfppaEntity, (tgfppaEntity) => tgfppaEntity.codparc2)
  tgfppas: TgfppaEntity[];

  @OneToMany(() => TgfpplEntity, (tgfpplEntity) => tgfpplEntity.codparctransp)
  tgfppls: TgfpplEntity[];

  @OneToMany(() => TgfppzEntity, (tgfppzEntity) => tgfppzEntity.codparc2)
  tgfppzs: TgfppzEntity[];

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.codfab)
  tgfpros2: TgfproEntity[];

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.codparcconsig)
  tgfpros3: TgfproEntity[];

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.codparcforn)
  tgfpros4: TgfproEntity[];

  @OneToMany(() => TgfpsmEntity, (tgfpsmEntity) => tgfpsmEntity.codparc)
  tgfpsms: TgfpsmEntity[];

  @OneToMany(() => TgfptpEntity, (tgfptpEntity) => tgfptpEntity.codparc2)
  tgfptps: TgfptpEntity[];

  @OneToMany(() => TgfratEntity, (tgfratEntity) => tgfratEntity.codparc2)
  tgfrats: TgfratEntity[];

  @OneToMany(() => TgfravEntity, (tgfravEntity) => tgfravEntity.codparc2)
  tgfravs: TgfravEntity[];

  @OneToMany(() => TgfrcfEntity, (tgfrcfEntity) => tgfrcfEntity.codparcdest2)
  tgfrcfs: TgfrcfEntity[];

  @OneToMany(() => TgfrcfEntity, (tgfrcfEntity) => tgfrcfEntity.codparcorig2)
  tgfrcfs2: TgfrcfEntity[];

  @OneToMany(() => TgfresEntity, (tgfresEntity) => tgfresEntity.codparc)
  tgfres: TgfresEntity[];

  @OneToMany(() => TgfrocEntity, (tgfrocEntity) => tgfrocEntity.codparctef2)
  tgfrocs: TgfrocEntity[];

  @OneToMany(() => TgfrpvEntity, (tgfrpvEntity) => tgfrpvEntity.codparc2)
  tgfrpvs: TgfrpvEntity[];

  @OneToMany(() => TgfrtpEntity, (tgfrtpEntity) => tgfrtpEntity.codparc2)
  tgfrtps: TgfrtpEntity[];

  @ManyToMany(() => TgfstmvEntity, (tgfstmvEntity) => tgfstmvEntity.tgfpars)
  tgfstmvs: TgfstmvEntity[];

  @OneToMany(() => TgftcfEntity, (tgftcfEntity) => tgftcfEntity.codparc)
  tgftcfs: TgftcfEntity[];

  @OneToMany(() => TgftelEntity, (tgftelEntity) => tgftelEntity.codparc2)
  tgftels: TgftelEntity[];

  @OneToMany(() => TgftfrEntity, (tgftfrEntity) => tgftfrEntity.codparctransp2)
  tgftfrs: TgftfrEntity[];

  @OneToMany(() => TgftitEntity, (tgftitEntity) => tgftitEntity.codparctef)
  tgftits: TgftitEntity[];

  @OneToMany(() => TgfunpEntity, (tgfunpEntity) => tgfunpEntity.codparc2)
  tgfunps: TgfunpEntity[];

  @OneToMany(() => TgfvalpEntity, (tgfvalpEntity) => tgfvalpEntity.codparcforn)
  tgfvalps: TgfvalpEntity[];

  @OneToMany(() => TgfvalpEntity, (tgfvalpEntity) => tgfvalpEntity.codparcpag)
  tgfvalps2: TgfvalpEntity[];

  @OneToMany(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.codparcpropantt)
  tgfveis: TgfveiEntity[];

  @OneToMany(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.codmotorista)
  tgfveis2: TgfveiEntity[];

  @OneToMany(() => TgfvisEntity, (tgfvisEntity) => tgfvisEntity.codparc2)
  tgfvis: TgfvisEntity[];

  @OneToMany(() => TgicabEntity, (tgicabEntity) => tgicabEntity.codparc)
  tgicabs: TgicabEntity[];

  @OneToMany(() => TgiiteEntity, (tgiiteEntity) => tgiiteEntity.codparcforn)
  tgiites: TgiiteEntity[];

  @OneToMany(() => TgikitEntity, (tgikitEntity) => tgikitEntity.codparcforn)
  tgikits: TgikitEntity[];

  @OneToMany(() => TgmcfgiEntity, (tgmcfgiEntity) => tgmcfgiEntity.codparc2)
  tgmcfgis: TgmcfgiEntity[];

  @OneToMany(() => TgpavrEntity, (tgpavrEntity) => tgpavrEntity.codparc2)
  tgpavrs: TgpavrEntity[];

  @OneToMany(() => TgprelEntity, (tgprelEntity) => tgprelEntity.codparc2)
  tgprels: TgprelEntity[];

  @OneToMany(() => TgpusuEntity, (tgpusuEntity) => tgpusuEntity.codparc2)
  tgpusus: TgpusuEntity[];

  @OneToMany(() => TgvpepEntity, (tgvpepEntity) => tgvpepEntity.codparc2)
  tgvpeps: TgvpepEntity[];

  @OneToMany(() => TgvravEntity, (tgvravEntity) => tgvravEntity.codparc)
  tgvravs: TgvravEntity[];

  @OneToMany(() => TgvresEntity, (tgvresEntity) => tgvresEntity.codparc)
  tgvres: TgvresEntity[];

  @OneToMany(() => TgvrngEntity, (tgvrngEntity) => tgvrngEntity.codparc2)
  tgvrngs: TgvrngEntity[];

  @OneToMany(() => TgwageEntity, (tgwageEntity) => tgwageEntity.codparctransp)
  tgwages: TgwageEntity[];

  @OneToMany(() => TgwaxparEntity, (tgwaxparEntity) => tgwaxparEntity.codparc2)
  tgwaxpars: TgwaxparEntity[];

  @OneToMany(() => TgwcteEntity, (tgwcteEntity) => tgwcteEntity.codparc2)
  tgwctes: TgwcteEntity[];

  @OneToMany(() => TgwcteEntity, (tgwcteEntity) => tgwcteEntity.codparc3)
  tgwctes2: TgwcteEntity[];

  @OneToMany(() => TgweplEntity, (tgweplEntity) => tgweplEntity.codparc2)
  tgwepls: TgweplEntity[];

  @OneToMany(() => TgwestEntity, (tgwestEntity) => tgwestEntity.codparc2)
  tgwests: TgwestEntity[];

  @OneToMany(() => TgwivrEntity, (tgwivrEntity) => tgwivrEntity.codparc)
  tgwivrs: TgwivrEntity[];

  @OneToMany(() => TimapsEntity, (timapsEntity) => timapsEntity.apscomprador)
  timaps: TimapsEntity[];

  @OneToMany(() => TimcarEntity, (timcarEntity) => timcarEntity.carparceiro)
  timcars: TimcarEntity[];

  @OneToMany(() => TimcblEntity, (timcblEntity) => timcblEntity.cbllocador2)
  timcbls: TimcblEntity[];

  @OneToMany(() => TimclcEntity, (timclcEntity) => timclcEntity.clccomprador2)
  timclcs: TimclcEntity[];

  @OneToMany(() => TimcorEntity, (timcorEntity) => timcorEntity.corparceiro)
  timcors: TimcorEntity[];

  @OneToMany(() => TimdtlEntity, (timdtlEntity) => timdtlEntity.dtlparceiro)
  timdtls: TimdtlEntity[];

  @OneToMany(() => TimedgEntity, (timedgEntity) => timedgEntity.edgcodparceiro)
  timedgs: TimedgEntity[];

  @OneToMany(() => TimimbEntity, (timimbEntity) => timimbEntity.imbparceiro)
  timimbs: TimimbEntity[];

  @OneToMany(() => TimimpEntity, (timimpEntity) => timimpEntity.impprocurador)
  timimps: TimimpEntity[];

  @OneToMany(
    () => TimimpEntity,
    (timimpEntity) => timimpEntity.impproprietario2,
  )
  timimps2: TimimpEntity[];

  @OneToMany(() => TimirbEntity, (timirbEntity) => timirbEntity.irbpropimovel2)
  timirbs: TimirbEntity[];

  @OneToMany(() => TimlcfEntity, (timlcfEntity) => timlcfEntity.lcffiador2)
  timlcfs: TimlcfEntity[];

  @OneToMany(() => TimlclEntity, (timlclEntity) => timlclEntity.lcllocatario2)
  timlcls: TimlclEntity[];

  @OneToMany(() => TimlgsEntity, (timlgsEntity) => timlgsEntity.lgsseguradora)
  timlgs: TimlgsEntity[];

  @OneToMany(() => TimlgsEntity, (timlgsEntity) => timlgsEntity.lgscorretora)
  timlgs2: TimlgsEntity[];

  @OneToMany(() => TimltcEntity, (timltcEntity) => timltcEntity.ltcseguradora)
  timltcs: TimltcEntity[];

  @OneToMany(() => TimltcEntity, (timltcEntity) => timltcEntity.ltccorretora)
  timltcs2: TimltcEntity[];

  @OneToMany(
    () => TimltpEntity,
    (timltpEntity) => timltpEntity.ltpproprietario2,
  )
  timltps: TimltpEntity[];

  @OneToMany(() => TimltpEntity, (timltpEntity) => timltpEntity.ltpprocurador)
  timltps2: TimltpEntity[];

  @OneToMany(() => TimlvcEntity, (timlvcEntity) => timlvcEntity.lvcprocurador)
  timlvcs: TimlvcEntity[];

  @OneToMany(() => TimlvcEntity, (timlvcEntity) => timlvcEntity.lvccliente2)
  timlvcs2: TimlvcEntity[];

  @OneToMany(() => TimmfdEntity, (timmfdEntity) => timmfdEntity.mfdparceiro)
  timmfds: TimmfdEntity[];

  @OneToMany(() => TimmfdEntity, (timmfdEntity) => timmfdEntity.mfdcorrespbanc)
  timmfds2: TimmfdEntity[];

  @OneToMany(() => TimrclEntity, (timrclEntity) => timrclEntity.rclemitente)
  timrcls: TimrclEntity[];

  @OneToMany(() => TimrcmEntity, (timrcmEntity) => timrcmEntity.rcmparcdesp)
  timrcms: TimrcmEntity[];

  @OneToMany(() => TimsacEntity, (timsacEntity) => timsacEntity.sacparceiro)
  timsacs: TimsacEntity[];

  @OneToMany(() => TimsacEntity, (timsacEntity) => timsacEntity.saccodparcprest)
  timsacs2: TimsacEntity[];

  @OneToMany(() => TimsgiEntity, (timsgiEntity) => timsgiEntity.sgiseguradora)
  timsgis: TimsgiEntity[];

  @OneToMany(() => TimtnpEntity, (timtnpEntity) => timtnpEntity.tnpprocurador)
  timtnps: TimtnpEntity[];

  @OneToMany(() => TimtnpEntity, (timtnpEntity) => timtnpEntity.tnppessoa2)
  timtnps2: TimtnpEntity[];

  @OneToMany(() => TimtvpEntity, (timtvpEntity) => timtvpEntity.tvpprocurador)
  timtvps: TimtvpEntity[];

  @OneToMany(() => TimtvpEntity, (timtvpEntity) => timtvpEntity.tvppessoa2)
  timtvps2: TimtvpEntity[];

  @OneToMany(() => TimtxcEntity, (timtxcEntity) => timtxcEntity.txcparceiro)
  timtxcs: TimtxcEntity[];

  @OneToMany(() => TimvdoEntity, (timvdoEntity) => timvdoEntity.vdoparceiro)
  timvdos: TimvdoEntity[];

  @OneToMany(() => TjcapjEntity, (tjcapjEntity) => tjcapjEntity.codparc)
  tjcapjs: TjcapjEntity[];

  @OneToMany(() => TjcapjEntity, (tjcapjEntity) => tjcapjEntity.codagencia)
  tjcapjs2: TjcapjEntity[];

  @OneToMany(
    () => TmscalocoEntity,
    (tmscalocoEntity) => tmscalocoEntity.codparc,
  )
  tmscalocos: TmscalocoEntity[];

  @OneToMany(() => TmscmpEntity, (tmscmpEntity) => tmscmpEntity.codparcsolic)
  tmscmps: TmscmpEntity[];

  @OneToMany(() => TmscmpEntity, (tmscmpEntity) => tmscmpEntity.codmotaux)
  tmscmps2: TmscmpEntity[];

  @OneToMany(() => TmscmpEntity, (tmscmpEntity) => tmscmpEntity.codparcgestor)
  tmscmps3: TmscmpEntity[];

  @OneToMany(() => TmscmpEntity, (tmscmpEntity) => tmscmpEntity.codmotprinc)
  tmscmps4: TmscmpEntity[];

  @OneToMany(
    () => TmscmphistEntity,
    (tmscmphistEntity) => tmscmphistEntity.codmotprinc,
  )
  tmscmphists: TmscmphistEntity[];

  @OneToMany(
    () => TmscmphistEntity,
    (tmscmphistEntity) => tmscmphistEntity.codajudante,
  )
  tmscmphists2: TmscmphistEntity[];

  @OneToMany(
    () => TmscmphistEntity,
    (tmscmphistEntity) => tmscmphistEntity.codparcgestor,
  )
  tmscmphists3: TmscmphistEntity[];

  @OneToMany(
    () => TmscmphistEntity,
    (tmscmphistEntity) => tmscmphistEntity.codparcsolic,
  )
  tmscmphists4: TmscmphistEntity[];

  @OneToMany(
    () => TmscmphistEntity,
    (tmscmphistEntity) => tmscmphistEntity.codmotaux,
  )
  tmscmphists5: TmscmphistEntity[];

  @OneToMany(() => TmsfvgEntity, (tmsfvgEntity) => tmsfvgEntity.codparc)
  tmsfvgs: TmsfvgEntity[];

  @OneToMany(() => TmsfvgEntity, (tmsfvgEntity) => tmsfvgEntity.codmotorista)
  tmsfvgs2: TmsfvgEntity[];

  @OneToMany(() => TmsfvmEntity, (tmsfvmEntity) => tmsfvmEntity.codmotorista)
  tmsfvms: TmsfvmEntity[];

  @OneToMany(
    () => TmsnotasEntity,
    (tmsnotasEntity) => tmsnotasEntity.codparcconsig,
  )
  tmsnotas: TmsnotasEntity[];

  @OneToMany(
    () => TmsnotasEntity,
    (tmsnotasEntity) => tmsnotasEntity.codparcrem,
  )
  tmsnotas2: TmsnotasEntity[];

  @OneToMany(
    () => TmsnotasEntity,
    (tmsnotasEntity) => tmsnotasEntity.codparcdest,
  )
  tmsnotas3: TmsnotasEntity[];

  @OneToMany(
    () => TmsordcarregEntity,
    (tmsordcarregEntity) => tmsordcarregEntity.codparccli,
  )
  tmsordcarregs: TmsordcarregEntity[];

  @OneToMany(
    () => TmsordcarregEntity,
    (tmsordcarregEntity) => tmsordcarregEntity.codparcdest,
  )
  tmsordcarregs2: TmsordcarregEntity[];

  @OneToMany(
    () => TmsordcarregEntity,
    (tmsordcarregEntity) => tmsordcarregEntity.codparcmot,
  )
  tmsordcarregs3: TmsordcarregEntity[];

  @OneToMany(
    () => TmsordcarregEntity,
    (tmsordcarregEntity) => tmsordcarregEntity.codparcent,
  )
  tmsordcarregs4: TmsordcarregEntity[];

  @OneToMany(
    () => TmsordcarregEntity,
    (tmsordcarregEntity) => tmsordcarregEntity.codparccol,
  )
  tmsordcarregs5: TmsordcarregEntity[];

  @OneToMany(
    () => TmsordcarregEntity,
    (tmsordcarregEntity) => tmsordcarregEntity.codparcrem,
  )
  tmsordcarregs6: TmsordcarregEntity[];

  @OneToMany(
    () => TmsparcredEntity,
    (tmsparcredEntity) => tmsparcredEntity.codparc2,
  )
  tmsparcreds: TmsparcredEntity[];

  @OneToMany(
    () => TmspedrotEntity,
    (tmspedrotEntity) => tmspedrotEntity.codparcent,
  )
  tmspedrots: TmspedrotEntity[];

  @OneToMany(
    () => TmspedrotEntity,
    (tmspedrotEntity) => tmspedrotEntity.codparccli,
  )
  tmspedrots2: TmspedrotEntity[];

  @OneToMany(
    () => TmspedrotEntity,
    (tmspedrotEntity) => tmspedrotEntity.codparcrem,
  )
  tmspedrots3: TmspedrotEntity[];

  @OneToMany(
    () => TmspedrotEntity,
    (tmspedrotEntity) => tmspedrotEntity.codparccol,
  )
  tmspedrots4: TmspedrotEntity[];

  @OneToMany(
    () => TmspedrotEntity,
    (tmspedrotEntity) => tmspedrotEntity.codparcdest,
  )
  tmspedrots5: TmspedrotEntity[];

  @OneToMany(() => TpqpesEntity, (tpqpesEntity) => tpqpesEntity.codparcpesq)
  tpqpes: TpqpesEntity[];

  @OneToMany(() => TpqplaEntity, (tpqplaEntity) => tpqplaEntity.codparc)
  tpqplas: TpqplaEntity[];

  @OneToMany(
    () => TpqrpoEntity,
    (tpqrpoEntity) => tpqrpoEntity.codparcmotorista2,
  )
  tpqrpos: TpqrpoEntity[];

  @OneToMany(() => TpriatvEntity, (tpriatvEntity) => tpriatvEntity.codparcterc)
  tpriatvs: TpriatvEntity[];

  @OneToMany(() => TprilopEntity, (tprilopEntity) => tprilopEntity.codparcterc)
  tprilops: TprilopEntity[];

  @OneToMany(() => TpriprocEntity, (tpriprocEntity) => tpriprocEntity.codparc)
  tpriprocs: TpriprocEntity[];

  @OneToMany(
    () => TpriprocEntity,
    (tpriprocEntity) => tpriprocEntity.codparcterc,
  )
  tpriprocs2: TpriprocEntity[];

  @OneToMany(() => TprtlopEntity, (tprtlopEntity) => tprtlopEntity.codparcterc)
  tprtlops: TprtlopEntity[];

  @OneToMany(() => TprtxatEntity, (tprtxatEntity) => tprtxatEntity.codparcterc)
  tprtxats: TprtxatEntity[];

  @OneToMany(() => TprtxppEntity, (tprtxppEntity) => tprtxppEntity.codparcterc2)
  tprtxpps: TprtxppEntity[];

  @OneToMany(() => TripparcEntity, (tripparcEntity) => tripparcEntity.codparc2)
  tripparcs: TripparcEntity[];

  @OneToMany(() => TrsanuEntity, (trsanuEntity) => trsanuEntity.codparc)
  trsanus: TrsanuEntity[];

  @OneToMany(() => TrsreqEntity, (trsreqEntity) => trsreqEntity.codparc)
  trsreqs: TrsreqEntity[];

  @OneToMany(() => TsicarEntity, (tsicarEntity) => tsicarEntity.codparc)
  tsicars: TsicarEntity[];

  @OneToMany(() => TsicidEntity, (tsicidEntity) => tsicidEntity.codparcnfse)
  tsics: TsicidEntity[];

  @OneToMany(
    () => TsicidEntity,
    (tsicidEntity) => tsicidEntity.timparcprefeitura,
  )
  tsics2: TsicidEntity[];

  @OneToMany(() => TsictaEntity, (tsictaEntity) => tsictaEntity.codparc)
  tsictas: TsictaEntity[];

  @OneToMany(() => TsicusEntity, (tsicusEntity) => tsicusEntity.codparc)
  tsicuses: TsicusEntity[];

  @OneToMany(() => TsicusEntity, (tsicusEntity) => tsicusEntity.codparcresp)
  tsicuses2: TsicusEntity[];

  @OneToMany(() => TsidisEntity, (tsidisEntity) => tsidisEntity.codparcdest2)
  tsidis: TsidisEntity[];

  @OneToMany(() => TsidisEntity, (tsidisEntity) => tsidisEntity.codparcorig2)
  tsidis2: TsidisEntity[];

  @OneToMany(() => TsiempEntity, (tsiempEntity) => tsiempEntity.codparcresp)
  tsiemps: TsiempEntity[];

  @OneToMany(() => TsiempEntity, (tsiempEntity) => tsiempEntity.codparcempsoft)
  tsiemps2: TsiempEntity[];

  @OneToMany(() => TsiempEntity, (tsiempEntity) => tsiempEntity.codparc)
  tsiemps3: TsiempEntity[];

  @OneToMany(() => TsiempEntity, (tsiempEntity) => tsiempEntity.codparcdiv)
  tsiemps4: TsiempEntity[];

  @OneToMany(() => TsifatEntity, (tsifatEntity) => tsifatEntity.codparc2)
  tsifats: TsifatEntity[];

  @OneToMany(() => TsilibEntity, (tsilibEntity) => tsilibEntity.codparc)
  tsilibs: TsilibEntity[];

  @OneToMany(
    () => TsilogftcEntity,
    (tsilogftcEntity) => tsilogftcEntity.codparc,
  )
  tsilogftcs: TsilogftcEntity[];

  @OneToMany(() => TsiobcEntity, (tsiobcEntity) => tsiobcEntity.codparc)
  tsiobcs: TsiobcEntity[];

  @OneToMany(
    () => TsiufsEntity,
    (tsiufsEntity) => tsiufsEntity.codparcsecrecest,
  )
  tsiufs: TsiufsEntity[];

  @OneToMany(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.codparc)
  tsiusus: TsiusuEntity[];

  @OneToMany(() => TwusuEntity, (twusuEntity) => twusuEntity.codparc2)
  twusus: TwusuEntity[];
}
