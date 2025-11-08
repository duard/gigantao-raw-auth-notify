import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCBIRPJPTBCP', ['codemp', 'referencia', 'codctactb', 'sequencia'], {
  unique: true,
})
@Entity('TCBIRPJPTBCP', { schema: 'SANKHYA' })
export class TcbirpjptbcpEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'CODCTACTB' })
  codctactb: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'CODCONTA' })
  codconta: number;

  @Column('varchar', { name: 'DESCRCONTA', nullable: true, length: 50 })
  descrconta: string | null;

  @Column('varchar', { name: 'CODPADRAOPTB', nullable: true, length: 10 })
  codpadraoptb: string | null;

  @Column('char', { name: 'INDLANC', nullable: true, length: 2 })
  indlanc: string | null;

  @Column('char', { name: 'CODTRIB', nullable: true, length: 1 })
  codtrib: string | null;

  @Column('float', { name: 'VLRLANC', nullable: true, precision: 53 })
  vlrlanc: number | null;

  @Column('char', { name: 'REVATRIBDIF', nullable: true, length: 1 })
  revatribdif: string | null;

  @Column('varchar', { name: 'TABELA', nullable: true, length: 15 })
  tabela: string | null;
}
