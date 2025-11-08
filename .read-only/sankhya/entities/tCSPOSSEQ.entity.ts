import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCSPOSSEQ', ['seqproposta', 'numos', 'nupesq', 'numitem'], {
  unique: true,
})
@Entity('TCSPOSSEQ', { schema: 'SANKHYA' })
export class TcsposseqEntity {
  @Column('int', { primary: true, name: 'SEQPROPOSTA' })
  seqproposta: number;

  @Column('int', { primary: true, name: 'NUPESQ' })
  nupesq: number;

  @Column('int', { primary: true, name: 'NUMOS' })
  numos: number;

  @Column('smallint', { primary: true, name: 'NUMITEM' })
  numitem: number;

  @Column('int', { name: 'CODFLD', nullable: true })
  codfld: number | null;

  @Column('varchar', { name: 'APLICAVEL', nullable: true, length: 1 })
  aplicavel: string | null;
}
