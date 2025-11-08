import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TfplogcalcEntity } from './tFPLOGCALC.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TsibcoEntity } from './tSIBCO.entity';
import { TfpctiEntity } from './tFPCTI.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TcblotEntity } from './tCBLOT.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TfpfolEntity } from './tFPFOL.entity';
import { TfpvcaEntity } from './tFPVCA.entity';

@Index('PK_TFPBAS', ['referencia', 'codemp', 'codfunc', 'tipfolha'], {
  unique: true,
})
@Index('TFPBAS_I01', ['nufin'], {})
@Index('TFPBAS_I02', ['codemp', 'codfunc', 'dtpagamento'], {})
@Index('TFPBAS_I03', ['nufinirrf'], {})
@Index('TFPBAS_I04', ['nufinfgts'], {})
@Index('TFPBAS_I05', ['nufingrcsava'], {})
@Index('TFPBAS_I06', ['nufingrcssin'], {})
@Index('TFPBAS_I07', ['nufingrcsaaal'], {})
@Index('TFPBAS_I08', ['nufingrcscon'], {})
@Index(
  'TFPBAS_I09',
  ['referencia', 'codemp', 'codfunc', 'rescisaodefinitiva'],
  {},
)
@Index('TFPBAS_I10', ['codemp', 'codfunc', 'referencia'], {})
@Index('TFPBAS_I11', ['codemp', 'referencia', 'status'], {})
@Index('TFPBAS_I12', ['codemp', 'codfunc', 'referencia', 'status'], {})
@Index(
  'TFPBAS_IFUNCPRINC',
  ['codemp', 'referencia', 'tipfolha', 'codfuncprinc'],
  {},
)
@Entity('TFPBAS', { schema: 'SANKHYA' })
export class TfpbasEntity {
  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('char', {
    primary: true,
    name: 'TIPFOLHA',
    length: 1,
    default: () => "'N'",
  })
  tipfolha: string;

  @Column('smallint', { name: 'DIASTRAB', default: () => '(30)' })
  diastrab: number;

  @Column('money', { name: 'SALBRUTO' })
  salbruto: number;

  @Column('money', { name: 'SALLIQ' })
  salliq: number;

  @Column('money', { name: 'SALBASE' })
  salbase: number;

  @Column('int', { name: 'NUMCHEQ', nullable: true })
  numcheq: number | null;

  @Column('smallint', { name: 'STATUS', nullable: true })
  status: number | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
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

  @Column('char', { name: 'DISSIDIO', length: 1, default: () => "'N'" })
  dissidio: string;

  @Column('char', { name: 'BLOQUEIAPORTALRH', length: 1, default: () => "'N'" })
  bloqueiaportalrh: string;

  @Column('int', { name: 'PARCDECTERC', default: () => '(0)' })
  parcdecterc: number;

  @Column('char', {
    name: 'BLOQUEIAPORTALPTO',
    length: 1,
    default: () => "'N'",
  })
  bloqueiaportalpto: string;

  @Column('smallint', { name: 'CODSIND', nullable: true })
  codsind: number | null;

  @Column('varchar', { name: 'PROCESSO', nullable: true, length: 30 })
  processo: string | null;

  @Column('varchar', { name: 'DSC', nullable: true, length: 255 })
  dsc: string | null;

  @Column('smallint', { name: 'INDMV', nullable: true })
  indmv: number | null;

  @Column('char', { name: 'GERARPARESCISAO', length: 1, default: () => "'N'" })
  gerarparescisao: string;

  @Column('char', { name: 'LIBESOCIAL', length: 1, default: () => "'N'" })
  libesocial: string;

  @Column('char', {
    name: 'RESCISAODEFINITIVA',
    length: 1,
    default: () => "'N'",
  })
  rescisaodefinitiva: string;

  @Column('int', { name: 'CODFUNCPRINC', nullable: true })
  codfuncprinc: number | null;

  @Column('float', { name: 'QTDDIASINTERM', nullable: true, precision: 53 })
  qtddiasinterm: number | null;

  @Column('text', { name: 'PARAMETROS', nullable: true })
  parametros: string | null;

  @Column('char', {
    name: 'RECALCULA',
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  recalcula: string | null;

  @Column('text', { name: 'LOGCALC', nullable: true })
  logcalc: string | null;

  @Column('smallint', { name: 'QMESRRA', default: () => '(0)' })
  qmesrra: number;

  @Column('varchar', { name: 'VALIDADO', length: 1, default: () => "'N'" })
  validado: string;

  @Column('text', { name: 'EVENTOSINC', nullable: true })
  eventosinc: string | null;

  @Column('smallint', { name: 'CODUSUMP', nullable: true })
  codusump: number | null;

  @Column('smallint', { name: 'SEQUENCIACNV', default: () => '(0)' })
  sequenciacnv: number;

  @Column('varchar', { name: 'MP1171', nullable: true, length: 1 })
  mp1171: string | null;

  @ManyToOne(
    () => TfplogcalcEntity,
    (tfplogcalcEntity) => tfplogcalcEntity.tfpbas,
  )
  @JoinColumn([{ name: 'CODLOG', referencedColumnName: 'codlog' }])
  codlog: TfplogcalcEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpbas)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TsibcoEntity, (tsibcoEntity) => tsibcoEntity.tfpbas)
  @JoinColumn([{ name: 'CODBCO', referencedColumnName: 'codbco' }])
  codbco: TsibcoEntity;

  @ManyToOne(() => TfpctiEntity, (tfpctiEntity) => tfpctiEntity.tfpbas)
  @JoinColumn([{ name: 'CODCONV', referencedColumnName: 'codconv' }])
  codconv: TfpctiEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpbas)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;

  @ManyToOne(() => TcblotEntity, (tcblotEntity) => tcblotEntity.tfpbas, {
    onDelete: 'SET NULL',
  })
  @JoinColumn([
    { name: 'CODEMPCTB', referencedColumnName: 'codemp' },
    { name: 'REFERENCIACTB', referencedColumnName: 'referencia' },
    { name: 'NUMLOTECTB', referencedColumnName: 'numlote' },
  ])
  tcblot: TcblotEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpbas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tfpbas, {
    onDelete: 'SET NULL',
  })
  @JoinColumn([{ name: 'NUFINIRRFPLR', referencedColumnName: 'nufin' }])
  nufinirrfplr: TgffinEntity;

  @OneToMany(() => TfpfolEntity, (tfpfolEntity) => tfpfolEntity.tfpbas)
  tfpfols: TfpfolEntity[];

  @OneToOne(() => TfpvcaEntity, (tfpvcaEntity) => tfpvcaEntity.tfpbas)
  tfpvca: TfpvcaEntity;
}
