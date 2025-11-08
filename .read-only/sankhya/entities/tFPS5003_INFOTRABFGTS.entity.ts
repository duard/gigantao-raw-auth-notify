import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps5003BaseperapurEntity } from './tFPS5003_BASEPERAPUR.entity';
import { Tfps5003EconsignadoEntity } from './tFPS5003_ECONSIGNADO.entity';
import { Tfps5003InfobaseperanteEntity } from './tFPS5003_INFOBASEPERANTE.entity';
import { Tfps5003IdeestabEntity } from './tFPS5003_IDEESTAB.entity';

@Index('PK_TFPS5003_INFOTRABFGTS', ['cods5003Infotrabfgts'], { unique: true })
@Index('TFPS5003_INFOTRABFGTS_I01', ['cods5003Ideestab'], {})
@Entity('TFPS5003_INFOTRABFGTS', { schema: 'SANKHYA' })
export class Tfps5003InfotrabfgtsEntity {
  @Column('int', { primary: true, name: 'CODS5003_INFOTRABFGTS' })
  cods5003Infotrabfgts: number;

  @Column('int', { name: 'CODS5003_IDEESTAB' })
  cods5003Ideestab: number;

  @Column('varchar', { name: 'MATRICULA', nullable: true, length: 30 })
  matricula: string | null;

  @Column('varchar', { name: 'CODCATEG', nullable: true, length: 14 })
  codcateg: string | null;

  @Column('varchar', { name: 'CATEGORIG', nullable: true, length: 3 })
  categorig: string | null;

  @Column('varchar', { name: 'TPREGTRAB', nullable: true, length: 1 })
  tpregtrab: string | null;

  @Column('varchar', { name: 'REMUNSUC', nullable: true, length: 1 })
  remunsuc: string | null;

  @Column('datetime', { name: 'DTDESLIG', nullable: true })
  dtdeslig: Date | null;

  @Column('varchar', { name: 'MTVDESLIG', nullable: true, length: 2 })
  mtvdeslig: string | null;

  @Column('datetime', { name: 'DTTERM', nullable: true })
  dtterm: Date | null;

  @Column('varchar', { name: 'MTVDESLIGTSV', nullable: true, length: 2 })
  mtvdesligtsv: string | null;

  @Column('varchar', { name: 'TPINSCANT', nullable: true, length: 1 })
  tpinscant: string | null;

  @Column('varchar', { name: 'NRINSCANT', nullable: true, length: 14 })
  nrinscant: string | null;

  @Column('varchar', { name: 'MATRICULAANT', nullable: true, length: 30 })
  matriculaant: string | null;

  @Column('datetime', { name: 'DTADM', nullable: true })
  dtadm: Date | null;

  @Column('varchar', { name: 'NRPROCJUD', nullable: true, length: 20 })
  nrprocjud: string | null;

  @OneToMany(
    () => Tfps5003BaseperapurEntity,
    (tfps5003BaseperapurEntity) =>
      tfps5003BaseperapurEntity.cods5003Infotrabfgts2,
  )
  tfps5003Baseperapurs: Tfps5003BaseperapurEntity[];

  @OneToMany(
    () => Tfps5003EconsignadoEntity,
    (tfps5003EconsignadoEntity) =>
      tfps5003EconsignadoEntity.cods5003Infotrabfgts,
  )
  tfps5003Econsignados: Tfps5003EconsignadoEntity[];

  @OneToMany(
    () => Tfps5003InfobaseperanteEntity,
    (tfps5003InfobaseperanteEntity) =>
      tfps5003InfobaseperanteEntity.cods5003Infotrabfgts2,
  )
  tfps5003Infobaseperantes: Tfps5003InfobaseperanteEntity[];

  @ManyToOne(
    () => Tfps5003IdeestabEntity,
    (tfps5003IdeestabEntity) => tfps5003IdeestabEntity.tfps5003Infotrabfgts,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODS5003_IDEESTAB', referencedColumnName: 'cods5003Ideestab' },
  ])
  cods5003Ideestab2: Tfps5003IdeestabEntity;
}
