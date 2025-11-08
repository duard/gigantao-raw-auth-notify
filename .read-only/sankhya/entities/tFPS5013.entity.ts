import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Tfps5013IdeestabEntity } from './tFPS5013_IDEESTAB.entity';

@Index('PK_TFPS5013', ['cods5013'], { unique: true })
@Index('TFPS5013_I01', ['codemp', 'dtref'], {})
@Entity('TFPS5013', { schema: 'SANKHYA' })
export class Tfps5013Entity {
  @Column('int', { primary: true, name: 'CODS5013' })
  cods5013: number;

  @Column('int', { name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { name: 'DTREF' })
  dtref: Date;

  @Column('varchar', { name: 'ID', length: 36 })
  id: string;

  @Column('varchar', { name: 'INDAPURACAO', length: 1 })
  indapuracao: string;

  @Column('varchar', { name: 'PERAPUR', length: 10 })
  perapur: string;

  @Column('varchar', { name: 'TPINSC', nullable: true, length: 1 })
  tpinsc: string | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 14 })
  nrinsc: string | null;

  @Column('varchar', { name: 'NRRECARQBASE', nullable: true, length: 23 })
  nrrecarqbase: string | null;

  @Column('varchar', { name: 'INDEXISTINFO', nullable: true, length: 1 })
  indexistinfo: string | null;

  @OneToMany(
    () => Tfps5013IdeestabEntity,
    (tfps5013IdeestabEntity) => tfps5013IdeestabEntity.cods50,
  )
  tfps5013Ideestabs: Tfps5013IdeestabEntity[];
}
