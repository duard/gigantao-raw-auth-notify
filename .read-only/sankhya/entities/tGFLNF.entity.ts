import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGFLNF', ['nulote'], { unique: true })
@Entity('TGFLNF', { schema: 'SANKHYA' })
export class TgflnfEntity {
  @Column('int', { primary: true, name: 'NULOTE' })
  nulote: number;

  @Column('varchar', { name: 'NUMRECEB', nullable: true, length: 100 })
  numreceb: string | null;

  @Column('datetime', { name: 'DHRECEB', nullable: true })
  dhreceb: Date | null;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('varchar', { name: 'GUID', nullable: true, length: 50 })
  guid: string | null;

  @Column('int', { name: 'NUMLOTEPROVEDOR', nullable: true })
  numloteprovedor: number | null;

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.nulotenfe)
  tgfcabs: TgfcabEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.nulotenfse)
  tgfcabs2: TgfcabEntity[];
}
