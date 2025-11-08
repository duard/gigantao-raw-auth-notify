import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpregcalcEntity } from './tFPREGCALC.entity';

@Index('PK_TFPREGCALCHIST', ['codregcalc', 'dhalter', 'codusu'], {
  unique: true,
})
@Entity('TFPREGCALCHIST', { schema: 'SANKHYA' })
export class TfpregcalchistEntity {
  @Column('smallint', { primary: true, name: 'CODREGCALC' })
  codregcalc: number;

  @Column('datetime', {
    primary: true,
    name: 'DHALTER',
    default: () => 'getdate()',
  })
  dhalter: Date;

  @Column('varchar', { name: 'PERFER', length: 1 })
  perfer: string;

  @Column('int', { name: 'QTDULTMESPERFER', nullable: true })
  qtdultmesperfer: number | null;

  @Column('varchar', { name: 'DOISPERFER', length: 1 })
  doisperfer: string;

  @Column('varchar', { name: 'TIPODIVDFER', length: 1 })
  tipodivdfer: string;

  @Column('int', { name: 'MAIORVALQTDFER', nullable: true })
  maiorvalqtdfer: number | null;

  @Column('varchar', { name: 'TIPODIVSFER', length: 1 })
  tipodivsfer: string;

  @Column('varchar', { name: 'PER13S', length: 1 })
  per13S: string;

  @Column('int', { name: 'QTDULTMESPER13S', nullable: true })
  qtdultmesper13S: number | null;

  @Column('varchar', { name: 'DOISPER13S', length: 1 })
  doisper13S: string;

  @Column('varchar', { name: 'TIPODIVD13S', length: 1 })
  tipodivd13S: string;

  @Column('int', { name: 'MAIORVALQTD13S', nullable: true })
  maiorvalqtd13S: number | null;

  @Column('varchar', { name: 'TIPODIVS13S', length: 1 })
  tipodivs13S: string;

  @Column('varchar', { name: 'PERRESC', length: 1 })
  perresc: string;

  @Column('int', { name: 'QTDULTMESPERRESC', nullable: true })
  qtdultmesperresc: number | null;

  @Column('varchar', { name: 'DOISPERRESC', length: 1 })
  doisperresc: string;

  @Column('varchar', { name: 'TIPODIVDRESC', length: 1 })
  tipodivdresc: string;

  @Column('int', { name: 'MAIORVALQTDRESC', nullable: true })
  maiorvalqtdresc: number | null;

  @Column('varchar', { name: 'TIPODIVSRESC', length: 1 })
  tipodivsresc: string;

  @Column('varchar', { name: 'MOVMEDIAS', length: 1 })
  movmedias: string;

  @Column('varchar', { name: 'ABATEFERDIVD', length: 1 })
  abateferdivd: string;

  @Column('varchar', { name: 'ABATEFERDIVS', length: 1 })
  abateferdivs: string;

  @Column('varchar', { name: 'TIPMES', length: 1 })
  tipmes: string;

  @Column('varchar', { name: 'CALCRESIDUO', length: 1 })
  calcresiduo: string;

  @Column('varchar', { name: 'CALCRESIDUOADM', length: 1 })
  calcresiduoadm: string;

  @Column('varchar', { name: 'CALCRESIDUOFER', length: 1 })
  calcresiduofer: string;

  @Column('varchar', { name: 'FEVEREIRO30', length: 1 })
  fevereiro30: string;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('char', {
    name: 'EXCECAODUODECIMAL',
    length: 1,
    default: () => "'N'",
  })
  excecaoduodecimal: string;

  @Column('char', { name: 'USAPRIMEIROMES', length: 1, default: () => "'N'" })
  usaprimeiromes: string;

  @Column('smallint', { name: 'QTDULTMESPERFER2', default: () => '(0)' })
  qtdultmesperfer2: number;

  @Column('smallint', { name: 'QTDULTMESPER13S2', default: () => '(0)' })
  qtdultmesper13S2: number;

  @Column('smallint', { name: 'QTDULTMESPERRESC2', default: () => '(0)' })
  qtdultmesperresc2: number;

  @Column('smallint', { name: 'QTDULTMESPERFER3', default: () => '(0)' })
  qtdultmesperfer3: number;

  @Column('smallint', { name: 'QTDULTMESPER13S3', default: () => '(0)' })
  qtdultmesper13S3: number;

  @Column('smallint', { name: 'QTDULTMESPERRESC3', default: () => '(0)' })
  qtdultmesperresc3: number;

  @Column('smallint', { name: 'QTDULTMESRESF', default: () => '(0)' })
  qtdultmesresf: number;

  @Column('smallint', { name: 'QTDULTMESRESF2', default: () => '(0)' })
  qtdultmesresf2: number;

  @Column('smallint', { name: 'QTDULTMESRESF3', default: () => '(0)' })
  qtdultmesresf3: number;

  @Column('smallint', { name: 'QTDULTMESRESD', default: () => '(0)' })
  qtdultmesresd: number;

  @Column('smallint', { name: 'QTDULTMESRESD2', default: () => '(0)' })
  qtdultmesresd2: number;

  @Column('smallint', { name: 'QTDULTMESRESD3', default: () => '(0)' })
  qtdultmesresd3: number;

  @Column('char', { name: 'TIPODIVDFERRESC', length: 1, default: () => "'P'" })
  tipodivdferresc: string;

  @Column('char', { name: 'TIPODIVSFERRESC', length: 1, default: () => "'P'" })
  tipodivsferresc: string;

  @Column('char', { name: 'TIPODIVD13SRESC', length: 1, default: () => "'P'" })
  tipodivd13Sresc: string;

  @Column('char', { name: 'TIPODIVS13SRESC', length: 1, default: () => "'P'" })
  tipodivs13Sresc: string;

  @Column('char', { name: 'PERFERRESC', length: 1, default: () => "'P'" })
  perferresc: string;

  @Column('char', { name: 'PER13SRESC', length: 1, default: () => "'D'" })
  per13Sresc: string;

  @Column('char', { name: 'TRESPERFER', length: 1, default: () => "'N'" })
  tresperfer: string;

  @Column('char', { name: 'TRESPER13S', length: 1, default: () => "'N'" })
  tresper13S: string;

  @Column('char', { name: 'TRESPERRESC', length: 1, default: () => "'N'" })
  tresperresc: string;

  @Column('char', { name: 'CONSIDERAMESRESC', length: 1, default: () => "'N'" })
  consideramesresc: string;

  @Column('varchar', { name: 'TIPMOVMEDIAS', length: 1, default: () => "'N'" })
  tipmovmedias: string;

  @Column('int', {
    name: 'MAIORVALQTD13SRESC',
    nullable: true,
    default: () => '(0)',
  })
  maiorvalqtd13Sresc: number | null;

  @Column('int', {
    name: 'MAIORVALQTDFERRESC',
    nullable: true,
    default: () => '(0)',
  })
  maiorvalqtdferresc: number | null;

  @Column('smallint', { name: 'CODEVESOBREAVISO', nullable: true })
  codevesobreaviso: number | null;

  @Column('varchar', { name: 'CALCRESIDUORESC', nullable: true, length: 1 })
  calcresiduoresc: string | null;

  @Column('varchar', { name: 'FERIASABONO', length: 1, default: () => "'N'" })
  feriasabono: string;

  @ManyToOne(
    () => TfpregcalcEntity,
    (tfpregcalcEntity) => tfpregcalcEntity.tfpregcalchists,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([{ name: 'CODREGCALC', referencedColumnName: 'codregcalc' }])
  codregcalc2: TfpregcalcEntity;
}
