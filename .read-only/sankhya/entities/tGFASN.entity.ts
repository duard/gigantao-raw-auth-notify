import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgffsnEntity } from './tGFFSN.entity';

@Index('PK_TGFASN', ['nuanexo'], { unique: true })
@Entity('TGFASN', { schema: 'SANKHYA' })
export class TgfasnEntity {
  @Column('int', { primary: true, name: 'NUANEXO' })
  nuanexo: number;

  @Column('datetime', { name: 'DTINICIO' })
  dtinicio: Date;

  @Column('varchar', { name: 'DESCR', length: 100 })
  descr: string;

  @Column('smallint', { name: 'TIPOANEXO' })
  tipoanexo: number;

  @OneToMany(() => TgffsnEntity, (tgffsnEntity) => tgffsnEntity.nuanexo2)
  tgffsns: TgffsnEntity[];
}
