import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TFPSEVENTO_2206_ANT',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave'],
  {
    unique: true,
  },
)
@Entity('TFPSEVENTO_2206_ANT', { schema: 'SANKHYA' })
export class Tfpsevento_2206AntEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('varchar', { name: 'NRORECIBO', nullable: true, length: 50 })
  nrorecibo: string | null;

  @Column('varchar', { name: 'NRORECIBO_ANT', nullable: true, length: 50 })
  nroreciboAnt: string | null;

  @Column('char', { name: 'ACAO', nullable: true, length: 1 })
  acao: string | null;

  @Column('char', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;
}
