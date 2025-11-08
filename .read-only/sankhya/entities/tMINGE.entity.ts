import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TmiungEntity } from './tMIUNG.entity';

@Index('PK_TMINGE', ['codnge'], { unique: true })
@Entity('TMINGE', { schema: 'SANKHYA' })
export class TmingeEntity {
  @Column('int', { primary: true, name: 'CODNGE' })
  codnge: number;

  @Column('varchar', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('smallint', { name: 'NIVEL' })
  nivel: number;

  @OneToMany(() => TmiungEntity, (tmiungEntity) => tmiungEntity.codnge)
  tmiungs: TmiungEntity[];
}
