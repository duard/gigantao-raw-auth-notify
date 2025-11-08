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
import { AdAdgigperguntasEntity } from './aD_ADGIGPERGUNTAS.entity';
import { AdAdgigquestionarioEntity } from './aD_ADGIGQUESTIONARIO.entity';
import { AdAdgigquestperguntasEntity } from './aD_ADGIGQUESTPERGUNTAS.entity';
import { AdAlteracaixEntity } from './aD_ALTERACAIX.entity';
import { AdApontamentoEntity } from './aD_APONTAMENTO.entity';
import { AdCadlavchecklistEntity } from './aD_CADLAVCHECKLIST.entity';
import { AdChamadoscorridasEntity } from './aD_CHAMADOSCORRIDAS.entity';
import { AdComadmEntity } from './aD_COMADM.entity';
import { AdComadm1Entity } from './aD_COMADM1.entity';
import { AdContratgigEntity } from './aD_CONTRATGIG.entity';
import { AdGigpontosEntity } from './aD_GIGPONTOS.entity';
import { AdGigquestionariofuncionariosEntity } from './aD_GIGQUESTIONARIOFUNCIONARIOS.entity';
import { AdGigquestionariosEntity } from './aD_GIGQUESTIONARIOS.entity';
import { AdInsperealEntity } from './aD_INSPEREAL.entity';
import { AdLogstatusosEntity } from './aD_LOGSTATUSOS.entity';
import { AdPropostaEntity } from './aD_PROPOSTA.entity';
import { AdPropostacontEntity } from './aD_PROPOSTACONT.entity';
import { AdRelfunciteEntity } from './aD_RELFUNCITE.entity';
import { AdReqdpEntity } from './aD_REQDP.entity';
import { AdSegurancaEntity } from './aD_SEGURANCA.entity';
import { AdSirvoEntity } from './aD_SIRVO.entity';
import { AdSirvomotEntity } from './aD_SIRVOMOT.entity';
import { AdSopragemEntity } from './aD_SOPRAGEM.entity';
import { AdTcfexecEntity } from './aD_TCFEXEC.entity';
import { AdTsiusuhabEntity } from './aD_TSIUSUHAB.entity';
import { AudittfpageEntity } from './aUDITTFPAGE.entity';
import { AudittfpbasEntity } from './aUDITTFPBAS.entity';
import { AudittfpferEntity } from './aUDITTFPFER.entity';
import { AudittfpfolEntity } from './aUDITTFPFOL.entity';
import { GfrguiEntity } from './gFRGUI.entity';
import { TapcusEntity } from './tAPCUS.entity';
import { TapfatEntity } from './tAPFAT.entity';
import { TapiapEntity } from './tAPIAP.entity';
import { TapmapEntity } from './tAPMAP.entity';
import { TapmrmEntity } from './tAPMRM.entity';
import { TcacprEntity } from './tCACPR.entity';
import { TcahstEntity } from './tCAHST.entity';
import { TcbaaecdEntity } from './tCBAAECD.entity';
import { TcbaaecdsubEntity } from './tCBAAECDSUB.entity';
import { TcbauxEntity } from './tCBAUX.entity';
import { TcbdepEntity } from './tCBDEP.entity';
import { TcbdinEntity } from './tCBDIN.entity';
import { TcbdplrEntity } from './tCBDPLR.entity';
import { TcbecbEntity } from './tCBECB.entity';
import { TcbecfEntity } from './tCBECF.entity';
import { TcbecfcEntity } from './tCBECFC.entity';
import { TcbecrEntity } from './tCBECR.entity';
import { TcbefbEntity } from './tCBEFB.entity';
import { TcbefrEntity } from './tCBEFR.entity';
import { TcbftrEntity } from './tCBFTR.entity';
import { TcbirpEntity } from './tCBIRP.entity';
import { TcbiseEntity } from './tCBISE.entity';
import { TcblanEntity } from './tCBLAN.entity';
import { TcblanConfEntity } from './tCBLAN_CONF.entity';
import { TcblotEntity } from './tCBLOT.entity';
import { TcbpciEntity } from './tCBPCI.entity';
import { TcbrelEntity } from './tCBREL.entity';
import { TcbsigEntity } from './tCBSIG.entity';
import { TccconEntity } from './tCCCON.entity';
import { TccratEntity } from './tCCRAT.entity';
import { TceadiEntity } from './tCEADI.entity';
import { TceadiHisEntity } from './tCEADI_HIS.entity';
import { TcecabEntity } from './tCECAB.entity';
import { TcecabHisEntity } from './tCECAB_HIS.entity';
import { TcecarEntity } from './tCECAR.entity';
import { TcencmEntity } from './tCENCM.entity';
import { TcfabtEntity } from './tCFABT.entity';
import { TcfcptEntity } from './tCFCPT.entity';
import { TcfcptpendEntity } from './tCFCPTPEND.entity';
import { TcfoscabEntity } from './tCFOSCAB.entity';
import { TcfpnuhistEntity } from './tCFPNUHIST.entity';
import { TcfprodosEntity } from './tCFPRODOS.entity';
import { TcfservosatoEntity } from './tCFSERVOSATO.entity';
import { TcibemEntity } from './tCIBEM.entity';
import { TcilocEntity } from './tCILOC.entity';
import { TcsaltEntity } from './tCSALT.entity';
import { TcsaveEntity } from './tCSAVE.entity';
import { TcsbmeEntity } from './tCSBME.entity';
import { TcscnvEntity } from './tCSCNV.entity';
import { TcsconEntity } from './tCSCON.entity';
import { TcscveEntity } from './tCSCVE.entity';
import { TcseagEntity } from './tCSEAG.entity';
import { TcseflEntity } from './tCSEFL.entity';
import { TcsefpEntity } from './tCSEFP.entity';
import { TcsehiEntity } from './tCSEHI.entity';
import { TcserrEntity } from './tCSERR.entity';
import { TcsfeeEntity } from './tCSFEE.entity';
import { TcsfeqEntity } from './tCSFEQ.entity';
import { TcsfhaEntity } from './tCSFHA.entity';
import { TcsfhsEntity } from './tCSFHS.entity';
import { TcshseEntity } from './tCSHSE.entity';
import { TcsieEntity } from './tCSIE.entity';
import { TcsiteEntity } from './tCSITE.entity';
import { TcsliativaEntity } from './tCSLIATIVA.entity';
import { TcslipendenteEntity } from './tCSLIPENDENTE.entity';
import { TcsnhcEntity } from './tCSNHC.entity';
import { TcsoccEntity } from './tCSOCC.entity';
import { TcsoseEntity } from './tCSOSE.entity';
import { TcsppfEntity } from './tCSPPF.entity';
import { TcspreqtdEntity } from './tCSPREQTD.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TcspssEntity } from './tCSPSS.entity';
import { TcsrusEntity } from './tCSRUS.entity';
import { TcssagEntity } from './tCSSAG.entity';
import { TcsspnEntity } from './tCSSPN.entity';
import { TcsvpcEntity } from './tCSVPC.entity';
import { TddperEntity } from './tDDPER.entity';
import { TddperbkEntity } from './tDDPERBK.entity';
import { TfcavcEntity } from './tFCAVC.entity';
import { TfcbcoEntity } from './tFCBCO.entity';
import { TfpabeEntity } from './tFPABE.entity';
import { TfpacaEntity } from './tFPACA.entity';
import { TfpacuEntity } from './tFPACU.entity';
import { TfpafaEntity } from './tFPAFA.entity';
import { TfpafgEntity } from './tFPAFG.entity';
import { TfpaftEntity } from './tFPAFT.entity';
import { TfpagcEntity } from './tFPAGC.entity';
import { TfpageEntity } from './tFPAGE.entity';
import { TfpagnocatrEntity } from './tFPAGNOCATR.entity';
import { TfpagnocatrfEntity } from './tFPAGNOCATRF.entity';
import { TfpajuEntity } from './tFPAJU.entity';
import { TfpalunoEntity } from './tFPALUNO.entity';
import { TfpambEntity } from './tFPAMB.entity';
import { TfpambrEntity } from './tFPAMBR.entity';
import { TfpamfEntity } from './tFPAMF.entity';
import { TfpasoEntity } from './tFPASO.entity';
import { TfpativEntity } from './tFPATIV.entity';
import { TfpatrEntity } from './tFPATR.entity';
import { TfpattEntity } from './tFPATT.entity';
import { TfpatvEntity } from './tFPATV.entity';
import { TfpaudEntity } from './tFPAUD.entity';
import { TfpaudlogEntity } from './tFPAUDLOG.entity';
import { TfpaviEntity } from './tFPAVI.entity';
import { TfpbasEntity } from './tFPBAS.entity';
import { TfpbastesteEntity } from './tFPBASTESTE.entity';
import { TfpcarEntity } from './tFPCAR.entity';
import { TfpcatrEntity } from './tFPCATR.entity';
import { TfpcbpEntity } from './tFPCBP.entity';
import { TfpcceEntity } from './tFPCCE.entity';
import { TfpcevEntity } from './tFPCEV.entity';
import { TfpcfeEntity } from './tFPCFE.entity';
import { TfpcgeEntity } from './tFPCGE.entity';
import { TfpcghEntity } from './tFPCGH.entity';
import { TfpcliEntity } from './tFPCLI.entity';
import { TfpcnvEntity } from './tFPCNV.entity';
import { TfpcomEntity } from './tFPCOM.entity';
import { TfpcrrEntity } from './tFPCRR.entity';
import { TfpcsiEntity } from './tFPCSI.entity';
import { TfpctgEntity } from './tFPCTG.entity';
import { TfpdfcEntity } from './tFPDFC.entity';
import { TfpdpeEntity } from './tFPDPE.entity';
import { TfpdptEntity } from './tFPDPT.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TfpenedEntity } from './tFPENED.entity';
import { TfpepEntity } from './tFPEP.entity';
import { TfpepcEntity } from './tFPEPC.entity';
import { TfpepfEntity } from './tFPEPF.entity';
import { TfpepiEntity } from './tFPEPI.entity';
import { TfpepiagnocEntity } from './tFPEPIAGNOC.entity';
import { TfpepiagnocfEntity } from './tFPEPIAGNOCF.entity';
import { TfpepifEntity } from './tFPEPIF.entity';
import { TfpeprEntity } from './tFPEPR.entity';
import { TfpeqpEntity } from './tFPEQP.entity';
import { TfpesoEntity } from './tFPESO.entity';
import { TfpestEntity } from './tFPEST.entity';
import { TfpeveEntity } from './tFPEVE.entity';
import { TfpevtEntity } from './tFPEVT.entity';
import { TfpexaEntity } from './tFPEXA.entity';
import { TfpexmEntity } from './tFPEXM.entity';
import { TfpfatrEntity } from './tFPFATR.entity';
import { TfpfbhEntity } from './tFPFBH.entity';
import { TfpfcaEntity } from './tFPFCA.entity';
import { TfpfceEntity } from './tFPFCE.entity';
import { TfpfcpuEntity } from './tFPFCPU.entity';
import { TfpfhoEntity } from './tFPFHO.entity';
import { TfpfisEntity } from './tFPFIS.entity';
import { TfpfncfEntity } from './tFPFNCF.entity';
import { TfpforEntity } from './tFPFOR.entity';
import { TfpftrEntity } from './tFPFTR.entity';
import { TfpftrcEntity } from './tFPFTRC.entity';
import { TfpftrfEntity } from './tFPFTRF.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpgcaEntity } from './tFPGCA.entity';
import { TfpghrEntity } from './tFPGHR.entity';
import { TfpgtfEntity } from './tFPGTF.entity';
import { TfphcpEntity } from './tFPHCP.entity';
import { TfphdeEntity } from './tFPHDE.entity';
import { TfphfiEntity } from './tFPHFI.entity';
import { TfphfuEntity } from './tFPHFU.entity';
import { TfphfxEntity } from './tFPHFX.entity';
import { TfphprEntity } from './tFPHPR.entity';
import { TfphreEntity } from './tFPHRE.entity';
import { TfphrgEntity } from './tFPHRG.entity';
import { TfphsaEntity } from './tFPHSA.entity';
import { TfphsafEntity } from './tFPHSAF.entity';
import { TfpinccpEntity } from './tFPINCCP.entity';
import { TfpincfgtsEntity } from './tFPINCFGTS.entity';
import { TfpincirrfEntity } from './tFPINCIRRF.entity';
import { TfpincpisEntity } from './tFPINCPIS.entity';
import { TfpincsindEntity } from './tFPINCSIND.entity';
import { TfpipaEntity } from './tFPIPA.entity';
import { TfpipoEntity } from './tFPIPO.entity';
import { TfplfuEntity } from './tFPLFU.entity';
import { TfplgrEntity } from './tFPLGR.entity';
import { TfplotEntity } from './tFPLOT.entity';
import { TfpmadEntity } from './tFPMAD.entity';
import { TfpmanEntity } from './tFPMAN.entity';
import { TfpmdeEntity } from './tFPMDE.entity';
import { TfpmedEntity } from './tFPMED.entity';
import { TfpmocEntity } from './tFPMOC.entity';
import { TfpmovEntity } from './tFPMOV.entity';
import { TfpmtaEntity } from './tFPMTA.entity';
import { TfpmtbEntity } from './tFPMTB.entity';
import { TfpmtdEntity } from './tFPMTD.entity';
import { TfpnewmedEntity } from './tFPNEWMED.entity';
import { TfpnotificEntity } from './tFPNOTIFIC.entity';
import { TfpntlEntity } from './tFPNTL.entity';
import { TfpocoEntity } from './tFPOCO.entity';
import { TfpocorjsEntity } from './tFPOCORJS.entity';
import { TfppaaEntity } from './tFPPAA.entity';
import { TfppantEntity } from './tFPPANT.entity';
import { TfppcaEntity } from './tFPPCA.entity';
import { TfppcatEntity } from './tFPPCAT.entity';
import { TfppcgEntity } from './tFPPCG.entity';
import { TfppdiEntity } from './tFPPDI.entity';
import { TfpperEntity } from './tFPPER.entity';
import { TfppfsEntity } from './tFPPFS.entity';
import { TfpplsEntity } from './tFPPLS.entity';
import { TfppraEntity } from './tFPPRA.entity';
import { TfppreEntity } from './tFPPRE.entity';
import { TfpprofEntity } from './tFPPROF.entity';
import { TfpprtcEntity } from './tFPPRTC.entity';
import { TfpprtrEntity } from './tFPPRTR.entity';
import { TfpprvEntity } from './tFPPRV.entity';
import { TfppseEntity } from './tFPPSE.entity';
import { TfppsfEntity } from './tFPPSF.entity';
import { TfppssEntity } from './tFPPSS.entity';
import { TfpptprEntity } from './tFPPTPR.entity';
import { TfprbrEntity } from './tFPRBR.entity';
import { TfprcoEntity } from './tFPRCO.entity';
import { TfpregcalcEntity } from './tFPREGCALC.entity';
import { TfprelEntity } from './tFPREL.entity';
import { TfpreqEntity } from './tFPREQ.entity';
import { TfprgprEntity } from './tFPRGPR.entity';
import { TfprmdEntity } from './tFPRMD.entity';
import { TfproeEntity } from './tFPROE.entity';
import { TfprpoEntity } from './tFPRPO.entity';
import { TfprpsEntity } from './tFPRPS.entity';
import { TfprraEntity } from './tFPRRA.entity';
import { TfprteEntity } from './tFPRTE.entity';
import { TfprtfEntity } from './tFPRTF.entity';
import { TfprtmEntity } from './tFPRTM.entity';
import { TfprttEntity } from './tFPRTT.entity';
import { TfprubEntity } from './tFPRUB.entity';
import { TfpsbaEntity } from './tFPSBA.entity';
import { TfpsbafEntity } from './tFPSBAF.entity';
import { TfpscabEntity } from './tFPSCAB.entity';
import { TfpscpEntity } from './tFPSCP.entity';
import { TfpseqEntity } from './tFPSEQ.entity';
import { TfpsescEntity } from './tFPSESC.entity';
import { TfpsgaEntity } from './tFPSGA.entity';
import { TfpslogEntity } from './tFPSLOG.entity';
import { TfpsubEntity } from './tFPSUB.entity';
import { TfpsuspEntity } from './tFPSUSP.entity';
import { TfptatEntity } from './tFPTAT.entity';
import { TfptbpEntity } from './tFPTBP.entity';
import { TfptercEntity } from './tFPTERC.entity';
import { TfptfaEntity } from './tFPTFA.entity';
import { TfptgeEntity } from './tFPTGE.entity';
import { TfptmeEntity } from './tFPTME.entity';
import { TfptomEntity } from './tFPTOM.entity';
import { TfptpaEntity } from './tFPTPA.entity';
import { TfptrcEntity } from './tFPTRC.entity';
import { TfptreiEntity } from './tFPTREI.entity';
import { TfpturEntity } from './tFPTUR.entity';
import { TfpvcoEntity } from './tFPVCO.entity';
import { TfpvpsEntity } from './tFPVPS.entity';
import { TgaahEntity } from './tGAAH.entity';
import { TgaahiEntity } from './tGAAHI.entity';
import { TgaavaEntity } from './tGAAVA.entity';
import { TgabdlcEntity } from './tGABDLC.entity';
import { TgaclpEntity } from './tGACLP.entity';
import { TgaculEntity } from './tGACUL.entity';
import { TgaemiEntity } from './tGAEMI.entity';
import { TgaentEntity } from './tGAENT.entity';
import { TgagarEntity } from './tGAGAR.entity';
import { TgagpcEntity } from './tGAGPC.entity';
import { TgagtEntity } from './tGAGT.entity';
import { TgagtmEntity } from './tGAGTM.entity';
import { TgainsEntity } from './tGAINS.entity';
import { TgapatEntity } from './tGAPAT.entity';
import { TgapcaEntity } from './tGAPCA.entity';
import { TgarecEntity } from './tGAREC.entity';
import { TgariEntity } from './tGARI.entity';
import { TgccalEntity } from './tGCCAL.entity';
import { TgccredEntity } from './tGCCRED.entity';
import { TgcgruEntity } from './tGCGRU.entity';
import { TgcinfEntity } from './tGCINF.entity';
import { TgcparEntity } from './tGCPAR.entity';
import { TgfabfEntity } from './tGFABF.entity';
import { TgfacoEntity } from './tGFACO.entity';
import { TgfadgEntity } from './tGFADG.entity';
import { TgfaemEntity } from './tGFAEM.entity';
import { TgfagdEntity } from './tGFAGD.entity';
import { TgfageEntity } from './tGFAGE.entity';
import { TgfajaEntity } from './tGFAJA.entity';
import { TgfajdEntity } from './tGFAJD.entity';
import { TgfajnEntity } from './tGFAJN.entity';
import { TgfapuEntity } from './tGFAPU.entity';
import { TgfarcEntity } from './tGFARC.entity';
import { TgfasaEntity } from './tGFASA.entity';
import { TgfattEntity } from './tGFATT.entity';
import { TgfaucEntity } from './tGFAUC.entity';
import { TgfauiEntity } from './tGFAUI.entity';
import { TgfavrEntity } from './tGFAVR.entity';
import { TgfbarEntity } from './tGFBAR.entity';
import { TgfboaEntity } from './tGFBOA.entity';
import { TgfbttEntity } from './tGFBTT.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfcaiEntity } from './tGFCAI.entity';
import { TgfcauEntity } from './tGFCAU.entity';
import { TgfccaiEntity } from './tGFCCAI.entity';
import { TgfccfEntity } from './tGFCCF.entity';
import { TgfcciEntity } from './tGFCCI.entity';
import { TgfccrEntity } from './tGFCCR.entity';
import { TgfcdoEntity } from './tGFCDO.entity';
import { TgfcfiEntity } from './tGFCFI.entity';
import { TgfclxEntity } from './tGFCLX.entity';
import { TgfcmpEntity } from './tGFCMP.entity';
import { TgfcnfEntity } from './tGFCNF.entity';
import { TgfcocEntity } from './tGFCOC.entity';
import { Tgfcon2Entity } from './tGFCON2.entity';
import { TgfcotEntity } from './tGFCOT.entity';
import { TgfcpcEntity } from './tGFCPC.entity';
import { TgfcpeEntity } from './tGFCPE.entity';
import { TgfcplEntity } from './tGFCPL.entity';
import { TgfcprEntity } from './tGFCPR.entity';
import { TgfcrastEntity } from './tGFCRAST.entity';
import { TgfcredauditEntity } from './tGFCREDAUDIT.entity';
import { TgfcrtEntity } from './tGFCRT.entity';
import { TgfcszEntity } from './tGFCSZ.entity';
import { TgfctdEntity } from './tGFCTD.entity';
import { TgfctfEntity } from './tGFCTF.entity';
import { TgfcttEntity } from './tGFCTT.entity';
import { TgfdfaEntity } from './tGFDFA.entity';
import { TgfdfiEntity } from './tGFDFI.entity';
import { TgfdfpEntity } from './tGFDFP.entity';
import { TgfdinEntity } from './tGFDIN.entity';
import { TgfdtpEntity } from './tGFDTP.entity';
import { TgfdttEntity } from './tGFDTT.entity';
import { TgfeacEntity } from './tGFEAC.entity';
import { TgfecteEntity } from './tGFECTE.entity';
import { TgfefcEntity } from './tGFEFC.entity';
import { TgfempsnEntity } from './tGFEMPSN.entity';
import { TgfenvEntity } from './tGFENV.entity';
import { TgfeppEntity } from './tGFEPP.entity';
import { TgfepsEntity } from './tGFEPS.entity';
import { TgfepsdEntity } from './tGFEPSD.entity';
import { TgfeqfEntity } from './tGFEQF.entity';
import { TgfeqxEntity } from './tGFEQX.entity';
import { TgfetqEntity } from './tGFETQ.entity';
import { TgfexbEntity } from './tGFEXB.entity';
import { TgffaiEntity } from './tGFFAI.entity';
import { TgffdicEntity } from './tGFFDIC.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TgffopEntity } from './tGFFOP.entity';
import { TgffreEntity } from './tGFFRE.entity';
import { TgffrmEntity } from './tGFFRM.entity';
import { TgfgalEntity } from './tGFGAL.entity';
import { TgfgvpEntity } from './tGFGVP.entity';
import { TgfhipEntity } from './tGFHIP.entity';
import { TgfiadEntity } from './tGFIAD.entity';
import { TgficnfEntity } from './tGFICNF.entity';
import { TgfidiEntity } from './tGFIDI.entity';
import { TgfiffEntity } from './tGFIFF.entity';
import { TgfiffpEntity } from './tGFIFFP.entity';
import { TgfigaEntity } from './tGFIGA.entity';
import { TgfiiiEntity } from './tGFIII.entity';
import { TgfimalEntity } from './tGFIMAL.entity';
import { TgfimoEntity } from './tGFIMO.entity';
import { TgfinuEntity } from './tGFINU.entity';
import { TgfinujEntity } from './tGFINUJ.entity';
import { TgfiprEntity } from './tGFIPR.entity';
import { TgfiteEntity } from './tGFITE.entity';
import { TgfixnEntity } from './tGFIXN.entity';
import { TgfjumEntity } from './tGFJUM.entity';
import { TgflcpEntity } from './tGFLCP.entity';
import { TgflebEntity } from './tGFLEB.entity';
import { TgflgnreEntity } from './tGFLGNRE.entity';
import { TgflibEntity } from './tGFLIB.entity';
import { TgflicEntity } from './tGFLIC.entity';
import { TgflivEntity } from './tGFLIV.entity';
import { TgfllpEntity } from './tGFLLP.entity';
import { TgflocEntity } from './tGFLOC.entity';
import { TgflseEntity } from './tGFLSE.entity';
import { TgfmcxEntity } from './tGFMCX.entity';
import { TgfmdfeEntity } from './tGFMDFE.entity';
import { TgfmedEntity } from './tGFMED.entity';
import { TgfmenEntity } from './tGFMEN.entity';
import { TgfmeqEntity } from './tGFMEQ.entity';
import { TgfmntEntity } from './tGFMNT.entity';
import { TgfmppEntity } from './tGFMPP.entity';
import { TgfmpxEntity } from './tGFMPX.entity';
import { TgfmsiEntity } from './tGFMSI.entity';
import { TgfmstEntity } from './tGFMST.entity';
import { TgfmtefEntity } from './tGFMTEF.entity';
import { TgfnatpcEntity } from './tGFNATPC.entity';
import { TgfnatpcempEntity } from './tGFNATPCEMP.entity';
import { TgfnpaEntity } from './tGFNPA.entity';
import { TgfocrEntity } from './tGFOCR.entity';
import { TgfoirEntity } from './tGFOIR.entity';
import { TgfomdfEntity } from './tGFOMDF.entity';
import { TgfordEntity } from './tGFORD.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfparpocEntity } from './tGFPARPOC.entity';
import { TgfpatEntity } from './tGFPAT.entity';
import { TgfpdvEntity } from './tGFPDV.entity';
import { TgfpecEntity } from './tGFPEC.entity';
import { TgfpedEntity } from './tGFPED.entity';
import { TgfpegEntity } from './tGFPEG.entity';
import { TgfpeiEntity } from './tGFPEI.entity';
import { TgfperEntity } from './tGFPER.entity';
import { TgfperdaEntity } from './tGFPERDA.entity';
import { TgfpevEntity } from './tGFPEV.entity';
import { TgfpfxEntity } from './tGFPFX.entity';
import { TgfplcEntity } from './tGFPLC.entity';
import { TgfpliEntity } from './tGFPLI.entity';
import { TgfpmfEntity } from './tGFPMF.entity';
import { TgfpmpEntity } from './tGFPMP.entity';
import { TgfpocEntity } from './tGFPOC.entity';
import { TgfppaEntity } from './tGFPPA.entity';
import { TgfppcEntity } from './tGFPPC.entity';
import { TgfpplEntity } from './tGFPPL.entity';
import { TgfprdpEntity } from './tGFPRDP.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfproiEntity } from './tGFPROI.entity';
import { TgfpromEntity } from './tGFPROM.entity';
import { TgfprorvmEntity } from './tGFPRORVM.entity';
import { TgfpsdEntity } from './tGFPSD.entity';
import { TgfpsnEntity } from './tGFPSN.entity';
import { TgfptcEntity } from './tGFPTC.entity';
import { TgfptpEntity } from './tGFPTP.entity';
import { TgfpwuEntity } from './tGFPWU.entity';
import { TgfqprEntity } from './tGFQPR.entity';
import { TgframEntity } from './tGFRAM.entity';
import { TgfratEntity } from './tGFRAT.entity';
import { TgfravEntity } from './tGFRAV.entity';
import { TgfrcEntity } from './tGFRC.entity';
import { TgfrcdEntity } from './tGFRCD.entity';
import { TgfreaEntity } from './tGFREA.entity';
import { TgfremEntity } from './tGFREM.entity';
import { TgfrenEntity } from './tGFREN.entity';
import { TgfresEntity } from './tGFRES.entity';
import { TgfrgmEntity } from './tGFRGM.entity';
import { TgfrngEntity } from './tGFRNG.entity';
import { TgfrntEntity } from './tGFRNT.entity';
import { TgfrotEntity } from './tGFROT.entity';
import { TgfrotcatEntity } from './tGFROTCAT.entity';
import { TgfrstEntity } from './tGFRST.entity';
import { TgfrtpEntity } from './tGFRTP.entity';
import { TgfsapEntity } from './tGFSAP.entity';
import { TgfsazEntity } from './tGFSAZ.entity';
import { TgfscaEntity } from './tGFSCA.entity';
import { TgfscoEntity } from './tGFSCO.entity';
import { TgfscrEntity } from './tGFSCR.entity';
import { TgfseuEntity } from './tGFSEU.entity';
import { TgfsitEntity } from './tGFSIT.entity';
import { TgfsolEntity } from './tGFSOL.entity';
import { TgfsprEntity } from './tGFSPR.entity';
import { TgfstaEntity } from './tGFSTA.entity';
import { TgfsteEntity } from './tGFSTE.entity';
import { TgfstmvEntity } from './tGFSTMV.entity';
import { TgfstmvhEntity } from './tGFSTMVH.entity';
import { TgftamEntity } from './tGFTAM.entity';
import { TgftdpEntity } from './tGFTDP.entity';
import { TgftelEntity } from './tGFTEL.entity';
import { TgfterEntity } from './tGFTER.entity';
import { TgftfrEntity } from './tGFTFR.entity';
import { TgftipEntity } from './tGFTIP.entity';
import { TgftolEntity } from './tGFTOL.entity';
import { TgftpeEntity } from './tGFTPE.entity';
import { TgftrcEntity } from './tGFTRC.entity';
import { TgfvdgEntity } from './tGFVDG.entity';
import { TgfvdpEntity } from './tGFVDP.entity';
import { TgfveiEntity } from './tGFVEI.entity';
import { TgfvenEntity } from './tGFVEN.entity';
import { TgfviagEntity } from './tGFVIAG.entity';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgfvorEntity } from './tGFVOR.entity';
import { TgicabEntity } from './tGICAB.entity';
import { TgmaiEntity } from './tGMAI.entity';
import { TgmaibEntity } from './tGMAIB.entity';
import { TgmcfgEntity } from './tGMCFG.entity';
import { TgmcfgiEntity } from './tGMCFGI.entity';
import { TgmmsgEntity } from './tGMMSG.entity';
import { TgmperEntity } from './tGMPER.entity';
import { TgmrevEntity } from './tGMREV.entity';
import { TgmtmeEntity } from './tGMTME.entity';
import { TgmtraEntity } from './tGMTRA.entity';
import { TgpacoEntity } from './tGPACO.entity';
import { TgpavaEntity } from './tGPAVA.entity';
import { TgpavdEntity } from './tGPAVD.entity';
import { TgpavrEntity } from './tGPAVR.entity';
import { TgpcabEntity } from './tGPCAB.entity';
import { TgpccrEntity } from './tGPCCR.entity';
import { TgpdesEntity } from './tGPDES.entity';
import { TgpdpaEntity } from './tGPDPA.entity';
import { TgpdpcEntity } from './tGPDPC.entity';
import { TgpescEntity } from './tGPESC.entity';
import { TgpfcfEntity } from './tGPFCF.entity';
import { TgpfcpEntity } from './tGPFCP.entity';
import { TgpfctEntity } from './tGPFCT.entity';
import { TgpfluEntity } from './tGPFLU.entity';
import { TgpgreEntity } from './tGPGRE.entity';
import { TgpgslEntity } from './tGPGSL.entity';
import { TgpicpEntity } from './tGPICP.entity';
import { TgpidaEntity } from './tGPIDA.entity';
import { TgpidcEntity } from './tGPIDC.entity';
import { TgpideEntity } from './tGPIDE.entity';
import { TgpigsEntity } from './tGPIGS.entity';
import { TgpindEntity } from './tGPIND.entity';
import { TgpnivEntity } from './tGPNIV.entity';
import { TgpnvcEntity } from './tGPNVC.entity';
import { TgpperEntity } from './tGPPER.entity';
import { TgpprcEntity } from './tGPPRC.entity';
import { TgpqueEntity } from './tGPQUE.entity';
import { TgpregEntity } from './tGPREG.entity';
import { TgprelEntity } from './tGPREL.entity';
import { TgprepEntity } from './tGPREP.entity';
import { TgptarEntity } from './tGPTAR.entity';
import { TgptcpEntity } from './tGPTCP.entity';
import { TgptprEntity } from './tGPTPR.entity';
import { TgpusuEntity } from './tGPUSU.entity';
import { TgvavpEntity } from './tGVAVP.entity';
import { TgvavprEntity } from './tGVAVPR.entity';
import { TgvngaEntity } from './tGVNGA.entity';
import { TgvnogEntity } from './tGVNOG.entity';
import { TgvpegEntity } from './tGVPEG.entity';
import { TgvpepEntity } from './tGVPEP.entity';
import { TgvpeprEntity } from './tGVPEPR.entity';
import { TgvpergEntity } from './tGVPERG.entity';
import { TgvpetEntity } from './tGVPET.entity';
import { TgvpetpEntity } from './tGVPETP.entity';
import { TgvpeuEntity } from './tGVPEU.entity';
import { TgvravEntity } from './tGVRAV.entity';
import { TgvrngEntity } from './tGVRNG.entity';
import { TgwajeEntity } from './tGWAJE.entity';
import { TgwareEntity } from './tGWARE.entity';
import { TgwarmEntity } from './tGWARM.entity';
import { TgwcoiEntity } from './tGWCOI.entity';
import { TgwcteEntity } from './tGWCTE.entity';
import { TgwdevEntity } from './tGWDEV.entity';
import { TgwegeEntity } from './tGWEGE.entity';
import { TgwempeEntity } from './tGWEMPE.entity';
import { TgwenpEntity } from './tGWENP.entity';
import { TgweseEntity } from './tGWESE.entity';
import { TgwfegEntity } from './tGWFEG.entity';
import { TgwhctEntity } from './tGWHCT.entity';
import { TgwiccEntity } from './tGWICC.entity';
import { TgwinvEntity } from './tGWINV.entity';
import { TgwittEntity } from './tGWITT.entity';
import { TgwivrEntity } from './tGWIVR.entity';
import { TgwlboEntity } from './tGWLBO.entity';
import { TgwlogEntity } from './tGWLOG.entity';
import { TgwquaEntity } from './tGWQUA.entity';
import { TgwrconEntity } from './tGWRCON.entity';
import { TgwrecEntity } from './tGWREC.entity';
import { TgwrevEntity } from './tGWREV.entity';
import { TgwrplEntity } from './tGWRPL.entity';
import { TgwrumaEntity } from './tGWRUMA.entity';
import { TgwsepEntity } from './tGWSEP.entity';
import { TgwtarEntity } from './tGWTAR.entity';
import { TgwtecEntity } from './tGWTEC.entity';
import { TgwtraEntity } from './tGWTRA.entity';
import { TgwtrcdEntity } from './tGWTRCD.entity';
import { TgwtrfEntity } from './tGWTRF.entity';
import { TgwusuEntity } from './tGWUSU.entity';
import { TgwuxtEntity } from './tGWUXT.entity';
import { TimaclEntity } from './tIMACL.entity';
import { TimacmEntity } from './tIMACM.entity';
import { TimadmEntity } from './tIMADM.entity';
import { TimancEntity } from './tIMANC.entity';
import { TimchiEntity } from './tIMCHI.entity';
import { TimcorEntity } from './tIMCOR.entity';
import { TimctrEntity } from './tIMCTR.entity';
import { TimdlvEntity } from './tIMDLV.entity';
import { TimdtlEntity } from './tIMDTL.entity';
import { TimeprEntity } from './tIMEPR.entity';
import { TimfacEntity } from './tIMFAC.entity';
import { TimilcEntity } from './tIMILC.entity';
import { TimimpEntity } from './tIMIMP.entity';
import { TimimrEntity } from './tIMIMR.entity';
import { TimimvEntity } from './tIMIMV.entity';
import { TimiprEntity } from './tIMIPR.entity';
import { TimlbfEntity } from './tIMLBF.entity';
import { TimlcrEntity } from './tIMLCR.entity';
import { TimldtEntity } from './tIMLDT.entity';
import { TimlocEntity } from './tIMLOC.entity';
import { TimlppEntity } from './tIMLPP.entity';
import { TimmfdEntity } from './tIMMFD.entity';
import { TimpprEntity } from './tIMPPR.entity';
import { TimppvEntity } from './tIMPPV.entity';
import { TimrctEntity } from './tIMRCT.entity';
import { TimrenEntity } from './tIMREN.entity';
import { TimripEntity } from './tIMRIP.entity';
import { TimrloEntity } from './tIMRLO.entity';
import { TimsacEntity } from './tIMSAC.entity';
import { TimscaEntity } from './tIMSCA.entity';
import { TimvdoEntity } from './tIMVDO.entity';
import { TjcapjEntity } from './tJCAPJ.entity';
import { TlfdinvrEntity } from './tLFDINVR.entity';
import { TmdfmgEntity } from './tMDFMG.entity';
import { TmiaunEntity } from './tMIAUN.entity';
import { TmiexeEntity } from './tMIEXE.entity';
import { TmiindEntity } from './tMIIND.entity';
import { TmiplaEntity } from './tMIPLA.entity';
import { TmiungEntity } from './tMIUNG.entity';
import { TmscalocoEntity } from './tMSCALOCO.entity';
import { TmscmpEntity } from './tMSCMP.entity';
import { TmscmphistEntity } from './tMSCMPHIST.entity';
import { TmsfvgEntity } from './tMSFVG.entity';
import { TmsnotasEntity } from './tMSNOTAS.entity';
import { TmsordcarregEntity } from './tMSORDCARREG.entity';
import { TmsparcredEntity } from './tMSPARCRED.entity';
import { TmspedEntity } from './tMSPED.entity';
import { TmspedrotEntity } from './tMSPEDROT.entity';
import { TpqgrpEntity } from './tPQGRP.entity';
import { TpqgrqEntity } from './tPQGRQ.entity';
import { TpqinfEntity } from './tPQINF.entity';
import { Tpqpe1Entity } from './tPQPE1.entity';
import { TpqperEntity } from './tPQPER.entity';
import { TpqpesEntity } from './tPQPES.entity';
import { TpqplaEntity } from './tPQPLA.entity';
import { Tpqqu1Entity } from './tPQQU1.entity';
import { TpqqueEntity } from './tPQQUE.entity';
import { TpqresEntity } from './tPQRES.entity';
import { TpqrpeEntity } from './tPQRPE.entity';
import { TpqrpoEntity } from './tPQRPO.entity';
import { TprcmpsEntity } from './tPRCMPS.entity';
import { TprconfEntity } from './tPRCONF.entity';
import { TpreiatvEntity } from './tPREIATV.entity';
import { TprhmrpEntity } from './tPRHMRP.entity';
import { TprhsmpEntity } from './tPRHSMP.entity';
import { TpriatvEntity } from './tPRIATV.entity';
import { TprmpsEntity } from './tPRMPS.entity';
import { TrdblcEntity } from './tRDBLC.entity';
import { TrdcfcEntity } from './tRDCFC.entity';
import { TrievtEntity } from './tRIEVT.entity';
import { TripajEntity } from './tRIPAJ.entity';
import { TripempEntity } from './tRIPEMP.entity';
import { TripimpEntity } from './tRIPIMP.entity';
import { TripisetEntity } from './tRIPISET.entity';
import { TripparcEntity } from './tRIPPARC.entity';
import { TripprodEntity } from './tRIPPROD.entity';
import { TriptopEntity } from './tRIPTOP.entity';
import { TriptpsvEntity } from './tRIPTPSV.entity';
import { TrsavrEntity } from './tRSAVR.entity';
import { TrscanEntity } from './tRSCAN.entity';
import { TrsecgEntity } from './tRSECG.entity';
import { TrsepeEntity } from './tRSEPE.entity';
import { TrsetaEntity } from './tRSETA.entity';
import { TrsperEntity } from './tRSPER.entity';
import { TrsponEntity } from './tRSPON.entity';
import { TrsreqEntity } from './tRSREQ.entity';
import { TrsrneEntity } from './tRSRNE.entity';
import { TrsselEntity } from './tRSSEL.entity';
import { TrsvneEntity } from './tRSVNE.entity';
import { TsdftiEntity } from './tSDFTI.entity';
import { TsiaciEntity } from './tSIACI.entity';
import { TsiacibkEntity } from './tSIACIBK.entity';
import { TsiacmEntity } from './tSIACM.entity';
import { TsianxEntity } from './tSIANX.entity';
import { TsiaviEntity } from './tSIAVI.entity';
import { TsiceuEntity } from './tSICEU.entity';
import { TsicfaEntity } from './tSICFA.entity';
import { TsicfgEntity } from './tSICFG.entity';
import { TsicfgbkEntity } from './tSICFGBK.entity';
import { TsicmdEntity } from './tSICMD.entity';
import { TsiconfEntity } from './tSICONF.entity';
import { TsiconfbkEntity } from './tSICONFBK.entity';
import { TsictaEntity } from './tSICTA.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TsicviewsEntity } from './tSICVIEWS.entity';
import { TsidbqueryEntity } from './tSIDBQUERY.entity';
import { TsidsbEntity } from './tSIDSB.entity';
import { TsidsbaEntity } from './tSIDSBA.entity';
import { TsidsbadpEntity } from './tSIDSBADP.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TsierfEntity } from './tSIERF.entity';
import { TsiexcEntity } from './tSIEXC.entity';
import { TsiexuEntity } from './tSIEXU.entity';
import { TsifcmEntity } from './tSIFCM.entity';
import { TsifilEntity } from './tSIFIL.entity';
import { TsifsnEntity } from './tSIFSN.entity';
import { TsigbcEntity } from './tSIGBC.entity';
import { TsigdgEntity } from './tSIGDG.entity';
import { TsigpuEntity } from './tSIGPU.entity';
import { TsigruEntity } from './tSIGRU.entity';
import { TsihabEntity } from './tSIHAB.entity';
import { TsihcfEntity } from './tSIHCF.entity';
import { TsiilaEntity } from './tSIILA.entity';
import { TsikpcEntity } from './tSIKPC.entity';
import { TsilbaEntity } from './tSILBA.entity';
import { TsilbfEntity } from './tSILBF.entity';
import { TsilboEntity } from './tSILBO.entity';
import { TsilibEntity } from './tSILIB.entity';
import { TsililEntity } from './tSILIL.entity';
import { TsilimEntity } from './tSILIM.entity';
import { TsilogEntity } from './tSILOG.entity';
import { TsimmmEntity } from './tSIMMM.entity';
import { TsimpaEntity } from './tSIMPA.entity';
import { TsiparEntity } from './tSIPAR.entity';
import { TsiperEntity } from './tSIPER.entity';
import { TsipnzEntity } from './tSIPNZ.entity';
import { TsirgbEntity } from './tSIRGB.entity';
import { TsirlgEntity } from './tSIRLG.entity';
import { TsisbpEntity } from './tSISBP.entity';
import { TsisuplEntity } from './tSISUPL.entity';
import { TsitdaEntity } from './tSITDA.entity';
import { TsiterEntity } from './tSITER.entity';
import { TsitvpEntity } from './tSITVP.entity';
import { TsiuctEntity } from './tSIUCT.entity';
import { TsiufiEntity } from './tSIUFI.entity';
import { TsiusubkEntity } from './tSIUSUBK.entity';
import { TslcluEntity } from './tSLCLU.entity';
import { TsshisEntity } from './tSSHIS.entity';
import { TsspacEntity } from './tSSPAC.entity';
import { TtkprocEntity } from './tTKPROC.entity';

