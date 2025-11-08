import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TsitokEntity } from './tSITOK.entity';

@Index('PK_TSITOKP', ['codprod', 'codtok'], { unique: true })
@Entity('TSITOKP', { schema: 'SANKHYA' })
export class TsitokpEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('decimal', { primary: true, name: 'CODTOK', precision: 10, scale: 0 })
  codtok: number;

  @Column('int', { name: 'RELEVANCIA', nullable: true })
  relevancia: number | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tsitokps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TsitokEntity, (tsitokEntity) => tsitokEntity.tsitokps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODTOK', referencedColumnName: 'codtok' }])
  codtok2: TsitokEntity;
}
