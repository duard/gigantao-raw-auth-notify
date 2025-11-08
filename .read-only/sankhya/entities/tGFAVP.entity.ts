import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgffinEntity } from './tGFFIN.entity';

@Index('PK_TGFAVP', ['nufin', 'refjuro'], { unique: true })
@Entity('TGFAVP', { schema: 'SANKHYA' })
export class TgfavpEntity {
  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('datetime', { primary: true, name: 'REFJURO' })
  refjuro: Date;

  @Column('datetime', { name: 'REFCTBZ' })
  refctbz: Date;

  @Column('smallint', { name: 'RECDESP', nullable: true })
  recdesp: number | null;

  @Column('float', { name: 'VLRJURO', precision: 53 })
  vlrjuro: number;

  @Column('smallint', { name: 'CODMOEDA', default: () => '(0)' })
  codmoeda: number;

  @Column('float', { name: 'INDICE', precision: 53 })
  indice: number;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgfavps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUFIN', referencedColumnName: 'nufin' }])
  nufin2: TgffinEntity;
}
