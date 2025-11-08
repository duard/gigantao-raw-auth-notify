import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgflstEntity } from './tGFLST.entity';
import { TripisetEntity } from './tRIPISET.entity';

@Index('PK_TRIPTPSV', ['nuprocesso', 'sequencia', 'codlst'], { unique: true })
@Entity('TRIPTPSV', { schema: 'SANKHYA' })
export class TriptpsvEntity {
  @Column('int', { primary: true, name: 'NUPROCESSO' })
  nuprocesso: number;

  @Column('int', { primary: true, name: 'CODLST' })
  codlst: number;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.triptpsvs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgflstEntity, (tgflstEntity) => tgflstEntity.triptpsvs)
  @JoinColumn([{ name: 'CODLST', referencedColumnName: 'codlst' }])
  codlst2: TgflstEntity;

  @ManyToOne(() => TripisetEntity, (tripisetEntity) => tripisetEntity.triptpsvs)
  @JoinColumn([
    { name: 'NUPROCESSO', referencedColumnName: 'nuprocesso' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tripiset: TripisetEntity;
}
