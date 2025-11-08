import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcfoEntity } from './tGFCFO.entity';
import { TgffopEntity } from './tGFFOP.entity';
import { TgfgruEntity } from './tGFGRU.entity';
import { TgfobsEntity } from './tGFOBS.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TsiufsEntity } from './tSIUFS.entity';

@Index('PK_TGFCAJA', ['codcfg'], { unique: true })
@Entity('TGFCAJA', { schema: 'SANKHYA' })
export class TgfcajaEntity {
  @Column('smallint', { primary: true, name: 'CODCFG' })
  codcfg: number;

  @Column('varchar', { name: 'DESCRCFG', length: 255 })
  descrcfg: string;

  @Column('smallint', { name: 'TIPOCONFIG', default: () => '(0)' })
  tipoconfig: number;

  @Column('char', { name: 'CONSDESPACESSO', length: 1, default: () => "'S'" })
  consdespacesso: string;

  @Column('char', { name: 'STATUS', length: 1, default: () => "'P'" })
  status: string;

  @Column('varchar', { name: 'CODAJUSTE', nullable: true, length: 8 })
  codajuste: string | null;

  @Column('varchar', { name: 'COMPOBSPADRAO', nullable: true, length: 3103 })
  compobspadrao: string | null;

  @Column('varchar', { name: 'COMPAJUSTE', nullable: true, length: 3103 })
  compajuste: string | null;

  @Column('varchar', { name: 'FORBASEICMS', nullable: true, length: 3103 })
  forbaseicms: string | null;

  @Column('varchar', { name: 'FORALIQICMS', nullable: true, length: 3103 })
  foraliqicms: string | null;

  @Column('varchar', { name: 'FORVLRICMS', nullable: true, length: 3103 })
  forvlricms: string | null;

  @Column('varchar', { name: 'FORVLROUTROS', nullable: true, length: 3103 })
  forvlroutros: string | null;

  @Column('int', { name: 'TIPAJUSTE', nullable: true })
  tipajuste: number | null;

  @Column('varchar', { name: 'TIPIMPOSTO', nullable: true, length: 1 })
  tipimposto: string | null;

  @Column('int', { name: 'TIPAPURACAO', nullable: true })
  tipapuracao: number | null;

  @Column('varchar', { name: 'NUMPROCESSO', nullable: true, length: 60 })
  numprocesso: string | null;

  @Column('int', { name: 'ORIGPROCESSO', nullable: true })
  origprocesso: number | null;

  @Column('smallint', { name: 'CODOBSPADRAOAJA', nullable: true })
  codobspadraoaja: number | null;

  @Column('varchar', { name: 'DESCRPROCESSO', nullable: true, length: 255 })
  descrprocesso: string | null;

  @Column('varchar', { name: 'OBSERVACAOAJA', nullable: true, length: 200 })
  observacaoaja: string | null;

  @Column('varchar', { name: 'CODAJUSTEAJA', nullable: true, length: 3 })
  codajusteaja: string | null;

  @Column('char', { name: 'DEBESP', length: 1, default: () => "'N'" })
  debesp: string;

  @Column('char', { name: 'SUBAPURACAO', length: 1, default: () => "'N'" })
  subapuracao: string;

  @Column('char', { name: 'INDSUBAPURACAO', nullable: true, length: 1 })
  indsubapuracao: string | null;

  @Column('char', { name: 'AGRUPREGUNIAJ', length: 1, default: () => "'S'" })
  agrupreguniaj: string;

  @Column('varchar', { name: 'FORVLRAJUSTE', nullable: true, length: 3103 })
  forvlrajuste: string | null;

  @Column('smallint', { name: 'FILCODTIPOPER', nullable: true })
  filcodtipoper: number | null;

  @Column('char', { name: 'FILCLASSIFICMS', nullable: true, length: 1 })
  filclassificms: string | null;

  @Column('char', { name: 'FILSIMPLES', length: 1, default: () => "'N'" })
  filsimples: string;

