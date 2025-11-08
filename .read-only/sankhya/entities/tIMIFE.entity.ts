import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TimieoEntity } from './tIMIEO.entity';

@Index('PK_TIMIFE', ['ifecodigo'], { unique: true })
@Entity('TIMIFE', { schema: 'SANKHYA' })
export class TimifeEntity {
  @Column('int', { primary: true, name: 'IFECODIGO' })
  ifecodigo: number;

  @Column('varchar', { name: 'IFEINFRAESTRUTURA', length: 30 })
  ifeinfraestrutura: string;

  @Column('varchar', { name: 'IFECARACTERISTICA', nullable: true, length: 50 })
  ifecaracteristica: string | null;

  @Column('char', { name: 'IFELEGADO', nullable: true, length: 1 })
  ifelegado: string | null;

  @OneToMany(
    () => TimieoEntity,
    (timieoEntity) => timieoEntity.ieoinfraestrutura2,
  )
  timieos: TimieoEntity[];
}
