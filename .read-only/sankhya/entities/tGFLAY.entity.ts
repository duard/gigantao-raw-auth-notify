import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgftopEntity } from './tGFTOP.entity';

@Index('PK_TGFLAY', ['nulayout'], { unique: true })
@Entity('TGFLAY', { schema: 'SANKHYA' })
export class TgflayEntity {
  @Column('smallint', { primary: true, name: 'NULAYOUT' })
  nulayout: number;

  @Column('char', { name: 'DESCRICAO', nullable: true, length: 50 })
  descricao: string | null;

  @Column('char', { name: 'TIPMOV', nullable: true, length: 1 })
  tipmov: string | null;

  @Column('char', {
    name: 'PADRAO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  padrao: string | null;

  @Column('text', { name: 'LAYOUT', nullable: true })
  layout: string | null;

  @Column('smallint', { name: 'MODULO', default: () => '(0)' })
  modulo: number;

  @Column('varchar', { name: 'USARCHECKOUTPROD', nullable: true, length: 1 })
  usarcheckoutprod: string | null;

  @Column('varchar', { name: 'TIPREC', nullable: true, length: 1 })
  tiprec: string | null;

  @OneToMany(() => TgftopEntity, (tgftopEntity) => tgftopEntity.nulayout)
  tgftops: TgftopEntity[];
}
