import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TcsconEntity } from './tCSCON.entity';

@Index('PK_TCSCSTC', ['numcstc'], { unique: true })
@Entity('TCSCSTC', { schema: 'SANKHYA' })
export class TcscstcEntity {
  @Column('int', { primary: true, name: 'NUMCSTC' })
  numcstc: number;

  @Column('varchar', { name: 'TIPSVCOM', length: 5 })
  tipsvcom: string;

  @Column('varchar', { name: 'TIPMEIO', length: 15 })
  tipmeio: string;

  @Column('varchar', { name: 'TIPTEC', length: 10 })
  tiptec: string;

  @Column('varchar', { name: 'TIPPRO', length: 15 })
  tippro: string;

  @Column('varchar', { name: 'TIPATE', length: 15 })
  tipate: string;

  @Column('int', { name: 'VELCOM' })
  velcom: number;

  @OneToMany(() => TcsconEntity, (tcsconEntity) => tcsconEntity.numcstc)
  tcscons: TcsconEntity[];
}
