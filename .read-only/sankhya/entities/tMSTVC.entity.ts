import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfnatEntity } from './tGFNAT.entity';
import { TmstvcmediarefEntity } from './tMSTVCMEDIAREF.entity';

@Index('PK_TMSTVC', ['codtip'], { unique: true })
@Entity('TMSTVC', { schema: 'SANKHYA' })
export class TmstvcEntity {
  @Column('int', { primary: true, name: 'CODTIP' })
  codtip: number;

  @Column('varchar', { name: 'DESCRICAO', length: 100 })
  descricao: string;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tmstvcs)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat: TgfnatEntity;

  @OneToMany(
    () => TmstvcmediarefEntity,
    (tmstvcmediarefEntity) => tmstvcmediarefEntity.codtip2,
  )
  tmstvcmediarefs: TmstvcmediarefEntity[];
}
