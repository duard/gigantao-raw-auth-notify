import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TcbplaEntity } from './tCBPLA.entity';
import { TgflocEntity } from './tGFLOC.entity';

@Index('PK_TGFPEM', ['codemp', 'codprod'], { unique: true })
@Entity('TGFPEM', { schema: 'SANKHYA' })
export class TgfpemEntity {
  @Column('smallint', { primary: true, name: 'CODEMP', default: () => '(0)' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODPROD', default: () => '(0)' })
  codprod: number;

  @Column('int', { name: 'GRUPOICMS', nullable: true })
  grupoicms: number | null;

  @Column('char', { name: 'TEMICMS', length: 1, default: () => "'S'" })
  temicms: string;

  @Column('char', { name: 'TIPSUBST', length: 1, default: () => "'P'" })
  tipsubst: string;

  @Column('char', { name: 'USOPROD', length: 1, default: () => "'V'" })
  usoprod: string;

  @Column('float', { name: 'CODICMSFAST', nullable: true, precision: 53 })
  codicmsfast: number | null;

  @Column('char', { name: 'CODPRODROI', nullable: true, length: 2 })
  codprodroi: string | null;

  @Column('float', { name: 'DESCMAX', nullable: true, precision: 53 })
  descmax: number | null;

  @Column('int', { name: 'QTDCST', default: () => '(0)' })
  qtdcst: number;

  @Column('int', { name: 'DIASCST', default: () => '(0)' })
  diascst: number;

  @Column('int', { name: 'PERCTOLVARCST', default: () => '(100)' })
  perctolvarcst: number;

  @Column('float', { name: 'QTDPEDPEND', nullable: true, precision: 53 })
  qtdpedpend: number | null;

  @Column('char', { name: 'USAIDPALETE', length: 1, default: () => "'N'" })
  usaidpalete: string;

  @Column('float', { name: 'ALIQICMSINTEFD', nullable: true, precision: 53 })
  aliqicmsintefd: number | null;

  @Column('int', { name: 'LEADTIME', nullable: true })
  leadtime: number | null;

  @Column('varchar', { name: 'ORIGPROD', nullable: true, length: 1 })
  origprod: string | null;

  @Column('char', { name: 'TEMIPICOMPRA', length: 1 })
  temipicompra: string;

  @Column('char', { name: 'CAT1799SPRES', length: 1, default: () => "'N'" })
  cat1799Spres: string;

  @Column('smallint', { name: 'CSTIPIENT', nullable: true })
  cstipient: number | null;

  @Column('smallint', { name: 'CSTIPISAI', nullable: true })
  cstipisai: number | null;

  @Column('char', { name: 'TEMIPIVENDA', length: 1, default: () => "'C'" })
  temipivenda: string;

  @Column('varchar', { name: 'TIPCONTEST', nullable: true, length: 1 })
  tipcontest: string | null;

  @Column('char', { name: 'USALOTEDTFAB', length: 1, default: () => "'N'" })
  usalotedtfab: string;

  @Column('char', { name: 'USALOTEDTVAL', length: 1, default: () => "'N'" })
  usalotedtval: string;

  @Column('varchar', { name: 'LOCALIZACAO', nullable: true, length: 15 })
  localizacao: string | null;

  @Column('float', { name: 'ESTMAX', nullable: true, precision: 53 })
  estmax: number | null;

  @Column('float', { name: 'ESTMIN', nullable: true, precision: 53 })
  estmin: number | null;

  @Column('float', { name: 'PERCCMTNAC', precision: 53, default: () => '(0)' })
  perccmtnac: number;

  @Column('float', { name: 'PERCCMTFED', precision: 53, default: () => '(0)' })
  perccmtfed: number;

  @Column('float', { name: 'PERCCMTEST', precision: 53, default: () => '(0)' })
  perccmtest: number;

  @Column('float', { name: 'PERCCMTIMP', precision: 53, default: () => '(0)' })
  perccmtimp: number;

  @Column('smallint', { name: 'CODENQIPIENT', nullable: true })
  codenqipient: number | null;

  @Column('smallint', { name: 'CODENQIPISAI', nullable: true })
  codenqipisai: number | null;

  @Column('int', { name: 'CODESPECST', nullable: true })
  codespecst: number | null;

  @Column('int', { name: 'GRUPOICMS2', nullable: true })
  grupoicms2: number | null;

  @Column('float', { name: 'MVAPADRAO', nullable: true, precision: 53 })
  mvapadrao: number | null;

  @Column('float', { name: 'ALIQGERAL', nullable: true, precision: 53 })
  aliqgeral: number | null;

  @Column('char', { name: 'TEMRASTROLOTE', nullable: true, length: 1 })
  temrastrolote: string | null;

  @Column('char', { name: 'CALCDIFAL', length: 1, default: () => "'S'" })
  calcdifal: string;

  @Column('varchar', { name: 'CODFCI', nullable: true, length: 36 })
  codfci: string | null;

  @Column('float', {
    name: 'PERCREDBASEICMSEFET',
    nullable: true,
    precision: 53,
  })
  percredbaseicmsefet: number | null;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;

  @Column('varchar', { name: 'RASTSTULTENTRADA', nullable: true, length: 1 })
  raststultentrada: string | null;

  @Column('varchar', { name: 'TIPOITEMSPED', nullable: true, length: 2 })
  tipoitemsped: string | null;

  @Column('float', { name: 'VLRCOMERC', nullable: true, precision: 53 })
  vlrcomerc: number | null;

  @Column('float', { name: 'VLRPARCIMPEXT', nullable: true, precision: 53 })
  vlrparcimpext: number | null;

  @Column('text', { name: 'GRADEPADRAO', nullable: true })
  gradepadrao: string | null;

  @Column('int', { name: 'IDGRADE', nullable: true })
  idgrade: number | null;

  @Column('char', { name: 'OBTSTANTMEDENT', nullable: true, length: 1 })
  obtstantmedent: string | null;

  @Column('int', { name: 'ENQREINTEGRA', nullable: true })
  enqreintegra: number | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfpems, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfpems)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tgfpems)
  @JoinColumn([{ name: 'CODCTACTBEFD', referencedColumnName: 'codctactb' }])
  codctactbefd: TcbplaEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgfpems)
  @JoinColumn([{ name: 'CODLOCALPAD', referencedColumnName: 'codlocal' }])
  codlocalpad: TgflocEntity;
}
