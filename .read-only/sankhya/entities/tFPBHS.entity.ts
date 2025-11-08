import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';

@Index('PK_TFPBHS', ['codemp', 'codfunc', 'referencia', 'autorizado'], {
  unique: true,
})
@Entity('TFPBHS', { schema: 'SANKHYA' })
export class TfpbhsEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('int', { name: 'SALDOINICMESHOR', default: () => '(0)' })
  saldoinicmeshor: number;

  @Column('int', { name: 'SALDOINICMESMIN', default: () => '(0)' })
  saldoinicmesmin: number;

  @Column('int', { name: 'CREDITOSHOR', nullable: true })
  creditoshor: number | null;

  @Column('int', { name: 'CREDITOSMIN', nullable: true })
  creditosmin: number | null;

  @Column('int', { name: 'DEBITOSHOR', nullable: true })
  debitoshor: number | null;

  @Column('int', { name: 'DEBITOSMIN', nullable: true })
  debitosmin: number | null;

  @Column('int', { name: 'PAGAMENTOHOR', nullable: true })
  pagamentohor: number | null;

  @Column('int', { name: 'PAGAMENTOMIN', nullable: true })
  pagamentomin: number | null;

  @Column('int', { name: 'FALTASHOR', nullable: true })
  faltashor: number | null;

  @Column('int', { name: 'FALTASMIN', nullable: true })
  faltasmin: number | null;

  @Column('int', { name: 'ACRESCIMOMIN', nullable: true })
  acrescimomin: number | null;

  @Column('int', { name: 'BAIXAACRESCMIN', nullable: true })
  baixaacrescmin: number | null;

  @Column('int', { name: 'SALDOINIACRESCMIN', nullable: true })
  saldoiniacrescmin: number | null;

  @Column('int', { name: 'COMPACRESCIMOMIN', nullable: true })
  compacrescimomin: number | null;

  @Column('datetime', { name: 'DTPERIODOINI', nullable: true })
  dtperiodoini: Date | null;

  @Column('datetime', { name: 'DTPERIODOFIM', nullable: true })
  dtperiodofim: Date | null;

  @Column('varchar', {
    primary: true,
    name: 'AUTORIZADO',
    length: 1,
    default: () => "'N'",
  })
  autorizado: string;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpbhs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;
}
