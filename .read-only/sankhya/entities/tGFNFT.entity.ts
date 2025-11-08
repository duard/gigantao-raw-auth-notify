import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfnftmestreEntity } from './tGFNFTMESTRE.entity';

@Index('PK_TGFNFT', ['codemp', 'dtref', 'finalidade'], { unique: true })
@Entity('TGFNFT', { schema: 'SANKHYA' })
export class TgfnftEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', { primary: true, name: 'FINALIDADE', length: 1 })
  finalidade: string;

  @OneToMany(
    () => TgfnftmestreEntity,
    (tgfnftmestreEntity) => tgfnftmestreEntity.tgfnft,
  )
  tgfnftmestres: TgfnftmestreEntity[];
}
