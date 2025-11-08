import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfgvaEntity } from './tGFGVA.entity';
import { TgfgvpEntity } from './tGFGVP.entity';
import { TgfgveEntity } from './tGFGVE.entity';
import { TgfgvfEntity } from './tGFGVF.entity';
import { TgfgvrEntity } from './tGFGVR.entity';

@Index('PK_TGFGVC_NUCRITERIO', ['nucriterio'], { unique: true })
@Entity('TGFGVC', { schema: 'SANKHYA' })
export class TgfgvcEntity {
  @Column('int', { primary: true, name: 'NUCRITERIO' })
  nucriterio: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 40 })
  descricao: string | null;

  @Column('varchar', { name: 'TIPOCRITERIO', nullable: true, length: 1 })
  tipocriterio: string | null;

  @Column('varchar', { name: 'TIPOMETA', nullable: true, length: 1 })
  tipometa: string | null;

  @OneToMany(() => TgfgvaEntity, (tgfgvaEntity) => tgfgvaEntity.nucriterio)
  tgfgvas: TgfgvaEntity[];

  @ManyToOne(() => TgfgvpEntity, (tgfgvpEntity) => tgfgvpEntity.tgfgvcs)
  @JoinColumn([{ name: 'NUPREACORDO', referencedColumnName: 'nupreacordo' }])
  nupreacordo: TgfgvpEntity;

  @OneToMany(() => TgfgveEntity, (tgfgveEntity) => tgfgveEntity.nucriterio)
  tgfgves: TgfgveEntity[];

  @OneToMany(() => TgfgvfEntity, (tgfgvfEntity) => tgfgvfEntity.nucriterio)
  tgfgvfs: TgfgvfEntity[];

  @OneToMany(() => TgfgvrEntity, (tgfgvrEntity) => tgfgvrEntity.nucriterio)
  tgfgvrs: TgfgvrEntity[];
}
