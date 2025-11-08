import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgffinEntity } from './tGFFIN.entity';

@Index('PK_TGFECBTP', ['codregua', 'codevento', 'nufin'], { unique: true })
@Entity('TGFECBTP', { schema: 'SANKHYA' })
export class TgfecbtpEntity {
  @Column('int', { primary: true, name: 'CODREGUA' })
  codregua: number;

  @Column('int', { primary: true, name: 'CODEVENTO' })
  codevento: number;

  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgfecbtps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUFIN', referencedColumnName: 'nufin' }])
  nufin2: TgffinEntity;
}
