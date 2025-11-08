import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { AudittfpageEntity } from './aUDITTFPAGE.entity';
import { AudittfpbasEntity } from './aUDITTFPBAS.entity';
import { AudittfpferEntity } from './aUDITTFPFER.entity';
import { AudittfpfolEntity } from './aUDITTFPFOL.entity';
import { AudittfpmovEntity } from './aUDITTFPMOV.entity';
import { TfpabeEntity } from './tFPABE.entity';
import { TfpacuEntity } from './tFPACU.entity';
import { TfpageEntity } from './tFPAGE.entity';
import { TfpambEntity } from './tFPAMB.entity';
import { TfpaudEntity } from './tFPAUD.entity';
import { TfpaudlogEntity } from './tFPAUDLOG.entity';
import { TfpbasEntity } from './tFPBAS.entity';
import { TfpbastesteEntity } from './tFPBASTESTE.entity';
import { TfpcceEntity } from './tFPCCE.entity';
import { TfpcevEntity } from './tFPCEV.entity';
import { TfpcfeEntity } from './tFPCFE.entity';
import { TfpcgeEntity } from './tFPCGE.entity';
import { TfpchqEntity } from './tFPCHQ.entity';
import { TfpcomEntity } from './tFPCOM.entity';
import { TfpcsiEntity } from './tFPCSI.entity';
import { TfpdedEntity } from './tFPDED.entity';
import { TfpdpeEntity } from './tFPDPE.entity';
import { TfpdpoEntity } from './tFPDPO.entity';
import { TfppreEntity } from './tFPPRE.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TcbplaEntity } from './tCBPLA.entity';
import { TfppssEntity } from './tFPPSS.entity';
import { TfpptprEntity } from './tFPPTPR.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TsictaEntity } from './tSICTA.entity';
import { TfpfisEntity } from './tFPFIS.entity';
import { TgpgslEntity } from './tGPGSL.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TfpncoEntity } from './tFPNCO.entity';
import { TcbhisEntity } from './tCBHIS.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TfpenedEntity } from './tFPENED.entity';
import { TfpeqpEntity } from './tFPEQP.entity';
import { TfpesoEntity } from './tFPESO.entity';
import { TfpfceEntity } from './tFPFCE.entity';
import { TfpfdpEntity } from './tFPFDP.entity';
import { TfpfdsEntity } from './tFPFDS.entity';
import { TfpfolEntity } from './tFPFOL.entity';
import { TfpfoltesteEntity } from './tFPFOLTESTE.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpgpsEntity } from './tFPGPS.entity';
import { TfpgtfEntity } from './tFPGTF.entity';
import { TfphfuEntity } from './tFPHFU.entity';
import { TfphreEntity } from './tFPHRE.entity';
import { TfphsaEntity } from './tFPHSA.entity';
import { TfphtrEntity } from './tFPHTR.entity';
import { TfpltrEntity } from './tFPLTR.entity';
import { TfpmovEntity } from './tFPMOV.entity';
import { TfpmovantEntity } from './tFPMOVANT.entity';
import { TfpocoEntity } from './tFPOCO.entity';
import { TfpocorjsEntity } from './tFPOCORJS.entity';
import { TfpponEntity } from './tFPPON.entity';
import { TfpponraioEntity } from './tFPPONRAIO.entity';
import { TfppseEntity } from './tFPPSE.entity';
import { TfppubEntity } from './tFPPUB.entity';
import { TfprbrEntity } from './tFPRBR.entity';
import { TfprelEntity } from './tFPREL.entity';
import { TfpreqadmdpdEntity } from './tFPREQADMDPD.entity';
import { TfprgprEntity } from './tFPRGPR.entity';
import { TfprppsEntity } from './tFPRPPS.entity';
import { TfpscpEntity } from './tFPSCP.entity';
import { TfpslogfnlEntity } from './tFPSLOGFNL.entity';
import { TfpspenEntity } from './tFPSPEN.entity';
import { TfptmeEntity } from './tFPTME.entity';
import { TfpvalEntity } from './tFPVAL.entity';
import { TfpvcaEntity } from './tFPVCA.entity';
import { TfpvpjEntity } from './tFPVPJ.entity';
import { TgpavaEntity } from './tGPAVA.entity';
import { TgpavdEntity } from './tGPAVD.entity';
import { TrscanEntity } from './tRSCAN.entity';
import { TrsecgEntity } from './tRSECG.entity';
import { TrseteEntity } from './tRSETE.entity';
import { TrsreqEntity } from './tRSREQ.entity';

