import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';

@Index('PK_TFPPONFECHAMENTO', ['codemp', 'codfunc', 'dtmov'], { unique: true })
@Entity('TFPPONFECHAMENTO', { schema: 'SANKHYA' })
export class TfpponfechamentoEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'DTMOV' })
  dtmov: Date;

  @Column('varchar', { name: 'BATIDAS', nullable: true, length: 3103 })
  batidas: string | null;

  @Column('smallint', { name: 'NORMAL', nullable: true })
  normal: number | null;

  @Column('smallint', { name: 'NOTURNA', nullable: true })
  noturna: number | null;

  @Column('smallint', { name: 'EXTRA', nullable: true })
  extra: number | null;

  @Column('smallint', { name: 'EXTRANOT', nullable: true })
  extranot: number | null;

  @Column('smallint', { name: 'EXCEDENTE', nullable: true })
  excedente: number | null;

  @Column('smallint', { name: 'EXCEDENTENOT', nullable: true })
  excedentenot: number | null;

  @Column('smallint', { name: 'ATRASO', nullable: true })
  atraso: number | null;

  @Column('smallint', { name: 'FALTA', nullable: true, default: () => '(0)' })
  falta: number | null;

  @Column('smallint', {
    name: 'ATESTADO',
    nullable: true,
    default: () => '(0)',
  })
  atestado: number | null;

  @Column('smallint', { name: 'LICENCA', nullable: true, default: () => '(0)' })
  licenca: number | null;

  @Column('smallint', {
    name: 'COMPENSACAO',
    nullable: true,
    default: () => '(0)',
  })
  compensacao: number | null;

  @Column('smallint', {
    name: 'AFASTAMENTO',
    nullable: true,
    default: () => '(0)',
  })
  afastamento: number | null;

  @Column('smallint', { name: 'FERIAS', nullable: true, default: () => '(0)' })
  ferias: number | null;

  @Column('smallint', {
    name: 'BONIFICADO',
    nullable: true,
    default: () => '(0)',
  })
  bonificado: number | null;

  @Column('smallint', { name: 'DOMFER', nullable: true })
  domfer: number | null;

  @Column('smallint', { name: 'DOMFERNOT', nullable: true })
  domfernot: number | null;

  @Column('smallint', { name: 'FERIADO', nullable: true })
  feriado: number | null;

  @Column('smallint', { name: 'PREVISTO', nullable: true })
  previsto: number | null;

  @Column('smallint', { name: 'TRABALHADO', nullable: true })
  trabalhado: number | null;

  @Column('smallint', { name: 'TOTAL', nullable: true })
  total: number | null;

  @Column('smallint', { name: 'CODCARGAHOR', nullable: true })
  codcargahor: number | null;

  @Column('smallint', { name: 'SEQCARGAHORARIA', nullable: true })
  seqcargahoraria: number | null;

  @Column('varchar', {
    name: 'EHFERIADO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  ehferiado: string | null;

  @Column('varchar', {
    name: 'DESCANSOSEM',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  descansosem: string | null;

  @Column('varchar', { name: 'OCORRENCIAS', nullable: true, length: 3103 })
  ocorrencias: string | null;

  @Column('datetime', {
    name: 'DHALTER',
    nullable: true,
    default: () => 'getdate()',
  })
  dhalter: Date | null;

  @Column('datetime', { name: 'DTFECHAMENTO', nullable: true })
  dtfechamento: Date | null;

  @Column('smallint', {
    name: 'ABSENTEISMO',
    nullable: true,
    default: () => '(0)',
  })
  absenteismo: number | null;

  @Column('varchar', {
    name: 'FECHADO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  fechado: string | null;

  @Column('smallint', { name: 'SOBREAVISO', nullable: true })
  sobreaviso: number | null;

  @Column('smallint', { name: 'SATRABALHADO', nullable: true })
  satrabalhado: number | null;

  @Column('varchar', { name: 'TEMSOBREAVISO', nullable: true, length: 1 })
  temsobreaviso: string | null;

  @ManyToOne(
    () => TfpfunEntity,
    (tfpfunEntity) => tfpfunEntity.tfpponfechamentos,
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;
}
