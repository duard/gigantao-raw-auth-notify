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
import { GfrcategcomisEntity } from './gFRCATEGCOMIS.entity';
import { GfrfindespesaEntity } from './gFRFINDESPESA.entity';
import { GfrfinreceitasEntity } from './gFRFINRECEITAS.entity';
import { GfrguiEntity } from './gFRGUI.entity';
import { GfrmetasunidEntity } from './gFRMETASUNID.entity';
import { TcacprEntity } from './tCACPR.entity';
import { TcbplaEntity } from './tCBPLA.entity';
import { TcecabEntity } from './tCECAB.entity';
import { TcecabHisEntity } from './tCECAB_HIS.entity';
import { TceiteEntity } from './tCEITE.entity';
import { TceiteHisEntity } from './tCEITE_HIS.entity';
import { TcsconEntity } from './tCSCON.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TgangrEntity } from './tGANGR.entity';
import { TgapatEntity } from './tGAPAT.entity';
import { TgariEntity } from './tGARI.entity';
import { TgatriEntity } from './tGATRI.entity';
import { TgfaaxnEntity } from './tGFAAXN.entity';
import { TgfaaxnmEntity } from './tGFAAXNM.entity';
import { TgfacoEntity } from './tGFACO.entity';
import { TgfacprbEntity } from './tGFACPRB.entity';
import { Tgfadrcstr0000Entity } from './tGFADRCSTR0000.entity';
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
import { Tgfadrcstr1999Entity } from './tGFADRCSTR1999.entity';
import { Tgfadrcstr9000Entity } from './tGFADRCSTR9000.entity';
import { Tgfadrcstr9999Entity } from './tGFADRCSTR9999.entity';
import { TgfageEntity } from './tGFAGE.entity';
import { TgfajaEntity } from './tGFAJA.entity';
import { TgfajdEntity } from './tGFAJD.entity';
import { TgfarcstEntity } from './tGFARCST.entity';
import { TgfarmEntity } from './tGFARM.entity';
import { Tgfb460Entity } from './tGFB460.entity';
import { TgfbenEntity } from './tGFBEN.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfcanEntity } from './tGFCAN.entity';
import { TgfcasEntity } from './tGFCAS.entity';
import { Tgfcat42Entity } from './tGFCAT42.entity';
import { TgfccaiEntity } from './tGFCCAI.entity';
import { TgfcfrastEntity } from './tGFCFRAST.entity';
import { TgfcgmEntity } from './tGFCGM.entity';
import { TgfcmpEntity } from './tGFCMP.entity';
import { TgfcnfEntity } from './tGFCNF.entity';
import { TgfcotEntity } from './tGFCOT.entity';
import { TgfcraEntity } from './tGFCRA.entity';
import { TgfcredEntity } from './tGFCRED.entity';
import { TgfcrestcomstEntity } from './tGFCRESTCOMST.entity';
import { TgfcriEntity } from './tGFCRI.entity';
import { TgfctbEntity } from './tGFCTB.entity';
import { TgfcteEntity } from './tGFCTE.entity';
import { TgfctentEntity } from './tGFCTENT.entity';
import { TgfcusEntity } from './tGFCUS.entity';
import { TgfdctfEntity } from './tGFDCTF.entity';
import { Tgfdctfr10Entity } from './tGFDCTFR10.entity';
import { Tgfdctfr11Entity } from './tGFDCTFR11.entity';
import { Tgfdctfr12Entity } from './tGFDCTFR12.entity';
import { Tgfdctfr14Entity } from './tGFDCTFR14.entity';
import { TgfdfoEntity } from './tGFDFO.entity';
import { TgfdimescEntity } from './tGFDIMESC.entity';
import { TgfdirfEntity } from './tGFDIRF.entity';
import { TgfdirfbasebpfdecEntity } from './tGFDIRFBASEBPFDEC.entity';
import { TgfdirfbasebpjdecEntity } from './tGFDIRFBASEBPJDEC.entity';
import { TgfdirfbpfdecEntity } from './tGFDIRFBPFDEC.entity';
import { TgfdirfbpjdecEntity } from './tGFDIRFBPJDEC.entity';
import { TgfdirfdecpjEntity } from './tGFDIRFDECPJ.entity';
import { TgfdirfidrecEntity } from './tGFDIRFIDREC.entity';
import { TgfdirfpfrtirfEntity } from './tGFDIRFPFRTIRF.entity';
import { TgfdirfpfrtpoEntity } from './tGFDIRFPFRTPO.entity';
import { TgfdirfpfrtrtEntity } from './tGFDIRFPFRTRT.entity';
import { TgfdirfpjrtirfEntity } from './tGFDIRFPJRTIRF.entity';
import { TgfdirfpjrtrtEntity } from './tGFDIRFPJRTRT.entity';
import { TgfdirfrespoEntity } from './tGFDIRFRESPO.entity';
import { TgfdmgEntity } from './tGFDMG.entity';
import { TgfdrcstEntity } from './tGFDRCST.entity';
import { TgfdvcabEntity } from './tGFDVCAB.entity';
import { Tgfe340Entity } from './tGFE340.entity';
import { Tgfe350Entity } from './tGFE350.entity';
import { TgfefdcerrEntity } from './tGFEFDCERR.entity';
import { Tgfefdf1250Entity } from './tGFEFDF1250.entity';
import { Tgfefdf1255Entity } from './tGFEFDF1255.entity';
import { Tgfefdfc180Entity } from './tGFEFDFC180.entity';
import { Tgfefdfc181Entity } from './tGFEFDFC181.entity';
import { Tgfefdfc185Entity } from './tGFEFDFC185.entity';
import { Tgfefdfc186Entity } from './tGFEFDFC186.entity';
import { Tgfefdfh030Entity } from './tGFEFDFH030.entity';
import { Tgfefdfk260Entity } from './tGFEFDFK260.entity';
import { Tgfefdfk265Entity } from './tGFEFDFK265.entity';
import { TgfemmEntity } from './tGFEMM.entity';
import { TgfempsnEntity } from './tGFEMPSN.entity';
import { TgfenaEntity } from './tGFENA.entity';
import { TgfepiEntity } from './tGFEPI.entity';
import { TgfestEntity } from './tGFEST.entity';
import { TgffadEntity } from './tGFFAD.entity';
import { TgffdaEntity } from './tGFFDA.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TgfforEntity } from './tGFFOR.entity';
import { TgfgemEntity } from './tGFGEM.entity';
import { TgfgiastEntity } from './tGFGIAST.entity';
import { TgfgimEntity } from './tGFGIM.entity';
import { TgfhbcEntity } from './tGFHBC.entity';
import { TgfiaaEntity } from './tGFIAA.entity';
import { TgfiffEntity } from './tGFIFF.entity';
import { TgfinuEntity } from './tGFINU.entity';
import { TgfinujEntity } from './tGFINUJ.entity';
import { TgfiteEntity } from './tGFITE.entity';
import { TgfitsEntity } from './tGFITS.entity';
import { TgflcdprtercEntity } from './tGFLCDPRTERC.entity';
import { TgflitEntity } from './tGFLIT.entity';
import { TgflocEntity } from './tGFLOC.entity';
import { TgflotEntity } from './tGFLOT.entity';
import { TgfmepiEntity } from './tGFMEPI.entity';
import { TgfmfciEntity } from './tGFMFCI.entity';
import { TgfmixEntity } from './tGFMIX.entity';
import { TgfmmsEntity } from './tGFMMS.entity';
import { TgfmonEntity } from './tGFMON.entity';
import { TgfnatpcempEntity } from './tGFNATPCEMP.entity';
import { TgfnfentEntity } from './tGFNFENT.entity';
import { TgfntaEntity } from './tGFNTA.entity';
import { TgfocrEntity } from './tGFOCR.entity';
import { TgfodpEntity } from './tGFODP.entity';
import { TgfoirEntity } from './tGFOIR.entity';
import { TgfordEntity } from './tGFORD.entity';
import { TgfpaemEntity } from './tGFPAEM.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfpcaEntity } from './tGFPCA.entity';
import { TgfpdvEntity } from './tGFPDV.entity';
import { TgfpemEntity } from './tGFPEM.entity';
import { TgfpmpeEntity } from './tGFPMPE.entity';
import { TgfpptEntity } from './tGFPPT.entity';
import { TgfprjEntity } from './tGFPRJ.entity';
import { TgfqprEntity } from './tGFQPR.entity';
import { TgfrdfEntity } from './tGFRDF.entity';
import { TgfreclasEntity } from './tGFRECLAS.entity';
import { TgfrgmEntity } from './tGFRGM.entity';
import { TgfrntEntity } from './tGFRNT.entity';
import { TgfrstEntity } from './tGFRST.entity';
import { TgfscrEntity } from './tGFSCR.entity';
import { TgfsolEntity } from './tGFSOL.entity';
import { TgfstmvEntity } from './tGFSTMV.entity';
import { TgfstmvproEntity } from './tGFSTMVPRO.entity';
import { TgftaaEntity } from './tGFTAA.entity';
import { TgftnaEntity } from './tGFTNA.entity';
import { TgftnfrastEntity } from './tGFTNFRAST.entity';
import { TgftppEntity } from './tGFTPP.entity';
import { TgftrcEntity } from './tGFTRC.entity';
import { TgfvceEntity } from './tGFVCE.entity';
import { TgfvenEntity } from './tGFVEN.entity';
import { TgmaiEntity } from './tGMAI.entity';
import { TgwcteEntity } from './tGWCTE.entity';
import { TgwendEntity } from './tGWEND.entity';
import { TgwenpEntity } from './tGWENP.entity';
import { TgwepaEntity } from './tGWEPA.entity';
import { TgweplEntity } from './tGWEPL.entity';
import { TgwestEntity } from './tGWEST.entity';
import { TgwitrEntity } from './tGWITR.entity';
import { TgwittEntity } from './tGWITT.entity';
import { TgwivrEntity } from './tGWIVR.entity';
import { TgwivtEntity } from './tGWIVT.entity';
import { TgwlceEntity } from './tGWLCE.entity';
import { TgwrplEntity } from './tGWRPL.entity';
import { TripempEntity } from './tRIPEMP.entity';
import { TsictaEntity } from './tSICTA.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TsifatEntity } from './tSIFAT.entity';
import { TsimemEntity } from './tSIMEM.entity';
import { TsiobcEntity } from './tSIOBC.entity';
import { TsirfeEntity } from './tSIRFE.entity';
import { TsismtpEntity } from './tSISMTP.entity';

