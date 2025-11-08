import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimsacEntity } from './tIMSAC.entity';
import { TimhisEntity } from './tIMHIS.entity';

@Index('PK_TIMTHI', ['thiorigem', 'thicodigo'], { unique: true })
@Entity('TIMTHI', { schema: 'SANKHYA' })
export class TimthiEntity {
  @Column('int', { primary: true, name: 'THICODIGO' })
  thicodigo: number;

  @Column('varchar', { primary: true, name: 'THIORIGEM', length: 2 })
  thiorigem: string;

  @Column('char', { name: 'THILEGADO', nullable: true, length: 1 })
  thilegado: string | null;

  @OneToMany(() => TimsacEntity, (timsacEntity) => timsacEntity.timthi)
  timsacs: TimsacEntity[];

  @ManyToOne(() => TimhisEntity, (timhisEntity) => timhisEntity.timthis)
  @JoinColumn([{ name: 'THICODHISTORICO', referencedColumnName: 'hiscodigo' }])
  thicodhistorico: TimhisEntity;
}