@Index('AK_NOME_TSIUSU', ['nomeusu'], { unique: true })
@Index('PK_TSIUSU', ['codusu'], { unique: true })
@Entity('TSIUSU', { schema: 'SANKHYA' })
export class TsiusuEntity {
  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('varchar', {
    name: 'NOMEUSU',
    nullable: true,
    unique: true,
    length: 20,
  })
  nomeusu: string | null;

  @Column('char', { name: 'CONTACESSO', nullable: true, length: 50 })
  contacesso: string | null;

  @Column('datetime', { name: 'DTLIMACESSO', nullable: true })
  dtlimacesso: Date | null;

  @Column('varchar', { name: 'INTERNO', nullable: true, length: 32 })
  interno: string | null;

  @Column('int', { name: 'CODFUNC', nullable: true })
  codfunc: number | null;

  @Column('char', { name: 'EMAIL', nullable: true, length: 80 })
  email: string | null;

  @Column('char', {
    name: 'OPTGAT',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  optgat: string | null;

  @Column('money', { name: 'VLRMAXAUT', nullable: true })
  vlrmaxaut: number | null;

  @Column('smallint', { name: 'NIVEL', default: () => '(100)' })
  nivel: number;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('char', { name: 'CAIXA', length: 1, default: () => "'N'" })
  caixa: string;

  @Column('varchar', { name: 'SERVIDORSMTP', nullable: true, length: 80 })
  servidorsmtp: string | null;

  @Column('char', {
    name: 'TIPOSMTP',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  tiposmtp: string | null;

  @Column('varchar', { name: 'USUARIOSMTP', nullable: true, length: 80 })
  usuariosmtp: string | null;

  @Column('varchar', { name: 'SENHASMTP', nullable: true, length: 250 })
  senhasmtp: string | null;

  @Column('char', { name: 'NOMEFILA', nullable: true, length: 30 })
  nomefila: string | null;

  @Column('datetime', { name: 'DTULTIMASENHA', nullable: true })
  dtultimasenha: Date | null;

  @Column('char', {
    name: 'SENHANUNCAEXPIRA',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  senhanuncaexpira: string | null;

  @Column('char', { name: 'TEMECF', length: 1, default: () => "'N'" })
  temecf: string;

  @Column('smallint', { name: 'TOPBAIXARECEITA', nullable: true })
  topbaixareceita: number | null;

  @Column('smallint', { name: 'TOPBAIXADESPESA', nullable: true })
  topbaixadespesa: number | null;

  @Column('char', { name: 'BAIXAREC', nullable: true, length: 1 })
  baixarec: string | null;

  @Column('char', { name: 'BAIXADESP', nullable: true, length: 1 })
  baixadesp: string | null;

  @Column('char', { name: 'ALTCTAFAT', length: 1, default: () => "'N'" })
  altctafat: string;

  @Column('char', { name: 'ALTCTAIMPBOL', length: 1, default: () => "'N'" })
  altctaimpbol: string;

  @Column('smallint', { name: 'RENDIASVALJUR', nullable: true })
  rendiasvaljur: number | null;

  @Column('char', { name: 'VERCABPROPRIA', length: 1, default: () => "'N'" })
  vercabpropria: string;

  @Column('smallint', { name: 'PORTASMTP', default: () => '(25)' })
  portasmtp: number;

  @Column('char', { name: 'SEGURANCASMTP', length: 1, default: () => "'N'" })
  segurancasmtp: string;

  @Column('char', { name: 'ALTORDCFECH', length: 1, default: () => "'N'" })
  altordcfech: string;

  @Column('char', {
    name: 'EXIBIRVALANALRENT',
    length: 1,
    default: () => "'S'",
  })
  exibirvalanalrent: string;

  @Column('char', { name: 'APROVCOT', length: 1, default: () => "'M'" })
  aprovcot: string;

  @Column('char', { name: 'USER_NAME', nullable: true, length: 50 })
  userName: string | null;

  @Column('int', { name: 'CODETAPA', nullable: true })
  codetapa: number | null;

  @Column('char', { name: 'CONTAGOL', nullable: true, length: 30 })
  contagol: string | null;

  @Column('datetime', { name: 'DTULTACESSO', nullable: true })
  dtultacesso: Date | null;

  @Column('varchar', { name: 'EMAILSOLLIB', nullable: true, length: 80 })
  emailsollib: string | null;

  @Column('char', { name: 'NOTSLAFILA', nullable: true, length: 1 })
  notslafila: string | null;

  @Column('char', { name: 'CPF', nullable: true, length: 11 })
  cpf: string | null;

  @Column('char', { name: 'RG', nullable: true, length: 15 })
  rg: string | null;

  @Column('char', { name: 'NOMEUSUCPLT', nullable: true, length: 40 })
  nomeusucplt: string | null;

  @Column('datetime', { name: 'DTNASC', nullable: true })
  dtnasc: Date | null;

  @Column('char', { name: 'IMPNFCENTRAL', length: 1, default: () => "'S'" })
  impnfcentral: string;

  @Column('smallint', { name: 'CODUSUALTER', nullable: true })
  codusualter: number | null;

  @Column('char', { name: 'NOMEUSUALTER', nullable: true, length: 10 })
  nomeusualter: string | null;

  @Column('smallint', { name: 'MINUTOSFIN', default: () => '(0)' })
  minutosfin: number;

  @Column('varchar', {
    name: 'ACESSOVISUALCAB',
    length: 1,
    default: () => "'T'",
  })
  acessovisualcab: string;

  @Column('varchar', { name: 'RESTRINGECART', length: 1, default: () => "'N'" })
  restringecart: string;

  @Column('varchar', { name: 'VERIMPCURS', length: 1, default: () => "'S'" })
  verimpcurs: string;

  @Column('varchar', { name: 'EXCLIBORC', length: 1, default: () => "'N'" })
  excliborc: string;

  @Column('varchar', { name: 'LOCALE', length: 8, default: () => "'PT_BR'" })
  locale: string;

  @Column('image', { name: 'FOTO', nullable: true })
  foto: Buffer | null;

  @Column('char', { name: 'PERMEXPREL', length: 1, default: () => "'S'" })
  permexprel: string;

  @Column('smallint', { name: 'TOLERANCIAACESSO', nullable: true })
  toleranciaacesso: number | null;

  @Column('varchar', { name: 'VISACESOUTUSU', length: 1, default: () => "'S'" })
  visacesoutusu: string;

  @Column('varchar', { name: 'APENASCOMPLIB', length: 1, default: () => "'N'" })
  apenascomplib: string;

  @Column('varchar', { name: 'IMPSEP', nullable: true, length: 250 })
  impsep: string | null;

  @Column('char', { name: 'ACESSAFORMULAREL', length: 1, default: () => "'N'" })
  acessaformularel: string;

  @Column('char', { name: 'INTEGRAECONECT', length: 1, default: () => "'N'" })
  integraeconect: string;

  @Column('varchar', { name: 'INFRECSEN', nullable: true, length: 3103 })
  infrecsen: string | null;

  @Column('char', { name: 'AVISAVARPRECO', length: 1, default: () => "'N'" })
  avisavarpreco: string;

  @Column('char', { name: 'NIVELACESSO', nullable: true, length: 1 })
  nivelacesso: string | null;

  @Column('char', {
    name: 'PERMALTMOEDA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  permaltmoeda: string | null;

  @Column('char', { name: 'PERMIMPRIMEREL', length: 1, default: () => "'N'" })
  permimprimerel: string;

  @Column('char', { name: 'INSTALAPACOTESS', length: 1, default: () => "'N'" })
  instalapacotess: string;

  @Column('text', { name: 'INFBIOMDIG', nullable: true })
  infbiomdig: string | null;

  @Column('char', { name: 'IGNORAHORASCRUZ', length: 1, default: () => "'N'" })
  ignorahorascruz: string;

  @Column('int', { name: 'SENHAECONECT', nullable: true })
  senhaeconect: number | null;

  @Column('varchar', {
    name: 'CODIDECONECT',
    nullable: true,
    length: 40,
    default: () => '(0)',
  })
  codideconect: string | null;

  @Column('varchar', { name: 'IDPERFILECONECT', nullable: true, length: 20 })
  idperfileconect: string | null;

  @Column('char', { name: 'PERMREPERRO', length: 1, default: () => "'N'" })
  permreperro: string;

  @Column('char', { name: 'SELECTWCAPO', length: 1, default: () => "'N'" })
  selectwcapo: string;

  @Column('varchar', { name: 'PROPRIETARIO', nullable: true, length: 1 })
  proprietario: string | null;

  @Column('varchar', { name: 'OPERACIONAL', nullable: true, length: 1 })
  operacional: string | null;

  @Column('varchar', { name: 'IMPLANTADOR', nullable: true, length: 1 })
  implantador: string | null;

  @Column('varchar', { name: 'GESTOR', nullable: true, length: 1 })
  gestor: string | null;

  @Column('int', { name: 'CODPERFIL', nullable: true })
  codperfil: number | null;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;

  @Column('char', {
    name: 'TIMVERTODASFACS',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  timvertodasfacs: string | null;

  @Column('varchar', { name: 'TIMPATHSCANNER', nullable: true, length: 100 })
  timpathscanner: string | null;

  @Column('char', {
    name: 'TIMBAIXAWORD',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  timbaixaword: string | null;

  @Column('varchar', { name: 'USUREDE', nullable: true, length: 200 })
  usurede: string | null;

  @Column('varchar', { name: 'GRUPOREDE', nullable: true, length: 50 })
  gruporede: string | null;

  @Column('varchar', { name: 'IGNORALDAP', nullable: true, length: 1 })
  ignoraldap: string | null;

  @Column('char', { name: 'TIMBAIXTITRECABE', length: 1, default: () => "'N'" })
  timbaixtitrecabe: string;

  @Column('char', { name: 'ATUNUVERSAO', nullable: true, length: 1 })
  atunuversao: string | null;

  @Column('datetime', { name: 'ACCOUNTDHEXPIRA', nullable: true })
  accountdhexpira: Date | null;

  @Column('text', { name: 'ACCOUNTTOKEN', nullable: true })
  accounttoken: string | null;

  @Column('varchar', { name: 'ACCOUNTID', nullable: true, length: 255 })
  accountid: string | null;

  @Column('varchar', { name: 'ACCOUNTNOMEFOTO', nullable: true, length: 255 })
  accountnomefoto: string | null;

  @Column('varchar', { name: 'ACCOUNTEMAIL', nullable: true, length: 256 })
  accountemail: string | null;

  @Column('varchar', { name: 'TOKENCHECKOUT', nullable: true, length: 13 })
  tokencheckout: string | null;

  @Column('varchar', { name: 'ACESSOPDVCANCITENS', nullable: true, length: 1 })
  acessopdvcancitens: string | null;

  @Column('varchar', { name: 'ACESSOPDVSANG', nullable: true, length: 1 })
  acessopdvsang: string | null;

  @Column('varchar', { name: 'ACESSOPDVSUPR', nullable: true, length: 1 })
  acessopdvsupr: string | null;

  @Column('varchar', { name: 'ACESSOPDVSANGPDESP', nullable: true, length: 1 })
  acessopdvsangpdesp: string | null;

  @Column('varchar', { name: 'TIPENVNOTSOL', nullable: true, length: 1 })
  tipenvnotsol: string | null;

  @Column('varchar', { name: 'LIBERACREDITO', nullable: true, length: 10 })
  liberacredito: string | null;

  @Column('smallint', { name: 'CODEMPNEGOC', nullable: true })
  codempnegoc: number | null;

  @Column('varchar', { name: 'PODEALTERARPEF', nullable: true, length: 1 })
  podealterarpef: string | null;

  @Column('varchar', { name: 'AD_IDEXTERNO', nullable: true, length: 100 })
  adIdexterno: string | null;

  @Column('varchar', {
    name: 'AD_RECEBENOTIFICACAO',
    nullable: true,
    length: 10,
  })
  adRecebenotificacao: string | null;

  @Column('varchar', { name: 'AD_REABRIROS', nullable: true, length: 10 })
  adReabriros: string | null;

  @Column('varchar', { name: 'AD_AUTOSIRVO', nullable: true, length: 10 })
  adAutosirvo: string | null;

  @Column('varchar', { name: 'AD_RECEBENOTIFASO', nullable: true, length: 10 })
  adRecebenotifaso: string | null;

  @Column('int', { name: 'ACCOUNTPARTNER', nullable: true })
  accountpartner: number | null;

  @Column('int', { name: 'TIPOUSU', default: () => '(0)' })
  tipousu: number;

  @Column('char', { name: 'IMP2SANSUPCAI', length: 1, default: () => "'S'" })
  imp2Sansupcai: string;

  @Column('char', {
    name: 'ABREGAVETA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  abregaveta: string | null;

  @Column('varchar', { name: 'AD_CADEADOMOS', nullable: true, length: 100 })
  adCadeadomos: string | null;

  @Column('varchar', { name: 'AD_AUTOPERAR1', nullable: true, length: 100 })
  adAutoperar1: string | null;

  @Column('varchar', { name: 'AD_AUTOPERAR2', nullable: true, length: 100 })
  adAutoperar2: string | null;

  @Column('varchar', { name: 'AD_AUTOPERAR3', nullable: true, length: 100 })
  adAutoperar3: string | null;

  @Column('varchar', { name: 'AD_AUTOPERAR4', nullable: true, length: 100 })
  adAutoperar4: string | null;

  @Column('varchar', { name: 'AD_AUTOPERAR5', nullable: true, length: 100 })
  adAutoperar5: string | null;

  @Column('varchar', { name: 'AD_AUTOPERAR6', nullable: true, length: 100 })
  adAutoperar6: string | null;

  @Column('varchar', { name: 'AD_AUTOPERAR7', nullable: true, length: 100 })
  adAutoperar7: string | null;

  @Column('char', {
    name: 'DESCTOTALNOTAPDV',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  desctotalnotapdv: string | null;

  @Column('varchar', { name: 'AD_TELEFONECORP', nullable: true, length: 20 })
  adTelefonecorp: string | null;

  @Column('varchar', { name: 'AD_MATMOSAIC', nullable: true, length: 20 })
  adMatmosaic: string | null;

  @Column('char', { name: 'AD_ENVIA_WPP', nullable: true, length: 1 })
  adEnviaWpp: string | null;

  @OneToMany(
    () => AdAcertoviagemEntity,
    (adAcertoviagemEntity) => adAcertoviagemEntity.codusuaprov,
  )
  adAcertoviagems: AdAcertoviagemEntity[];

  @OneToMany(
    () => AdAcertoviagemEntity,
    (adAcertoviagemEntity) => adAcertoviagemEntity.codusu,
  )
  adAcertoviagems2: AdAcertoviagemEntity[];

  @OneToMany(
    () => AdAcertoviagemEntity,
    (adAcertoviagemEntity) => adAcertoviagemEntity.codusurejeito,
  )
  adAcertoviagems3: AdAcertoviagemEntity[];

  @OneToMany(
    () => AdAcertoviagemEntity,
    (adAcertoviagemEntity) => adAcertoviagemEntity.codusuaprovdesp,
  )
  adAcertoviagems4: AdAcertoviagemEntity[];

  @OneToMany(
    () => AdAcertoviagemEntity,
    (adAcertoviagemEntity) => adAcertoviagemEntity.usuAlter,
  )
  adAcertoviagems5: AdAcertoviagemEntity[];

  @OneToMany(
    () => AdAdgigperguntasEntity,
    (adAdgigperguntasEntity) => adAdgigperguntasEntity.usuCreated,
  )
  adAdgigperguntas: AdAdgigperguntasEntity[];

  @OneToMany(
    () => AdAdgigperguntasEntity,
    (adAdgigperguntasEntity) => adAdgigperguntasEntity.usuUpdated,
  )
  adAdgigperguntas2: AdAdgigperguntasEntity[];

  @OneToMany(
    () => AdAdgigperguntasEntity,
    (adAdgigperguntasEntity) => adAdgigperguntasEntity.usuDeleted,
  )
  adAdgigperguntas3: AdAdgigperguntasEntity[];

  @OneToMany(
    () => AdAdgigquestionarioEntity,
    (adAdgigquestionarioEntity) => adAdgigquestionarioEntity.idUserUpdated,
  )
  adAdgigquestionarios: AdAdgigquestionarioEntity[];

  @OneToMany(
    () => AdAdgigquestionarioEntity,
    (adAdgigquestionarioEntity) => adAdgigquestionarioEntity.idUserDeleted,
  )
  adAdgigquestionarios2: AdAdgigquestionarioEntity[];

  @OneToMany(
    () => AdAdgigquestionarioEntity,
    (adAdgigquestionarioEntity) => adAdgigquestionarioEntity.idUserCreated,
  )
  adAdgigquestionarios3: AdAdgigquestionarioEntity[];

  @OneToMany(
    () => AdAdgigquestperguntasEntity,
    (adAdgigquestperguntasEntity) => adAdgigquestperguntasEntity.usuColab,
  )
  adAdgigquestperguntas: AdAdgigquestperguntasEntity[];

  @OneToMany(
    () => AdAdgigquestperguntasEntity,
    (adAdgigquestperguntasEntity) => adAdgigquestperguntasEntity.usuGestor,
  )
  adAdgigquestperguntas2: AdAdgigquestperguntasEntity[];

  @OneToMany(
    () => AdAlteracaixEntity,
    (adAlteracaixEntity) => adAlteracaixEntity.codusualt,
  )
  adAlteracaixes: AdAlteracaixEntity[];

  @OneToMany(
    () => AdAlteracaixEntity,
    (adAlteracaixEntity) => adAlteracaixEntity.codusurespant,
  )
  adAlteracaixes2: AdAlteracaixEntity[];

  @OneToMany(
    () => AdAlteracaixEntity,
    (adAlteracaixEntity) => adAlteracaixEntity.codusurespnovo,
  )
  adAlteracaixes3: AdAlteracaixEntity[];

  @OneToMany(
    () => AdApontamentoEntity,
    (adApontamentoEntity) => adApontamentoEntity.codusu,
  )
  adApontamentos: AdApontamentoEntity[];

  @OneToMany(
    () => AdCadlavchecklistEntity,
    (adCadlavchecklistEntity) => adCadlavchecklistEntity.codusu,
  )
  adCadlavchecklists: AdCadlavchecklistEntity[];

  @OneToMany(
    () => AdChamadoscorridasEntity,
    (adChamadoscorridasEntity) => adChamadoscorridasEntity.user,
  )
  adChamadoscorridas: AdChamadoscorridasEntity[];

  @OneToMany(
    () => AdChamadoscorridasEntity,
    (adChamadoscorridasEntity) => adChamadoscorridasEntity.usuMotorista,
  )
  adChamadoscorridas2: AdChamadoscorridasEntity[];

  @OneToMany(
    () => AdChamadoscorridasEntity,
    (adChamadoscorridasEntity) => adChamadoscorridasEntity.usuSolicitante,
  )
  adChamadoscorridas3: AdChamadoscorridasEntity[];

  @OneToMany(
    () => AdComadmEntity,
    (adComadmEntity) => adComadmEntity.validadopor,
  )
  adComadms: AdComadmEntity[];

  @OneToMany(
    () => AdComadmEntity,
    (adComadmEntity) => adComadmEntity.solicitante,
  )
  adComadms2: AdComadmEntity[];

  @OneToMany(
    () => AdComadmEntity,
    (adComadmEntity) => adComadmEntity.solicitado,
  )
  adComadms3: AdComadmEntity[];

  @OneToMany(
    () => AdComadmEntity,
    (adComadmEntity) => adComadmEntity.finalizadopor,
  )
  adComadms4: AdComadmEntity[];

  @OneToMany(
    () => AdComadmEntity,
    (adComadmEntity) => adComadmEntity.codusualter,
  )
  adComadms5: AdComadmEntity[];

  @OneToMany(
    () => AdComadm1Entity,
    (adComadm1Entity) => adComadm1Entity.atendente,
  )
  adComadms6: AdComadm1Entity[];

  @OneToMany(
    () => AdContratgigEntity,
    (adContratgigEntity) => adContratgigEntity.codusuinc,
  )
  adContratgigs: AdContratgigEntity[];

  @OneToMany(
    () => AdGigpontosEntity,
    (adGigpontosEntity) => adGigpontosEntity.usuChange,
  )
  adGigpontos: AdGigpontosEntity[];

  @OneToMany(
    () => AdGigquestionariofuncionariosEntity,
    (adGigquestionariofuncionariosEntity) =>
      adGigquestionariofuncionariosEntity.codusugestor,
  )
  adGigquestionariofuncionarios: AdGigquestionariofuncionariosEntity[];

  @OneToMany(
    () => AdGigquestionariofuncionariosEntity,
    (adGigquestionariofuncionariosEntity) =>
      adGigquestionariofuncionariosEntity.codusualter,
  )
  adGigquestionariofuncionarios2: AdGigquestionariofuncionariosEntity[];

  @OneToMany(
    () => AdGigquestionariofuncionariosEntity,
    (adGigquestionariofuncionariosEntity) =>
      adGigquestionariofuncionariosEntity.codusuavaliado,
  )
  adGigquestionariofuncionarios3: AdGigquestionariofuncionariosEntity[];

  @OneToMany(
    () => AdGigquestionariosEntity,
    (adGigquestionariosEntity) => adGigquestionariosEntity.codusu,
  )
  adGigquestionarios: AdGigquestionariosEntity[];

  @OneToMany(
    () => AdInsperealEntity,
    (adInsperealEntity) => adInsperealEntity.codusuinsp,
  )
  adInspereals: AdInsperealEntity[];

  @OneToMany(
    () => AdLogstatusosEntity,
    (adLogstatusosEntity) => adLogstatusosEntity.codusu,
  )
  adLogstatusos: AdLogstatusosEntity[];

  @OneToMany(
    () => AdPropostaEntity,
    (adPropostaEntity) => adPropostaEntity.codusu,
  )
  adPropostas: AdPropostaEntity[];

  @OneToMany(
    () => AdPropostacontEntity,
    (adPropostacontEntity) => adPropostacontEntity.codusu,
  )
  adPropostaconts: AdPropostacontEntity[];

  @OneToMany(
    () => AdRelfunciteEntity,
    (adRelfunciteEntity) => adRelfunciteEntity.codusurel2,
  )
  adRelfuncites: AdRelfunciteEntity[];

  @OneToMany(() => AdReqdpEntity, (adReqdpEntity) => adReqdpEntity.usuUpdt)
  adReqdps: AdReqdpEntity[];

  @OneToMany(
    () => AdSegurancaEntity,
    (adSegurancaEntity) => adSegurancaEntity.codusuresp,
  )
  adSegurancas: AdSegurancaEntity[];

  @OneToMany(
    () => AdSegurancaEntity,
    (adSegurancaEntity) => adSegurancaEntity.codusufin,
  )
  adSegurancas2: AdSegurancaEntity[];

  @OneToMany(() => AdSirvoEntity, (adSirvoEntity) => adSirvoEntity.codusu)
  adSirvos: AdSirvoEntity[];

  @OneToMany(
    () => AdSirvomotEntity,
    (adSirvomotEntity) => adSirvomotEntity.codusu,
  )
  adSirvomots: AdSirvomotEntity[];

  @OneToMany(
    () => AdSopragemEntity,
    (adSopragemEntity) => adSopragemEntity.codusu,
  )
  adSopragems: AdSopragemEntity[];

  @OneToMany(
    () => AdTcfexecEntity,
    (adTcfexecEntity) => adTcfexecEntity.codusuexec,
  )
  adTcfexecs: AdTcfexecEntity[];

  @OneToMany(() => AdTcfexecEntity, (adTcfexecEntity) => adTcfexecEntity.codusu)
  adTcfexecs2: AdTcfexecEntity[];

  @OneToMany(
    () => AdTsiusuhabEntity,
    (adTsiusuhabEntity) => adTsiusuhabEntity.codusuinc,
  )
  adTsiusuhabs: AdTsiusuhabEntity[];

  @OneToMany(
    () => AdTsiusuhabEntity,
    (adTsiusuhabEntity) => adTsiusuhabEntity.codusualter,
  )
  adTsiusuhabs2: AdTsiusuhabEntity[];

  @OneToMany(
    () => AudittfpageEntity,
    (audittfpageEntity) => audittfpageEntity.codusu2,
  )
  audittfpages: AudittfpageEntity[];

  @OneToMany(
    () => AudittfpbasEntity,
    (audittfpbasEntity) => audittfpbasEntity.codusu2,
  )
  audittfpbas: AudittfpbasEntity[];

  @OneToMany(
    () => AudittfpferEntity,
    (audittfpferEntity) => audittfpferEntity.codusu,
  )
  audittfpfers: AudittfpferEntity[];

  @OneToMany(
    () => AudittfpfolEntity,
    (audittfpfolEntity) => audittfpfolEntity.codusu2,
  )
  audittfpfols: AudittfpfolEntity[];

  @OneToMany(() => GfrguiEntity, (gfrguiEntity) => gfrguiEntity.codusu2)
  gfrguis: GfrguiEntity[];

  @OneToMany(() => TapcusEntity, (tapcusEntity) => tapcusEntity.codusu)
  tapcuses: TapcusEntity[];

  @OneToMany(() => TapfatEntity, (tapfatEntity) => tapfatEntity.codusu)
  tapfats: TapfatEntity[];

  @OneToMany(() => TapiapEntity, (tapiapEntity) => tapiapEntity.codusu)
  tapiaps: TapiapEntity[];

  @OneToMany(() => TapmapEntity, (tapmapEntity) => tapmapEntity.codusu)
  tapmaps: TapmapEntity[];

  @OneToMany(() => TapmrmEntity, (tapmrmEntity) => tapmrmEntity.codusu)
  tapmrms: TapmrmEntity[];

  @OneToMany(() => TcacprEntity, (tcacprEntity) => tcacprEntity.codusuresp)
  tcacprs: TcacprEntity[];

  @OneToMany(() => TcahstEntity, (tcahstEntity) => tcahstEntity.codusu2)
  tcahsts: TcahstEntity[];

  @OneToMany(() => TcbaaecdEntity, (tcbaaecdEntity) => tcbaaecdEntity.codusu)
  tcbaaecds: TcbaaecdEntity[];

  @OneToMany(
    () => TcbaaecdsubEntity,
    (tcbaaecdsubEntity) => tcbaaecdsubEntity.codusu,
  )
  tcbaaecdsubs: TcbaaecdsubEntity[];

  @OneToMany(() => TcbauxEntity, (tcbauxEntity) => tcbauxEntity.codusu)
  tcbauxes: TcbauxEntity[];

  @OneToMany(() => TcbdepEntity, (tcbdepEntity) => tcbdepEntity.codusu)
  tcbdeps: TcbdepEntity[];

  @OneToMany(() => TcbdinEntity, (tcbdinEntity) => tcbdinEntity.codusu)
  tcbdins: TcbdinEntity[];

  @OneToMany(() => TcbdplrEntity, (tcbdplrEntity) => tcbdplrEntity.codusu)
  tcbdplrs: TcbdplrEntity[];

  @OneToMany(() => TcbecbEntity, (tcbecbEntity) => tcbecbEntity.codusu)
  tcbecbs: TcbecbEntity[];

  @OneToMany(() => TcbecfEntity, (tcbecfEntity) => tcbecfEntity.codusu)
  tcbecfs: TcbecfEntity[];

  @OneToMany(() => TcbecfcEntity, (tcbecfcEntity) => tcbecfcEntity.codusu)
  tcbecfcs: TcbecfcEntity[];

  @OneToMany(() => TcbecrEntity, (tcbecrEntity) => tcbecrEntity.codusu)
  tcbecrs: TcbecrEntity[];

  @OneToMany(() => TcbefbEntity, (tcbefbEntity) => tcbefbEntity.codusu)
  tcbefbs: TcbefbEntity[];

  @OneToMany(() => TcbefrEntity, (tcbefrEntity) => tcbefrEntity.codusu)
  tcbefrs: TcbefrEntity[];

  @OneToMany(() => TcbftrEntity, (tcbftrEntity) => tcbftrEntity.codusu)
  tcbftrs: TcbftrEntity[];

  @OneToMany(() => TcbirpEntity, (tcbirpEntity) => tcbirpEntity.codusu)
  tcbirps: TcbirpEntity[];

  @OneToMany(() => TcbiseEntity, (tcbiseEntity) => tcbiseEntity.codusu)
  tcbises: TcbiseEntity[];

  @OneToMany(() => TcblanEntity, (tcblanEntity) => tcblanEntity.codusu)
  tcblans: TcblanEntity[];

  @OneToMany(
    () => TcblanConfEntity,
    (tcblanConfEntity) => tcblanConfEntity.codusu,
  )
  tcblanConfs: TcblanConfEntity[];

  @OneToMany(() => TcblotEntity, (tcblotEntity) => tcblotEntity.codusu)
  tcblots: TcblotEntity[];

  @OneToMany(() => TcbpciEntity, (tcbpciEntity) => tcbpciEntity.codusu)
  tcbpcis: TcbpciEntity[];

  @OneToMany(() => TcbrelEntity, (tcbrelEntity) => tcbrelEntity.codusu)
  tcbrels: TcbrelEntity[];

  @OneToMany(() => TcbsigEntity, (tcbsigEntity) => tcbsigEntity.codusu)
  tcbsigs: TcbsigEntity[];

  @OneToMany(() => TccconEntity, (tccconEntity) => tccconEntity.codusuvar)
  tcccons: TccconEntity[];

  @OneToMany(() => TccratEntity, (tccratEntity) => tccratEntity.codusu)
  tccrats: TccratEntity[];

  @OneToMany(() => TceadiEntity, (tceadiEntity) => tceadiEntity.codusu)
  tceadis: TceadiEntity[];

  @OneToMany(() => TceadiHisEntity, (tceadiHisEntity) => tceadiHisEntity.codusu)
  tceadiHis: TceadiHisEntity[];

  @OneToMany(() => TcecabEntity, (tcecabEntity) => tcecabEntity.codusu)
  tcecabs: TcecabEntity[];

  @OneToMany(() => TcecabEntity, (tcecabEntity) => tcecabEntity.usuaprovacao)
  tcecabs2: TcecabEntity[];

  @OneToMany(() => TcecabHisEntity, (tcecabHisEntity) => tcecabHisEntity.codusu)
  tcecabHis: TcecabHisEntity[];

  @OneToMany(
    () => TcecabHisEntity,
    (tcecabHisEntity) => tcecabHisEntity.usuaprovacao,
  )
  tcecabHis2: TcecabHisEntity[];

  @OneToMany(() => TcecarEntity, (tcecarEntity) => tcecarEntity.codusu)
  tcecars: TcecarEntity[];

  @OneToMany(() => TcencmEntity, (tcencmEntity) => tcencmEntity.codusu)
  tcencms: TcencmEntity[];

  @OneToMany(() => TcfabtEntity, (tcfabtEntity) => tcfabtEntity.codusuinc)
  tcfabts: TcfabtEntity[];

  @OneToMany(() => TcfabtEntity, (tcfabtEntity) => tcfabtEntity.codusualter)
  tcfabts2: TcfabtEntity[];

  @OneToMany(() => TcfcptEntity, (tcfcptEntity) => tcfcptEntity.codusuinc)
  tcfcpts: TcfcptEntity[];

  @OneToMany(() => TcfcptEntity, (tcfcptEntity) => tcfcptEntity.codususai)
  tcfcpts2: TcfcptEntity[];

  @OneToMany(
    () => TcfcptpendEntity,
    (tcfcptpendEntity) => tcfcptpendEntity.codususol,
  )
  tcfcptpends: TcfcptpendEntity[];

  @OneToMany(() => TcfoscabEntity, (tcfoscabEntity) => tcfoscabEntity.codusu)
  tcfoscabs: TcfoscabEntity[];

  @OneToMany(
    () => TcfoscabEntity,
    (tcfoscabEntity) => tcfoscabEntity.codusureabre,
  )
  tcfoscabs2: TcfoscabEntity[];

  @OneToMany(
    () => TcfoscabEntity,
    (tcfoscabEntity) => tcfoscabEntity.codusufinaliza,
  )
  tcfoscabs3: TcfoscabEntity[];

  @OneToMany(
    () => TcfpnuhistEntity,
    (tcfpnuhistEntity) => tcfpnuhistEntity.codusu,
  )
  tcfpnuhists: TcfpnuhistEntity[];

  @OneToMany(
    () => TcfprodosEntity,
    (tcfprodosEntity) => tcfprodosEntity.adCodusu,
  )
  tcfprodos: TcfprodosEntity[];

  @OneToMany(
    () => TcfservosatoEntity,
    (tcfservosatoEntity) => tcfservosatoEntity.codexec,
  )
  tcfservosatoes: TcfservosatoEntity[];

  @OneToMany(() => TcibemEntity, (tcibemEntity) => tcibemEntity.codusucompra)
  tcibems: TcibemEntity[];

  @OneToMany(
    () => TcibemEntity,
    (tcibemEntity) => tcibemEntity.codusudesmembramento,
  )
  tcibems2: TcibemEntity[];

  @OneToMany(() => TcilocEntity, (tcilocEntity) => tcilocEntity.codusu)
  tcilocs: TcilocEntity[];

  @OneToMany(() => TcsaltEntity, (tcsaltEntity) => tcsaltEntity.codusu)
  tcsalts: TcsaltEntity[];

  @OneToMany(() => TcsaveEntity, (tcsaveEntity) => tcsaveEntity.codusu)
  tcsaves: TcsaveEntity[];

  @OneToMany(() => TcsbmeEntity, (tcsbmeEntity) => tcsbmeEntity.codusu)
  tcsbmes: TcsbmeEntity[];

  @OneToMany(() => TcscnvEntity, (tcscnvEntity) => tcscnvEntity.codusualter)
  tcscnvs: TcscnvEntity[];

  @OneToMany(() => TcsconEntity, (tcsconEntity) => tcsconEntity.codusu)
  tcscons: TcsconEntity[];

  @OneToMany(() => TcsconEntity, (tcsconEntity) => tcsconEntity.codmonsankhya)
  tcscons2: TcsconEntity[];

  @OneToMany(() => TcscveEntity, (tcscveEntity) => tcscveEntity.codusu)
  tcscves: TcscveEntity[];

  @OneToMany(() => TcseagEntity, (tcseagEntity) => tcseagEntity.codusu)
  tcseags: TcseagEntity[];

  @OneToMany(() => TcseflEntity, (tcseflEntity) => tcseflEntity.codusu2)
  tcsefls: TcseflEntity[];

  @OneToMany(() => TcsefpEntity, (tcsefpEntity) => tcsefpEntity.codusu)
  tcsefps: TcsefpEntity[];

  @OneToMany(() => TcsehiEntity, (tcsehiEntity) => tcsehiEntity.codusu)
  tcsehis: TcsehiEntity[];

  @OneToMany(() => TcserrEntity, (tcserrEntity) => tcserrEntity.codusuatual)
  tcserrs: TcserrEntity[];

  @OneToMany(() => TcserrEntity, (tcserrEntity) => tcserrEntity.codusu)
  tcserrs2: TcserrEntity[];

  @ManyToMany(() => TcsnhcEntity, (tcsnhcEntity) => tcsnhcEntity.tsiusus)
  @JoinTable({
    name: 'TCSEXN',
    joinColumns: [{ name: 'CODEXECUTANTE', referencedColumnName: 'codusu' }],
    inverseJoinColumns: [
      { name: 'NUNEGOCIACAO', referencedColumnName: 'nunegociacao' },
    ],
    schema: 'SANKHYA',
  })
  tcsnhcs: TcsnhcEntity[];

  @OneToMany(() => TcsfeeEntity, (tcsfeeEntity) => tcsfeeEntity.codusu2)
  tcsfees: TcsfeeEntity[];

  @OneToMany(() => TcsfeqEntity, (tcsfeqEntity) => tcsfeqEntity.codusu2)
  tcsfeqs: TcsfeqEntity[];

  @OneToMany(() => TcsfhaEntity, (tcsfhaEntity) => tcsfhaEntity.codusu)
  tcsfhas: TcsfhaEntity[];

  @OneToMany(() => TcsfhsEntity, (tcsfhsEntity) => tcsfhsEntity.codusu)
  tcsfhs: TcsfhsEntity[];

  @OneToMany(() => TcshseEntity, (tcshseEntity) => tcshseEntity.codusu)
  tcshses: TcshseEntity[];

  @OneToMany(() => TcsieEntity, (tcsieEntity) => tcsieEntity.codusu)
  tcsies: TcsieEntity[];

  @OneToMany(() => TcsiteEntity, (tcsiteEntity) => tcsiteEntity.codusu2)
  tcsites: TcsiteEntity[];

  @OneToMany(() => TcsiteEntity, (tcsiteEntity) => tcsiteEntity.codusurem)
  tcsites2: TcsiteEntity[];

  @OneToMany(
    () => TcsliativaEntity,
    (tcsliativaEntity) => tcsliativaEntity.codusu,
  )
  tcsliativas: TcsliativaEntity[];

  @OneToMany(
    () => TcsliativaEntity,
    (tcsliativaEntity) => tcsliativaEntity.codusulib,
  )
  tcsliativas2: TcsliativaEntity[];

  @OneToMany(
    () => TcslipendenteEntity,
    (tcslipendenteEntity) => tcslipendenteEntity.codusu,
  )
  tcslipendentes: TcslipendenteEntity[];

  @OneToMany(
    () => TcslipendenteEntity,
    (tcslipendenteEntity) => tcslipendenteEntity.codusulib,
  )
  tcslipendentes2: TcslipendenteEntity[];

  @OneToMany(() => TcsnhcEntity, (tcsnhcEntity) => tcsnhcEntity.codusu)
  tcsnhcs2: TcsnhcEntity[];

  @OneToMany(() => TcsoccEntity, (tcsoccEntity) => tcsoccEntity.codusu)
  tcsoccs: TcsoccEntity[];

  @OneToMany(
    () => TcsoseEntity,
    (tcsoseEntity) => tcsoseEntity.codususolicitante,
  )
  tcsoses: TcsoseEntity[];

  @OneToMany(() => TcsoseEntity, (tcsoseEntity) => tcsoseEntity.codusufech)
  tcsoses2: TcsoseEntity[];

  @OneToMany(() => TcsoseEntity, (tcsoseEntity) => tcsoseEntity.codusuresp)
  tcsoses3: TcsoseEntity[];

  @OneToMany(() => TcsoseEntity, (tcsoseEntity) => tcsoseEntity.codatend)
  tcsoses4: TcsoseEntity[];

  @OneToMany(() => TcsppfEntity, (tcsppfEntity) => tcsppfEntity.codusu)
  tcsppfs: TcsppfEntity[];

  @OneToMany(() => TcspreqtdEntity, (tcspreqtdEntity) => tcspreqtdEntity.codusu)
  tcspreqtds: TcspreqtdEntity[];

  @OneToMany(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.codusuresp)
  tcsprjs: TcsprjEntity[];

  @OneToMany(() => TcspssEntity, (tcspssEntity) => tcspssEntity.codusu)
  tcspsses: TcspssEntity[];

  @OneToMany(() => TcsrusEntity, (tcsrusEntity) => tcsrusEntity.codusu2)
  tcsruses: TcsrusEntity[];

  @OneToMany(() => TcsrusEntity, (tcsrusEntity) => tcsrusEntity.codusurel2)
  tcsruses2: TcsrusEntity[];

  @OneToOne(() => TcssagEntity, (tcssagEntity) => tcssagEntity.codusu2)
  tcssag: TcssagEntity;

  @OneToMany(() => TcsspnEntity, (tcsspnEntity) => tcsspnEntity.codusu)
  tcsspns: TcsspnEntity[];

  @OneToMany(() => TcsvpcEntity, (tcsvpcEntity) => tcsvpcEntity.codusu)
  tcsvpcs: TcsvpcEntity[];

  @OneToMany(() => TddperEntity, (tddperEntity) => tddperEntity.codusu2)
  tddpers: TddperEntity[];

  @OneToMany(() => TddperbkEntity, (tddperbkEntity) => tddperbkEntity.codusu2)
  tddperbks: TddperbkEntity[];

  @OneToMany(
    () => TfcavcEntity,
    (tfcavcEntity) => tfcavcEntity.codusuavaliacao2,
  )
  tfcavcs: TfcavcEntity[];

  @OneToMany(() => TfcbcoEntity, (tfcbcoEntity) => tfcbcoEntity.codusu)
  tfcbcos: TfcbcoEntity[];

  @OneToMany(() => TfpabeEntity, (tfpabeEntity) => tfpabeEntity.codusu)
  tfpabes: TfpabeEntity[];

  @OneToMany(() => TfpacaEntity, (tfpacaEntity) => tfpacaEntity.codusu)
  tfpacas: TfpacaEntity[];

  @OneToMany(() => TfpacuEntity, (tfpacuEntity) => tfpacuEntity.codusu)
  tfpacus: TfpacuEntity[];

  @OneToMany(() => TfpafaEntity, (tfpafaEntity) => tfpafaEntity.codusu)
  tfpafas: TfpafaEntity[];

  @OneToMany(() => TfpafgEntity, (tfpafgEntity) => tfpafgEntity.codusu)
  tfpafgs: TfpafgEntity[];

  @OneToMany(() => TfpaftEntity, (tfpaftEntity) => tfpaftEntity.codusu)
  tfpafts: TfpaftEntity[];

  @OneToMany(() => TfpagcEntity, (tfpagcEntity) => tfpagcEntity.codusu)
  tfpagcs: TfpagcEntity[];

  @OneToMany(() => TfpageEntity, (tfpageEntity) => tfpageEntity.codusu)
  tfpages: TfpageEntity[];

  @OneToMany(
    () => TfpagnocatrEntity,
    (tfpagnocatrEntity) => tfpagnocatrEntity.codusu,
  )
  tfpagnocatrs: TfpagnocatrEntity[];

  @OneToMany(
    () => TfpagnocatrfEntity,
    (tfpagnocatrfEntity) => tfpagnocatrfEntity.codusu,
  )
  tfpagnocatrfs: TfpagnocatrfEntity[];

  @OneToMany(() => TfpajuEntity, (tfpajuEntity) => tfpajuEntity.codusu)
  tfpajus: TfpajuEntity[];

  @OneToMany(() => TfpalunoEntity, (tfpalunoEntity) => tfpalunoEntity.codusu)
  tfpalunos: TfpalunoEntity[];

  @OneToMany(() => TfpambEntity, (tfpambEntity) => tfpambEntity.codusu)
  tfpambs: TfpambEntity[];

  @OneToMany(() => TfpambrEntity, (tfpambrEntity) => tfpambrEntity.codusu)
  tfpambrs: TfpambrEntity[];

  @OneToMany(() => TfpamfEntity, (tfpamfEntity) => tfpamfEntity.codusu)
  tfpamfs: TfpamfEntity[];

  @OneToMany(() => TfpasoEntity, (tfpasoEntity) => tfpasoEntity.codusu)
  tfpasos: TfpasoEntity[];

  @OneToMany(() => TfpativEntity, (tfpativEntity) => tfpativEntity.codusu)
  tfpativs: TfpativEntity[];

  @OneToMany(() => TfpatrEntity, (tfpatrEntity) => tfpatrEntity.codusu)
  tfpatrs: TfpatrEntity[];

  @OneToMany(() => TfpattEntity, (tfpattEntity) => tfpattEntity.codusu)
  tfpatts: TfpattEntity[];

  @OneToMany(() => TfpatvEntity, (tfpatvEntity) => tfpatvEntity.codusu)
  tfpatvs: TfpatvEntity[];

  @OneToMany(() => TfpaudEntity, (tfpaudEntity) => tfpaudEntity.codusu2)
  tfpauds: TfpaudEntity[];

  @OneToMany(() => TfpaudlogEntity, (tfpaudlogEntity) => tfpaudlogEntity.codusu)
  tfpaudlogs: TfpaudlogEntity[];

  @OneToMany(() => TfpaviEntity, (tfpaviEntity) => tfpaviEntity.codusu)
  tfpavis: TfpaviEntity[];

  @OneToMany(() => TfpbasEntity, (tfpbasEntity) => tfpbasEntity.codusu)
  tfpbas: TfpbasEntity[];

  @OneToMany(
    () => TfpbastesteEntity,
    (tfpbastesteEntity) => tfpbastesteEntity.codusu,
  )
  tfpbastestes: TfpbastesteEntity[];

  @OneToMany(() => TfpcarEntity, (tfpcarEntity) => tfpcarEntity.codusu)
  tfpcars: TfpcarEntity[];

  @OneToMany(() => TfpcatrEntity, (tfpcatrEntity) => tfpcatrEntity.codusu)
  tfpcatrs: TfpcatrEntity[];

  @OneToMany(() => TfpcbpEntity, (tfpcbpEntity) => tfpcbpEntity.codusu)
  tfpcbps: TfpcbpEntity[];

  @OneToMany(() => TfpcceEntity, (tfpcceEntity) => tfpcceEntity.codusu)
  tfpcces: TfpcceEntity[];

  @OneToMany(() => TfpcevEntity, (tfpcevEntity) => tfpcevEntity.codusu)
  tfpcevs: TfpcevEntity[];

  @OneToMany(() => TfpcfeEntity, (tfpcfeEntity) => tfpcfeEntity.codusu)
  tfpcfes: TfpcfeEntity[];

  @OneToMany(() => TfpcgeEntity, (tfpcgeEntity) => tfpcgeEntity.codusu)
  tfpcges: TfpcgeEntity[];

  @OneToMany(() => TfpcliEntity, (tfpcliEntity) => tfpcliEntity.codusu)
  tfpclis: TfpcliEntity[];

  @OneToMany(() => TfpcnvEntity, (tfpcnvEntity) => tfpcnvEntity.codusu)
  tfpcnvs: TfpcnvEntity[];

  @OneToMany(() => TfpcomEntity, (tfpcomEntity) => tfpcomEntity.codusu)
  tfpcoms: TfpcomEntity[];

  @OneToMany(() => TfpcrrEntity, (tfpcrrEntity) => tfpcrrEntity.codusu)
  tfpcrrs: TfpcrrEntity[];

  @OneToMany(() => TfpcsiEntity, (tfpcsiEntity) => tfpcsiEntity.codusu)
  tfpcsis: TfpcsiEntity[];

  @OneToMany(() => TfpctgEntity, (tfpctgEntity) => tfpctgEntity.codusu)
  tfpctgs: TfpctgEntity[];

  @OneToMany(() => TfpdfcEntity, (tfpdfcEntity) => tfpdfcEntity.codusu)
  tfpdfcs: TfpdfcEntity[];

  @OneToMany(() => TfpdpeEntity, (tfpdpeEntity) => tfpdpeEntity.codusu)
  tfpdpes: TfpdpeEntity[];

  @OneToMany(() => TfpdptEntity, (tfpdptEntity) => tfpdptEntity.codusu)
  tfpdpts: TfpdptEntity[];

  @OneToMany(() => TfpempEntity, (tfpempEntity) => tfpempEntity.codusu)
  tfpemps: TfpempEntity[];

  @OneToMany(() => TfpenedEntity, (tfpenedEntity) => tfpenedEntity.codusu)
  tfpeneds: TfpenedEntity[];

  @OneToMany(() => TfpepEntity, (tfpepEntity) => tfpepEntity.codusu)
  tfpeps: TfpepEntity[];

  @OneToMany(() => TfpepcEntity, (tfpepcEntity) => tfpepcEntity.codusu)
  tfpepcs: TfpepcEntity[];

  @OneToMany(() => TfpepfEntity, (tfpepfEntity) => tfpepfEntity.codusu)
  tfpepfs: TfpepfEntity[];

  @OneToMany(() => TfpepiEntity, (tfpepiEntity) => tfpepiEntity.codusu)
  tfpepis: TfpepiEntity[];

  @OneToMany(
    () => TfpepiagnocEntity,
    (tfpepiagnocEntity) => tfpepiagnocEntity.codusu,
  )
  tfpepiagnocs: TfpepiagnocEntity[];

  @OneToMany(
    () => TfpepiagnocfEntity,
    (tfpepiagnocfEntity) => tfpepiagnocfEntity.codusu,
  )
  tfpepiagnocfs: TfpepiagnocfEntity[];

  @OneToMany(() => TfpepifEntity, (tfpepifEntity) => tfpepifEntity.codusu)
  tfpepifs: TfpepifEntity[];

  @OneToMany(() => TfpeprEntity, (tfpeprEntity) => tfpeprEntity.codusu)
  tfpeprs: TfpeprEntity[];

  @OneToMany(() => TfpeqpEntity, (tfpeqpEntity) => tfpeqpEntity.codusu)
  tfpeqps: TfpeqpEntity[];

  @OneToMany(() => TfpesoEntity, (tfpesoEntity) => tfpesoEntity.codusu)
  tfpesos: TfpesoEntity[];

  @OneToMany(() => TfpestEntity, (tfpestEntity) => tfpestEntity.codusu)
  tfpests: TfpestEntity[];

  @OneToMany(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.codusu)
  tfpeves: TfpeveEntity[];

  @OneToMany(() => TfpevtEntity, (tfpevtEntity) => tfpevtEntity.codusu)
  tfpevts: TfpevtEntity[];

  @OneToMany(() => TfpexaEntity, (tfpexaEntity) => tfpexaEntity.codusu)
  tfpexas: TfpexaEntity[];

  @OneToMany(() => TfpexmEntity, (tfpexmEntity) => tfpexmEntity.codusu)
  tfpexms: TfpexmEntity[];

  @OneToMany(() => TfpfatrEntity, (tfpfatrEntity) => tfpfatrEntity.codusu)
  tfpfatrs: TfpfatrEntity[];

  @OneToMany(() => TfpfbhEntity, (tfpfbhEntity) => tfpfbhEntity.codusu)
  tfpfbhs: TfpfbhEntity[];

  @OneToMany(() => TfpfcaEntity, (tfpfcaEntity) => tfpfcaEntity.codusu)
  tfpfcas: TfpfcaEntity[];

  @OneToMany(() => TfpfceEntity, (tfpfceEntity) => tfpfceEntity.codusu)
  tfpfces: TfpfceEntity[];

  @OneToMany(() => TfpfcpuEntity, (tfpfcpuEntity) => tfpfcpuEntity.codusu)
  tfpfcpus: TfpfcpuEntity[];

  @OneToMany(
    () => TfpfcpuEntity,
    (tfpfcpuEntity) => tfpfcpuEntity.codusufinalizacao,
  )
  tfpfcpus2: TfpfcpuEntity[];

  @OneToMany(() => TfpfhoEntity, (tfpfhoEntity) => tfpfhoEntity.codusu)
  tfpfhos: TfpfhoEntity[];

  @OneToMany(() => TfpfisEntity, (tfpfisEntity) => tfpfisEntity.codusu)
  tfpfis: TfpfisEntity[];

  @OneToMany(() => TfpfncfEntity, (tfpfncfEntity) => tfpfncfEntity.codusu)
  tfpfncfs: TfpfncfEntity[];

  @OneToMany(() => TfpforEntity, (tfpforEntity) => tfpforEntity.codusu)
  tfpfors: TfpforEntity[];

  @OneToMany(() => TfpftrEntity, (tfpftrEntity) => tfpftrEntity.codusu)
  tfpftrs: TfpftrEntity[];

  @OneToMany(() => TfpftrcEntity, (tfpftrcEntity) => tfpftrcEntity.codusu)
  tfpftrcs: TfpftrcEntity[];

  @OneToMany(() => TfpftrfEntity, (tfpftrfEntity) => tfpftrfEntity.codusu)
  tfpftrfs: TfpftrfEntity[];

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.codusu)
  tfpfuns: TfpfunEntity[];

  @OneToMany(() => TfpgcaEntity, (tfpgcaEntity) => tfpgcaEntity.codusu)
  tfpgcas: TfpgcaEntity[];

  @OneToMany(() => TfpghrEntity, (tfpghrEntity) => tfpghrEntity.codusu)
  tfpghrs: TfpghrEntity[];

  @OneToMany(() => TfpgtfEntity, (tfpgtfEntity) => tfpgtfEntity.codusu)
  tfpgtfs: TfpgtfEntity[];

  @OneToMany(() => TfphcpEntity, (tfphcpEntity) => tfphcpEntity.codusu)
  tfphcps: TfphcpEntity[];

  @OneToMany(() => TfphdeEntity, (tfphdeEntity) => tfphdeEntity.codusu)
  tfphdes: TfphdeEntity[];

  @OneToMany(() => TfphfiEntity, (tfphfiEntity) => tfphfiEntity.codusu)
  tfphfis: TfphfiEntity[];

  @OneToMany(() => TfphfuEntity, (tfphfuEntity) => tfphfuEntity.codusu)
  tfphfus: TfphfuEntity[];

  @OneToMany(() => TfphfxEntity, (tfphfxEntity) => tfphfxEntity.codusu)
  tfphfxes: TfphfxEntity[];

  @OneToMany(() => TfphprEntity, (tfphprEntity) => tfphprEntity.codusu)
  tfphprs: TfphprEntity[];

  @OneToMany(() => TfphreEntity, (tfphreEntity) => tfphreEntity.codusu)
  tfphres: TfphreEntity[];

  @OneToMany(() => TfphrgEntity, (tfphrgEntity) => tfphrgEntity.codusu)
  tfphrgs: TfphrgEntity[];

  @OneToMany(() => TfphsaEntity, (tfphsaEntity) => tfphsaEntity.codusu)
  tfphsas: TfphsaEntity[];

  @OneToMany(() => TfphsafEntity, (tfphsafEntity) => tfphsafEntity.codusu)
  tfphsafs: TfphsafEntity[];

  @OneToMany(() => TfpinccpEntity, (tfpinccpEntity) => tfpinccpEntity.codusu)
  tfpinccps: TfpinccpEntity[];

  @OneToMany(
    () => TfpincfgtsEntity,
    (tfpincfgtsEntity) => tfpincfgtsEntity.codusu,
  )
  tfpincfgts: TfpincfgtsEntity[];

  @OneToMany(
    () => TfpincirrfEntity,
    (tfpincirrfEntity) => tfpincirrfEntity.codusu,
  )
  tfpincirrfs: TfpincirrfEntity[];

  @OneToMany(() => TfpincpisEntity, (tfpincpisEntity) => tfpincpisEntity.codusu)
  tfpincpis: TfpincpisEntity[];

  @OneToMany(
    () => TfpincsindEntity,
    (tfpincsindEntity) => tfpincsindEntity.codusu,
  )
  tfpincsinds: TfpincsindEntity[];

  @OneToMany(() => TfpipaEntity, (tfpipaEntity) => tfpipaEntity.codusu)
  tfpipas: TfpipaEntity[];

  @OneToMany(() => TfpipoEntity, (tfpipoEntity) => tfpipoEntity.codusu)
  tfpipos: TfpipoEntity[];

  @OneToMany(() => TfplfuEntity, (tfplfuEntity) => tfplfuEntity.codusu)
  tfplfus: TfplfuEntity[];

  @OneToMany(() => TfplgrEntity, (tfplgrEntity) => tfplgrEntity.codusu)
  tfplgrs: TfplgrEntity[];

  @OneToMany(() => TfplotEntity, (tfplotEntity) => tfplotEntity.codusu)
  tfplots: TfplotEntity[];

  @OneToMany(() => TfpmadEntity, (tfpmadEntity) => tfpmadEntity.codusu)
  tfpmads: TfpmadEntity[];

  @OneToMany(() => TfpmanEntity, (tfpmanEntity) => tfpmanEntity.codusu)
  tfpmen: TfpmanEntity[];

  @OneToMany(() => TfpmdeEntity, (tfpmdeEntity) => tfpmdeEntity.codusu)
  tfpmdes: TfpmdeEntity[];

  @OneToMany(() => TfpmedEntity, (tfpmedEntity) => tfpmedEntity.codusu)
  tfpmeds: TfpmedEntity[];

  @OneToMany(() => TfpmocEntity, (tfpmocEntity) => tfpmocEntity.codusu)
  tfpmocs: TfpmocEntity[];

  @OneToMany(() => TfpmovEntity, (tfpmovEntity) => tfpmovEntity.codusu)
  tfpmovs: TfpmovEntity[];

  @OneToMany(() => TfpmtaEntity, (tfpmtaEntity) => tfpmtaEntity.codusu)
  tfpmtas: TfpmtaEntity[];

  @OneToMany(() => TfpmtbEntity, (tfpmtbEntity) => tfpmtbEntity.codusu)
  tfpmtbs: TfpmtbEntity[];

  @OneToMany(() => TfpmtdEntity, (tfpmtdEntity) => tfpmtdEntity.codusu)
  tfpmtds: TfpmtdEntity[];

  @OneToMany(() => TfpnewmedEntity, (tfpnewmedEntity) => tfpnewmedEntity.codusu)
  tfpnewmeds: TfpnewmedEntity[];

  @OneToMany(
    () => TfpnotificEntity,
    (tfpnotificEntity) => tfpnotificEntity.codusu,
  )
  tfpnotifics: TfpnotificEntity[];

  @OneToMany(() => TfpntlEntity, (tfpntlEntity) => tfpntlEntity.codusu)
  tfpntls: TfpntlEntity[];

  @OneToMany(() => TfpocoEntity, (tfpocoEntity) => tfpocoEntity.codusu)
  tfpocos: TfpocoEntity[];

  @OneToMany(() => TfpocorjsEntity, (tfpocorjsEntity) => tfpocorjsEntity.codusu)
  tfpocorjs: TfpocorjsEntity[];

  @OneToMany(() => TfppaaEntity, (tfppaaEntity) => tfppaaEntity.codusu)
  tfppaas: TfppaaEntity[];

  @OneToMany(() => TfppantEntity, (tfppantEntity) => tfppantEntity.codusu)
  tfppants: TfppantEntity[];

  @OneToMany(() => TfppcaEntity, (tfppcaEntity) => tfppcaEntity.codusu)
  tfppcas: TfppcaEntity[];

  @OneToMany(() => TfppcatEntity, (tfppcatEntity) => tfppcatEntity.codusu)
  tfppcats: TfppcatEntity[];

  @OneToMany(() => TfppcgEntity, (tfppcgEntity) => tfppcgEntity.codusu)
  tfppcgs: TfppcgEntity[];

  @OneToMany(() => TfppdiEntity, (tfppdiEntity) => tfppdiEntity.codusu)
  tfppdis: TfppdiEntity[];

  @OneToMany(() => TfpperEntity, (tfpperEntity) => tfpperEntity.codusu)
  tfppers: TfpperEntity[];

  @OneToMany(() => TfppfsEntity, (tfppfsEntity) => tfppfsEntity.codusu)
  tfppfs: TfppfsEntity[];

  @OneToMany(() => TfpplsEntity, (tfpplsEntity) => tfpplsEntity.codusu)
  tfppls: TfpplsEntity[];

  @OneToMany(() => TfppraEntity, (tfppraEntity) => tfppraEntity.codusu)
  tfppras: TfppraEntity[];

  @OneToMany(() => TfppreEntity, (tfppreEntity) => tfppreEntity.codusu)
  tfppres: TfppreEntity[];

  @OneToMany(() => TfpprofEntity, (tfpprofEntity) => tfpprofEntity.codusu)
  tfpprofs: TfpprofEntity[];

  @OneToMany(() => TfpprtcEntity, (tfpprtcEntity) => tfpprtcEntity.codusu)
  tfpprtcs: TfpprtcEntity[];

  @OneToMany(() => TfpprtrEntity, (tfpprtrEntity) => tfpprtrEntity.codusu)
  tfpprtrs: TfpprtrEntity[];

  @OneToMany(() => TfpprvEntity, (tfpprvEntity) => tfpprvEntity.codusu)
  tfpprvs: TfpprvEntity[];

  @OneToMany(() => TfppseEntity, (tfppseEntity) => tfppseEntity.codusu)
  tfppses: TfppseEntity[];

  @OneToMany(() => TfppsfEntity, (tfppsfEntity) => tfppsfEntity.codusu)
  tfppsfs: TfppsfEntity[];

  @OneToMany(() => TfppssEntity, (tfppssEntity) => tfppssEntity.codusu)
  tfppsses: TfppssEntity[];

  @OneToMany(() => TfpptprEntity, (tfpptprEntity) => tfpptprEntity.codusu)
  tfpptprs: TfpptprEntity[];

  @OneToMany(() => TfprbrEntity, (tfprbrEntity) => tfprbrEntity.codusu)
  tfprbrs: TfprbrEntity[];

  @OneToMany(() => TfprcoEntity, (tfprcoEntity) => tfprcoEntity.codusu)
  tfprcos: TfprcoEntity[];

  @OneToMany(
    () => TfpregcalcEntity,
    (tfpregcalcEntity) => tfpregcalcEntity.codusu,
  )
  tfpregcalcs: TfpregcalcEntity[];

  @OneToMany(() => TfprelEntity, (tfprelEntity) => tfprelEntity.codusu)
  tfprels: TfprelEntity[];

  @OneToMany(() => TfpreqEntity, (tfpreqEntity) => tfpreqEntity.codusu)
  tfpreqs: TfpreqEntity[];

  @OneToMany(() => TfprgprEntity, (tfprgprEntity) => tfprgprEntity.codusu)
  tfprgprs: TfprgprEntity[];

  @OneToMany(() => TfprmdEntity, (tfprmdEntity) => tfprmdEntity.codusu)
  tfprmds: TfprmdEntity[];

  @OneToMany(() => TfproeEntity, (tfproeEntity) => tfproeEntity.codusu)
  tfproes: TfproeEntity[];

  @OneToMany(() => TfprpoEntity, (tfprpoEntity) => tfprpoEntity.codusu)
  tfprpos: TfprpoEntity[];

  @OneToMany(() => TfprpsEntity, (tfprpsEntity) => tfprpsEntity.codusu)
  tfprps: TfprpsEntity[];

  @OneToMany(() => TfprraEntity, (tfprraEntity) => tfprraEntity.codusu)
  tfprras: TfprraEntity[];

  @OneToMany(() => TfprteEntity, (tfprteEntity) => tfprteEntity.codusu)
  tfprtes: TfprteEntity[];

  @OneToMany(() => TfprtfEntity, (tfprtfEntity) => tfprtfEntity.codusu)
  tfprtfs: TfprtfEntity[];

  @OneToMany(() => TfprtmEntity, (tfprtmEntity) => tfprtmEntity.codusu)
  tfprtms: TfprtmEntity[];

  @OneToMany(() => TfprttEntity, (tfprttEntity) => tfprttEntity.codusu)
  tfprtts: TfprttEntity[];

  @OneToMany(() => TfprubEntity, (tfprubEntity) => tfprubEntity.codusu)
  tfprubs: TfprubEntity[];

  @OneToMany(() => TfpsbaEntity, (tfpsbaEntity) => tfpsbaEntity.codusu)
  tfpsbas: TfpsbaEntity[];

  @OneToMany(() => TfpsbafEntity, (tfpsbafEntity) => tfpsbafEntity.codusu)
  tfpsbafs: TfpsbafEntity[];

  @OneToMany(() => TfpscabEntity, (tfpscabEntity) => tfpscabEntity.codusu)
  tfpscabs: TfpscabEntity[];

  @OneToMany(() => TfpscpEntity, (tfpscpEntity) => tfpscpEntity.codusu)
  tfpscps: TfpscpEntity[];

  @OneToMany(() => TfpseqEntity, (tfpseqEntity) => tfpseqEntity.codusu)
  tfpseqs: TfpseqEntity[];

  @OneToMany(() => TfpsescEntity, (tfpsescEntity) => tfpsescEntity.codusu)
  tfpsescs: TfpsescEntity[];

  @OneToMany(() => TfpsgaEntity, (tfpsgaEntity) => tfpsgaEntity.codusu)
  tfpsgas: TfpsgaEntity[];

  @OneToMany(() => TfpslogEntity, (tfpslogEntity) => tfpslogEntity.codusu2)
  tfpslogs: TfpslogEntity[];

  @OneToMany(() => TfpsubEntity, (tfpsubEntity) => tfpsubEntity.codusu)
  tfpsubs: TfpsubEntity[];

  @OneToMany(() => TfpsuspEntity, (tfpsuspEntity) => tfpsuspEntity.codusu)
  tfpsusps: TfpsuspEntity[];

  @OneToMany(() => TfptatEntity, (tfptatEntity) => tfptatEntity.codusu)
  tfptats: TfptatEntity[];

  @OneToMany(() => TfptbpEntity, (tfptbpEntity) => tfptbpEntity.codusu)
  tfptbps: TfptbpEntity[];

  @OneToMany(() => TfptercEntity, (tfptercEntity) => tfptercEntity.codusu)
  tfptercs: TfptercEntity[];

  @OneToMany(() => TfptfaEntity, (tfptfaEntity) => tfptfaEntity.codusu)
  tfptfas: TfptfaEntity[];

  @OneToMany(() => TfptgeEntity, (tfptgeEntity) => tfptgeEntity.codusu)
  tfptges: TfptgeEntity[];

  @OneToMany(() => TfptmeEntity, (tfptmeEntity) => tfptmeEntity.codusu)
  tfptmes: TfptmeEntity[];

  @OneToMany(() => TfptomEntity, (tfptomEntity) => tfptomEntity.codusu)
  tfptoms: TfptomEntity[];

  @OneToMany(() => TfptpaEntity, (tfptpaEntity) => tfptpaEntity.codusu)
  tfptpas: TfptpaEntity[];

  @OneToMany(() => TfptrcEntity, (tfptrcEntity) => tfptrcEntity.codusu)
  tfptrcs: TfptrcEntity[];

  @OneToMany(() => TfptreiEntity, (tfptreiEntity) => tfptreiEntity.codusu)
  tfptreis: TfptreiEntity[];

  @OneToMany(() => TfpturEntity, (tfpturEntity) => tfpturEntity.codusu)
  tfpturs: TfpturEntity[];

  @OneToMany(() => TfpvcoEntity, (tfpvcoEntity) => tfpvcoEntity.codusu)
  tfpvcos: TfpvcoEntity[];

  @OneToMany(() => TfpvpsEntity, (tfpvpsEntity) => tfpvpsEntity.codusu)
  tfpvps: TfpvpsEntity[];

  @OneToMany(() => TgaahEntity, (tgaahEntity) => tgaahEntity.codusu)
  tgaahs: TgaahEntity[];

  @OneToMany(() => TgaahiEntity, (tgaahiEntity) => tgaahiEntity.codusu)
  tgaahis: TgaahiEntity[];

  @OneToMany(() => TgaavaEntity, (tgaavaEntity) => tgaavaEntity.codusu)
  tgaavas: TgaavaEntity[];

  @OneToMany(() => TgabdlcEntity, (tgabdlcEntity) => tgabdlcEntity.codusu)
  tgabdlcs: TgabdlcEntity[];

  @OneToMany(() => TgaclpEntity, (tgaclpEntity) => tgaclpEntity.codusuconf)
  tgaclps: TgaclpEntity[];

  @OneToMany(() => TgaclpEntity, (tgaclpEntity) => tgaclpEntity.codusu)
  tgaclps2: TgaclpEntity[];

  @OneToMany(() => TgaculEntity, (tgaculEntity) => tgaculEntity.codusu)
  tgaculs: TgaculEntity[];

  @OneToMany(() => TgaemiEntity, (tgaemiEntity) => tgaemiEntity.codusu)
  tgaemis: TgaemiEntity[];

  @OneToMany(() => TgaentEntity, (tgaentEntity) => tgaentEntity.codusu)
  tgaents: TgaentEntity[];

  @OneToMany(() => TgagarEntity, (tgagarEntity) => tgagarEntity.codusu)
  tgagars: TgagarEntity[];

  @OneToMany(() => TgagpcEntity, (tgagpcEntity) => tgagpcEntity.codusu)
  tgagpcs: TgagpcEntity[];

  @OneToMany(() => TgagtEntity, (tgagtEntity) => tgagtEntity.codusu)
  tgagts: TgagtEntity[];

  @OneToMany(() => TgagtmEntity, (tgagtmEntity) => tgagtmEntity.codusu)
  tgagtms: TgagtmEntity[];

  @OneToMany(() => TgainsEntity, (tgainsEntity) => tgainsEntity.codusu)
  tgains: TgainsEntity[];

  @OneToMany(() => TgapatEntity, (tgapatEntity) => tgapatEntity.codusu)
  tgapats: TgapatEntity[];

  @OneToMany(() => TgapcaEntity, (tgapcaEntity) => tgapcaEntity.codusupb)
  tgapcas: TgapcaEntity[];

  @OneToMany(() => TgapcaEntity, (tgapcaEntity) => tgapcaEntity.codusutara)
  tgapcas2: TgapcaEntity[];

  @OneToMany(() => TgarecEntity, (tgarecEntity) => tgarecEntity.codusu)
  tgarecs: TgarecEntity[];

  @OneToMany(() => TgariEntity, (tgariEntity) => tgariEntity.codusu)
  tgaris: TgariEntity[];

  @OneToMany(() => TgccalEntity, (tgccalEntity) => tgccalEntity.codusu)
  tgccals: TgccalEntity[];

  @OneToMany(() => TgccredEntity, (tgccredEntity) => tgccredEntity.codusu)
  tgccreds: TgccredEntity[];

  @OneToMany(() => TgcgruEntity, (tgcgruEntity) => tgcgruEntity.codusu)
  tgcgrus: TgcgruEntity[];

  @OneToMany(() => TgcinfEntity, (tgcinfEntity) => tgcinfEntity.codusu)
  tgcinfs: TgcinfEntity[];

  @OneToMany(() => TgcparEntity, (tgcparEntity) => tgcparEntity.codusu)
  tgcpars: TgcparEntity[];

  @OneToMany(() => TgcparEntity, (tgcparEntity) => tgcparEntity.codusucalc)
  tgcpars2: TgcparEntity[];

  @OneToMany(() => TgfabfEntity, (tgfabfEntity) => tgfabfEntity.codusu)
  tgfabfs: TgfabfEntity[];

  @OneToMany(() => TgfacoEntity, (tgfacoEntity) => tgfacoEntity.codusuresp)
  tgfacos: TgfacoEntity[];

  @OneToMany(() => TgfacoEntity, (tgfacoEntity) => tgfacoEntity.codusucot)
  tgfacos2: TgfacoEntity[];

  @OneToMany(() => TgfadgEntity, (tgfadgEntity) => tgfadgEntity.codusu)
  tgfadgs: TgfadgEntity[];

  @OneToMany(() => TgfaemEntity, (tgfaemEntity) => tgfaemEntity.codusu)
  tgfaems: TgfaemEntity[];

  @OneToMany(() => TgfagdEntity, (tgfagdEntity) => tgfagdEntity.codusu)
  tgfagds: TgfagdEntity[];

  @OneToMany(() => TgfageEntity, (tgfageEntity) => tgfageEntity.codusu)
  tgfages: TgfageEntity[];

  @OneToMany(() => TgfajaEntity, (tgfajaEntity) => tgfajaEntity.codusu)
  tgfajas: TgfajaEntity[];

  @OneToMany(() => TgfajdEntity, (tgfajdEntity) => tgfajdEntity.codusu)
  tgfajds: TgfajdEntity[];

  @OneToMany(() => TgfajnEntity, (tgfajnEntity) => tgfajnEntity.codusu)
  tgfajns: TgfajnEntity[];

  @OneToMany(() => TgfapuEntity, (tgfapuEntity) => tgfapuEntity.codusu)
  tgfapus: TgfapuEntity[];

  @OneToMany(() => TgfapuEntity, (tgfapuEntity) => tgfapuEntity.codusuapu2)
  tgfapus2: TgfapuEntity[];

  @OneToMany(() => TgfarcEntity, (tgfarcEntity) => tgfarcEntity.codusu)
  tgfarcs: TgfarcEntity[];

  @OneToMany(() => TgfasaEntity, (tgfasaEntity) => tgfasaEntity.codusu)
  tgfasas: TgfasaEntity[];

  @OneToMany(() => TgfattEntity, (tgfattEntity) => tgfattEntity.codusu)
  tgfatts: TgfattEntity[];

  @OneToMany(() => TgfaucEntity, (tgfaucEntity) => tgfaucEntity.codusu)
  tgfaucs: TgfaucEntity[];

  @OneToMany(() => TgfauiEntity, (tgfauiEntity) => tgfauiEntity.codusu)
  tgfauis: TgfauiEntity[];

  @OneToMany(() => TgfavrEntity, (tgfavrEntity) => tgfavrEntity.codusu)
  tgfavrs: TgfavrEntity[];

  @OneToMany(() => TgfbarEntity, (tgfbarEntity) => tgfbarEntity.codusu)
  tgfbars: TgfbarEntity[];

  @OneToMany(() => TgfboaEntity, (tgfboaEntity) => tgfboaEntity.codusu)
  tgfboas: TgfboaEntity[];

  @OneToMany(() => TgfbttEntity, (tgfbttEntity) => tgfbttEntity.codusu2)
  tgfbtts: TgfbttEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.adCodususolicit)
  tgfcabs: TgfcabEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.codusucomprador)
  tgfcabs2: TgfcabEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.codusuinc)
  tgfcabs3: TgfcabEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.adCodusucomp)
  tgfcabs4: TgfcabEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.codusu2)
  tgfcabs5: TgfcabEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.adCodusuretmat)
  tgfcabs6: TgfcabEntity[];

  @OneToMany(() => TgfcaiEntity, (tgfcaiEntity) => tgfcaiEntity.codusu2)
  tgfcais: TgfcaiEntity[];

  @OneToMany(() => TgfcauEntity, (tgfcauEntity) => tgfcauEntity.codusu)
  tgfcaus: TgfcauEntity[];

  @OneToMany(() => TgfcauEntity, (tgfcauEntity) => tgfcauEntity.codusuclc2)
  tgfcaus2: TgfcauEntity[];

  @OneToMany(() => TgfccaiEntity, (tgfccaiEntity) => tgfccaiEntity.codusu)
  tgfccais: TgfccaiEntity[];

  @OneToMany(() => TgfccaiEntity, (tgfccaiEntity) => tgfccaiEntity.codusualter)
  tgfccais2: TgfccaiEntity[];

  @OneToMany(() => TgfccfEntity, (tgfccfEntity) => tgfccfEntity.codusu)
  tgfccfs: TgfccfEntity[];

  @OneToMany(() => TgfcciEntity, (tgfcciEntity) => tgfcciEntity.codusu)
  tgfccis: TgfcciEntity[];

  @OneToMany(() => TgfccrEntity, (tgfccrEntity) => tgfccrEntity.codusu)
  tgfccrs: TgfccrEntity[];

  @OneToMany(() => TgfcdoEntity, (tgfcdoEntity) => tgfcdoEntity.codusu)
  tgfcdos: TgfcdoEntity[];

  @OneToMany(() => TgfcfiEntity, (tgfcfiEntity) => tgfcfiEntity.codusu)
  tgfcfis: TgfcfiEntity[];

  @OneToMany(() => TgfclxEntity, (tgfclxEntity) => tgfclxEntity.codusu)
  tgfclxes: TgfclxEntity[];

  @OneToMany(() => TgfcmpEntity, (tgfcmpEntity) => tgfcmpEntity.codusu)
  tgfcmps: TgfcmpEntity[];

  @OneToMany(() => TgfcnfEntity, (tgfcnfEntity) => tgfcnfEntity.codusu)
  tgfcnfs: TgfcnfEntity[];

  @OneToMany(() => TgfcocEntity, (tgfcocEntity) => tgfcocEntity.codusu)
  tgfcocs: TgfcocEntity[];

  @OneToMany(() => Tgfcon2Entity, (tgfcon2Entity) => tgfcon2Entity.codusuconf)
  tgfcons: Tgfcon2Entity[];

  @OneToMany(() => TgfcotEntity, (tgfcotEntity) => tgfcotEntity.codusureq)
  tgfcots: TgfcotEntity[];

  @OneToMany(() => TgfcotEntity, (tgfcotEntity) => tgfcotEntity.codusu)
  tgfcots2: TgfcotEntity[];

  @OneToMany(() => TgfcotEntity, (tgfcotEntity) => tgfcotEntity.codusuresp)
  tgfcots3: TgfcotEntity[];

  @OneToMany(() => TgfcpcEntity, (tgfcpcEntity) => tgfcpcEntity.codusu)
  tgfcpcs: TgfcpcEntity[];

  @OneToMany(() => TgfcpeEntity, (tgfcpeEntity) => tgfcpeEntity.codusu)
  tgfcpes: TgfcpeEntity[];

  @OneToMany(() => TgfcplEntity, (tgfcplEntity) => tgfcplEntity.codusu)
  tgfcpls: TgfcplEntity[];

  @OneToMany(() => TgfcprEntity, (tgfcprEntity) => tgfcprEntity.codusu)
  tgfcprs: TgfcprEntity[];

  @OneToMany(() => TgfcrastEntity, (tgfcrastEntity) => tgfcrastEntity.codusu)
  tgfcrasts: TgfcrastEntity[];

  @OneToMany(
    () => TgfcredauditEntity,
    (tgfcredauditEntity) => tgfcredauditEntity.codusualter,
  )
  tgfcredaudits: TgfcredauditEntity[];

  @OneToMany(() => TgfcrtEntity, (tgfcrtEntity) => tgfcrtEntity.codusu)
  tgfcrts: TgfcrtEntity[];

  @OneToMany(() => TgfcszEntity, (tgfcszEntity) => tgfcszEntity.codusu)
  tgfcszs: TgfcszEntity[];

  @OneToMany(() => TgfctdEntity, (tgfctdEntity) => tgfctdEntity.codusu)
  tgfctds: TgfctdEntity[];

  @OneToMany(() => TgfctfEntity, (tgfctfEntity) => tgfctfEntity.codusu)
  tgfctfs: TgfctfEntity[];

  @OneToMany(() => TgfcttEntity, (tgfcttEntity) => tgfcttEntity.codusu)
  tgfctts: TgfcttEntity[];

  @OneToMany(() => TgfdfaEntity, (tgfdfaEntity) => tgfdfaEntity.codusu)
  tgfdfas: TgfdfaEntity[];

  @OneToMany(() => TgfdfiEntity, (tgfdfiEntity) => tgfdfiEntity.codusu)
  tgfdfis: TgfdfiEntity[];

  @OneToMany(() => TgfdfpEntity, (tgfdfpEntity) => tgfdfpEntity.codusu)
  tgfdfps: TgfdfpEntity[];

  @OneToMany(() => TgfdinEntity, (tgfdinEntity) => tgfdinEntity.codusu)
  tgfdins: TgfdinEntity[];

  @OneToMany(() => TgfdtpEntity, (tgfdtpEntity) => tgfdtpEntity.codusu)
  tgfdtps: TgfdtpEntity[];

  @OneToMany(() => TgfdttEntity, (tgfdttEntity) => tgfdttEntity.codusu)
  tgfdtts: TgfdttEntity[];

  @OneToMany(() => TgfeacEntity, (tgfeacEntity) => tgfeacEntity.codusu)
  tgfeacs: TgfeacEntity[];

  @OneToMany(() => TgfecteEntity, (tgfecteEntity) => tgfecteEntity.codusu)
  tgfectes: TgfecteEntity[];

  @OneToMany(() => TgfefcEntity, (tgfefcEntity) => tgfefcEntity.codusu)
  tgfefcs: TgfefcEntity[];

  @OneToMany(() => TgfempsnEntity, (tgfempsnEntity) => tgfempsnEntity.codusu)
  tgfempsns: TgfempsnEntity[];

  @OneToMany(() => TgfenvEntity, (tgfenvEntity) => tgfenvEntity.codusu)
  tgfenvs: TgfenvEntity[];

  @OneToMany(() => TgfeppEntity, (tgfeppEntity) => tgfeppEntity.codusu)
  tgfepps: TgfeppEntity[];

  @OneToMany(() => TgfepsEntity, (tgfepsEntity) => tgfepsEntity.codusu)
  tgfeps: TgfepsEntity[];

  @OneToMany(() => TgfepsdEntity, (tgfepsdEntity) => tgfepsdEntity.codusu)
  tgfepsds: TgfepsdEntity[];

  @OneToMany(() => TgfeqxEntity, (tgfeqxEntity) => tgfeqxEntity.codusu)
  tgfeqxes: TgfeqxEntity[];

  @OneToMany(() => TgfetqEntity, (tgfetqEntity) => tgfetqEntity.codusu)
  tgfetqs: TgfetqEntity[];

  @OneToMany(() => TgfexbEntity, (tgfexbEntity) => tgfexbEntity.codusu)
  tgfexbs: TgfexbEntity[];

  @OneToMany(() => TgffaiEntity, (tgffaiEntity) => tgffaiEntity.codusu)
  tgffais: TgffaiEntity[];

  @OneToMany(() => TgffdicEntity, (tgffdicEntity) => tgffdicEntity.codusuresp)
  tgffdics: TgffdicEntity[];

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.codusucobr)
  tgffins: TgffinEntity[];

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.codusubaixa)
  tgffins2: TgffinEntity[];

  @OneToMany(() => TgffopEntity, (tgffopEntity) => tgffopEntity.codusu)
  tgffops: TgffopEntity[];

  @OneToMany(() => TgffreEntity, (tgffreEntity) => tgffreEntity.codusu)
  tgffres: TgffreEntity[];

  @OneToMany(() => TgffrmEntity, (tgffrmEntity) => tgffrmEntity.codusu)
  tgffrms: TgffrmEntity[];

  @OneToMany(() => TgfgalEntity, (tgfgalEntity) => tgfgalEntity.codusu)
  tgfgals: TgfgalEntity[];

  @OneToMany(() => TgfgvpEntity, (tgfgvpEntity) => tgfgvpEntity.codusuultalt)
  tgfgvps: TgfgvpEntity[];

  @OneToMany(() => TgfgvpEntity, (tgfgvpEntity) => tgfgvpEntity.codresp)
  tgfgvps2: TgfgvpEntity[];

  @OneToMany(() => TgfhipEntity, (tgfhipEntity) => tgfhipEntity.codusu)
  tgfhips: TgfhipEntity[];

  @OneToMany(() => TgfiadEntity, (tgfiadEntity) => tgfiadEntity.codusu)
  tgfiads: TgfiadEntity[];

  @OneToMany(() => TgficnfEntity, (tgficnfEntity) => tgficnfEntity.codusu)
  tgficnfs: TgficnfEntity[];

  @OneToMany(() => TgfidiEntity, (tgfidiEntity) => tgfidiEntity.codusu)
  tgfidis: TgfidiEntity[];

  @OneToMany(() => TgfiffEntity, (tgfiffEntity) => tgfiffEntity.codusu)
  tgfiffs: TgfiffEntity[];

  @OneToMany(() => TgfiffpEntity, (tgfiffpEntity) => tgfiffpEntity.codusu)
  tgfiffps: TgfiffpEntity[];

  @OneToMany(() => TgfigaEntity, (tgfigaEntity) => tgfigaEntity.codusu)
  tgfigas: TgfigaEntity[];

  @OneToMany(() => TgfiiiEntity, (tgfiiiEntity) => tgfiiiEntity.codusu)
  tgfiiis: TgfiiiEntity[];

  @OneToMany(() => TgfimalEntity, (tgfimalEntity) => tgfimalEntity.codusu)
  tgfimals: TgfimalEntity[];

  @OneToMany(() => TgfimoEntity, (tgfimoEntity) => tgfimoEntity.codusu)
  tgfimos: TgfimoEntity[];

  @OneToMany(() => TgfinuEntity, (tgfinuEntity) => tgfinuEntity.codusu)
  tgfinus: TgfinuEntity[];

  @OneToMany(() => TgfinujEntity, (tgfinujEntity) => tgfinujEntity.codusu)
  tgfinujs: TgfinujEntity[];

  @OneToMany(() => TgfiprEntity, (tgfiprEntity) => tgfiprEntity.conferente)
  tgfiprs: TgfiprEntity[];

  @OneToMany(() => TgfiprEntity, (tgfiprEntity) => tgfiprEntity.codusu)
  tgfiprs2: TgfiprEntity[];

  @OneToMany(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.codusu)
  tgfites: TgfiteEntity[];

  @OneToMany(() => TgfixnEntity, (tgfixnEntity) => tgfixnEntity.codusuimp)
  tgfixns: TgfixnEntity[];

  @OneToMany(() => TgfixnEntity, (tgfixnEntity) => tgfixnEntity.codusuproc)
  tgfixns2: TgfixnEntity[];

  @OneToMany(() => TgfjumEntity, (tgfjumEntity) => tgfjumEntity.codusu)
  tgfjums: TgfjumEntity[];

  @OneToMany(() => TgflcpEntity, (tgflcpEntity) => tgflcpEntity.codusu)
  tgflcps: TgflcpEntity[];

  @OneToMany(() => TgflebEntity, (tgflebEntity) => tgflebEntity.codusu)
  tgflebs: TgflebEntity[];

  @OneToMany(() => TgflgnreEntity, (tgflgnreEntity) => tgflgnreEntity.codusu)
  tgflgnres: TgflgnreEntity[];

  @OneToMany(() => TgflibEntity, (tgflibEntity) => tgflibEntity.codusu2)
  tgflibs: TgflibEntity[];

  @OneToMany(() => TgflicEntity, (tgflicEntity) => tgflicEntity.codusulib)
  tgflics: TgflicEntity[];

  @OneToMany(() => TgflicEntity, (tgflicEntity) => tgflicEntity.codusu)
  tgflics2: TgflicEntity[];

  @OneToMany(() => TgflivEntity, (tgflivEntity) => tgflivEntity.codusu)
  tgflivs: TgflivEntity[];

  @OneToMany(() => TgfllpEntity, (tgfllpEntity) => tgfllpEntity.codusu)
  tgfllps: TgfllpEntity[];

  @OneToMany(() => TgflocEntity, (tgflocEntity) => tgflocEntity.adCodusu)
  tgflocs: TgflocEntity[];

  @OneToMany(() => TgflseEntity, (tgflseEntity) => tgflseEntity.codusu)
  tgflses: TgflseEntity[];

  @OneToMany(() => TgfmcxEntity, (tgfmcxEntity) => tgfmcxEntity.codusu)
  tgfmcxes: TgfmcxEntity[];

  @OneToMany(() => TgfmdfeEntity, (tgfmdfeEntity) => tgfmdfeEntity.codusu)
  tgfmdfes: TgfmdfeEntity[];

  @OneToMany(() => TgfmedEntity, (tgfmedEntity) => tgfmedEntity.codusu)
  tgfmeds: TgfmedEntity[];

  @OneToMany(() => TgfmenEntity, (tgfmenEntity) => tgfmenEntity.codusuorig2)
  tgfmen: TgfmenEntity[];

  @OneToMany(() => TgfmenEntity, (tgfmenEntity) => tgfmenEntity.codusudest)
  tgfmen2: TgfmenEntity[];

  @OneToMany(() => TgfmeqEntity, (tgfmeqEntity) => tgfmeqEntity.codusu)
  tgfmeqs: TgfmeqEntity[];

  @OneToOne(() => TgfmntEntity, (tgfmntEntity) => tgfmntEntity.codusu2)
  tgfmnt: TgfmntEntity;

  @OneToMany(() => TgfmppEntity, (tgfmppEntity) => tgfmppEntity.codusu)
  tgfmpps: TgfmppEntity[];

  @OneToMany(() => TgfmpxEntity, (tgfmpxEntity) => tgfmpxEntity.codusu)
  tgfmpxes: TgfmpxEntity[];

  @OneToMany(() => TgfmsiEntity, (tgfmsiEntity) => tgfmsiEntity.codusu)
  tgfmsis: TgfmsiEntity[];

  @OneToMany(() => TgfmstEntity, (tgfmstEntity) => tgfmstEntity.codusu)
  tgfmsts: TgfmstEntity[];

  @OneToMany(() => TgfmtefEntity, (tgfmtefEntity) => tgfmtefEntity.codusu)
  tgfmtefs: TgfmtefEntity[];

  @OneToMany(() => TgfnatpcEntity, (tgfnatpcEntity) => tgfnatpcEntity.codusu)
  tgfnatpcs: TgfnatpcEntity[];

  @OneToMany(
    () => TgfnatpcempEntity,
    (tgfnatpcempEntity) => tgfnatpcempEntity.codusu,
  )
  tgfnatpcemps: TgfnatpcempEntity[];

  @OneToMany(() => TgfnpaEntity, (tgfnpaEntity) => tgfnpaEntity.codusu)
  tgfnpas: TgfnpaEntity[];

  @OneToMany(() => TgfocrEntity, (tgfocrEntity) => tgfocrEntity.codusu)
  tgfocrs: TgfocrEntity[];

  @OneToMany(() => TgfoirEntity, (tgfoirEntity) => tgfoirEntity.codusu)
  tgfoirs: TgfoirEntity[];

  @OneToMany(() => TgfomdfEntity, (tgfomdfEntity) => tgfomdfEntity.codusu)
  tgfomdfs: TgfomdfEntity[];

  @OneToMany(() => TgfordEntity, (tgfordEntity) => tgfordEntity.codusuretorno)
  tgfords: TgfordEntity[];

  @OneToMany(() => TgfparEntity, (tgfparEntity) => tgfparEntity.codusucobr)
  tgfpars: TgfparEntity[];

  @OneToMany(() => TgfparpocEntity, (tgfparpocEntity) => tgfparpocEntity.codusu)
  tgfparpocs: TgfparpocEntity[];

  @OneToMany(() => TgfpatEntity, (tgfpatEntity) => tgfpatEntity.codusu)
  tgfpats: TgfpatEntity[];

  @OneToMany(() => TgfpdvEntity, (tgfpdvEntity) => tgfpdvEntity.codusualter)
  tgfpdvs: TgfpdvEntity[];

  @OneToMany(() => TgfpecEntity, (tgfpecEntity) => tgfpecEntity.codusu)
  tgfpecs: TgfpecEntity[];

  @OneToMany(() => TgfpedEntity, (tgfpedEntity) => tgfpedEntity.codusu)
  tgfpeds: TgfpedEntity[];

  @OneToMany(() => TgfpegEntity, (tgfpegEntity) => tgfpegEntity.codusucan)
  tgfpegs: TgfpegEntity[];

  @OneToMany(() => TgfpegEntity, (tgfpegEntity) => tgfpegEntity.codusupb)
  tgfpegs2: TgfpegEntity[];

  @OneToMany(() => TgfpegEntity, (tgfpegEntity) => tgfpegEntity.codusutara)
  tgfpegs3: TgfpegEntity[];

  @OneToMany(() => TgfpeiEntity, (tgfpeiEntity) => tgfpeiEntity.codusubruto)
  tgfpeis: TgfpeiEntity[];

  @OneToMany(() => TgfpeiEntity, (tgfpeiEntity) => tgfpeiEntity.codusutara)
  tgfpeis2: TgfpeiEntity[];

  @OneToMany(() => TgfpeiEntity, (tgfpeiEntity) => tgfpeiEntity.codusu)
  tgfpeis3: TgfpeiEntity[];

  @OneToMany(() => TgfperEntity, (tgfperEntity) => tgfperEntity.codusu)
  tgfpers: TgfperEntity[];

  @OneToMany(() => TgfperdaEntity, (tgfperdaEntity) => tgfperdaEntity.codusu)
  tgfperdas: TgfperdaEntity[];

  @OneToMany(() => TgfpevEntity, (tgfpevEntity) => tgfpevEntity.codusu)
  tgfpevs: TgfpevEntity[];

  @OneToMany(() => TgfpfxEntity, (tgfpfxEntity) => tgfpfxEntity.codusu)
  tgfpfxes: TgfpfxEntity[];

  @OneToMany(() => TgfplcEntity, (tgfplcEntity) => tgfplcEntity.codusu)
  tgfplcs: TgfplcEntity[];

  @OneToMany(() => TgfpliEntity, (tgfpliEntity) => tgfpliEntity.codusu)
  tgfplis: TgfpliEntity[];

  @OneToMany(() => TgfpmfEntity, (tgfpmfEntity) => tgfpmfEntity.codusu)
  tgfpmfs: TgfpmfEntity[];

  @OneToMany(() => TgfpmpEntity, (tgfpmpEntity) => tgfpmpEntity.codusu)
  tgfpmps: TgfpmpEntity[];

  @OneToMany(() => TgfpocEntity, (tgfpocEntity) => tgfpocEntity.codusu)
  tgfpocs: TgfpocEntity[];

  @OneToMany(() => TgfppaEntity, (tgfppaEntity) => tgfppaEntity.codusu)
  tgfppas: TgfppaEntity[];

  @OneToMany(() => TgfppcEntity, (tgfppcEntity) => tgfppcEntity.codusu)
  tgfppcs: TgfppcEntity[];

  @OneToMany(() => TgfpplEntity, (tgfpplEntity) => tgfpplEntity.codusuliblog)
  tgfppls: TgfpplEntity[];

  @OneToMany(() => TgfpplEntity, (tgfpplEntity) => tgfpplEntity.codusulibprod)
  tgfppls2: TgfpplEntity[];

  @OneToMany(() => TgfprdpEntity, (tgfprdpEntity) => tgfprdpEntity.codusu)
  tgfprdps: TgfprdpEntity[];

  @OneToMany(() => TgfproiEntity, (tgfproiEntity) => tgfproiEntity.codusu)
  tgfprois: TgfproiEntity[];

  @OneToMany(() => TgfpromEntity, (tgfpromEntity) => tgfpromEntity.codusu)
  tgfproms: TgfpromEntity[];

  @OneToMany(
    () => TgfprorvmEntity,
    (tgfprorvmEntity) => tgfprorvmEntity.codusupror,
  )
  tgfprorvms: TgfprorvmEntity[];

  @OneToMany(() => TgfpsdEntity, (tgfpsdEntity) => tgfpsdEntity.codusu)
  tgfpsds: TgfpsdEntity[];

  @OneToMany(() => TgfpsnEntity, (tgfpsnEntity) => tgfpsnEntity.codusu)
  tgfpsns: TgfpsnEntity[];

  @OneToMany(() => TgfptcEntity, (tgfptcEntity) => tgfptcEntity.codusu)
  tgfptcs: TgfptcEntity[];

  @OneToMany(() => TgfptpEntity, (tgfptpEntity) => tgfptpEntity.codusu)
  tgfptps: TgfptpEntity[];

  @OneToMany(() => TgfpwuEntity, (tgfpwuEntity) => tgfpwuEntity.codusu2)
  tgfpwus: TgfpwuEntity[];

  @OneToMany(() => TgfqprEntity, (tgfqprEntity) => tgfqprEntity.codusu2)
  tgfqprs: TgfqprEntity[];

  @OneToMany(() => TgframEntity, (tgframEntity) => tgframEntity.codusucoleta)
  tgframs: TgframEntity[];

  @OneToMany(
    () => TgframEntity,
    (tgframEntity) => tgframEntity.codusuconferencia,
  )
  tgframs2: TgframEntity[];

  @OneToMany(() => TgframEntity, (tgframEntity) => tgframEntity.codusuprotocol)
  tgframs3: TgframEntity[];

  @OneToMany(() => TgframEntity, (tgframEntity) => tgframEntity.codusu)
  tgframs4: TgframEntity[];

  @OneToMany(() => TgfratEntity, (tgfratEntity) => tgfratEntity.codusu)
  tgfrats: TgfratEntity[];

  @OneToMany(() => TgfravEntity, (tgfravEntity) => tgfravEntity.codusu)
  tgfravs: TgfravEntity[];

  @OneToMany(() => TgfrcEntity, (tgfrcEntity) => tgfrcEntity.codusu)
  tgfrcs: TgfrcEntity[];

  @OneToMany(() => TgfrcdEntity, (tgfrcdEntity) => tgfrcdEntity.codusu)
  tgfrcds: TgfrcdEntity[];

  @OneToMany(() => TgfreaEntity, (tgfreaEntity) => tgfreaEntity.codusu)
  tgfreas: TgfreaEntity[];

  @OneToMany(() => TgfremEntity, (tgfremEntity) => tgfremEntity.codusu)
  tgfrems: TgfremEntity[];

  @OneToMany(() => TgfrenEntity, (tgfrenEntity) => tgfrenEntity.codusu)
  tgfrens: TgfrenEntity[];

  @OneToMany(() => TgfresEntity, (tgfresEntity) => tgfresEntity.codusubaixa)
  tgfres: TgfresEntity[];

  @OneToMany(() => TgfrgmEntity, (tgfrgmEntity) => tgfrgmEntity.codusu)
  tgfrgms: TgfrgmEntity[];

  @OneToMany(() => TgfrngEntity, (tgfrngEntity) => tgfrngEntity.codusulib)
  tgfrngs: TgfrngEntity[];

  @OneToMany(() => TgfrntEntity, (tgfrntEntity) => tgfrntEntity.codusu)
  tgfrnts: TgfrntEntity[];

  @OneToMany(() => TgfrotEntity, (tgfrotEntity) => tgfrotEntity.codusu)
  tgfrots: TgfrotEntity[];

  @OneToMany(() => TgfrotcatEntity, (tgfrotcatEntity) => tgfrotcatEntity.codusu)
  tgfrotcats: TgfrotcatEntity[];

  @OneToMany(() => TgfrstEntity, (tgfrstEntity) => tgfrstEntity.codusu)
  tgfrsts: TgfrstEntity[];

  @OneToMany(() => TgfrtpEntity, (tgfrtpEntity) => tgfrtpEntity.codusu)
  tgfrtps: TgfrtpEntity[];

  @OneToMany(() => TgfsapEntity, (tgfsapEntity) => tgfsapEntity.codliberador)
  tgfsaps: TgfsapEntity[];

  @OneToMany(() => TgfsazEntity, (tgfsazEntity) => tgfsazEntity.codusu)
  tgfsazs: TgfsazEntity[];

  @OneToMany(() => TgfscaEntity, (tgfscaEntity) => tgfscaEntity.codusu)
  tgfscas: TgfscaEntity[];

  @OneToMany(() => TgfscoEntity, (tgfscoEntity) => tgfscoEntity.codusu)
  tgfscos: TgfscoEntity[];

  @OneToMany(() => TgfscrEntity, (tgfscrEntity) => tgfscrEntity.codusu)
  tgfscrs: TgfscrEntity[];

  @OneToMany(() => TgfseuEntity, (tgfseuEntity) => tgfseuEntity.codusu2)
  tgfseus: TgfseuEntity[];

  @OneToMany(() => TgfsitEntity, (tgfsitEntity) => tgfsitEntity.codusu)
  tgfsits: TgfsitEntity[];

  @OneToMany(() => TgfsolEntity, (tgfsolEntity) => tgfsolEntity.codusu)
  tgfsols: TgfsolEntity[];

  @OneToMany(() => TgfsolEntity, (tgfsolEntity) => tgfsolEntity.codususol)
  tgfsols2: TgfsolEntity[];

  @OneToMany(() => TgfsprEntity, (tgfsprEntity) => tgfsprEntity.codusu)
  tgfsprs: TgfsprEntity[];

  @OneToMany(() => TgfstaEntity, (tgfstaEntity) => tgfstaEntity.codusu)
  tgfstas: TgfstaEntity[];

  @OneToMany(() => TgfsteEntity, (tgfsteEntity) => tgfsteEntity.codusu)
  tgfstes: TgfsteEntity[];

  @OneToMany(() => TgfstmvEntity, (tgfstmvEntity) => tgfstmvEntity.codusu)
  tgfstmvs: TgfstmvEntity[];

  @OneToMany(() => TgfstmvhEntity, (tgfstmvhEntity) => tgfstmvhEntity.codusu)
  tgfstmvhs: TgfstmvhEntity[];

  @OneToMany(() => TgftamEntity, (tgftamEntity) => tgftamEntity.codusu)
  tgftams: TgftamEntity[];

  @OneToMany(() => TgftdpEntity, (tgftdpEntity) => tgftdpEntity.codusu)
  tgftdps: TgftdpEntity[];

  @OneToMany(() => TgftelEntity, (tgftelEntity) => tgftelEntity.codusu)
  tgftels: TgftelEntity[];

  @OneToMany(() => TgftelEntity, (tgftelEntity) => tgftelEntity.codatendente)
  tgftels2: TgftelEntity[];

  @OneToMany(() => TgfterEntity, (tgfterEntity) => tgfterEntity.codusu)
  tgfters: TgfterEntity[];

  @OneToMany(() => TgftfrEntity, (tgftfrEntity) => tgftfrEntity.codusu)
  tgftfrs: TgftfrEntity[];

  @OneToMany(() => TgftipEntity, (tgftipEntity) => tgftipEntity.codusu)
  tgftips: TgftipEntity[];

  @OneToMany(() => TgftolEntity, (tgftolEntity) => tgftolEntity.codusu)
  tgftols: TgftolEntity[];

  @OneToMany(() => TgftpeEntity, (tgftpeEntity) => tgftpeEntity.codusu)
  tgftpes: TgftpeEntity[];

  @OneToMany(() => TgftrcEntity, (tgftrcEntity) => tgftrcEntity.codusu)
  tgftrcs: TgftrcEntity[];

  @OneToMany(() => TgfvdgEntity, (tgfvdgEntity) => tgfvdgEntity.codusulib2)
  tgfvdgs: TgfvdgEntity[];

  @OneToMany(() => TgfvdgEntity, (tgfvdgEntity) => tgfvdgEntity.codusu)
  tgfvdgs2: TgfvdgEntity[];

  @OneToMany(() => TgfvdpEntity, (tgfvdpEntity) => tgfvdpEntity.codusulib2)
  tgfvdps: TgfvdpEntity[];

  @OneToMany(() => TgfvdpEntity, (tgfvdpEntity) => tgfvdpEntity.codusu)
  tgfvdps2: TgfvdpEntity[];

  @OneToMany(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.codusu)
  tgfvens: TgfvenEntity[];

  @OneToMany(() => TgfviagEntity, (tgfviagEntity) => tgfviagEntity.codusu)
  tgfviags: TgfviagEntity[];

  @OneToMany(() => TgfvorEntity, (tgfvorEntity) => tgfvorEntity.codusu2)
  tgfvors: TgfvorEntity[];

  @OneToMany(() => TgicabEntity, (tgicabEntity) => tgicabEntity.codusu)
  tgicabs: TgicabEntity[];

  @OneToMany(() => TgmaiEntity, (tgmaiEntity) => tgmaiEntity.codusu)
  tgmais: TgmaiEntity[];

  @OneToMany(() => TgmaibEntity, (tgmaibEntity) => tgmaibEntity.codusu)
  tgmaibs: TgmaibEntity[];

  @OneToMany(() => TgmcfgEntity, (tgmcfgEntity) => tgmcfgEntity.codusuaprov)
  tgmcfgs: TgmcfgEntity[];

  @OneToMany(() => TgmcfgiEntity, (tgmcfgiEntity) => tgmcfgiEntity.codusu)
  tgmcfgis: TgmcfgiEntity[];

  @OneToMany(() => TgmmsgEntity, (tgmmsgEntity) => tgmmsgEntity.codusu)
  tgmmsgs: TgmmsgEntity[];

  @OneToMany(() => TgmperEntity, (tgmperEntity) => tgmperEntity.codusu)
  tgmpers: TgmperEntity[];

  @OneToMany(() => TgmrevEntity, (tgmrevEntity) => tgmrevEntity.codusu)
  tgmrevs: TgmrevEntity[];

  @OneToMany(() => TgmtmeEntity, (tgmtmeEntity) => tgmtmeEntity.codusu)
  tgmtmes: TgmtmeEntity[];

  @OneToMany(() => TgmtraEntity, (tgmtraEntity) => tgmtraEntity.codusulib)
  tgmtras: TgmtraEntity[];

  @OneToMany(() => TgmtraEntity, (tgmtraEntity) => tgmtraEntity.codusu)
  tgmtras2: TgmtraEntity[];

  @OneToMany(() => TgpacoEntity, (tgpacoEntity) => tgpacoEntity.codusu)
  tgpacos: TgpacoEntity[];

  @OneToMany(() => TgpacoEntity, (tgpacoEntity) => tgpacoEntity.codusufim)
  tgpacos2: TgpacoEntity[];

  @OneToMany(() => TgpavaEntity, (tgpavaEntity) => tgpavaEntity.codusu)
  tgpavas: TgpavaEntity[];

  @OneToMany(() => TgpavdEntity, (tgpavdEntity) => tgpavdEntity.codusu)
  tgpavds: TgpavdEntity[];

  @OneToMany(() => TgpavrEntity, (tgpavrEntity) => tgpavrEntity.codusu)
  tgpavrs: TgpavrEntity[];

  @OneToMany(() => TgpcabEntity, (tgpcabEntity) => tgpcabEntity.codusu)
  tgpcabs: TgpcabEntity[];

  @OneToMany(() => TgpccrEntity, (tgpccrEntity) => tgpccrEntity.codusu)
  tgpccrs: TgpccrEntity[];

  @OneToMany(() => TgpdesEntity, (tgpdesEntity) => tgpdesEntity.codusu)
  tgpdes: TgpdesEntity[];

  @OneToMany(() => TgpdpaEntity, (tgpdpaEntity) => tgpdpaEntity.codusu)
  tgpdpas: TgpdpaEntity[];

  @OneToMany(() => TgpdpcEntity, (tgpdpcEntity) => tgpdpcEntity.codusu)
  tgpdpcs: TgpdpcEntity[];

  @OneToMany(() => TgpescEntity, (tgpescEntity) => tgpescEntity.codusu)
  tgpescs: TgpescEntity[];

  @OneToMany(() => TgpfcfEntity, (tgpfcfEntity) => tgpfcfEntity.codusu)
  tgpfcfs: TgpfcfEntity[];

  @OneToMany(() => TgpfcpEntity, (tgpfcpEntity) => tgpfcpEntity.codusu)
  tgpfcps: TgpfcpEntity[];

  @OneToMany(() => TgpfctEntity, (tgpfctEntity) => tgpfctEntity.codusu)
  tgpfcts: TgpfctEntity[];

  @OneToMany(() => TgpfluEntity, (tgpfluEntity) => tgpfluEntity.codusu)
  tgpflus: TgpfluEntity[];

  @OneToMany(() => TgpgreEntity, (tgpgreEntity) => tgpgreEntity.codusu)
  tgpgres: TgpgreEntity[];

  @OneToMany(() => TgpgslEntity, (tgpgslEntity) => tgpgslEntity.codusu)
  tgpgsls: TgpgslEntity[];

  @OneToMany(() => TgpicpEntity, (tgpicpEntity) => tgpicpEntity.codusu)
  tgpicps: TgpicpEntity[];

  @OneToMany(() => TgpidaEntity, (tgpidaEntity) => tgpidaEntity.codusu)
  tgpidas: TgpidaEntity[];

  @OneToMany(() => TgpidcEntity, (tgpidcEntity) => tgpidcEntity.codusu)
  tgpidcs: TgpidcEntity[];

  @OneToMany(() => TgpideEntity, (tgpideEntity) => tgpideEntity.codusu)
  tgpides: TgpideEntity[];

  @OneToMany(() => TgpigsEntity, (tgpigsEntity) => tgpigsEntity.codusu)
  tgpigs: TgpigsEntity[];

  @OneToMany(() => TgpindEntity, (tgpindEntity) => tgpindEntity.codusu)
  tgpinds: TgpindEntity[];

  @OneToMany(() => TgpnivEntity, (tgpnivEntity) => tgpnivEntity.codusu)
  tgpnivs: TgpnivEntity[];

  @OneToMany(() => TgpnvcEntity, (tgpnvcEntity) => tgpnvcEntity.codusu)
  tgpnvcs: TgpnvcEntity[];

  @OneToMany(() => TgpperEntity, (tgpperEntity) => tgpperEntity.codusu)
  tgppers: TgpperEntity[];

  @OneToMany(() => TgpprcEntity, (tgpprcEntity) => tgpprcEntity.codusu)
  tgpprcs: TgpprcEntity[];

  @OneToMany(
    () => TgpqueEntity,
    (tgpqueEntity) => tgpqueEntity.codusuavaliador2,
  )
  tgpques: TgpqueEntity[];

  @OneToMany(() => TgpqueEntity, (tgpqueEntity) => tgpqueEntity.codusu)
  tgpques2: TgpqueEntity[];

  @OneToMany(() => TgpregEntity, (tgpregEntity) => tgpregEntity.codusu)
  tgpregs: TgpregEntity[];

  @OneToMany(() => TgprelEntity, (tgprelEntity) => tgprelEntity.codusu)
  tgprels: TgprelEntity[];

  @OneToMany(() => TgprepEntity, (tgprepEntity) => tgprepEntity.codusu)
  tgpreps: TgprepEntity[];

  @OneToMany(() => TgptarEntity, (tgptarEntity) => tgptarEntity.codusu)
  tgptars: TgptarEntity[];

  @OneToMany(() => TgptcpEntity, (tgptcpEntity) => tgptcpEntity.codusu)
  tgptcps: TgptcpEntity[];

  @OneToMany(() => TgptprEntity, (tgptprEntity) => tgptprEntity.codusu)
  tgptprs: TgptprEntity[];

  @OneToMany(() => TgpusuEntity, (tgpusuEntity) => tgpusuEntity.codusu)
  tgpusus: TgpusuEntity[];

  @OneToMany(() => TgvavpEntity, (tgvavpEntity) => tgvavpEntity.codusu)
  tgvavps: TgvavpEntity[];

  @OneToMany(() => TgvavprEntity, (tgvavprEntity) => tgvavprEntity.codusu)
  tgvavprs: TgvavprEntity[];

  @OneToMany(() => TgvngaEntity, (tgvngaEntity) => tgvngaEntity.codusu)
  tgvngas: TgvngaEntity[];

  @OneToMany(() => TgvnogEntity, (tgvnogEntity) => tgvnogEntity.codusu)
  tgvnogs: TgvnogEntity[];

  @OneToMany(() => TgvpegEntity, (tgvpegEntity) => tgvpegEntity.codusu)
  tgvpegs: TgvpegEntity[];

  @OneToMany(() => TgvpepEntity, (tgvpepEntity) => tgvpepEntity.codusu)
  tgvpeps: TgvpepEntity[];

  @OneToMany(() => TgvpeprEntity, (tgvpeprEntity) => tgvpeprEntity.codusu)
  tgvpeprs: TgvpeprEntity[];

  @OneToMany(() => TgvpergEntity, (tgvpergEntity) => tgvpergEntity.codusu)
  tgvpergs: TgvpergEntity[];

  @OneToMany(() => TgvpetEntity, (tgvpetEntity) => tgvpetEntity.codusu)
  tgvpets: TgvpetEntity[];

  @OneToMany(() => TgvpetpEntity, (tgvpetpEntity) => tgvpetpEntity.codusu)
  tgvpetps: TgvpetpEntity[];

  @OneToMany(() => TgvpeuEntity, (tgvpeuEntity) => tgvpeuEntity.codusualt2)
  tgvpeus: TgvpeuEntity[];

  @OneToMany(() => TgvpeuEntity, (tgvpeuEntity) => tgvpeuEntity.codusu2)
  tgvpeus2: TgvpeuEntity[];

  @OneToMany(() => TgvravEntity, (tgvravEntity) => tgvravEntity.codusu)
  tgvravs: TgvravEntity[];

  @OneToMany(() => TgvrngEntity, (tgvrngEntity) => tgvrngEntity.codusu)
  tgvrngs: TgvrngEntity[];

  @OneToMany(() => TgwajeEntity, (tgwajeEntity) => tgwajeEntity.codusu)
  tgwajes: TgwajeEntity[];

  @OneToMany(() => TgwareEntity, (tgwareEntity) => tgwareEntity.codusu)
  tgwares: TgwareEntity[];

  @OneToMany(() => TgwarmEntity, (tgwarmEntity) => tgwarmEntity.codusu)
  tgwarms: TgwarmEntity[];

  @OneToMany(() => TgwcoiEntity, (tgwcoiEntity) => tgwcoiEntity.codusu)
  tgwcois: TgwcoiEntity[];

  @OneToMany(() => TgwcoiEntity, (tgwcoiEntity) => tgwcoiEntity.codusudiv)
  tgwcois2: TgwcoiEntity[];

  @OneToMany(() => TgwcteEntity, (tgwcteEntity) => tgwcteEntity.codusu)
  tgwctes: TgwcteEntity[];

  @OneToMany(() => TgwdevEntity, (tgwdevEntity) => tgwdevEntity.codusu)
  tgwdevs: TgwdevEntity[];

  @OneToMany(() => TgwegeEntity, (tgwegeEntity) => tgwegeEntity.codexec2)
  tgweges: TgwegeEntity[];

  @OneToMany(() => TgwempeEntity, (tgwempeEntity) => tgwempeEntity.codusu)
  tgwempes: TgwempeEntity[];

  @OneToMany(() => TgwenpEntity, (tgwenpEntity) => tgwenpEntity.codusu)
  tgwenps: TgwenpEntity[];

  @OneToMany(() => TgweseEntity, (tgweseEntity) => tgweseEntity.codususep2)
  tgwese: TgweseEntity[];

  @OneToMany(() => TgweseEntity, (tgweseEntity) => tgweseEntity.codusualter)
  tgwese2: TgweseEntity[];

  @OneToMany(() => TgwfegEntity, (tgwfegEntity) => tgwfegEntity.codusu)
  tgwfegs: TgwfegEntity[];

  @OneToMany(() => TgwhctEntity, (tgwhctEntity) => tgwhctEntity.codusu)
  tgwhcts: TgwhctEntity[];

  @OneToMany(() => TgwiccEntity, (tgwiccEntity) => tgwiccEntity.codusu2)
  tgwiccs: TgwiccEntity[];

  @OneToMany(() => TgwinvEntity, (tgwinvEntity) => tgwinvEntity.codusu)
  tgwinvs: TgwinvEntity[];

  @OneToMany(() => TgwittEntity, (tgwittEntity) => tgwittEntity.codusuexec2)
  tgwitts: TgwittEntity[];

  @OneToMany(() => TgwivrEntity, (tgwivrEntity) => tgwivrEntity.codusu)
  tgwivrs: TgwivrEntity[];

  @OneToMany(() => TgwlboEntity, (tgwlboEntity) => tgwlboEntity.codususolicit)
  tgwlbos: TgwlboEntity[];

  @OneToMany(() => TgwlboEntity, (tgwlboEntity) => tgwlboEntity.codusulib)
  tgwlbos2: TgwlboEntity[];

  @OneToMany(() => TgwlogEntity, (tgwlogEntity) => tgwlogEntity.codusu2)
  tgwlogs: TgwlogEntity[];

  @OneToMany(() => TgwquaEntity, (tgwquaEntity) => tgwquaEntity.codusu)
  tgwquas: TgwquaEntity[];

  @OneToMany(() => TgwrconEntity, (tgwrconEntity) => tgwrconEntity.codusuconf)
  tgwrcons: TgwrconEntity[];

  @OneToMany(() => TgwrecEntity, (tgwrecEntity) => tgwrecEntity.codusu)
  tgwrecs: TgwrecEntity[];

  @OneToMany(() => TgwrevEntity, (tgwrevEntity) => tgwrevEntity.codusuconf)
  tgwrevs: TgwrevEntity[];

  @OneToMany(() => TgwrplEntity, (tgwrplEntity) => tgwrplEntity.codusu)
  tgwrpls: TgwrplEntity[];

  @OneToMany(() => TgwrumaEntity, (tgwrumaEntity) => tgwrumaEntity.codusu)
  tgwrumas: TgwrumaEntity[];

  @OneToMany(() => TgwsepEntity, (tgwsepEntity) => tgwsepEntity.codusu)
  tgwseps: TgwsepEntity[];

  @OneToMany(() => TgwtarEntity, (tgwtarEntity) => tgwtarEntity.codusu)
  tgwtars: TgwtarEntity[];

  @OneToMany(() => TgwtecEntity, (tgwtecEntity) => tgwtecEntity.codusu2)
  tgwtecs: TgwtecEntity[];

  @OneToMany(() => TgwtraEntity, (tgwtraEntity) => tgwtraEntity.codusu)
  tgwtras: TgwtraEntity[];

  @OneToMany(() => TgwtrcdEntity, (tgwtrcdEntity) => tgwtrcdEntity.codusuconf)
  tgwtrcds: TgwtrcdEntity[];

  @OneToMany(() => TgwtrfEntity, (tgwtrfEntity) => tgwtrfEntity.codusu)
  tgwtrfs: TgwtrfEntity[];

  @OneToMany(() => TgwusuEntity, (tgwusuEntity) => tgwusuEntity.codusu2)
  tgwusus: TgwusuEntity[];

  @OneToMany(() => TgwuxtEntity, (tgwuxtEntity) => tgwuxtEntity.codusu)
  tgwuxts: TgwuxtEntity[];

  @OneToMany(() => TgwuxtEntity, (tgwuxtEntity) => tgwuxtEntity.codusuexec2)
  tgwuxts2: TgwuxtEntity[];

  @ManyToMany(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tsiusus)
  tgfvols: TgfvolEntity[];

  @OneToMany(() => TimaclEntity, (timaclEntity) => timaclEntity.aclusuincluiu)
  timacls: TimaclEntity[];

  @OneToMany(() => TimaclEntity, (timaclEntity) => timaclEntity.aclusualterou)
  timacls2: TimaclEntity[];

  @OneToMany(() => TimacmEntity, (timacmEntity) => timacmEntity.acmusualter)
  timacms: TimacmEntity[];

  @OneToMany(() => TimacmEntity, (timacmEntity) => timacmEntity.acmusuinclusao)
  timacms2: TimacmEntity[];

  @OneToMany(() => TimadmEntity, (timadmEntity) => timadmEntity.admusuario)
  timadms: TimadmEntity[];

  @OneToMany(() => TimadmEntity, (timadmEntity) => timadmEntity.admcodusuinc)
  timadms2: TimadmEntity[];

  @OneToMany(() => TimancEntity, (timancEntity) => timancEntity.anccodusucanc)
  timancs: TimancEntity[];

  @OneToMany(() => TimchiEntity, (timchiEntity) => timchiEntity.chiusuario)
  timchis: TimchiEntity[];

  @OneToMany(
    () => TimctrEntity,
    (timctrEntity) => timctrEntity.ctrcodusualteracao,
  )
  timctrs: TimctrEntity[];

  @OneToMany(
    () => TimctrEntity,
    (timctrEntity) => timctrEntity.ctrcodusuinclusao,
  )
  timctrs2: TimctrEntity[];

  @OneToMany(() => TimdlvEntity, (timdlvEntity) => timdlvEntity.dlvusualteracao)
  timdlvs: TimdlvEntity[];

  @OneToMany(() => TimdlvEntity, (timdlvEntity) => timdlvEntity.dlvusuinclusao)
  timdlvs2: TimdlvEntity[];

  @OneToMany(() => TimdlvEntity, (timdlvEntity) => timdlvEntity.dlvusuario)
  timdlvs3: TimdlvEntity[];

  @OneToMany(() => TimdtlEntity, (timdtlEntity) => timdtlEntity.dtlusuario)
  timdtls: TimdtlEntity[];

  @OneToMany(() => TimdtlEntity, (timdtlEntity) => timdtlEntity.dtlusuarioalt)
  timdtls2: TimdtlEntity[];

  @OneToMany(() => TimeprEntity, (timeprEntity) => timeprEntity.eprusuarioalt)
  timeprs: TimeprEntity[];

  @OneToMany(() => TimeprEntity, (timeprEntity) => timeprEntity.eprusuario)
  timeprs2: TimeprEntity[];

  @OneToMany(() => TimfacEntity, (timfacEntity) => timfacEntity.facusuario)
  timfacs: TimfacEntity[];

  @OneToMany(() => TimfacEntity, (timfacEntity) => timfacEntity.facusualter)
  timfacs2: TimfacEntity[];

  @OneToMany(() => TimilcEntity, (timilcEntity) => timilcEntity.ilcusuario)
  timilcs: TimilcEntity[];

  @OneToMany(() => TimimpEntity, (timimpEntity) => timimpEntity.impusuario)
  timimps: TimimpEntity[];

  @OneToMany(() => TimimpEntity, (timimpEntity) => timimpEntity.impcodusuinc)
  timimps2: TimimpEntity[];

  @OneToMany(() => TimimrEntity, (timimrEntity) => timimrEntity.imrusuario)
  timimrs: TimimrEntity[];

  @OneToMany(() => TimimvEntity, (timimvEntity) => timimvEntity.imvcodusuinc)
  timimvs: TimimvEntity[];

  @OneToMany(() => TimiprEntity, (timiprEntity) => timiprEntity.iprcodusudev)
  timiprs: TimiprEntity[];

  @OneToMany(() => TimiprEntity, (timiprEntity) => timiprEntity.iprcodusuent)
  timiprs2: TimiprEntity[];

  @OneToMany(() => TimiprEntity, (timiprEntity) => timiprEntity.iprcodusuprop)
  timiprs3: TimiprEntity[];

  @OneToMany(() => TimlbfEntity, (timlbfEntity) => timlbfEntity.lbfusuario)
  timlbfs: TimlbfEntity[];

  @OneToMany(() => TimlcrEntity, (timlcrEntity) => timlcrEntity.lcrusuario)
  timlcrs: TimlcrEntity[];

  @OneToMany(() => TimlcrEntity, (timlcrEntity) => timlcrEntity.lcrcodusuinc)
  timlcrs2: TimlcrEntity[];

  @OneToMany(() => TimldtEntity, (timldtEntity) => timldtEntity.ldtusuarioalt)
  timldts: TimldtEntity[];

  @OneToMany(() => TimldtEntity, (timldtEntity) => timldtEntity.ldtusuario)
  timldts2: TimldtEntity[];

  @OneToMany(() => TimlocEntity, (timlocEntity) => timlocEntity.locusuario)
  timlocs: TimlocEntity[];

  @OneToMany(() => TimlocEntity, (timlocEntity) => timlocEntity.loccodusuinc)
  timlocs2: TimlocEntity[];

  @OneToMany(() => TimlppEntity, (timlppEntity) => timlppEntity.lppusuario)
  timlpps: TimlppEntity[];

  @OneToMany(() => TimmfdEntity, (timmfdEntity) => timmfdEntity.mfdusualterou)
  timmfds: TimmfdEntity[];

  @OneToMany(() => TimmfdEntity, (timmfdEntity) => timmfdEntity.mfdusuincluiu)
  timmfds2: TimmfdEntity[];

  @OneToMany(() => TimpprEntity, (timpprEntity) => timpprEntity.pprusuario)
  timpprs: TimpprEntity[];

  @OneToMany(() => TimpprEntity, (timpprEntity) => timpprEntity.pprusualter)
  timpprs2: TimpprEntity[];

  @OneToMany(() => TimppvEntity, (timppvEntity) => timppvEntity.ppvusuinclusao)
  timppvs: TimppvEntity[];

  @OneToMany(() => TimppvEntity, (timppvEntity) => timppvEntity.ppvusualteracao)
  timppvs2: TimppvEntity[];

  @OneToMany(
    () => TimrctEntity,
    (timrctEntity) => timrctEntity.rctcodusualteracao,
  )
  timrcts: TimrctEntity[];

  @OneToMany(
    () => TimrctEntity,
    (timrctEntity) => timrctEntity.rctcodusuinclusao,
  )
  timrcts2: TimrctEntity[];

  @OneToMany(() => TimrenEntity, (timrenEntity) => timrenEntity.renusuinclusao)
  timrens: TimrenEntity[];

  @OneToMany(() => TimrenEntity, (timrenEntity) => timrenEntity.renusualteracao)
  timrens2: TimrenEntity[];

  @OneToMany(() => TimripEntity, (timripEntity) => timripEntity.ripusuinc)
  timrips: TimripEntity[];

  @OneToMany(() => TimripEntity, (timripEntity) => timripEntity.ripusualter)
  timrips2: TimripEntity[];

  @OneToMany(() => TimrloEntity, (timrloEntity) => timrloEntity.rlousualteracao)
  timrlos: TimrloEntity[];

  @OneToMany(() => TimrloEntity, (timrloEntity) => timrloEntity.rlousuinclusao)
  timrlos2: TimrloEntity[];

  @OneToMany(() => TimsacEntity, (timsacEntity) => timsacEntity.sacusuario)
  timsacs: TimsacEntity[];

  @OneToMany(() => TimscaEntity, (timscaEntity) => timscaEntity.scausuario)
  timscas: TimscaEntity[];

  @OneToMany(() => TimscaEntity, (timscaEntity) => timscaEntity.scausudest)
  timscas2: TimscaEntity[];

  @OneToMany(() => TimscaEntity, (timscaEntity) => timscaEntity.scausuarioalt)
  timscas3: TimscaEntity[];

  @OneToMany(() => TimvdoEntity, (timvdoEntity) => timvdoEntity.vdousualt)
  timvdos: TimvdoEntity[];

  @OneToMany(() => TimvdoEntity, (timvdoEntity) => timvdoEntity.vdousuinc)
  timvdos2: TimvdoEntity[];

  @OneToMany(() => TjcapjEntity, (tjcapjEntity) => tjcapjEntity.autordesc)
  tjcapjs: TjcapjEntity[];

  @OneToMany(() => TlfdinvrEntity, (tlfdinvrEntity) => tlfdinvrEntity.codusu)
  tlfdinvrs: TlfdinvrEntity[];

  @OneToMany(() => TmdfmgEntity, (tmdfmgEntity) => tmdfmgEntity.codusuremet)
  tmdfmgs: TmdfmgEntity[];

  @OneToMany(() => TmiaunEntity, (tmiaunEntity) => tmiaunEntity.codusu2)
  tmiauns: TmiaunEntity[];

  @OneToMany(() => TmiexeEntity, (tmiexeEntity) => tmiexeEntity.codusu)
  tmiexes: TmiexeEntity[];

  @OneToMany(() => TmiindEntity, (tmiindEntity) => tmiindEntity.codusu)
  tmiinds: TmiindEntity[];

  @OneToMany(() => TmiplaEntity, (tmiplaEntity) => tmiplaEntity.codusu)
  tmiplas: TmiplaEntity[];

  @OneToMany(() => TmiplaEntity, (tmiplaEntity) => tmiplaEntity.codusuexec)
  tmiplas2: TmiplaEntity[];

  @OneToMany(() => TmiungEntity, (tmiungEntity) => tmiungEntity.codusuresp)
  tmiungs: TmiungEntity[];

  @ManyToMany(() => TmiungEntity, (tmiungEntity) => tmiungEntity.tsiusus)
  @JoinTable({
    name: 'TMIUXG',
    joinColumns: [{ name: 'CODUSU', referencedColumnName: 'codusu' }],
    inverseJoinColumns: [{ name: 'CODUNG', referencedColumnName: 'codung' }],
    schema: 'SANKHYA',
  })
  tmiungs2: TmiungEntity[];

  @OneToMany(() => TmscalocoEntity, (tmscalocoEntity) => tmscalocoEntity.codusu)
  tmscalocos: TmscalocoEntity[];

  @OneToMany(
    () => TmscalocoEntity,
    (tmscalocoEntity) => tmscalocoEntity.codusufechamento,
  )
  tmscalocos2: TmscalocoEntity[];

  @OneToMany(() => TmscmpEntity, (tmscmpEntity) => tmscmpEntity.codusu)
  tmscmps: TmscmpEntity[];

  @OneToMany(
    () => TmscmphistEntity,
    (tmscmphistEntity) => tmscmphistEntity.codusu,
  )
  tmscmphists: TmscmphistEntity[];

  @OneToMany(() => TmsfvgEntity, (tmsfvgEntity) => tmsfvgEntity.codusuinc)
  tmsfvgs: TmsfvgEntity[];

  @OneToMany(() => TmsfvgEntity, (tmsfvgEntity) => tmsfvgEntity.codusubaixa)
  tmsfvgs2: TmsfvgEntity[];

  @OneToMany(() => TmsnotasEntity, (tmsnotasEntity) => tmsnotasEntity.codusu)
  tmsnotas: TmsnotasEntity[];

  @OneToMany(
    () => TmsordcarregEntity,
    (tmsordcarregEntity) => tmsordcarregEntity.codusu,
  )
  tmsordcarregs: TmsordcarregEntity[];

  @OneToMany(
    () => TmsparcredEntity,
    (tmsparcredEntity) => tmsparcredEntity.codusulib,
  )
  tmsparcreds: TmsparcredEntity[];

  @OneToMany(
    () => TmsparcredEntity,
    (tmsparcredEntity) => tmsparcredEntity.codususolicit,
  )
  tmsparcreds2: TmsparcredEntity[];

  @OneToMany(() => TmspedEntity, (tmspedEntity) => tmspedEntity.codusualter)
  tmspeds: TmspedEntity[];

  @OneToMany(() => TmspedEntity, (tmspedEntity) => tmspedEntity.codusuinc)
  tmspeds2: TmspedEntity[];

  @OneToMany(
    () => TmspedrotEntity,
    (tmspedrotEntity) => tmspedrotEntity.codusuinc,
  )
  tmspedrots: TmspedrotEntity[];

  @OneToMany(
    () => TmspedrotEntity,
    (tmspedrotEntity) => tmspedrotEntity.codusualter,
  )
  tmspedrots2: TmspedrotEntity[];

  @OneToMany(() => TpqgrpEntity, (tpqgrpEntity) => tpqgrpEntity.codusu)
  tpqgrps: TpqgrpEntity[];

  @OneToMany(() => TpqgrqEntity, (tpqgrqEntity) => tpqgrqEntity.codusu)
  tpqgrqs: TpqgrqEntity[];

  @OneToMany(() => TpqinfEntity, (tpqinfEntity) => tpqinfEntity.codusu)
  tpqinfs: TpqinfEntity[];

  @OneToMany(() => Tpqpe1Entity, (tpqpe1Entity) => tpqpe1Entity.codusu)
  tpqpes3: Tpqpe1Entity[];

  @OneToMany(() => TpqperEntity, (tpqperEntity) => tpqperEntity.codusu)
  tpqpers: TpqperEntity[];

  @OneToMany(() => TpqpesEntity, (tpqpesEntity) => tpqpesEntity.codusupesq)
  tpqpes: TpqpesEntity[];

  @OneToMany(() => TpqpesEntity, (tpqpesEntity) => tpqpesEntity.codusu)
  tpqpes2: TpqpesEntity[];

  @OneToMany(() => TpqplaEntity, (tpqplaEntity) => tpqplaEntity.codusu)
  tpqplas: TpqplaEntity[];

  @OneToMany(() => Tpqqu1Entity, (tpqqu1Entity) => tpqqu1Entity.codusu)
  tpqqus: Tpqqu1Entity[];

  @OneToMany(() => TpqqueEntity, (tpqqueEntity) => tpqqueEntity.codusu)
  tpqques: TpqqueEntity[];

  @OneToMany(() => TpqresEntity, (tpqresEntity) => tpqresEntity.codusu)
  tpqres: TpqresEntity[];

  @OneToMany(() => TpqrpeEntity, (tpqrpeEntity) => tpqrpeEntity.codusu)
  tpqrpes: TpqrpeEntity[];

  @OneToMany(() => TpqrpoEntity, (tpqrpoEntity) => tpqrpoEntity.codusu)
  tpqrpos: TpqrpoEntity[];

  @OneToMany(() => TprcmpsEntity, (tprcmpsEntity) => tprcmpsEntity.codusu)
  tprcmps: TprcmpsEntity[];

  @OneToMany(() => TprconfEntity, (tprconfEntity) => tprconfEntity.codusuconf)
  tprconfs: TprconfEntity[];

  @OneToMany(() => TpreiatvEntity, (tpreiatvEntity) => tpreiatvEntity.codexec)
  tpreiatvs: TpreiatvEntity[];

  @OneToMany(() => TpreiatvEntity, (tpreiatvEntity) => tpreiatvEntity.codusu)
  tpreiatvs2: TpreiatvEntity[];

  @OneToMany(() => TprhmrpEntity, (tprhmrpEntity) => tprhmrpEntity.codusu)
  tprhmrps: TprhmrpEntity[];

  @OneToMany(() => TprhmrpEntity, (tprhmrpEntity) => tprhmrpEntity.codusucanc)
  tprhmrps2: TprhmrpEntity[];

  @OneToMany(() => TprhsmpEntity, (tprhsmpEntity) => tprhsmpEntity.codusu)
  tprhsmps: TprhsmpEntity[];

  @OneToMany(() => TpriatvEntity, (tpriatvEntity) => tpriatvEntity.codusu)
  tpriatvs: TpriatvEntity[];

  @OneToMany(() => TpriatvEntity, (tpriatvEntity) => tpriatvEntity.codusufin)
  tpriatvs2: TpriatvEntity[];

  @OneToMany(() => TpriatvEntity, (tpriatvEntity) => tpriatvEntity.codultexec)
  tpriatvs3: TpriatvEntity[];

  @OneToMany(() => TprmpsEntity, (tprmpsEntity) => tprmpsEntity.codusu)
  tprmps: TprmpsEntity[];

  @OneToMany(() => TrdblcEntity, (trdblcEntity) => trdblcEntity.codusu)
  trdblcs: TrdblcEntity[];

  @OneToMany(() => TrdcfcEntity, (trdcfcEntity) => trdcfcEntity.codusu2)
  trdcfcs: TrdcfcEntity[];

  @OneToMany(() => TrievtEntity, (trievtEntity) => trievtEntity.codusu)
  trievts: TrievtEntity[];

  @OneToMany(() => TripajEntity, (tripajEntity) => tripajEntity.codusu)
  tripajs: TripajEntity[];

  @OneToMany(() => TripempEntity, (tripempEntity) => tripempEntity.codusu)
  tripemps: TripempEntity[];

  @OneToMany(() => TripimpEntity, (tripimpEntity) => tripimpEntity.codusu)
  tripimps: TripimpEntity[];

  @OneToMany(() => TripisetEntity, (tripisetEntity) => tripisetEntity.codusu)
  tripisets: TripisetEntity[];

  @OneToMany(() => TripparcEntity, (tripparcEntity) => tripparcEntity.codusu)
  tripparcs: TripparcEntity[];

  @OneToMany(() => TripprodEntity, (tripprodEntity) => tripprodEntity.codusu)
  tripprods: TripprodEntity[];

  @OneToMany(() => TriptopEntity, (triptopEntity) => triptopEntity.codusu)
  triptops: TriptopEntity[];

  @OneToMany(() => TriptpsvEntity, (triptpsvEntity) => triptpsvEntity.codusu)
  triptpsvs: TriptpsvEntity[];

  @OneToMany(() => TrsavrEntity, (trsavrEntity) => trsavrEntity.codusu)
  trsavrs: TrsavrEntity[];

  @OneToMany(() => TrscanEntity, (trscanEntity) => trscanEntity.codusu)
  trscans: TrscanEntity[];

  @OneToMany(() => TrscanEntity, (trscanEntity) => trscanEntity.codusuaprov)
  trscans2: TrscanEntity[];

  @OneToMany(() => TrsecgEntity, (trsecgEntity) => trsecgEntity.codusu)
  trsecgs: TrsecgEntity[];

  @OneToMany(() => TrsepeEntity, (trsepeEntity) => trsepeEntity.codusu)
  trsepes: TrsepeEntity[];

  @OneToMany(() => TrsetaEntity, (trsetaEntity) => trsetaEntity.codusu)
  trsetas: TrsetaEntity[];

  @OneToMany(() => TrsperEntity, (trsperEntity) => trsperEntity.codusu)
  trspers: TrsperEntity[];

  @OneToMany(() => TrsponEntity, (trsponEntity) => trsponEntity.codusuplan)
  trspons: TrsponEntity[];

  @OneToMany(() => TrsponEntity, (trsponEntity) => trsponEntity.codusuexec)
  trspons2: TrsponEntity[];

  @OneToMany(() => TrsreqEntity, (trsreqEntity) => trsreqEntity.codusuaval)
  trsreqs: TrsreqEntity[];

  @OneToMany(() => TrsreqEntity, (trsreqEntity) => trsreqEntity.codusu)
  trsreqs2: TrsreqEntity[];

  @OneToMany(
    () => TrsreqEntity,
    (trsreqEntity) => trsreqEntity.codusurequisitante,
  )
  trsreqs3: TrsreqEntity[];

  @OneToMany(() => TrsrneEntity, (trsrneEntity) => trsrneEntity.codusunegacao)
  trsrnes: TrsrneEntity[];

  @OneToMany(() => TrsselEntity, (trsselEntity) => trsselEntity.codusu)
  trssels: TrsselEntity[];

  @OneToMany(
    () => TrsselEntity,
    (trsselEntity) => trsselEntity.codusuresponsavel,
  )
  trssels2: TrsselEntity[];

  @OneToMany(() => TrsvneEntity, (trsvneEntity) => trsvneEntity.codusu)
  trsvnes: TrsvneEntity[];

  @OneToMany(() => TsdftiEntity, (tsdftiEntity) => tsdftiEntity.codusu)
  tsdftis: TsdftiEntity[];

  @OneToMany(() => TsiaciEntity, (tsiaciEntity) => tsiaciEntity.codusu2)
  tsiacis: TsiaciEntity[];

  @OneToMany(() => TsiacibkEntity, (tsiacibkEntity) => tsiacibkEntity.codusu2)
  tsiacibks: TsiacibkEntity[];

  @OneToMany(() => TsiacmEntity, (tsiacmEntity) => tsiacmEntity.codusu2)
  tsiacms: TsiacmEntity[];

  @OneToMany(() => TsianxEntity, (tsianxEntity) => tsianxEntity.codusu)
  tsianxes: TsianxEntity[];

  @OneToMany(() => TsiaviEntity, (tsiaviEntity) => tsiaviEntity.codusu)
  tsiavis: TsiaviEntity[];

  @OneToMany(() => TsiceuEntity, (tsiceuEntity) => tsiceuEntity.codusu2)
  tsiceus: TsiceuEntity[];

  @OneToMany(() => TsicfgEntity, (tsicfgEntity) => tsicfgEntity.codusu2)
  tsicfgs: TsicfgEntity[];

  @OneToMany(() => TsicfgbkEntity, (tsicfgbkEntity) => tsicfgbkEntity.codusu2)
  tsicfgbks: TsicfgbkEntity[];

  @OneToMany(() => TsicmdEntity, (tsicmdEntity) => tsicmdEntity.codusu)
  tsicmds: TsicmdEntity[];

  @OneToMany(() => TsiconfEntity, (tsiconfEntity) => tsiconfEntity.codusu2)
  tsiconfs: TsiconfEntity[];

  @OneToMany(
    () => TsiconfbkEntity,
    (tsiconfbkEntity) => tsiconfbkEntity.codusu2,
  )
  tsiconfbks: TsiconfbkEntity[];

  @OneToMany(() => TsictaEntity, (tsictaEntity) => tsictaEntity.codoperexcl)
  tsictas: TsictaEntity[];

  @OneToMany(() => TsictaEntity, (tsictaEntity) => tsictaEntity.codusu)
  tsictas2: TsictaEntity[];

  @OneToMany(() => TsicusEntity, (tsicusEntity) => tsicusEntity.codusuresp)
  tsicuses: TsicusEntity[];

  @OneToMany(() => TsicviewsEntity, (tsicviewsEntity) => tsicviewsEntity.codusu)
  tsicviews: TsicviewsEntity[];

  @OneToMany(
    () => TsidbqueryEntity,
    (tsidbqueryEntity) => tsidbqueryEntity.codusu,
  )
  tsidbqueries: TsidbqueryEntity[];

  @OneToMany(() => TsidsbEntity, (tsidsbEntity) => tsidsbEntity.codusu)
  tsidsbs: TsidsbEntity[];

  @OneToMany(() => TsidsbEntity, (tsidsbEntity) => tsidsbEntity.codusuinc)
  tsidsbs2: TsidsbEntity[];

  @OneToMany(() => TsidsbaEntity, (tsidsbaEntity) => tsidsbaEntity.codusu)
  tsidsbas: TsidsbaEntity[];

  @OneToMany(() => TsidsbaEntity, (tsidsbaEntity) => tsidsbaEntity.codusuinc)
  tsidsbas2: TsidsbaEntity[];

  @OneToMany(
    () => TsidsbadpEntity,
    (tsidsbadpEntity) => tsidsbadpEntity.codusuinc,
  )
  tsidsbadps: TsidsbadpEntity[];

  @OneToMany(() => TsidsbadpEntity, (tsidsbadpEntity) => tsidsbadpEntity.codusu)
  tsidsbadps2: TsidsbadpEntity[];

  @OneToMany(() => TsiempEntity, (tsiempEntity) => tsiempEntity.codusu)
  tsiemps: TsiempEntity[];

  @OneToMany(() => TsierfEntity, (tsierfEntity) => tsierfEntity.codusu2)
  tsierfs: TsierfEntity[];

  @OneToMany(() => TsiexcEntity, (tsiexcEntity) => tsiexcEntity.codusu2)
  tsiexcs: TsiexcEntity[];

  @OneToMany(() => TsiexuEntity, (tsiexuEntity) => tsiexuEntity.codusu2)
  tsiexus: TsiexuEntity[];

  @OneToMany(() => TsifcmEntity, (tsifcmEntity) => tsifcmEntity.codusu)
  tsifcms: TsifcmEntity[];

  @OneToMany(() => TsifilEntity, (tsifilEntity) => tsifilEntity.codusu)
  tsifils: TsifilEntity[];

  @OneToMany(() => TsifsnEntity, (tsifsnEntity) => tsifsnEntity.codusu)
  tsifsns: TsifsnEntity[];

  @OneToMany(() => TsigbcEntity, (tsigbcEntity) => tsigbcEntity.codusu)
  tsigbcs: TsigbcEntity[];

  @OneToMany(() => TsigdgEntity, (tsigdgEntity) => tsigdgEntity.codusu)
  tsigdgs: TsigdgEntity[];

  @OneToMany(() => TsigdgEntity, (tsigdgEntity) => tsigdgEntity.codusuinc)
  tsigdgs2: TsigdgEntity[];

  @OneToMany(() => TsigpuEntity, (tsigpuEntity) => tsigpuEntity.codusu2)
  tsigpus: TsigpuEntity[];

  @OneToMany(() => TsihabEntity, (tsihabEntity) => tsihabEntity.codusu)
  tsihabs: TsihabEntity[];

  @ManyToMany(() => TsihcfEntity, (tsihcfEntity) => tsihcfEntity.tsiusus)
  @JoinTable({
    name: 'TSIHCU',
    joinColumns: [{ name: 'CODUSU', referencedColumnName: 'codusu' }],
    inverseJoinColumns: [{ name: 'NUNICO', referencedColumnName: 'nunico' }],
    schema: 'SANKHYA',
  })
  tsihcfs: TsihcfEntity[];

  @OneToMany(() => TsiilaEntity, (tsiilaEntity) => tsiilaEntity.codusu)
  tsiilas: TsiilaEntity[];

  @OneToMany(() => TsikpcEntity, (tsikpcEntity) => tsikpcEntity.codusu)
  tsikpcs: TsikpcEntity[];

  @OneToMany(() => TsilbaEntity, (tsilbaEntity) => tsilbaEntity.codususolic)
  tsilbas: TsilbaEntity[];

  @OneToMany(() => TsilbaEntity, (tsilbaEntity) => tsilbaEntity.codusuliber)
  tsilbas2: TsilbaEntity[];

  @OneToMany(() => TsilbfEntity, (tsilbfEntity) => tsilbfEntity.reprovadopor)
  tsilbfs: TsilbfEntity[];

  @OneToMany(() => TsilbfEntity, (tsilbfEntity) => tsilbfEntity.autor)
  tsilbfs2: TsilbfEntity[];

  @OneToMany(() => TsilbfEntity, (tsilbfEntity) => tsilbfEntity.aprovadopor)
  tsilbfs3: TsilbfEntity[];

  @OneToMany(() => TsilboEntity, (tsilboEntity) => tsilboEntity.codusu2)
  tsilbos: TsilboEntity[];

  @OneToMany(() => TsilibEntity, (tsilibEntity) => tsilibEntity.codusulib2)
  tsilibs: TsilibEntity[];

  @OneToMany(() => TsilibEntity, (tsilibEntity) => tsilibEntity.codususolicit2)
  tsilibs2: TsilibEntity[];

  @OneToMany(() => TsililEntity, (tsililEntity) => tsililEntity.codusu)
  tsilils: TsililEntity[];

  @OneToMany(() => TsilimEntity, (tsilimEntity) => tsilimEntity.codusu2)
  tsilims: TsilimEntity[];

  @OneToMany(() => TsilogEntity, (tsilogEntity) => tsilogEntity.codusu2)
  tsilogs: TsilogEntity[];

  @OneToMany(() => TsimmmEntity, (tsimmmEntity) => tsimmmEntity.codusu)
  tsimmms: TsimmmEntity[];

  @OneToMany(() => TsimpaEntity, (tsimpaEntity) => tsimpaEntity.codusu)
  tsimpas: TsimpaEntity[];

  @OneToMany(() => TsiparEntity, (tsiparEntity) => tsiparEntity.codusu2)
  tsipars: TsiparEntity[];

  @OneToMany(() => TsiperEntity, (tsiperEntity) => tsiperEntity.codusu2)
  tsipers: TsiperEntity[];

  @OneToMany(() => TsipnzEntity, (tsipnzEntity) => tsipnzEntity.codusu)
  tsipnzs: TsipnzEntity[];

  @OneToMany(() => TsirgbEntity, (tsirgbEntity) => tsirgbEntity.codusu)
  tsirgbs: TsirgbEntity[];

  @OneToMany(() => TsirlgEntity, (tsirlgEntity) => tsirlgEntity.codusu2)
  tsirlgs: TsirlgEntity[];

  @OneToMany(() => TsisbpEntity, (tsisbpEntity) => tsisbpEntity.codusu2)
  tsisbps: TsisbpEntity[];

  @OneToMany(() => TsisuplEntity, (tsisuplEntity) => tsisuplEntity.codusu2)
  tsisupls: TsisuplEntity[];

  @OneToMany(() => TsisuplEntity, (tsisuplEntity) => tsisuplEntity.codususupl2)
  tsisupls2: TsisuplEntity[];

  @OneToMany(() => TsitdaEntity, (tsitdaEntity) => tsitdaEntity.codusu)
  tsitdas: TsitdaEntity[];

  @OneToMany(() => TsiterEntity, (tsiterEntity) => tsiterEntity.codusu)
  tsiters: TsiterEntity[];

  @OneToMany(() => TsitvpEntity, (tsitvpEntity) => tsitvpEntity.codusu2)
  tsitvps: TsitvpEntity[];

  @OneToMany(() => TsiuctEntity, (tsiuctEntity) => tsiuctEntity.codusu2)
  tsiucts: TsiuctEntity[];

  @ManyToMany(() => TsicfaEntity, (tsicfaEntity) => tsicfaEntity.tsiusus)
  tsicfas: TsicfaEntity[];

  @OneToMany(() => TsiufiEntity, (tsiufiEntity) => tsiufiEntity.codusu2)
  tsiufis: TsiufiEntity[];

  @ManyToOne(() => TgfeqfEntity, (tgfeqfEntity) => tgfeqfEntity.tsiusus)
  @JoinColumn([{ name: 'CODEQUIP', referencedColumnName: 'codequip' }])
  codequip: TgfeqfEntity;

  @ManyToOne(() => TgfcttEntity, (tgfcttEntity) => tgfcttEntity.tsiusus)
  @JoinColumn([
    { name: 'CODPARCPERFIL', referencedColumnName: 'codparc' },
    { name: 'CODCONTATOPERFIL', referencedColumnName: 'codcontato' },
  ])
  tgfctt: TgfcttEntity;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tsiusus)
  @JoinColumn([{ name: 'CODCTABCOINT', referencedColumnName: 'codctabcoint' }])
  codctabcoint: TsictaEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tsiusus)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TimcorEntity, (timcorEntity) => timcorEntity.tsiusus)
  @JoinColumn([{ name: 'CORCODIGO', referencedColumnName: 'corcodigo' }])
  corcodigo: TimcorEntity;

  @ManyToOne(() => TsigruEntity, (tsigruEntity) => tsigruEntity.tsiusus)
  @JoinColumn([{ name: 'CODGRUPO', referencedColumnName: 'codgrupo' }])
  codgrupo: TsigruEntity;

  @ManyToOne(() => TfpcghEntity, (tfpcghEntity) => tfpcghEntity.tsiusus)
  @JoinColumn([{ name: 'CODCARGAACESSO', referencedColumnName: 'codcargahor' }])
  codcargaacesso: TfpcghEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tsiusus)
  @JoinColumn([{ name: 'AD_CODVEICULO', referencedColumnName: 'codveiculo' }])
  adCodveiculo: TgfveiEntity;

  @ManyToOne(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.tsiusus)
  @JoinColumn([{ name: 'CODVEND', referencedColumnName: 'codvend' }])
  codvend: TgfvenEntity;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tsiusus2)
  @JoinColumn([{ name: 'CODCTABCOINT2', referencedColumnName: 'codctabcoint' }])
  codctabcoint2: TsictaEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tsiusus)
  @JoinColumn([{ name: 'CODCENCUSPAD', referencedColumnName: 'codcencus' }])
  codcencuspad: TsicusEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tsiusus)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tsiusus)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @OneToMany(() => TsiusubkEntity, (tsiusubkEntity) => tsiusubkEntity.codusu2)
  tsiusubks: TsiusubkEntity[];

  @OneToMany(() => TslcluEntity, (tslcluEntity) => tslcluEntity.codusu2)
  tslclus: TslcluEntity[];

  @OneToMany(() => TsshisEntity, (tsshisEntity) => tsshisEntity.codusucad)
  tsshis: TsshisEntity[];

  @OneToMany(() => TsspacEntity, (tsspacEntity) => tsspacEntity.codusucad)
  tsspacs: TsspacEntity[];

  @OneToMany(() => TsspacEntity, (tsspacEntity) => tsspacEntity.codusualter)
  tsspacs2: TsspacEntity[];

  @OneToMany(() => TtkprocEntity, (ttkprocEntity) => ttkprocEntity.codusu)
  ttkprocs: TtkprocEntity[];
}
