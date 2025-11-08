import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfespEntity } from './tGFESP.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGAGRU', ['codgprod'], { unique: true })
@Entity('TGAGRU', { schema: 'SANKHYA' })
export class TgagruEntity {
  @Column('int', { primary: true, name: 'CODGPROD' })
  codgprod: number;

  @Column('varchar', { name: 'DESCRGPROD', length: 30 })
  descrgprod: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('char', { name: 'ANALITICO', length: 1, default: () => "'S'" })
  analitico: string;

  @Column('int', { name: 'CODGPRODPAI' })
  codgprodpai: number;

  @Column('int', { name: 'GRAU' })
  grau: number;

  @ManyToOne(() => TgfespEntity, (tgfespEntity) => tgfespEntity.tgagrus)
  @JoinColumn([{ name: 'CODEST', referencedColumnName: 'codest' }])
  codest: TgfespEntity;

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.codgprod)
  tgfpros: TgfproEntity[];
}
