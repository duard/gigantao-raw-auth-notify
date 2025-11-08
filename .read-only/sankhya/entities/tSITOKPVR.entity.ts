import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TsitokvrEntity } from './tSITOKVR.entity';

@Index('PK_TSITOKPVR', ['codprod', 'codtok'], { unique: true })
@Entity('TSITOKPVR', { schema: 'SANKHYA' })
export class TsitokpvrEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('decimal', { primary: true, name: 'CODTOK', precision: 10, scale: 0 })
  codtok: number;

  @Column('int', { name: 'RELEVANCIA', nullable: true })
  relevancia: number | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tsitokpvrs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(
    () => TsitokvrEntity,
    (tsitokvrEntity) => tsitokvrEntity.tsitokpvrs,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([{ name: 'CODTOK', referencedColumnName: 'codtok' }])
  codtok2: TsitokvrEntity;
}
