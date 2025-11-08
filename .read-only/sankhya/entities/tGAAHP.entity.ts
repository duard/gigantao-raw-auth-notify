import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgamtpEntity } from './tGAMTP.entity';
import { TgaahiEntity } from './tGAAHI.entity';

@Index('PK_TGAAHP', ['nuapont', 'sequencia', 'inicio'], { unique: true })
@Entity('TGAAHP', { schema: 'SANKHYA' })
export class TgaahpEntity {
  @Column('int', { primary: true, name: 'NUAPONT' })
  nuapont: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'INICIO' })
  inicio: number;

  @Column('int', { name: 'FIM', nullable: true })
  fim: number | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 255 })
  observacao: string | null;

  @ManyToOne(() => TgamtpEntity, (tgamtpEntity) => tgamtpEntity.tgaahps)
  @JoinColumn([{ name: 'CODMOT', referencedColumnName: 'codmot' }])
  codmot: TgamtpEntity;

  @ManyToOne(() => TgaahiEntity, (tgaahiEntity) => tgaahiEntity.tgaahps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUAPONT', referencedColumnName: 'nuapont' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgaahi: TgaahiEntity;
}
