import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCSPRNSEQ', ['seqproposta', 'numos', 'codprod'], { unique: true })
@Entity('TCSPRNSEQ', { schema: 'SANKHYA' })
export class TcsprnseqEntity {
  @Column('int', { primary: true, name: 'SEQPROPOSTA' })
  seqproposta: number;

  @Column('int', { primary: true, name: 'NUMOS' })
  numos: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('float', { name: 'VLRTOT', nullable: true, precision: 53 })
  vlrtot: number | null;
}