@Index('PK_TFPEMP', ['codemp'], { unique: true })
@Index('TFPEMP_I01', ['codempmodhol'], {})
@Entity('TFPEMP', { schema: 'SANKHYA' })
export class TfpempEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('char', { name: 'CENTRALIZADORA', length: 1, default: () => "'N'" })
  centralizadora: string;

  @Column('smallint', { name: 'CTAFGTS', nullable: true })
  ctafgts: number | null;

  @Column('char', { name: 'CGCANT', nullable: true, length: 14 })
  cgcant: string | null;

  @Column('char', { name: 'ALTEROUEND', length: 1, default: () => "'N'" })
  alterouend: string;

  @Column('smallint', { name: 'MODHOLLERIT', nullable: true })
  modhollerit: number | null;

  @Column('smallint', { name: 'DIAPAGMENSAL', nullable: true })
  diapagmensal: number | null;

  @Column('smallint', { name: 'DIAPAGQUINZ', nullable: true })
  diapagquinz: number | null;

  @Column('smallint', { name: 'DIAPAGQUINZ_2', nullable: true })
  diapagquinz_2: number | null;

  @Column('smallint', { name: 'DIAPAGSEM', nullable: true })
  diapagsem: number | null;

  @Column('smallint', { name: 'CATEGFGTS', nullable: true })
  categfgts: number | null;

  @Column('float', { name: 'NUMCONVINT', nullable: true, precision: 53 })
  numconvint: number | null;

  @Column('smallint', { name: 'MESDISSIDIO', nullable: true })
  mesdissidio: number | null;

  @Column('datetime', { name: 'REFERENCIA' })
  referencia: Date;

  @Column('datetime', { name: 'DTATUAL', nullable: true })
  dtatual: Date | null;

  @Column('float', { name: 'PERCSERVICO', nullable: true, precision: 53 })
  percservico: number | null;

  @Column('float', { name: 'PERCCOZINHA', nullable: true, precision: 53 })
  perccozinha: number | null;

  @Column('float', { name: 'PERCREFEICAO', nullable: true, precision: 53 })
  percrefeicao: number | null;

  @Column('float', { name: 'PERCTRANSPO', nullable: true, precision: 53 })
  perctranspo: number | null;

  @Column('float', { name: 'PERCCESTALIM', nullable: true, precision: 53 })
  perccestalim: number | null;

  @Column('float', { name: 'PERCALIMCONV', nullable: true, precision: 53 })
  percalimconv: number | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('char', { name: 'SINDICALIZADA', length: 1, default: () => "'N'" })
  sindicalizada: string;

  @Column('smallint', { name: 'CODEMPMODHOL', nullable: true })
  codempmodhol: number | null;

  @Column('char', { name: 'SUGEREDATPAG', length: 1, default: () => "'N'" })
  sugeredatpag: string;

  @Column('char', { name: 'TIPDIAPAG', length: 1, default: () => "'U'" })
  tipdiapag: string;

  @Column('smallint', { name: 'DIAPAGFERIAS', nullable: true })
  diapagferias: number | null;

  @Column('smallint', { name: 'EMPDESTINOGRELHA', nullable: true })
  empdestinogrelha: number | null;

  @Column('smallint', { name: 'PORTE', nullable: true })
  porte: number | null;

  @Column('varchar', { name: 'CGCSINDPATRONAL', nullable: true, length: 14 })
  cgcsindpatronal: string | null;

  @Column('float', { name: 'VLRASSOCIATIVA', nullable: true, precision: 53 })
  vlrassociativa: number | null;

  @Column('float', { name: 'VLRSINDICAL', nullable: true, precision: 53 })
  vlrsindical: number | null;

  @Column('float', { name: 'VLRASSISTENCIAL', nullable: true, precision: 53 })
  vlrassistencial: number | null;

  @Column('float', { name: 'VLRCONFEDERATIVA', nullable: true, precision: 53 })
  vlrconfederativa: number | null;

  @Column('varchar', { name: 'EMATIVIDADE', length: 1, default: () => "'S'" })
  ematividade: string;

  @Column('varchar', { name: 'PROGALIMTRAB', length: 1, default: () => "'N'" })
  progalimtrab: string;

  @Column('varchar', { name: 'TIPPONTO', length: 1, default: () => "'S'" })
  tipponto: string;

  @Column('smallint', { name: 'DIAAPURAPONTO', nullable: true })
  diaapuraponto: number | null;

  @Column('varchar', { name: 'PAGAEXTERIOR', length: 1, default: () => "'N'" })
  pagaexterior: string;

  @Column('varchar', { name: 'SITUACAOESP', length: 1, default: () => "'N'" })
  situacaoesp: string;

  @Column('datetime', { name: 'DTEVENTO', nullable: true })
  dtevento: Date | null;

  @Column('smallint', { name: 'TIPEVENTOESP', nullable: true })
  tipeventoesp: number | null;

  @Column('varchar', { name: 'CPFRESPCNPJ', nullable: true, length: 11 })
  cpfrespcnpj: string | null;

  @Column('varchar', {
    name: 'SOCIOOSTENSIVO',
    length: 1,
    default: () => "'N'",
  })
  socioostensivo: string;

  @Column('varchar', { name: 'DEPOSITOJUD', length: 1, default: () => "'N'" })
  depositojud: string;

  @Column('varchar', { name: 'CLUBEINVEST', length: 1, default: () => "'N'" })
  clubeinvest: string;

  @Column('varchar', { name: 'DIRFCPF', nullable: true, length: 11 })
  dirfcpf: string | null;

  @Column('varchar', { name: 'DIRFNOME', nullable: true, length: 60 })
  dirfnome: string | null;

  @Column('varchar', { name: 'DIRFDDD', nullable: true, length: 2 })
  dirfddd: string | null;

  @Column('varchar', { name: 'DIRFFONE', nullable: true, length: 9 })
  dirffone: string | null;

  @Column('varchar', { name: 'DIRFRAMAL', nullable: true, length: 6 })
  dirframal: string | null;

  @Column('varchar', { name: 'DIRFFAX', nullable: true, length: 9 })
  dirffax: string | null;

  @Column('varchar', { name: 'DIRFEMAIL', nullable: true, length: 50 })
  dirfemail: string | null;

  @Column('varchar', { name: 'GERAMATRICULA', length: 1, default: () => "'N'" })
  geramatricula: string;

  @Column('char', { name: 'FERIASINTEGRAL', length: 1, default: () => "'N'" })
  feriasintegral: string;

  @Column('smallint', { name: 'CODBCOFIN', nullable: true })
  codbcofin: number | null;

  @Column('smallint', { name: 'CODCTABCOFIN', nullable: true })
  codctabcofin: number | null;

  @Column('smallint', { name: 'CONTROLEPONTO', default: () => '(4)' })
  controleponto: number;

  @Column('varchar', { name: 'LOGOFOLHA', nullable: true, length: 255 })
  logofolha: string | null;

  @Column('datetime', { name: 'DTINC_ESOCIAL', nullable: true })
  dtincEsocial: Date | null;

  @Column('datetime', { name: 'DTULTENV_ESOCIAL', nullable: true })
  dtultenvEsocial: Date | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('varchar', { name: 'SIGLAMIN', nullable: true, length: 70 })
  siglamin: string | null;

  @Column('varchar', { name: 'NROCERTIF', nullable: true, length: 40 })
  nrocertif: string | null;

  @Column('datetime', { name: 'DTEMICERTIF', nullable: true })
  dtemicertif: Date | null;

  @Column('datetime', { name: 'DTVENCCERTIF', nullable: true })
  dtvenccertif: Date | null;

  @Column('varchar', { name: 'NROPROTRENOV', nullable: true, length: 40 })
  nroprotrenov: string | null;

  @Column('datetime', { name: 'DTPROTRENOV', nullable: true })
  dtprotrenov: Date | null;

  @Column('datetime', { name: 'DTDOU', nullable: true })
  dtdou: Date | null;

  @Column('smallint', { name: 'PAGDOU', nullable: true })
  pagdou: number | null;

  @Column('smallint', { name: 'TIPLOTACAO', default: () => '(0)' })
  tiplotacao: number;

  @Column('char', { name: 'VALIDABASEIMP', length: 1, default: () => "'S'" })
  validabaseimp: string;

  @Column('char', { name: 'INIBEHOLLERIT', length: 1, default: () => "'N'" })
  inibehollerit: string;

  @Column('varchar', { name: 'IMPPORTALRH', nullable: true, length: 100 })
  impportalrh: string | null;

  @Column('char', { name: 'INIBEPONTO', length: 1, default: () => "'N'" })
  inibeponto: string;

  @Column('smallint', { name: 'MODPONTO', nullable: true })
  modponto: number | null;

  @Column('varchar', { name: 'ARQMODEMAIL', nullable: true, length: 200 })
  arqmodemail: string | null;

  @Column('smallint', { name: 'INDDESFOLHA', nullable: true })
  inddesfolha: number | null;

  @Column('int', { name: 'NRSIAFI', nullable: true })
  nrsiafi: number | null;

  @Column('smallint', { name: 'INDSITPJ', nullable: true })
  indsitpj: number | null;

  @Column('char', { name: 'INDRPPS', length: 1, default: () => "'N'" })
  indrpps: string;

  @Column('float', { name: 'PERCSEG', nullable: true, precision: 53 })
  percseg: number | null;

  @Column('float', { name: 'PERCENTE', nullable: true, precision: 53 })
  percente: number | null;

  @Column('float', { name: 'PERCSUPL', nullable: true, precision: 53 })
  percsupl: number | null;

  @Column('smallint', { name: 'IDESUBTETO', nullable: true })
  idesubteto: number | null;

  @Column('float', { name: 'VALSUBTETO', nullable: true, precision: 53 })
  valsubteto: number | null;

  @Column('smallint', { name: 'IDMAIOR', nullable: true })
  idmaior: number | null;

  @Column('int', { name: 'NUPROCALTOUTENT', nullable: true })
  nuprocaltoutent: number | null;

  @Column('char', {
    name: 'INTEGRAEMPPORTALRH',
    length: 1,
    default: () => "'S'",
  })
  integraempportalrh: string;

  @Column('char', { name: 'PERMABONOPEC', length: 1, default: () => "'N'" })
  permabonopec: string;

  @Column('char', {
    name: 'PERMFRACIONARFER',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  permfracionarfer: string | null;

  @Column('varchar', { name: 'PASTADOPONTO', nullable: true, length: 250 })
  pastadoponto: string | null;

  @Column('datetime', { name: 'DHULTIMAIMPPTO', nullable: true })
  dhultimaimppto: Date | null;

  @Column('smallint', { name: 'PERIODOIMPPONTO', default: () => '(1)' })
  periodoimpponto: number;

  @Column('char', { name: 'IMPORTAPONTO', length: 1, default: () => "'N'" })
  importaponto: string;

  @Column('char', { name: 'INDENTED', length: 1, default: () => "'N'" })
  indented: string;

  @Column('char', { name: 'INDETT', length: 1, default: () => "'N'" })
  indett: string;

  @Column('varchar', { name: 'NRREGETT', nullable: true, length: 30 })
  nrregett: string | null;

  @Column('char', { name: 'IDEEFR', length: 1, default: () => "'N'" })
  ideefr: string;

  @Column('varchar', { name: 'CNPJEFR', nullable: true, length: 14 })
  cnpjefr: string | null;

  @Column('varchar', { name: 'NMENTE', nullable: true, length: 115 })
  nmente: string | null;

  @Column('char', { name: 'CONTAPR', length: 1, default: () => "'0'" })
  contapr: string;

  @Column('char', { name: 'CONTPCD', length: 1, default: () => "'0'" })
  contpcd: string;

  @Column('char', { name: 'CONTENTED', length: 1, default: () => "'N'" })
  contented: string;

  @Column('smallint', { name: 'INDSIMPLES', default: () => '(0)' })
  indsimples: number;

  @Column('char', { name: 'ENVESOCIAL', length: 1, default: () => "'N'" })
  envesocial: string;

  @Column('char', { name: 'USADOESOCIAL', length: 1, default: () => "'N'" })
  usadoesocial: string;

  @Column('datetime', { name: 'DTINICIOESOCIAL', nullable: true })
  dtinicioesocial: Date | null;

  @Column('varchar', { name: 'RECIBOESOCIAL', nullable: true, length: 200 })
  reciboesocial: string | null;

  @Column('datetime', { name: 'INIVALESOCIAL', nullable: true })
  inivalesocial: Date | null;

  @Column('datetime', { name: 'FIMVALESOCIAL', nullable: true })
  fimvalesocial: Date | null;

  @Column('smallint', { name: 'CODINFFISC', nullable: true })
  codinffisc: number | null;

  @Column('datetime', { name: 'DTCARGAINICIAL', nullable: true })
  dtcargainicial: Date | null;

  @Column('char', { name: 'REGIMERETIRRFCX', length: 1, default: () => "'S'" })
  regimeretirrfcx: string;

  @Column('datetime', { name: 'DTTERCEIRAFASE', nullable: true })
  dtterceirafase: Date | null;

  @Column('char', { name: 'GRUPOESOCIAL', nullable: true, length: 1 })
  grupoesocial: string | null;

  @Column('float', { name: 'ALIQUOTARAT', nullable: true, precision: 53 })
  aliquotarat: number | null;

  @Column('float', { name: 'ALIQUOTAFAP', nullable: true, precision: 53 })
  aliquotafap: number | null;

  @Column('varchar', { name: 'CNPJPROCURADOR', nullable: true, length: 14 })
  cnpjprocurador: string | null;

  @Column('datetime', { name: 'DTSESMT', nullable: true })
  dtsesmt: Date | null;

  @Column('text', { name: 'TESTE', nullable: true })
  teste: string | null;

  @Column('char', { name: 'ENVIAEMP', length: 1, default: () => "'S'" })
  enviaemp: string;

  @Column('smallint', { name: 'INDOPTREGELETRON', default: () => '(1)' })
  indoptregeletron: number;

  @Column('char', { name: 'PORTALPROGFERIAS', length: 1, default: () => "'S'" })
  portalprogferias: string;

  @Column('char', { name: 'PORTALAPONTO', length: 1, default: () => "'S'" })
  portalaponto: string;

  @Column('char', { name: 'PORTALEVOLUCAO', length: 1, default: () => "'S'" })
  portalevolucao: string;

  @Column('char', { name: 'JESPON', length: 1, default: () => "'N'" })
  jespon: string;

  @Column('varchar', { name: 'CPFPRODRURAL', nullable: true, length: 11 })
  cpfprodrural: string | null;

  @Column('int', { name: 'CODEMPSIAF', nullable: true })
  codempsiaf: number | null;

  @Column('varchar', { name: 'APROVADP', length: 1, default: () => "'N'" })
  aprovadp: string;

  @Column('datetime', {
    name: 'APURACOMPETENCIA',
    nullable: true,
    default: () => "'01/01/1900'",
  })
  apuracompetencia: Date | null;

  @Column('char', {
    name: 'PERMFERIASANTECIP',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  permferiasantecip: string | null;

  @Column('varchar', {
    name: 'DSRRESPERAPDTDES',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  dsrresperapdtdes: string | null;

  @Column('varchar', {
    name: 'PERMAPURACOMPET',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  permapuracompet: string | null;

  @Column('datetime', { name: 'DTEXTINCAOFILIAL', nullable: true })
  dtextincaofilial: Date | null;

  @Column('varchar', {
    name: 'PERMITEFALERH',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  permitefalerh: string | null;

  @Column('varchar', {
    name: 'PORTALALTCARGAHORARIA',
    length: 1,
    default: () => "'N'",
  })
  portalaltcargahoraria: string;

  @Column('varchar', { name: 'DEBSUSESOCIAL', nullable: true, length: 1 })
  debsusesocial: string | null;

  @Column('char', { name: 'FAPNAOPUBLICADA', nullable: true, length: 1 })
  fapnaopublicada: string | null;

  @Column('char', { name: 'INAPTAPINEXIST', nullable: true, length: 1 })
  inaptapinexist: string | null;

  @Column('datetime', { name: 'DTVIRADA', nullable: true })
  dtvirada: Date | null;

  @Column('varchar', {
    name: 'BLOQACESSORH',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  bloqacessorh: string | null;

  @Column('varchar', {
    name: 'BLOQACESSOSNK',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  bloqacessosnk: string | null;

  @Column('varchar', { name: 'TPAMBESOCIAL', length: 1, default: () => "'P'" })
  tpambesocial: string;

  @Column('varchar', {
    name: 'BLOQEXIBANIV',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  bloqexibaniv: string | null;

  @OneToMany(
    () => AudittfpageEntity,
    (audittfpageEntity) => audittfpageEntity.codemp2,
  )
  audittfpages: AudittfpageEntity[];

  @OneToMany(
    () => AudittfpbasEntity,
    (audittfpbasEntity) => audittfpbasEntity.codemp2,
  )
  audittfpbas: AudittfpbasEntity[];

  @OneToMany(
    () => AudittfpferEntity,
    (audittfpferEntity) => audittfpferEntity.codemp2,
  )
  audittfpfers: AudittfpferEntity[];

  @OneToMany(
    () => AudittfpfolEntity,
    (audittfpfolEntity) => audittfpfolEntity.codemp2,
  )
  audittfpfols: AudittfpfolEntity[];

  @OneToMany(
    () => AudittfpmovEntity,
    (audittfpmovEntity) => audittfpmovEntity.codemp2,
  )
  audittfpmovs: AudittfpmovEntity[];

  @OneToMany(() => TfpabeEntity, (tfpabeEntity) => tfpabeEntity.codemp2)
  tfpabes: TfpabeEntity[];

  @OneToMany(() => TfpacuEntity, (tfpacuEntity) => tfpacuEntity.codemp2)
  tfpacus: TfpacuEntity[];

  @OneToMany(() => TfpageEntity, (tfpageEntity) => tfpageEntity.codemp2)
  tfpages: TfpageEntity[];

  @OneToMany(() => TfpambEntity, (tfpambEntity) => tfpambEntity.codemp)
  tfpambs: TfpambEntity[];

  @OneToMany(() => TfpaudEntity, (tfpaudEntity) => tfpaudEntity.codemp2)
  tfpauds: TfpaudEntity[];

  @OneToMany(() => TfpaudlogEntity, (tfpaudlogEntity) => tfpaudlogEntity.codemp)
  tfpaudlogs: TfpaudlogEntity[];

  @OneToMany(() => TfpbasEntity, (tfpbasEntity) => tfpbasEntity.codemp2)
  tfpbas: TfpbasEntity[];

  @OneToMany(
    () => TfpbastesteEntity,
    (tfpbastesteEntity) => tfpbastesteEntity.codemp2,
  )
  tfpbastestes: TfpbastesteEntity[];

  @OneToMany(() => TfpcceEntity, (tfpcceEntity) => tfpcceEntity.codemp2)
  tfpcces: TfpcceEntity[];

  @OneToMany(() => TfpcevEntity, (tfpcevEntity) => tfpcevEntity.codemp2)
  tfpcevs: TfpcevEntity[];

  @OneToMany(() => TfpcfeEntity, (tfpcfeEntity) => tfpcfeEntity.codemp2)
  tfpcfes: TfpcfeEntity[];

  @OneToMany(() => TfpcgeEntity, (tfpcgeEntity) => tfpcgeEntity.codemp2)
  tfpcges: TfpcgeEntity[];

  @OneToMany(() => TfpchqEntity, (tfpchqEntity) => tfpchqEntity.codemp2)
  tfpchqs: TfpchqEntity[];

  @OneToMany(() => TfpcomEntity, (tfpcomEntity) => tfpcomEntity.codemp2)
  tfpcoms: TfpcomEntity[];

  @OneToMany(() => TfpcsiEntity, (tfpcsiEntity) => tfpcsiEntity.codemp2)
  tfpcsis: TfpcsiEntity[];

  @OneToMany(() => TfpdedEntity, (tfpdedEntity) => tfpdedEntity.codemp2)
  tfpdeds: TfpdedEntity[];

  @OneToMany(() => TfpdpeEntity, (tfpdpeEntity) => tfpdpeEntity.codemp2)
  tfpdpes: TfpdpeEntity[];

  @OneToMany(() => TfpdpoEntity, (tfpdpoEntity) => tfpdpoEntity.codemp2)
  tfpdpos: TfpdpoEntity[];

  @ManyToOne(() => TfppreEntity, (tfppreEntity) => tfppreEntity.tfpemps)
  @JoinColumn([{ name: 'CODPREF', referencedColumnName: 'codpref' }])
  codpref: TfppreEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpemps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tfpemps)
  @JoinColumn([{ name: 'CTACTBEXERCATU', referencedColumnName: 'codctactb' }])
  ctactbexercatu: TcbplaEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tfpemps2)
  @JoinColumn([{ name: 'CTACTBEXERCANT', referencedColumnName: 'codctactb' }])
  ctactbexercant: TcbplaEntity;

  @ManyToOne(() => TfppssEntity, (tfppssEntity) => tfppssEntity.tfpemps)
  @JoinColumn([{ name: 'NUPROCESSORAT', referencedColumnName: 'nuprocesso' }])
  nuprocessorat: TfppssEntity;

  @ManyToOne(() => TfppssEntity, (tfppssEntity) => tfppssEntity.tfpemps2)
  @JoinColumn([{ name: 'NUPROCESSOFAP', referencedColumnName: 'nuprocesso' }])
  nuprocessofap: TfppssEntity;

  @ManyToOne(() => TfppssEntity, (tfppssEntity) => tfppssEntity.tfpemps3)
  @JoinColumn([{ name: 'NUPROCESSOPCD', referencedColumnName: 'nuprocesso' }])
  nuprocessopcd: TfppssEntity;

  @ManyToOne(() => TfppssEntity, (tfppssEntity) => tfppssEntity.tfpemps4)
  @JoinColumn([{ name: 'NUPROCESSOAPR', referencedColumnName: 'nuprocesso' }])
  nuprocessoapr: TfppssEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tfpemps3)
  @JoinColumn([{ name: 'CTACTBREVERSAO', referencedColumnName: 'codctactb' }])
  ctactbreversao: TcbplaEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tfpemps4)
  @JoinColumn([{ name: 'CODCTACTBREVER13', referencedColumnName: 'codctactb' }])
  codctactbrever: TcbplaEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tfpemps5)
  @JoinColumn([{ name: 'CTACTBCRATOCOOP', referencedColumnName: 'codctactb' }])
  ctactbcratocoop: TcbplaEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tfpemps6)
  @JoinColumn([{ name: 'CTACTBDBATOCOOP', referencedColumnName: 'codctactb' }])
  ctactbdbatocoop: TcbplaEntity;

  @ManyToOne(() => TfpptprEntity, (tfpptprEntity) => tfpptprEntity.tfpemps)
  @JoinColumn([
    { name: 'NUPROCESSORAT', referencedColumnName: 'nuprocesso' },
    { name: 'CODEMP', referencedColumnName: 'codemp' },
  ])
  tfpptpr: TfpptprEntity;

  @ManyToOne(() => TfpptprEntity, (tfpptprEntity) => tfpptprEntity.tfpemps2)
  @JoinColumn([
    { name: 'NUPROCESSOFAP', referencedColumnName: 'nuprocesso' },
    { name: 'CODEMP', referencedColumnName: 'codemp' },
  ])
  tfpptpr2: TfpptprEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tfpemps)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tfpemps2)
  @JoinColumn([{ name: 'CODCENCUSATOCOOP', referencedColumnName: 'codcencus' }])
  codcencusatocoop: TsicusEntity;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tfpemps)
  @JoinColumn([{ name: 'CODCTABCOINT', referencedColumnName: 'codctabcoint' }])
  codctabcoint: TsictaEntity;

  @ManyToOne(() => TfpfisEntity, (tfpfisEntity) => tfpfisEntity.tfpemps)
  @JoinColumn([{ name: 'CODREGFIS', referencedColumnName: 'codregfis' }])
  codregfis: TfpfisEntity;

  @ManyToOne(() => TgpgslEntity, (tgpgslEntity) => tgpgslEntity.tfpemps)
  @JoinColumn([{ name: 'CODGRELHA', referencedColumnName: 'codgrelha' }])
  codgrelha: TgpgslEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpemps)
  @JoinColumn([{ name: 'CODEMPLOTACAO', referencedColumnName: 'codemp' }])
  codemplotacao: TfpempEntity;

  @OneToMany(() => TfpempEntity, (tfpempEntity) => tfpempEntity.codemplotacao)
  tfpemps: TfpempEntity[];

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpemps2)
  @JoinColumn([{ name: 'CODEMPMODHOL', referencedColumnName: 'codemp' }])
  codempmodhol2: TfpempEntity;

  @OneToMany(() => TfpempEntity, (tfpempEntity) => tfpempEntity.codempmodhol2)
  tfpemps2: TfpempEntity[];

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tfpemps)
  @JoinColumn([{ name: 'CODEMPFIN', referencedColumnName: 'codemp' }])
  codempfin: TgfempEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tfpemps)
  @JoinColumn([{ name: 'CODPROJATOCOOP', referencedColumnName: 'codproj' }])
  codprojatocoop: TcsprjEntity;

  @ManyToOne(() => TfpncoEntity, (tfpncoEntity) => tfpncoEntity.tfpemps)
  @JoinColumn([{ name: 'CODNATSALDORET', referencedColumnName: 'codnatcomp' }])
  codnatsaldoret: TfpncoEntity;

  @ManyToOne(() => TfpncoEntity, (tfpncoEntity) => tfpncoEntity.tfpemps2)
  @JoinColumn([{ name: 'CODNATFPAS', referencedColumnName: 'codnatcomp' }])
  codnatfpas: TfpncoEntity;

  @ManyToOne(() => TcbhisEntity, (tcbhisEntity) => tcbhisEntity.tfpemps)
  @JoinColumn([
    { name: 'HISTCTBCRATOCOOP', referencedColumnName: 'codhistctb' },
  ])
  histctbcratocoop: TcbhisEntity;

  @ManyToOne(() => TcbhisEntity, (tcbhisEntity) => tcbhisEntity.tfpemps2)
  @JoinColumn([
    { name: 'CODHISTCTBREVER13', referencedColumnName: 'codhistctb' },
  ])
  codhistctbrever: TcbhisEntity;

  @ManyToOne(() => TcbhisEntity, (tcbhisEntity) => tcbhisEntity.tfpemps3)
  @JoinColumn([
    { name: 'HISTCTBDBATOCOOP', referencedColumnName: 'codhistctb' },
  ])
  histctbdbatocoop: TcbhisEntity;

  @ManyToOne(() => TcbhisEntity, (tcbhisEntity) => tcbhisEntity.tfpemps4)
  @JoinColumn([{ name: 'HISTCTBREVERSAO', referencedColumnName: 'codhistctb' }])
  histctbreversao: TcbhisEntity;

  @ManyToOne(() => TcbhisEntity, (tcbhisEntity) => tcbhisEntity.tfpemps5)
  @JoinColumn([{ name: 'HISTCTBEXERCANT', referencedColumnName: 'codhistctb' }])
  histctbexercant: TcbhisEntity;

  @ManyToOne(() => TcbhisEntity, (tcbhisEntity) => tcbhisEntity.tfpemps6)
  @JoinColumn([{ name: 'HISTCTBEXERCATU', referencedColumnName: 'codhistctb' }])
  histctbexercatu: TcbhisEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tfpemps)
  @JoinColumn([{ name: 'CODEMPORG', referencedColumnName: 'codemp' }])
  codemporg: TsiempEntity;

  @OneToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tfpemp)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tfpemps2)
  @JoinColumn([{ name: 'EMPDESTINOCTB', referencedColumnName: 'codemp' }])
  empdestinoctb: TsiempEntity;

  @OneToMany(() => TfpenedEntity, (tfpenedEntity) => tfpenedEntity.codemp2)
  tfpeneds: TfpenedEntity[];

  @OneToMany(() => TfpeqpEntity, (tfpeqpEntity) => tfpeqpEntity.codemp)
  tfpeqps: TfpeqpEntity[];

  @OneToMany(() => TfpesoEntity, (tfpesoEntity) => tfpesoEntity.codemp2)
  tfpesos: TfpesoEntity[];

  @OneToMany(() => TfpfceEntity, (tfpfceEntity) => tfpfceEntity.codemp2)
  tfpfces: TfpfceEntity[];

  @OneToMany(() => TfpfdpEntity, (tfpfdpEntity) => tfpfdpEntity.codemp2)
  tfpfdps: TfpfdpEntity[];

  @OneToMany(() => TfpfdsEntity, (tfpfdsEntity) => tfpfdsEntity.codemp2)
  tfpfds: TfpfdsEntity[];

  @OneToMany(() => TfpfolEntity, (tfpfolEntity) => tfpfolEntity.codemp2)
  tfpfols: TfpfolEntity[];

  @OneToMany(
    () => TfpfoltesteEntity,
    (tfpfoltesteEntity) => tfpfoltesteEntity.codemp2,
  )
  tfpfoltestes: TfpfoltesteEntity[];

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.codemp2)
  tfpfuns: TfpfunEntity[];

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.codemprespnis)
  tfpfuns2: TfpfunEntity[];

  @OneToMany(() => TfpgpsEntity, (tfpgpsEntity) => tfpgpsEntity.codemp2)
  tfpgps: TfpgpsEntity[];

  @OneToMany(() => TfpgtfEntity, (tfpgtfEntity) => tfpgtfEntity.codemp2)
  tfpgtfs: TfpgtfEntity[];

  @OneToMany(() => TfphfuEntity, (tfphfuEntity) => tfphfuEntity.codemp2)
  tfphfus: TfphfuEntity[];

  @OneToMany(() => TfphreEntity, (tfphreEntity) => tfphreEntity.codemp2)
  tfphres: TfphreEntity[];

  @OneToMany(() => TfphsaEntity, (tfphsaEntity) => tfphsaEntity.codemp2)
  tfphsas: TfphsaEntity[];

  @OneToMany(() => TfphtrEntity, (tfphtrEntity) => tfphtrEntity.codemp2)
  tfphtrs: TfphtrEntity[];

  @OneToMany(() => TfpltrEntity, (tfpltrEntity) => tfpltrEntity.codemp)
  tfpltrs: TfpltrEntity[];

  @OneToMany(() => TfpmovEntity, (tfpmovEntity) => tfpmovEntity.codemp2)
  tfpmovs: TfpmovEntity[];

  @OneToMany(
    () => TfpmovantEntity,
    (tfpmovantEntity) => tfpmovantEntity.codemp2,
  )
  tfpmovants: TfpmovantEntity[];

  @OneToMany(() => TfpocoEntity, (tfpocoEntity) => tfpocoEntity.codemp2)
  tfpocos: TfpocoEntity[];

  @OneToMany(() => TfpocorjsEntity, (tfpocorjsEntity) => tfpocorjsEntity.codemp)
  tfpocorjs: TfpocorjsEntity[];

  @OneToMany(() => TfpponEntity, (tfpponEntity) => tfpponEntity.codemp2)
  tfppons: TfpponEntity[];

  @OneToMany(
    () => TfpponraioEntity,
    (tfpponraioEntity) => tfpponraioEntity.codemp,
  )
  tfpponraios: TfpponraioEntity[];

  @OneToMany(() => TfppseEntity, (tfppseEntity) => tfppseEntity.codemp2)
  tfppses: TfppseEntity[];

  @OneToMany(() => TfpptprEntity, (tfpptprEntity) => tfpptprEntity.codemp2)
  tfpptprs: TfpptprEntity[];

  @OneToMany(() => TfppubEntity, (tfppubEntity) => tfppubEntity.codemp2)
  tfppubs: TfppubEntity[];

  @OneToMany(() => TfprbrEntity, (tfprbrEntity) => tfprbrEntity.codemp2)
  tfprbrs: TfprbrEntity[];

  @OneToMany(() => TfprelEntity, (tfprelEntity) => tfprelEntity.codemp2)
  tfprels: TfprelEntity[];

  @OneToMany(
    () => TfpreqadmdpdEntity,
    (tfpreqadmdpdEntity) => tfpreqadmdpdEntity.codempfuncresponsavel,
  )
  tfpreqadmdpds: TfpreqadmdpdEntity[];

  @OneToMany(() => TfprgprEntity, (tfprgprEntity) => tfprgprEntity.codemp2)
  tfprgprs: TfprgprEntity[];

  @OneToMany(() => TfprppsEntity, (tfprppsEntity) => tfprppsEntity.codemp2)
  tfprpps: TfprppsEntity[];

  @OneToMany(() => TfpscpEntity, (tfpscpEntity) => tfpscpEntity.codemp2)
  tfpscps: TfpscpEntity[];

  @OneToMany(
    () => TfpslogfnlEntity,
    (tfpslogfnlEntity) => tfpslogfnlEntity.codemp2,
  )
  tfpslogfnls: TfpslogfnlEntity[];

  @OneToMany(() => TfpspenEntity, (tfpspenEntity) => tfpspenEntity.codemp)
  tfpspens: TfpspenEntity[];

  @OneToMany(() => TfptmeEntity, (tfptmeEntity) => tfptmeEntity.codemp2)
  tfptmes: TfptmeEntity[];

  @OneToMany(() => TfpvalEntity, (tfpvalEntity) => tfpvalEntity.codemp2)
  tfpvals: TfpvalEntity[];

  @OneToMany(() => TfpvcaEntity, (tfpvcaEntity) => tfpvcaEntity.codemp2)
  tfpvcas: TfpvcaEntity[];

  @OneToMany(() => TfpvpjEntity, (tfpvpjEntity) => tfpvpjEntity.codemp2)
  tfpvpjs: TfpvpjEntity[];

  @OneToMany(() => TgpavaEntity, (tgpavaEntity) => tgpavaEntity.codemp)
  tgpavas: TgpavaEntity[];

  @OneToMany(() => TgpavdEntity, (tgpavdEntity) => tgpavdEntity.codemp2)
  tgpavds: TgpavdEntity[];

  @OneToMany(() => TrscanEntity, (trscanEntity) => trscanEntity.codemp)
  trscans: TrscanEntity[];

  @OneToMany(() => TrsecgEntity, (trsecgEntity) => trsecgEntity.codemp2)
  trsecgs: TrsecgEntity[];

  @OneToMany(() => TrseteEntity, (trseteEntity) => trseteEntity.codemp2)
  trsetes: TrseteEntity[];

  @OneToMany(() => TrsreqEntity, (trsreqEntity) => trsreqEntity.codemp)
  trsreqs: TrsreqEntity[];
}
