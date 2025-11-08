import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { AudittfpfolEntity } from './aUDITTFPFOL.entity';
import { TfpacuEntity } from './tFPACU.entity';
import { TfpafgEntity } from './tFPAFG.entity';
import { TfpautEntity } from './tFPAUT.entity';
import { TfpbenEntity } from './tFPBEN.entity';
import { TfpcevEntity } from './tFPCEV.entity';
import { TfpconEntity } from './tFPCON.entity';
import { TfpctbEntity } from './tFPCTB.entity';
import { TfpebaEntity } from './tFPEBA.entity';
import { TfpepfEntity } from './tFPEPF.entity';
import { TfpeprEntity } from './tFPEPR.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TsimoeEntity } from './tSIMOE.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpfolEntity } from './tFPFOL.entity';
import { TfpfoltesteEntity } from './tFPFOLTESTE.entity';
import { TfphfxEntity } from './tFPHFX.entity';
import { TfpincEntity } from './tFPINC.entity';
import { TfpmdeEntity } from './tFPMDE.entity';
import { TfpmedEntity } from './tFPMED.entity';
import { TfpmovEntity } from './tFPMOV.entity';
import { TfpmovantEntity } from './tFPMOVANT.entity';
import { TfpnewmedEntity } from './tFPNEWMED.entity';
import { TfppreEntity } from './tFPPRE.entity';
import { TfprbrEntity } from './tFPRBR.entity';
import { TfpregcalcEntity } from './tFPREGCALC.entity';
import { TfprteEntity } from './tFPRTE.entity';
import { TfprtmEntity } from './tFPRTM.entity';
import { TfprttEntity } from './tFPRTT.entity';
import { TfpsitEntity } from './tFPSIT.entity';
import { TgffocEntity } from './tGFFOC.entity';

@Index('PK_TFPEVE', ['codevento'], { unique: true })
@Index('TFPEVE_I01', ['baseinfrend', 'codevento'], {})
@Index('TFPEVE_I02', ['codeveresilicao'], {})
@Index('TFPEVE_I03', ['identificacao'], {})
@Index('TFPEVE_I04', ['incsobremedias'], {})
@Index('TFPEVE_I05', ['folha'], {})
@Index('TFPEVE_I06', ['ferias'], {})
@Index('TFPEVE_I07', ['decterc'], {})
@Index('TFPEVE_I08', ['identificacao', 'codevento'], {})
@Entity('TFPEVE', { schema: 'SANKHYA' })
export class TfpeveEntity {
  @Column('smallint', { primary: true, name: 'CODEVENTO' })
  codevento: number;

  @Column('char', { name: 'DESCREVENTO', length: 30 })
  descrevento: string;

  @Column('smallint', { name: 'TIPEVENTO', default: () => '(-1)' })
  tipevento: number;

  @Column('char', { name: 'UNIDADE', length: 1, default: () => "'D'" })
  unidade: string;

  @Column('smallint', { name: 'CODFORM', nullable: true })
  codform: number | null;

  @Column('float', { name: 'INDICE', nullable: true, precision: 53 })
  indice: number | null;

  @Column('money', { name: 'VLREVENTO', nullable: true })
  vlrevento: number | null;

