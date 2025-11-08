import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TRIACPRB',
  [
    'codemp',
    'dtref',
    'tpamb',
    'sequencia',
    'chave',
    'codativecon',
    'tipoajuste',
    'codajuste',
  ],
  { unique: true },
)
@Entity('TRIACPRB', { schema: 'SANKHYA' })
export class TriacprbEntity {
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

  @Column('varchar', { primary: true, name: 'CODATIVECON', length: 8 })
  codativecon: string;

  @Column('smallint', { primary: true, name: 'TIPOAJUSTE' })
  tipoajuste: number;

  @Column('smallint', { primary: true, name: 'CODAJUSTE' })
  codajuste: number;

  @Column('float', { name: 'VLRAJUSTE', precision: 53 })
  vlrajuste: number;

  @Column('varchar', { name: 'DESCRAJUSTE', length: 20 })
  descrajuste: string;
}
