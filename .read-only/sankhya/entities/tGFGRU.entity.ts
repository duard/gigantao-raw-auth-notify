import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { AdSolcompraosEntity } from './aD_SOLCOMPRAOS.entity';
import { AdTcfexecEntity } from './aD_TCFEXEC.entity';
import { GfrcategcomisEntity } from './gFRCATEGCOMIS.entity';
import { GfrmetascategEntity } from './gFRMETASCATEG.entity';
import { TcfprodosEntity } from './tCFPRODOS.entity';
import { TgacltEntity } from './tGACLT.entity';
import { TgagplEntity } from './tGAGPL.entity';
import { TgainsEntity } from './tGAINS.entity';
import { TgfcajaEntity } from './tGFCAJA.entity';
import { TgfcipmgruEntity } from './tGFCIPMGRU.entity';
import { TgfcvgEntity } from './tGFCVG.entity';
import { TgfdfoEntity } from './tGFDFO.entity';
import { TgfdmgEntity } from './tGFDMG.entity';
import { TgffadEntity } from './tGFFAD.entity';
import { TgfgemEntity } from './tGFGEM.entity';
import { TcbplaEntity } from './tCBPLA.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TgwrfaEntity } from './tGWRFA.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TgfmmsEntity } from './tGFMMS.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfvenEntity } from './tGFVEN.entity';
import { TgftaxgEntity } from './tGFTAXG.entity';
import { TgfvdgEntity } from './tGFVDG.entity';
import { TgvpegEntity } from './tGVPEG.entity';
import { TgwaxgEntity } from './tGWAXG.entity';
import { TgwexgEntity } from './tGWEXG.entity';
import { TgwrarmEntity } from './tGWRARM.entity';
import { TtkprotempEntity } from './tTKPROTEMP.entity';

@Index('PK_TGFGRU', ['codgrupoprod'], { unique: true })
@Entity('TGFGRU', { schema: 'SANKHYA' })
export class TgfgruEntity {
  @Column('int', { primary: true, name: 'CODGRUPOPROD' })
  codgrupoprod: number;

  @Column('char', { name: 'DESCRGRUPOPROD', length: 30 })
  descrgrupoprod: string;

  @Column('int', { name: 'CODGRUPAI' })
  codgrupai: number;

  @Column('char', { name: 'ANALITICO', length: 1, default: () => "'S'" })
  analitico: string;

  @Column('smallint', { name: 'GRAU' })
  grau: number;

  @Column('float', { name: 'LIMCURVA_B', nullable: true, precision: 53 })
  limcurvaB: number | null;

  @Column('float', { name: 'LIMCURVA_C', nullable: true, precision: 53 })
  limcurvaC: number | null;

  @Column('float', { name: 'COMCURVA_A', nullable: true, precision: 53 })
  comcurvaA: number | null;

  @Column('float', { name: 'COMCURVA_B', nullable: true, precision: 53 })
  comcurvaB: number | null;

  @Column('float', { name: 'COMCURVA_C', nullable: true, precision: 53 })
  comcurvaC: number | null;

  @Column('float', { name: 'PARTICMETA', nullable: true, precision: 53 })
  particmeta: number | null;

  @Column('float', { name: 'METAQTD', nullable: true, precision: 53 })
  metaqtd: number | null;

  @Column('float', { name: 'PERCMETACONTRIB', nullable: true, precision: 53 })
  percmetacontrib: number | null;

  @Column('smallint', { name: 'AREAOCUPUNID', nullable: true })
  areaocupunid: number | null;

  @Column('float', { name: 'QTDEXPOSICAO', nullable: true, precision: 53 })
  qtdexposicao: number | null;

  @Column('char', { name: 'VALEST', length: 1, default: () => "'A'" })
  valest: string;

  @Column('image', { name: 'IMAGEM', nullable: true })
  imagem: Buffer | null;

