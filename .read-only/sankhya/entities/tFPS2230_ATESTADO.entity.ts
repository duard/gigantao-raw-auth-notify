import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps2230Entity } from './tFPS2230.entity';

@Index(
  'PK_TFPS2230_ATESTADO',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'nuocor', 'chave'],
  {
    unique: true,
  },
)
@Entity('TFPS2230_ATESTADO', { schema: 'SANKHYA' })
export class Tfps2230AtestadoEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', {
    primary: true,
    name: 'TPAMB',
    length: 1,
    default: () => "'T'",
  })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'NUOCOR', length: 100 })
  nuocor: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'CODCID', nullable: true, length: 4 })
  codcid: string | null;

  @Column('smallint', { name: 'QTDDIASAFAST', nullable: true })
  qtddiasafast: number | null;

  @Column('varchar', { name: 'NMEMIT', nullable: true, length: 70 })
  nmemit: string | null;

  @Column('int', { name: 'IDEOC', nullable: true })
  ideoc: number | null;

  @Column('varchar', { name: 'NROC', nullable: true, length: 14 })
  nroc: string | null;

  @Column('varchar', { name: 'UFOC', nullable: true, length: 2 })
  ufoc: string | null;

  @ManyToOne(
    () => Tfps2230Entity,
    (tfps2230Entity) => tfps2230Entity.tfps2230Atestados,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'NUOCOR', referencedColumnName: 'chave' },
  ])
  tfps2: Tfps2230Entity;
}
