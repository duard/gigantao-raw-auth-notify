import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Tfps5501ItcrEntity } from './tFPS5501_ITCR.entity';

@Index('PK_TFPS5501', ['cods5501'], { unique: true })
@Entity('TFPS5501', { schema: 'SANKHYA' })
export class Tfps5501Entity {
  @Column('int', { primary: true, name: 'CODS5501' })
  cods5501: number;

  @Column('int', { name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { name: 'DTREF' })
  dtref: Date;

  @Column('varchar', { name: 'ID', length: 36 })
  id: string;

  @Column('varchar', { name: 'NRPROCTRAB', length: 30 })
  nrproctrab: string;

  @Column('varchar', { name: 'PERAPUR', length: 10 })
  perapur: string;

  @Column('varchar', { name: 'TPINSC', nullable: true, length: 1 })
  tpinsc: string | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 14 })
  nrinsc: string | null;

  @Column('varchar', { name: 'NRRECARQBASE', nullable: true, length: 23 })
  nrrecarqbase: string | null;

  @OneToMany(
    () => Tfps5501ItcrEntity,
    (tfps5501ItcrEntity) => tfps5501ItcrEntity.cods55,
  )
  tfps5501Itcrs: Tfps5501ItcrEntity[];
}
