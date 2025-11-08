import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TcsafoEntity } from './tCSAFO.entity';

@Index('PK_TCSMTE', ['numotivo'], { unique: true })
@Entity('TCSMTE', { schema: 'SANKHYA' })
export class TcsmteEntity {
  @Column('int', { primary: true, name: 'NUMOTIVO' })
  numotivo: number;

  @Column('varchar', { name: 'DESCRMOTIVO', length: 255 })
  descrmotivo: string;

  @Column('char', { name: 'TIPOMOTIVO', length: 1 })
  tipomotivo: string;

  @OneToMany(() => TcsafoEntity, (tcsafoEntity) => tcsafoEntity.numotivo)
  tcsafos: TcsafoEntity[];
}
