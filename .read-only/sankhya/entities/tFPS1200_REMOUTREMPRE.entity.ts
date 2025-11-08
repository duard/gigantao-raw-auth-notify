import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps1200Entity } from './tFPS1200.entity';

@Index(
  'PK_TFPS1200_REMOUTREMPRE',
  ['codemp', 'dtref', 'sequencia', 'tpamb', 'chave1200', 'chave'],
  { unique: true },
)
@Entity('TFPS1200_REMOUTREMPRE', { schema: 'SANKHYA' })
export class Tfps1200RemoutrempreEntity {
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

  @Column('smallint', { name: 'TPINSC', nullable: true })
  tpinsc: number | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 15 })
  nrinsc: string | null;

  @Column('smallint', { name: 'CODCATEG', nullable: true })
  codcateg: number | null;

  @Column('float', { name: 'VLRREMUNOE', nullable: true, precision: 53 })
  vlrremunoe: number | null;

  @ManyToOne(
    () => Tfps1200Entity,
    (tfps1200Entity) => tfps1200Entity.tfps1200Remoutrempres,
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
