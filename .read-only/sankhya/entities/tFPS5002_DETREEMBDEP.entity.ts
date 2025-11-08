import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps5002InforeembdepEntity } from './tFPS5002_INFOREEMBDEP.entity';

@Index('PK_TFPS5002_DETREEMBDEP', ['cods5002Detreembdep'], { unique: true })
@Entity('TFPS5002_DETREEMBDEP', { schema: 'SANKHYA' })
export class Tfps5002DetreembdepEntity {
  @Column('int', { primary: true, name: 'CODS5002_DETREEMBDEP' })
  cods5002Detreembdep: number;

  @Column('varchar', { name: 'TPINSC', nullable: true, length: 1 })
  tpinsc: string | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 14 })
  nrinsc: string | null;

  @Column('float', { name: 'VLRREEMB', nullable: true, precision: 53 })
  vlrreemb: number | null;

  @Column('float', { name: 'VLRREEMBANT', nullable: true, precision: 53 })
  vlrreembant: number | null;

  @ManyToOne(
    () => Tfps5002InforeembdepEntity,
    (tfps5002InforeembdepEntity) =>
      tfps5002InforeembdepEntity.tfps5002Detreembdeps,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    {
      name: 'CODS5002_INFOREEMBDEP',
      referencedColumnName: 'cods5002Inforeembdep',
    },
  ])
  cods5002Inforeembdep: Tfps5002InforeembdepEntity;
}
