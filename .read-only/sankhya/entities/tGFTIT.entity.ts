import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { GfrfincategEntity } from './gFRFINCATEG.entity';
import { TcaparEntity } from './tCAPAR.entity';
import { TccnegEntity } from './tCCNEG.entity';
import { TceictnEntity } from './tCEICTN.entity';
import { TcsconEntity } from './tCSCON.entity';
import { TfpbenEntity } from './tFPBEN.entity';
import { TfpfinEntity } from './tFPFIN.entity';
import { TgarecEntity } from './tGAREC.entity';
import { TgfacrEntity } from './tGFACR.entity';
import { TgfagdEntity } from './tGFAGD.entity';
import { TgfattEntity } from './tGFATT.entity';
import { TgfbttEntity } from './tGFBTT.entity';
import { TgfclxEntity } from './tGFCLX.entity';
import { TgfconfcredEntity } from './tGFCONFCRED.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TgffpiEntity } from './tGFFPI.entity';
import { TgffttEntity } from './tGFFTT.entity';
import { TgfgcxEntity } from './tGFGCX.entity';
import { TgfmdcEntity } from './tGFMDC.entity';
import { TgfppgEntity } from './tGFPPG.entity';
import { TgfremEntity } from './tGFREM.entity';
import { TsimoeEntity } from './tSIMOE.entity';
import { TgfgttEntity } from './tGFGTT.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgftrcEntity } from './tGFTRC.entity';
import { TimimpEntity } from './tIMIMP.entity';
import { TimirbEntity } from './tIMIRB.entity';
import { TimtxcEntity } from './tIMTXC.entity';
import { TsiobcEntity } from './tSIOBC.entity';
import { TsiufsEntity } from './tSIUFS.entity';

@Index('PK_TGFTIT', ['codtiptit'], { unique: true })
@Index('TGFTIT_I01', ['codgrupotiptit'], {})
@Entity('TGFTIT', { schema: 'SANKHYA' })
export class TgftitEntity {
  @Column('smallint', { primary: true, name: 'CODTIPTIT' })
  codtiptit: number;

  @Column('char', { name: 'DESCRTIPTIT', length: 30 })
  descrtiptit: string;

  @Column('char', { name: 'ESPDOC', nullable: true, length: 2 })
  espdoc: string | null;

  @Column('smallint', { name: 'CARENCIA', nullable: true })
  carencia: number | null;

  @Column('varchar', { name: 'FISCAL', nullable: true, length: 101 })
  fiscal: string | null;

  @Column('smallint', { name: 'EXPGRS', nullable: true, default: () => '(0)' })
  expgrs: number | null;

