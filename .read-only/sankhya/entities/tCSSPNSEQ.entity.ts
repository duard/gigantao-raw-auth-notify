import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCSSPNSEQ', ['seqproposta', 'numos'], { unique: true })
@Entity('TCSSPNSEQ', { schema: 'SANKHYA' })
export class TcsspnseqEntity {
  @Column('int', { primary: true, name: 'SEQPROPOSTA' })
  seqproposta: number;

  @Column('int', { primary: true, name: 'NUMOS' })
  numos: number;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;
}
