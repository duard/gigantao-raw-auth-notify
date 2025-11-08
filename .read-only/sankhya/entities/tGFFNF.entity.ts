import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgffinEntity } from './tGFFIN.entity';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGFFNF', ['nufin', 'nunota'], { unique: true })
@Index('TGFFNF_I01', ['nunota'], {})
@Entity('TGFFNF', { schema: 'SANKHYA' })
export class TgffnfEntity {
  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('money', { name: 'VLRFRETE', nullable: true })
  vlrfrete: number | null;

  @Column('char', { name: 'TIPFRETE', nullable: true, length: 1 })
  tipfrete: string | null;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgffnfs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUFIN', referencedColumnName: 'nufin' }])
  nufin2: TgffinEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgffnfs)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;
}
