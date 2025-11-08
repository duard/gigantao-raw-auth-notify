import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Tfps5002ConsolidapurmenEntity } from './tFPS5002_CONSOLIDAPURMEN.entity';
import { Tfps5002DmdevEntity } from './tFPS5002_DMDEV.entity';
import { Tfps5002InfoircomplemEntity } from './tFPS5002_INFOIRCOMPLEM.entity';
import { Tfps5002InfoirrfEntity } from './tFPS5002_INFOIRRF.entity';

@Index('PK_TFPS5002', ['dtref', 'codempmatriz', 'cpf'], { unique: true })
@Entity('TFPS5002', { schema: 'SANKHYA' })
export class Tfps5002Entity {
  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'CODEMPMATRIZ' })
  codempmatriz: number;

  @Column('varchar', { primary: true, name: 'CPF', length: 11 })
  cpf: string;

  @Column('float', { name: 'VRDEDDEP', nullable: true, precision: 53 })
  vrdeddep: number | null;

  @Column('varchar', { name: 'TPINSC', nullable: true, length: 4 })
  tpinsc: string | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 14 })
  nrinsc: string | null;

  @Column('varchar', { name: 'NRRECARQBASE', nullable: true, length: 30 })
  nrrecarqbase: string | null;

  @Column('varchar', { name: 'PERAPUR', nullable: true, length: 7 })
  perapur: string | null;

  @OneToMany(
    () => Tfps5002ConsolidapurmenEntity,
    (tfps5002ConsolidapurmenEntity) => tfps5002ConsolidapurmenEntity.tfps5,
  )
  tfps5002Consolidapurmen: Tfps5002ConsolidapurmenEntity[];

  @OneToMany(
    () => Tfps5002DmdevEntity,
    (tfps5002DmdevEntity) => tfps5002DmdevEntity.tfps5,
  )
  tfps5002Dmdevs: Tfps5002DmdevEntity[];

  @OneToMany(
    () => Tfps5002InfoircomplemEntity,
    (tfps5002InfoircomplemEntity) => tfps5002InfoircomplemEntity.tfps5,
  )
  tfps5002Infoircomplems: Tfps5002InfoircomplemEntity[];

  @OneToMany(
    () => Tfps5002InfoirrfEntity,
    (tfps5002InfoirrfEntity) => tfps5002InfoirrfEntity.tfps5,
  )
  tfps5002Infoirrfs: Tfps5002InfoirrfEntity[];
}
