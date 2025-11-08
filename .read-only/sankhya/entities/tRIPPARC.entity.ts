import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TripisetEntity } from './tRIPISET.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TRIPPARC', ['nuprocesso', 'sequencia', 'codparc'], { unique: true })
@Entity('TRIPPARC', { schema: 'SANKHYA' })
export class TripparcEntity {
  @Column('int', { primary: true, name: 'NUPROCESSO' })
  nuprocesso: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tripparcs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TripisetEntity, (tripisetEntity) => tripisetEntity.tripparcs)
  @JoinColumn([
    { name: 'NUPROCESSO', referencedColumnName: 'nuprocesso' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tripiset: TripisetEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tripparcs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}
