import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps2200Entity } from './tFPS2200.entity';

@Index(
  'PK_TFPS2200_TFPFTRC',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'chavepai', 'chave'],
  {
    unique: true,
  },
)
@Entity('TFPS2200_TFPFTRC', { schema: 'SANKHYA' })
export class Tfps2200TfpftrcEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', {
    primary: true,
    name: 'TPAMB',
    length: 1,
    default: () => "'T'",
  })
  tpamb: string;

  @Column('varchar', { primary: true, name: 'CHAVEPAI', length: 100 })
  chavepai: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('int', { name: 'CODTREICAP' })
  codtreicap: number;

  @ManyToOne(
    () => Tfps2200Entity,
    (tfps2200Entity) => tfps2200Entity.tfps2200Tfpftrcs,
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
