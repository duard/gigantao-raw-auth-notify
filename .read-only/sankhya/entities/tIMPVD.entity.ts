import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TimvdoEntity } from './tIMVDO.entity';

@Index('PK_TIMPVD', ['pvdcodigo'], { unique: true })
@Entity('TIMPVD', { schema: 'SANKHYA' })
export class TimpvdEntity {
  @Column('int', { primary: true, name: 'PVDCODIGO' })
  pvdcodigo: number;

  @Column('varchar', { name: 'PVDPASTA', length: 100 })
  pvdpasta: string;

  @Column('char', { name: 'PVDPRODUTO', length: 2 })
  pvdproduto: string;

  @OneToMany(() => TimvdoEntity, (timvdoEntity) => timvdoEntity.vdopasta)
  timvdos: TimvdoEntity[];
}
