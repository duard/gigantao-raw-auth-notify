import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGFIDA', ['nunota', 'sequencia', 'ordem'], { unique: true })
@Entity('TGFIDA', { schema: 'SANKHYA' })
export class TgfidaEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(0)',
  })
  sequencia: number;

  @Column('smallint', { primary: true, name: 'ORDEM', default: () => '(0)' })
  ordem: number;

  @Column('money', { name: 'PERCENTUAL', nullable: true })
  percentual: number | null;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'D'" })
  tipo: string;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfidas)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;
}
