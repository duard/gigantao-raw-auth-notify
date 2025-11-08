import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps5002BasesirrfEntity } from './tFPS5002_BASESIRRF.entity';
import { Tfps5002Entity } from './tFPS5002.entity';
import { Tfps5002IrrfEntity } from './tFPS5002_IRRF.entity';

@Index(
  'PK_TFPS5002_INFOIRRF',
  ['dtref', 'codempmatriz', 'cpf', 'codcateg', 'indresbr'],
  {
    unique: true,
  },
)
@Entity('TFPS5002_INFOIRRF', { schema: 'SANKHYA' })
export class Tfps5002InfoirrfEntity {
  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'CODEMPMATRIZ' })
  codempmatriz: number;

  @Column('varchar', { primary: true, name: 'CPF', length: 11 })
  cpf: string;

  @Column('smallint', { primary: true, name: 'CODCATEG' })
  codcateg: number;

  @Column('char', { primary: true, name: 'INDRESBR', length: 1 })
  indresbr: string;

  @Column('smallint', { name: 'CODPAIS', nullable: true })
  codpais: number | null;

  @Column('smallint', { name: 'INDNIF', nullable: true })
  indnif: number | null;

  @Column('varchar', { name: 'NIFBENEF', nullable: true, length: 20 })
  nifbenef: string | null;

  @Column('varchar', { name: 'DSCLOGRAD', nullable: true, length: 80 })
  dsclograd: string | null;

  @Column('varchar', { name: 'NRLOGRAD', nullable: true, length: 10 })
  nrlograd: string | null;

  @Column('varchar', { name: 'COMPLEM', nullable: true, length: 30 })
  complem: string | null;

  @Column('varchar', { name: 'BAIRRO', nullable: true, length: 60 })
  bairro: string | null;

  @Column('varchar', { name: 'NMCID', nullable: true, length: 50 })
  nmcid: string | null;

  @Column('varchar', { name: 'CODPOSTAL', nullable: true, length: 15 })
  codpostal: string | null;

  @OneToMany(
    () => Tfps5002BasesirrfEntity,
    (tfps5002BasesirrfEntity) => tfps5002BasesirrfEntity.tfps5002Infoirrf,
  )
  tfps5002Basesirrfs: Tfps5002BasesirrfEntity[];

  @ManyToOne(
    () => Tfps5002Entity,
    (tfps5002Entity) => tfps5002Entity.tfps5002Infoirrfs,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'CODEMPMATRIZ', referencedColumnName: 'codempmatriz' },
    { name: 'CPF', referencedColumnName: 'cpf' },
  ])
  tfps5: Tfps5002Entity;

  @OneToMany(
    () => Tfps5002IrrfEntity,
    (tfps5002IrrfEntity) => tfps5002IrrfEntity.tfps5002Infoirrf,
  )
  tfps5002Irrfs: Tfps5002IrrfEntity[];
}
