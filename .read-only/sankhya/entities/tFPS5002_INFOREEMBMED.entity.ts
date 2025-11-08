import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps5002DetreembtitEntity } from './tFPS5002_DETREEMBTIT.entity';
import { Tfps5002InforeembdepEntity } from './tFPS5002_INFOREEMBDEP.entity';
import { Tfps5002InfoircomplemEntity } from './tFPS5002_INFOIRCOMPLEM.entity';

@Index('PK_TFPS5002_INFOREEMBMED', ['cods5002Inforeembmed'], { unique: true })
@Entity('TFPS5002_INFOREEMBMED', { schema: 'SANKHYA' })
export class Tfps5002InforeembmedEntity {
  @Column('int', { primary: true, name: 'CODS5002_INFOREEMBMED' })
  cods5002Inforeembmed: number;

  @Column('varchar', { name: 'INDORGREEMB', nullable: true, length: 1 })
  indorgreemb: string | null;

  @Column('varchar', { name: 'CNPJOPER', nullable: true, length: 14 })
  cnpjoper: string | null;

  @Column('varchar', { name: 'REGANS', nullable: true, length: 6 })
  regans: string | null;

  @OneToMany(
    () => Tfps5002DetreembtitEntity,
    (tfps5002DetreembtitEntity) =>
      tfps5002DetreembtitEntity.cods5002Inforeembmed,
  )
  tfps5002Detreembtits: Tfps5002DetreembtitEntity[];

  @OneToMany(
    () => Tfps5002InforeembdepEntity,
    (tfps5002InforeembdepEntity) =>
      tfps5002InforeembdepEntity.cods5002Inforeembmed,
  )
  tfps5002Inforeembdeps: Tfps5002InforeembdepEntity[];

  @ManyToOne(
    () => Tfps5002InfoircomplemEntity,
    (tfps5002InfoircomplemEntity) =>
      tfps5002InfoircomplemEntity.tfps5002Inforeembmeds,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    {
      name: 'CODS5002_INFOIRCOMPLEM',
      referencedColumnName: 'cods5002Infoircomplem',
    },
  ])
  cods5002Infoircomplem: Tfps5002InfoircomplemEntity;
}
