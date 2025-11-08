import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps1010Entity } from './tFPS1010.entity';

@Index(
  'PK_TFPS1010_IRRF',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'codevento', 'chave'],
  {
    unique: true,
  },
)
@Entity('TFPS1010_IRRF', { schema: 'SANKHYA' })
export class Tfps1010IrrfEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'NRPROCIRRF', nullable: true, length: 20 })
  nrprocirrf: string | null;

  @Column('int', { name: 'CODSUSPIRRF', nullable: true })
  codsuspirrf: number | null;

  @Column('varchar', { primary: true, name: 'CODEVENTO', length: 100 })
  codevento: string;

  @Column('char', {
    primary: true,
    name: 'TPAMB',
    length: 1,
    default: () => "'T'",
  })
  tpamb: string;

  @ManyToOne(
    () => Tfps1010Entity,
    (tfps1010Entity) => tfps1010Entity.tfps1010Irrfs,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CODEVENTO', referencedColumnName: 'chave' },
  ])
  tfps1: Tfps1010Entity;
}
