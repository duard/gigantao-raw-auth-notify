import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TsiethEntity } from './tSIETH.entity';

@Index('PK_TSITHD', ['id'], { unique: true })
@Entity('TSITHD', { schema: 'SANKHYA' })
export class TsithdEntity {
  @Column('varchar', { primary: true, name: 'ID', length: 255 })
  id: string;

  @Column('varchar', { name: 'NAME', length: 255 })
  name: string;

  @Column('datetime', { name: 'DHINSERT', nullable: true })
  dhinsert: Date | null;

  @Column('image', { name: 'STACKTRACE', nullable: true })
  stacktrace: Buffer | null;

  @OneToMany(() => TsiethEntity, (tsiethEntity) => tsiethEntity.idthread)
  tsieths: TsiethEntity[];
}
