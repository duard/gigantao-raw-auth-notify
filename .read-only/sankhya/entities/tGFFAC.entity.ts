import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfddcEntity } from './tGFDDC.entity';

@Index('PK_TGFFAC', ['nunota', 'sequencia', 'codface'], { unique: true })
@Entity('TGFFAC', { schema: 'SANKHYA' })
export class TgffacEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { primary: true, name: 'CODFACE' })
  codface: number;

  @Column('float', { name: 'LARGURA', nullable: true, precision: 53 })
  largura: number | null;

  @Column('float', { name: 'ANGULO', nullable: true, precision: 53 })
  angulo: number | null;

  @ManyToOne(() => TgfddcEntity, (tgfddcEntity) => tgfddcEntity.tgffacs)
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfddc: TgfddcEntity;
}
