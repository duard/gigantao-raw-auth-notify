import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps2500Entity } from './tFPS2500.entity';

@Index(
  'PK_TFPS2500_DEPENDENTE',
  ['codemp', 'dtref', 'tpamb', 'chave2500', 'sequencia', 'chave'],
  {
    unique: true,
  },
)
@Entity('TFPS2500_DEPENDENTE', { schema: 'SANKHYA' })
export class Tfps2500DependenteEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVE2500', length: 100 })
  chave2500: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'CPFDEP', nullable: true, length: 11 })
  cpfdep: string | null;

  @Column('varchar', { name: 'TPDEP', nullable: true, length: 2 })
  tpdep: string | null;

  @Column('varchar', { name: 'DESCDEP', nullable: true, length: 30 })
  descdep: string | null;

  @ManyToOne(
    () => Tfps2500Entity,
    (tfps2500Entity) => tfps2500Entity.tfps2500Dependentes,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE2500', referencedColumnName: 'chave' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tfps2: Tfps2500Entity;
}
