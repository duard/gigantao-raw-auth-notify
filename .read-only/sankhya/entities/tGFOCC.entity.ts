import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfmopEntity } from './tGFMOP.entity';
import { TgfpopEntity } from './tGFPOP.entity';

@Index('PK_TGFOCC', ['codocc'], { unique: true })
@Entity('TGFOCC', { schema: 'SANKHYA' })
export class TgfoccEntity {
  @Column('int', { primary: true, name: 'CODOCC' })
  codocc: number;

  @Column('varchar', { name: 'DESCROCC', length: 60 })
  descrocc: string;

  @Column('varchar', { name: 'IDREGISTRO', nullable: true, length: 2 })
  idregistro: string | null;

  @Column('smallint', { name: 'SITPARC', nullable: true, default: () => '(0)' })
  sitparc: number | null;

  @Column('varchar', {
    name: 'BLOQPARC',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  bloqparc: string | null;

  @Column('varchar', {
    name: 'ZERARLIMITECRED',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  zerarlimitecred: string | null;

  @Column('varchar', {
    name: 'TIPOPARC',
    nullable: true,
    length: 1,
    default: () => "'C'",
  })
  tipoparc: string | null;

  @Column('varchar', { name: 'ALTERGRUAUTOR', nullable: true, length: 30 })
  altergruautor: string | null;

  @Column('varchar', { name: 'STPEXEC', nullable: true, length: 100 })
  stpexec: string | null;

  @Column('varchar', {
    name: 'PADRAO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  padrao: string | null;

  @OneToMany(() => TgfmopEntity, (tgfmopEntity) => tgfmopEntity.codocc)
  tgfmops: TgfmopEntity[];

  @OneToMany(() => TgfpopEntity, (tgfpopEntity) => tgfpopEntity.codocc2)
  tgfpops: TgfpopEntity[];
}
