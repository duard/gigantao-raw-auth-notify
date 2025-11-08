import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps5003InfotrabfgtsEntity } from './tFPS5003_INFOTRABFGTS.entity';
import { Tfps5003DetrubrsuspEntity } from './tFPS5003_DETRUBRSUSP.entity';

@Index('PK_TFPS5003_BASEPERAPUR', ['cods5003Baseperapur'], { unique: true })
@Index(
  'TFPS5003_BASEPERAPUR_I01',
  ['cods5003Infotrabfgts', 'tpvalor', 'indincid'],
  {},
)
@Entity('TFPS5003_BASEPERAPUR', { schema: 'SANKHYA' })
export class Tfps5003BaseperapurEntity {
  @Column('int', { primary: true, name: 'CODS5003_BASEPERAPUR' })
  cods5003Baseperapur: number;

  @Column('int', { name: 'CODS5003_INFOTRABFGTS' })
  cods5003Infotrabfgts: number;

  @Column('varchar', { name: 'TPVALOR', nullable: true, length: 2 })
  tpvalor: string | null;

  @Column('varchar', { name: 'INDINCID', nullable: true, length: 1 })
  indincid: string | null;

  @Column('float', { name: 'REMFGTS', nullable: true, precision: 53 })
  remfgts: number | null;

  @Column('float', { name: 'DPSFGTS', nullable: true, precision: 53 })
  dpsfgts: number | null;

  @ManyToOne(
    () => Tfps5003InfotrabfgtsEntity,
    (tfps5003InfotrabfgtsEntity) =>
      tfps5003InfotrabfgtsEntity.tfps5003Baseperapurs,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    {
      name: 'CODS5003_INFOTRABFGTS',
      referencedColumnName: 'cods5003Infotrabfgts',
    },
  ])
  cods5003Infotrabfgts2: Tfps5003InfotrabfgtsEntity;

  @OneToMany(
    () => Tfps5003DetrubrsuspEntity,
    (tfps5003DetrubrsuspEntity) =>
      tfps5003DetrubrsuspEntity.cods5003Baseperapur2,
  )
  tfps5003Detrubrsusps: Tfps5003DetrubrsuspEntity[];
}
