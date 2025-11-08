import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfpgtEntity } from './tGFPGT.entity';
import { TgftitEntity } from './tGFTIT.entity';

@Index('PK_TGFGTT', ['codgrupotiptit'], { unique: true })
@Entity('TGFGTT', { schema: 'SANKHYA' })
export class TgfgttEntity {
  @Column('smallint', { primary: true, name: 'CODGRUPOTIPTIT' })
  codgrupotiptit: number;

  @Column('varchar', { name: 'DESCRGRUPOTIPTIT', length: 30 })
  descrgrupotiptit: string;

  @Column('image', { name: 'IMAGEM', nullable: true })
  imagem: Buffer | null;

  @OneToMany(() => TgfpgtEntity, (tgfpgtEntity) => tgfpgtEntity.codgrupotiptit2)
  tgfpgts: TgfpgtEntity[];

  @OneToMany(
    () => TgfpgtEntity,
    (tgfpgtEntity) => tgfpgtEntity.codgrupotiptitper2,
  )
  tgfpgts2: TgfpgtEntity[];

  @OneToMany(() => TgftitEntity, (tgftitEntity) => tgftitEntity.codgrupotiptit2)
  tgftits: TgftitEntity[];
}
