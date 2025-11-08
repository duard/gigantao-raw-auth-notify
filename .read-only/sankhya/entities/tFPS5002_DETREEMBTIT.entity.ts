import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps5002InforeembmedEntity } from './tFPS5002_INFOREEMBMED.entity';

@Index('PK_TFPS5002_DETREEMBTIT', ['cods5002Detreembtit'], { unique: true })
@Entity('TFPS5002_DETREEMBTIT', { schema: 'SANKHYA' })
export class Tfps5002DetreembtitEntity {
  @Column('int', { primary: true, name: 'CODS5002_DETREEMBTIT' })
  cods5002Detreembtit: number;

  @Column('varchar', { name: 'TPINSC', nullable: true, length: 1 })
  tpinsc: string | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 14 })
  nrinsc: string | null;

  @Column('float', { name: 'VLRREEMB', nullable: true, precision: 53 })
  vlrreemb: number | null;

  @Column('float', { name: 'VLRREEMBANT', nullable: true, precision: 53 })
  vlrreembant: number | null;

  @ManyToOne(
    () => Tfps5002InforeembmedEntity,
    (tfps5002InforeembmedEntity) =>
      tfps5002InforeembmedEntity.tfps5002Detreembtits,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    {
      name: 'CODS5002_INFOREEMBMED',
      referencedColumnName: 'cods5002Inforeembmed',
    },
  ])
  cods5002Inforeembmed: Tfps5002InforeembmedEntity;
}
