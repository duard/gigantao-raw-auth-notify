import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TRINRN',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave', 'natrend'],
  { unique: true },
)
@Entity('TRINRN', { schema: 'SANKHYA' })
export class TrinrnEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 255 })
  chave: string;

  @Column('smallint', { primary: true, name: 'NATREND' })
  natrend: number;

  @Column('varchar', { name: 'OBSERV', nullable: true, length: 200 })
  observ: string | null;
}
