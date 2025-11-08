import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TimchvEntity } from './tIMCHV.entity';

@Index('PK_STATCOD', ['statcod'], { unique: true })
@Entity('TIMSTATCHV', { schema: 'SANKHYA' })
export class TimstatchvEntity {
  @Column('int', { primary: true, name: 'STATCOD' })
  statcod: number;

  @Column('varchar', { name: 'STATDESCRICAO', nullable: true, length: 200 })
  statdescricao: string | null;

  @Column('char', { name: 'STATDISP', nullable: true, length: 1 })
  statdisp: string | null;

  @OneToMany(() => TimchvEntity, (timchvEntity) => timchvEntity.statcod)
  timchvs: TimchvEntity[];
}
