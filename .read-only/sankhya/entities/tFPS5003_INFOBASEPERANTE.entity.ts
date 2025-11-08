import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps5003BaseperanteEntity } from './tFPS5003_BASEPERANTE.entity';
import { Tfps5003InfotrabfgtsEntity } from './tFPS5003_INFOTRABFGTS.entity';

@Index('PK_TFPS5003_INFOBASEPERANTE', ['cods5003Infobaseperante'], {
  unique: true,
})
@Index(
  'TFPS5003_INFOBASEPERANTE_I01',
  ['cods5003Infotrabfgts', 'perref', 'tpacconv'],
  {},
)
@Entity('TFPS5003_INFOBASEPERANTE', { schema: 'SANKHYA' })
export class Tfps5003InfobaseperanteEntity {
  @Column('int', { primary: true, name: 'CODS5003_INFOBASEPERANTE' })
  cods5003Infobaseperante: number;

  @Column('int', { name: 'CODS5003_INFOTRABFGTS' })
  cods5003Infotrabfgts: number;

  @Column('varchar', { name: 'PERREF', nullable: true, length: 7 })
  perref: string | null;

  @Column('varchar', { name: 'TPACCONV', nullable: true, length: 1 })
  tpacconv: string | null;

  @OneToMany(
    () => Tfps5003BaseperanteEntity,
    (tfps5003BaseperanteEntity) =>
      tfps5003BaseperanteEntity.cods5003Infobaseperante2,
  )
  tfps5003Baseperantes: Tfps5003BaseperanteEntity[];

  @ManyToOne(
    () => Tfps5003InfotrabfgtsEntity,
    (tfps5003InfotrabfgtsEntity) =>
      tfps5003InfotrabfgtsEntity.tfps5003Infobaseperantes,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    {
      name: 'CODS5003_INFOTRABFGTS',
      referencedColumnName: 'cods5003Infotrabfgts',
    },
  ])
  cods5003Infotrabfgts2: Tfps5003InfotrabfgtsEntity;
}
