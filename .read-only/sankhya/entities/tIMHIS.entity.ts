import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TimthiEntity } from './tIMTHI.entity';

@Index('PK_TIMHIS', ['hiscodigo'], { unique: true })
@Entity('TIMHIS', { schema: 'SANKHYA' })
export class TimhisEntity {
  @Column('int', { primary: true, name: 'HISCODIGO' })
  hiscodigo: number;

  @Column('varchar', { name: 'HISDESCRICAO', length: 65 })
  hisdescricao: string;

  @Column('char', { name: 'HISLEGADO', nullable: true, length: 1 })
  hislegado: string | null;

  @OneToMany(() => TimthiEntity, (timthiEntity) => timthiEntity.thicodhistorico)
  timthis: TimthiEntity[];
}
