import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfiteEntity } from './tGFITE.entity';
import { TgftdtEntity } from './tGFTDT.entity';

@Index('PK_TGFITP', ['nunota', 'sequencia', 'codtipdt'], { unique: true })
@Entity('TGFIDT', { schema: 'SANKHYA' })
export class TgfidtEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'CODTIPDT' })
  codtipdt: number;

  @Column('datetime', { name: 'DTINICIO' })
  dtinicio: Date;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @Column('float', { name: 'QTDMEDIDA', precision: 53, default: () => '(0)' })
  qtdmedida: number;

  @Column('text', { name: 'OBS', nullable: true })
  obs: string | null;

  @ManyToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgfidts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;

  @ManyToOne(() => TgftdtEntity, (tgftdtEntity) => tgftdtEntity.tgfidts)
  @JoinColumn([{ name: 'CODTIPDT', referencedColumnName: 'codtipdt' }])
  codtipdt2: TgftdtEntity;
}
