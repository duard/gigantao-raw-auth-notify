import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TripisetEntity } from './tRIPISET.entity';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TRIPEMP', ['nuprocesso', 'sequencia', 'codemp'], { unique: true })
@Entity('TRIPEMP', { schema: 'SANKHYA' })
export class TripempEntity {
  @Column('int', { primary: true, name: 'NUPROCESSO' })
  nuprocesso: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tripemps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TripisetEntity, (tripisetEntity) => tripisetEntity.tripemps)
  @JoinColumn([
    { name: 'NUPROCESSO', referencedColumnName: 'nuprocesso' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tripiset: TripisetEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tripemps)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
