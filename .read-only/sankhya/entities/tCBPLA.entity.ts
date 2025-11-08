import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TcbauxEntity } from './tCBAUX.entity';
import { TcbcdmEntity } from './tCBCDM.entity';
import { TcbcomEntity } from './tCBCOM.entity';
import { TcbempEntity } from './tCBEMP.entity';
import { TcbirpjadEntity } from './tCBIRPJAD.entity';
import { TcbirpjexEntity } from './tCBIRPJEX.entity';
import { TcblanEntity } from './tCBLAN.entity';
import { TcblanConfEntity } from './tCBLAN_CONF.entity';
import { TcbmetEntity } from './tCBMET.entity';
import { TcbsalEntity } from './tCBSAL.entity';
import { TcbvcadEntity } from './tCBVCAD.entity';
import { TcbvcedEntity } from './tCBVCED.entity';
import { TccratEntity } from './tCCRAT.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TfpctaEntity } from './tFPCTA.entity';
import { TfpctbEntity } from './tFPCTB.entity';
import { TfpctfEntity } from './tFPCTF.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TfpsalEntity } from './tFPSAL.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfenaEntity } from './tGFENA.entity';
import { TgfgemEntity } from './tGFGEM.entity';
import { TgfgruEntity } from './tGFGRU.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TgfnccEntity } from './tGFNCC.entity';
import { TgfnpcEntity } from './tGFNPC.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfpemEntity } from './tGFPEM.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfratEntity } from './tGFRAT.entity';
import { TgfravEntity } from './tGFRAV.entity';
import { TgfrntEntity } from './tGFRNT.entity';
import { TgfsemEntity } from './tGFSEM.entity';
import { TgftopEntity } from './tGFTOP.entity';
import { TgftpvEntity } from './tGFTPV.entity';
import { TgmtraEntity } from './tGMTRA.entity';
import { TsictaEntity } from './tSICTA.entity';

@Index('PK_TCBPLA', ['codctactb'], { unique: true })
@Index('TCBPLA_I01', ['ctactb', 'codemp'], { unique: true })
@Index('TCBPLA_I02', ['codctactbsubst'], {})
@Index('TCBPLA_I03', ['codemp'], {})
@Entity('TCBPLA', { schema: 'SANKHYA' })
export class TcbplaEntity {
  @Column('int', { primary: true, name: 'CODCTACTB' })
  codctactb: number;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('char', { name: 'CTACTB', length: 30 })
  ctactb: string;

  @Column('smallint', { name: 'GRAU' })
  grau: number;

  @Column('char', { name: 'DESCRCTA', length: 40 })
  descrcta: string;

