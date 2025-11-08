import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps5503IdeestabEntity } from './tFPS5503_IDEESTAB.entity';
import { Tfps5503InfotrabfgtsEntity } from './tFPS5503_INFOTRABFGTS.entity';

@Index('PK_TFPS5503_INFOFGTSPROCTRAB', ['cods5503Infofgtsproctrab'], {
  unique: true,
})
@Entity('TFPS5503_INFOFGTSPROCTRAB', { schema: 'SANKHYA' })
export class Tfps5503InfofgtsproctrabEntity {
  @Column('int', { primary: true, name: 'CODS5503_INFOFGTSPROCTRAB' })
  cods5503Infofgtsproctrab: number;

  @Column('float', { name: 'TOTALFGTS', nullable: true, precision: 53 })
  totalfgts: number | null;

  @OneToMany(
    () => Tfps5503IdeestabEntity,
    (tfps5503IdeestabEntity) => tfps5503IdeestabEntity.cods5503Infofgtsproctrab,
  )
  tfps5503Ideestabs: Tfps5503IdeestabEntity[];

  @ManyToOne(
    () => Tfps5503InfotrabfgtsEntity,
    (tfps5503InfotrabfgtsEntity) =>
      tfps5503InfotrabfgtsEntity.tfps5503Infofgtsproctrabs,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    {
      name: 'CODS5503_INFOTRABFGTS',
      referencedColumnName: 'cods5503Infotrabfgts',
    },
  ])
  cods5503Infotrabfgts: Tfps5503InfotrabfgtsEntity;
}
