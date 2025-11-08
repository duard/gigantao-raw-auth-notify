import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfatbEntity } from './tGFATB.entity';

@Index('PK_TGFGCL', ['idgrade', 'idatb', 'idvcl'], { unique: true })
@Entity('TGFGCL', { schema: 'SANKHYA' })
export class TgfgclEntity {
  @Column('int', { primary: true, name: 'IDVCL' })
  idvcl: number;

  @Column('int', { primary: true, name: 'IDATB' })
  idatb: number;

  @Column('int', { primary: true, name: 'IDGRADE' })
  idgrade: number;

  @Column('varchar', { name: 'NOMVAR', length: 50 })
  nomvar: string;

  @Column('varchar', { name: 'ABVVAR', length: 13 })
  abvvar: string;

  @Column('char', { name: 'PRMCPR', nullable: true, length: 1 })
  prmcpr: string | null;

  @Column('char', { name: 'PRMVND', nullable: true, length: 1 })
  prmvnd: string | null;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('int', { name: 'ORDCAMP', nullable: true })
  ordcamp: number | null;

  @Column('bigint', { name: 'NUVERSAO', nullable: true })
  nuversao: string | null;

  @Column('char', { name: 'ATUNUVERSAO', nullable: true, length: 1 })
  atunuversao: string | null;

  @ManyToOne(() => TgfatbEntity, (tgfatbEntity) => tgfatbEntity.tgfgcls)
  @JoinColumn([
    { name: 'IDGRADE', referencedColumnName: 'idgrade' },
    { name: 'IDATB', referencedColumnName: 'idatb' },
  ])
  tgfatb: TgfatbEntity;
}