  @Column('int', { name: 'GRUPOICMS', nullable: true })
  grupoicms: number | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('char', { name: 'SOLCOMPRA', length: 1, default: () => "'N'" })
  solcompra: string;

  @Column('float', { name: 'PERCMETA', nullable: true, precision: 53 })
  percmeta: number | null;

  @Column('char', { name: 'CORFUNDO', nullable: true, length: 20 })
  corfundo: string | null;

  @Column('char', { name: 'CORFONTE', nullable: true, length: 20 })
  corfonte: string | null;

  @Column('char', { name: 'REGRAWMS', length: 1, default: () => "'O'" })
  regrawms: string;

  @Column('char', {
    name: 'PEDIRLIB',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  pedirlib: string | null;

  @Column('varchar', { name: 'INFTRAPEZIO', length: 10, default: () => "'N'" })
  inftrapezio: string;

  @Column('char', { name: 'TEMFLV', length: 1, default: () => "'N'" })
  temflv: string;

  @Column('char', { name: 'APRPRODVDA', length: 1, default: () => "'S'" })
  aprprodvda: string;

  @Column('char', { name: 'AGRUPALOCVALEST', length: 1, default: () => "'N'" })
  agrupalocvalest: string;

  @Column('float', { name: 'PERCCMTNAC', precision: 53, default: () => '(0)' })
  perccmtnac: number;

  @Column('float', { name: 'PERCCMTIMP', precision: 53, default: () => '(0)' })
  perccmtimp: number;

  @Column('float', { name: 'ALIQNAC', nullable: true, precision: 53 })
  aliqnac: number | null;

  @Column('float', { name: 'ALIQIMP', nullable: true, precision: 53 })
  aliqimp: number | null;

  @Column('float', { name: 'PERCCMTFED', precision: 53, default: () => '(0)' })
  perccmtfed: number;

  @Column('float', { name: 'PERCCMTEST', precision: 53, default: () => '(0)' })
  perccmtest: number;

  @Column('float', { name: 'PERCCMTMUN', precision: 53, default: () => '(0)' })
  perccmtmun: number;

  @Column('char', { name: 'VISIVELAPPOS', nullable: true, length: 1 })
  visivelappos: string | null;

  @Column('char', { name: 'FORCAEXPECONECT', nullable: true, length: 1 })
  forcaexpeconect: string | null;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;

  @Column('char', { name: 'CONSGRUPRODCAT42', nullable: true, length: 1 })
  consgruprodcat42: string | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('char', {
    name: 'CALRUPTURAESTOQUE',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  calrupturaestoque: string | null;

  @OneToMany(
    () => AdSolcompraosEntity,
    (adSolcompraosEntity) => adSolcompraosEntity.codgrupoprod,
  )
  adSolcompraos: AdSolcompraosEntity[];

  @OneToMany(
    () => AdTcfexecEntity,
    (adTcfexecEntity) => adTcfexecEntity.codgrupoprod,
  )
  adTcfexecs: AdTcfexecEntity[];

  @OneToMany(
    () => GfrcategcomisEntity,
    (gfrcategcomisEntity) => gfrcategcomisEntity.codgrupoprod,
  )
  gfrcategcomis: GfrcategcomisEntity[];

  @OneToMany(
    () => GfrmetascategEntity,
    (gfrmetascategEntity) => gfrmetascategEntity.codgrupoprod2,
  )
  gfrmetascategs: GfrmetascategEntity[];

  @OneToMany(
    () => TcfprodosEntity,
    (tcfprodosEntity) => tcfprodosEntity.adCodgrupoprod,
  )
  tcfprodos: TcfprodosEntity[];

  @OneToMany(() => TgacltEntity, (tgacltEntity) => tgacltEntity.codgrupoprod)
  tgaclts: TgacltEntity[];

  @OneToMany(() => TgagplEntity, (tgagplEntity) => tgagplEntity.codgrupoprod2)
  tgagpls: TgagplEntity[];

  @OneToMany(() => TgainsEntity, (tgainsEntity) => tgainsEntity.codgrupoprod2)
  tgains: TgainsEntity[];

  @OneToMany(
    () => TgfcajaEntity,
    (tgfcajaEntity) => tgfcajaEntity.filcodgrupoprod,
  )
  tgfcajas: TgfcajaEntity[];

  @OneToMany(
    () => TgfcipmgruEntity,
    (tgfcipmgruEntity) => tgfcipmgruEntity.codgrupoprod2,
  )
  tgfcipmgrus: TgfcipmgruEntity[];

  @OneToMany(() => TgfcvgEntity, (tgfcvgEntity) => tgfcvgEntity.codgrupoprod2)
  tgfcvgs: TgfcvgEntity[];

  @OneToMany(() => TgfdfoEntity, (tgfdfoEntity) => tgfdfoEntity.codgrupoprod2)
  tgfdfos: TgfdfoEntity[];

  @OneToMany(() => TgfdmgEntity, (tgfdmgEntity) => tgfdmgEntity.codgrupoprod2)
  tgfdmgs: TgfdmgEntity[];

  @OneToMany(() => TgffadEntity, (tgffadEntity) => tgffadEntity.codgrupoprod2)
  tgffads: TgffadEntity[];

  @OneToMany(() => TgfgemEntity, (tgfgemEntity) => tgfgemEntity.codgrupoprod2)
  tgfgems: TgfgemEntity[];

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tgfgrus)
  @JoinColumn([{ name: 'CODCTACTBEFD', referencedColumnName: 'codctactb' }])
  codctactbefd: TcbplaEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tgfgrus)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj: TcsprjEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tgfgrus)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;

  @ManyToOne(() => TgwrfaEntity, (tgwrfaEntity) => tgwrfaEntity.tgfgrus)
  @JoinColumn([{ name: 'CODRFA', referencedColumnName: 'codrfa' }])
  codrfa: TgwrfaEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tgfgrus)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat: TgfnatEntity;

