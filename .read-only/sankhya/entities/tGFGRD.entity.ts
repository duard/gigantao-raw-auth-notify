import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfatbEntity } from './tGFATB.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFGRD', ['idgrade'], { unique: true })
@Entity('TGFGRD', { schema: 'SANKHYA' })
export class TgfgrdEntity {
  @Column('int', { primary: true, name: 'IDGRADE' })
  idgrade: number;

  @Column('varchar', { name: 'NOMGRD', length: 50 })
  nomgrd: string;

  @Column('datetime', { name: 'DHCAD', nullable: true })
  dhcad: Date | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('bigint', { name: 'NUVERSAO', nullable: true })
  nuversao: string | null;

  @Column('char', { name: 'ATUNUVERSAO', nullable: true, length: 1 })
  atunuversao: string | null;

  @Column('char', { name: 'USAMASCARA', length: 1, default: () => "'N'" })
  usamascara: string;

  @OneToMany(() => TgfatbEntity, (tgfatbEntity) => tgfatbEntity.idgrade2)
  tgfatbs: TgfatbEntity[];

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.idgrade)
  tgfpros: TgfproEntity[];
}
