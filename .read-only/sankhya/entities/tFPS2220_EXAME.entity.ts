import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps2220Entity } from './tFPS2220.entity';

@Index(
  'PK_TFPS2220_EXAME',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave2220', 'chave'],
  {
    unique: true,
  },
)
@Entity('TFPS2220_EXAME', { schema: 'SANKHYA' })
export class Tfps2220ExameEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('varchar', { primary: true, name: 'CHAVE2220', length: 100 })
  chave2220: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('datetime', { name: 'DTEXM', nullable: true })
  dtexm: Date | null;

  @Column('smallint', { name: 'PROCREALIZADO', nullable: true })
  procrealizado: number | null;

  @Column('varchar', { name: 'OBSPROC', nullable: true, length: 999 })
  obsproc: string | null;

  @Column('smallint', { name: 'ORDEXAME', nullable: true })
  ordexame: number | null;

  @Column('smallint', { name: 'INDRESULT', nullable: true })
  indresult: number | null;

  @ManyToOne(
    () => Tfps2220Entity,
    (tfps2220Entity) => tfps2220Entity.tfps2220Exames,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVE2220', referencedColumnName: 'chave' },
  ])
  tfps2: Tfps2220Entity;
}
