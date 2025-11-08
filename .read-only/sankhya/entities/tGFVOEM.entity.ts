import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFVOEM', ['codprod', 'codemb'], { unique: true })
@Entity('TGFVOEM', { schema: 'SANKHYA' })
export class TgfvoemEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('smallint', { primary: true, name: 'CODEMB' })
  codemb: number;

  @Column('varchar', { name: 'DESCRICAO', length: 40 })
  descricao: string;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfvoems, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
