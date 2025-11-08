import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFTAX', ['codtipvenda', 'codprod'], { unique: true })
@Entity('TGFTAX', { schema: 'SANKHYA' })
export class TgftaxEntity {
  @Column('smallint', { primary: true, name: 'CODTIPVENDA' })
  codtipvenda: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('money', { name: 'TAXAJURO', nullable: true })
  taxajuro: number | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgftaxes)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
