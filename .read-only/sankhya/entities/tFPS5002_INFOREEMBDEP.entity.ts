import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps5002DetreembdepEntity } from './tFPS5002_DETREEMBDEP.entity';
import { Tfps5002InforeembmedEntity } from './tFPS5002_INFOREEMBMED.entity';

@Index('PK_TFPS5002_INFOREEMBDEP', ['cods5002Inforeembdep'], { unique: true })
@Entity('TFPS5002_INFOREEMBDEP', { schema: 'SANKHYA' })
export class Tfps5002InforeembdepEntity {
  @Column('int', { primary: true, name: 'CODS5002_INFOREEMBDEP' })
  cods5002Inforeembdep: number;

  @Column('varchar', { name: 'CPFBENEF', nullable: true, length: 11 })
  cpfbenef: string | null;

  @OneToMany(
    () => Tfps5002DetreembdepEntity,
    (tfps5002DetreembdepEntity) =>
      tfps5002DetreembdepEntity.cods5002Inforeembdep,
  )
  tfps5002Detreembdeps: Tfps5002DetreembdepEntity[];

  @ManyToOne(
    () => Tfps5002InforeembmedEntity,
    (tfps5002InforeembmedEntity) =>
      tfps5002InforeembmedEntity.tfps5002Inforeembdeps,
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
