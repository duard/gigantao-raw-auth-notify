import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfgttEntity } from './tGFGTT.entity';

@Index('PK_TGFPGT', ['codgrupotiptit', 'codgrupotiptitper'], { unique: true })
@Entity('TGFPGT', { schema: 'SANKHYA' })
export class TgfpgtEntity {
  @Column('smallint', { primary: true, name: 'CODGRUPOTIPTIT' })
  codgrupotiptit: number;

  @Column('smallint', { primary: true, name: 'CODGRUPOTIPTITPER' })
  codgrupotiptitper: number;

  @ManyToOne(() => TgfgttEntity, (tgfgttEntity) => tgfgttEntity.tgfpgts)
  @JoinColumn([
    { name: 'CODGRUPOTIPTIT', referencedColumnName: 'codgrupotiptit' },
  ])
  codgrupotiptit2: TgfgttEntity;

  @ManyToOne(() => TgfgttEntity, (tgfgttEntity) => tgfgttEntity.tgfpgts2)
  @JoinColumn([
    { name: 'CODGRUPOTIPTITPER', referencedColumnName: 'codgrupotiptit' },
  ])
  codgrupotiptitper2: TgfgttEntity;
}
