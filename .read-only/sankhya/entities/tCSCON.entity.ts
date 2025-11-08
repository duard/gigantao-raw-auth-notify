import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { AdProdservosEntity } from './aD_PRODSERVOS.entity';
import { AdPropostacontEntity } from './aD_PROPOSTACONT.entity';
import { TapfatEntity } from './tAPFAT.entity';
import { TapmrmEntity } from './tAPMRM.entity';
import { TccratEntity } from './tCCRAT.entity';
import { TcfmanEntity } from './tCFMAN.entity';
import { TcfoscabEntity } from './tCFOSCAB.entity';
import { TcsaveEntity } from './tCSAVE.entity';
import { TcsbloEntity } from './tCSBLO.entity';
import { TcsbmeEntity } from './tCSBME.entity';
import { TcscgrEntity } from './tCSCGR.entity';
import { TcscomEntity } from './tCSCOM.entity';
import { TsicidEntity } from './tSICID.entity';
import { TgagpcEntity } from './tGAGPC.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TsimoeEntity } from './tSIMOE.entity';
import { TgftitEntity } from './tGFTIT.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TcscstcEntity } from './tCSCSTC.entity';
import { TgfcriEntity } from './tGFCRI.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgasafEntity } from './tGASAF.entity';
import { TgatdcEntity } from './tGATDC.entity';
import { TcsslaEntity } from './tCSSLA.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TcscveEntity } from './tCSCVE.entity';
import { TcselcEntity } from './tCSELC.entity';
import { TcsgecEntity } from './tCSGEC.entity';
import { TcsnteEntity } from './tCSNTE.entity';
import { TcsoseEntity } from './tCSOSE.entity';
import { TcspadEntity } from './tCSPAD.entity';
import { TcspfpEntity } from './tCSPFP.entity';
import { TcspitEntity } from './tCSPIT.entity';
import { TcspscEntity } from './tCSPSC.entity';
import { TcsvpcEntity } from './tCSVPC.entity';
import { TgagtmEntity } from './tGAGTM.entity';
import { TgangrEntity } from './tGANGR.entity';
import { TgapesiEntity } from './tGAPESI.entity';
import { TgapoiEntity } from './tGAPOI.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TgfratEntity } from './tGFRAT.entity';
import { TgfravEntity } from './tGFRAV.entity';
import { TgfrcaEntity } from './tGFRCA.entity';

