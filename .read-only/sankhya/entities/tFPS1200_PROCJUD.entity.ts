import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps1200Entity } from './tFPS1200.entity';

@Index(
  'PK_TFPS1200_PROCJUD',
  ['codemp', 'dtref', 'sequencia', 'tpamb', 'chave1200', 'chave'],
  {
    unique: true,
  },
)
@Entity('TFPS1200_PROCJUD', { schema: 'SANKHYA' })
export class Tfps1200ProcjudEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE1200', length: 100 })
  chave1200: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('smallint', { name: 'TPTRIB', nullable: true })
  tptrib: number | null;

  @Column('varchar', { name: 'NRPROCJUD', nullable: true, length: 50 })
  nrprocjud: string | null;

  @Column('varchar', { name: 'CODSUSP', nullable: true, length: 14 })
  codsusp: string | null;

  @ManyToOne(
    () => Tfps1200Entity,
    (tfps1200Entity) => tfps1200Entity.tfps1200Procjuds,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE1200', referencedColumnName: 'chave' },
  ])
  tfps1: Tfps1200Entity;
}
