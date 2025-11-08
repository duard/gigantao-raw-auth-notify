import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfiteEntity } from './tGFITE.entity';

@Index('PK_TGFMCSI', ['nunota', 'sequencia', 'codcomp'], { unique: true })
@Entity('TGFMCSI', { schema: 'SANKHYA' })
export class TgfmcsiEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'CODCOMP' })
  codcomp: number;

  @Column('varchar', { name: 'DESCRCOMP', length: 255 })
  descrcomp: string;

  @Column('smallint', { name: 'TIPCOMP' })
  tipcomp: number;

  @Column('float', { name: 'VLRCOMP', nullable: true, precision: 53 })
  vlrcomp: number | null;

  @ManyToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgfmcsis, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;
}
