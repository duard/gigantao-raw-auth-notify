import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TsibcoEntity } from './tSIBCO.entity';
import { TfplogcalcEntity } from './tFPLOGCALC.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpctiEntity } from './tFPCTI.entity';
import { TfpfoltesteEntity } from './tFPFOLTESTE.entity';

@Index('PK_TFPBASTES', ['referencia', 'codemp', 'codfunc', 'tipfolha'], {
  unique: true,
})
@Entity('TFPBASTESTE', { schema: 'SANKHYA' })
export class TfpbastesteEntity {
  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('varchar', {
    primary: true,
    name: 'TIPFOLHA',
    length: 1,
    default: () => "'N'",
  })
  tipfolha: string;

  @Column('smallint', { name: 'DIASTRAB', default: () => '(30)' })
  diastrab: number;

  @Column('float', { name: 'SALBRUTO', precision: 53 })
  salbruto: number;

  @Column('float', { name: 'SALLIQ', precision: 53 })
  salliq: number;

  @Column('float', { name: 'SALBASE', precision: 53 })
  salbase: number;

  @Column('int', { name: 'NUMCHEQ', nullable: true })
  numcheq: number | null;

  @Column('smallint', { name: 'STATUS', nullable: true })
  status: number | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('datetime', { name: 'DTPAGAMENTO', nullable: true })
  dtpagamento: Date | null;

  @Column('int', { name: 'NUFIN', nullable: true })
  nufin: number | null;

  @Column('varchar', { name: 'NAORECALCULA', length: 1, default: () => "'N'" })
  naorecalcula: string;

  @Column('char', { name: 'SEFIP650', length: 1, default: () => "'N'" })
  sefip650: string;

  @Column('int', { name: 'NUFINIRRF', nullable: true })
  nufinirrf: number | null;

  @Column('int', { name: 'NUFINFGTS', nullable: true })
  nufinfgts: number | null;

  @Column('int', { name: 'NUFINGRCSAVA', nullable: true })
  nufingrcsava: number | null;

  @Column('int', { name: 'NUFINGRCSSIN', nullable: true })
  nufingrcssin: number | null;

  @Column('int', { name: 'NUFINGRCSAAAL', nullable: true })
  nufingrcsaaal: number | null;

  @Column('int', { name: 'NUFINGRCSCON', nullable: true })
  nufingrcscon: number | null;

  @Column('int', { name: 'NUFINIRRFPLR', nullable: true })
  nufinirrfplr: number | null;

  @Column('char', { name: 'DISSIDIO', length: 1, default: () => "'N'" })
  dissidio: string;

  @Column('char', { name: 'BLOQUEIAPORTALRH', length: 1, default: () => "'N'" })
  bloqueiaportalrh: string;

  @Column('smallint', { name: 'PARCDECTERC', default: () => '(0)' })
  parcdecterc: number;

  @Column('char', {
    name: 'BLOQUEIAPORTALPTO',
    length: 1,
    default: () => "'N'",
  })
  bloqueiaportalpto: string;

  @Column('text', { name: 'PARAMETROS', nullable: true })
  parametros: string | null;

  @Column('varchar', {
    name: 'RECALCULA',
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  recalcula: string | null;

  @Column('text', { name: 'LOGCALC', nullable: true })
  logcalc: string | null;

  @Column('int', { name: 'CODFUNCPRINC', nullable: true })
  codfuncprinc: number | null;

  @Column('smallint', { name: 'CODSIND', nullable: true })
  codsind: number | null;

  @Column('varchar', { name: 'DSC', nullable: true, length: 255 })
  dsc: string | null;

  @Column('smallint', { name: 'INDMV', nullable: true })
  indmv: number | null;

  @Column('varchar', { name: 'PROCESSO', nullable: true, length: 30 })
  processo: string | null;

  @Column('float', { name: 'QTDDIASINTERM', nullable: true, precision: 53 })
  qtddiasinterm: number | null;

  @Column('char', {
    name: 'RESCISAODEFINITIVA',
    length: 1,
    default: () => "'N'",
  })
  rescisaodefinitiva: string;

  @Column('smallint', { name: 'QMESRRA', default: () => '(0)' })
  qmesrra: number;

  @Column('char', { name: 'GERARPARESCISAO', length: 1, default: () => "'N'" })
  gerarparescisao: string;

  @Column('varchar', { name: 'VALIDADO', length: 1, default: () => "'N'" })
  validado: string;

  @Column('text', { name: 'EVENTOSINC', nullable: true })
  eventosinc: string | null;

  @Column('smallint', { name: 'CODUSUMP', nullable: true })
  codusump: number | null;

  @Column('smallint', { name: 'SEQUENCIACNV', default: () => '(0)' })
  sequenciacnv: number;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpbastestes)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TsibcoEntity, (tsibcoEntity) => tsibcoEntity.tfpbastestes)
  @JoinColumn([{ name: 'CODBCO', referencedColumnName: 'codbco' }])
  codbco: TsibcoEntity;

  @ManyToOne(
    () => TfplogcalcEntity,
    (tfplogcalcEntity) => tfplogcalcEntity.tfpbastestes,
  )
  @JoinColumn([{ name: 'CODLOG', referencedColumnName: 'codlog' }])
  codlog: TfplogcalcEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpbastestes)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpbastestes)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpctiEntity, (tfpctiEntity) => tfpctiEntity.tfpbastestes)
  @JoinColumn([{ name: 'CODCONV', referencedColumnName: 'codconv' }])
  codconv: TfpctiEntity;

  @OneToMany(
    () => TfpfoltesteEntity,
    (tfpfoltesteEntity) => tfpfoltesteEntity.tfpbasteste,
  )
  tfpfoltestes: TfpfoltesteEntity[];
}
