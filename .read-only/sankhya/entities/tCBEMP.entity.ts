import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TcbaaecdEntity } from './tCBAAECD.entity';
import { TcbaaecdsubEntity } from './tCBAAECDSUB.entity';
import { TcbabeEntity } from './tCBABE.entity';
import { TcbanaEntity } from './tCBANA.entity';
import { TcbauxEntity } from './tCBAUX.entity';
import { TcbcdmEntity } from './tCBCDM.entity';
import { TcbcomEntity } from './tCBCOM.entity';
import { TcbdemEntity } from './tCBDEM.entity';
import { TcbdepEntity } from './tCBDEP.entity';
import { TcbdmtEntity } from './tCBDMT.entity';
import { TcbecbEntity } from './tCBECB.entity';
import { TcbecrEntity } from './tCBECR.entity';
import { TcbplaEntity } from './tCBPLA.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TcbexeEntity } from './tCBEXE.entity';
import { TcbgruEntity } from './tCBGRU.entity';
import { TcbirpEntity } from './tCBIRP.entity';
import { TcbirpjEntity } from './tCBIRPJ.entity';
import { TcbirpjadEntity } from './tCBIRPJAD.entity';
import { TcbirpjdarfEntity } from './tCBIRPJDARF.entity';
import { TcbirpjexEntity } from './tCBIRPJEX.entity';
import { TcbirpjifEntity } from './tCBIRPJIF.entity';
import { TcbirpjnfretEntity } from './tCBIRPJNFRET.entity';
import { TcbirpjpcompEntity } from './tCBIRPJPCOMP.entity';
import { TcbirpjrecEntity } from './tCBIRPJREC.entity';
import { TcbiseEntity } from './tCBISE.entity';
import { TcblanEntity } from './tCBLAN.entity';
import { TcblanConfEntity } from './tCBLAN_CONF.entity';
import { TcblotEntity } from './tCBLOT.entity';
import { TcbpctEntity } from './tCBPCT.entity';
import { TcbplaImpEntity } from './tCBPLA_IMP.entity';
import { TcbrelEntity } from './tCBREL.entity';
import { TcbsalEntity } from './tCBSAL.entity';
import { TcbsigEntity } from './tCBSIG.entity';

