import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TmdperEntity } from './tMDPER.entity';
import { TmdpreEntity } from './tMDPRE.entity';

@Index('PK_TMDGRF', ['codgraf', 'codper'], { unique: true })
@Entity('TMDGRF', { schema: 'SANKHYA' })
export class TmdgrfEntity {
  @Column('int', { primary: true, name: 'CODGRAF' })
  codgraf: number;

  @Column('int', { primary: true, name: 'CODPER' })
  codper: number;

  @Column('char', { name: 'NOMEGRAF', nullable: true, length: 40 })
  nomegraf: string | null;

  @Column('char', { name: 'METODO', nullable: true, length: 80 })
  metodo: string | null;

  @ManyToOne(() => TmdperEntity, (tmdperEntity) => tmdperEntity.tmdgrfs)
  @JoinColumn([{ name: 'CODPER', referencedColumnName: 'codper' }])
  codper2: TmdperEntity;

  @OneToMany(() => TmdpreEntity, (tmdpreEntity) => tmdpreEntity.tmdgrf)
  tmdpres: TmdpreEntity[];
}
