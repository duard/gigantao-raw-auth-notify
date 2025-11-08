import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps1260IdeadquirEntity } from './tFPS1260_IDEADQUIR.entity';
import { Tfps1260Entity } from './tFPS1260.entity';

@Index(
  'PK_TFPS1260_TPCOMERC',
  ['codemp', 'dtref', 'sequencia', 'tpamb', 'chave1260', 'chave'],
  {
    unique: true,
  },
)
@Entity('TFPS1260_TPCOMERC', { schema: 'SANKHYA' })
export class Tfps1260TpcomercEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('varchar', { primary: true, name: 'CHAVE1260', length: 100 })
  chave1260: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('smallint', { name: 'INDCOMERC', nullable: true })
  indcomerc: number | null;

  @Column('float', { name: 'VRTOTCOM', nullable: true, precision: 53 })
  vrtotcom: number | null;

  @OneToMany(
    () => Tfps1260IdeadquirEntity,
    (tfps1260IdeadquirEntity) => tfps1260IdeadquirEntity.tfps1260Tpcomerc,
  )
  tfps1260Ideadquirs: Tfps1260IdeadquirEntity[];

  @ManyToOne(
    () => Tfps1260Entity,
    (tfps1260Entity) => tfps1260Entity.tfps1260Tpcomercs,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE1260', referencedColumnName: 'chave' },
  ])
  tfps1: Tfps1260Entity;
}
