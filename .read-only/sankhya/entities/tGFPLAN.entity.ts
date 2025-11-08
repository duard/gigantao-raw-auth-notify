import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfplacEntity } from './tGFPLAC.entity';

@Index('PK_TGFPLAN', ['nuplan'], { unique: true })
@Index('TGFPLAN_I01', ['nunotaorig'], { unique: true })
@Entity('TGFPLAN', { schema: 'SANKHYA' })
export class TgfplanEntity {
  @Column('int', { primary: true, name: 'NUPLAN' })
  nuplan: number;

  @Column('int', { name: 'NUNOTAORIG', nullable: true })
  nunotaorig: number | null;

  @Column('char', { name: 'SITUACAO', length: 1, default: () => "'D'" })
  situacao: string;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @OneToMany(() => TgfplacEntity, (tgfplacEntity) => tgfplacEntity.nuplan2)
  tgfplacs: TgfplacEntity[];
}
