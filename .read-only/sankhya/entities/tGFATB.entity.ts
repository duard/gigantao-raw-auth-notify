import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfgrdEntity } from './tGFGRD.entity';
import { TgfgclEntity } from './tGFGCL.entity';

@Index('PK_TGFATB', ['idgrade', 'idatb'], { unique: true })
@Entity('TGFATB', { schema: 'SANKHYA' })
export class TgfatbEntity {
  @Column('int', { primary: true, name: 'IDATB' })
  idatb: number;

  @Column('int', { primary: true, name: 'IDGRADE' })
  idgrade: number;

  @Column('varchar', { name: 'NOMEATB', length: 50 })
  nomeatb: string;

  @Column('varchar', { name: 'ABVATB', length: 13 })
  abvatb: string;

  @Column('varchar', { name: 'TIPO', length: 1 })
  tipo: string;

  @Column('int', { name: 'ORDCAMP', nullable: true })
  ordcamp: number | null;

  @Column('bigint', { name: 'NUVERSAO', nullable: true })
  nuversao: string | null;

  @Column('char', { name: 'ATUNUVERSAO', nullable: true, length: 1 })
  atunuversao: string | null;

  @ManyToOne(() => TgfgrdEntity, (tgfgrdEntity) => tgfgrdEntity.tgfatbs)
  @JoinColumn([{ name: 'IDGRADE', referencedColumnName: 'idgrade' }])
  idgrade2: TgfgrdEntity;

  @OneToMany(() => TgfgclEntity, (tgfgclEntity) => tgfgclEntity.tgfatb)
  tgfgcls: TgfgclEntity[];
}
