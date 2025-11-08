import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TFPSEVENTO_2299_ANT',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave'],
  {
    unique: true,
  },
)
@Index('TFPSEVENTO_2299_ANT_I01', ['codemp', 'chave'], {})
@Index('TFPSEVENTO_2299_ANT_I02', ['codemp', 'chave'], {})
@Entity('TFPSEVENTO_2299_ANT', { schema: 'SANKHYA' })
export class Tfpsevento_2299AntEntity {
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
}
