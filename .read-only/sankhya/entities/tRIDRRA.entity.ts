import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TRIDRRA',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave', 'cnpjassocdesp'],
  {
    unique: true,
  },
)
@Entity('TRIDRRA', { schema: 'SANKHYA' })
export class TridrraEntity {
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

  @Column('float', { name: 'VLRTOTALREP', nullable: true, precision: 53 })
  vlrtotalrep: number | null;

  @Column('float', { name: 'VLRTOTALRET', nullable: true, precision: 53 })
  vlrtotalret: number | null;

  @Column('float', { name: 'VLRTOTALNRET', nullable: true, precision: 53 })
  vlrtotalnret: number | null;

  @Column('float', { name: 'VLRTOTALBASERET', nullable: true, precision: 53 })
  vlrtotalbaseret: number | null;

  @Column('int', { name: 'CODPARCASSOCDESP', nullable: true })
  codparcassocdesp: number | null;

  @Column('char', { name: 'RECEMPREXT', nullable: true, length: 1 })
  recemprext: string | null;

  @Column('char', { name: 'NMEMPREXT', nullable: true, length: 100 })
  nmemprext: string | null;
}
