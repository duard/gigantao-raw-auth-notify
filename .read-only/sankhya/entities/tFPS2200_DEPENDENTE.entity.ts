import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps2200Entity } from './tFPS2200.entity';

@Index(
  'PK_TFPS2200_DEPENDENTE',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'chavepai', 'chave'],
  {
    unique: true,
  },
)
@Entity('TFPS2200_DEPENDENTE', { schema: 'SANKHYA' })
export class Tfps2200DependenteEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'TPDEP', nullable: true, length: 2 })
  tpdep: string | null;

  @Column('varchar', { name: 'NMDEP', nullable: true, length: 70 })
  nmdep: string | null;

  @Column('datetime', { name: 'DTNASCTO', nullable: true })
  dtnascto: Date | null;

  @Column('varchar', { name: 'CPFDEP', nullable: true, length: 11 })
  cpfdep: string | null;

  @Column('char', { name: 'DEPIRRF', nullable: true, length: 1 })
  depirrf: string | null;

  @Column('char', { name: 'DEPSF', nullable: true, length: 1 })
  depsf: string | null;

  @Column('char', { name: 'INCTRAB', nullable: true, length: 1 })
  inctrab: string | null;

  @Column('varchar', { primary: true, name: 'CHAVEPAI', length: 100 })
  chavepai: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('char', {
    primary: true,
    name: 'TPAMB',
    length: 1,
    default: () => "'T'",
  })
  tpamb: string;

  @Column('varchar', { name: 'SEXODEP', nullable: true, length: 1 })
  sexodep: string | null;

  @Column('varchar', { name: 'DESCRDPD', nullable: true, length: 99 })
  descrdpd: string | null;

  @ManyToOne(
    () => Tfps2200Entity,
    (tfps2200Entity) => tfps2200Entity.tfps2200Dependentes,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVEPAI', referencedColumnName: 'chave' },
  ])
  tfps2: Tfps2200Entity;
}
