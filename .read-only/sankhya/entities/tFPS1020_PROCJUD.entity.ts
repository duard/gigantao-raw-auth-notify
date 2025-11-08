import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps1020Entity } from './tFPS1020.entity';

@Index(
  'PK_TFPS1020_PROCJUD',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'codlotacao', 'chave'],
  {
    unique: true,
  },
)
@Entity('TFPS1020_PROCJUD', { schema: 'SANKHYA' })
export class Tfps1020ProcjudEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'CODTERC', nullable: true, length: 4 })
  codterc: string | null;

  @Column('varchar', { name: 'NRPROCJUD', nullable: true, length: 20 })
  nrprocjud: string | null;

  @Column('int', { name: 'CODSUSP', nullable: true })
  codsusp: number | null;

  @Column('smallint', { name: 'CODREGFIS', nullable: true })
  codregfis: number | null;

  @Column('varchar', { primary: true, name: 'CODLOTACAO', length: 100 })
  codlotacao: string;

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
    () => Tfps1020Entity,
    (tfps1020Entity) => tfps1020Entity.tfps1020Procjuds,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CODLOTACAO', referencedColumnName: 'chave' },
  ])
  tfps1: Tfps1020Entity;
}
