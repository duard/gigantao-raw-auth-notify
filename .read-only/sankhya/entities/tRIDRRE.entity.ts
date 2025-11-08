import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TRIDRRE',
  [
    'codemp',
    'dtref',
    'tpamb',
    'sequencia',
    'chave',
    'cnpjassocdesp',
    'tprepasse',
  ],
  { unique: true },
)
@Entity('TRIDRRE', { schema: 'SANKHYA' })
export class TridrreEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 255 })
  chave: string;

  @Column('varchar', { primary: true, name: 'CNPJASSOCDESP', length: 14 })
  cnpjassocdesp: string;

  @Column('smallint', { primary: true, name: 'TPREPASSE' })
  tprepasse: number;

  @Column('varchar', { name: 'DESCRECURSO', nullable: true, length: 20 })
  descrecurso: string | null;

  @Column('float', { name: 'VLRBRUTO', nullable: true, precision: 53 })
  vlrbruto: number | null;

  @Column('float', { name: 'VLRRETAPUR', nullable: true, precision: 53 })
  vlrretapur: number | null;

  @Column('float', { name: 'VLRBASEAPUR', nullable: true, precision: 53 })
  vlrbaseapur: number | null;

  @Column('int', { name: 'CODPARCASSOCDESP', nullable: true })
  codparcassocdesp: number | null;
}
