import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TFPS1060_FATORRISCO',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'codamb', 'chave'],
  {
    unique: true,
  },
)
@Entity('TFPS1060_FATORRISCO', { schema: 'SANKHYA' })
export class Tfps1060FatorriscoEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'CODFATRIS', nullable: true, length: 100 })
  codfatris: string | null;

  @Column('varchar', { primary: true, name: 'CODAMB', length: 100 })
  codamb: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('char', {
    primary: true,
    name: 'TPAMB',
    length: 1,
    default: () => "'T'",
  })
  tpamb: string;
}