@Index('PK_TCBEMP', ['codemp'], { unique: true })
@Index('TCBEMP_I01', ['codemporig'], {})
@Entity('TCBEMP', { schema: 'SANKHYA' })
export class TcbempEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { name: 'DTABERTURA' })
  dtabertura: Date;

  @Column('datetime', { name: 'DTINICPERCTB' })
  dtinicperctb: Date;

  @Column('datetime', { name: 'DTFIMPERCTB' })
  dtfimperctb: Date;

  @Column('datetime', { name: 'REFERENCIA', nullable: true })
  referencia: Date | null;

  @Column('int', { name: 'NUMDIARIO', nullable: true })
  numdiario: number | null;

  @Column('int', { name: 'ULTPAGDIARIO', nullable: true })
  ultpagdiario: number | null;

  @Column('char', { name: 'CONTADOR', length: 36 })
  contador: string;

  @Column('varchar', { name: 'CRC', nullable: true, length: 20 })
  crc: string | null;

  @Column('char', { name: 'MASCCTA', nullable: true, length: 50 })
  masccta: string | null;

  @Column('char', { name: 'DIGCTA', nullable: true, length: 1 })
  digcta: string | null;

  @Column('char', { name: 'UTILCENCUS', length: 1, default: () => "'N'" })
  utilcencus: string;

  @Column('char', { name: 'CTAREDAUT', nullable: true, length: 1 })
  ctaredaut: string | null;

  @Column('char', { name: 'NUMLOTESAUT', length: 1, default: () => "'R'" })
  numlotesaut: string;

  @Column('char', { name: 'ACEITARHISTZERO', length: 1, default: () => "'S'" })
  aceitarhistzero: string;

  @Column('char', { name: 'ACEITARVLRLANC', length: 1, default: () => "'N'" })
  aceitarvlrlanc: string;

  @Column('char', { name: 'TIPATUALSALDOS', nullable: true, length: 1 })
  tipatualsaldos: string | null;

  @Column('char', { name: 'SIMBVLRNEG', nullable: true, length: 1 })
  simbvlrneg: string | null;

  @Column('char', {
    name: 'EMPCONSOLIDA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  empconsolida: string | null;

  @Column('int', { name: 'NROLOTEMNUALINI', nullable: true })
  nrolotemnualini: number | null;

  @Column('int', { name: 'NROLOTEMNUALFIM', nullable: true })
  nrolotemnualfim: number | null;

  @Column('smallint', { name: 'CODEMPORIG', nullable: true })
  codemporig: number | null;

  @Column('float', { name: 'PERCRATEIO', precision: 53, default: () => '(0)' })
  percrateio: number;

  @Column('int', { name: 'NROORDEM', nullable: true })
  nroordem: number | null;

  @Column('char', { name: 'CODINSTRESP', length: 2, default: () => "'0'" })
  codinstresp: string;

  @Column('char', { name: 'TIPPERIODO', length: 1, default: () => "'M'" })
  tipperiodo: string;

  @Column('varchar', { name: 'CABDEM', nullable: true, length: 60 })
  cabdem: string | null;

  @Column('int', { name: 'NROORDEM_R', nullable: true })
  nroordemR: number | null;

  @Column('varchar', { name: 'UFCRCCONTADOR', nullable: true, length: 2 })
  ufcrccontador: string | null;

  @Column('char', { name: 'UTILPROJ', length: 1, default: () => "'N'" })
  utilproj: string;

  @Column('smallint', {
    name: 'TPOEMPRESA',
    nullable: true,
    default: () => '(0)',
  })
  tpoempresa: number | null;

  @Column('char', {
    name: 'PERALTQDCOM',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  peraltqdcom: string | null;

  @Column('char', { name: 'OPTREFIS', length: 1, default: () => "'N'" })
  optrefis: string;

  @Column('char', { name: 'OPTPAES', length: 1, default: () => "'N'" })
  optpaes: string;

  @Column('smallint', { name: 'FORMATRIB', default: () => '(1)' })
  formatrib: number;

  @Column('char', { name: 'TIPESCPRE', nullable: true, length: 1 })
  tipescpre: string | null;

  @Column('char', { name: 'TIPENT', nullable: true, length: 2 })
  tipent: string | null;

  @Column('char', { name: 'FORMAAPURI', nullable: true, length: 1 })
  formaapuri: string | null;

  @Column('char', { name: 'APURCSLL', nullable: true, length: 1 })
  apurcsll: string | null;

  @Column('char', { name: 'OPTEXTRTT', length: 1, default: () => "'N'" })
  optextrtt: string;

  @Column('char', { name: 'DIFFCONT', length: 1, default: () => "'N'" })
  diffcont: string;

  @Column('char', { name: 'INDALIQCSLL', length: 1, default: () => "'N'" })
  indaliqcsll: string;

  @Column('char', { name: 'INDADMFUNCLU', length: 1, default: () => "'N'" })
  indadmfunclu: string;

  @Column('char', { name: 'INDPARTCONS', length: 1, default: () => "'N'" })
  indpartcons: string;

  @Column('char', { name: 'INDOPEXT', length: 1, default: () => "'N'" })
  indopext: string;

  @Column('char', { name: 'INDOPVINC', length: 1, default: () => "'N'" })
  indopvinc: string;

  @Column('char', { name: 'INDPJENQUAD', length: 1, default: () => "'N'" })
  indpjenquad: string;

  @Column('char', { name: 'INDPARTEXT', length: 1, default: () => "'N'" })
  indpartext: string;

  @Column('char', { name: 'INDATIVRURAL', length: 1, default: () => "'N'" })
  indativrural: string;

  @Column('char', { name: 'INDLUCEXP', length: 1, default: () => "'N'" })
  indlucexp: string;

  @Column('char', { name: 'INDREDISEN', length: 1, default: () => "'N'" })
  indredisen: string;

  @Column('char', { name: 'INDFIN', length: 1, default: () => "'N'" })
  indfin: string;

  @Column('char', { name: 'INDDOAELEIT', length: 1, default: () => "'N'" })
  inddoaeleit: string;

  @Column('char', { name: 'INDPARTCOLIG', length: 1, default: () => "'N'" })
  indpartcolig: string;

  @Column('char', { name: 'INDVENDEXP', length: 1, default: () => "'N'" })
  indvendexp: string;

  @Column('char', { name: 'INDRECEXT', length: 1, default: () => "'N'" })
  indrecext: string;

  @Column('char', { name: 'INDATIVEXT', length: 1, default: () => "'N'" })
  indativext: string;

  @Column('char', { name: 'INDCOMEXP', length: 1, default: () => "'N'" })
  indcomexp: string;

  @Column('char', { name: 'INDPGTOEXT', length: 1, default: () => "'N'" })
  indpgtoext: string;

  @Column('char', { name: 'INDECOMTI', length: 1, default: () => "'N'" })
  indecomti: string;

  @Column('char', { name: 'INDROYREC', length: 1, default: () => "'N'" })
  indroyrec: string;

  @Column('char', { name: 'INDROYPAG', length: 1, default: () => "'N'" })
  indroypag: string;

  @Column('char', { name: 'INDRENDSERV', length: 1, default: () => "'N'" })
  indrendserv: string;

  @Column('char', { name: 'INDPGTOREM', length: 1, default: () => "'N'" })
  indpgtorem: string;

  @Column('char', { name: 'INDINOVTEC', length: 1, default: () => "'N'" })
  indinovtec: string;

  @Column('char', { name: 'INDCAPINF', length: 1, default: () => "'N'" })
  indcapinf: string;

  @Column('char', { name: 'INDPJHAB', length: 1, default: () => "'N'" })
  indpjhab: string;

  @Column('char', { name: 'INDPOLOAM', length: 1, default: () => "'N'" })
  indpoloam: string;

  @Column('char', { name: 'INDZONEXP', length: 1, default: () => "'N'" })
  indzonexp: string;

  @Column('char', { name: 'INDAREACOM', length: 1, default: () => "'N'" })
  indareacom: string;

  @Column('char', { name: 'FORMAAPUR', nullable: true, length: 1 })
  formaapur: string | null;

  @Column('char', {
    name: 'PJSUJEITACSLL',
    nullable: true,
    length: 1,
    default: () => "'1'",
  })
  pjsujeitacsll: string | null;

  @Column('varchar', {
    name: 'IMPCODHISTCTB',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  impcodhistctb: string | null;

  @Column('int', { name: 'NUVINCULO', nullable: true })
  nuvinculo: number | null;

  @Column('char', { name: 'INDREPES', length: 1, default: () => "'N'" })
  indrepes: string;

  @Column('char', { name: 'INDRECAP', length: 1, default: () => "'N'" })
  indrecap: string;

  @Column('char', { name: 'INDPADIS', length: 1, default: () => "'N'" })
  indpadis: string;

  @Column('char', { name: 'INDPATVD', length: 1, default: () => "'N'" })
  indpatvd: string;

  @Column('char', { name: 'INDREIDI', length: 1, default: () => "'N'" })
  indreidi: string;

  @Column('char', { name: 'INDREPENEC', length: 1, default: () => "'N'" })
  indrepenec: string;

  @Column('char', { name: 'INDREICOMP', length: 1, default: () => "'N'" })
  indreicomp: string;

  @Column('char', { name: 'INDRETAERO', length: 1, default: () => "'N'" })
  indretaero: string;

  @Column('char', { name: 'INDRECINE', length: 1, default: () => "'N'" })
  indrecine: string;

  @Column('char', { name: 'INDRESIDUOSSOLID', length: 1, default: () => "'N'" })
  indresiduossolid: string;

  @Column('char', { name: 'INDRECOPA', length: 1, default: () => "'N'" })
  indrecopa: string;

  @Column('char', { name: 'INDCOPADOMUNDO', length: 1, default: () => "'N'" })
  indcopadomundo: string;

  @Column('char', { name: 'INDRETID', length: 1, default: () => "'N'" })
  indretid: string;

  @Column('char', { name: 'INDREPNBLREDES', length: 1, default: () => "'N'" })
  indrepnblredes: string;

  @Column('char', { name: 'INDREIF', length: 1, default: () => "'N'" })
  indreif: string;

  @Column('char', { name: 'INDOLIMPIADAS', length: 1, default: () => "'N'" })
  indolimpiadas: string;

  @Column('smallint', { name: 'INDRECRECEITA', default: () => '(0)' })
  indrecreceita: number;

  @Column('char', { name: 'INDPAISAPAIS', length: 1, default: () => "'N'" })
  indpaisapais: string;

  @Column('char', { name: 'DEREX', length: 1, default: () => "'N'" })
  derex: string;

  @Column('varchar', { name: 'ARQLOGOMARCA', nullable: true, length: 512 })
  arqlogomarca: string | null;

  @Column('char', { name: 'USAEMPAUXCTBZ', nullable: true, length: 1 })
  usaempauxctbz: string | null;

  @Column('smallint', { name: 'INDMUDANCPC', nullable: true })
  indmudancpc: number | null;

  @Column('char', { name: 'GERREGJPERANUAL', nullable: true, length: 1 })
  gerregjperanual: string | null;

  @Column('varchar', { name: 'INDREPETROTEMP', nullable: true, length: 1 })
  indrepetrotemp: string | null;

  @Column('varchar', { name: 'INDRETPMCMV', nullable: true, length: 1 })
  indretpmcmv: string | null;

  @Column('varchar', { name: 'INDRETII', nullable: true, length: 1 })
  indretii: string | null;

  @Column('varchar', { name: 'INDREPETRONAC', nullable: true, length: 1 })
  indrepetronac: string | null;

  @Column('varchar', { name: 'INDRETEEI', nullable: true, length: 1 })
  indreteei: string | null;

  @Column('varchar', { name: 'INDREPEPER', nullable: true, length: 1 })
  indrepeper: string | null;

  @Column('varchar', { name: 'INDOLEOBUNKER', nullable: true, length: 1 })
  indoleobunker: string | null;

  @Column('varchar', { name: 'INDREPORTO', nullable: true, length: 1 })
  indreporto: string | null;

  @Column('varchar', { name: 'INDREPETROIND', nullable: true, length: 1 })
  indrepetroind: string | null;

  @Column('varchar', { name: 'OPCPTRF2023', nullable: true, length: 1 })
  opcptrf2023: string | null;

  @Column('varchar', { name: 'INDEBAS', nullable: true, length: 1 })
  indebas: string | null;

  @OneToMany(() => TcbaaecdEntity, (tcbaaecdEntity) => tcbaaecdEntity.codemp2)
  tcbaaecds: TcbaaecdEntity[];

  @OneToMany(
    () => TcbaaecdsubEntity,
    (tcbaaecdsubEntity) => tcbaaecdsubEntity.codemp2,
  )
  tcbaaecdsubs: TcbaaecdsubEntity[];

  @OneToMany(() => TcbabeEntity, (tcbabeEntity) => tcbabeEntity.codemp2)
  tcbabes: TcbabeEntity[];

  @OneToMany(() => TcbanaEntity, (tcbanaEntity) => tcbanaEntity.codemp)
  tcbanas: TcbanaEntity[];

  @OneToMany(() => TcbauxEntity, (tcbauxEntity) => tcbauxEntity.codemp2)
  tcbauxes: TcbauxEntity[];

  @OneToMany(() => TcbcdmEntity, (tcbcdmEntity) => tcbcdmEntity.codemp2)
  tcbcdms: TcbcdmEntity[];

  @OneToMany(() => TcbcomEntity, (tcbcomEntity) => tcbcomEntity.codemp2)
  tcbcoms: TcbcomEntity[];

  @OneToMany(() => TcbdemEntity, (tcbdemEntity) => tcbdemEntity.codemp2)
  tcbdems: TcbdemEntity[];

  @OneToMany(() => TcbdepEntity, (tcbdepEntity) => tcbdepEntity.codemp2)
  tcbdeps: TcbdepEntity[];

  @OneToMany(() => TcbdmtEntity, (tcbdmtEntity) => tcbdmtEntity.codemp2)
  tcbdmts: TcbdmtEntity[];

  @OneToMany(() => TcbecbEntity, (tcbecbEntity) => tcbecbEntity.codemp2)
  tcbecbs: TcbecbEntity[];

  @OneToMany(() => TcbecrEntity, (tcbecrEntity) => tcbecrEntity.codemp2)
  tcbecrs: TcbecrEntity[];

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tcbemps)
  @JoinColumn([{ name: 'CODCTACTBENCRES', referencedColumnName: 'codctactb' }])
  codctactbencres: TcbplaEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcbemps)
  @JoinColumn([{ name: 'CODEMPPLACTA', referencedColumnName: 'codemp' }])
  codempplacta: TsiempEntity;

  @OneToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcbemp)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;

  @OneToMany(() => TcbexeEntity, (tcbexeEntity) => tcbexeEntity.codemp2)
  tcbexes: TcbexeEntity[];

  @OneToMany(() => TcbgruEntity, (tcbgruEntity) => tcbgruEntity.codemp2)
  tcbgrus: TcbgruEntity[];

  @OneToMany(() => TcbirpEntity, (tcbirpEntity) => tcbirpEntity.codemp2)
  tcbirps: TcbirpEntity[];

  @OneToMany(() => TcbirpjEntity, (tcbirpjEntity) => tcbirpjEntity.codemp2)
  tcbirpjs: TcbirpjEntity[];

  @OneToMany(
    () => TcbirpjadEntity,
    (tcbirpjadEntity) => tcbirpjadEntity.codemp2,
  )
  tcbirpjads: TcbirpjadEntity[];

  @OneToMany(
    () => TcbirpjdarfEntity,
    (tcbirpjdarfEntity) => tcbirpjdarfEntity.codemp2,
  )
  tcbirpjdarves: TcbirpjdarfEntity[];

  @OneToMany(
    () => TcbirpjexEntity,
    (tcbirpjexEntity) => tcbirpjexEntity.codemp2,
  )
  tcbirpjexes: TcbirpjexEntity[];

  @OneToMany(
    () => TcbirpjifEntity,
    (tcbirpjifEntity) => tcbirpjifEntity.codemp2,
  )
  tcbirpjifs: TcbirpjifEntity[];

  @OneToMany(
    () => TcbirpjnfretEntity,
    (tcbirpjnfretEntity) => tcbirpjnfretEntity.codemp2,
  )
  tcbirpjnfrets: TcbirpjnfretEntity[];

  @OneToMany(
    () => TcbirpjpcompEntity,
    (tcbirpjpcompEntity) => tcbirpjpcompEntity.codemp2,
  )
  tcbirpjpcomps: TcbirpjpcompEntity[];

  @OneToMany(
    () => TcbirpjrecEntity,
    (tcbirpjrecEntity) => tcbirpjrecEntity.codemp2,
  )
  tcbirpjrecs: TcbirpjrecEntity[];

  @OneToMany(() => TcbiseEntity, (tcbiseEntity) => tcbiseEntity.codemp2)
  tcbises: TcbiseEntity[];

  @OneToMany(() => TcblanEntity, (tcblanEntity) => tcblanEntity.codemp2)
  tcblans: TcblanEntity[];

  @OneToMany(
    () => TcblanConfEntity,
    (tcblanConfEntity) => tcblanConfEntity.codemp2,
  )
  tcblanConfs: TcblanConfEntity[];

  @OneToMany(() => TcblotEntity, (tcblotEntity) => tcblotEntity.codemp2)
  tcblots: TcblotEntity[];

  @OneToMany(() => TcbpctEntity, (tcbpctEntity) => tcbpctEntity.codemp)
  tcbpcts: TcbpctEntity[];

  @OneToMany(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.codemp2)
  tcbplas: TcbplaEntity[];

  @OneToMany(
    () => TcbplaImpEntity,
    (tcbplaImpEntity) => tcbplaImpEntity.codemp2,
  )
  tcbplaImps: TcbplaImpEntity[];

  @OneToMany(() => TcbrelEntity, (tcbrelEntity) => tcbrelEntity.codemp2)
  tcbrels: TcbrelEntity[];

  @OneToMany(() => TcbsalEntity, (tcbsalEntity) => tcbsalEntity.codemp2)
  tcbsals: TcbsalEntity[];

  @OneToMany(() => TcbsigEntity, (tcbsigEntity) => tcbsigEntity.codemp2)
  tcbsigs: TcbsigEntity[];
}
