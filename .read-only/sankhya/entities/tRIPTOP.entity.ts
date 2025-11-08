import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TripisetEntity } from './tRIPISET.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TRIPTOP', ['nuprocesso', 'sequencia', 'codtipoper'], {
  unique: true,
})
@Entity('TRIPTOP', { schema: 'SANKHYA' })
export class TriptopEntity {
  @Column('int', { primary: true, name: 'NUPROCESSO' })
  nuprocesso: number;

  @Column('smallint', { primary: true, name: 'CODTIPOPER' })
  codtipoper: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @ManyToOne(() => TripisetEntity, (tripisetEntity) => tripisetEntity.triptops)
  @JoinColumn([
    { name: 'NUPROCESSO', referencedColumnName: 'nuprocesso' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tripiset: TripisetEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.triptops)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
