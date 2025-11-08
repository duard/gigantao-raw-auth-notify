import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCSRPNSEQ', ['seqproposta', 'numos', 'codnat'], { unique: true })
@Entity('TCSRPNSEQ', { schema: 'SANKHYA' })
export class TcsrpnseqEntity {
  @Column('int', { primary: true, name: 'SEQPROPOSTA' })
  seqproposta: number;

  @Column('int', { primary: true, name: 'NUMOS' })
  numos: number;

  @Column('int', { primary: true, name: 'CODNAT' })
  codnat: number;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('int', { name: 'GRIDMULT', nullable: true })
  gridmult: number | null;

  @Column('float', { name: 'VLRIMP', nullable: true, precision: 53 })
  vlrimp: number | null;

  @Column('float', { name: 'VLRLIQ', nullable: true, precision: 53 })
  vlrliq: number | null;
}
