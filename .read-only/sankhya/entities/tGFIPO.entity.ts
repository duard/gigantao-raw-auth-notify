import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgmcfgEntity } from './tGMCFG.entity';
import { TgfipologEntity } from './tGFIPOLOG.entity';

@Index('PK_TGFIPO', ['nuimport'], { unique: true })
@Index('TGFIPO_I01', ['cabarq'], { unique: true })
@Entity('TGFIPO', { schema: 'SANKHYA' })
export class TgfipoEntity {
  @Column('int', { primary: true, name: 'NUIMPORT' })
  nuimport: number;

  @Column('varchar', { name: 'CABARQ', length: 255 })
  cabarq: string;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { name: 'DTPROC' })
  dtproc: Date;

  @ManyToOne(() => TgmcfgEntity, (tgmcfgEntity) => tgmcfgEntity.tgfipos, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODMETA', referencedColumnName: 'codmeta' }])
  codmeta: TgmcfgEntity;

  @OneToMany(
    () => TgfipologEntity,
    (tgfipologEntity) => tgfipologEntity.nuimport2,
  )
  tgfipologs: TgfipologEntity[];
}
