import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps5002DespprocjudEntity } from './tFPS5002_DESPPROCJUD.entity';
import { Tfps5002IdeadvEntity } from './tFPS5002_IDEADV.entity';
import { Tfps5002DmdevEntity } from './tFPS5002_DMDEV.entity';

@Index('PK_TFPS5002_INFORRA', ['cods5002Inforra'], { unique: true })
@Entity('TFPS5002_INFORRA', { schema: 'SANKHYA' })
export class Tfps5002InforraEntity {
  @Column('int', { primary: true, name: 'CODS5002_INFORRA' })
  cods5002Inforra: number;

  @Column('varchar', { name: 'TPPROCRRA', nullable: true, length: 1 })
  tpprocrra: string | null;

  @Column('varchar', { name: 'NRPROCRRA', nullable: true, length: 21 })
  nrprocrra: string | null;

  @Column('varchar', { name: 'DESCRRA', nullable: true, length: 50 })
  descrra: string | null;

  @Column('smallint', { name: 'QTDMESESRRA', nullable: true })
  qtdmesesrra: number | null;

  @OneToMany(
    () => Tfps5002DespprocjudEntity,
    (tfps5002DespprocjudEntity) => tfps5002DespprocjudEntity.cods5002Inforra,
  )
  tfps5002Despprocjuds: Tfps5002DespprocjudEntity[];

  @OneToMany(
    () => Tfps5002IdeadvEntity,
    (tfps5002IdeadvEntity) => tfps5002IdeadvEntity.cods5002Inforra,
  )
  tfps5002Ideadvs: Tfps5002IdeadvEntity[];

  @ManyToOne(
    () => Tfps5002DmdevEntity,
    (tfps5002DmdevEntity) => tfps5002DmdevEntity.tfps5002Inforras,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODS5002_DMDEV', referencedColumnName: 'cods5002Dmdev' },
  ])
  cods5002Dmdev: Tfps5002DmdevEntity;
}
