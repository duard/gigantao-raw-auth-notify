import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgffinEntity } from './tGFFIN.entity';

@Index('PK_TGFANB', ['nuantbanc'], { unique: true })
@Entity('TGFANB', { schema: 'SANKHYA' })
export class TgfanbEntity {
  @Column('int', { primary: true, name: 'NUANTBANC' })
  nuantbanc: number;

  @Column('datetime', { name: 'DTANTBANC', nullable: true })
  dtantbanc: Date | null;

  @Column('varchar', { name: 'DOCANTBANC', nullable: true, length: 100 })
  docantbanc: string | null;

  @Column('int', { name: 'NUFINDESPADIC', nullable: true })
  nufindespadic: number | null;

  @Column('varchar', { name: 'STATUSANT', nullable: true, length: 1 })
  statusant: string | null;

  @Column('int', { name: 'NUFINTITIOF', nullable: true })
  nufintitiof: number | null;

  @Column('int', { name: 'NUFINDESPOP', nullable: true })
  nufindespop: number | null;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgfanbs)
  @JoinColumn([{ name: 'NUFINTITORI', referencedColumnName: 'nufin' }])
  nufintitori: TgffinEntity;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgfanbs2)
  @JoinColumn([{ name: 'NUFINTITBAN', referencedColumnName: 'nufin' }])
  nufintitban: TgffinEntity;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgfanbs3)
  @JoinColumn([{ name: 'NUFINTITJUR', referencedColumnName: 'nufin' }])
  nufintitjur: TgffinEntity;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgfanbs4)
  @JoinColumn([{ name: 'NUFINTITOBR', referencedColumnName: 'nufin' }])
  nufintitobr: TgffinEntity;
}
