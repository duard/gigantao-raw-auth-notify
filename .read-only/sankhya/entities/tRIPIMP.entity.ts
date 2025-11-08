import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TripisetEntity } from './tRIPISET.entity';

@Index('PK_TRIPIMP', ['nuprocesso', 'sequencia', 'tipoimposto'], {
  unique: true,
})
@Entity('TRIPIMP', { schema: 'SANKHYA' })
export class TripimpEntity {
  @Column('int', { primary: true, name: 'NUPROCESSO' })
  nuprocesso: number;

  @Column('smallint', { primary: true, name: 'TIPOIMPOSTO' })
  tipoimposto: number;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { name: 'GRUCAMFORMULA', nullable: true, length: 1 })
  grucamformula: string | null;

  @Column('text', { name: 'FORMULACST', nullable: true })
  formulacst: string | null;

  @Column('text', { name: 'FORMULABASE', nullable: true })
  formulabase: string | null;

  @Column('text', { name: 'FORMULAALIQUOTA', nullable: true })
  formulaaliquota: string | null;

  @Column('text', { name: 'FORMULAVALOR', nullable: true })
  formulavalor: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tripimps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TripisetEntity, (tripisetEntity) => tripisetEntity.tripimps)
  @JoinColumn([
    { name: 'NUPROCESSO', referencedColumnName: 'nuprocesso' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tripiset: TripisetEntity;
}
