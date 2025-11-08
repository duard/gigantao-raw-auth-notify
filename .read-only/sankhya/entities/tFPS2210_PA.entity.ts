import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps2210Entity } from './tFPS2210.entity';

@Index(
  'PK_TFPS2210_PA',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave2210', 'chave'],
  {
    unique: true,
  },
)
@Entity('TFPS2210_PA', { schema: 'SANKHYA' })
export class Tfps2210PaEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('varchar', { primary: true, name: 'CHAVE2210', length: 100 })
  chave2210: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('int', { name: 'CODPARTEATING', nullable: true })
  codparteating: number | null;

  @Column('smallint', { name: 'LATERALIDADE', nullable: true })
  lateralidade: number | null;

  @ManyToOne(
    () => Tfps2210Entity,
    (tfps2210Entity) => tfps2210Entity.tfps2210Pas,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVE2210', referencedColumnName: 'chave' },
  ])
  tfps2: Tfps2210Entity;
}
