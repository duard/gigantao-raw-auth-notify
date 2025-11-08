import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwivtEntity } from './tGWIVT.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGWAJE', ['nuajuste'], { unique: true })
@Entity('TGWAJE', { schema: 'SANKHYA' })
export class TgwajeEntity {
  @Column('int', { primary: true, name: 'NUAJUSTE' })
  nuajuste: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 200 })
  observacao: string | null;

  @ManyToOne(() => TgwivtEntity, (tgwivtEntity) => tgwivtEntity.tgwajes)
  @JoinColumn([{ name: 'NUIVT', referencedColumnName: 'nuivt' }])
  nuivt: TgwivtEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgwajes)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
