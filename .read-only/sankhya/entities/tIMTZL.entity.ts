import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TimlteEntity } from './tIMLTE.entity';

@Index('PK_TIMTZL', ['tzlcodigo'], { unique: true })
@Entity('TIMTZL', { schema: 'SANKHYA' })
export class TimtzlEntity {
  @Column('int', { primary: true, name: 'TZLCODIGO' })
  tzlcodigo: number;

  @Column('varchar', { name: 'TZLZONADEUSO', nullable: true, length: 150 })
  tzlzonadeuso: string | null;

  @Column('varchar', { name: 'TZLABREVIACAO', nullable: true, length: 15 })
  tzlabreviacao: string | null;

  @Column('char', { name: 'TZLLEGADO', nullable: true, length: 1 })
  tzllegado: string | null;

  @OneToMany(() => TimlteEntity, (timlteEntity) => timlteEntity.ltetipozona)
  timltes: TimlteEntity[];
}
