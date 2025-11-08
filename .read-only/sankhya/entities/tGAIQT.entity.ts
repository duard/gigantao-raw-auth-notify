import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgamnqEntity } from './tGAMNQ.entity';

@Index('PK_TGAIQT', ['nuiqt'], { unique: true })
@Entity('TGAIQT', { schema: 'SANKHYA' })
export class TgaiqtEntity {
  @Column('smallint', { primary: true, name: 'NUIQT' })
  nuiqt: number;

  @Column('datetime', { name: 'DTAPUR', nullable: true })
  dtapur: Date | null;

  @Column('float', { name: 'QUEBRAPUR', nullable: true, precision: 53 })
  quebrapur: number | null;

  @Column('float', { name: 'QTDISENTAR', nullable: true, precision: 53 })
  qtdisentar: number | null;

  @Column('varchar', { name: 'OBS', nullable: true, length: 3103 })
  obs: string | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DTNEG', nullable: true })
  dtneg: Date | null;

  @Column('smallint', { name: 'NUMCONTRATO' })
  numcontrato: number;

  @ManyToOne(() => TgamnqEntity, (tgamnqEntity) => tgamnqEntity.tgaiqts)
  @JoinColumn([{ name: 'CODIGO', referencedColumnName: 'codigo' }])
  codigo: TgamnqEntity;
}
