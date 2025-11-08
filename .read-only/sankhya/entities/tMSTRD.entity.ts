import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfveiEntity } from './tGFVEI.entity';

@Index('PK_TMSTRD', ['codtiprd'], { unique: true })
@Entity('TMSTRD', { schema: 'SANKHYA' })
export class TmstrdEntity {
  @Column('varchar', { primary: true, name: 'CODTIPRD', length: 100 })
  codtiprd: string;

  @Column('varchar', { name: 'DESCRICAO', length: 100 })
  descricao: string;

  @Column('int', { name: 'NUMEIXO', nullable: true })
  numeixo: number | null;

  @Column('varchar', { name: 'TIPRODMDFE', nullable: true, length: 10 })
  tiprodmdfe: string | null;

  @Column('varchar', { name: 'CODCATEG', nullable: true, length: 100 })
  codcateg: string | null;

  @OneToMany(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.codtiprd)
  tgfveis: TgfveiEntity[];
}