  @Column('char', {
    name: 'EXPTES',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  exptes: string | null;

  @Column('float', { name: 'CARTAOTAXA', nullable: true, precision: 53 })
  cartaotaxa: number | null;

  @Column('char', {
    name: 'VALIDAQTDMAXTITVENCIDOS',
    length: 1,
    default: () => "'N'",
  })
  validaqtdmaxtitvencidos: string;

  @Column('char', { name: 'EXIGBAIXAACERTO', length: 1, default: () => "'N'" })
  exigbaixaacerto: string;

  @Column('char', { name: 'TRANSFDIF', length: 1, default: () => "'N'" })
  transfdif: string;

  @Column('smallint', { name: 'INDTIT', default: () => '(99)' })
  indtit: number;

  @Column('char', {
    name: 'TRANSFPEND',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  transfpend: string | null;

  @Column('char', {
    name: 'TRANSFBAIX',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  transfbaix: string | null;

  @Column('float', { name: 'PERCJUROS', nullable: true, precision: 53 })
  percjuros: number | null;

  @Column('float', { name: 'PERCMULTA', nullable: true, precision: 53 })
  percmulta: number | null;

  @Column('char', { name: 'EXIBBAIX', nullable: true, length: 250 })
  exibbaix: string | null;

  @Column('int', { name: 'CODCTACTB', nullable: true })
  codctactb: number | null;

  @Column('int', { name: 'CODCTACTB2', nullable: true })
  codctactb2: number | null;

  @Column('int', { name: 'CODCTACTB3', nullable: true })
  codctactb3: number | null;

  @Column('char', { name: 'BAIXACERTO', length: 1, default: () => "'S'" })
  baixacerto: string;

  @Column('float', { name: 'CARTAODESC', nullable: true, precision: 53 })
  cartaodesc: number | null;

  @Column('char', { name: 'INFCMC7', length: 1, default: () => "'N'" })
  infcmc7: string;

  @Column('char', { name: 'GRUPOLIMCRED', nullable: true, length: 20 })
  grupolimcred: string | null;

  @Column('char', { name: 'FASTUSA', length: 1, default: () => "'N'" })
  fastusa: string;

  @Column('float', { name: 'PERCCUSVAR', nullable: true, precision: 53 })
  perccusvar: number | null;

  @Column('float', { name: 'VLRCUSVAR', nullable: true, precision: 53 })
  vlrcusvar: number | null;

  @Column('image', { name: 'IMAGEM', nullable: true })
  imagem: Buffer | null;

  @Column('char', { name: 'FASTBAIXA', length: 1, default: () => "'N'" })
  fastbaixa: string;

  @Column('smallint', { name: 'PRAZO', default: () => '(0)' })
  prazo: number;

  @Column('smallint', { name: 'CODGRUPOTIPTIT', default: () => '(0)' })
  codgrupotiptit: number;

  @Column('char', { name: 'IMPBOLRENEG', length: 1, default: () => "'N'" })
  impbolreneg: string;

  @Column('varchar', {
    name: 'SUBTIPOVENDA',
    nullable: true,
    length: 2,
    default: () => "'0'",
  })
  subtipovenda: string | null;

  @Column('varchar', { name: 'CONFERENCIA', length: 1, default: () => "'N'" })
  conferencia: string;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('char', { name: 'IMPCOMPROVANTE', length: 1, default: () => "'N'" })
  impcomprovante: string;

  @Column('int', { name: 'CODRECGNRE', nullable: true })
  codrecgnre: number | null;

  @Column('int', { name: 'CODDETRECGNRE', nullable: true })
  coddetrecgnre: number | null;

  @Column('int', { name: 'CODPRODGNRE', nullable: true })
  codprodgnre: number | null;

  @Column('varchar', { name: 'TPAGNFCE', nullable: true, length: 2 })
  tpagnfce: string | null;

  @Column('char', { name: 'AJUSTAVP', length: 1, default: () => "'N'" })
  ajustavp: string;

  @Column('char', {
    name: 'UTILIZAPOS',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  utilizapos: string | null;

  @Column('smallint', { name: 'NROPARCELAS', default: () => '(0)' })
  nroparcelas: number;

  @Column('char', { name: 'INTEGRAECONECT', length: 1, default: () => "'N'" })
  integraeconect: string;

  @Column('int', { name: 'CODFINALIZADORA', nullable: true })
  codfinalizadora: number | null;

  @Column('int', { name: 'GRUPOFINALIZADORA', nullable: true })
  grupofinalizadora: number | null;

  @Column('varchar', { name: 'CODBANDEIRAECONECT', nullable: true, length: 32 })
  codbandeiraeconect: string | null;

  @Column('char', { name: 'CONVENIOECONECT', length: 1, default: () => "'N'" })
  convenioeconect: string;

  @Column('smallint', { name: 'DIAVENC', nullable: true })
  diavenc: number | null;

  @Column('varchar', { name: 'TIPVENC', nullable: true, length: 1 })
  tipvenc: string | null;

  @Column('varchar', { name: 'OPERACAOCTF', nullable: true, length: 3 })
  operacaoctf: string | null;

  @Column('smallint', { name: 'QTDPARCELCTF', nullable: true })
  qtdparcelctf: number | null;

  @Column('char', { name: 'RECEBANTAPROV', nullable: true, length: 1 })
  recebantaprov: string | null;

  @Column('varchar', {
    name: 'ARREDPRIMEIRAPARC',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  arredprimeiraparc: string | null;

  @Column('char', { name: 'TRUNCPARCELA', nullable: true, length: 1 })
  truncparcela: string | null;

  @Column('char', { name: 'TIMUSADOLOCACAO', nullable: true, length: 1 })
  timusadolocacao: string | null;

  @Column('varchar', { name: 'TIPDOCRURAL', nullable: true, length: 1 })
  tipdocrural: string | null;

  @Column('varchar', { name: 'PROIBIMPBOL', nullable: true, length: 1 })
  proibimpbol: string | null;

  @Column('char', { name: 'ALTERASIMULTPV', nullable: true, length: 1 })
  alterasimultpv: string | null;

  @Column('varchar', { name: 'DESCRTPAGNFCE', nullable: true, length: 60 })
  descrtpagnfce: string | null;

  @Column('varchar', { name: 'INDRECEFDCONT', nullable: true, length: 2 })
  indrecefdcont: string | null;

  @Column('varchar', { name: 'INFCOMPLEFDCONT', nullable: true, length: 255 })
  infcomplefdcont: string | null;

  @Column('char', { name: 'CONSDIASUTEIS', nullable: true, length: 1 })
  consdiasuteis: string | null;

  @Column('varchar', { name: 'CREDENCIADORACFE', nullable: true, length: 5 })
  credenciadoracfe: string | null;

  @Column('int', { name: 'NROPARCELASMAX', nullable: true })
  nroparcelasmax: number | null;

  @Column('money', { name: 'VLRPARCMINCART', nullable: true })
  vlrparcmincart: number | null;

  @Column('varchar', {
    name: 'ULTILIZAPDVWEB',
    length: 1,
    default: () => "'N'",
  })
  ultilizapdvweb: string;

  @Column('char', { name: 'NSUOPCIONALPOS', nullable: true, length: 1 })
  nsuopcionalpos: string | null;

  @ManyToMany(
    () => GfrfincategEntity,
    (gfrfincategEntity) => gfrfincategEntity.tgftits,
  )
  @JoinTable({
    name: 'GFRFINCATEGTIT',
    joinColumns: [{ name: 'CODTIPTIT', referencedColumnName: 'codtiptit' }],
    inverseJoinColumns: [{ name: 'CODCATEG', referencedColumnName: 'id' }],
    schema: 'SANKHYA',
  })
  gfrfincategs: GfrfincategEntity[];

  @OneToMany(() => TcaparEntity, (tcaparEntity) => tcaparEntity.codtiptit)
  tcapars: TcaparEntity[];

  @OneToMany(() => TccnegEntity, (tccnegEntity) => tccnegEntity.codtiptit)
  tccnegs: TccnegEntity[];

  @OneToMany(() => TceictnEntity, (tceictnEntity) => tceictnEntity.codtiptit)
  tceictns: TceictnEntity[];

  @OneToMany(() => TcsconEntity, (tcsconEntity) => tcsconEntity.tipotitulo)
  tcscons: TcsconEntity[];

  @OneToMany(() => TfpbenEntity, (tfpbenEntity) => tfpbenEntity.codtiptit)
  tfpbens: TfpbenEntity[];

  @OneToMany(() => TfpfinEntity, (tfpfinEntity) => tfpfinEntity.codtiptit)
  tfpfins: TfpfinEntity[];

  @OneToMany(() => TgarecEntity, (tgarecEntity) => tgarecEntity.codtiptit)
  tgarecs: TgarecEntity[];

  @OneToMany(() => TgfacrEntity, (tgfacrEntity) => tgfacrEntity.codtiptit2)
  tgfacrs: TgfacrEntity[];

  @OneToMany(() => TgfagdEntity, (tgfagdEntity) => tgfagdEntity.codtiptit)
  tgfagds: TgfagdEntity[];

  @OneToMany(() => TgfattEntity, (tgfattEntity) => tgfattEntity.codtiptitrec)
  tgfatts: TgfattEntity[];

  @OneToMany(() => TgfattEntity, (tgfattEntity) => tgfattEntity.codtiptitdesp)
  tgfatts2: TgfattEntity[];

  @OneToMany(() => TgfbttEntity, (tgfbttEntity) => tgfbttEntity.codtiptit2)
  tgfbtts: TgfbttEntity[];

  @OneToMany(() => TgfclxEntity, (tgfclxEntity) => tgfclxEntity.codtiptit)
  tgfclxes: TgfclxEntity[];

  @OneToMany(
    () => TgfconfcredEntity,
    (tgfconfcredEntity) => tgfconfcredEntity.codtiptit,
  )
  tgfconfcreds: TgfconfcredEntity[];

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.codtiptit)
  tgffins: TgffinEntity[];

  @OneToMany(() => TgffpiEntity, (tgffpiEntity) => tgffpiEntity.codtiptit2)
  tgffpis: TgffpiEntity[];

  @OneToMany(() => TgffttEntity, (tgffttEntity) => tgffttEntity.codtiptit2)
  tgfftts: TgffttEntity[];

  @OneToMany(() => TgfgcxEntity, (tgfgcxEntity) => tgfgcxEntity.codtiptit)
  tgfgcxes: TgfgcxEntity[];

  @OneToMany(() => TgfmdcEntity, (tgfmdcEntity) => tgfmdcEntity.codtiptit)
  tgfmdcs: TgfmdcEntity[];

  @OneToMany(() => TgfppgEntity, (tgfppgEntity) => tgfppgEntity.codtiptitpad)
  tgfppgs: TgfppgEntity[];

  @OneToMany(() => TgfremEntity, (tgfremEntity) => tgfremEntity.codtiptit)
  tgfrems: TgfremEntity[];

  @ManyToOne(() => TsimoeEntity, (tsimoeEntity) => tsimoeEntity.tgftits)
  @JoinColumn([{ name: 'CODMOEDA', referencedColumnName: 'codmoeda' }])
  codmoeda: TsimoeEntity;

  @ManyToOne(() => TgfgttEntity, (tgfgttEntity) => tgfgttEntity.tgftits)
  @JoinColumn([
    { name: 'CODGRUPOTIPTIT', referencedColumnName: 'codgrupotiptit' },
  ])
  codgrupotiptit2: TgfgttEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgftits)
  @JoinColumn([{ name: 'CODPARCTEF', referencedColumnName: 'codparc' }])
  codparctef: TgfparEntity;

  @OneToMany(() => TgftrcEntity, (tgftrcEntity) => tgftrcEntity.codtiptitorig)
  tgftrcs: TgftrcEntity[];

  @OneToMany(() => TimimpEntity, (timimpEntity) => timimpEntity.impcodtiptit)
  timimps: TimimpEntity[];

  @OneToMany(() => TimirbEntity, (timirbEntity) => timirbEntity.irbcodtiptit)
  timirbs: TimirbEntity[];

  @OneToMany(() => TimtxcEntity, (timtxcEntity) => timtxcEntity.txccodtiptit)
  timtxcs: TimtxcEntity[];

  @OneToMany(() => TsiobcEntity, (tsiobcEntity) => tsiobcEntity.codtiptit)
  tsiobcs: TsiobcEntity[];

  @OneToMany(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tiptitgnrefcpst)
  tsiufs: TsiufsEntity[];
}
