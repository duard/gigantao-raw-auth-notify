import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFFVC', ['nunota', 'volume', 'codprod'], { unique: true })
@Entity('TGFFVC', { schema: 'SANKHYA' })
export class TgffvcEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { primary: true, name: 'VOLUME' })
  volume: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('float', { name: 'QTD', nullable: true, precision: 53 })
  qtd: number | null;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgffvcs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgffvcs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
