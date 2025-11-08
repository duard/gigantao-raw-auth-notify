import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TcsconEntity } from './tCSCON.entity';
import { TgardcEntity } from './tGARDC.entity';

@Index('PK_TGATDC', ['codtdc'], { unique: true })
@Entity('TGATDC', { schema: 'SANKHYA' })
export class TgatdcEntity {
  @Column('smallint', { primary: true, name: 'CODTDC' })
  codtdc: number;

  @Column('char', { name: 'NOMETDC', length: 50 })
  nometdc: string;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @Column('int', { name: 'CODCLC', nullable: true })
  codclc: number | null;

  @OneToMany(() => TcsconEntity, (tcsconEntity) => tcsconEntity.codtdc)
  tcscons: TcsconEntity[];

  @OneToMany(() => TgardcEntity, (tgardcEntity) => tgardcEntity.codtdc2)
  tgardcs: TgardcEntity[];
}
