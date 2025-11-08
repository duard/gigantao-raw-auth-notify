import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps5503InfofgtsproctrabEntity } from './tFPS5503_INFOFGTSPROCTRAB.entity';
import { Tfps5503Entity } from './tFPS5503.entity';

@Index('PK_TFPS5503_INFOTRABFGTS', ['cods5503Infotrabfgts'], { unique: true })
@Entity('TFPS5503_INFOTRABFGTS', { schema: 'SANKHYA' })
export class Tfps5503InfotrabfgtsEntity {
  @Column('int', { primary: true, name: 'CODS5503_INFOTRABFGTS' })
  cods5503Infotrabfgts: number;

  @Column('varchar', { name: 'MATRICULA', nullable: true, length: 30 })
  matricula: string | null;

  @Column('smallint', { name: 'CODCATEG', nullable: true })
  codcateg: number | null;

  @Column('smallint', { name: 'CATEGORIG', nullable: true })
  categorig: number | null;

  @OneToMany(
    () => Tfps5503InfofgtsproctrabEntity,
    (tfps5503InfofgtsproctrabEntity) =>
      tfps5503InfofgtsproctrabEntity.cods5503Infotrabfgts,
  )
  tfps5503Infofgtsproctrabs: Tfps5503InfofgtsproctrabEntity[];

  @ManyToOne(
    () => Tfps5503Entity,
    (tfps5503Entity) => tfps5503Entity.tfps5503Infotrabfgts,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([{ name: 'CODS5503', referencedColumnName: 'cods5503' }])
  cods55: Tfps5503Entity;
}