  @Column('int', { name: 'FILGRUPOICMS', nullable: true })
  filgrupoicms: number | null;

  @Column('int', { name: 'FILGRUPOICMS2', nullable: true })
  filgrupoicms2: number | null;

  @Column('varchar', { name: 'FILNCM', nullable: true, length: 10 })
  filncm: string | null;

  @Column('smallint', { name: 'FILCODTRIB', nullable: true })
  filcodtrib: number | null;

  @Column('varchar', { name: 'FILPERSONALIZADO', nullable: true, length: 3103 })
  filpersonalizado: string | null;

  @Column('char', { name: 'INSAJUSPOR', length: 1, default: () => "'I'" })
  insajuspor: string;

  @Column('char', { name: 'UTIDATASFILTRO', nullable: true, length: 1 })
  utidatasfiltro: string | null;

  @Column('char', {
    name: 'UTILIZADOCRELOUTRAREF',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  utilizadocreloutraref: string | null;

  @Column('char', { name: 'QUEBRAGERINFO', nullable: true, length: 1 })
  quebragerinfo: string | null;

  @Column('varchar', { name: 'LISTEMPGER', nullable: true, length: 1000 })
  listempger: string | null;

  @Column('varchar', { name: 'ORIGEMAJUSTE', nullable: true, length: 1 })
  origemajuste: string | null;

  @Column('char', { name: 'ENVINFORIG', nullable: true, length: 1 })
  envinforig: string | null;

  @Column('char', { name: 'AGRUPAR', nullable: true, length: 1 })
  agrupar: string | null;

  @Column('char', { name: 'INDSUBAPURACAOAJ', nullable: true, length: 1 })
  indsubapuracaoaj: string | null;

  @Column('char', {
    name: 'SUBAPURACAOAJ',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  subapuracaoaj: string | null;

  @Column('char', { name: 'REGAJDIME', nullable: true, length: 2 })
  regajdime: string | null;

  @ManyToOne(() => TgfobsEntity, (tgfobsEntity) => tgfobsEntity.tgfcajas)
  @JoinColumn([{ name: 'CODOBSPADRAO', referencedColumnName: 'codobspadrao' }])
  codobspadrao: TgfobsEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfcajas)
  @JoinColumn([{ name: 'FILCODPROD', referencedColumnName: 'codprod' }])
  filcodprod: TgfproEntity;

  @ManyToOne(() => TgfcfoEntity, (tgfcfoEntity) => tgfcfoEntity.tgfcajas)
  @JoinColumn([{ name: 'FILCODCFO', referencedColumnName: 'codcfo' }])
  filcodcfo: TgfcfoEntity;

  @ManyToOne(() => TgffopEntity, (tgffopEntity) => tgffopEntity.tgfcajas)
  @JoinColumn([{ name: 'FILNUFOP', referencedColumnName: 'nufop' }])
  filnufop: TgffopEntity;

  @ManyToOne(() => TgfgruEntity, (tgfgruEntity) => tgfgruEntity.tgfcajas)
  @JoinColumn([
    { name: 'FILCODGRUPOPROD', referencedColumnName: 'codgrupoprod' },
  ])
  filcodgrupoprod: TgfgruEntity;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tgfcajas)
  @JoinColumn([{ name: 'FILCODUFDEST', referencedColumnName: 'coduf' }])
  filcodufdest: TsiufsEntity;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tgfcajas2)
  @JoinColumn([{ name: 'FILCODUFORIG', referencedColumnName: 'coduf' }])
  filcoduforig: TsiufsEntity;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tgfcajas3)
  @JoinColumn([{ name: 'CODUF', referencedColumnName: 'coduf' }])
  coduf: TsiufsEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tgfcajas)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tgfcajas2)
  @JoinColumn([{ name: 'FILCODEMP', referencedColumnName: 'codemp' }])
  filcodemp: TsiempEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfcajas)
  @JoinColumn([{ name: 'FILCODPARC', referencedColumnName: 'codparc' }])
  filcodparc: TgfparEntity;
}
