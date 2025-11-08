import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps2501InfocrirrfEntity } from './tFPS2501_INFOCRIRRF.entity';
import { Tfps2501InfovaloresEntity } from './tFPS2501_INFOVALORES.entity';

@Index(
  'PK_TFPS2501_INFOPROCRET',
  [
    'codemp',
    'dtref',
    'tpamb',
    'chave2501',
    'sequencia',
    'chaveinfocrirrf',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS2501_INFOPROCRET', { schema: 'SANKHYA' })
export class Tfps2501InfoprocretEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVEINFOCRIRRF', length: 100 })
  chaveinfocrirrf: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'TPPROCRET', length: 1 })
  tpprocret: string;

  @Column('varchar', { name: 'NRPROCRET', length: 21 })
  nrprocret: string;

  @Column('varchar', { name: 'CODSUSP', nullable: true, length: 14 })
  codsusp: string | null;

  @ManyToOne(
    () => Tfps2501InfocrirrfEntity,
    (tfps2501InfocrirrfEntity) => tfps2501InfocrirrfEntity.tfps2501Infoprocrets,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE2501', referencedColumnName: 'chave2501' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVEIDETRAB', referencedColumnName: 'chaveidetrab' },
    { name: 'CHAVEINFOCRIRRF', referencedColumnName: 'chave' },
  ])
  tfps2501Infocrirrf: Tfps2501InfocrirrfEntity;

  @OneToMany(
    () => Tfps2501InfovaloresEntity,
    (tfps2501InfovaloresEntity) =>
      tfps2501InfovaloresEntity.tfps2501Infoprocret,
  )
  tfps2501Infovalores: Tfps2501InfovaloresEntity[];
}