  @Column('char', {
    name: 'IMPHOLLERIT',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  imphollerit: string | null;

  @Column('char', {
    name: 'INCSOBREMEDIAS',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  incsobremedias: string | null;

  @Column('char', { name: 'BASEINFREND', length: 1, default: () => "'N'" })
  baseinfrend: string;

  @Column('char', { name: 'BASEMARGCONSIG', length: 1, default: () => "'N'" })
  basemargconsig: string;

  @Column('char', { name: 'PROTEGIDO', length: 1, default: () => "'N'" })
  protegido: string;

  @Column('float', { name: 'SEQCALCULO', nullable: true, precision: 53 })
  seqcalculo: number | null;

  @Column('char', { name: 'ACUMULADOR', length: 1, default: () => "'N'" })
  acumulador: string;

  @Column('char', { name: 'BASERAIS', length: 1, default: () => "'N'" })
  baserais: string;

  @Column('char', { name: 'BASELIQUIDO', length: 1, default: () => "'N'" })
  baseliquido: string;

  @Column('char', { name: 'FOLHA', length: 1, default: () => "'S'" })
  folha: string;

  @Column('char', { name: 'FERIAS', length: 1, default: () => "'N'" })
  ferias: string;

  @Column('char', { name: 'RESCISAO', length: 1, default: () => "'N'" })
  rescisao: string;

  @Column('char', { name: 'DECTERC', length: 1, default: () => "'N'" })
  decterc: string;

  @Column('char', { name: 'SEMANAL', length: 1, default: () => "'N'" })
  semanal: string;

  @Column('char', { name: 'ADIANTAMENTO', length: 1, default: () => "'N'" })
  adiantamento: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('text', { name: 'DOCUMENTACAO', nullable: true })
  documentacao: string | null;

  @Column('smallint', { name: 'PROVISAOFIN', default: () => '(0)' })
  provisaofin: number;

  @Column('char', { name: 'PENSAO', length: 1, default: () => "'N'" })
  pensao: string;

  @Column('char', { name: 'INCORPORA', length: 1, default: () => "'N'" })
  incorpora: string;

  @Column('smallint', { name: 'CODEVERESILICAO', nullable: true })
  codeveresilicao: number | null;

  @Column('char', { name: 'RESILICAO', length: 1, default: () => "'N'" })
  resilicao: string;

  @Column('char', { name: 'COMPLEMENTORESC', length: 1, default: () => "'N'" })
  complementoresc: string;

  @Column('char', { name: 'REGCALCULO', nullable: true, length: 1 })
  regcalculo: string | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('char', { name: 'SANKHYA', length: 1, default: () => "'N'" })
  sankhya: string;

  @Column('smallint', { name: 'IDENTIFICACAO', default: () => '(0)' })
  identificacao: number;

  @Column('smallint', { name: 'TIPOINSS', default: () => '(0)' })
  tipoinss: number;

  @Column('smallint', { name: 'TIPOIRRF', default: () => '(0)' })
  tipoirrf: number;

  @Column('char', { name: 'FGTS', length: 1, default: () => "'N'" })
  fgts: string;

  @Column('char', { name: 'FGTSDECTERCEIRO', length: 1, default: () => "'N'" })
  fgtsdecterceiro: string;

  @Column('char', { name: 'BASEAUXILIAR', length: 1, default: () => "'N'" })
  baseauxiliar: string;

  @Column('char', { name: 'PIS', length: 1, default: () => "'N'" })
  pis: string;

  @Column('char', { name: 'ISS', length: 1, default: () => "'N'" })
  iss: string;

  @Column('smallint', { name: 'INFCOMPLRAIS1', default: () => '(0)' })
  infcomplrais1: number;

  @Column('smallint', { name: 'INFCOMPLRAIS2', default: () => '(0)' })
  infcomplrais2: number;

  @Column('char', { name: 'GRRFMES', length: 1, default: () => "'N'" })
  grrfmes: string;

  @Column('char', { name: 'GRRFMESANTERIOR', length: 1, default: () => "'N'" })
  grrfmesanterior: string;

  @Column('char', { name: 'GRRFINDENIZACAO', length: 1, default: () => "'N'" })
  grrfindenizacao: string;

  @Column('smallint', { name: 'BASESEFIP', default: () => '(0)' })
  basesefip: number;

  @Column('char', { name: 'FGTSSEFIP', length: 1, default: () => "'N'" })
  fgtssefip: string;

  @Column('char', { name: 'INSSSEFIP', length: 1, default: () => "'N'" })
  insssefip: string;

  @Column('smallint', { name: 'CODEVECORRELATO', nullable: true })
  codevecorrelato: number | null;

  @Column('smallint', { name: 'RUBRICAMTE', nullable: true })
  rubricamte: number | null;

  @Column('smallint', { name: 'CODOUTRASMTE', nullable: true })
  codoutrasmte: number | null;

  @Column('float', { name: 'INDICEADMEDIAS', nullable: true, precision: 53 })
  indiceadmedias: number | null;

  @Column('char', { name: 'USADOESOCIAL', length: 1, default: () => "'N'" })
  usadoesocial: string;

  @Column('varchar', { name: 'CODNATRUBRICA', nullable: true, length: 4 })
  codnatrubrica: string | null;

  @Column('char', { name: 'CONTRIBSIND', length: 1, default: () => "'N'" })
  contribsind: string;

  @Column('char', { name: 'RUBRICADSR', length: 1, default: () => "'N'" })
  rubricadsr: string;

  @Column('char', { name: 'RUBRICA13', length: 1, default: () => "'N'" })
  rubrica13: string;

  @Column('char', { name: 'RUBRICAFERIAS', length: 1, default: () => "'N'" })
  rubricaferias: string;

  @Column('char', { name: 'RUBRICARESCISAO', length: 1, default: () => "'N'" })
  rubricarescisao: string;

  @Column('char', { name: 'TEMCOMPLEMENTO', length: 1, default: () => "'N'" })
  temcomplemento: string;

  @Column('char', { name: 'COMPLEMENTAR', length: 1, default: () => "'N'" })
  complementar: string;

  @Column('char', { name: 'PLR', length: 1, default: () => "'N'" })
  plr: string;

  @Column('char', { name: 'INTEGRACTB', length: 1, default: () => "'S'" })
  integractb: string;

  @Column('varchar', { name: 'DSCSALVAR', nullable: true, length: 90 })
  dscsalvar: string | null;

  @Column('char', { name: 'FGTSRESCISAO', length: 1, default: () => "'N'" })
  fgtsrescisao: string;

  @Column('smallint', { name: 'CODCRIRATEIO', nullable: true })
  codcrirateio: number | null;

  @Column('varchar', { name: 'GRUPOMEDIAS', nullable: true, length: 20 })
  grupomedias: string | null;

  @Column('char', { name: 'PENSAOSALLIQUIDO', length: 1, default: () => "'N'" })
  pensaosalliquido: string;

  @Column('char', { name: 'PENSAOSALBRUTO', length: 1, default: () => "'N'" })
  pensaosalbruto: string;

  @Column('char', { name: 'PENSAOSALMINIMO', length: 1, default: () => "'N'" })
  pensaosalminimo: string;

  @Column('char', { name: 'CODINCCP', nullable: true, length: 2 })
  codinccp: string | null;

  @Column('varchar', { name: 'CODINCIRRF', nullable: true, length: 4 })
  codincirrf: string | null;

  @Column('char', { name: 'CODINCFGTS', nullable: true, length: 2 })
  codincfgts: string | null;

  @Column('char', { name: 'CODINCSIND', nullable: true, length: 2 })
  codincsind: string | null;

  @Column('int', { name: 'GRUPOEVENTO', default: () => '(0)' })
  grupoevento: number;

  @Column('int', { name: 'PSEUDOCODEVENTO', nullable: true })
  pseudocodevento: number | null;

  @Column('char', { name: 'USACODMOEDA', length: 1, default: () => "'N'" })
  usacodmoeda: string;

  @Column('char', { name: 'INDENIZACAOAPI', length: 1, default: () => "'N'" })
  indenizacaoapi: string;

  @Column('varchar', { name: 'ATIVOW', length: 1, default: () => "'N'" })
  ativow: string;

  @Column('varchar', { name: 'CHECKSUM', nullable: true, length: 64 })
  checksum: string | null;

  @Column('char', { name: 'INTERMITENTE', length: 1, default: () => "'N'" })
  intermitente: string;

  @Column('char', { name: 'EVENTOFALTA', nullable: true, length: 1 })
  eventofalta: string | null;

  @Column('char', { name: 'EVENTODSR', nullable: true, length: 1 })
  eventodsr: string | null;

  @Column('varchar', { name: 'UTSALBASEARED', length: 1, default: () => "'N'" })
  utsalbaseared: string;

  @Column('varchar', { name: 'CODEVEFLFER', length: 1, default: () => "'N'" })
  codeveflfer: string;

  @Column('varchar', { name: 'REFLEXIVOS', nullable: true, length: 100 })
  reflexivos: string | null;

  @Column('varchar', {
    name: 'CODEVEFLRES',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  codeveflres: string | null;

  @Column('char', { name: 'CONSPROGFER', length: 1, default: () => "'N'" })
  consprogfer: string;

  @Column('int', { name: 'DIASCPROGFER', nullable: true, default: () => '(0)' })
  diascprogfer: number | null;

  @Column('datetime', {
    name: 'DTINATAPARDE',
    nullable: true,
    default: () => "'01/01/1900'",
  })
  dtinataparde: Date | null;

  @Column('char', { name: 'USALEI10820', length: 1, default: () => "'N'" })
  usalei10820: string;

  @Column('smallint', { name: 'IGPMCOMISSAO', nullable: true })
  igpmcomissao: number | null;

  @Column('smallint', { name: 'INPCCOMISSAO', nullable: true })
  inpccomissao: number | null;

  @Column('varchar', {
    name: 'PROVIDECTERSAL',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  providectersal: string | null;

  @Column('varchar', {
    name: 'PROVIFERIAS',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  proviferias: string | null;

  @Column('datetime', { name: 'DTATUALIZACAO', nullable: true })
  dtatualizacao: Date | null;

  @Column('char', { name: 'EVENTORRA', length: 1, default: () => "'N'" })
  eventorra: string;

  @Column('varchar', { name: 'CARACTERISTICA', nullable: true, length: 25 })
  caracteristica: string | null;

  @Column('varchar', {
    name: 'CRIAEVTATUALIZACAO',
    length: 1,
    default: () => "'N'",
  })
  criaevtatualizacao: string;

  @Column('varchar', { name: 'CRIADOW', nullable: true, length: 1 })
  criadow: string | null;

  @Column('varchar', { name: 'CODINCPIS', nullable: true, length: 2 })
  codincpis: string | null;

  @Column('varchar', { name: 'PISDECTERCEIRO', nullable: true, length: 1 })
  pisdecterceiro: string | null;

  @Column('varchar', { name: 'HASH', nullable: true, length: 255 })
  hash: string | null;

  @Column('varchar', { name: 'AVULSO', length: 1, default: () => "'N'" })
  avulso: string;

  @OneToMany(
    () => AudittfpfolEntity,
    (audittfpfolEntity) => audittfpfolEntity.codevento2,
  )
  audittfpfols: AudittfpfolEntity[];

  @OneToMany(() => TfpacuEntity, (tfpacuEntity) => tfpacuEntity.codevento2)
  tfpacus: TfpacuEntity[];

  @OneToMany(() => TfpafgEntity, (tfpafgEntity) => tfpafgEntity.codevento)
  tfpafgs: TfpafgEntity[];

  @OneToMany(() => TfpautEntity, (tfpautEntity) => tfpautEntity.codevento)
  tfpauts: TfpautEntity[];

  @OneToMany(() => TfpbenEntity, (tfpbenEntity) => tfpbenEntity.codeventoemp)
  tfpbens: TfpbenEntity[];

  @OneToMany(() => TfpbenEntity, (tfpbenEntity) => tfpbenEntity.codevento)
  tfpbens2: TfpbenEntity[];

  @OneToMany(() => TfpcevEntity, (tfpcevEntity) => tfpcevEntity.codevento2)
  tfpcevs: TfpcevEntity[];

  @OneToMany(() => TfpconEntity, (tfpconEntity) => tfpconEntity.codevento)
  tfpcons: TfpconEntity[];

  @OneToMany(() => TfpctbEntity, (tfpctbEntity) => tfpctbEntity.codevento)
  tfpctbs: TfpctbEntity[];

  @OneToMany(() => TfpebaEntity, (tfpebaEntity) => tfpebaEntity.codeventoacum2)
  tfpebas: TfpebaEntity[];

  @OneToMany(() => TfpebaEntity, (tfpebaEntity) => tfpebaEntity.codeventocomp2)
  tfpebas2: TfpebaEntity[];

  @OneToMany(() => TfpepfEntity, (tfpepfEntity) => tfpepfEntity.codeventocor)
  tfpepfs: TfpepfEntity[];

  @OneToMany(() => TfpepfEntity, (tfpepfEntity) => tfpepfEntity.codeventojur)
  tfpepfs2: TfpepfEntity[];

  @OneToMany(() => TfpepfEntity, (tfpepfEntity) => tfpepfEntity.codeventodif)
  tfpepfs3: TfpepfEntity[];

  @OneToOne(() => TfpepfEntity, (tfpepfEntity) => tfpepfEntity.codevento2)
  tfpepf: TfpepfEntity;

  @OneToMany(() => TfpeprEntity, (tfpeprEntity) => tfpeprEntity.codevento2)
  tfpeprs: TfpeprEntity[];

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tfpeves)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tfpeves)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat: TgfnatEntity;

  @ManyToOne(() => TsimoeEntity, (tsimoeEntity) => tsimoeEntity.tfpeves)
  @JoinColumn([{ name: 'CODMOEDA', referencedColumnName: 'codmoeda' }])
  codmoeda: TsimoeEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpeves)
  @JoinColumn([{ name: 'CODEVERESILICAO', referencedColumnName: 'codevento' }])
  codeveresilicao2: TfpeveEntity;

  @OneToMany(
    () => TfpeveEntity,
    (tfpeveEntity) => tfpeveEntity.codeveresilicao2,
  )
  tfpeves: TfpeveEntity[];

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpeves2)
  @JoinColumn([
    { name: 'CODEVECOMPLEMENTO', referencedColumnName: 'codevento' },
  ])
  codevecomplemento: TfpeveEntity;

  @OneToMany(
    () => TfpeveEntity,
    (tfpeveEntity) => tfpeveEntity.codevecomplemento,
  )
  tfpeves2: TfpeveEntity[];

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpeves3)
  @JoinColumn([{ name: 'CODEVERRACPL', referencedColumnName: 'codevento' }])
  codeverracpl: TfpeveEntity;

  @OneToMany(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.codeverracpl)
  tfpeves3: TfpeveEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpeves)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TfpfolEntity, (tfpfolEntity) => tfpfolEntity.codevento2)
  tfpfols: TfpfolEntity[];

  @OneToMany(() => TfpfolEntity, (tfpfolEntity) => tfpfolEntity.codeventoorig)
  tfpfols2: TfpfolEntity[];

  @OneToMany(
    () => TfpfoltesteEntity,
    (tfpfoltesteEntity) => tfpfoltesteEntity.codeventoorig,
  )
  tfpfoltestes: TfpfoltesteEntity[];

  @OneToMany(
    () => TfpfoltesteEntity,
    (tfpfoltesteEntity) => tfpfoltesteEntity.codevento2,
  )
  tfpfoltestes2: TfpfoltesteEntity[];

  @OneToMany(() => TfphfxEntity, (tfphfxEntity) => tfphfxEntity.codevento)
  tfphfxes: TfphfxEntity[];

  @OneToMany(() => TfpincEntity, (tfpincEntity) => tfpincEntity.codevento2)
  tfpincs: TfpincEntity[];

  @OneToMany(() => TfpmdeEntity, (tfpmdeEntity) => tfpmdeEntity.codevento2)
  tfpmdes: TfpmdeEntity[];

  @OneToMany(() => TfpmedEntity, (tfpmedEntity) => tfpmedEntity.codevento2)
  tfpmeds: TfpmedEntity[];

  @OneToMany(() => TfpmovEntity, (tfpmovEntity) => tfpmovEntity.codevento2)
  tfpmovs: TfpmovEntity[];

  @OneToMany(
    () => TfpmovantEntity,
    (tfpmovantEntity) => tfpmovantEntity.codevento2,
  )
  tfpmovants: TfpmovantEntity[];

  @OneToMany(
    () => TfpnewmedEntity,
    (tfpnewmedEntity) => tfpnewmedEntity.codevento2,
  )
  tfpnewmeds: TfpnewmedEntity[];

  @OneToMany(() => TfppreEntity, (tfppreEntity) => tfppreEntity.codevendomin)
  tfppres: TfppreEntity[];

  @OneToMany(() => TfppreEntity, (tfppreEntity) => tfppreEntity.codevenexcnot)
  tfppres2: TfppreEntity[];

  @OneToMany(() => TfppreEntity, (tfppreEntity) => tfppreEntity.codevenextnot)
  tfppres3: TfppreEntity[];

  @OneToMany(() => TfppreEntity, (tfppreEntity) => tfppreEntity.codevenfaltas)
  tfppres4: TfppreEntity[];

  @OneToMany(() => TfppreEntity, (tfppreEntity) => tfppreEntity.codevennotur)
  tfppres5: TfppreEntity[];

  @OneToMany(() => TfppreEntity, (tfppreEntity) => tfppreEntity.codeveindeniza)
  tfppres6: TfppreEntity[];

  @OneToMany(() => TfppreEntity, (tfppreEntity) => tfppreEntity.codevenbhoras)
  tfppres7: TfppreEntity[];

  @OneToMany(() => TfppreEntity, (tfppreEntity) => tfppreEntity.codevenatraso)
  tfppres8: TfppreEntity[];

  @OneToMany(() => TfppreEntity, (tfppreEntity) => tfppreEntity.codevencred)
  tfppres9: TfppreEntity[];

  @OneToMany(() => TfppreEntity, (tfppreEntity) => tfppreEntity.codevendeb)
  tfpprs: TfppreEntity[];

  @OneToMany(() => TfppreEntity, (tfppreEntity) => tfppreEntity.codevendfcnot)
  tfpprs2: TfppreEntity[];

  @OneToMany(() => TfppreEntity, (tfppreEntity) => tfppreEntity.evecredlimsem)
  tfpprs3: TfppreEntity[];

  @OneToMany(() => TfppreEntity, (tfppreEntity) => tfppreEntity.evejustacfaixa)
  tfpprs4: TfppreEntity[];

  @OneToMany(
    () => TfppreEntity,
    (tfppreEntity) => tfppreEntity.codevesobreaviso,
  )
  tfpprs5: TfppreEntity[];

  @OneToMany(() => TfppreEntity, (tfppreEntity) => tfppreEntity.codeveind12X)
  tfpprs6: TfppreEntity[];

  @OneToMany(() => TfppreEntity, (tfppreEntity) => tfppreEntity.codevesum4)
  tfpprs7: TfppreEntity[];

  @OneToMany(() => TfppreEntity, (tfppreEntity) => tfppreEntity.codevesum444Not)
  tfpprs8: TfppreEntity[];

  @OneToMany(() => TfppreEntity, (tfppreEntity) => tfppreEntity.evejustacdomfer)
  tfpprs9: TfppreEntity[];

  @OneToMany(() => TfppreEntity, (tfppreEntity) => tfppreEntity.evejustacfaixa2)
  tfppr10: TfppreEntity[];

  @OneToMany(
    () => TfppreEntity,
    (tfppreEntity) => tfppreEntity.evesemjustacfaixa,
  )
  tfppr11: TfppreEntity[];

  @OneToMany(
    () => TfppreEntity,
    (tfppreEntity) => tfppreEntity.evesemjustacfaixa2,
  )
  tfppr12: TfppreEntity[];

  @OneToMany(
    () => TfppreEntity,
    (tfppreEntity) => tfppreEntity.evesemjustacdomfer,
  )
  tfppr13: TfppreEntity[];

  @OneToMany(() => TfppreEntity, (tfppreEntity) => tfppreEntity.codevennoturlav)
  tfppr14: TfppreEntity[];

  @OneToMany(() => TfppreEntity, (tfppreEntity) => tfppreEntity.codevenpospri)
  tfppr15: TfppreEntity[];

  @OneToMany(() => TfppreEntity, (tfppreEntity) => tfppreEntity.codevenpri)
  tfppr16: TfppreEntity[];

  @OneToMany(() => TfprbrEntity, (tfprbrEntity) => tfprbrEntity.codevento2)
  tfprbrs: TfprbrEntity[];

  @OneToMany(
    () => TfpregcalcEntity,
    (tfpregcalcEntity) => tfpregcalcEntity.evecredlimsem,
  )
  tfpregcalcs: TfpregcalcEntity[];

  @OneToMany(
    () => TfpregcalcEntity,
    (tfpregcalcEntity) => tfpregcalcEntity.codevendeb,
  )
  tfpregcalcs2: TfpregcalcEntity[];

  @OneToMany(
    () => TfpregcalcEntity,
    (tfpregcalcEntity) => tfpregcalcEntity.evesemjustacfaixa,
  )
  tfpregcalcs3: TfpregcalcEntity[];

  @OneToMany(
    () => TfpregcalcEntity,
    (tfpregcalcEntity) => tfpregcalcEntity.evesemjustacdomfer,
  )
  tfpregcalcs4: TfpregcalcEntity[];

  @OneToMany(
    () => TfpregcalcEntity,
    (tfpregcalcEntity) => tfpregcalcEntity.codevennoturlav,
  )
  tfpregcalcs5: TfpregcalcEntity[];

  @OneToMany(
    () => TfpregcalcEntity,
    (tfpregcalcEntity) => tfpregcalcEntity.codevenfaltas,
  )
  tfpregcalcs6: TfpregcalcEntity[];

  @OneToMany(
    () => TfpregcalcEntity,
    (tfpregcalcEntity) => tfpregcalcEntity.evesemjustacfaixa2,
  )
  tfpregcalcs7: TfpregcalcEntity[];

  @OneToMany(
    () => TfpregcalcEntity,
    (tfpregcalcEntity) => tfpregcalcEntity.codeveindeniza,
  )
  tfpregcalcs8: TfpregcalcEntity[];

  @OneToMany(
    () => TfpregcalcEntity,
    (tfpregcalcEntity) => tfpregcalcEntity.codevesum444Not,
  )
  tfpregcalcs9: TfpregcalcEntity[];

  @OneToMany(
    () => TfpregcalcEntity,
    (tfpregcalcEntity) => tfpregcalcEntity.codevesum4,
  )
  tfpregcals: TfpregcalcEntity[];

  @OneToMany(
    () => TfpregcalcEntity,
    (tfpregcalcEntity) => tfpregcalcEntity.evejustacdomfer,
  )
  tfpregcals2: TfpregcalcEntity[];

  @OneToMany(
    () => TfpregcalcEntity,
    (tfpregcalcEntity) => tfpregcalcEntity.evejustacfaixa,
  )
  tfpregcals3: TfpregcalcEntity[];

  @OneToMany(
    () => TfpregcalcEntity,
    (tfpregcalcEntity) => tfpregcalcEntity.evejustacfaixa2,
  )
  tfpregcals4: TfpregcalcEntity[];

  @OneToMany(
    () => TfpregcalcEntity,
    (tfpregcalcEntity) => tfpregcalcEntity.codevenbhoras,
  )
  tfpregcals5: TfpregcalcEntity[];

  @OneToMany(
    () => TfpregcalcEntity,
    (tfpregcalcEntity) => tfpregcalcEntity.codevenatraso,
  )
  tfpregcals6: TfpregcalcEntity[];

  @OneToMany(
    () => TfpregcalcEntity,
    (tfpregcalcEntity) => tfpregcalcEntity.codevencred,
  )
  tfpregcals7: TfpregcalcEntity[];

  @OneToMany(
    () => TfpregcalcEntity,
    (tfpregcalcEntity) => tfpregcalcEntity.codevendfcnot,
  )
  tfpregcals8: TfpregcalcEntity[];

  @OneToMany(
    () => TfpregcalcEntity,
    (tfpregcalcEntity) => tfpregcalcEntity.codevenexcnot,
  )
  tfpregcals9: TfpregcalcEntity[];

  @OneToMany(
    () => TfpregcalcEntity,
    (tfpregcalcEntity) => tfpregcalcEntity.codevenextnot,
  )
  tfpregcal10: TfpregcalcEntity[];

  @OneToMany(() => TfprteEntity, (tfprteEntity) => tfprteEntity.codevento2)
  tfprtes: TfprteEntity[];

  @OneToMany(() => TfprtmEntity, (tfprtmEntity) => tfprtmEntity.codevento2)
  tfprtms: TfprtmEntity[];

  @OneToMany(() => TfprttEntity, (tfprttEntity) => tfprttEntity.codevento2)
  tfprtts: TfprttEntity[];

  @OneToMany(() => TfpsitEntity, (tfpsitEntity) => tfpsitEntity.parcunica13Sal)
  tfpsits: TfpsitEntity[];

  @OneToMany(() => TfpsitEntity, (tfpsitEntity) => tfpsitEntity.parcela2_13Sal)
  tfpsits2: TfpsitEntity[];

  @OneToMany(() => TfpsitEntity, (tfpsitEntity) => tfpsitEntity.parcela1_13Sal)
  tfpsits3: TfpsitEntity[];

  @OneToMany(() => TgffocEntity, (tgffocEntity) => tgffocEntity.codevento)
  tgffocs: TgffocEntity[];
}
