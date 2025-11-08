import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgftdtEntity } from './tGFTDT.entity';

@Index('PK_TGFCAD', ['nunota', 'codtipdt'], { unique: true })
@Entity('TGFCAD', { schema: 'SANKHYA' })
export class TgfcadEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { primary: true, name: 'CODTIPDT' })
  codtipdt: number;

  @Column('datetime', { name: 'DTINICIO' })
  dtinicio: Date;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @Column('text', { name: 'OBS', nullable: true })
  obs: string | null;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfcads, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;

  @ManyToOne(() => TgftdtEntity, (tgftdtEntity) => tgftdtEntity.tgfcads)
  @JoinColumn([{ name: 'CODTIPDT', referencedColumnName: 'codtipdt' }])
  codtipdt2: TgftdtEntity;
}
