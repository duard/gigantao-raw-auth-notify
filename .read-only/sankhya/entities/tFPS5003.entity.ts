import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Tfps5003IdeestabEntity } from './tFPS5003_IDEESTAB.entity';

@Index('PK_TFPS5003', ['cods5003'], { unique: true })
@Index('TFPS5003_I01', ['codemp', 'dtref'], {})
@Index('TFPS5003_I02', ['cpftrab'], {})
@Entity('TFPS5003', { schema: 'SANKHYA' })
export class Tfps5003Entity {
  @Column('int', { primary: true, name: 'CODS5003' })
  cods5003: number;

  @Column('int', { name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { name: 'DTREF' })
  dtref: Date;

  @Column('varchar', { name: 'NRRECARQBASE', nullable: true, length: 23 })
  nrrecarqbase: string | null;

  @Column('varchar', { name: 'INDAPURACAO', nullable: true, length: 1 })
  indapuracao: string | null;

  @Column('varchar', { name: 'PERAPUR', length: 10 })
  perapur: string;

  @Column('varchar', { name: 'TPINSC', nullable: true, length: 1 })
  tpinsc: string | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 14 })
  nrinsc: string | null;

  @Column('varchar', { name: 'CPFTRAB', length: 11 })
  cpftrab: string;

  @Column('datetime', { name: 'DTVENC', nullable: true })
  dtvenc: Date | null;

  @Column('varchar', { name: 'CLASSTRIB', nullable: true, length: 2 })
  classtrib: string | null;

  @OneToMany(
    () => Tfps5003IdeestabEntity,
    (tfps5003IdeestabEntity) => tfps5003IdeestabEntity.cods50,
  )
  tfps5003Ideestabs: Tfps5003IdeestabEntity[];
}
