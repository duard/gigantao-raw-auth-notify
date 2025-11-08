import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps5503BaseperrefEntity } from './tFPS5503_BASEPERREF.entity';
import { Tfps5503InfofgtsproctrabEntity } from './tFPS5503_INFOFGTSPROCTRAB.entity';

@Index('PK_TFPS5503_IDEESTAB', ['cods5503Ideestab'], { unique: true })
@Entity('TFPS5503_IDEESTAB', { schema: 'SANKHYA' })
export class Tfps5503IdeestabEntity {
  @Column('int', { primary: true, name: 'CODS5503_IDEESTAB' })
  cods5503Ideestab: number;

  @Column('varchar', { name: 'TPINSC', nullable: true, length: 1 })
  tpinsc: string | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 14 })
  nrinsc: string | null;

  @OneToMany(
    () => Tfps5503BaseperrefEntity,
    (tfps5503BaseperrefEntity) => tfps5503BaseperrefEntity.cods5503Ideestab,
  )
  tfps5503Baseperrefs: Tfps5503BaseperrefEntity[];

  @ManyToOne(
    () => Tfps5503InfofgtsproctrabEntity,
    (tfps5503InfofgtsproctrabEntity) =>
      tfps5503InfofgtsproctrabEntity.tfps5503Ideestabs,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    {
      name: 'CODS5503_INFOFGTSPROCTRAB',
      referencedColumnName: 'cods5503Infofgtsproctrab',
    },
  ])
  cods5503Infofgtsproctrab: Tfps5503InfofgtsproctrabEntity;
}
