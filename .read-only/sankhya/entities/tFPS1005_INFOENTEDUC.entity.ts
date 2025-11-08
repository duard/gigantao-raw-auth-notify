import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps1005Entity } from './tFPS1005.entity';

@Index(
  'PK_TFPS1005_INFOENTEDUC',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'filial', 'chave'],
  {
    unique: true,
  },
)
@Entity('TFPS1005_INFOENTEDUC', { schema: 'SANKHYA' })
export class Tfps1005InfoenteducEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'FILIAL', length: 100 })
  filial: string;

  @Column('varchar', { name: 'NRINSC', length: 15 })
  nrinsc: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('char', {
    primary: true,
    name: 'TPAMB',
    length: 1,
    default: () => "'T'",
  })
  tpamb: string;

  @ManyToOne(
    () => Tfps1005Entity,
    (tfps1005Entity) => tfps1005Entity.tfps1005Infoenteducs,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'FILIAL', referencedColumnName: 'chave' },
  ])
  tfps1: Tfps1005Entity;
}
