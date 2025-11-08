import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps2399Entity } from './tFPS2399.entity';

@Index(
  'PK_TFPS2399_REMOUTREMPRE',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave2399', 'chave'],
  { unique: true },
)
@Entity('TFPS2399_REMOUTREMPRE', { schema: 'SANKHYA' })
export class Tfps2399RemoutrempreEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE2399', length: 100 })
  chave2399: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('smallint', { name: 'TPINSC', nullable: true })
  tpinsc: number | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 15 })
  nrinsc: string | null;

  @Column('smallint', { name: 'CODCATEG', nullable: true })
  codcateg: number | null;

  @Column('float', { name: 'VLRREMUNOE', nullable: true, precision: 53 })
  vlrremunoe: number | null;

  @ManyToOne(
    () => Tfps2399Entity,
    (tfps2399Entity) => tfps2399Entity.tfps2399Remoutrempres,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVE2399', referencedColumnName: 'chave' },
  ])
  tfps2: Tfps2399Entity;
}