  @OneToMany(() => TgfmmsEntity, (tgfmmsEntity) => tgfmmsEntity.codgrupoprod2)
  tgfmms: TgfmmsEntity[];

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfgru)
  tgfpros: TgfproEntity[];

  @ManyToMany(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.tgfgrus)
  tgfvens: TgfvenEntity[];

  @OneToMany(
    () => TgftaxgEntity,
    (tgftaxgEntity) => tgftaxgEntity.codgrupoprod2,
  )
  tgftaxgs: TgftaxgEntity[];

  @OneToMany(() => TgfvdgEntity, (tgfvdgEntity) => tgfvdgEntity.codgrupoprod2)
  tgfvdgs: TgfvdgEntity[];

  @OneToMany(() => TgvpegEntity, (tgvpegEntity) => tgvpegEntity.codgrupoprod2)
  tgvpegs: TgvpegEntity[];

  @OneToMany(() => TgwaxgEntity, (tgwaxgEntity) => tgwaxgEntity.codgrupoprod2)
  tgwaxgs: TgwaxgEntity[];

  @OneToMany(() => TgwexgEntity, (tgwexgEntity) => tgwexgEntity.codgrupoprod2)
  tgwexgs: TgwexgEntity[];

  @OneToMany(() => TgwrarmEntity, (tgwrarmEntity) => tgwrarmEntity.codgrupoprod)
  tgwrarms: TgwrarmEntity[];

  @OneToMany(
    () => TgwrarmEntity,
    (tgwrarmEntity) => tgwrarmEntity.codgrupoprod3,
  )
  tgwrarms2: TgwrarmEntity[];

  @OneToMany(
    () => TtkprotempEntity,
    (ttkprotempEntity) => ttkprotempEntity.codgrupoprod,
  )
  ttkprotemps: TtkprotempEntity[];
}
