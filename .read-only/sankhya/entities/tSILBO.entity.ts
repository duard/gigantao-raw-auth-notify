import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsilibEntity } from './tSILIB.entity';

@Index('PK_TSILBO', ['nulbo'], { unique: true })
@Index('TSILBO_I01', ['codusu', 'evento', 'dtinicial', 'dtfinal'], {
  unique: true,
})
@Entity('TSILBO', { schema: 'SANKHYA' })
export class TsilboEntity {
  @Column('int', { primary: true, name: 'NULBO' })
  nulbo: number;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('smallint', { name: 'EVENTO' })
  evento: number;

  @Column('datetime', { name: 'DTINICIAL', nullable: true })
  dtinicial: Date | null;

  @Column('datetime', { name: 'DTFINAL', nullable: true })
  dtfinal: Date | null;

  @Column('money', { name: 'VLRLIMITE', nullable: true })
  vlrlimite: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsilbos)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;

  @OneToMany(() => TsilibEntity, (tsilibEntity) => tsilibEntity.nulbo)
  tsilibs: TsilibEntity[];
}
