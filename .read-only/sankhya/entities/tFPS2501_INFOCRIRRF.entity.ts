import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps2501DeddepenEntity } from './tFPS2501_DEDDEPEN.entity';
import { Tfps2501IdetrabEntity } from './tFPS2501_IDETRAB.entity';
import { Tfps2501InfoirEntity } from './tFPS2501_INFOIR.entity';
import { Tfps2501InfoprocretEntity } from './tFPS2501_INFOPROCRET.entity';
import { Tfps2501InforraEntity } from './tFPS2501_INFORRA.entity';
import { Tfps2501PenalimEntity } from './tFPS2501_PENALIM.entity';

@Index(
  'PK_TFPS2501_INFOCRIRRF',
  [
    'codemp',
    'dtref',
    'tpamb',
    'chave2501',
    'sequencia',
    'chaveidetrab',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS2501_INFOCRIRRF', { schema: 'SANKHYA' })
export class Tfps2501InfocrirrfEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'TPAMB',
    length: 1,
    default: () => "'T'",
  })
  tpamb: string;

  @Column('varchar', { primary: true, name: 'CHAVE2501', length: 100 })
  chave2501: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVEIDETRAB', length: 100 })
  chaveidetrab: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('int', { name: 'TPCR', nullable: true })
  tpcr: number | null;

  @Column('float', { name: 'VRCR', nullable: true, precision: 53 })
  vrcr: number | null;

  @Column('float', { name: 'VRCR13', nullable: true, precision: 53 })
  vrcr13: number | null;

  @OneToMany(
    () => Tfps2501DeddepenEntity,
    (tfps2501DeddepenEntity) => tfps2501DeddepenEntity.tfps2501Infocrirrf,
  )
  tfps2501Deddepens: Tfps2501DeddepenEntity[];

  @ManyToOne(
    () => Tfps2501IdetrabEntity,
    (tfps2501IdetrabEntity) => tfps2501IdetrabEntity.tfps2501Infocrirrfs,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE2501', referencedColumnName: 'chave2501' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVEIDETRAB', referencedColumnName: 'chave' },
  ])
  tfps2501Idetrab: Tfps2501IdetrabEntity;

  @OneToMany(
    () => Tfps2501InfoirEntity,
    (tfps2501InfoirEntity) => tfps2501InfoirEntity.tfps2501Infocrirrf,
  )
  tfps2501Infoirs: Tfps2501InfoirEntity[];

  @OneToMany(
    () => Tfps2501InfoprocretEntity,
    (tfps2501InfoprocretEntity) => tfps2501InfoprocretEntity.tfps2501Infocrirrf,
  )
  tfps2501Infoprocrets: Tfps2501InfoprocretEntity[];

  @OneToMany(
    () => Tfps2501InforraEntity,
    (tfps2501InforraEntity) => tfps2501InforraEntity.tfps2501Infocrirrf,
  )
  tfps2501Inforras: Tfps2501InforraEntity[];

  @OneToMany(
    () => Tfps2501PenalimEntity,
    (tfps2501PenalimEntity) => tfps2501PenalimEntity.tfps2501Infocrirrf,
  )
  tfps2501Penalims: Tfps2501PenalimEntity[];
}
