import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TriaqprresEntity } from './tRIAQPRRES.entity';
import { TricpprresEntity } from './tRICPPRRES.entity';
import { TricprbresEntity } from './tRICPRBRES.entity';
import { TripniresEntity } from './tRIPNIRES.entity';
import { TrippfresEntity } from './tRIPPFRES.entity';
import { TrippjresEntity } from './tRIPPJRES.entity';
import { TrircspresEntity } from './tRIRCSPRES.entity';
import { TrircstresEntity } from './tRIRCSTRES.entity';
import { TrireadresEntity } from './tRIREADRES.entity';
import { TricabEntity } from './tRICAB.entity';
import { TrirradresEntity } from './tRIRRADRES.entity';
import { TrirrcresEntity } from './tRIRRCRES.entity';

@Index('PK_TRIRES', ['codemp', 'dtref', 'tpamb', 'sequencia'], { unique: true })
@Entity('TRIRES', { schema: 'SANKHYA' })
export class TriresEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'TPINSC', nullable: true })
  tpinsc: number | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 14 })
  nrinsc: string | null;

  @Column('datetime', { name: 'DHPROCESS', nullable: true })
  dhprocess: Date | null;

  @Column('varchar', { name: 'IDEV', nullable: true, length: 36 })
  idev: string | null;

  @Column('varchar', { name: 'NRRECARQBASE', nullable: true, length: 52 })
  nrrecarqbase: string | null;

  @Column('smallint', { name: 'INDEXISTINFO', nullable: true })
  indexistinfo: number | null;

  @OneToMany(
    () => TriaqprresEntity,
    (triaqprresEntity) => triaqprresEntity.trires,
  )
  triaqprres: TriaqprresEntity[];

  @OneToMany(
    () => TricpprresEntity,
    (tricpprresEntity) => tricpprresEntity.trires,
  )
  tricpprres: TricpprresEntity[];

  @OneToMany(
    () => TricprbresEntity,
    (tricprbresEntity) => tricprbresEntity.trires,
  )
  tricprbres: TricprbresEntity[];

  @OneToMany(() => TripniresEntity, (tripniresEntity) => tripniresEntity.trires)
  tripnires: TripniresEntity[];

  @OneToMany(() => TrippfresEntity, (trippfresEntity) => trippfresEntity.trires)
  trippfres: TrippfresEntity[];

  @OneToMany(() => TrippjresEntity, (trippjresEntity) => trippjresEntity.trires)
  trippjres: TrippjresEntity[];

  @OneToMany(
    () => TrircspresEntity,
    (trircspresEntity) => trircspresEntity.trires,
  )
  trircspres: TrircspresEntity[];

  @OneToMany(
    () => TrircstresEntity,
    (trircstresEntity) => trircstresEntity.trires,
  )
  trircstres: TrircstresEntity[];

  @OneToMany(
    () => TrireadresEntity,
    (trireadresEntity) => trireadresEntity.trires,
  )
  trireadres: TrireadresEntity[];

  @ManyToOne(() => TricabEntity, (tricabEntity) => tricabEntity.trires)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
  ])
  tricab: TricabEntity;

  @OneToMany(
    () => TrirradresEntity,
    (trirradresEntity) => trirradresEntity.trires,
  )
  trirradres: TrirradresEntity[];

  @OneToMany(() => TrirrcresEntity, (trirrcresEntity) => trirrcresEntity.trires)
  trirrcres: TrirrcresEntity[];
}
