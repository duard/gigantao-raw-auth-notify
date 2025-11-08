import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Tfps5503InfotrabfgtsEntity } from './tFPS5503_INFOTRABFGTS.entity';

@Index('PK_TFPS5503', ['cods5503'], { unique: true })
@Entity('TFPS5503', { schema: 'SANKHYA' })
export class Tfps5503Entity {
  @Column('int', { primary: true, name: 'CODS5503' })
  cods5503: number;

  @Column('int', { name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { name: 'DTREF' })
  dtref: Date;

  @Column('varchar', { name: 'NRRECARQBASE', nullable: true, length: 23 })
  nrrecarqbase: string | null;

  @Column('varchar', { name: 'PERAPUR', nullable: true, length: 7 })
  perapur: string | null;

  @Column('varchar', { name: 'TPINSC', nullable: true, length: 1 })
  tpinsc: string | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 14 })
  nrinsc: string | null;

  @Column('varchar', { name: 'ORIGEM', nullable: true, length: 1 })
  origem: string | null;

  @Column('varchar', { name: 'NRPROCTRAB', nullable: true, length: 20 })
  nrproctrab: string | null;

  @Column('varchar', { name: 'CPFTRAB', nullable: true, length: 11 })
  cpftrab: string | null;

  @OneToMany(
    () => Tfps5503InfotrabfgtsEntity,
    (tfps5503InfotrabfgtsEntity) => tfps5503InfotrabfgtsEntity.cods55,
  )
  tfps5503Infotrabfgts: Tfps5503InfotrabfgtsEntity[];
}