  @Column('varchar', {
    name: 'ANALITICA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  analitica: string | null;

  @Column('char', { name: 'CENCUSOBRIG', length: 1, default: () => "'N'" })
  cencusobrig: string;

  @Column('varchar', {
    name: 'CONVSALDOMOEDA',
    nullable: true,
    length: 1,
    default: () => "'I'",
  })
  convsaldomoeda: string | null;

  @Column('char', { name: 'DTBASECONVMOEDA', nullable: true, length: 1 })
  dtbaseconvmoeda: string | null;

  @Column('int', { name: 'CODCTACTBPAI' })
  codctactbpai: number;

  @Column('char', { name: 'ATIVA', length: 1, default: () => "'S'" })
  ativa: string;

  @Column('smallint', { name: 'PRODUTO', nullable: true })
  produto: number | null;

  @Column('smallint', { name: 'PLANTA', nullable: true })
  planta: number | null;

  @Column('smallint', { name: 'PROCESSO', nullable: true })
  processo: number | null;

  @Column('char', { name: 'BEMORIGINAL', length: 1, default: () => "'N'" })
  bemoriginal: string;

  @Column('char', { name: 'BEMRESREAV', length: 1, default: () => "'N'" })
  bemresreav: string;

  @Column('char', { name: 'BEMOUTROS', length: 1, default: () => "'N'" })
  bemoutros: string;

  @Column('text', { name: 'OBSERVACOES', nullable: true })
  observacoes: string | null;

  @Column('char', { name: 'PODELANCTOMANUAL', length: 1, default: () => "'S'" })
  podelanctomanual: string;

  @Column('datetime', { name: 'DTINCLUSAO', nullable: true })
  dtinclusao: Date | null;

  @Column('char', { name: 'CODGRUPOCTA', nullable: true, length: 2 })
  codgrupocta: string | null;

  @Column('varchar', { name: 'CODCTAREF', nullable: true, length: 30 })
  codctaref: string | null;

  @Column('char', { name: 'RAZAOAUXSPED', length: 1, default: () => "'N'" })
  razaoauxsped: string;

  @Column('int', { name: 'CODCTACTBSUBST', default: () => '(0)' })
  codctactbsubst: number;

  @Column('datetime', { name: 'DTINATIV', nullable: true })
  dtinativ: Date | null;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('char', { name: 'PROJOBRIG', length: 1, default: () => "'N'" })
  projobrig: string;

  @Column('char', {
    name: 'LALUR',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  lalur: string | null;

  @Column('varchar', {
    name: 'LALUR_A',
    nullable: true,
    length: 6,
    default: () => "'0'",
  })
  lalurA: string | null;

  @Column('smallint', {
    name: 'TIPSALALUR',
    nullable: true,
    default: () => '(1)',
  })
  tipsalalur: number | null;

  @Column('varchar', { name: 'CODCTAREF_FCONT', nullable: true, length: 30 })
  codctarefFcont: string | null;

  @Column('varchar', { name: 'TABELA', nullable: true, length: 6 })
  tabela: string | null;

  @Column('smallint', { name: 'CODRAZAUX', nullable: true })
  codrazaux: number | null;

  @Column('char', { name: 'DISPSPED', nullable: true, length: 1 })
  dispsped: string | null;

  @Column('smallint', { name: 'NATUREZAEFD', nullable: true })
  naturezaefd: number | null;

  @Column('varchar', { name: 'LALUR_A_CRED', nullable: true, length: 6 })
  lalurACred: string | null;

  @Column('varchar', { name: 'TABELACRED', nullable: true, length: 6 })
  tabelacred: string | null;

  @Column('varchar', { name: 'RECDESP', nullable: true, length: 1 })
  recdesp: string | null;

  @Column('char', { name: 'CLASSIFIRPJ', nullable: true, length: 1 })
  classifirpj: string | null;

  @Column('char', { name: 'CLASSIFCSLL', nullable: true, length: 1 })
  classifcsll: string | null;

  @Column('char', { name: 'ADICOESIRPJ', nullable: true, length: 1 })
  adicoesirpj: string | null;

  @Column('char', { name: 'CONRESULTIRPJ', nullable: true, length: 1 })
  conresultirpj: string | null;

  @Column('char', { name: 'EXCLUSOESIRPJ', nullable: true, length: 1 })
  exclusoesirpj: string | null;

  @Column('char', { name: 'PAT4IRPJ', nullable: true, length: 1 })
  pat4Irpj: string | null;

  @Column('char', { name: 'ZERACRIRPJ', nullable: true, length: 1 })
  zeracrirpj: string | null;

  @Column('char', { name: 'ADICOESCSLL', nullable: true, length: 1 })
  adicoescsll: string | null;

  @Column('char', { name: 'CONRESULTCSLL', nullable: true, length: 1 })
  conresultcsll: string | null;

  @Column('char', { name: 'EXCLUSOESCSLL', nullable: true, length: 1 })
  exclusoescsll: string | null;

  @Column('char', { name: 'ZERACRCSLL', nullable: true, length: 1 })
  zeracrcsll: string | null;

  @Column('varchar', { name: 'CODLALURB', nullable: true, length: 10 })
  codlalurb: string | null;

  @Column('varchar', { name: 'INDTRIBLALURB', nullable: true, length: 1 })
  indtriblalurb: string | null;

  @Column('smallint', { name: 'CODCONTA', nullable: true })
  codconta: number | null;

  @Column('varchar', { name: 'DESCRCONTA', nullable: true, length: 50 })
  descrconta: string | null;

  @OneToMany(() => TcbauxEntity, (tcbauxEntity) => tcbauxEntity.codctactb2)
  tcbauxes: TcbauxEntity[];

  @OneToMany(() => TcbcdmEntity, (tcbcdmEntity) => tcbcdmEntity.codctactb2)
  tcbcdms: TcbcdmEntity[];

  @OneToMany(() => TcbcomEntity, (tcbcomEntity) => tcbcomEntity.codctactb2)
  tcbcoms: TcbcomEntity[];

  @OneToMany(() => TcbempEntity, (tcbempEntity) => tcbempEntity.codctactbencres)
  tcbemps: TcbempEntity[];

  @OneToMany(
    () => TcbirpjadEntity,
    (tcbirpjadEntity) => tcbirpjadEntity.codctactb2,
  )
  tcbirpjads: TcbirpjadEntity[];

  @OneToMany(
    () => TcbirpjexEntity,
    (tcbirpjexEntity) => tcbirpjexEntity.codctactb2,
  )
  tcbirpjexes: TcbirpjexEntity[];

  @OneToMany(() => TcblanEntity, (tcblanEntity) => tcblanEntity.codctactb2)
  tcblans: TcblanEntity[];

  @OneToMany(() => TcblanEntity, (tcblanEntity) => tcblanEntity.codconpar2)
  tcblans2: TcblanEntity[];

  @OneToMany(
    () => TcblanConfEntity,
    (tcblanConfEntity) => tcblanConfEntity.codctactb,
  )
  tcblanConfs: TcblanConfEntity[];

  @OneToMany(
    () => TcblanConfEntity,
    (tcblanConfEntity) => tcblanConfEntity.codconpar,
  )
  tcblanConfs2: TcblanConfEntity[];

  @OneToMany(() => TcbmetEntity, (tcbmetEntity) => tcbmetEntity.codctactb2)
  tcbmets: TcbmetEntity[];

  @ManyToOne(() => TcbempEntity, (tcbempEntity) => tcbempEntity.tcbplas)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TcbempEntity;

  @OneToMany(() => TcbsalEntity, (tcbsalEntity) => tcbsalEntity.codctactb2)
  tcbsals: TcbsalEntity[];

  @OneToMany(() => TcbvcadEntity, (tcbvcadEntity) => tcbvcadEntity.codctactbalt)
  tcbvcads: TcbvcadEntity[];

  @OneToMany(() => TcbvcadEntity, (tcbvcadEntity) => tcbvcadEntity.codctactb2)
  tcbvcads2: TcbvcadEntity[];

  @OneToMany(() => TcbvcedEntity, (tcbvcedEntity) => tcbvcedEntity.codctactb2)
  tcbvceds: TcbvcedEntity[];

  @OneToMany(() => TccratEntity, (tccratEntity) => tccratEntity.codctactb)
  tccrats: TccratEntity[];

  @OneToMany(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.codctactb)
  tcsprjs: TcsprjEntity[];

  @OneToMany(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.codctactb2)
  tcsprjs2: TcsprjEntity[];

  @OneToOne(() => TfpctaEntity, (tfpctaEntity) => tfpctaEntity.tcbpla)
  tfpcta: TfpctaEntity;

  @OneToMany(() => TfpctbEntity, (tfpctbEntity) => tfpctbEntity.contadebito)
  tfpctbs: TfpctbEntity[];

  @OneToMany(() => TfpctbEntity, (tfpctbEntity) => tfpctbEntity.contacredito)
  tfpctbs2: TfpctbEntity[];

  @OneToMany(() => TfpctfEntity, (tfpctfEntity) => tfpctfEntity.contacredito)
  tfpctfs: TfpctfEntity[];

  @OneToMany(() => TfpctfEntity, (tfpctfEntity) => tfpctfEntity.contadebito)
  tfpctfs2: TfpctfEntity[];

  @OneToMany(() => TfpempEntity, (tfpempEntity) => tfpempEntity.ctactbexercatu)
  tfpemps: TfpempEntity[];

  @OneToMany(() => TfpempEntity, (tfpempEntity) => tfpempEntity.ctactbexercant)
  tfpemps2: TfpempEntity[];

  @OneToMany(() => TfpempEntity, (tfpempEntity) => tfpempEntity.ctactbreversao)
  tfpemps3: TfpempEntity[];

  @OneToMany(() => TfpempEntity, (tfpempEntity) => tfpempEntity.codctactbrever)
  tfpemps4: TfpempEntity[];

  @OneToMany(() => TfpempEntity, (tfpempEntity) => tfpempEntity.ctactbcratocoop)
  tfpemps5: TfpempEntity[];

  @OneToMany(() => TfpempEntity, (tfpempEntity) => tfpempEntity.ctactbdbatocoop)
  tfpemps6: TfpempEntity[];

  @OneToMany(() => TfpsalEntity, (tfpsalEntity) => tfpsalEntity.codctactb2)
  tfpsals: TfpsalEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.codctactbmult)
  tgfemps: TgfempEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.codctactb)
  tgfemps2: TgfempEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.codctactb_2)
  tgfemps3: TgfempEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.codctactbdesc)
  tgfemps4: TgfempEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.codctactb_3)
  tgfemps5: TgfempEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.codctactbjuros)
  tgfemps6: TgfempEntity[];

  @OneToMany(() => TgfenaEntity, (tgfenaEntity) => tgfenaEntity.codctactb)
  tgfenas: TgfenaEntity[];

  @OneToMany(() => TgfgemEntity, (tgfgemEntity) => tgfgemEntity.codctactbefd)
  tgfgems: TgfgemEntity[];

  @OneToMany(() => TgfgruEntity, (tgfgruEntity) => tgfgruEntity.codctactbefd)
  tgfgrus: TgfgruEntity[];

  @OneToMany(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.codctactbefd)
  tgfnats: TgfnatEntity[];

  @OneToMany(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.codctactb)
  tgfnats2: TgfnatEntity[];

  @OneToMany(() => TgfnccEntity, (tgfnccEntity) => tgfnccEntity.codctactb)
  tgfnccs: TgfnccEntity[];

  @OneToMany(() => TgfnpcEntity, (tgfnpcEntity) => tgfnpcEntity.codctactb)
  tgfnpcs: TgfnpcEntity[];

  @OneToMany(() => TgfparEntity, (tgfparEntity) => tgfparEntity.codctactb)
  tgfpars: TgfparEntity[];

  @OneToMany(() => TgfparEntity, (tgfparEntity) => tgfparEntity.codctactb2)
  tgfpars2: TgfparEntity[];

  @OneToMany(() => TgfpemEntity, (tgfpemEntity) => tgfpemEntity.codctactbefd)
  tgfpems: TgfpemEntity[];

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.codctactb)
  tgfpros: TgfproEntity[];

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.codctactbefd)
  tgfpros2: TgfproEntity[];

  @OneToMany(() => TgfratEntity, (tgfratEntity) => tgfratEntity.codctactb)
  tgfrats: TgfratEntity[];

  @OneToMany(() => TgfravEntity, (tgfravEntity) => tgfravEntity.codctactb)
  tgfravs: TgfravEntity[];

  @OneToMany(() => TgfrntEntity, (tgfrntEntity) => tgfrntEntity.codctactb)
  tgfrnts: TgfrntEntity[];

  @OneToMany(() => TgfsemEntity, (tgfsemEntity) => tgfsemEntity.codctactbefd)
  tgfsems: TgfsemEntity[];

  @OneToMany(() => TgftopEntity, (tgftopEntity) => tgftopEntity.codctactbefd)
  tgftops: TgftopEntity[];

  @OneToMany(() => TgftpvEntity, (tgftpvEntity) => tgftpvEntity.codctactb)
  tgftpvs: TgftpvEntity[];

  @OneToMany(() => TgftpvEntity, (tgftpvEntity) => tgftpvEntity.codctactb_2)
  tgftpvs2: TgftpvEntity[];

  @OneToMany(() => TgmtraEntity, (tgmtraEntity) => tgmtraEntity.codctactb)
  tgmtras: TgmtraEntity[];

  @OneToMany(() => TsictaEntity, (tsictaEntity) => tsictaEntity.codctactb)
  tsictas: TsictaEntity[];
}
