import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps2501CalctribEntity } from './tFPS2501_CALCTRIB.entity';
import { Tfps2501Entity } from './tFPS2501.entity';
import { Tfps2501InfocrirrfEntity } from './tFPS2501_INFOCRIRRF.entity';
import { Tfps2501InfodepEntity } from './tFPS2501_INFODEP.entity';
import { Tfps2501InfoircomplemEntity } from './tFPS2501_INFOIRCOMPLEM.entity';

@Index(
  'PK_TFPS2501_IDETRAB',
  ['codemp', 'dtref', 'tpamb', 'chave2501', 'sequencia', 'chave'],
  {
    unique: true,
  },
)
@Entity('TFPS2501_IDETRAB', { schema: 'SANKHYA' })
export class Tfps2501IdetrabEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'CPFTRAB', nullable: true, length: 11 })
  cpftrab: string | null;

  @OneToMany(
    () => Tfps2501CalctribEntity,
    (tfps2501CalctribEntity) => tfps2501CalctribEntity.tfps2501Idetrab,
  )
  tfps2501Calctribs: Tfps2501CalctribEntity[];

  @ManyToOne(
    () => Tfps2501Entity,
    (tfps2501Entity) => tfps2501Entity.tfps2501Idetrabs,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE2501', referencedColumnName: 'chave' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tfps2: Tfps2501Entity;

  @OneToMany(
    () => Tfps2501InfocrirrfEntity,
    (tfps2501InfocrirrfEntity) => tfps2501InfocrirrfEntity.tfps2501Idetrab,
  )
  tfps2501Infocrirrfs: Tfps2501InfocrirrfEntity[];

  @OneToMany(
    () => Tfps2501InfodepEntity,
    (tfps2501InfodepEntity) => tfps2501InfodepEntity.tfps2501Idetrab,
  )
  tfps2501Infodeps: Tfps2501InfodepEntity[];

  @OneToMany(
    () => Tfps2501InfoircomplemEntity,
    (tfps2501InfoircomplemEntity) =>
      tfps2501InfoircomplemEntity.tfps2501Idetrab,
  )
  tfps2501Infoircomplems: Tfps2501InfoircomplemEntity[];
}
