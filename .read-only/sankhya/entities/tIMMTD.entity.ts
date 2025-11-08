import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TimiprEntity } from './tIMIPR.entity';

@Index('PK_TIMMTD', ['mtdcodigo'], { unique: true })
@Entity('TIMMTD', { schema: 'SANKHYA' })
export class TimmtdEntity {
  @Column('int', { primary: true, name: 'MTDCODIGO' })
  mtdcodigo: number;

  @Column('varchar', { name: 'MTDMOTIVO', nullable: true, length: 40 })
  mtdmotivo: string | null;

  @Column('varchar', {
    name: 'MTDDESISTENCIA',
    length: 1,
    default: () => "'N'",
  })
  mtddesistencia: string;

  @Column('char', { name: 'MTDLEGADO', nullable: true, length: 1 })
  mtdlegado: string | null;

  @OneToMany(() => TimiprEntity, (timiprEntity) => timiprEntity.iprmotivo)
  timiprs: TimiprEntity[];
}
