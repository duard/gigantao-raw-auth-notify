import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps5003Entity } from './tFPS5003.entity';
import { Tfps5003InfotrabfgtsEntity } from './tFPS5003_INFOTRABFGTS.entity';

@Index('PK_TFPS5003_IDEESTAB', ['cods5003Ideestab'], { unique: true })
@Index('TFPS5003_IDEESTAB_I01', ['cods5003'], {})
@Entity('TFPS5003_IDEESTAB', { schema: 'SANKHYA' })
export class Tfps5003IdeestabEntity {
  @Column('int', { primary: true, name: 'CODS5003_IDEESTAB' })
  cods5003Ideestab: number;

  @Column('int', { name: 'CODS5003' })
  cods5003: number;

  @Column('varchar', { name: 'TPINSC', nullable: true, length: 1 })
  tpinsc: string | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 14 })
  nrinsc: string | null;

  @Column('varchar', { name: 'CODLOTACAO', nullable: true, length: 30 })
  codlotacao: string | null;

  @Column('varchar', { name: 'TPLOTACAO', nullable: true, length: 2 })
  tplotacao: string | null;

  @Column('varchar', { name: 'TPINSCLOTACAO', nullable: true, length: 1 })
  tpinsclotacao: string | null;

  @Column('varchar', { name: 'NRINSCLOTACAO', nullable: true, length: 14 })
  nrinsclotacao: string | null;

  @ManyToOne(
    () => Tfps5003Entity,
    (tfps5003Entity) => tfps5003Entity.tfps5003Ideestabs,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([{ name: 'CODS5003', referencedColumnName: 'cods5003' }])
  cods50: Tfps5003Entity;

  @OneToMany(
    () => Tfps5003InfotrabfgtsEntity,
    (tfps5003InfotrabfgtsEntity) =>
      tfps5003InfotrabfgtsEntity.cods5003Ideestab2,
  )
  tfps5003Infotrabfgts: Tfps5003InfotrabfgtsEntity[];
}