@Index('PK_TCSCON', ['numcontrato'], { unique: true })
@Index('TCSCON_I01', ['nunota'], {})
@Index('TCSCON_ICAB01', ['nunotapedloc'], {})
@Entity('TCSCON', { schema: 'SANKHYA' })
export class TcsconEntity {
  @Column('int', { primary: true, name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('datetime', { name: 'DTCONTRATO' })
  dtcontrato: Date;

  @Column('int', { name: 'CODCONTATO' })
  codcontato: number;

  @Column('smallint', { name: 'CODIMPLANT', nullable: true })
  codimplant: number | null;

  @Column('datetime', { name: 'DTBASEREAJ' })
  dtbasereaj: Date;

  @Column('smallint', { name: 'FREQREAJ', default: () => '(1)' })
  freqreaj: number;

  @Column('char', { name: 'TIPPAG', length: 1, default: () => "'V'" })
  tippag: string;

  @Column('smallint', { name: 'DIAPAG', default: () => '(5)' })
  diapag: number;

  @Column('char', { name: 'IMPRPRECINDIV', length: 1, default: () => "'N'" })
  imprprecindiv: string;

  @Column('smallint', { name: 'FREQVISITAS', nullable: true })
  freqvisitas: number | null;

  @Column('char', { name: 'EQUIPAMENTO', nullable: true, length: 20 })
  equipamento: string | null;

  @Column('char', { name: 'AMBIENTE', nullable: true, length: 20 })
  ambiente: string | null;

  @Column('char', { name: 'GERARNF', length: 1, default: () => "'S'" })
  gerarnf: string;

  @Column('text', { name: 'OBSERVACOES', nullable: true })
  observacoes: string | null;

  @Column('text', { name: 'CLAUSCONTRATO', nullable: true })
  clauscontrato: string | null;

  @Column('char', { name: 'TEMMED', nullable: true, length: 1 })
  temmed: string | null;

  @Column('int', { name: 'RECDESP' })
  recdesp: number;

  @Column('char', {
    name: 'TIPOCONTRATO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  tipocontrato: string | null;

  @Column('int', { name: 'CODCENCUS', nullable: true })
  codcencus: number | null;

  @Column('int', { name: 'GATILHO', nullable: true })
  gatilho: number | null;

  @Column('char', { name: 'IMPRIME', length: 1, default: () => "'S'" })
  imprime: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('int', { name: 'NUMCONTRATOORIGEM', nullable: true })
  numcontratoorigem: number | null;

  @Column('datetime', { name: 'DTTERMINO', nullable: true })
  dttermino: Date | null;

  @Column('datetime', { name: 'DTENVIOEMAIL', nullable: true })
  dtenvioemail: Date | null;

  @Column('smallint', { name: 'PRAZOVENCTO', nullable: true })
  prazovencto: number | null;

  @Column('smallint', { name: 'CODTIPVENDA', nullable: true })
  codtipvenda: number | null;

  @Column('smallint', { name: 'PARCELAATUAL', nullable: true })
  parcelaatual: number | null;

  @Column('smallint', { name: 'PARCELAQTD', nullable: true })
  parcelaqtd: number | null;

  @Column('char', { name: 'DIAUTIL', length: 1, default: () => "'N'" })
  diautil: string;

  @Column('char', { name: 'TEMIRF', length: 1, default: () => "'N'" })
  temirf: string;

  @Column('float', { name: 'PERCIRF', nullable: true, precision: 53 })
  percirf: number | null;

  @Column('char', { name: 'TEMISS', length: 1, default: () => "'N'" })
  temiss: string;

  @Column('float', { name: 'PERCISS', nullable: true, precision: 53 })
  perciss: number | null;

  @Column('char', { name: 'RETEMISS', length: 1, default: () => "'N'" })
  retemiss: string;

  @Column('char', { name: 'TIPOARM', length: 1, default: () => "'D'" })
  tipoarm: string;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('smallint', { name: 'DIAFIMMED', nullable: true })
  diafimmed: number | null;

  @Column('smallint', { name: 'DURACAO', nullable: true })
  duracao: number | null;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'M'" })
  tipo: string;

  @Column('datetime', { name: 'DTREFPROXFAT', nullable: true })
  dtrefproxfat: Date | null;

  @Column('float', { name: 'VLRHORA', nullable: true, precision: 53 })
  vlrhora: number | null;

  @Column('float', { name: 'PERCLOC', nullable: true, precision: 53 })
  percloc: number | null;

  @Column('int', { name: 'QTDPARCPGCOM', nullable: true })
  qtdparcpgcom: number | null;

  @Column('int', { name: 'NUNOTAPEDLOC', nullable: true })
  nunotapedloc: number | null;

  @Column('char', { name: 'FERIADOMUN', nullable: true, length: 1 })
  feriadomun: string | null;

  @Column('char', { name: 'FERIADOEST', nullable: true, length: 1 })
  feriadoest: string | null;

  @Column('char', { name: 'FERIADONAC', nullable: true, length: 1 })
  feriadonac: string | null;

  @Column('smallint', { name: 'CODMOEALTREAJ', nullable: true })
  codmoealtreaj: number | null;

  @Column('char', { name: 'ACESSAHISTSUBOS', length: 1, default: () => "'N'" })
  acessahistsubos: string;

  @Column('char', { name: 'LOCACAOBEM', length: 1, default: () => "'N'" })
  locacaobem: string;

  @Column('char', { name: 'FATURPRORATA', length: 1, default: () => "'N'" })
  faturprorata: string;

  @Column('smallint', { name: 'TOPFATURCON', nullable: true })
  topfaturcon: number | null;

  @Column('varchar', { name: 'SERFATURCON', nullable: true, length: 3 })
  serfaturcon: string | null;

  @Column('char', { name: 'CONTRORGPUBLICO', nullable: true, length: 1 })
  controrgpublico: string | null;

  @Column('varchar', { name: 'GRUPOFATURPRORATA', nullable: true, length: 15 })
  grupofaturprorata: string | null;

  @Column('char', {
    name: 'CONTROLOCBENS',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  controlocbens: string | null;

  @Column('smallint', { name: 'QTDPROVISAO', nullable: true })
  qtdprovisao: number | null;

  @Column('char', { name: 'GERARFINNOTA', length: 1, default: () => "'R'" })
  gerarfinnota: string;

  @Column('smallint', { name: 'ISENCAOQUEBRA', nullable: true })
  isencaoquebra: number | null;

  @Column('smallint', { name: 'CODUSUALTER', nullable: true })
  codusualter: number | null;

  @Column('varchar', { name: 'REAJUSTENEGATIVO', nullable: true, length: 1 })
  reajustenegativo: string | null;

  @Column('int', { name: 'CODCENCUSEX', nullable: true })
  codcencusex: number | null;

  @Column('int', { name: 'CODNATEX', nullable: true })
  codnatex: number | null;

  @Column('int', { name: 'CODTIPVENDAEX', nullable: true })
  codtipvendaex: number | null;

  @Column('char', { name: 'DEFTIPA', nullable: true, length: 1 })
  deftipa: string | null;

  @Column('int', { name: 'DIACARENC', nullable: true })
  diacarenc: number | null;

  @Column('int', { name: 'DIACARENCEX', nullable: true })
  diacarencex: number | null;

  @Column('varchar', { name: 'NUMCONTIN', nullable: true, length: 15 })
  numcontin: string | null;

  @Column('int', { name: 'PADCLASS', nullable: true })
  padclass: number | null;

  @Column('char', { name: 'PERCOBRA', length: 1, default: () => "'D'" })
  percobra: string;

  @Column('char', { name: 'PERDESC', length: 1, default: () => "'D'" })
  perdesc: string;

  @Column('char', { name: 'PERDESCON', length: 1, default: () => "'D'" })
  perdescon: string;

  @Column('float', { name: 'QUEBRATEC', nullable: true, precision: 53 })
  quebratec: number | null;

  @Column('char', { name: 'SITCONT', length: 1, default: () => "'A'" })
  sitcont: string;

  @Column('int', { name: 'TABPRECUMI', nullable: true })
  tabprecumi: number | null;

  @Column('char', { name: 'TIPCOBR', length: 1, default: () => "'V'" })
  tipcobr: string;

  @Column('int', { name: 'TIPOTITULOEX', nullable: true })
  tipotituloex: number | null;

  @Column('char', { name: 'TIPQUEBRA', length: 1, default: () => "'T'" })
  tipquebra: string;

  @Column('float', { name: 'UMIDPADRA', nullable: true, precision: 53 })
  umidpadra: number | null;

  @Column('float', { name: 'UNICONVSC', nullable: true, precision: 53 })
  uniconvsc: number | null;

  @Column('varchar', { name: 'VALPEDFIN', length: 1, default: () => "'N'" })
  valpedfin: string;

  @Column('varchar', { name: 'COBPROPORCAR', length: 1, default: () => "'N'" })
  cobproporcar: string;

  @Column('int', { name: 'DIACARECAR', nullable: true })
  diacarecar: number | null;

  @Column('int', { name: 'CODCENCUSAR', nullable: true })
  codcencusar: number | null;

  @Column('int', { name: 'CODNATAR', nullable: true })
  codnatar: number | null;

  @Column('int', { name: 'TIPOTITULOAR', nullable: true })
  tipotituloar: number | null;

  @Column('smallint', { name: 'CODTIPVENDAAR', nullable: true })
  codtipvendaar: number | null;

  @Column('int', { name: 'RESPPAGAR', nullable: true })
  resppagar: number | null;

  @Column('varchar', { name: 'ULTTABUMI', length: 1, default: () => "'N'" })
  ulttabumi: string;

  @Column('int', { name: 'TABPRECUMIAR', nullable: true })
  tabprecumiar: number | null;

  @Column('smallint', { name: 'CODSERVEX', nullable: true })
  codservex: number | null;

  @Column('varchar', { name: 'PERCOBRAAR', length: 1, default: () => "'D'" })
  percobraar: string;

  @Column('varchar', { name: 'COBPROQUE', nullable: true, length: 1 })
  cobproque: string | null;

  @Column('datetime', { name: 'DTREFEXPREC', nullable: true })
  dtrefexprec: Date | null;

  @Column('datetime', { name: 'DTREFARMAZE', nullable: true })
  dtrefarmaze: Date | null;

  @Column('varchar', { name: 'PERCOBRAQUE', nullable: true, length: 1 })
  percobraque: string | null;

  @Column('varchar', { name: 'FORMFATARMAZE', nullable: true, length: 1 })
  formfatarmaze: string | null;

  @Column('float', { name: 'VALQUEBTRANS', nullable: true, precision: 53 })
  valquebtrans: number | null;

  @Column('datetime', { name: 'DTREFQUEBRA', nullable: true })
  dtrefquebra: Date | null;

  @Column('varchar', { name: 'FORMFATEXPREC', nullable: true, length: 1 })
  formfatexprec: string | null;

  @Column('varchar', { name: 'CIF_FOB', nullable: true, length: 1 })
  cifFob: string | null;

  @Column('int', { name: 'NUNOTAREFEXPREC', nullable: true })
  nunotarefexprec: number | null;

  @Column('int', { name: 'NUNOTAREFARMAZE', nullable: true })
  nunotarefarmaze: number | null;

  @Column('int', { name: 'CODCLC', nullable: true })
  codclc: number | null;

  @Column('int', { name: 'CODOBS', nullable: true })
  codobs: number | null;

  @Column('varchar', { name: 'DIAFIXO', nullable: true, length: 1 })
  diafixo: string | null;

  @Column('int', { name: 'PRAZOMENSAL', nullable: true })
  prazomensal: number | null;

  @Column('char', {
    name: 'TIPISENCAO',
    nullable: true,
    length: 1,
    default: () => "'D'",
  })
  tipisencao: string | null;

  @Column('char', { name: 'REGLAUDSAIDA', length: 1, default: () => "'D'" })
  reglaudsaida: string;

  @Column('char', { name: 'MODALIDADE', length: 1, default: () => "'A'" })
  modalidade: string;

  @Column('float', { name: 'VALNEGSC', precision: 53, default: () => '(0)' })
  valnegsc: number;

  @Column('float', { name: 'QTDNEG', precision: 53, default: () => '(0)' })
  qtdneg: number;

  @Column('datetime', { name: 'DTFINENTREGA', nullable: true })
  dtfinentrega: Date | null;

  @Column('char', { name: 'TIPCON', nullable: true, length: 1 })
  tipcon: string | null;

  @Column('datetime', { name: 'DTINIENTREGA', nullable: true })
  dtinientrega: Date | null;

  @Column('float', { name: 'PERCTOLEXCED', nullable: true, precision: 53 })
  perctolexced: number | null;

  @Column('char', { name: 'EXIGEPEDIDOPES', length: 1, default: () => "'S'" })
  exigepedidopes: string;

  @Column('float', { name: 'PPAUTASC', precision: 53, default: () => '(0)' })
  ppautasc: number;

  @Column('int', { name: 'AD_NUMCONTRATOPARC', nullable: true })
  adNumcontratoparc: number | null;

  @Column('varchar', { name: 'GRUPO', nullable: true, length: 30 })
  grupo: string | null;

  @OneToMany(
    () => AdProdservosEntity,
    (adProdservosEntity) => adProdservosEntity.numcontrato2,
  )
  adProdservos: AdProdservosEntity[];

  @OneToMany(
    () => AdPropostacontEntity,
    (adPropostacontEntity) => adPropostacontEntity.numcontrato2,
  )
  adPropostaconts: AdPropostacontEntity[];

  @OneToMany(
    () => AdPropostacontEntity,
    (adPropostacontEntity) => adPropostacontEntity.numcontrato3,
  )
  adPropostaconts2: AdPropostacontEntity[];

  @OneToMany(() => TapfatEntity, (tapfatEntity) => tapfatEntity.numcontrato)
  tapfats: TapfatEntity[];

  @OneToMany(() => TapmrmEntity, (tapmrmEntity) => tapmrmEntity.numcontrato)
  tapmrms: TapmrmEntity[];

  @OneToMany(() => TccratEntity, (tccratEntity) => tccratEntity.numcontrato)
  tccrats: TccratEntity[];

  @OneToMany(() => TcfmanEntity, (tcfmanEntity) => tcfmanEntity.adNumcontrato)
  tcfmen: TcfmanEntity[];

  @OneToMany(
    () => TcfoscabEntity,
    (tcfoscabEntity) => tcfoscabEntity.adNumcontrato,
  )
  tcfoscabs: TcfoscabEntity[];

  @OneToMany(() => TcsaveEntity, (tcsaveEntity) => tcsaveEntity.numcontrato2)
  tcsaves: TcsaveEntity[];

  @OneToMany(() => TcsbloEntity, (tcsbloEntity) => tcsbloEntity.numcontrato2)
  tcsblos: TcsbloEntity[];

  @OneToMany(() => TcsbmeEntity, (tcsbmeEntity) => tcsbmeEntity.numcontrato2)
  tcsbmes: TcsbmeEntity[];

  @OneToMany(() => TcscgrEntity, (tcscgrEntity) => tcscgrEntity.numcontrato2)
  tcscgrs: TcscgrEntity[];

  @OneToMany(() => TcscomEntity, (tcscomEntity) => tcscomEntity.numcontrato2)
  tcscoms: TcscomEntity[];

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tcscons)
  @JoinColumn([{ name: 'CODCID', referencedColumnName: 'codcid' }])
  codc: TsicidEntity;

  @ManyToOne(() => TgagpcEntity, (tgagpcEntity) => tgagpcEntity.tcscons)
  @JoinColumn([{ name: 'CODGPC', referencedColumnName: 'codgpc' }])
  codgpc: TgagpcEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tcscons)
  @JoinColumn([{ name: 'NUNOTAPEDLOC', referencedColumnName: 'nunota' }])
  nunotapedloc2: TgfcabEntity;

  @ManyToOne(() => TsimoeEntity, (tsimoeEntity) => tsimoeEntity.tcscons)
  @JoinColumn([{ name: 'CODMOEDA', referencedColumnName: 'codmoeda' }])
  codmoeda: TsimoeEntity;

  @ManyToOne(() => TgftitEntity, (tgftitEntity) => tgftitEntity.tcscons)
  @JoinColumn([{ name: 'TIPOTITULO', referencedColumnName: 'codtiptit' }])
  tipotitulo: TgftitEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tcscons)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat: TgfnatEntity;

  @ManyToOne(() => TcscstcEntity, (tcscstcEntity) => tcscstcEntity.tcscons)
  @JoinColumn([{ name: 'NUMCSTC', referencedColumnName: 'numcstc' }])
  numcstc: TcscstcEntity;

  @ManyToOne(() => TgfcriEntity, (tgfcriEntity) => tgfcriEntity.tcscons)
  @JoinColumn([{ name: 'CODCRITERIO', referencedColumnName: 'codcriterio' }])
  codcriterio: TgfcriEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tcscons)
  @JoinColumn([{ name: 'CODEMPRESP', referencedColumnName: 'codemp' }])
  codempresp: TgfempEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tcscons2)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @ManyToOne(() => TgasafEntity, (tgasafEntity) => tgasafEntity.tcscons)
  @JoinColumn([{ name: 'CODSAF', referencedColumnName: 'codsaf' }])
  codsaf: TgasafEntity;

  @ManyToOne(() => TgatdcEntity, (tgatdcEntity) => tgatdcEntity.tcscons)
  @JoinColumn([{ name: 'CODTDC', referencedColumnName: 'codtdc' }])
  codtdc: TgatdcEntity;

  @ManyToOne(() => TcsslaEntity, (tcsslaEntity) => tcsslaEntity.tcscons)
  @JoinColumn([{ name: 'NUSLA', referencedColumnName: 'nusla' }])
  nusla: TcsslaEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcscons)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcscons2)
  @JoinColumn([{ name: 'CODMONSANKHYA', referencedColumnName: 'codusu' }])
  codmonsankhya: TsiusuEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcscons)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tcscons)
  @JoinColumn([{ name: 'CODPROJSINT', referencedColumnName: 'codproj' }])
  codprojsint: TcsprjEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tcscons2)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj: TcsprjEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcscons2)
  @JoinColumn([{ name: 'CODPARCPREST', referencedColumnName: 'codparc' }])
  codparcprest: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcscons3)
  @JoinColumn([{ name: 'CODPARCSEC', referencedColumnName: 'codparc' }])
  codparcsec: TgfparEntity;

  @OneToMany(() => TcscveEntity, (tcscveEntity) => tcscveEntity.numcontrato2)
  tcscves: TcscveEntity[];

  @OneToMany(() => TcselcEntity, (tcselcEntity) => tcselcEntity.numcontrato2)
  tcselcs: TcselcEntity[];

  @OneToMany(() => TcsgecEntity, (tcsgecEntity) => tcsgecEntity.numcontrato2)
  tcsgecs: TcsgecEntity[];

  @OneToMany(() => TcsnteEntity, (tcsnteEntity) => tcsnteEntity.numcontrato2)
  tcsntes: TcsnteEntity[];

  @OneToMany(() => TcsoseEntity, (tcsoseEntity) => tcsoseEntity.numcontrato2)
  tcsoses: TcsoseEntity[];

  @OneToMany(() => TcspadEntity, (tcspadEntity) => tcspadEntity.numcontrato2)
  tcspads: TcspadEntity[];

  @OneToMany(() => TcspfpEntity, (tcspfpEntity) => tcspfpEntity.numcontrato2)
  tcspfps: TcspfpEntity[];

  @OneToMany(() => TcspitEntity, (tcspitEntity) => tcspitEntity.numcontrato2)
  tcspits: TcspitEntity[];

  @OneToMany(() => TcspscEntity, (tcspscEntity) => tcspscEntity.numcontrato2)
  tcspscs: TcspscEntity[];

  @OneToMany(() => TcsvpcEntity, (tcsvpcEntity) => tcsvpcEntity.numcontrato2)
  tcsvpcs: TcsvpcEntity[];

  @OneToMany(() => TgagtmEntity, (tgagtmEntity) => tgagtmEntity.numcontrato)
  tgagtms: TgagtmEntity[];

  @OneToMany(() => TgangrEntity, (tgangrEntity) => tgangrEntity.numcontrato)
  tgangrs: TgangrEntity[];

  @OneToMany(() => TgapesiEntity, (tgapesiEntity) => tgapesiEntity.numcontrato2)
  tgapesis: TgapesiEntity[];

  @OneToMany(() => TgapoiEntity, (tgapoiEntity) => tgapoiEntity.numcontrato2)
  tgapois: TgapoiEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.numcontrato2)
  tgfcabs: TgfcabEntity[];

  @OneToMany(() => TgfcriEntity, (tgfcriEntity) => tgfcriEntity.numcontrato)
  tgfcris: TgfcriEntity[];

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.numcontrato2)
  tgffins: TgffinEntity[];

  @OneToMany(() => TgfratEntity, (tgfratEntity) => tgfratEntity.numcontrato)
  tgfrats: TgfratEntity[];

  @OneToMany(() => TgfravEntity, (tgfravEntity) => tgfravEntity.numcontrato)
  tgfravs: TgfravEntity[];

  @OneToMany(() => TgfrcaEntity, (tgfrcaEntity) => tgfrcaEntity.numcontrato2)
  tgfrcas: TgfrcaEntity[];
}
