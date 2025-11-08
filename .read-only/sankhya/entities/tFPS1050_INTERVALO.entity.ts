import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps1050Entity } from './tFPS1050.entity';

@Index(
  'PK_TFPS1050_INTERVALO',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'codcargahoresocial', 'chave'],
  { unique: true },
)
@Entity('TFPS1050_INTERVALO', { schema: 'SANKHYA' })
export class Tfps1050IntervaloEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CODCARGAHORESOCIAL', length: 100 })
  codcargahoresocial: string;

  @Column('varchar', { name: 'INIINTERV', nullable: true, length: 4 })
  iniinterv: string | null;

  @Column('varchar', { name: 'TERMINTERV', nullable: true, length: 4 })
  terminterv: string | null;

  @Column('smallint', { name: 'DURINTERV', nullable: true })
  durinterv: number | null;

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
    () => Tfps1050Entity,
    (tfps1050Entity) => tfps1050Entity.tfps1050Intervalos,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CODCARGAHORESOCIAL', referencedColumnName: 'chave' },
  ])
  tfps1: Tfps1050Entity;
}