@Index('PK_TGFEMP', ['codemp'], { unique: true })
@Index('TGFEMP_I02', ['codempmatrizefd'], {})
@Entity('TGFEMP', { schema: 'SANKHYA' })
export class TgfempEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('char', { name: 'EMITEEXPED', length: 1, default: () => "'N'" })
  emiteexped: string;

  @Column('char', { name: 'IMPEXPED', nullable: true, length: 32 })
  impexped: string | null;

  @Column('int', { name: 'ULTPAGLIVSAIDA', nullable: true })
  ultpaglivsaida: number | null;

  @Column('int', { name: 'ULTPAGLIVENTRAD', nullable: true })
  ultpagliventrad: number | null;

  @Column('int', { name: 'ULTAUTORPAG', nullable: true })
  ultautorpag: number | null;

  @Column('int', { name: 'ULTDUPL', nullable: true })
  ultdupl: number | null;

  @Column('smallint', { name: 'ULTPAGLIVISS', nullable: true })
  ultpagliviss: number | null;

  @Column('smallint', { name: 'MODDUPL', nullable: true })
  moddupl: number | null;

  @Column('smallint', { name: 'MODEXPED', nullable: true })
  modexped: number | null;

  @Column('char', { name: 'SALDOLIVQUINZ', length: 1, default: () => "'M'" })
  saldolivquinz: string;

  @Column('char', { name: 'TRABCOMIPI', length: 1, default: () => "'S'" })
  trabcomipi: string;

  @Column('char', { name: 'TIPOIMPRESSORA', nullable: true, length: 1 })
  tipoimpressora: string | null;

  @Column('smallint', { name: 'EMPSOMA', nullable: true })
  empsoma: number | null;

  @Column('float', { name: 'PARTICMETA', nullable: true, precision: 53 })
  particmeta: number | null;

  @Column('char', { name: 'PROJONLINE', length: 1, default: () => "'S'" })
  projonline: string;

  @Column('char', { name: 'PERPROJ', nullable: true, length: 1 })
  perproj: string | null;

  @Column('int', { name: 'ULTPAGLIVIPI', nullable: true })
  ultpaglivipi: number | null;

  @Column('int', { name: 'ULTPAGLIVICMS', nullable: true })
  ultpaglivicms: number | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('float', { name: 'PERCCUSVAR', nullable: true, precision: 53 })
  perccusvar: number | null;

  @Column('int', { name: 'CODCENCUSDESP', nullable: true })
  codcencusdesp: number | null;

  @Column('char', { name: 'SALDOLIVQUINZIPI', length: 1, default: () => "'M'" })
  saldolivquinzipi: string;

  @Column('char', { name: 'CALCIRRF', length: 1, default: () => "'N'" })
  calcirrf: string;

  @Column('char', { name: 'CALCISS', length: 1, default: () => "'N'" })
  calciss: string;

  @Column('money', { name: 'PERCCSL', nullable: true })
  perccsl: number | null;

  @Column('float', { name: 'PERCMARGEM', precision: 53, default: () => '(0)' })
  percmargem: number;

  @Column('float', {
    name: 'PERCCOFINS',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  perccofins: number | null;

  @Column('float', {
    name: 'PERCPIS',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  percpis: number | null;

  @Column('int', { name: 'ULTPAGCIAPMODC', nullable: true })
  ultpagciapmodc: number | null;

  @Column('char', { name: 'CALCFUNRURAL', length: 1, default: () => "'N'" })
  calcfunrural: string;

  @Column('char', { name: 'GERARLIVROS', length: 1, default: () => "'S'" })
  gerarlivros: string;

  @Column('char', { name: 'CALCICMS', nullable: true, length: 1 })
  calcicms: string | null;

  @Column('char', { name: 'IPIINCICMS', length: 1, default: () => "'S'" })
  ipiincicms: string;

  @Column('char', { name: 'RECMINTARE', length: 1, default: () => "'N'" })
  recmintare: string;

  @Column('char', { name: 'CODTRIB20RED', length: 1, default: () => "'O'" })
  codtrib20Red: string;

  @Column('char', { name: 'CODTRIB40ISENT', length: 1, default: () => "'I'" })
  codtrib40Isent: string;

  @Column('char', { name: 'CODTRIB41NAOTRIB', length: 1, default: () => "'O'" })
  codtrib41Naotrib: string;

  @Column('char', { name: 'CODTRIB50SUSP', length: 1, default: () => "'O'" })
  codtrib50Susp: string;

  @Column('char', { name: 'CODTRIB51DIF', length: 1, default: () => "'O'" })
  codtrib51Dif: string;

  @Column('char', { name: 'CODTRIB60STANT', length: 1, default: () => "'O'" })
  codtrib60Stant: string;

  @Column('char', { name: 'CODTRIB70REDST', length: 1, default: () => "'O'" })
  codtrib70Redst: string;

  @Column('char', { name: 'CODTRIB90OUT', length: 1, default: () => "'O'" })
  codtrib90Out: string;

  @Column('char', { name: 'IPINAOINCID', length: 1, default: () => "'I'" })
  ipinaoincid: string;

  @Column('char', { name: 'STINCLUSA', length: 1, default: () => "'O'" })
  stinclusa: string;

  @Column('float', { name: 'PERCCFSERVICO', nullable: true, precision: 53 })
  perccfservico: number | null;

  @Column('float', { name: 'PERCCFFAB', nullable: true, precision: 53 })
  perccffab: number | null;

  @Column('float', { name: 'PERCCFOUTROS', nullable: true, precision: 53 })
  perccfoutros: number | null;

  @Column('char', { name: 'NOMECONTADOR', nullable: true, length: 39 })
  nomecontador: string | null;

  @Column('char', { name: 'CPFCONTADOR', nullable: true, length: 11 })
  cpfcontador: string | null;

  @Column('char', { name: 'UFCRCCONTADOR', nullable: true, length: 2 })
  ufcrccontador: string | null;

  @Column('char', { name: 'CRCCONTADOR', nullable: true, length: 11 })
  crccontador: string | null;

  @Column('varchar', { name: 'TELCONTADOR', nullable: true, length: 13 })
  telcontador: string | null;

  @Column('char', { name: 'EMAILCONTADOR', nullable: true, length: 50 })
  emailcontador: string | null;

  @Column('char', { name: 'ALTCONTADOR', length: 1, default: () => "'N'" })
  altcontador: string;

  @Column('char', { name: 'CREDPIS', length: 1, default: () => "'S'" })
  credpis: string;

  @Column('char', { name: 'CREDCOFINS', length: 1, default: () => "'S'" })
  credcofins: string;

  @Column('char', { name: 'CODTRIB30', length: 1, default: () => "'O'" })
  codtrib30: string;

  @Column('char', {
    name: 'LIVRO1PARA1TGFITE',
    length: 1,
    default: () => "'N'",
  })
  livro1Para1Tgfite: string;

  @Column('char', { name: 'GERAGNRE', length: 1, default: () => "'N'" })
  geragnre: string;

  @Column('char', { name: 'TEMPIS', nullable: true, length: 1 })
  tempis: string | null;

  @Column('char', { name: 'TEMCOFINS', nullable: true, length: 1 })
  temcofins: string | null;

  @Column('char', { name: 'TEMCSSL', nullable: true, length: 1 })
  temcssl: string | null;

  @Column('smallint', { name: 'CSTIPIENT', nullable: true })
  cstipient: number | null;

  @Column('smallint', { name: 'CSTIPISAI', nullable: true })
  cstipisai: number | null;

  @Column('char', { name: 'NFE', nullable: true, length: 1 })
  nfe: string | null;

  @Column('int', { name: 'VERSAONFE', nullable: true })
  versaonfe: number | null;

  @Column('char', { name: 'TIPODANFE', nullable: true, length: 1 })
  tipodanfe: string | null;

  @Column('char', { name: 'UTILIZAWMS', length: 1, default: () => "'N'" })
  utilizawms: string;

  @Column('char', { name: 'LOGODANFE', nullable: true, length: 255 })
  logodanfe: string | null;

  @Column('char', { name: 'LAYOUTDANFE', nullable: true, length: 1 })
  layoutdanfe: string | null;

  @Column('char', {
    name: 'REG54SEQ997ST',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  reg54Seq997St: string | null;

  @Column('char', { name: 'SERIEACOMPCF', nullable: true, length: 3 })
  serieacompcf: string | null;

  @Column('char', { name: 'PERFILEFD', length: 1, default: () => "'A'" })
  perfilefd: string;

  @Column('int', { name: 'TIPOATIVIDADE', default: () => '(1)' })
  tipoatividade: number;

  @Column('varchar', {
    name: 'VLRLIQITEMNFE',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  vlrliqitemnfe: string | null;

  @Column('smallint', { name: 'TPLIGACAO', nullable: true })
  tpligacao: number | null;

  @Column('varchar', { name: 'CODGRUPOTENSAO', nullable: true, length: 2 })
  codgrupotensao: string | null;

  @Column('smallint', { name: 'TPASSINANTE', nullable: true })
  tpassinante: number | null;

  @Column('varchar', { name: 'TPLIGACAOINF', length: 1, default: () => "'N'" })
  tpligacaoinf: string;

  @Column('varchar', {
    name: 'TPASSINANTEINF',
    length: 1,
    default: () => "'N'",
  })
  tpassinanteinf: string;

  @Column('int', { name: 'COPIASDANFE', default: () => '(1)' })
  copiasdanfe: number;

  @Column('char', { name: 'COMPIPI', nullable: true, length: 1 })
  compipi: string | null;

  @Column('char', { name: 'COMPIPISEPICM', length: 1, default: () => "'N'" })
  compipisepicm: string;

  @Column('char', { name: 'TIRASERVLRCONTAB', length: 1, default: () => "'N'" })
  tiraservlrcontab: string;

  @Column('char', { name: 'GRAVAROBSNOTA', length: 1, default: () => "'N'" })
  gravarobsnota: string;

  @Column('char', { name: 'GRAVAROBSPADRAO', length: 1, default: () => "'N'" })
  gravarobspadrao: string;

  @Column('char', { name: 'GERNOTAENT', length: 1, default: () => "'N'" })
  gernotaent: string;

  @Column('char', { name: 'GRAVARSERIENOTA', length: 1, default: () => "'N'" })
  gravarserienota: string;

  @Column('char', { name: 'TRATARTRIBUT', length: 1, default: () => "'N'" })
  tratartribut: string;

  @Column('char', { name: 'TRATARDIFPARC', length: 1, default: () => "'N'" })
  tratardifparc: string;

  @Column('char', { name: 'USATRIBUTITENS', length: 1, default: () => "'N'" })
  usatributitens: string;

  @Column('char', {
    name: 'FRETESEPCONSTRANSP',
    length: 1,
    default: () => "'N'",
  })
  fretesepconstransp: string;

  @Column('char', { name: 'FRETESEPSEMPRE', length: 1, default: () => "'N'" })
  fretesepsempre: string;

  @Column('char', { name: 'CONSOUTROSIMP', length: 1, default: () => "'N'" })
  consoutrosimp: string;

  @Column('char', { name: 'GERARPRODLIVENT', length: 1, default: () => "'N'" })
  gerarprodlivent: string;

  @Column('char', { name: 'GERARPRODORIGKIT', length: 1, default: () => "'N'" })
  gerarprodorigkit: string;

  @Column('char', {
    name: 'TRATARTRIBUTDEFEMP',
    length: 1,
    default: () => "'N'",
  })
  tratartributdefemp: string;

  @Column('float', { name: 'MAXCREDINDENIZ', nullable: true, precision: 53 })
  maxcredindeniz: number | null;

  @Column('float', { name: 'MAXDEBINDENIZ', nullable: true, precision: 53 })
  maxdebindeniz: number | null;

  @Column('varchar', { name: 'FLEX', length: 1, default: () => "'S'" })
  flex: string;

  @Column('varchar', { name: 'TEMREAICMS', length: 1, default: () => "'N'" })
  temreaicms: string;

  @Column('varchar', { name: 'PRODEPE', length: 1, default: () => "'N'" })
  prodepe: string;

  @Column('datetime', { name: 'DTCERTIFNFEFIM', nullable: true })
  dtcertifnfefim: Date | null;

  @Column('datetime', { name: 'DTCERTIFNFEINI', nullable: true })
  dtcertifnfeini: Date | null;

  @Column('varchar', { name: 'NFSE', nullable: true, length: 1 })
  nfse: string | null;

  @Column('varchar', { name: 'INCENTCULT', nullable: true, length: 1 })
  incentcult: string | null;

  @Column('varchar', { name: 'REGIMEESPTRIBISS', nullable: true, length: 1 })
  regimeesptribiss: string | null;

  @Column('float', { name: 'PESOLIM01', nullable: true, precision: 53 })
  pesolim01: number | null;

  @Column('float', { name: 'PERCDESC01', nullable: true, precision: 53 })
  percdesc01: number | null;

  @Column('float', { name: 'PESOLIM02', nullable: true, precision: 53 })
  pesolim02: number | null;

  @Column('float', { name: 'PERCDESC02', nullable: true, precision: 53 })
  percdesc02: number | null;

  @Column('varchar', { name: 'ICMSGERENCIA', length: 1, default: () => "'P'" })
  icmsgerencia: string;

  @Column('varchar', {
    name: 'CONTINGENCIANFE',
    length: 1,
    default: () => "'E'",
  })
  contingencianfe: string;

  @Column('smallint', { name: 'CODEMPOC', nullable: true })
  codempoc: number | null;

  @Column('varchar', { name: 'ARQMODBOLETO', nullable: true, length: 100 })
  arqmodboleto: string | null;

  @Column('smallint', { name: 'CODTIPOPERACOMP', nullable: true })
  codtipoperacomp: number | null;

  @Column('int', { name: 'CAPDIAPRODM3', default: () => '(0)' })
  capdiaprodm3: number;

  @Column('int', { name: 'COPIASDANFECONTING', default: () => '(1)' })
  copiasdanfeconting: number;

  @Column('varchar', { name: 'UTILORDCORTE', length: 1, default: () => "'N'" })
  utilordcorte: string;

  @Column('smallint', { name: 'MAXNOTASLOTENFE', nullable: true })
  maxnotaslotenfe: number | null;

  @Column('char', { name: 'PROEMPREGO', length: 1, default: () => "'N'" })
  proemprego: string;

  @Column('float', { name: 'PERCPROEMP', precision: 53, default: () => '(0)' })
  percproemp: number;

  @Column('float', { name: 'PERCFUNEDU', precision: 53, default: () => '(0)' })
  percfunedu: number;

  @Column('float', {
    name: 'ALIQICMSOPIMP',
    precision: 53,
    default: () => '(0)',
  })
  aliqicmsopimp: number;

  @Column('text', { name: 'COMPLITEMNOTA', nullable: true })
  complitemnota: string | null;

  @Column('datetime', { name: 'DTINICIOKARDEX', nullable: true })
  dtiniciokardex: Date | null;

  @Column('varchar', {
    name: 'NATPESSOAJURIDICA',
    length: 2,
    default: () => "'00'",
  })
  natpessoajuridica: string;

  @Column('int', { name: 'TIPOATIVIDADEPISCOFINS', default: () => '(9)' })
  tipoatividadepiscofins: number;

  @Column('smallint', { name: 'CODEMPMATRIZEFD', nullable: true })
  codempmatrizefd: number | null;

  @Column('int', { name: 'INDESCRIT', default: () => '(2)' })
  indescrit: number;

  @Column('varchar', { name: 'TIPOENVIONFE', length: 1, default: () => "'A'" })
  tipoenvionfe: string;

  @Column('char', { name: 'VALCST', length: 1, default: () => "'N'" })
  valcst: string;

  @Column('smallint', { name: 'CSTVAL', nullable: true })
  cstval: number | null;

  @Column('int', { name: 'NOTAENTAJUSTEST', nullable: true })
  notaentajustest: number | null;

  @Column('int', { name: 'NOTASAIAJUSTEST', nullable: true })
  notasaiajustest: number | null;

  @Column('char', { name: 'CONSVLRLIQNFSE', length: 1, default: () => "'N'" })
  consvlrliqnfse: string;

  @Column('char', { name: 'MARCANOTRPS', length: 1, default: () => "'N'" })
  marcanotrps: string;

  @Column('varchar', { name: 'CLASCONS_ENERG', nullable: true, length: 2 })
  clasconsEnerg: string | null;

  @Column('varchar', { name: 'CLASCONS_AGUA', nullable: true, length: 2 })
  clasconsAgua: string | null;

  @Column('varchar', { name: 'CLASCONS_GAS', nullable: true, length: 2 })
  clasconsGas: string | null;

  @Column('char', {
    name: 'TPLIGACAOINF_AGUA',
    length: 1,
    default: () => "'N'",
  })
  tpligacaoinfAgua: string;

  @Column('char', { name: 'TPLIGACAOINF_GAS', length: 1, default: () => "'N'" })
  tpligacaoinfGas: string;

  @Column('char', {
    name: 'AGRUPASERVFAT',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  agrupaservfat: string | null;

  @Column('varchar', { name: 'USUARIONFSE', nullable: true, length: 60 })
  usuarionfse: string | null;

  @Column('varchar', { name: 'SENHANFSE', nullable: true, length: 60 })
  senhanfse: string | null;

  @Column('float', { name: 'PERCCVARSEMST', nullable: true, precision: 53 })
  perccvarsemst: number | null;

  @Column('smallint', { name: 'ESCRITISS', default: () => '(9)' })
  escritiss: number;

  @Column('smallint', { name: 'ESCRITICMS', default: () => '(9)' })
  escriticms: number;

  @Column('smallint', { name: 'ESCRITCONTAB', default: () => '(9)' })
  escritcontab: number;

  @Column('smallint', { name: 'REGIMPDOCFIS', default: () => '(1)' })
  regimpdocfis: number;

  @Column('smallint', { name: 'REGUTIDOCFIS', default: () => '(1)' })
  regutidocfis: number;

  @Column('smallint', { name: 'LIVMOVCOMB', default: () => '(1)' })
  livmovcomb: number;

  @Column('int', { name: 'REGVEIC', default: () => '(1)' })
  regveic: number;

  @Column('smallint', { name: 'REGINVAVULSO', default: () => '(1)' })
  reginvavulso: number;

  @Column('smallint', { name: 'REGINVANUAL', default: () => '(1)' })
  reginvanual: number;

  @Column('smallint', { name: 'ISSSUBSTITUIDO', default: () => '(1)' })
  isssubstituido: number;

  @Column('int', { name: 'ICMSSUBSTITUTO', default: () => '(1)' })
  icmssubstituto: number;

  @Column('smallint', { name: 'ANTTRIBICMSENT', default: () => '(1)' })
  anttribicmsent: number;

  @Column('varchar', { name: 'CODQUALCONT', nullable: true, length: 3 })
  codqualcont: string | null;

  @Column('varchar', { name: 'CODBFICMS', nullable: true, length: 5 })
  codbficms: string | null;

  @Column('varchar', { name: 'CODBFISS', nullable: true, length: 5 })
  codbfiss: string | null;

  @Column('varchar', {
    name: 'NOMEIMPETQWMSAPOSFAT',
    nullable: true,
    length: 250,
  })
  nomeimpetqwmsaposfat: string | null;

  @Column('int', { name: 'CODMODETQWMSAPOSFAT', nullable: true })
  codmodetqwmsaposfat: number | null;

  @Column('char', { name: 'CUSTOEXPLOD', length: 1, default: () => "'N'" })
  custoexplod: string;

  @Column('char', { name: 'FRAGMENTAESTWMS', length: 1, default: () => "'N'" })
  fragmentaestwms: string;

  @Column('smallint', { name: 'TOPENVWMSAGRUP', nullable: true })
  topenvwmsagrup: number | null;

  @Column('char', { name: 'ENTPENBALCAOWMS', length: 1, default: () => "'N'" })
  entpenbalcaowms: string;

  @Column('char', { name: 'CORTEFALTAWMS', length: 1, default: () => "'N'" })
  cortefaltawms: string;

  @Column('char', { name: 'REABCORRECAOWMS', length: 1, default: () => "'N'" })
  reabcorrecaowms: string;

  @Column('varchar', { name: 'SERIEDEVWMS', nullable: true, length: 3 })
  seriedevwms: string | null;

  @Column('char', { name: 'TIPOCORTEWMS', nullable: true, length: 1 })
  tipocortewms: string | null;

  @Column('int', { name: 'TOPENTRADAWMS', nullable: true })
  topentradawms: number | null;

  @Column('int', { name: 'TOPDEVOLUCAOWMS', nullable: true })
  topdevolucaowms: number | null;

  @Column('char', { name: 'TRATOCWMS', length: 1, default: () => "'N'" })
  tratocwms: string;

  @Column('char', { name: 'INTEGRAWMSPROD', length: 1, default: () => "'N'" })
  integrawmsprod: string;

  @Column('char', { name: 'USAMOVVERTWMS', length: 1, default: () => "'N'" })
  usamovvertwms: string;

  @Column('char', { name: 'WMSUSAREGVOLFAT', length: 1, default: () => "'N'" })
  wmsusaregvolfat: string;

  @Column('char', { name: 'CONSENTRPENDWMS', length: 1, default: () => "'S'" })
  consentrpendwms: string;

  @Column('varchar', { name: 'FRASENFSE', nullable: true, length: 50 })
  frasenfse: string | null;

  @Column('smallint', { name: 'INTEGCTE', default: () => '(0)' })
  integcte: number;

  @Column('char', { name: 'RASTRESTOQUE', length: 1, default: () => "'N'" })
  rastrestoque: string;

  @Column('char', { name: 'USACUSTOMEDIOMPS', length: 1, default: () => "'N'" })
  usacustomediomps: string;

  @Column('char', { name: 'USADTFABLOTNFE', length: 1, default: () => "'S'" })
  usadtfablotnfe: string;

  @Column('char', { name: 'USADTVALLOTNFE', length: 1, default: () => "'S'" })
  usadtvallotnfe: string;

  @Column('char', { name: 'AMBCTE', length: 1, default: () => "'N'" })
  ambcte: string;

  @Column('char', { name: 'IMPETIQSEPOC', length: 1, default: () => "'N'" })
  impetiqsepoc: string;

  @Column('char', { name: 'IMPETIQVOLCONF', length: 1, default: () => "'N'" })
  impetiqvolconf: string;

  @Column('int', { name: 'ENDECKTINDEF', nullable: true })
  endecktindef: number | null;

  @Column('int', { name: 'ENDEMOVINDEF', nullable: true })
  endemovindef: number | null;

  @Column('smallint', { name: 'IMPETQVOL', default: () => '(0)' })
  impetqvol: number;

  @Column('smallint', { name: 'PRZREGCANNOTA', default: () => '(24)' })
  przregcannota: number;

  @Column('smallint', { name: 'PRZTOLCANNOTA', default: () => '(24)' })
  prztolcannota: number;

  @Column('char', { name: 'TEMDENUESPONT', length: 1, default: () => "'N'" })
  temdenuespont: string;

  @Column('char', { name: 'VALSITCADSEFAZ', length: 1, default: () => "'N'" })
  valsitcadsefaz: string;

  @Column('char', { name: 'TPAMBMDFE', length: 1, default: () => "'0'" })
  tpambmdfe: string;

  @Column('varchar', { name: 'TOKENNFCE', nullable: true, length: 50 })
  tokennfce: string | null;

  @Column('char', { name: 'VLRLIQITEMNFCE', length: 1, default: () => "'N'" })
  vlrliqitemnfce: string;

  @Column('int', { name: 'SEQTOKENNFCE', default: () => '(0)' })
  seqtokennfce: number;

  @Column('smallint', { name: 'CODMETA', nullable: true })
  codmeta: number | null;

  @Column('float', { name: 'MARGSEGPCP', nullable: true, precision: 53 })
  margsegpcp: number | null;

  @Column('smallint', { name: 'HORAINICIAL', default: () => '(6)' })
  horainicial: number;

  @Column('smallint', { name: 'HORAFINAL', default: () => '(23)' })
  horafinal: number;

  @Column('int', { name: 'INTERVALO', default: () => '(15)' })
  intervalo: number;

  @Column('smallint', { name: 'QTDLIMITEMES', default: () => '(180)' })
  qtdlimitemes: number;

  @Column('char', { name: 'VALIDACPFCNPJ', length: 1, default: () => "'N'" })
  validacpfcnpj: string;

  @Column('int', {
    name: 'CORAGENDADO',
    nullable: true,
    default: () => '(6720729)',
  })
  coragendado: number | null;

  @Column('int', {
    name: 'CORENCAIXADO',
    nullable: true,
    default: () => '(14729792)',
  })
  corencaixado: number | null;

  @Column('int', {
    name: 'CORFIXADO',
    nullable: true,
    default: () => '(10987389)',
  })
  corfixado: number | null;

  @Column('int', {
    name: 'CORATENDIDO',
    nullable: true,
    default: () => '(5025874)',
  })
  coratendido: number | null;

  @Column('int', {
    name: 'CORBLOQUEADO',
    nullable: true,
    default: () => '(14247526)',
  })
  corbloqueado: number | null;

  @Column('int', {
    name: 'CORFATURADO',
    nullable: true,
    default: () => '(2708090)',
  })
  corfaturado: number | null;

  @Column('char', {
    name: 'WMSUSAETIQPAL',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  wmsusaetiqpal: string | null;

  @Column('int', { name: 'NOTAENTAJUSTESTCONS', nullable: true })
  notaentajustestcons: number | null;

  @Column('int', { name: 'NOTASAIAJUSTESTCONS', nullable: true })
  notasaiajustestcons: number | null;

  @Column('int', { name: 'NOTAENTAJUSTESTDTER', nullable: true })
  notaentajustestdter: number | null;

  @Column('int', { name: 'NOTASAIAJUSTESTDTER', nullable: true })
  notasaiajustestdter: number | null;

  @Column('int', { name: 'NOTAENTAJUSTESTCTER', nullable: true })
  notaentajustestcter: number | null;

  @Column('int', { name: 'NOTASAIAJUSTESTCTER', nullable: true })
  notasaiajustestcter: number | null;

  @Column('char', { name: 'VALCSTSEMHIST', length: 1, default: () => "'N'" })
  valcstsemhist: string;

  @Column('char', { name: 'METCALCDIFICMS', length: 1, default: () => "'I'" })
  metcalcdificms: string;

  @Column('varchar', { name: 'JOBKEYNDD', nullable: true, length: 20 })
  jobkeyndd: string | null;

  @Column('char', { name: 'CONECTORNFSE', nullable: true, length: 1 })
  conectornfse: string | null;

  @Column('char', { name: 'TIPODACTE', nullable: true, length: 1 })
  tipodacte: string | null;

  @Column('char', { name: 'TPAMBCTE', nullable: true, length: 1 })
  tpambcte: string | null;

  @Column('smallint', { name: 'COPIASDACTE', nullable: true })
  copiasdacte: number | null;

  @Column('char', { name: 'TIPOENVIOCTE', nullable: true, length: 1 })
  tipoenviocte: string | null;

  @Column('char', { name: 'CONTINGENCIACTE', nullable: true, length: 1 })
  contingenciacte: string | null;

  @Column('char', {
    name: 'TIPICMSTOPENTSIMNAC',
    length: 1,
    default: () => "'N'",
  })
  tipicmstopentsimnac: string;

  @Column('char', { name: 'TIPTRANSMNFSE', length: 1, default: () => "'A'" })
  tiptransmnfse: string;

  @Column('smallint', { name: 'TOPENTDIFPESOWMS', nullable: true })
  topentdifpesowms: number | null;

  @Column('smallint', { name: 'TOPSAIDADIFPESOWMS', nullable: true })
  topsaidadifpesowms: number | null;

  @Column('varchar', { name: 'SERIETOPDIFMENOR', nullable: true, length: 3 })
  serietopdifmenor: string | null;

  @Column('varchar', { name: 'SERIETOPDIFMAIOR', nullable: true, length: 3 })
  serietopdifmaior: string | null;

  @Column('varchar', {
    name: 'INCENTFISCALISSQN',
    length: 1,
    default: () => "'N'",
  })
  incentfiscalissqn: string;

  @Column('smallint', { name: 'CODENQIPIENT', nullable: true })
  codenqipient: number | null;

  @Column('smallint', { name: 'CODENQIPISAI', nullable: true })
  codenqipisai: number | null;

  @Column('char', { name: 'ENVRESPCONTNFE', length: 1, default: () => "'N'" })
  envrespcontnfe: string;

  @Column('smallint', { name: 'CODTABALT', nullable: true })
  codtabalt: number | null;

  @Column('varchar', { name: 'CAMPOLIVRECONTNFE', nullable: true, length: 255 })
  campolivrecontnfe: string | null;

  @Column('varchar', { name: 'NUMREGESPDEVTROCA', nullable: true, length: 15 })
  numregespdevtroca: string | null;

  @Column('varchar', { name: 'UTILIZAMDE', nullable: true, length: 1 })
  utilizamde: string | null;

  @Column('varchar', { name: 'CODUSUNFSE', nullable: true, length: 200 })
  codusunfse: string | null;

  @Column('varchar', { name: 'CODCONTRINFSE', nullable: true, length: 200 })
  codcontrinfse: string | null;

  @Column('char', { name: 'USANOMECOMPLITEM', length: 1, default: () => "'N'" })
  usanomecomplitem: string;

  @Column('char', {
    name: 'SERNAOTRIBBASEISS',
    length: 1,
    default: () => "'N'",
  })
  sernaotribbaseiss: string;

  @Column('char', { name: 'TRIBPISCFJUROS', length: 1, default: () => "'N'" })
  tribpiscfjuros: string;

  @Column('char', { name: 'TRIBPISCFDESC', length: 1, default: () => "'N'" })
  tribpiscfdesc: string;

  @Column('varchar', { name: 'CODSTPISCFJUROS', nullable: true, length: 2 })
  codstpiscfjuros: string | null;

  @Column('varchar', { name: 'CODSTPISCFDESC', nullable: true, length: 2 })
  codstpiscfdesc: string | null;

  @Column('float', { name: 'ALIQPISJUROS', nullable: true, precision: 53 })
  aliqpisjuros: number | null;

  @Column('float', { name: 'ALIQPISDESC', nullable: true, precision: 53 })
  aliqpisdesc: number | null;

  @Column('float', { name: 'ALIQCFJUROS', nullable: true, precision: 53 })
  aliqcfjuros: number | null;

  @Column('float', { name: 'ALIQCFDESC', nullable: true, precision: 53 })
  aliqcfdesc: number | null;

  @Column('varchar', { name: 'EFDH010', nullable: true, length: 30 })
  efdh010: string | null;

  @Column('varchar', { name: 'EFDH010_TER', nullable: true, length: 30 })
  efdh010Ter: string | null;

  @Column('varchar', { name: 'EFDH010_PRTER', nullable: true, length: 30 })
  efdh010Prter: string | null;

  @Column('varchar', { name: 'CCM', nullable: true, length: 11 })
  ccm: string | null;

  @Column('int', { name: 'WMSCODENDFLUT', nullable: true })
  wmscodendflut: number | null;

  @Column('char', { name: 'TIPOENVIONFCE', length: 1, default: () => "'A'" })
  tipoenvionfce: string;

  @Column('char', { name: 'CONTINGENCIANFCE', length: 1, default: () => "'G'" })
  contingencianfce: string;

  @Column('varchar', { name: 'IMPRESSORAETQVOL', nullable: true, length: 100 })
  impressoraetqvol: string | null;

  @Column('varchar', { name: 'CHAVEACESSONFSE', nullable: true, length: 50 })
  chaveacessonfse: string | null;

  @Column('smallint', { name: 'CODLOJAECONECT', nullable: true })
  codlojaeconect: number | null;

  @Column('smallint', { name: 'TOPRECARGACELECONECT', nullable: true })
  toprecargaceleconect: number | null;

  @Column('smallint', { name: 'TOPNFCEECONECT', nullable: true })
  topnfceeconect: number | null;

  @Column('smallint', { name: 'TOPSATECONECT', nullable: true })
  topsateconect: number | null;

  @Column('char', {
    name: 'CONSREPICMSBASEPISCOF',
    length: 1,
    default: () => "'S'",
  })
  consrepicmsbasepiscof: string;

  @Column('char', { name: 'IGPERMCOMPPRODS', length: 1, default: () => "'N'" })
  igpermcompprods: string;

  @Column('char', {
    name: 'USASEPAGRUPROD',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  usasepagruprod: string | null;

  @Column('smallint', { name: 'QTCHECKSEP', nullable: true })
  qtchecksep: number | null;

  @Column('float', { name: 'VOLCHECKSEPROD', nullable: true, precision: 53 })
  volcheckseprod: number | null;

  @Column('float', { name: 'PESMAXSEPAGRU', nullable: true, precision: 53 })
  pesmaxsepagru: number | null;

  @Column('smallint', { name: 'QTPEDSEPAGR', nullable: true })
  qtpedsepagr: number | null;

  @Column('int', { name: 'LOCALPADECONECT', nullable: true })
  localpadeconect: number | null;

  @Column('smallint', { name: 'TOPCORBANECONECT', nullable: true })
  topcorbaneconect: number | null;

  @Column('char', { name: 'WMSDOCASEPBALCAO', nullable: true, length: 1 })
  wmsdocasepbalcao: string | null;

  @Column('varchar', { name: 'IDENTECT', nullable: true, length: 20 })
  identect: string | null;

  @Column('varchar', { name: 'SENHAECT', nullable: true, length: 20 })
  senhaect: string | null;

  @Column('smallint', { name: 'CODRELMINUTAODP', nullable: true })
  codrelminutaodp: number | null;

  @Column('int', { name: 'NUMLOTE', nullable: true })
  numlote: number | null;

  @Column('char', {
    name: 'UTILIZAEXPLOTE',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  utilizaexplote: string | null;

  @Column('varchar', { name: 'IMPRESSORAETQSEP', nullable: true, length: 100 })
  impressoraetqsep: string | null;

  @Column('text', { name: 'FILTROALIQICMSSQL', nullable: true })
  filtroaliqicmssql: string | null;

  @Column('char', {
    name: 'IMPCTEEMISPROP',
    nullable: true,
    length: 1,
    default: () => 'NULL',
  })
  impcteemisprop: string | null;

  @Column('char', { name: 'TRANSPCARGA', length: 1, default: () => "'1'" })
  transpcarga: string;

  @Column('int', { name: 'VERSAOMDFE', nullable: true })
  versaomdfe: number | null;

  @Column('char', {
    name: 'REDICMSBCPISCONFINS',
    length: 1,
    default: () => "'N'",
  })
  redicmsbcpisconfins: string;

  @Column('varchar', { name: 'ULTNSU', length: 15, default: () => '(0)' })
  ultnsu: string;

  @Column('smallint', { name: 'NROMAXPROD', nullable: true })
  nromaxprod: number | null;

  @Column('int', { name: 'TPOEMPRESA', nullable: true })
  tpoempresa: number | null;

  @Column('char', { name: 'USAINFOADCONFPED', nullable: true, length: 1 })
  usainfoadconfped: string | null;

  @Column('float', { name: 'ALIQCFMULT', nullable: true, precision: 53 })
  aliqcfmult: number | null;

  @Column('float', { name: 'ALIQPISMULT', nullable: true, precision: 53 })
  aliqpismult: number | null;

  @Column('varchar', { name: 'CODSTPISCFMULT', nullable: true, length: 2 })
  codstpiscfmult: string | null;

  @Column('char', { name: 'TRIBPISCFMULT', length: 1, default: () => "'N'" })
  tribpiscfmult: string;

  @Column('varchar', { name: 'JOBMDENDDIGITAL', nullable: true, length: 30 })
  jobmdenddigital: string | null;

  @Column('varchar', { name: 'SENHAECTRASTREIO', nullable: true, length: 20 })
  senhaectrastreio: string | null;

  @Column('varchar', { name: 'IDENTECTRASTREIO', nullable: true, length: 20 })
  identectrastreio: string | null;

  @Column('char', { name: 'PARTCANALVERDE', length: 1, default: () => "'N'" })
  partcanalverde: string;

  @Column('char', { name: 'TIPCTACTBEFD', length: 1, default: () => "'T'" })
  tipctactbefd: string;

  @Column('int', { name: 'VERSAOCTE', nullable: true, default: () => '(200)' })
  versaocte: number | null;

  @Column('smallint', { name: 'TRIBREINF', nullable: true })
  tribreinf: number | null;

  @Column('varchar', { name: 'NRORECIBO', nullable: true, length: 52 })
  nrorecibo: string | null;

  @Column('char', { name: 'ENTREGAECD', length: 1, default: () => "'N'" })
  entregaecd: string;

  @Column('smallint', {
    name: 'SITEMPREINF',
    nullable: true,
    default: () => '(0)',
  })
  sitempreinf: number | null;

  @Column('char', { name: 'EMPADMPUBDIR', length: 1, default: () => "'N'" })
  empadmpubdir: string;

  @Column('datetime', { name: 'DTVALINIREINF', nullable: true })
  dtvalinireinf: Date | null;

  @Column('datetime', { name: 'DTVALFINREINF', nullable: true })
  dtvalfinreinf: Date | null;

  @Column('char', { name: 'VINCULOEFR', nullable: true, length: 1 })
  vinculoefr: string | null;

  @Column('varchar', { name: 'CNPJEFRVINC', nullable: true, length: 14 })
  cnpjefrvinc: string | null;

  @Column('smallint', { name: 'AMBIENTEREINF', nullable: true })
  ambientereinf: number | null;

  @Column('int', { name: 'RESPENTREINF', nullable: true })
  respentreinf: number | null;

  @Column('char', {
    name: 'DESONERAFOLHACPRB',
    length: 1,
    default: () => "'N'",
  })
  desonerafolhacprb: string;

  @Column('varchar', {
    name: 'CHAVEACESSVALIDADOR',
    nullable: true,
    length: 36,
  })
  chaveacessvalidador: string | null;

  @Column('varchar', { name: 'CAMCONVPREF', nullable: true, length: 2 })
  camconvpref: string | null;

  @Column('datetime', { name: 'DTREFPRODREINF', nullable: true })
  dtrefprodreinf: Date | null;

  @Column('datetime', { name: 'DTREFPREPRODREAISREINF', nullable: true })
  dtrefpreprodreaisreinf: Date | null;

  @Column('datetime', { name: 'DTREFPREPRODFICTREINF', nullable: true })
  dtrefpreprodfictreinf: Date | null;

  @Column('varchar', { name: 'AEDFE', nullable: true, length: 10 })
  aedfe: string | null;

  @Column('char', { name: 'IMPNFEEMISSPROP', nullable: true, length: 1 })
  impnfeemissprop: string | null;

  @Column('varchar', { name: 'ULTNSUCTE', length: 15, default: () => "'0'" })
  ultnsucte: string;

  @Column('char', { name: 'UTILIZADFETRANSP', length: 1, default: () => "'N'" })
  utilizadfetransp: string;

  @Column('char', {
    name: 'USARECPARCIAL',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  usarecparcial: string | null;

  @Column('char', {
    name: 'USASTEXTNOTARESTST',
    length: 1,
    default: () => "'N'",
  })
  usastextnotarestst: string;

  @Column('smallint', { name: 'QTDUMAPED', nullable: true })
  qtdumaped: number | null;

  @Column('char', { name: 'PROGAQUISALIM', length: 1, default: () => "'N'" })
  progaquisalim: string;

  @Column('char', { name: 'DESCREDDIFCIAP', nullable: true, length: 1 })
  descreddifciap: string | null;

  @Column('datetime', { name: 'PROXEXECSMTPXML', nullable: true })
  proxexecsmtpxml: Date | null;

  @Column('smallint', { name: 'INTCONSSMTPXML', nullable: true })
  intconssmtpxml: number | null;

  @Column('varchar', { name: 'USUARIOSMTPXML', nullable: true, length: 50 })
  usuariosmtpxml: string | null;

  @Column('varchar', { name: 'SENHASMTPXML', nullable: true, length: 250 })
  senhasmtpxml: string | null;

  @Column('varchar', { name: 'SERVIDORSMTPXML', nullable: true, length: 50 })
  servidorsmtpxml: string | null;

  @Column('smallint', { name: 'PORTASMTPXML', nullable: true })
  portasmtpxml: number | null;

  @Column('varchar', { name: 'INSXMLPORIMPSMTPXML', nullable: true, length: 1 })
  insxmlporimpsmtpxml: string | null;

  @Column('varchar', { name: 'TIPCONEXSMTPXML', nullable: true, length: 1 })
  tipconexsmtpxml: string | null;

  @Column('varchar', { name: 'IGCERTIFSMTPXML', nullable: true, length: 1 })
  igcertifsmtpxml: string | null;

  @Column('char', {
    name: 'UTILIZAEXPLOTESEP',
    length: 1,
    default: () => "'N'",
  })
  utilizaexplotesep: string;

  @Column('char', {
    name: 'QRCODENFCEVERSAO2',
    length: 1,
    default: () => "'S'",
  })
  qrcodenfceversao2: string;

  @Column('smallint', { name: 'VERSAONT', nullable: true })
  versaont: number | null;

  @Column('smallint', { name: 'GERARRETENCAO', nullable: true })
  gerarretencao: number | null;

  @Column('char', { name: 'GERARTAXFINEMBNFE', nullable: true, length: 1 })
  gerartaxfinembnfe: string | null;

  @Column('varchar', { name: 'TIPGERINFGVEICGREB', nullable: true, length: 1 })
  tipgerinfgveicgreb: string | null;

  @Column('char', { name: 'SUPRIMIREMAILDEST', nullable: true, length: 1 })
  suprimiremaildest: string | null;

  @Column('char', {
    name: 'PERMOUTROUSUSEPPED',
    length: 1,
    default: () => "'N'",
  })
  permoutroususepped: string;

  @Column('varchar', {
    name: 'WMSUSAIMPFECHAVOL',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  wmsusaimpfechavol: string | null;

  @Column('int', { name: 'CODENDCROSSDOCK', nullable: true })
  codendcrossdock: number | null;

  @Column('varchar', {
    name: 'WMSINFOPESODETVOL',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  wmsinfopesodetvol: string | null;

  @Column('char', { name: 'CONICMSMAJFCPINT', nullable: true, length: 1 })
  conicmsmajfcpint: string | null;

  @Column('char', { name: 'CALCICMSSTNAOCONT', nullable: true, length: 1 })
  calcicmsstnaocont: string | null;

  @Column('varchar', { name: 'EMAILNOTFECREINF', nullable: true, length: 255 })
  emailnotfecreinf: string | null;

  @Column('varchar', { name: 'CONSIDBENEF', nullable: true, length: 1 })
  considbenef: string | null;

  @Column('varchar', {
    name: 'UTILIZASEPPULMAO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  utilizaseppulmao: string | null;

  @Column('char', { name: 'CONSDEVEVTR2050', nullable: true, length: 1 })
  consdevevtr2050: string | null;

  @Column('char', { name: 'REDSTCOMPBCPISCOFINS', nullable: true, length: 1 })
  redstcompbcpiscofins: string | null;

  @Column('char', { name: 'NFESTANTCONSFINAL', nullable: true, length: 1 })
  nfestantconsfinal: string | null;

  @Column('varchar', {
    name: 'USACODBARRASCONCATWMS',
    nullable: true,
    length: 2,
    default: () => "'N'",
  })
  usacodbarrasconcatwms: string | null;

  @Column('char', { name: 'ENVEMAILCONF', nullable: true, length: 1 })
  envemailconf: string | null;

  @Column('varchar', {
    name: 'WMSARMTOTALCOL',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  wmsarmtotalcol: string | null;

  @Column('varchar', { name: 'ORIGPRODCOMIPI', nullable: true, length: 50 })
  origprodcomipi: string | null;

  @Column('int', { name: 'NUNOTATRCFX', nullable: true })
  nunotatrcfx: number | null;

  @Column('int', { name: 'NUNOTADEMFX', nullable: true })
  nunotademfx: number | null;

  @Column('int', { name: 'NUNOTAMODFX', nullable: true })
  nunotamodfx: number | null;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;

  @Column('char', { name: 'CODTRIB90CREDDEB', nullable: true, length: 1 })
  codtrib90Creddeb: string | null;

  @Column('varchar', {
    name: 'UTILIZATRICROSSDOCKING',
    length: 1,
    default: () => "'N'",
  })
  utilizatricrossdocking: string;

  @Column('int', { name: 'COPIASDANFCE', nullable: true })
  copiasdanfce: number | null;

  @Column('char', { name: 'TIPDATAEVTSERV', nullable: true, length: 1 })
  tipdataevtserv: string | null;

  @Column('varchar', { name: 'REDISSBCPISCONF', nullable: true, length: 1 })
  redissbcpisconf: string | null;

  @Column('varchar', {
    name: 'WMSUSAREGVOLREC',
    length: 1,
    default: () => "'N'",
  })
  wmsusaregvolrec: string;

  @Column('varchar', {
    name: 'WMSMULTIUSUCONF',
    length: 1,
    default: () => "'N'",
  })
  wmsmultiusuconf: string;

  @Column('smallint', { name: 'VERSAONTMDFE', nullable: true })
  versaontmdfe: number | null;

  @Column('varchar', { name: 'DIFALIQFCPINT', nullable: true, length: 1 })
  difaliqfcpint: string | null;

  @Column('char', { name: 'ENVIOSINCRONONFE', nullable: true, length: 1 })
  enviosincrononfe: string | null;

  @Column('char', { name: 'ENVIOSINCRONONFCE', nullable: true, length: 1 })
  enviosincrononfce: string | null;

  @Column('varchar', { name: 'ATUALCBENEFFAT', nullable: true, length: 1 })
  atualcbeneffat: string | null;

  @Column('char', { name: 'NUMDOCR2020', nullable: true, length: 1 })
  numdocr2020: string | null;

  @Column('char', { name: 'ENVIOSINCRONOCTE', nullable: true, length: 1 })
  enviosincronocte: string | null;

  @Column('smallint', { name: 'VERSAONTCTE', nullable: true })
  versaontcte: number | null;

  @Column('smallint', { name: 'CODTABCKC', nullable: true })
  codtabckc: number | null;

  @Column('varchar', { name: 'REABCOMPLETO', length: 1, default: () => "'N'" })
  reabcompleto: string;

  @Column('char', { name: 'GERNOTAENTCANC', nullable: true, length: 1 })
  gernotaentcanc: string | null;

  @Column('char', { name: 'TRIBPISCFBONIF', nullable: true, length: 1 })
  tribpiscfbonif: string | null;

  @Column('varchar', { name: 'CODSTPISCFBONIF', nullable: true, length: 2 })
  codstpiscfbonif: string | null;

  @Column('float', { name: 'ALIQPISBONIF', nullable: true, precision: 53 })
  aliqpisbonif: number | null;

  @Column('float', { name: 'ALIQCFBONIF', nullable: true, precision: 53 })
  aliqcfbonif: number | null;

  @Column('int', { name: 'CODCTACTBBONIF', nullable: true })
  codctactbbonif: number | null;

  @Column('char', { name: 'GERLIVICMSEMPSN', nullable: true, length: 1 })
  gerlivicmsempsn: string | null;

  @Column('char', { name: 'MDFEDOCSEMISPROPRIA', nullable: true, length: 1 })
  mdfedocsemispropria: string | null;

  @Column('char', { name: 'IPITRIBUTDEFEMP', nullable: true, length: 1 })
  ipitributdefemp: string | null;

  @Column('varchar', { name: 'DEFCSTIPI00', nullable: true, length: 2 })
  defcstipi00: string | null;

  @Column('varchar', { name: 'DEFCSTIPI01', nullable: true, length: 2 })
  defcstipi01: string | null;

  @Column('varchar', { name: 'DEFCSTIPI02', nullable: true, length: 2 })
  defcstipi02: string | null;

  @Column('varchar', { name: 'DEFCSTIPI03', nullable: true, length: 2 })
  defcstipi03: string | null;

  @Column('varchar', { name: 'DEFCSTIPI04', nullable: true, length: 2 })
  defcstipi04: string | null;

  @Column('varchar', { name: 'DEFCSTIPI05', nullable: true, length: 2 })
  defcstipi05: string | null;

  @Column('varchar', { name: 'DEFCSTIPI49', nullable: true, length: 2 })
  defcstipi49: string | null;

  @Column('varchar', { name: 'DEFCSTIPI50', nullable: true, length: 2 })
  defcstipi50: string | null;

  @Column('varchar', { name: 'DEFCSTIPI51', nullable: true, length: 2 })
  defcstipi51: string | null;

  @Column('varchar', { name: 'DEFCSTIPI52', nullable: true, length: 2 })
  defcstipi52: string | null;

  @Column('varchar', { name: 'DEFCSTIPI53', nullable: true, length: 2 })
  defcstipi53: string | null;

  @Column('varchar', { name: 'DEFCSTIPI54', nullable: true, length: 2 })
  defcstipi54: string | null;

  @Column('varchar', { name: 'DEFCSTIPI55', nullable: true, length: 2 })
  defcstipi55: string | null;

  @Column('varchar', { name: 'DEFCSTIPI99', nullable: true, length: 2 })
  defcstipi99: string | null;

  @Column('char', { name: 'ESCRITCOMPRAEMISSPROP', nullable: true, length: 1 })
  escritcompraemissprop: string | null;

  @Column('smallint', { name: 'CODCLASSIFESTAB', nullable: true })
  codclassifestab: number | null;

  @Column('char', { name: 'TEMPREMIACAOESTADUAL', nullable: true, length: 1 })
  tempremiacaoestadual: string | null;

  @Column('int', { name: 'NURFEPRODUCAO', nullable: true })
  nurfeproducao: number | null;

  @Column('char', { name: 'REDPISBCPISCOFINS', nullable: true, length: 1 })
  redpisbcpiscofins: string | null;

  @Column('char', { name: 'ICMSNORMALDIFICMSSN', nullable: true, length: 1 })
  icmsnormaldificmssn: string | null;

  @Column('char', { name: 'BAIXAFINPREEMISSNFCE', nullable: true, length: 1 })
  baixafinpreemissnfce: string | null;

  @Column('smallint', { name: 'NFSEOBSITERPS', nullable: true })
  nfseobsiterps: number | null;

  @Column('smallint', { name: 'QTDCARNFSEOBSITERPS', nullable: true })
  qtdcarnfseobsiterps: number | null;

  @Column('varchar', { name: 'GERALCDPR', nullable: true, length: 1 })
  geralcdpr: string | null;

  @Column('varchar', { name: 'CAFIR', nullable: true, length: 8 })
  cafir: string | null;

  @Column('varchar', { name: 'CAEPF', nullable: true, length: 14 })
  caepf: string | null;

  @Column('varchar', { name: 'TIPOEXPLORACAO', nullable: true, length: 1 })
  tipoexploracao: string | null;

  @Column('char', { name: 'DIRFPGEXT', nullable: true, length: 1 })
  dirfpgext: string | null;

  @Column('char', { name: 'DIRFSITESP', nullable: true, length: 1 })
  dirfsitesp: string | null;

  @Column('datetime', { name: 'DIRFDHEVENTO', nullable: true })
  dirfdhevento: Date | null;

  @Column('varchar', { name: 'DIRFCPFRESP', nullable: true, length: 11 })
  dirfcpfresp: string | null;

  @Column('char', { name: 'DIRFSOCOST', nullable: true, length: 1 })
  dirfsocost: string | null;

  @Column('char', { name: 'DIRFDEPDECJUD', nullable: true, length: 1 })
  dirfdepdecjud: string | null;

  @Column('char', { name: 'DIRFDEPFUNINV', nullable: true, length: 1 })
  dirfdepfuninv: string | null;

  @Column('char', { name: 'DIRFPLPRIASS', nullable: true, length: 1 })
  dirfplpriass: string | null;

  @Column('char', { name: 'DIRFENTIMUNE', nullable: true, length: 1 })
  dirfentimune: string | null;

  @Column('char', { name: 'DIRFPGFUNDPUB', nullable: true, length: 1 })
  dirfpgfundpub: string | null;

  @Column('smallint', { name: 'DIRFNATDECL', nullable: true })
  dirfnatdecl: number | null;

  @Column('varchar', { name: 'CGCPROCURADOR', nullable: true, length: 14 })
  cgcprocurador: string | null;

  @Column('char', { name: 'USATROCOCHECKOUT', nullable: true, length: 1 })
  usatrococheckout: string | null;

  @Column('varchar', { name: 'EMPCENTRALMOVFIN', nullable: true, length: 1 })
  empcentralmovfin: string | null;

  @Column('smallint', { name: 'CODEMPORIGMOVFIN', nullable: true })
  codemporigmovfin: number | null;

  @Column('smallint', { name: 'QTDCONFENTWMS', nullable: true })
  qtdconfentwms: number | null;

  @Column('char', { name: 'PROIBDIGCONFENT', nullable: true, length: 1 })
  proibdigconfent: string | null;

  @Column('smallint', { name: 'CODEMPGRUPFRETE', nullable: true })
  codempgrupfrete: number | null;

  @Column('varchar', { name: 'BLQNFACOMPNFCPEND', nullable: true, length: 1 })
  blqnfacompnfcpend: string | null;

  @Column('varchar', { name: 'DIFALIQDESPACESS', nullable: true, length: 1 })
  difaliqdespacess: string | null;

  @Column('varchar', {
    name: 'COMPLRESTITUICAOICMSST',
    nullable: true,
    length: 1,
  })
  complrestituicaoicmsst: string | null;

  @Column('varchar', { name: 'AMBIENTEGNRE', nullable: true, length: 1 })
  ambientegnre: string | null;

  @Column('int', { name: 'VERSAOGNRE', nullable: true })
  versaognre: number | null;

  @Column('char', { name: 'REDDIFALBCPISCOF', nullable: true, length: 1 })
  reddifalbcpiscof: string | null;

  @Column('char', { name: 'DEDUZFCPBCPISCOFINS', nullable: true, length: 1 })
  deduzfcpbcpiscofins: string | null;

  @Column('varchar', { name: 'ENTAUTTARMAPA', length: 1, default: () => "'N'" })
  entauttarmapa: string;

  @Column('varchar', {
    name: 'INIBLOQREGCONF',
    length: 1,
    default: () => "'N'",
  })
  inibloqregconf: string;

  @Column('varchar', { name: 'SEPPULPARCIAL', length: 1, default: () => "'N'" })
  seppulparcial: string;

  @Column('char', { name: 'ENVINUTNOTAEXC', nullable: true, length: 1 })
  envinutnotaexc: string | null;

  @Column('varchar', { name: 'JUSINUTNOTAEXC', nullable: true, length: 255 })
  jusinutnotaexc: string | null;

  @Column('char', { name: 'CONSDEVTEREVTR2050', nullable: true, length: 1 })
  consdevterevtr2050: string | null;

  @Column('smallint', { name: 'PRIORCODNAT', nullable: true })
  priorcodnat: number | null;

  @Column('char', { name: 'ENVRESPCONTCTE', nullable: true, length: 1 })
  envrespcontcte: string | null;

  @Column('varchar', { name: 'WMSDOCAREP', nullable: true, length: 10 })
  wmsdocarep: string | null;

  @Column('char', {
    name: 'PROIBESCCHECKOUTPED',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  proibesccheckoutped: string | null;

  @Column('char', { name: 'CALCFETHAB', nullable: true, length: 1 })
  calcfethab: string | null;

  @Column('varchar', { name: 'MSGINFADICFETHAB', nullable: true, length: 255 })
  msginfadicfethab: string | null;

  @Column('char', { name: 'ISALIQINTSEXC', nullable: true, length: 1 })
  isaliqintsexc: string | null;

  @Column('char', { name: 'OBTSTANTMEDENT', nullable: true, length: 1 })
  obtstantmedent: string | null;

  @Column('varchar', {
    name: 'INIBELOTE',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  inibelote: string | null;

  @Column('char', { name: 'CALCICMSAT', nullable: true, length: 1 })
  calcicmsat: string | null;

  @Column('varchar', { name: 'NFECANEXTCANMES', nullable: true, length: 1 })
  nfecanextcanmes: string | null;

  @Column('smallint', { name: 'CALCVLRAQUISBEM', nullable: true })
  calcvlraquisbem: number | null;

  @Column('char', { name: 'CONTBAIBEMSUBIMPREC', nullable: true, length: 1 })
  contbaibemsubimprec: string | null;

  @Column('varchar', { name: 'CHAVEPIXCHECKOUT', nullable: true, length: 254 })
  chavepixcheckout: string | null;

  @Column('varchar', { name: 'URLPIXCHECKOUT', nullable: true, length: 254 })
  urlpixcheckout: string | null;

  @Column('char', { name: 'CALCPISCFSFIN', nullable: true, length: 1 })
  calcpiscfsfin: string | null;

  @Column('smallint', { name: 'TIPICMSFENVALBEM', nullable: true })
  tipicmsfenvalbem: number | null;

  @Column('char', { name: 'ENVLEITRANSPDESC', nullable: true, length: 1 })
  envleitranspdesc: string | null;

  @Column('char', { name: 'ENVLEITRANSPTOTOBS', nullable: true, length: 1 })
  envleitransptotobs: string | null;

  @Column('char', { name: 'CONSIDQTCARCDESC', nullable: true, length: 1 })
  considqtcarcdesc: string | null;

  @Column('char', {
    name: 'WMSPERSEPPRODAP',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  wmspersepprodap: string | null;

  @Column('smallint', { name: 'TOPSANGSUPRI', nullable: true })
  topsangsupri: number | null;

  @Column('char', { name: 'USAVLRMEDTRANSFEMP', nullable: true, length: 1 })
  usavlrmedtransfemp: string | null;

  @Column('varchar', { name: 'TRATSOBFINCONF', nullable: true, length: 1 })
  tratsobfinconf: string | null;

  @Column('smallint', { name: 'CONESTORIGPROD', nullable: true })
  conestorigprod: number | null;

  @Column('smallint', { name: 'TOPDESPESA', nullable: true })
  topdespesa: number | null;

  @Column('char', { name: 'INIBEREABMAXPICKING', nullable: true, length: 1 })
  inibereabmaxpicking: string | null;

  @Column('varchar', {
    name: 'CSTNREDICMSBCPISCOF',
    nullable: true,
    length: 50,
  })
  cstnredicmsbcpiscof: string | null;

  @Column('char', { name: 'CONSDEVNFEREINF', nullable: true, length: 1 })
  consdevnfereinf: string | null;

  @Column('text', { name: 'VLRUNITICMSOP', nullable: true })
  vlruniticmsop: string | null;

  @Column('text', { name: 'VLRICMSOPANT', nullable: true })
  vlricmsopant: string | null;

  @Column('text', { name: 'VLRSTOPANT', nullable: true })
  vlrstopant: string | null;

  @Column('text', { name: 'VLRSTFCPOPANT', nullable: true })
  vlrstfcpopant: string | null;

  @Column('smallint', { name: 'CODMODDANFESIMPLIFNFE', nullable: true })
  codmoddanfesimplifnfe: number | null;

  @Column('varchar', {
    name: 'CLIENTIDPIXCHECKOUT',
    nullable: true,
    length: 254,
  })
  clientidpixcheckout: string | null;

  @Column('varchar', {
    name: 'CLIENTSECRETPIXCHECKOUT',
    nullable: true,
    length: 1000,
  })
  clientsecretpixcheckout: string | null;

  @Column('varchar', { name: 'APIKEYPIXCHECKOUT', nullable: true, length: 254 })
  apikeypixcheckout: string | null;

  @Column('smallint', { name: 'BANCOPIXCHECKOUT', nullable: true })
  bancopixcheckout: number | null;

  @Column('varchar', { name: 'FISTEL', nullable: true, length: 11 })
  fistel: string | null;

  @Column('float', { name: 'ALIQFUST', nullable: true, precision: 53 })
  aliqfust: number | null;

  @Column('float', { name: 'ALIQFUNTTEL', nullable: true, precision: 53 })
  aliqfunttel: number | null;

  @Column('int', { name: 'MODEMAILLIBLIM', nullable: true })
  modemailliblim: number | null;

  @Column('varchar', { name: 'TOKENNFSE', nullable: true, length: 65 })
  tokennfse: string | null;

  @Column('char', { name: 'GERCIAPCOMPEFD', nullable: true, length: 1 })
  gerciapcompefd: string | null;

  @Column('char', { name: 'WMSRASTSERMED', nullable: true, length: 1 })
  wmsrastsermed: string | null;

  @Column('text', { name: 'VLRUNITMERC', nullable: true })
  vlrunitmerc: string | null;

  @Column('text', { name: 'CODRESPRETC180', nullable: true })
  codrespretc180: string | null;

  @Column('varchar', { name: 'VLRBASESTC180', nullable: true, length: 3103 })
  vlrbasestc180: string | null;

  @Column('varchar', { name: 'VLRSTC180', nullable: true, length: 3103 })
  vlrstc180: string | null;

  @Column('int', { name: 'EFDDIAVENC', nullable: true })
  efddiavenc: number | null;

  @Column('int', { name: 'EFDCODNATDESPRECICMSST', nullable: true })
  efdcodnatdesprecicmsst: number | null;

  @Column('int', { name: 'EFDCODNATDESPRECICMS', nullable: true })
  efdcodnatdesprecicms: number | null;

  @Column('int', { name: 'EFDCODCENCUS', nullable: true })
  efdcodcencus: number | null;

  @Column('int', { name: 'EFDCODTIPOPER', nullable: true })
  efdcodtipoper: number | null;

  @Column('int', { name: 'EFDCODTIPTIT', nullable: true })
  efdcodtiptit: number | null;

  @Column('int', { name: 'EFDCODCTABCOINT', nullable: true })
  efdcodctabcoint: number | null;

  @Column('int', { name: 'EFDCODBCO', nullable: true })
  efdcodbco: number | null;

  @Column('varchar', { name: 'EFDTIPREENCHNOTA', nullable: true, length: 20 })
  efdtipreenchnota: string | null;

  @Column('varchar', { name: 'INTFINOBRICMSSTREC', nullable: true, length: 1 })
  intfinobricmsstrec: string | null;

  @Column('char', { name: 'CALCVENCGNREAPU', nullable: true, length: 1 })
  calcvencgnreapu: string | null;

  @Column('char', { name: 'TIPOIMPKITFOX', nullable: true, length: 1 })
  tipoimpkitfox: string | null;

  @Column('char', { name: 'USAINDPRESTOPFAT', nullable: true, length: 1 })
  usaindprestopfat: string | null;

  @Column('char', { name: 'DESRESTRFCPCST', nullable: true, length: 1 })
  desrestrfcpcst: string | null;

  @Column('char', { name: 'DESRESTRFCPSTCST', nullable: true, length: 1 })
  desrestrfcpstcst: string | null;

  @Column('char', { name: 'GEROBSIPIREGENT', nullable: true, length: 1 })
  gerobsipiregent: string | null;

  @Column('char', { name: 'GERCTECREDPISCOF', nullable: true, length: 1 })
  gerctecredpiscof: string | null;

  @Column('varchar', { name: 'TOKENIBPT', nullable: true, length: 65 })
  tokenibpt: string | null;

  @Column('int', { name: 'ORIGDESCONTOS', nullable: true })
  origdescontos: number | null;

  @Column('int', { name: 'NOTASAIAJUSTERECLAS', nullable: true })
  notasaiajustereclas: number | null;

  @Column('int', { name: 'NOTAENTAJUSTERECLAS', nullable: true })
  notaentajustereclas: number | null;

  @Column('varchar', { name: 'TIPCTACTBEFDF', nullable: true, length: 2 })
  tipctactbefdf: string | null;

  @Column('char', { name: 'DTOPMULTA', nullable: true, length: 1 })
  dtopmulta: string | null;

  @Column('char', { name: 'DTOPJUROS', nullable: true, length: 1 })
  dtopjuros: string | null;

  @Column('varchar', { name: 'REDSTBCPISCOFINS', nullable: true, length: 1 })
  redstbcpiscofins: string | null;

  @Column('varchar', { name: 'STINCLUSA70', length: 1, default: () => "'N'" })
  stinclusa70: string;

  @Column('int', { name: 'CODBCOIPI', nullable: true })
  codbcoipi: number | null;

  @Column('varchar', { name: 'INTEGRARIPIFIN', nullable: true, length: 1 })
  integraripifin: string | null;

  @Column('int', { name: 'CODCENCUSIPI', nullable: true })
  codcencusipi: number | null;

  @Column('int', { name: 'CODPARCIPI', nullable: true })
  codparcipi: number | null;

  @Column('int', { name: 'CODTIPOPERIPI', nullable: true })
  codtipoperipi: number | null;

  @Column('char', { name: 'CTACTBANLREGAPUR', nullable: true, length: 1 })
  ctactbanlregapur: string | null;

  @Column('varchar', { name: 'CODRECEITAIPI', nullable: true, length: 10 })
  codreceitaipi: string | null;

  @Column('int', { name: 'CODNATIPI', nullable: true })
  codnatipi: number | null;

  @Column('varchar', {
    name: 'ESTRNCREDICMSST',
    length: 1,
    default: () => "'N'",
  })
  estrncredicmsst: string;

  @Column('int', { name: 'CODCTABCOIPI', nullable: true })
  codctabcoipi: number | null;

  @Column('int', { name: 'DIAVENCIPI', nullable: true })
  diavencipi: number | null;

  @Column('int', { name: 'CODTIPTITIPI', nullable: true })
  codtiptitipi: number | null;

  @Column('char', { name: 'USACUSMEDICMPRO', length: 1, default: () => "'S'" })
  usacusmedicmpro: string;

  @Column('char', { name: 'INDUNIAO', nullable: true, length: 1 })
  induniao: string | null;

  @Column('char', { name: 'CONSDIFPARCOUTICMS', nullable: true, length: 1 })
  consdifparcouticms: string | null;

  @Column('datetime', { name: 'DTOBITO', nullable: true })
  dtobito: Date | null;

  @Column('datetime', { name: 'DTTRANSFFINSLUCR', nullable: true })
  dttransffinslucr: Date | null;

  @Column('varchar', { name: 'GERMULTPLACRES', nullable: true, length: 1 })
  germultplacres: string | null;

  @Column('smallint', { name: 'INDTIPLAYOUTK010', nullable: true })
  indtiplayoutk010: number | null;

  @Column('char', { name: 'ENVINFISSSOMDEVIDO', nullable: true, length: 1 })
  envinfisssomdevido: string | null;

  @Column('varchar', { name: 'CODRECEITAREINF', nullable: true, length: 10 })
  codreceitareinf: string | null;

  @Column('datetime', { name: 'DTREFPREPRODREAISREINFG3103', nullable: true })
  dtrefpreprodreaisreinfg3103: Date | null;

  @Column('int', { name: 'MODESTCPAWMS', nullable: true })
  modestcpawms: number | null;

  @Column('int', { name: 'CODMODRETESTWMS', nullable: true })
  codmodretestwms: number | null;

  @Column('int', { name: 'CODEMPIMPOSTO', nullable: true })
  codempimposto: number | null;

  @Column('varchar', { name: 'TIPDATAEVTPAG', nullable: true, length: 1 })
  tipdataevtpag: string | null;

  @Column('varchar', { name: 'TIPDATAEVTPAGXIR', nullable: true, length: 1 })
  tipdataevtpagxir: string | null;

  @Column('datetime', { name: 'DTREFPRODREINFG3103', nullable: true })
  dtrefprodreinfg3103: Date | null;

  @Column('char', { name: 'GERCHAVEREFSIG', nullable: true, length: 1 })
  gerchaverefsig: string | null;

  @Column('char', { name: 'GER0220UNDFORN', nullable: true, length: 1 })
  ger0220Undforn: string | null;

  @Column('int', { name: 'CODCTAPIXTEF', nullable: true })
  codctapixtef: number | null;

  @Column('varchar', { name: 'CREDICMSREMG', nullable: true, length: 50 })
  credicmsremg: string | null;

  @Column('int', { name: 'TOPCANPIXPAG', nullable: true })
  topcanpixpag: number | null;

  @Column('char', { name: 'DESTIPIDEVCOM', nullable: true, length: 1 })
  destipidevcom: string | null;

  @Column('char', {
    name: 'TIPOPIX',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  tipopix: string | null;

  @Column('char', { name: 'RUPTURAEST', length: 1, default: () => "'N'" })
  rupturaest: string;

  @Column('int', { name: 'TOPCANPIXREC', nullable: true })
  topcanpixrec: number | null;

  @Column('int', { name: 'NATCANPIX', nullable: true })
  natcanpix: number | null;

  @Column('char', { name: 'SOMARFCPBCCIAP', nullable: true, length: 1 })
  somarfcpbcciap: string | null;

  @Column('varchar', { name: 'CREDICMSCOMBUS', nullable: true, length: 50 })
  credicmscombus: string | null;

  @Column('int', { name: 'TOPCANPIXFIN', nullable: true })
  topcanpixfin: number | null;

  @Column('char', { name: 'USAMEDDIAIMP', nullable: true, length: 1 })
  usameddiaimp: string | null;

  @Column('char', { name: 'TPOBSNOTAG3103', nullable: true, length: 1 })
  tpobsnotag3103: string | null;

  @Column('char', { name: 'TPOBSFING3103', nullable: true, length: 1 })
  tpobsfing3103: string | null;

  @Column('char', { name: 'GEROBSFING3103', nullable: true, length: 1 })
  gerobsfing3103: string | null;

  @Column('char', { name: 'GEROBSNOTAG3103', nullable: true, length: 1 })
  gerobsnotag3103: string | null;

  @Column('char', { name: 'APLCALCDIFALIQFRT', nullable: true, length: 1 })
  aplcalcdifaliqfrt: string | null;

  @Column('varchar', {
    name: 'CHAVEDIGITALAGILIBLUE',
    nullable: true,
    length: 32,
  })
  chavedigitalagiliblue: string | null;

  @Column('varchar', {
    name: 'CODTRIB61',
    nullable: true,
    length: 1,
    default: () => 'NULL',
  })
  codtrib61: string | null;

  @Column('varchar', { name: 'CODTRIB53', nullable: true, length: 1 })
  codtrib53: string | null;

  @Column('smallint', { name: 'REGAPURTRIBSN', nullable: true })
  regapurtribsn: number | null;

  @Column('varchar', {
    name: 'PREFIXSERIENACIONAL',
    nullable: true,
    length: 20,
  })
  prefixserienacional: string | null;

  @Column('int', { name: 'STATUS', default: () => '(0)' })
  status: number;

  @Column('varchar', { name: 'ICMSSCTTD', nullable: true, length: 1 })
  icmsscttd: string | null;

  @Column('char', { name: 'GERLDPERTRI', nullable: true, length: 1 })
  gerldpertri: string | null;

  @Column('nvarchar', { name: 'CERTIFICADOPIX', nullable: true })
  certificadopix: string | null;

  @Column('char', { name: 'DESAPCPRODEPE', nullable: true, length: 1 })
  desapcprodepe: string | null;

  @Column('char', { name: 'ENVMDFSINC', nullable: true, length: 1 })
  envmdfsinc: string | null;

  @Column('varchar', { name: 'CNPJCTAPIX', nullable: true, length: 14 })
  cnpjctapix: string | null;

  @Column('int', { name: 'PRAZORCANCCTE', nullable: true })
  prazorcanccte: number | null;

  @Column('int', { name: 'PRAZOTCANCCTE', nullable: true })
  prazotcanccte: number | null;

  @Column('char', { name: 'DENUNCESPCTE', nullable: true, length: 1 })
  denuncespcte: string | null;

  @Column('char', { name: 'TERACPCTE', nullable: true, length: 1 })
  teracpcte: string | null;

  @Column('char', { name: 'CREDICMSCST60AM', nullable: true, length: 1 })
  credicmscst60Am: string | null;

  @Column('char', { name: 'GERADEDUCAOPF', nullable: true, length: 1 })
  geradeducaopf: string | null;

  @Column('varchar', { name: 'CONTINGENCIANFCOM', nullable: true, length: 1 })
  contingencianfcom: string | null;

  @Column('varchar', { name: 'TPAMBNFCOM', nullable: true, length: 1 })
  tpambnfcom: string | null;

  @Column('varchar', { name: 'TIPOENVIONFCOM', nullable: true, length: 1 })
  tipoenvionfcom: string | null;

  @Column('char', { name: 'CONSIDERARRESCOMPLST', nullable: true, length: 1 })
  considerarrescomplst: string | null;

  @OneToMany(
    () => GfrcategcomisEntity,
    (gfrcategcomisEntity) => gfrcategcomisEntity.codemp,
  )
  gfrcategcomis: GfrcategcomisEntity[];

  @OneToMany(
    () => GfrfindespesaEntity,
    (gfrfindespesaEntity) => gfrfindespesaEntity.codemp,
  )
  gfrfindespesas: GfrfindespesaEntity[];

  @OneToMany(
    () => GfrfinreceitasEntity,
    (gfrfinreceitasEntity) => gfrfinreceitasEntity.codemp,
  )
  gfrfinreceitas: GfrfinreceitasEntity[];

  @OneToMany(() => GfrguiEntity, (gfrguiEntity) => gfrguiEntity.codemp2)
  gfrguis: GfrguiEntity[];

  @OneToMany(
    () => GfrmetasunidEntity,
    (gfrmetasunidEntity) => gfrmetasunidEntity.codemp2,
  )
  gfrmetasuns: GfrmetasunidEntity[];

  @ManyToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfemps)
  tgfcabs: TgfcabEntity[];

  @OneToMany(() => TcacprEntity, (tcacprEntity) => tcacprEntity.codemp)
  tcacprs: TcacprEntity[];

  @OneToMany(() => TcecabEntity, (tcecabEntity) => tcecabEntity.codemp)
  tcecabs: TcecabEntity[];

  @OneToMany(() => TcecabHisEntity, (tcecabHisEntity) => tcecabHisEntity.codemp)
  tcecabHis: TcecabHisEntity[];

  @OneToMany(() => TceiteEntity, (tceiteEntity) => tceiteEntity.codemp)
  tceites: TceiteEntity[];

  @OneToMany(() => TceiteHisEntity, (tceiteHisEntity) => tceiteHisEntity.codemp)
  tceiteHis: TceiteHisEntity[];

  @OneToMany(() => TcsconEntity, (tcsconEntity) => tcsconEntity.codempresp)
  tcscons: TcsconEntity[];

  @OneToMany(() => TcsconEntity, (tcsconEntity) => tcsconEntity.codemp)
  tcscons2: TcsconEntity[];

  @OneToMany(() => TfpempEntity, (tfpempEntity) => tfpempEntity.codempfin)
  tfpemps: TfpempEntity[];

  @OneToMany(() => TgangrEntity, (tgangrEntity) => tgangrEntity.codemp)
  tgangrs: TgangrEntity[];

  @OneToMany(() => TgapatEntity, (tgapatEntity) => tgapatEntity.codemp)
  tgapats: TgapatEntity[];

  @OneToMany(() => TgariEntity, (tgariEntity) => tgariEntity.codemp)
  tgaris: TgariEntity[];

  @OneToMany(() => TgatriEntity, (tgatriEntity) => tgatriEntity.codemp)
  tgatris: TgatriEntity[];

  @OneToMany(() => TgfaaxnEntity, (tgfaaxnEntity) => tgfaaxnEntity.codemp2)
  tgfaaxns: TgfaaxnEntity[];

  @OneToMany(() => TgfaaxnmEntity, (tgfaaxnmEntity) => tgfaaxnmEntity.codemp2)
  tgfaaxnms: TgfaaxnmEntity[];

  @OneToMany(() => TgfacoEntity, (tgfacoEntity) => tgfacoEntity.codemp)
  tgfacos: TgfacoEntity[];

  @OneToMany(() => TgfacprbEntity, (tgfacprbEntity) => tgfacprbEntity.codemp2)
  tgfacprbs: TgfacprbEntity[];

  @OneToMany(
    () => Tgfadrcstr0000Entity,
    (tgfadrcstr0000Entity) => tgfadrcstr0000Entity.codemp2,
  )
  tgfadrcstr0s: Tgfadrcstr0000Entity[];

  @OneToMany(
    () => Tgfadrcstr1000Entity,
    (tgfadrcstr1000Entity) => tgfadrcstr1000Entity.codemp2,
  )
  tgfadrcstr1s: Tgfadrcstr1000Entity[];

  @OneToMany(
    () => Tgfadrcstr1010Entity,
    (tgfadrcstr1010Entity) => tgfadrcstr1010Entity.codemp2,
  )
  tgfadrcstr1s2: Tgfadrcstr1010Entity[];

  @OneToMany(
    () => Tgfadrcstr1100Entity,
    (tgfadrcstr1100Entity) => tgfadrcstr1100Entity.codemp2,
  )
  tgfadrcstr1s3: Tgfadrcstr1100Entity[];

  @OneToMany(
    () => Tgfadrcstr1110Entity,
    (tgfadrcstr1110Entity) => tgfadrcstr1110Entity.codemp2,
  )
  tgfadrcstr1s4: Tgfadrcstr1110Entity[];

  @OneToMany(
    () => Tgfadrcstr1120Entity,
    (tgfadrcstr1120Entity) => tgfadrcstr1120Entity.codemp2,
  )
  tgfadrcstr1s5: Tgfadrcstr1120Entity[];

  @OneToMany(
    () => Tgfadrcstr1200Entity,
    (tgfadrcstr1200Entity) => tgfadrcstr1200Entity.codemp2,
  )
  tgfadrcstr1s6: Tgfadrcstr1200Entity[];

  @OneToMany(
    () => Tgfadrcstr1210Entity,
    (tgfadrcstr1210Entity) => tgfadrcstr1210Entity.codemp2,
  )
  tgfadrcstr1s7: Tgfadrcstr1210Entity[];

  @OneToMany(
    () => Tgfadrcstr1220Entity,
    (tgfadrcstr1220Entity) => tgfadrcstr1220Entity.codemp2,
  )
  tgfadrcstr1s8: Tgfadrcstr1220Entity[];

  @OneToMany(
    () => Tgfadrcstr1300Entity,
    (tgfadrcstr1300Entity) => tgfadrcstr1300Entity.codemp2,
  )
  tgfadrcstr1s9: Tgfadrcstr1300Entity[];

  @OneToMany(
    () => Tgfadrcstr1310Entity,
    (tgfadrcstr1310Entity) => tgfadrcstr1310Entity.codemp2,
  )
  tgfadrcstr110: Tgfadrcstr1310Entity[];

  @OneToMany(
    () => Tgfadrcstr1320Entity,
    (tgfadrcstr1320Entity) => tgfadrcstr1320Entity.codemp2,
  )
  tgfadrcstr111: Tgfadrcstr1320Entity[];

  @OneToMany(
    () => Tgfadrcstr1400Entity,
    (tgfadrcstr1400Entity) => tgfadrcstr1400Entity.codemp2,
  )
  tgfadrcstr112: Tgfadrcstr1400Entity[];

  @OneToMany(
    () => Tgfadrcstr1410Entity,
    (tgfadrcstr1410Entity) => tgfadrcstr1410Entity.codemp2,
  )
  tgfadrcstr113: Tgfadrcstr1410Entity[];

  @OneToMany(
    () => Tgfadrcstr1420Entity,
    (tgfadrcstr1420Entity) => tgfadrcstr1420Entity.codemp2,
  )
  tgfadrcstr114: Tgfadrcstr1420Entity[];

  @OneToMany(
    () => Tgfadrcstr1500Entity,
    (tgfadrcstr1500Entity) => tgfadrcstr1500Entity.codemp2,
  )
  tgfadrcstr115: Tgfadrcstr1500Entity[];

  @OneToMany(
    () => Tgfadrcstr1510Entity,
    (tgfadrcstr1510Entity) => tgfadrcstr1510Entity.codemp2,
  )
  tgfadrcstr116: Tgfadrcstr1510Entity[];

  @OneToMany(
    () => Tgfadrcstr1520Entity,
    (tgfadrcstr1520Entity) => tgfadrcstr1520Entity.codemp2,
  )
  tgfadrcstr117: Tgfadrcstr1520Entity[];

  @OneToMany(
    () => Tgfadrcstr1999Entity,
    (tgfadrcstr1999Entity) => tgfadrcstr1999Entity.codemp2,
  )
  tgfadrcstr118: Tgfadrcstr1999Entity[];

  @OneToMany(
    () => Tgfadrcstr9000Entity,
    (tgfadrcstr9000Entity) => tgfadrcstr9000Entity.codemp2,
  )
  tgfadrcstr9s: Tgfadrcstr9000Entity[];

  @OneToMany(
    () => Tgfadrcstr9999Entity,
    (tgfadrcstr9999Entity) => tgfadrcstr9999Entity.codemp2,
  )
  tgfadrcstr9s2: Tgfadrcstr9999Entity[];

  @OneToMany(() => TgfageEntity, (tgfageEntity) => tgfageEntity.codemp)
  tgfages: TgfageEntity[];

  @OneToMany(() => TgfajaEntity, (tgfajaEntity) => tgfajaEntity.codemp2)
  tgfajas: TgfajaEntity[];

  @OneToMany(() => TgfajdEntity, (tgfajdEntity) => tgfajdEntity.codemp2)
  tgfajds: TgfajdEntity[];

  @OneToMany(() => TgfarcstEntity, (tgfarcstEntity) => tgfarcstEntity.codemp2)
  tgfarcsts: TgfarcstEntity[];

  @OneToMany(() => TgfarmEntity, (tgfarmEntity) => tgfarmEntity.codemp2)
  tgfarms: TgfarmEntity[];

  @OneToMany(() => Tgfb460Entity, (tgfb460Entity) => tgfb460Entity.codemp2)
  tgfbs: Tgfb460Entity[];

  @OneToMany(() => TgfbenEntity, (tgfbenEntity) => tgfbenEntity.codemp)
  tgfbens: TgfbenEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.codemp2)
  tgfcabs2: TgfcabEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.codempnegoc)
  tgfcabs3: TgfcabEntity[];

  @OneToMany(() => TgfcanEntity, (tgfcanEntity) => tgfcanEntity.codemp2)
  tgfcans: TgfcanEntity[];

  @OneToMany(() => TgfcasEntity, (tgfcasEntity) => tgfcasEntity.codemp2)
  tgfcas: TgfcasEntity[];

  @OneToMany(() => Tgfcat42Entity, (tgfcat42Entity) => tgfcat42Entity.codemp2)
  tgfcats: Tgfcat42Entity[];

  @OneToMany(() => TgfccaiEntity, (tgfccaiEntity) => tgfccaiEntity.codemp)
  tgfccais: TgfccaiEntity[];

  @OneToOne(() => TgfcfrastEntity, (tgfcfrastEntity) => tgfcfrastEntity.codemp2)
  tgfcfrast: TgfcfrastEntity;

  @OneToMany(() => TgfcgmEntity, (tgfcgmEntity) => tgfcgmEntity.codemp2)
  tgfcgms: TgfcgmEntity[];

  @OneToMany(() => TgfcmpEntity, (tgfcmpEntity) => tgfcmpEntity.codemp)
  tgfcmps: TgfcmpEntity[];

  @OneToMany(() => TgfcnfEntity, (tgfcnfEntity) => tgfcnfEntity.codemp2)
  tgfcnfs: TgfcnfEntity[];

  @OneToMany(() => TgfcotEntity, (tgfcotEntity) => tgfcotEntity.codemp)
  tgfcots: TgfcotEntity[];

  @OneToMany(() => TgfcraEntity, (tgfcraEntity) => tgfcraEntity.codemp2)
  tgfcras: TgfcraEntity[];

  @OneToMany(() => TgfcredEntity, (tgfcredEntity) => tgfcredEntity.codemp)
  tgfcreds: TgfcredEntity[];

  @OneToMany(
    () => TgfcrestcomstEntity,
    (tgfcrestcomstEntity) => tgfcrestcomstEntity.codemp,
  )
  tgfcrestcomsts: TgfcrestcomstEntity[];

  @OneToMany(() => TgfcriEntity, (tgfcriEntity) => tgfcriEntity.codemp)
  tgfcris: TgfcriEntity[];

  @OneToMany(() => TgfctbEntity, (tgfctbEntity) => tgfctbEntity.codemp)
  tgfctbs: TgfctbEntity[];

  @OneToMany(() => TgfcteEntity, (tgfcteEntity) => tgfcteEntity.codemp2)
  tgfctes: TgfcteEntity[];

  @OneToMany(() => TgfctentEntity, (tgfctentEntity) => tgfctentEntity.codemp2)
  tgfctents: TgfctentEntity[];

  @OneToMany(() => TgfcusEntity, (tgfcusEntity) => tgfcusEntity.codemp2)
  tgfcuses: TgfcusEntity[];

  @OneToMany(() => TgfdctfEntity, (tgfdctfEntity) => tgfdctfEntity.codemp2)
  tgfdctfs: TgfdctfEntity[];

  @OneToMany(
    () => Tgfdctfr10Entity,
    (tgfdctfr10Entity) => tgfdctfr10Entity.codemp2,
  )
  tgfdctfrs: Tgfdctfr10Entity[];

  @OneToMany(
    () => Tgfdctfr11Entity,
    (tgfdctfr11Entity) => tgfdctfr11Entity.codemp2,
  )
  tgfdctfrs2: Tgfdctfr11Entity[];

  @OneToMany(
    () => Tgfdctfr12Entity,
    (tgfdctfr12Entity) => tgfdctfr12Entity.codemp2,
  )
  tgfdctfrs3: Tgfdctfr12Entity[];

  @OneToMany(
    () => Tgfdctfr14Entity,
    (tgfdctfr14Entity) => tgfdctfr14Entity.codemp2,
  )
  tgfdctfrs4: Tgfdctfr14Entity[];

  @OneToMany(() => TgfdfoEntity, (tgfdfoEntity) => tgfdfoEntity.codemp2)
  tgfdfos: TgfdfoEntity[];

  @OneToMany(
    () => TgfdimescEntity,
    (tgfdimescEntity) => tgfdimescEntity.codemp2,
  )
  tgfdimescs: TgfdimescEntity[];

  @OneToMany(() => TgfdirfEntity, (tgfdirfEntity) => tgfdirfEntity.codemp2)
  tgfdirfs: TgfdirfEntity[];

  @OneToMany(
    () => TgfdirfbasebpfdecEntity,
    (tgfdirfbasebpfdecEntity) => tgfdirfbasebpfdecEntity.codemp2,
  )
  tgfdirfbasebpfdecs: TgfdirfbasebpfdecEntity[];

  @OneToMany(
    () => TgfdirfbasebpjdecEntity,
    (tgfdirfbasebpjdecEntity) => tgfdirfbasebpjdecEntity.codemp2,
  )
  tgfdirfbasebpjdecs: TgfdirfbasebpjdecEntity[];

  @OneToMany(
    () => TgfdirfbpfdecEntity,
    (tgfdirfbpfdecEntity) => tgfdirfbpfdecEntity.codemp2,
  )
  tgfdirfbpfdecs: TgfdirfbpfdecEntity[];

  @OneToMany(
    () => TgfdirfbpjdecEntity,
    (tgfdirfbpjdecEntity) => tgfdirfbpjdecEntity.codemp2,
  )
  tgfdirfbpjdecs: TgfdirfbpjdecEntity[];

  @OneToMany(
    () => TgfdirfdecpjEntity,
    (tgfdirfdecpjEntity) => tgfdirfdecpjEntity.codemp2,
  )
  tgfdirfdecpjs: TgfdirfdecpjEntity[];

  @OneToMany(
    () => TgfdirfidrecEntity,
    (tgfdirfidrecEntity) => tgfdirfidrecEntity.codemp2,
  )
  tgfdirfidrecs: TgfdirfidrecEntity[];

  @OneToMany(
    () => TgfdirfpfrtirfEntity,
    (tgfdirfpfrtirfEntity) => tgfdirfpfrtirfEntity.codemp2,
  )
  tgfdirfpfrtirfs: TgfdirfpfrtirfEntity[];

  @OneToMany(
    () => TgfdirfpfrtpoEntity,
    (tgfdirfpfrtpoEntity) => tgfdirfpfrtpoEntity.codemp2,
  )
  tgfdirfpfrtpos: TgfdirfpfrtpoEntity[];

  @OneToMany(
    () => TgfdirfpfrtrtEntity,
    (tgfdirfpfrtrtEntity) => tgfdirfpfrtrtEntity.codemp2,
  )
  tgfdirfpfrtrts: TgfdirfpfrtrtEntity[];

  @OneToMany(
    () => TgfdirfpjrtirfEntity,
    (tgfdirfpjrtirfEntity) => tgfdirfpjrtirfEntity.codemp2,
  )
  tgfdirfpjrtirfs: TgfdirfpjrtirfEntity[];

  @OneToMany(
    () => TgfdirfpjrtrtEntity,
    (tgfdirfpjrtrtEntity) => tgfdirfpjrtrtEntity.codemp2,
  )
  tgfdirfpjrtrts: TgfdirfpjrtrtEntity[];

  @OneToMany(
    () => TgfdirfrespoEntity,
    (tgfdirfrespoEntity) => tgfdirfrespoEntity.codemp2,
  )
  tgfdirfrespos: TgfdirfrespoEntity[];

  @OneToMany(() => TgfdmgEntity, (tgfdmgEntity) => tgfdmgEntity.codemp2)
  tgfdmgs: TgfdmgEntity[];

  @OneToMany(() => TgfdrcstEntity, (tgfdrcstEntity) => tgfdrcstEntity.codemp2)
  tgfdrcsts: TgfdrcstEntity[];

  @OneToMany(() => TgfdvcabEntity, (tgfdvcabEntity) => tgfdvcabEntity.codemp2)
  tgfdvcabs: TgfdvcabEntity[];

  @OneToMany(() => Tgfe340Entity, (tgfe340Entity) => tgfe340Entity.codemp2)
  tgfes: Tgfe340Entity[];

  @OneToMany(() => Tgfe350Entity, (tgfe350Entity) => tgfe350Entity.codemp2)
  tgfes2: Tgfe350Entity[];

  @OneToMany(
    () => TgfefdcerrEntity,
    (tgfefdcerrEntity) => tgfefdcerrEntity.codemp2,
  )
  tgfefdcerrs: TgfefdcerrEntity[];

  @OneToMany(
    () => Tgfefdf1250Entity,
    (tgfefdf1250Entity) => tgfefdf1250Entity.codemp2,
  )
  tgfefdf1s: Tgfefdf1250Entity[];

  @OneToMany(
    () => Tgfefdf1255Entity,
    (tgfefdf1255Entity) => tgfefdf1255Entity.codemp2,
  )
  tgfefdf1s2: Tgfefdf1255Entity[];

  @OneToMany(
    () => Tgfefdfc180Entity,
    (tgfefdfc180Entity) => tgfefdfc180Entity.codemp2,
  )
  tgfefdfcs: Tgfefdfc180Entity[];

  @OneToMany(
    () => Tgfefdfc181Entity,
    (tgfefdfc181Entity) => tgfefdfc181Entity.codemp2,
  )
  tgfefdfcs2: Tgfefdfc181Entity[];

  @OneToMany(
    () => Tgfefdfc185Entity,
    (tgfefdfc185Entity) => tgfefdfc185Entity.codemp2,
  )
  tgfefdfcs3: Tgfefdfc185Entity[];

  @OneToMany(
    () => Tgfefdfc186Entity,
    (tgfefdfc186Entity) => tgfefdfc186Entity.codemp2,
  )
  tgfefdfcs4: Tgfefdfc186Entity[];

  @OneToMany(
    () => Tgfefdfh030Entity,
    (tgfefdfh030Entity) => tgfefdfh030Entity.codemp2,
  )
  tgfefdfhs: Tgfefdfh030Entity[];

  @OneToMany(
    () => Tgfefdfk260Entity,
    (tgfefdfk260Entity) => tgfefdfk260Entity.codemp2,
  )
  tgfefdfks: Tgfefdfk260Entity[];

  @OneToMany(
    () => Tgfefdfk265Entity,
    (tgfefdfk265Entity) => tgfefdfk265Entity.codemp2,
  )
  tgfefdfks2: Tgfefdfk265Entity[];

  @OneToMany(() => TgfemmEntity, (tgfemmEntity) => tgfemmEntity.codemp2)
  tgfemms: TgfemmEntity[];

  @ManyToOne(() => TgftppEntity, (tgftppEntity) => tgftppEntity.tgfemps)
  @JoinColumn([{ name: 'CODTIPPARC', referencedColumnName: 'codtipparc' }])
  codtipparc: TgftppEntity;

  @ManyToOne(() => TsirfeEntity, (tsirfeEntity) => tsirfeEntity.tgfemps)
  @JoinColumn([{ name: 'NURFECARTACORR', referencedColumnName: 'nurfe' }])
  nurfecartacorr: TsirfeEntity;

  @ManyToOne(() => TsirfeEntity, (tsirfeEntity) => tsirfeEntity.tgfemps2)
  @JoinColumn([{ name: 'NURFE', referencedColumnName: 'nurfe' }])
  nurfe: TsirfeEntity;

  @ManyToOne(() => TgfntaEntity, (tgfntaEntity) => tgfntaEntity.tgfemps)
  @JoinColumn([{ name: 'CODTAB', referencedColumnName: 'codtab' }])
  codtab: TgfntaEntity;

  @ManyToOne(() => TgfntaEntity, (tgfntaEntity) => tgfntaEntity.tgfemps2)
  @JoinColumn([{ name: 'CODTABCALC', referencedColumnName: 'codtab' }])
  codtabcalc: TgfntaEntity;

  @ManyToOne(() => TsimemEntity, (tsimemEntity) => tsimemEntity.tgfemps)
  @JoinColumn([{ name: 'CODMODEMAILNFE', referencedColumnName: 'codmodelo' }])
  codmodemailnfe: TsimemEntity;

  @ManyToOne(() => TgffdaEntity, (tgffdaEntity) => tgffdaEntity.tgfemps)
  @JoinColumn([{ name: 'CODFORDIFALIQ', referencedColumnName: 'codform' }])
  codfordifaliq: TgffdaEntity;

  @ManyToOne(() => TsismtpEntity, (tsismtpEntity) => tsismtpEntity.tgfemps)
  @JoinColumn([{ name: 'CODSMTP', referencedColumnName: 'codsmtp' }])
  codsmtp: TsismtpEntity;

  @ManyToOne(() => TgfmonEntity, (tgfmonEntity) => tgfmonEntity.tgfemps)
  @JoinColumn([{ name: 'CODMODDACTE', referencedColumnName: 'codmodnf' }])
  codmoddacte: TgfmonEntity;

  @ManyToOne(() => TgfmonEntity, (tgfmonEntity) => tgfmonEntity.tgfemps2)
  @JoinColumn([
    { name: 'CODMODDANFECONTINGENCIA', referencedColumnName: 'codmodnf' },
  ])
  codmoddanfecontingencia: TgfmonEntity;

  @ManyToOne(() => TgfmonEntity, (tgfmonEntity) => tgfmonEntity.tgfemps3)
  @JoinColumn([{ name: 'CODMODNFCESIMPL', referencedColumnName: 'codmodnf' }])
  codmodnfcesimpl: TgfmonEntity;

  @ManyToOne(() => TgfmonEntity, (tgfmonEntity) => tgfmonEntity.tgfemps4)
  @JoinColumn([{ name: 'CODMODNFCECOMPL', referencedColumnName: 'codmodnf' }])
  codmodnfcecompl: TgfmonEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfemps)
  @JoinColumn([{ name: 'CODEMPMATRIZGNRE', referencedColumnName: 'codemp' }])
  codempmatrizgnre: TgfempEntity;

  @OneToMany(
    () => TgfempEntity,
    (tgfempEntity) => tgfempEntity.codempmatrizgnre,
  )
  tgfemps: TgfempEntity[];

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfemps2)
  @JoinColumn([{ name: 'CODEMPMATRIZEFD', referencedColumnName: 'codemp' }])
  codempmatrizefd2: TgfempEntity;

  @OneToMany(
    () => TgfempEntity,
    (tgfempEntity) => tgfempEntity.codempmatrizefd2,
  )
  tgfemps2: TgfempEntity[];

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfemps3)
  @JoinColumn([{ name: 'CODEMPMATRIZNFSE', referencedColumnName: 'codemp' }])
  codempmatriznfse: TgfempEntity;

  @OneToMany(
    () => TgfempEntity,
    (tgfempEntity) => tgfempEntity.codempmatriznfse,
  )
  tgfemps3: TgfempEntity[];

  @ManyToOne(() => TgfmonEntity, (tgfmonEntity) => tgfmonEntity.tgfemps5)
  @JoinColumn([{ name: 'CODMODDANFE', referencedColumnName: 'codmodnf' }])
  codmoddanfe: TgfmonEntity;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgfemps)
  @JoinColumn([{ name: 'CODENDSOBRA', referencedColumnName: 'codend' }])
  codendsobra: TgwendEntity;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgfemps2)
  @JoinColumn([{ name: 'CODENDWMS', referencedColumnName: 'codend' }])
  codendwms: TgwendEntity;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgfemps3)
  @JoinColumn([{ name: 'WMSCODENDGAR', referencedColumnName: 'codend' }])
  wmscodendgar: TgwendEntity;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgfemps4)
  @JoinColumn([{ name: 'CODENDRETEXP', referencedColumnName: 'codend' }])
  codendretexp: TgwendEntity;

  @ManyToOne(() => TgfhbcEntity, (tgfhbcEntity) => tgfhbcEntity.tgfemps)
  @JoinColumn([{ name: 'CODLANCBCOPAG', referencedColumnName: 'codlanc' }])
  codlancbcopag: TgfhbcEntity;

  @ManyToOne(() => TgfhbcEntity, (tgfhbcEntity) => tgfhbcEntity.tgfemps2)
  @JoinColumn([{ name: 'CODLANCBCOREC', referencedColumnName: 'codlanc' }])
  codlancbcorec: TgfhbcEntity;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgfemps5)
  @JoinColumn([{ name: 'CODENDARMINDEF', referencedColumnName: 'codend' }])
  codendarmindef: TgwendEntity;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgfemps6)
  @JoinColumn([{ name: 'CODENDAVARIA', referencedColumnName: 'codend' }])
  codendavaria: TgwendEntity;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgfemps7)
  @JoinColumn([{ name: 'CODENDDIVERG', referencedColumnName: 'codend' }])
  codenddiverg: TgwendEntity;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgfemps8)
  @JoinColumn([{ name: 'CODENDPERDA', referencedColumnName: 'codend' }])
  codendperda: TgwendEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tgfemps)
  @JoinColumn([{ name: 'CODCTACTBMULT', referencedColumnName: 'codctactb' }])
  codctactbmult: TcbplaEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgfemps)
  @JoinColumn([{ name: 'CODLOCALTERC', referencedColumnName: 'codlocal' }])
  codlocalterc: TgflocEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgfemps2)
  @JoinColumn([{ name: 'LOCALESP', referencedColumnName: 'codlocal' }])
  localesp: TgflocEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgfemps3)
  @JoinColumn([{ name: 'WMSLOCALAJEST', referencedColumnName: 'codlocal' }])
  wmslocalajest: TgflocEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgfemps4)
  @JoinColumn([{ name: 'LOCALPAD', referencedColumnName: 'codlocal' }])
  localpad: TgflocEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tgfemps2)
  @JoinColumn([{ name: 'CODCTACTB_2', referencedColumnName: 'codctactb' }])
  codctactb: TcbplaEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tgfemps3)
  @JoinColumn([{ name: 'CODCTACTB_1', referencedColumnName: 'codctactb' }])
  codctactb_2: TcbplaEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tgfemps4)
  @JoinColumn([{ name: 'CODCTACTBDESC', referencedColumnName: 'codctactb' }])
  codctactbdesc: TcbplaEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tgfemps5)
  @JoinColumn([{ name: 'CODCTACTB_3', referencedColumnName: 'codctactb' }])
  codctactb_3: TcbplaEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tgfemps6)
  @JoinColumn([{ name: 'CODCTACTBJUROS', referencedColumnName: 'codctactb' }])
  codctactbjuros: TcbplaEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfemps)
  @JoinColumn([{ name: 'CODPARCCTB', referencedColumnName: 'codparc' }])
  codparcctb: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfemps2)
  @JoinColumn([{ name: 'CODPARCNFCE', referencedColumnName: 'codparc' }])
  codparcnfce: TgfparEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tgfemps)
  @JoinColumn([{ name: 'EMPDESTINOWMS', referencedColumnName: 'codemp' }])
  empdestinowms: TsiempEntity;

  @OneToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tgfemp)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;

  @ManyToOne(() => TgfforEntity, (tgfforEntity) => tgfforEntity.tgfemps)
  @JoinColumn([{ name: 'CODFORMPREC', referencedColumnName: 'codformprec' }])
  codformprec: TgfforEntity;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tgfemps)
  @JoinColumn([{ name: 'CODCTABCOIPAD', referencedColumnName: 'codctabcoint' }])
  codctabcoipad: TsictaEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tgfemps)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;

  @ManyToOne(() => TsirfeEntity, (tsirfeEntity) => tsirfeEntity.tgfemps3)
  @JoinColumn([{ name: 'NURFECARTACORRCTE', referencedColumnName: 'nurfe' }])
  nurfecartacorrcte: TsirfeEntity;

  @ManyToOne(() => TsirfeEntity, (tsirfeEntity) => tsirfeEntity.tgfemps4)
  @JoinColumn([{ name: 'MODETQVOL', referencedColumnName: 'nurfe' }])
  modetqvol: TsirfeEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfemps2)
  @JoinColumn([{ name: 'NOTAENTSOBRAWMS', referencedColumnName: 'nunota' }])
  notaentsobrawms: TgfcabEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfemps3)
  @JoinColumn([{ name: 'NOTASAIAJUSTBEM', referencedColumnName: 'nunota' }])
  notasaiajustbem: TgfcabEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfemps4)
  @JoinColumn([{ name: 'NOTASAIPERDAWMS', referencedColumnName: 'nunota' }])
  notasaiperdawms: TgfcabEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfemps5)
  @JoinColumn([{ name: 'NOTAMODELODAGENDA', referencedColumnName: 'nunota' }])
  notamodelodagenda: TgfcabEntity;

  @OneToMany(() => TgfempsnEntity, (tgfempsnEntity) => tgfempsnEntity.codemp2)
  tgfempsns: TgfempsnEntity[];

  @OneToMany(() => TgfenaEntity, (tgfenaEntity) => tgfenaEntity.codemp2)
  tgfenas: TgfenaEntity[];

  @OneToMany(() => TgfepiEntity, (tgfepiEntity) => tgfepiEntity.codemp2)
  tgfepis: TgfepiEntity[];

  @OneToMany(() => TgfestEntity, (tgfestEntity) => tgfestEntity.codemp2)
  tgfests: TgfestEntity[];

  @OneToMany(() => TgffadEntity, (tgffadEntity) => tgffadEntity.codemp2)
  tgffads: TgffadEntity[];

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.codimovelrural)
  tgffins: TgffinEntity[];

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.codemp2)
  tgffins2: TgffinEntity[];

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.codempbaixa)
  tgffins3: TgffinEntity[];

  @OneToMany(() => TgfgemEntity, (tgfgemEntity) => tgfgemEntity.codemp2)
  tgfgems: TgfgemEntity[];

  @OneToMany(() => TgfgiastEntity, (tgfgiastEntity) => tgfgiastEntity.codemp2)
  tgfgiasts: TgfgiastEntity[];

  @OneToMany(() => TgfgimEntity, (tgfgimEntity) => tgfgimEntity.codemp2)
  tgfgims: TgfgimEntity[];

  @OneToMany(() => TgfiaaEntity, (tgfiaaEntity) => tgfiaaEntity.codemp2)
  tgfiaas: TgfiaaEntity[];

  @OneToMany(() => TgfiffEntity, (tgfiffEntity) => tgfiffEntity.codemp)
  tgfiffs: TgfiffEntity[];

  @OneToMany(() => TgfinuEntity, (tgfinuEntity) => tgfinuEntity.codemp2)
  tgfinus: TgfinuEntity[];

  @OneToMany(() => TgfinujEntity, (tgfinujEntity) => tgfinujEntity.codemp)
  tgfinujs: TgfinujEntity[];

  @OneToMany(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.codemp2)
  tgfites: TgfiteEntity[];

  @OneToMany(() => TgfitsEntity, (tgfitsEntity) => tgfitsEntity.codemp2)
  tgfits: TgfitsEntity[];

  @OneToMany(
    () => TgflcdprtercEntity,
    (tgflcdprtercEntity) => tgflcdprtercEntity.codemp2,
  )
  tgflcdprtercs: TgflcdprtercEntity[];

  @OneToMany(() => TgflitEntity, (tgflitEntity) => tgflitEntity.codemp2)
  tgflits: TgflitEntity[];

  @OneToMany(() => TgflotEntity, (tgflotEntity) => tgflotEntity.codemp2)
  tgflots: TgflotEntity[];

  @OneToMany(() => TgfmepiEntity, (tgfmepiEntity) => tgfmepiEntity.codemp2)
  tgfmepis: TgfmepiEntity[];

  @OneToMany(() => TgfmfciEntity, (tgfmfciEntity) => tgfmfciEntity.codemp2)
  tgfmfcis: TgfmfciEntity[];

  @OneToMany(() => TgfmixEntity, (tgfmixEntity) => tgfmixEntity.codemp2)
  tgfmixes: TgfmixEntity[];

  @OneToMany(() => TgfmmsEntity, (tgfmmsEntity) => tgfmmsEntity.codemp2)
  tgfmms: TgfmmsEntity[];

  @OneToMany(
    () => TgfnatpcempEntity,
    (tgfnatpcempEntity) => tgfnatpcempEntity.codemp2,
  )
  tgfnatpcemps: TgfnatpcempEntity[];

  @OneToMany(() => TgfnfentEntity, (tgfnfentEntity) => tgfnfentEntity.codemp2)
  tgfnfents: TgfnfentEntity[];

  @OneToMany(() => TgfocrEntity, (tgfocrEntity) => tgfocrEntity.codemp)
  tgfocrs: TgfocrEntity[];

  @OneToMany(() => TgfodpEntity, (tgfodpEntity) => tgfodpEntity.codemp)
  tgfodps: TgfodpEntity[];

  @OneToMany(() => TgfoirEntity, (tgfoirEntity) => tgfoirEntity.codemp2)
  tgfoirs: TgfoirEntity[];

  @OneToMany(() => TgfordEntity, (tgfordEntity) => tgfordEntity.codemp2)
  tgfords: TgfordEntity[];

  @OneToMany(() => TgfpaemEntity, (tgfpaemEntity) => tgfpaemEntity.codemp2)
  tgfpaems: TgfpaemEntity[];

  @OneToMany(() => TgfpcaEntity, (tgfpcaEntity) => tgfpcaEntity.codemp)
  tgfpcas: TgfpcaEntity[];

  @OneToMany(() => TgfpdvEntity, (tgfpdvEntity) => tgfpdvEntity.codemp)
  tgfpdvs: TgfpdvEntity[];

  @ManyToMany(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfemps3)
  tgfpars: TgfparEntity[];

  @OneToMany(() => TgfpemEntity, (tgfpemEntity) => tgfpemEntity.codemp2)
  tgfpems: TgfpemEntity[];

  @OneToMany(() => TgfpmpeEntity, (tgfpmpeEntity) => tgfpmpeEntity.codemp2)
  tgfpmpes: TgfpmpeEntity[];

  @OneToMany(() => TgfpptEntity, (tgfpptEntity) => tgfpptEntity.codemp)
  tgfppts: TgfpptEntity[];

  @OneToMany(() => TgfprjEntity, (tgfprjEntity) => tgfprjEntity.codemp2)
  tgfprjs: TgfprjEntity[];

  @OneToMany(() => TgfqprEntity, (tgfqprEntity) => tgfqprEntity.codemp2)
  tgfqprs: TgfqprEntity[];

  @OneToMany(() => TgfrdfEntity, (tgfrdfEntity) => tgfrdfEntity.codemp)
  tgfrdfs: TgfrdfEntity[];

  @OneToMany(() => TgfreclasEntity, (tgfreclasEntity) => tgfreclasEntity.codemp)
  tgfreclas: TgfreclasEntity[];

  @OneToMany(() => TgfrgmEntity, (tgfrgmEntity) => tgfrgmEntity.codemp2)
  tgfrgms: TgfrgmEntity[];

  @OneToMany(() => TgfrntEntity, (tgfrntEntity) => tgfrntEntity.codemp2)
  tgfrnts: TgfrntEntity[];

  @OneToMany(() => TgfrstEntity, (tgfrstEntity) => tgfrstEntity.codemp2)
  tgfrsts: TgfrstEntity[];

  @OneToMany(() => TgfscrEntity, (tgfscrEntity) => tgfscrEntity.codemp)
  tgfscrs: TgfscrEntity[];

  @OneToMany(() => TgfsolEntity, (tgfsolEntity) => tgfsolEntity.codemp)
  tgfsols: TgfsolEntity[];

  @ManyToMany(() => TgfstmvEntity, (tgfstmvEntity) => tgfstmvEntity.tgfemps)
  @JoinTable({
    name: 'TGFSTMVE',
    joinColumns: [{ name: 'CODEMP', referencedColumnName: 'codemp' }],
    inverseJoinColumns: [
      { name: 'NROUNICO', referencedColumnName: 'nrounico' },
    ],
    schema: 'SANKHYA',
  })
  tgfstmvs: TgfstmvEntity[];

  @OneToMany(
    () => TgfstmvproEntity,
    (tgfstmvproEntity) => tgfstmvproEntity.codemp2,
  )
  tgfstmvpros: TgfstmvproEntity[];

  @OneToMany(() => TgftaaEntity, (tgftaaEntity) => tgftaaEntity.codemp2)
  tgftaas: TgftaaEntity[];

  @OneToMany(() => TgftnaEntity, (tgftnaEntity) => tgftnaEntity.codemp2)
  tgftnas: TgftnaEntity[];

  @OneToMany(
    () => TgftnfrastEntity,
    (tgftnfrastEntity) => tgftnfrastEntity.codemp2,
  )
  tgftnfrasts: TgftnfrastEntity[];

  @OneToMany(() => TgftrcEntity, (tgftrcEntity) => tgftrcEntity.codempbaixaorig)
  tgftrcs: TgftrcEntity[];

  @OneToMany(() => TgfvceEntity, (tgfvceEntity) => tgfvceEntity.codemp2)
  tgfvces: TgfvceEntity[];

  @OneToMany(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.codemp)
  tgfvens: TgfvenEntity[];

  @OneToMany(() => TgmaiEntity, (tgmaiEntity) => tgmaiEntity.codemp)
  tgmais: TgmaiEntity[];

  @OneToMany(() => TgwcteEntity, (tgwcteEntity) => tgwcteEntity.codemp2)
  tgwctes: TgwcteEntity[];

  @OneToMany(() => TgwendEntity, (tgwendEntity) => tgwendEntity.codemp2)
  tgwends: TgwendEntity[];

  @OneToMany(() => TgwenpEntity, (tgwenpEntity) => tgwenpEntity.codemp)
  tgwenps: TgwenpEntity[];

  @OneToMany(() => TgwepaEntity, (tgwepaEntity) => tgwepaEntity.codemp2)
  tgwepas: TgwepaEntity[];

  @OneToMany(() => TgweplEntity, (tgweplEntity) => tgweplEntity.codemp2)
  tgwepls: TgweplEntity[];

  @OneToMany(() => TgwestEntity, (tgwestEntity) => tgwestEntity.codemp2)
  tgwests: TgwestEntity[];

  @OneToMany(() => TgwitrEntity, (tgwitrEntity) => tgwitrEntity.codemp)
  tgwitrs: TgwitrEntity[];

  @OneToMany(() => TgwittEntity, (tgwittEntity) => tgwittEntity.codemp)
  tgwitts: TgwittEntity[];

  @OneToMany(() => TgwivrEntity, (tgwivrEntity) => tgwivrEntity.codemp)
  tgwivrs: TgwivrEntity[];

  @OneToMany(() => TgwivtEntity, (tgwivtEntity) => tgwivtEntity.codemp)
  tgwivts: TgwivtEntity[];

  @OneToMany(() => TgwlceEntity, (tgwlceEntity) => tgwlceEntity.codemp2)
  tgwlces: TgwlceEntity[];

  @OneToMany(() => TgwrplEntity, (tgwrplEntity) => tgwrplEntity.codemp)
  tgwrpls: TgwrplEntity[];

  @OneToMany(() => TripempEntity, (tripempEntity) => tripempEntity.codemp2)
  tripemps: TripempEntity[];

  @OneToMany(() => TsifatEntity, (tsifatEntity) => tsifatEntity.codemp2)
  tsifats: TsifatEntity[];

  @OneToMany(() => TsiobcEntity, (tsiobcEntity) => tsiobcEntity.codemp)
  tsiobcs: TsiobcEntity[];
}
