import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps5003BaseperapurEntity } from './tFPS5003_BASEPERAPUR.entity';
import { Tfps5003IdeprocessofgtsEntity } from './tFPS5003_IDEPROCESSOFGTS.entity';

@Index('PK_TFPS5003_DETRUBRSUSP', ['cods5003Detrubrsusp'], { unique: true })
@Index(
  'TFPS5003_DETRUBRSUSP_I01',
  ['cods5003Baseperapur', 'codrubr', 'idetabrubr'],
  {},
)
@Entity('TFPS5003_DETRUBRSUSP', { schema: 'SANKHYA' })
export class Tfps5003DetrubrsuspEntity {
  @Column('int', { primary: true, name: 'CODS5003_DETRUBRSUSP' })
  cods5003Detrubrsusp: number;

  @Column('int', { name: 'CODS5003_BASEPERAPUR' })
  cods5003Baseperapur: number;

  @Column('varchar', { name: 'CODRUBR', nullable: true, length: 30 })
  codrubr: string | null;

  @Column('varchar', { name: 'IDETABRUBR', nullable: true, length: 8 })
  idetabrubr: string | null;

  @Column('float', { name: 'VRRUBR', nullable: true, precision: 53 })
  vrrubr: number | null;

  @ManyToOne(
    () => Tfps5003BaseperapurEntity,
    (tfps5003BaseperapurEntity) =>
      tfps5003BaseperapurEntity.tfps5003Detrubrsusps,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    {
      name: 'CODS5003_BASEPERAPUR',
      referencedColumnName: 'cods5003Baseperapur',
    },
  ])
  cods5003Baseperapur2: Tfps5003BaseperapurEntity;

  @OneToMany(
    () => Tfps5003IdeprocessofgtsEntity,
    (tfps5003IdeprocessofgtsEntity) =>
      tfps5003IdeprocessofgtsEntity.cods5003Detrubrsusp2,
  )
  tfps5003Ideprocessofgts: Tfps5003IdeprocessofgtsEntity[];
}
